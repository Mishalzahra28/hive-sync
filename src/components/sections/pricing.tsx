"use client"

import type { LucideIcon } from 'lucide-react'
import { Check, Cpu, MessageSquare, Monitor, Plus, Smartphone, Terminal } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import React, { useState } from 'react'

import { cn } from '@/lib/utils'

import { paths } from '@/constants/paths'

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  accent: string
  popular?: boolean
  cta: string
  icon: LucideIcon
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
    icon: Monitor,
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
    icon: Smartphone,
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
    icon: Cpu,
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
    icon: MessageSquare,
  },
]

const resourceSteps = [
  {
    title: 'Choose your resource',
    description: 'Developer, designer, or both, ready for your timezone.',
    icon: Plus,
    status: [true, false, false],
  },
  {
    title: 'Kickoff & start working',
    description: 'We align scope, priorities, and the weekly rhythm, so progress stays tracked and accountable.',
    icon: Terminal,
    status: [true, true, false],
  },
  {
    title: 'Report on time',
    description: 'Daily updates with a screenshot tracker and milestone accountability.',
    icon: Check,
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
  const [workType, setWorkType] = useState<'resource' | 'project'>('project')
  const [contractLength, setContractLength] = useState(12)

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-background px-5 md:px-10" id="pricing">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
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
              Two ways to work with Hive Sync: dedicated team outsourcing for ongoing velocity, or fixed-scope engagements for projects that demand clear milestones.
            </p>
          </div>
        </motion.div>

        {/* Selector: How do you want to work? */}
        <motion.div
          className="mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className={cn("text-xl md:text-2xl font-medium text-foreground mb-6 font-syne")}>
            How do you want to work?
          </h3>

          <div role="tablist" className="relative inline-flex p-1 rounded-full bg-muted/40 border border-border backdrop-blur-md">
            <button
              onClick={() => setWorkType('resource')}
              role="tab"
              aria-selected={workType === 'resource'}
              aria-controls="resource-view"
              className={cn(
                "relative z-10 px-4 md:px-6 py-1.5 md:py-2.5 rounded-full text-[13px] md:text-sm font-bold transition-colors duration-300",
                workType === 'resource' ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {workType === 'resource' && (
                <motion.div
                  layoutId="work-type-pill"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">I need a resource</span>
            </button>
            <button
              onClick={() => setWorkType('project')}
              role="tab"
              aria-selected={workType === 'project'}
              aria-controls="project-view"
              className={cn(
                "relative z-10 px-4 md:px-6 py-1.5 md:py-2.5 rounded-full text-[13px] md:text-sm font-bold transition-colors duration-300",
                workType === 'project' ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {workType === 'project' && (
                <motion.div
                  layoutId="work-type-pill"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">I have a project</span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {workType === 'project' ? (
            <motion.div
              key="project-view"
              id="project-view"
              role="tabpanel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            >
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative flex flex-col p-5 md:p-6 rounded-[32px] transition-all duration-700 overflow-hidden shadow-lg bg-card border border-border hover:border-foreground/10 hover:shadow-2xl"
                >
                  {/* Dynamic Accent Glow */}
                  <div
                    className="absolute -top-24 -right-24 size-48 md:size-64 opacity-20 blur-[80px] rounded-full transition-colors duration-700"
                    style={{ backgroundColor: tier.accent }}
                  />

                  <div className="relative z-10 mb-5 md:mb-6">
                    <div className={cn("flex items-center justify-end", tier.popular ? "mb-4" : "mb-0")}>
                      {tier.popular && (
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider shadow-md">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight font-syne">{tier.name}</h3>
                    <p className="text-[12px] md:text-[13px] text-muted-foreground mt-2 leading-relaxed font-inter">{tier.description}</p>
                  </div>

                  <div className="relative z-10 mb-8 md:mb-10">
                    <div className="flex flex-col">
                      {tier.price.includes('Starting from') ? (
                        <>
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Starting from</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl md:text-3xl font-bold text-foreground font-syne">{tier.price.replace('Starting from', '').trim()}</span>
                            <span className="text-muted-foreground text-[12px] font-medium font-inter">/project</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl md:text-3xl font-bold text-foreground font-syne">{tier.price}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative z-10 space-y-4 mb-8 md:mb-10 flex-grow">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div
                          className="size-5 rounded-full flex items-center justify-center flex-shrink-0 border"
                          style={{ borderColor: `${tier.accent}40`, backgroundColor: `${tier.accent}10` }}
                        >
                          <Check className="size-3" style={{ color: tier.accent }} strokeWidth={4} />
                        </div>
                        <span className="text-foreground/80 text-[13px] font-medium leading-tight font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`${paths.getStarted}?tier=${encodeURIComponent(tier.name)}`}
                    className={cn(
                      "relative z-10 block w-full py-4 rounded-[18px] font-black text-[12px] uppercase tracking-widest text-center transition-all active:scale-[0.97] shadow-lg",
                      tier.name === 'Custom Project'
                        ? "bg-foreground text-background hover:opacity-90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    {tier.cta}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="resource-view"
              id="resource-view"
              role="tabpanel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 xl:gap-20">
                {/* Left Column: Process Timeline */}
                <div className="relative">
                  <div className="sticky top-24">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-10">
                      <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">How it works</span>
                    </div>

                    <div className="flex flex-col gap-12 relative">
                      {/* Vertical Connecting Line */}
                      <div className="absolute left-[27px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-[#1E293B] to-transparent hidden md:block" />

                      {resourceSteps.map((step, index) => (
                        <motion.div
                          key={step.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex gap-6 items-start group relative z-10"
                        >
                          <div className="size-14 rounded-2xl bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors shadow-2xl">
                            <step.icon className="size-6 text-primary" />
                            <div className="absolute -bottom-2 -right-2 size-6 rounded-full bg-muted border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                              0{index + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className={cn("text-lg font-bold text-foreground mb-2 font-syne")}>
                              {step.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Controls & Cards */}
                <div className="flex flex-col gap-12">
                  {/* Selection Controls (iPhone Glass Effect) */}
                  <div className="p-4 sm:p-5 rounded-[32px] bg-card border border-border shadow-xl relative overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5 blur-3xl rounded-full -translate-y-1/2" />

                    <div className="relative z-10 space-y-5">
                      <h4 className="text-lg md:text-xl font-bold text-foreground tracking-tight font-syne">
                        Unlock discounts by contract length
                      </h4>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                        {contractLengths.map((len) => (
                          <button
                            key={len.value}
                            onClick={() => setContractLength(len.value)}
                            className={cn(
                              "relative px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-500 border",
                              contractLength === len.value
                                ? "bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                            )}
                          >
                            {len.popular && (
                              <span className={cn(
                                "absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider shadow-sm transition-all duration-500 whitespace-nowrap z-20",
                                contractLength === len.value
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              )}>
                                Popular
                              </span>
                            )}
                            <span className="relative z-10">{len.label}</span>
                          </button>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <p className="text-[12px] md:text-[14px] text-muted-foreground font-medium leading-relaxed font-inter">
                          Longer contracts reduce your hourly rate. You keep full visibility and control.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Resource Cards (Glass Effect) */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* Developer Card */}
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative p-5 sm:p-7 rounded-[32px] bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-xl"
                    >
                      <div className="absolute -top-24 -right-24 size-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8 relative z-10">
                        <div className="max-w-full sm:max-w-[200px]">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight font-syne">Full-Stack Developer</h3>
                          <p className="text-[10px] text-muted-foreground mt-1.5 leading-relaxed">
                            Unlock developer discounts by contract length. Rate updates automatically.
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-3xl md:text-4xl font-bold text-foreground font-syne">
                            ${contractLength === 3 ? 45 : contractLength === 6 ? 40 : contractLength === 12 ? 35 : 30}
                            <span className="text-base text-muted-foreground ml-1 font-sans">/hr</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8 relative z-10">
                        {[
                          'Verified senior engineering talent',
                          'Fluent English communication',
                          'Daily updates with progress tracking',
                          'Synced to your specific time zone',
                          'Senior technical expertise'
                        ].map((feat) => (
                          <div key={feat} className="flex items-center gap-3">
                            <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                              <Check className="size-3 text-primary" strokeWidth={4} />
                            </div>
                            <span className="text-foreground/80 text-[13px] font-medium leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`${paths.getStarted}?tier=${encodeURIComponent('Full-Stack Developer')}`}
                        className="block w-full py-3 rounded-[16px] bg-foreground text-background font-black text-[11px] uppercase tracking-widest text-center transition-all hover:opacity-90 active:scale-[0.97] relative z-10 shadow-lg"
                      >
                        Hire Developer Resource
                      </Link>
                    </motion.div>

                    {/* Designer Card */}
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative p-5 sm:p-7 rounded-[32px] bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-xl"
                    >
                      <div className="absolute -top-24 -right-24 size-64 bg-secondary/10 rounded-full blur-[80px] group-hover:bg-secondary/20 transition-colors duration-700" />

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8 relative z-10">
                        <div className="max-w-full sm:max-w-[200px]">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight font-syne">Product Designer</h3>
                          <p className="text-[10px] text-muted-foreground mt-1.5 leading-relaxed">
                            Unlock designer discounts by contract length. Rate updates automatically.
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-3xl md:text-4xl font-bold text-foreground font-syne">
                            ${contractLength === 3 ? 30 : contractLength === 6 ? 27 : contractLength === 12 ? 24 : 21}
                            <span className="text-base text-muted-foreground ml-1 font-sans">/hr</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8 relative z-10">
                        {[
                          'Premium UI/UX handoff assets',
                          'Fluent English communication',
                          'Daily creative iterations',
                          'Available in your time zone',
                          'Systems-thinking approach'
                        ].map((feat) => (
                          <div key={feat} className="flex items-center gap-3">
                            <div className="size-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 border border-secondary/20">
                              <Check className="size-3 text-secondary" strokeWidth={4} />
                            </div>
                            <span className="text-foreground/80 text-[13px] font-medium leading-tight">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`${paths.getStarted}?tier=${encodeURIComponent('Product Designer')}`}
                        className="block w-full py-3 rounded-[16px] bg-gradient-to-r from-secondary to-primary text-primary-foreground font-black text-[11px] uppercase tracking-widest text-center transition-all hover:opacity-90 active:scale-[0.97] relative z-10 shadow-lg"
                      >
                        Hire Designer Resource
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
