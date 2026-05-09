import { Metadata } from 'next';

import getMetadata from '@/config/app';

export const metadata: Metadata = getMetadata({
  title: 'Get Started',
  description: 'Start your journey with Hive Sync. Fill out our project intake form to get a custom quote for your IT or cybersecurity needs.',
  robots: { index: false, follow: true },
}, '/get-started');

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
