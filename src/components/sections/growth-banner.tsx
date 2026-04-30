"use client";

import { Marquee } from "@/components/ui/marquee";

const GrowthBanner = () => {
  return (
    <div className="relative flex flex-col gap-2 py-12 overflow-hidden bg-transparent">
      {/* Row 1: Brand Blue color, moving left */}
      <Marquee className="[--duration:30s] [--gap:0rem]" repeat={10}>
        <span className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-[#3B82F6] whitespace-nowrap px-8" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
          Let&apos;s Grow Together
        </span>
      </Marquee>

      {/* Row 2: Contrast color (Foreground), moving right (reverse) */}
      <Marquee reverse className="[--duration:35s] [--gap:0rem]" repeat={10}>
        <span className="text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-foreground whitespace-nowrap px-8" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
          Let&apos;s Grow Together
        </span>
      </Marquee>
    </div>
  );
};

export default GrowthBanner;
