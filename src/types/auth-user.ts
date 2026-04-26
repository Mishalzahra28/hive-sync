/**
 * Application user for auth checks (client hooks, `authQuery`, `authActionClient`).
 * Wire `getBrowserUser` / `getServerUser` to your session source when you add auth.
 */
export type AuthUser = {
  id: string;
  email?: string | null;
  user_metadata?: {
    user_type?: string;
  };
};
