'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

import { SalesIntakeForm } from '@/components/sections/pricing-form';

function GetStartedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tier = searchParams.get('tier') ?? undefined;

  return (
    <SalesIntakeForm defaultProjectType={tier} />
  );
}

export default function GetStartedPage() {
  return (
    <Suspense>
      <GetStartedContent />
    </Suspense>
  );
}
