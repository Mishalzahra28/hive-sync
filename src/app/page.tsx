import { CaseStudies } from '@/components/sections/case-studies';
import GrowthBanner from '@/components/sections/growth-banner';
import { Hero } from '@/components/sections/hero';
import { Pricing } from '@/components/sections/pricing';
import { Process } from '@/components/sections/process';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>

      <Hero />
      {/* <Projects /> */}
      <GrowthBanner />
      <Services />
      <Process />
      <CaseStudies />
      <Pricing />
      <Testimonials />

    </>
  );
}
