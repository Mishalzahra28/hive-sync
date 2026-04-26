import { createSafeActionClient } from 'next-safe-action';

import { getServerUser } from '@/lib/auth/server-user';

export const safeActionClient = createSafeActionClient({
  defaultValidationErrorsShape: 'flattened',
  handleServerError: (error) => error.message,
});

export const authActionClient = safeActionClient.use(async ({ next }) => {
  const authUser = await getServerUser();
  if (!authUser) throw new Error('Unauthorized');
  return next({ ctx: { authUser } });
});
