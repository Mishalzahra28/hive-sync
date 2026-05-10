import { Metadata } from 'next';
import { Contact } from '@/components/sections/contact';
import getMetadata from '@/config/app';

export const metadata: Metadata = getMetadata({
  title: 'Contact Us | HiveSync',
  description: "Let's build your next big thing. Reach out to HiveSync for custom software development and AI automation solutions.",
}, '/contact');

export default function ContactPage() {
  return (
    <main className="pt-8 md:pt-16">
      <Contact />
    </main>
  );
}
