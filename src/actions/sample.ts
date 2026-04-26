'use server';

import { safeActionClient } from '@/lib/server/safe-action';

import { sampleSchema } from '@/schema/sample';

export const createSample = safeActionClient
  .schema(sampleSchema)
  .action(async ({ parsedInput }) => {
    void parsedInput;
    return { success: true };
  });
