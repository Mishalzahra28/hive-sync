"use client"

import type { LucideIcon } from 'lucide-react'
import { Code2, Compass, Eye, FlaskConical, Rocket } from 'lucide-react'
import { motion } from 'motion/react'
import { Syne_Tactile, Urbanist } from 'next/font/google'
import React from 'react'

import { GridPattern } from '@/components/ui/grid-pattern'

import { cn } from '@/lib/utils'

const syneTactile = Syne_Tactile({
  weight: '400',
  subsets: ['latin'],
})

const urbanist = Urbanist({
  weight: ['600'],
  subsets: ['latin'],
})

interface Step {
  id: string
  title: string
  description: string
  Icon: LucideIcon
  cardBg: string
  ruleBg: string
  accent: string
  rotation: number
  side: 'left' | 'right'
}

const steps: Step[] = [
  {
    id: '01',
    title: 'Tell Us Your Vision',
    description:
      'Share your idea, goals, and the kind of business you want to build.',
    Icon: Eye,
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#3B82F6',
    rotation: -2,
    side: 'right',
  },
  {
    id: '02',
    title: 'Plan & Strategize',
    description:
      "We map out the tech, design, and features needed to bring it to life.",
    Icon: Compass,
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#6366F1',
    rotation: 2.5,
    side: 'left',
  },
  {
    id: '03',
    title: 'Design & Build',
    description:
      'Our team creates your platform—from UI to backend—fully customized.',
    Icon: Code2,
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#8B5CF6',
    rotation: -1.5,
    side: 'right',
  },
  {
    id: '04',
    title: 'Test & Refine',
    description:
      'Rigorous QA, performance benchmarks, and your direct feedback sharpen the product.',
    Icon: FlaskConical,
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#3B82F6',
    rotation: 2,
    side: 'left',
  },
  {
    id: '05',
    title: 'Launch & Grow',
    description:
      'We deploy with zero-downtime pipelines and stay on as your long-term partner.',
    Icon: Rocket,
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#6366F1',
    rotation: -2,
    side: 'right',
  },
]

const Thumbtack: React.FC<{ color: string }> = ({ color }) => {
  const id = `tack${color.replace(/[^a-z0-9]/gi, '')}`
  return (
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="drop-shadow-2xl overflow-visible">
      <defs>
        <radialGradient id={id} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <path d="M55 78 L62 96" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="63" cy="96" rx="5" ry="2" fill="black" fillOpacity="0.5" />
      <path d="M30 65 C30 50 75 50 75 65 C75 82 30 82 30 65 Z" fill={`url(#${id})`} />
      <path d="M42 35 L38 62 C38 66 68 66 68 62 L64 35 Z" fill={`url(#${id})`} />
      <g transform="rotate(-10 53 25)">
        <ellipse cx="53" cy="25" rx="24" ry="12" fill={`url(#${id})`} />
      </g>
    </svg>
  )
}

const DesktopCard: React.FC<{ step: Step; index: number }> = ({ step, index: _index }) => {
  const isLeft = step.side === 'left'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: isLeft ? -48 : 48 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-[340px] group"
    >
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
        <Thumbtack color={step.accent} />
      </div>

      <div
        className="relative rounded-[42px] border border-border px-8 pt-12 pb-10 overflow-hidden bg-card shadow-2xl"
      >
        <div className="relative mb-4 inline-flex h-[93px] items-center">
          <span
            className={cn("text-[65px] leading-[93px] relative z-10", syneTactile.className)}
            style={{ color: step.accent }}
          >
            {step.id}
          </span>
        </div>

        <h3 className={cn("mb-4 text-[40px] font-semibold leading-[48px] tracking-tight text-foreground", urbanist.className)}>
          {step.title}
        </h3>
        <p className="text-[20px] leading-[28px] font-normal text-muted-foreground">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export const Process = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-background" id="process">
      {/* Immersive Background Gradients - Scattered across the full section */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-[#3B82F6]/15 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#6366F1]/15 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-[#3B82F6]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[500px] h-[500px] bg-[#6366F1]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <GridPattern
        width={120}
        height={120}
        x={-1}
        y={-1}
        strokeDasharray="4 4"
        className={cn(
          "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)] opacity-60 stroke-foreground/15",
        )}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">How We Work</p>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-[56px] leading-tight text-foreground">
            The simple <span className="text-primary">process.</span>
          </h2>

          <p className="mt-4 text-[15px] text-muted-foreground max-w-lg mx-auto">
            Five clear steps from first conversation to successful launch — and beyond.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Curved center path — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-20 bottom-20 w-64 pointer-events-none z-0">
            <svg
              viewBox="0 0 200 800"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
            >
              <path
                d="M 100 0 C 260 100, 260 150, 100 200 C -60 250, -60 350, 100 400 C 260 450, 260 550, 100 600 C -60 650, -60 750, 100 800"
                stroke="rgba(59,130,246,0.2)"
                strokeWidth="2.5"
                strokeDasharray="8 12"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {steps.map((step, index) => {
            const isLeft = step.side === 'left'

            return (
              <div
                key={step.id}
                className="relative md:grid md:grid-cols-[1fr_6rem_1fr] md:items-center md:py-20"
              >
                {/* ── Left slot (desktop) ── */}
                <div className="hidden md:flex justify-end pr-5">
                  {isLeft && <DesktopCard step={step} index={index} />}
                </div>

                {/* ── Center node slot ── */}
                <div className="hidden md:flex justify-center items-center relative z-10" />

                {/* ── Right slot (desktop) ── */}
                <div className="hidden md:flex justify-start pl-5">
                  {!isLeft && <DesktopCard step={step} index={index} />}
                </div>

                {/* ── Mobile layout ── */}
                <div className="md:hidden flex items-start gap-4 py-8">
                  <div className="flex flex-col items-center shrink-0 pt-4">
                    {index < steps.length - 1 && (
                      <div className="w-[1.5px] flex-1 mt-1 mb-1 relative">
                        <svg 
                          viewBox="0 0 20 100" 
                          preserveAspectRatio="none" 
                          className="absolute inset-y-0 -left-[15px] w-8 h-full"
                        >
                          <path
                            d="M 10 0 C 20 25, 20 75, 10 100"
                            stroke="rgba(59,130,246,0.2)"
                            strokeWidth="2"
                            strokeDasharray="4 6"
                            fill="none"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <motion.div
                    className="flex-1 pb-10"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                  >
                    <div className="relative rounded-[32px] border border-border p-6 overflow-hidden bg-card shadow-2xl">
                      <div className="relative mb-2 inline-flex h-[60px] items-center">
                        <span
                          className={cn("text-4xl relative z-10", syneTactile.className)}
                          style={{ color: step.accent }}
                        >
                          {step.id}
                        </span>
                      </div>

                      <h3 className={cn("mb-2 text-2xl font-semibold leading-tight text-foreground", urbanist.className)}>
                        {step.title}
                      </h3>
                      <p className="text-[16px] leading-[22px] font-normal text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
