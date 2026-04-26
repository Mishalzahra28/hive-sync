import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@/constants/query-keys';

export const useSample = () => {
  return useQuery({
    queryKey: [QueryKeys.SAMPLE],
    queryFn: async () => {
      // Replace with your API or data source when a backend is connected.
      return [] as { id: string; created_at: string }[];
    },
  });
};
