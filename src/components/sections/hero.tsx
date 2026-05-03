"use client"

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import DarkVeil from '../ui/DarkVeil'
import { GridPattern } from '../ui/grid-pattern'
import { Marquee } from '../ui/marquee'

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Animation & Patterns */}
      <div className="absolute inset-0 z-0">
        <DarkVeil
          speed={0.5}
          hueShift={0}
          noiseIntensity={0.03}
          scanlineIntensity={0.05}
          warpAmount={0.1}
        />

        {/* All-over Brand Gradient */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary blur-[120px] animate-pulse delay-700" />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-accent blur-[100px] animate-pulse delay-1000" />
        </div>

        {/* Grid Pattern */}
        <GridPattern
          width={60}
          height={60}
          x={-1}
          y={-1}
          strokeDasharray="4 4"
          className="opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] stroke-foreground/40 fill-foreground/20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight"
        >
          We Build What Matters.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          From idea to launch, we design, build, and scale digital products for startups and growing businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Star Glow Strategy Button */}
          <Link href="get-started" className="group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] h-10">
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="inset-0 absolute pointer-events-none select-none">
                <span
                  className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)' }}
                ></span>
              </span>
            </span>

            <span
              className="inset-0 absolute pointer-events-none select-none"
              style={{ animation: '10s ease-in-out 0s infinite alternate none running border-glow-translate' }}
            >
              <span
                className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
                style={{
                  animation: '10s ease-in-out 0s infinite alternate none running border-glow-scale',
                  background: 'linear-gradient(135deg, #3B82F6, #6366F1, #8B5CF6)'
                }}
              ></span>
            </span>

            <span
              className="flex items-center justify-center gap-2 relative z-[1] dark:bg-[#020617]/90 bg-white/90 rounded-full px-6 h-full w-full backdrop-blur-xl"
            >

              <span className="bg-gradient-to-b dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-[13px] font-bold text-transparent transition-all">
                Start A Project
              </span>
            </span>
          </Link>

          <a
            href="#pricing"
            className="flex justify-center gap-4 items-center text-[13px] bg-foreground/5 backdrop-blur-md font-semibold text-foreground hover:text-primary-foreground isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:-left-full before:hover:left-0 before:rounded-full before:bg-primary before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 h-10 overflow-hidden border border-border hover:border-primary rounded-full group transition-all shadow-sm"
          >
            Explore Options
            <svg
              className="w-5 h-5 justify-end group-hover:rotate-90 ease-linear duration-300 rounded-full border border-border group-hover:border-primary-foreground p-1 rotate-45 transition-all"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-foreground group-hover:fill-primary-foreground transition-colors"
              ></path>
            </svg>
          </a>
        </motion.div>

        {/* Logo Marquee Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center"
        >
          <div className="relative group p-[1px] rounded-full overflow-hidden">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-white/10 to-blue-500/20 opacity-50 group-hover:opacity-100 transition-opacity" />

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
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  )
}
