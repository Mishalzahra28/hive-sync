import React from 'react';

import { appConfig } from '@/config/app';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: appConfig.appName,
  url: appConfig.appUrl,
  logo: `${appConfig.appUrl}${appConfig.logo}`,
  sameAs: [
    'https://twitter.com/hivesync',
    'https://linkedin.com/company/hivesync',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
    email: appConfig.emails.support,
  },
});

export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: appConfig.appName,
  url: appConfig.appUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${appConfig.appUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const getServiceSchema = (services: { title: string; description: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom Software Development & AI Automation Services',
  provider: {
    '@type': 'Organization',
    name: appConfig.appName,
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software & AI Services',
    itemListElement: services.map((s, i) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
      },
      position: i + 1,
    })),
  },
});
