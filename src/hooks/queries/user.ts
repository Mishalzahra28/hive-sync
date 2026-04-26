import { useQuery } from '@tanstack/react-query';

import { getBrowserUser } from '@/lib/auth/browser-user';

import { QueryKeys } from '@/constants/query-keys';

import type { AuthUser } from '@/types/auth-user';

export const useUser = () => {
  return useQuery<AuthUser | null>({
    queryKey: [QueryKeys.USER],
    queryFn: getBrowserUser,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
