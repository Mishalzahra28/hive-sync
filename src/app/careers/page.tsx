import { Metadata } from 'next';

import { Careers } from '@/components/careers/careers';

import getMetadata from '@/config/app';

export const metadata: Metadata = getMetadata({
  title: 'Careers',
  description: 'Join the Hive Sync team and help us build the future of managed IT and cybersecurity. Explore our current job openings and career opportunities.',
}, '/careers');

export default function CareersPage() {
  return <Careers />;
}
