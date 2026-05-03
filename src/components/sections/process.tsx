"use client"

import type { LucideIcon } from 'lucide-react'
import { Code2, Compass, Eye, FlaskConical, Rocket } from 'lucide-react'
import { motion } from 'motion/react'
import { Syne_Tactile } from 'next/font/google'
import React from 'react'

import { GridPattern } from '@/components/ui/grid-pattern'

import { cn } from '@/lib/utils'

const syneTactile = Syne_Tactile({
  weight: '400',
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
  const uniqueId = React.useId().replace(/:/g, '');
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      fill="none"
      className="drop-shadow-xl overflow-visible"
    >
      <defs>
        <linearGradient id={`grad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      {/* Pin Shadow */}
      <ellipse cx="50" cy="90" rx="15" ry="5" fill="black" fillOpacity="0.3" />
      {/* Pin Needle */}
      <path
        d="M50 40 L50 90"
        stroke="#94a3b8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Pin Head */}
      <circle cx="50" cy="35" r="28" fill={color} />
      <circle cx="50" cy="35" r="28" fill={`url(#grad-${uniqueId})`} />
      <circle cx="42" cy="27" r="8" fill="white" fillOpacity="0.4" />
    </svg>
  )
}

const DesktopCard: React.FC<{ step: Step; index: number }> = ({ step, index: _index }) => {
  const isLeft = step.side === 'left'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: isLeft ? -48 : 48, rotate: isLeft ? -2 : 2 }}
      whileInView={{ opacity: 1, scale: 1, x: 0, rotate: isLeft ? -2 : 2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-[340px] md:max-w-[420px] group pt-8"
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
        <Thumbtack color={step.accent} />
      </div>

      <div
        className="relative rounded-[42px] border-2 border-primary/30 px-6 md:px-8 pt-10 md:pt-12 pb-8 md:pb-10 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 shadow-xl transition-all duration-500"
      >
        <div className="relative mb-2 md:mb-4 inline-flex h-[60px] md:h-[93px] items-center">
          <span
            className={cn("text-4xl sm:text-5xl md:text-[65px] leading-none relative z-10", syneTactile.className)}
            style={{ color: step.accent }}
          >
            {step.id}
          </span>
        </div>

        <h3 className={cn("mb-3 md:mb-4 text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight md:leading-[48px] tracking-tight text-foreground", "font-syne")}>
          {step.title}
        </h3>
        <p className="text-sm sm:text-base md:text-[20px] md:leading-[28px] font-normal text-muted-foreground">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export const Process = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-background px-5 md:px-10" id="process">
      {/* Immersive Background Gradients - Scattered across the full section */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

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
      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Standardized Header */}
        <motion.div
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Process</p>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.1] text-foreground max-w-xl font-syne">
              The simple <span className="text-primary">process.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed font-inter">
              Five clear steps from first conversation to successful launch — and beyond. Precision in execution, clarity in communication.
            </p>
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Curvy background line - visible on all devices now */}
          <div className="absolute left-1/2 -translate-x-1/2 top-20 bottom-20 w-48 md:w-64 pointer-events-none z-0">
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
                className="relative md:grid md:grid-cols-[1fr_6rem_1fr] md:items-center md:py-20 py-12"
              >
                {/* ── Desktop layout ── */}
                <div className="hidden md:flex justify-end pr-5">
                  {isLeft && <DesktopCard step={step} index={index} />}
                </div>

                <div className="hidden md:flex justify-center items-center relative z-10" />

                <div className="hidden md:flex justify-start pl-5">
                  {!isLeft && <DesktopCard step={step} index={index} />}
                </div>

                {/* ── Mobile layout (Centered and Curvy) ── */}
                <div className="md:hidden flex flex-col items-center w-full px-4 relative z-10">
                  <DesktopCard step={step} index={index} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
