import { Marquee } from "@/components/ui/marquee";

const GrowthBanner = () => {
  return (
    <div className="relative flex flex-col gap-2 overflow-hidden bg-transparent">
      {/* Row 1: Brand Blue color, moving left */}
      <Marquee className="[--duration:80s] [--gap:0rem]" repeat={10}>
        <span className="text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-tighter text-brand-gradient whitespace-nowrap px-8" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
          Custom Software Development • AI-Powered Solutions • SaaS Development • Web Application Development • Mobile App Development • UI/UX Design • Automation Systems • API Integrations • React & Next.js Development • Cloud-Based Applications •
        </span>
      </Marquee>

      {/* Row 2: Contrast color (Foreground), moving right (reverse) */}
      <Marquee reverse className="[--duration:85s] [--gap:0rem]" repeat={10}>
        <span className="text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-tighter text-foreground whitespace-nowrap px-8" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
          Full Stack Development • Business Process Automation • Scalable Digital Products • E-Commerce Solutions • Startup MVP Development • Enterprise Software Solutions • Modern Web Experiences • Performance-Driven Development • Secure & Scalable Systems • Digital Transformation Solutions •
        </span>
      </Marquee>
    </div>
  );
};

export default GrowthBanner;
