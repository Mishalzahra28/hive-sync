import React from 'react'

import { MotionWrapper } from './client/motion-wrappers'
import { PricingClient } from './client/PricingClient'

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  accent: string
  popular?: boolean
  cta: string
  iconName: 'monitor' | 'smartphone' | 'cpu' | 'message'
}

const tiers: PricingTier[] = [
  {
    name: 'Website Sprint',
    price: 'Starting from $2,500',
    description: 'High-converting website sprint with UX direction, responsive design, and launch-ready delivery.',
    features: [
      'Landing page design support',
      'Brand visuals and messaging',
      'Mobile-first layout polish',
      'Milestone-based delivery and handoff',
    ],
    accent: '#3B82F6',
    cta: 'Start project',
    iconName: 'monitor',
  },
  {
    name: 'Mobile App + UX',
    price: 'Starting from $6,500',
    description: 'Product flow, clickable prototype, and app-ready UI for an investor- or dev-ready mobile release.',
    features: [
      'Clickable UX prototype',
      'App UI design components',
      'Screens built for speed',
      'Milestone-based delivery you can trust',
    ],
    accent: '#8B5CF6',
    cta: 'Start project',
    iconName: 'smartphone',
  },
  {
    name: 'AI Workflow + Growth',
    price: 'Starting from $4,500',
    description: 'Custom AI workflow setup, integrations, and conversion-focused rollout for real operational impact.',
    features: [
      'AI automation workflow',
      'Workflow setup and integrations',
      'Growth content and UX',
      'Milestone delivery and quality checks',
    ],
    accent: '#6366F1',
    cta: 'Start project',
    iconName: 'cpu',
  },
  {
    name: 'Custom Project',
    price: 'Custom quote',
    description: 'We scope your idea and deliver a tailored plan.',
    features: [
      'Share your idea',
      'Milestones and delivery plan',
      'Milestone delivery and progress',
      'Start after discovery chat',
    ],
    accent: '#0F172A',
    cta: 'Talk to us',
    iconName: 'message',
  },
]

const resourceSteps = [
  {
    title: 'Choose your resource',
    description: 'Developer, designer, or both, ready for your timezone.',
    iconName: 'plus',
    status: [true, false, false],
  },
  {
    title: 'Kickoff & start working',
    description: 'We align scope, priorities, and the weekly rhythm, so progress stays tracked and accountable.',
    iconName: 'terminal',
    status: [true, true, false],
  },
  {
    title: 'Report on time',
    description: 'Daily updates with a screenshot tracker and milestone accountability.',
    iconName: 'check',
    status: [true, true, true],
  },
]

const contractLengths = [
  { label: '3 months', value: 3 },
  { label: '6 months', value: 6 },
  { label: '12 months', value: 12, popular: true },
  { label: '24 months', value: 24 },
]

export const Pricing = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-background px-5 md:px-10" id="pricing">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <MotionWrapper
          className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Pricing</p>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.1] text-foreground max-w-xl font-syne">
              Transparent Pricing, Zero <span className="text-primary">Surprises.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed font-inter">
              Two ways to work with HiveSync: dedicated software development teams for ongoing velocity, or fixed-scope SaaS and AI automation projects that demand clear milestones.
            </p>
          </div>
        </MotionWrapper>

        <PricingClient
          tiers={tiers}
          resourceSteps={resourceSteps}
          contractLengths={contractLengths}
        />
      </div>
    </section>
  )
}
