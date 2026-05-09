import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Inter, Syne } from 'next/font/google';
import { Toaster } from 'sonner';

import './globals.css';

import { getOrganizationSchema, getWebsiteSchema, JsonLd } from '@/components/common/json-ld';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

import getMetadata from '@/config/app';

import AppProviders from './providers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = getMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${syne.variable} font-inter antialiased`}
      >
        <AppProviders>
          <GoogleAnalytics gaId="G-XXXXXXXXXX" />
          <JsonLd data={getOrganizationSchema()} />
          <JsonLd data={getWebsiteSchema()} />
          <Toaster richColors />
          <Navbar />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}