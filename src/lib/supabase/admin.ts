import { createClient } from '@supabase/supabase-js'

import { env } from '@/env'

let cached: ReturnType<typeof createClient> | null = null

export function supabaseAdmin() {
  if (cached) return cached
  cached = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
  return cached
}
