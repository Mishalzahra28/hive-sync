import { MetadataRoute } from 'next';
import { appConfig } from '@/config/app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: appConfig.appUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${appConfig.appUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${appConfig.appUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${appConfig.appUrl}/get-started`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Add other routes as necessary
  ];
}
