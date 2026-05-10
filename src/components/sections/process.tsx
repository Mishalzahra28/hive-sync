import React from 'react'

import { GridPattern } from '@/components/ui/grid-pattern'

import { cn } from '@/lib/utils'

import { MotionWrapper } from './client/motion-wrappers'
import { ProcessCard } from './client/ProcessClient'

interface Step {
  id: string
  title: string
  description: string
  iconName: 'eye' | 'compass' | 'palette' | 'code' | 'flask' | 'rocket'
  cardBg: string
  ruleBg: string
  accent: string
  rotation: number
  side: 'left' | 'right'
}

const steps: Step[] = [
  {
    id: '01',
    title: 'Discovery',
    description: 'Understanding your goals and requirements.',
    iconName: 'eye',
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#3B82F6',
    rotation: -2,
    side: 'right',
  },
  {
    id: '02',
    title: 'Planning',
    description: 'Creating the roadmap and project strategy.',
    iconName: 'compass',
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#6366F1',
    rotation: 2.5,
    side: 'left',
  },
  {
    id: '03',
    title: 'Design',
    description: 'Crafting modern and user-friendly experiences.',
    iconName: 'palette',
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#8B5CF6',
    rotation: -1.5,
    side: 'right',
  },
  {
    id: '04',
    title: 'Development',
    description: 'Building fast, scalable, and secure solutions.',
    iconName: 'code',
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#3B82F6',
    rotation: 2,
    side: 'left',
  },
  {
    id: '05',
    title: 'Testing',
    description: 'Ensuring performance, quality, and reliability.',
    iconName: 'flask',
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#6366F1',
    rotation: -2,
    side: 'right',
  },
  {
    id: '06',
    title: 'Launch & Support',
    description: 'Deploying your product with ongoing support.',
    iconName: 'rocket',
    cardBg: '#0F172A',
    ruleBg: '#1E293B',
    accent: '#8B5CF6',
    rotation: 1.5,
    side: 'left',
  },
]

export const Process = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-background via-primary/70 to-background px-5 md:px-10" id="process">
      {/* Immersive Background Gradients - Scattered across the full section */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-primary/30 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/30 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-primary/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[500px] h-[500px] bg-secondary/30 blur-[120px] rounded-full pointer-events-none" />

      <GridPattern
        width={120}
        height={120}
        x={-1}
        y={-1}
        strokeDasharray="4 4"
        className={cn(
          "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)] opacity-100 stroke-foreground/50",
        )}
      />
      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Standardized Header */}
        <MotionWrapper
          className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Process</p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.1] text-foreground max-w-2xl font-syne">
              Our Development <span className="text-brand-gradient">Process.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed font-inter">
              A simple and efficient approach to building scalable digital products.
            </p>
          </div>
        </MotionWrapper>

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
                stroke="rgba(15,23,42,0.4)"
                strokeWidth="2.5"
                strokeDasharray="8 12"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {steps.map((step) => {
            const isLeft = step.side === 'left'

            return (
              <div
                key={step.id}
                className="relative md:grid md:grid-cols-[1fr_6rem_1fr] md:items-center md:py-20 py-12"
              >
                {/* ── Desktop layout ── */}
                <div className="hidden md:flex justify-end pr-5">
                  {isLeft && <ProcessCard step={step} />}
                </div>

                <div className="hidden md:flex justify-center items-center relative z-10" />

                <div className="hidden md:flex justify-start pl-5">
                  {!isLeft && <ProcessCard step={step} />}
                </div>

                {/* ── Mobile layout (Centered and Curvy) ── */}
                <div className="md:hidden flex flex-col items-center w-full px-4 relative z-10">
                  <ProcessCard step={step} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
