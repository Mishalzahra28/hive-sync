import GrowthBanner from '@/components/sections/growth-banner';
import { Hero } from '@/components/sections/hero';
import { Process } from '@/components/sections/process';
import Projects from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>

      <Hero />
      <Projects />
      <GrowthBanner />
      <Services />
      <Process />
      <Testimonials />

    </>
  );
}
