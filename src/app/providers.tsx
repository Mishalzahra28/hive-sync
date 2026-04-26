'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useMemo } from 'react';

import { TooltipProvider } from '@/components/ui/tooltip';

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: AppProviderProps) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>{children}</TooltipProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
