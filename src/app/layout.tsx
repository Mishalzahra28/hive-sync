declare module '*.css';
import type { Metadata } from 'next';
import { Inter, Syne, Urbanist } from 'next/font/google';
import { Toaster } from 'sonner';

import './globals.css';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

import getMetadata from '@/config/app';

import AppProviders from './providers';

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${urbanist.variable} ${inter.variable} ${syne.variable} font-inter antialiased`}
      >
        <AppProviders>
          <Toaster richColors />
          <Navbar />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
