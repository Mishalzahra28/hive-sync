import { Metadata } from 'next';

import { env } from '@/env';

export const appConfig = {
  title: 'HiveSync | Custom Software Development & AI Solutions for Modern Businesses',
  description:
    'We help startups, agencies, and growing businesses build scalable web applications, AI-powered platforms, mobile apps, and digital products that drive real business growth.',

  logo: '/logo.svg',
  defaultLocale: 'en-US',
  defaultCurrency: 'USD',
  defaultCountryCode: 'US',
  appUrl: env.NEXT_PUBLIC_APP_URL || 'https://hivesync.io',
  appName: 'Hive Sync',
  twitterHandle: '@hivesync',
  emails: {
    support: 'support@hivesync.io',
    sender: 'onboarding@resend.dev',
  },
  adminEmails: [
    'mishalzahra281@gmail.com',
  ],
} as const;

export default function getMetadata(
  overrides: Partial<Metadata> = {},
  path: string = ''
): Metadata {
  const canonical = `${appConfig.appUrl}${path}`;

  return {
    metadataBase: new URL(appConfig.appUrl),
    title: {
      template: `%s | ${appConfig.appName}`,
      default: appConfig.title
    },
    description: appConfig.description,
    keywords: [
      "HiveSync",
      "HiveSync software agency",
      "custom software development company",
      "enterprise web application development",
      "AI solutions for modern businesses",
      "SaaS product development services",
      "cloud infrastructure solutions",
      "DevOps consulting company",
      "mobile app development agency",
      "UI UX design services",
      "startup MVP development",
      "digital transformation services",
      "AI workflow automation",
      "cross-platform app development",
      "software engineering company",
      "technology consulting firm",
      "product development agency",
      "hire dedicated developers",
      "custom AI solutions",
      "full-stack development services",
      "B2B software development",
      "software development agency USA"
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
    openGraph: {
      url: canonical,
      title: appConfig.title,
      description: appConfig.description,
      siteName: appConfig.appName,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: appConfig.title,
        }
      ],
      type: 'website',
      locale: appConfig.defaultLocale.replace('-', '_'),
    },
    twitter: {
      card: 'summary_large_image',
      title: appConfig.title,
      description: appConfig.description,
      creator: appConfig.twitterHandle,
      images: [`/og-image.png`],
    },
    verification: {
      google: 'your-google-verification-code', // Placeholder for USER
    },
    alternates: {
      canonical: canonical,
    },
    ...overrides,
  };
}
