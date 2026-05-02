import { Resend } from 'resend';

import { env } from '@/env';

let cached: Resend | null = null;

export function resend() {
  if (cached) return cached;
  cached = new Resend(env.RESEND_API_KEY);
  return cached;
}
