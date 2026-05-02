import { Metadata } from 'next';

import { env } from '@/env';

export const appConfig = {
  title: 'Hive Sync | Strategic IT & Cybersecurity Partner',
  description:
    'Hive Sync provides expert managed IT services and cybersecurity solutions for modern businesses. Secure, efficient, and ready to grow.',
  keywords: 'managed it services, cybersecurity, it partner, network security, cloud solutions, it support',
  logo: '/logo/main.png',
  defaultLocale: 'en-US',
  defaultCurrency: 'USD',
  defaultCountryCode: 'US',
  appUrl: env.NEXT_PUBLIC_APP_URL,
  appName: 'Hive Sync',
  emails: {
    support: 'support@hivesync.io',
    sender: 'onboarding@resend.dev',
  },
  adminEmails: [
    'yrrabdul@gmail.com',
    'sufiyanchishty71@gmail.com',
    'mishalzahra281@gmail.com',
    'amna.eman.ch@gmail.com',
  ],
} as const;

export default function getMetadata(): Metadata {
  return {
    metadataBase: new URL(appConfig.appUrl),
    title: { template: `%s | ${appConfig.title}`, default: appConfig.title },
    description: appConfig.description,
    robots: { index: true, follow: true },
    icons: {
      icon: '/favicon.svg',
    },
    // manifest: `/favicon/site.webmanifest`,

    openGraph: {
      url: appConfig.appUrl,
      title: appConfig.title,
      description: appConfig.description,
      siteName: appConfig.title,
      images: [`/main/logo.png`],
      type: 'website',
      locale: appConfig.defaultLocale.replace('-', '_'),
    },

    twitter: {
      card: 'summary_large_image',
      title: appConfig.title,
      description: appConfig.description,
      images: [`/main/logo.png`],
    },
    keywords: [
      'next.js',
      'react-query',
      'typescript',
      'boilerplate',
      'web development',
    ],
  };
}
