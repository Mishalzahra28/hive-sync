import { Metadata } from 'next';

import getMetadata from '@/config/app';

export const metadata: Metadata = getMetadata({
  title: 'Privacy Policy',
  description: 'Learn how Hive Sync collects, uses, and protects your personal data. Our privacy policy outlines our commitment to your privacy and data security.',
  robots: { index: true, follow: true },
}, '/legal/privacy-policy');

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 px-5 md:px-10">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 font-syne tracking-tight">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 font-inter">
          <p>Last updated: May 04, 2026</p>
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you fill out a contact form, request a quote, or apply for a position. This may include your name, email address, phone number, and company information.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to process your requests.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect the security of your personal information.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at hello@hivesync.io.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
