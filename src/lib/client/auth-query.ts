import { z, ZodError, ZodSchema } from 'zod';

import { getBrowserUser } from '@/lib/auth/browser-user';

import type { AuthUser } from '@/types/auth-user';

/** Custom user types that can be used to restrict access to queries */
type UserType = 'your-custom-user-type' | 'another-custom-user-type';

/** Extracts the inferred type from a Zod schema, or undefined if no schema is provided */
type SchemaType<T> = T extends ZodSchema ? z.infer<T> : undefined;

/** Context object passed to query handlers containing user and validated parameters */
type QueryFunctionContext<T extends ZodSchema | undefined> = {
  user: AuthUser;
  params: SchemaType<T>;
};

/** Handler function type for authenticated queries */
type QueryHandler<T extends ZodSchema | undefined, R> = (
  ctx: QueryFunctionContext<T>,
) => Promise<R>;

/** Configuration options for authenticated queries */
type QueryOptions<T extends ZodSchema | undefined> = {
  /** Optional Zod schema to validate query parameters */
  paramsSchema?: T;
  /** Optional array of allowed user types that can access this query */
  userType?: UserType[];
};

/**
 * Creates an authenticated query function that handles user authentication and parameter validation
 * @template T - The Zod schema type for parameters (or undefined if no schema)
 * @template R - The return type of the query
 * @param handler - The query handler function that implements the business logic
 * @param options - Optional configuration for parameter validation and user type restrictions
 * @returns A function that can be called with parameters to execute the authenticated query
 * @throws {Error} If the user is not authenticated
 * @throws {Error} If the user's type is not allowed to access the query
 * @throws {Error} If the parameters fail validation
 */
export function authQuery<T extends ZodSchema | undefined, R>(
  handler: QueryHandler<T, R>,
  options: QueryOptions<T> = {},
) {
  return async (params?: SchemaType<T>): Promise<R> => {
    const user = await getBrowserUser();
    if (!user) {
      throw new Error('Unauthorized');
    }
    if (
      options.userType &&
      !options.userType.includes(
        user.user_metadata?.user_type as UserType,
      )
    ) {
      throw new Error(
        `You must be a ${options.userType.join(' or ')} to access this data`,
      );
    }

    if (options.paramsSchema) {
      try {
        params = options.paramsSchema.parse(params);
      } catch (error) {
        if (error instanceof ZodError) {
          throw new Error('Invalid parameters');
        }
        throw error;
      }
    }

    return handler({ user, params: params as SchemaType<T> });
  };
}
