import type { AuthUser } from '@/types/auth-user';

/**
 * Resolves the current user on the server (e.g. session/cookies).
 * Returns null when unauthenticated or when no server session is configured yet.
 */
export async function getServerUser(): Promise<AuthUser | null> {
  return null;
}
