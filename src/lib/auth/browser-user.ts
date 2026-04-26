import type { AuthUser } from '@/types/auth-user';

/**
 * Resolves the current user in the browser. Returns null when unauthenticated
 * or when no client-side session is configured yet.
 */
export async function getBrowserUser(): Promise<AuthUser | null> {
  return null;
}
