import { Metadata } from 'next';

import getMetadata from '@/config/app';

export const metadata: Metadata = getMetadata({
  title: 'Terms of Service',
  description: 'Read the terms and conditions for using Hive Sync services. Our terms of service outline the rules, regulations, and legal obligations of using our platform.',
  robots: { index: true, follow: true },
}, '/legal/tos');

export default function TermsOfServicePage() {
  return (
    <main className="py-24 px-6 md:px-10 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-syne">Terms of Service</h1>
      <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 font-inter">
        <p>Last updated: May 04, 2026</p>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using Hive Sync&apos;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for all activity that occurs under your account.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
          <p>All content, features, and functionality of our services are owned by Hive Sync and are protected by international copyright, trademark, and other intellectual property laws.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
          <p>Hive Sync shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Hive Sync operates.</p>
        </section>
      </div>
    </main>
  );
}
