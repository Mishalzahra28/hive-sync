import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { MotionH1, MotionP, MotionWrapper } from './client/motion-wrappers'
import DarkVeil from '../ui/DarkVeil'
import { GridPattern } from '../ui/grid-pattern'
import { Marquee } from '../ui/marquee'
import { paths } from '@/constants/paths'

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Animation & Patterns */}
      <div className="absolute inset-0 z-0">
        <DarkVeil
          speed={0.5}
          hueShift={0}
          noiseIntensity={0.03}
          scanlineIntensity={0.05}
          warpAmount={0.1}
        />

        {/* Multi-layered Brand Gradient Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-15%] left-[-10%] w-[65%] h-[65%] rounded-full opacity-25 blur-[140px] animate-pulse" style={{ background: 'linear-gradient(135deg, hsl(221, 83%, 45%), hsl(262, 70%, 55%))' }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[140px] animate-pulse" style={{ animationDelay: '0.8s', background: 'linear-gradient(225deg, hsl(262, 70%, 55%), hsl(226, 70%, 52%))' }} />
          <div className="absolute top-[30%] right-[5%] w-[35%] h-[35%] rounded-full opacity-15 blur-[120px] animate-pulse" style={{ animationDelay: '1.6s', background: 'hsl(221, 83%, 50%)' }} />
          <div className="absolute bottom-[20%] left-[5%] w-[25%] h-[25%] rounded-full opacity-10 blur-[100px] animate-pulse" style={{ animationDelay: '2.4s', background: 'hsl(262, 70%, 60%)' }} />
        </div>

        {/* Grid Pattern */}
        <GridPattern
          width={60}
          height={60}
          x={-1}
          y={-1}
          strokeDasharray="4 4"
          className="opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)] stroke-foreground/30 fill-foreground/10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-12">
          {/* Main Heading */}
          <MotionH1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-foreground leading-[1.1] tracking-tight font-syne"
          >
            Custom Software Development & <span className="text-brand-gradient">AI Solutions for Modern Businesses</span>
          </MotionH1>

          <div className="flex flex-col items-center gap-10">
            {/* Sub-heading */}
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed font-inter max-w-2xl font-medium tracking-tight"
            >
              We help startups, agencies, and growing businesses build scalable web applications, AI-powered platforms, and digital products that drive real growth.
            </MotionP>

            {/* CTA Buttons */}
            <MotionWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              {/* Primary CTA — Gradient glow button */}
              <Link href="get-started" className="group relative rounded-full p-px overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.97] h-12">
                {/* Animated gradient border */}
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute inset-[-20%] bg-brand-gradient animate-spin" style={{ animationDuration: '4s' }} />
                </span>

                <span
                  className="flex items-center justify-center gap-2 relative z-[1] dark:bg-[#020617]/90 bg-white/90 rounded-full px-8 h-full w-full backdrop-blur-xl"
                >
                  <span className="text-brand-gradient text-sm font-bold transition-all">
                    Start Your Project
                  </span>
                  <svg className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>

              {/* Secondary CTA — Booking */}
              <Link
                href={paths.book}
                className="flex justify-center gap-3 items-center text-sm font-bold text-foreground hover:text-primary-foreground relative z-10 px-8 h-12 overflow-hidden border border-border hover:border-transparent rounded-full group transition-all duration-300 shadow-sm before:absolute before:inset-0 before:bg-primary before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] bg-foreground/5 backdrop-blur-md"
              >
                <span className="relative z-10">Book a Free Consultation</span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </Link>
            </MotionWrapper>
          </div>
        </div>
        {/* Logo Marquee Section */}
        <MotionWrapper
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="relative group p-[1px] rounded-full overflow-hidden">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-500" style={{ background: 'linear-gradient(90deg, transparent, hsl(221, 83%, 45% / 0.3), hsl(262, 70%, 55% / 0.3), transparent)' }} />

            <div className="relative flex items-center gap-8 px-8 py-4 rounded-full bg-card/80 backdrop-blur-3xl border border-border shadow-2xl overflow-hidden max-w-[90vw] sm:max-w-3xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap border-r border-border pr-8">Stacks</span>

              <Marquee className="[--duration:40s] [--gap:3rem]" pauseOnHover>
                {[
                  { name: "React", slug: "react" },
                  { name: "Next.js", slug: "nextdotjs" },
                  { name: "TypeScript", slug: "typescript" },
                  { name: "Node.js", slug: "nodedotjs" },
                  { name: "Tailwind", slug: "tailwindcss" },
                  { name: "PostgreSQL", slug: "postgresql" },
                  { name: "AWS", slug: "amazonaws" },
                  { name: "Python", slug: "python" },
                  { name: "Docker", slug: "docker" },
                  { name: "MongoDB", slug: "mongodb" },
                  { name: "Framer Motion", slug: "framer" },
                  { name: "Redis", slug: "redis" }
                ].map((logo) => (
                  <div key={logo.slug} className="flex items-center px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group/logo">
                    <Image
                      src={`/stacks/${logo.slug}.svg`}
                      alt={logo.name}
                      width={24}
                      height={24}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </MotionWrapper>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-0" />
    </section>
  )
}
