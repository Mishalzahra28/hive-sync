import { Metadata } from 'next';

import { Careers } from '@/components/careers/careers';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Hive Sync team and help us build the future of managed IT and cybersecurity. Explore our current job openings.',
};

export default function CareersPage() {
  return <Careers />;
}
