"use client"

import type { LucideIcon } from 'lucide-react'
import { Check, Cpu, MessageSquare, Monitor, Plus, Smartphone, Terminal } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Syne_Tactile, Urbanist } from 'next/font/google'
import Link from 'next/link'
import React, { useState } from 'react'

import { paths } from '@/constants/paths'
import { cn } from '@/lib/utils'

const syneTactile = Syne_Tactile({
  weight: '400',
  subsets: ['latin'],
})

const urbanist = Urbanist({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

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
    popular: true,
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
    accent: '#F1F5F9',
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
    <section className="relative overflow-hidden py-24 bg-background" id="pricing">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Pricing</p>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-[64px] leading-[1.1] text-foreground max-w-xl">
              Transparent Pricing, Zero <span className="text-primary">Surprises.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-[17px] text-muted-foreground leading-relaxed">
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
          <h3 className={cn("text-xl md:text-2xl font-medium text-foreground mb-6", urbanist.className)}>
            How do you want to work?
          </h3>
          
          <div className="relative inline-flex p-1 rounded-full bg-muted/40 border border-border backdrop-blur-md">
            <button
              onClick={() => setWorkType('resource')}
              className={cn(
                "relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300",
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
              <span className="relative z-10">I need a resource</span>
            </button>
            <button
              onClick={() => setWorkType('project')}
              className={cn(
                "relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300",
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
              <span className="relative z-10">I have a project</span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {workType === 'project' ? (
            <motion.div
              key="project-view"
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
                  className={cn(
                    "group relative flex flex-col p-8 md:p-10 rounded-[56px] transition-all duration-700 overflow-hidden shadow-xl",
                    tier.name === 'Custom Project'
                      ? "bg-primary/10 border border-primary/30 hover:border-primary/50 backdrop-blur-sm"
                      : "bg-card border border-border hover:border-primary/40 hover:shadow-2xl"
                  )}
                >
                  {/* Dynamic Accent Glow */}
                  <div
                    className="absolute -top-32 -right-32 size-80 rounded-full blur-[100px] opacity-10 group-hover:opacity-25 transition-opacity duration-700"
                    style={{ backgroundColor: tier.accent }}
                  />

                  <div className="relative z-10 mb-10">
                    <h3 className={cn("text-3xl font-bold tracking-tight mb-3 text-foreground", urbanist.className)}>
                      {tier.name}
                    </h3>

                    <div className={cn(
                      "inline-flex px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] mb-8",
                      tier.name === 'Custom Project' ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    )}>
                      {tier.price}
                    </div>

                    <p className="text-base leading-relaxed text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>

                  <div className="relative z-10 space-y-5 mb-12 flex-grow">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-4">
                        <div className={cn(
                          "size-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 border",
                          tier.name === 'Custom Project'
                            ? "bg-card border-primary/30"
                            : "bg-primary/10 border-primary/20"
                        )}>
                          <Check className="size-3 text-primary" strokeWidth={4} />
                        </div>
                        <span className="text-[15px] font-medium text-foreground/80">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`${paths.getStarted}?tier=${encodeURIComponent(tier.name)}`}
                    className="relative z-10 w-full py-5 rounded-[24px] font-black text-sm tracking-widest uppercase transition-all duration-300 active:scale-[0.97] text-center shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {tier.cta}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="resource-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
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
                            <h4 className={cn("text-lg font-bold text-foreground mb-2", urbanist.className)}>
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
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="p-2 rounded-[28px] bg-card border border-border flex flex-wrap gap-2 shadow-lg">
                      {contractLengths.map((len) => (
                        <button
                          key={len.value}
                          onClick={() => setContractLength(len.value)}
                          className={cn(
                            "relative px-8 py-4 rounded-[22px] text-[15px] font-bold transition-all duration-500",
                            contractLength === len.value
                              ? "text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.03]"
                          )}
                        >
                          {contractLength === len.value && (
                            <motion.div
                              layoutId="contract-pill"
                              className="absolute inset-0 bg-primary rounded-[22px] shadow-md"
                              transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                            />
                          )}
                          <span className="relative z-10">{len.label}</span>

                          {len.popular && (
                            <span className={cn(
                              "absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.1em] shadow border transition-all duration-500 whitespace-nowrap",
                              contractLength === len.value
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-muted text-muted-foreground border-border"
                            )}>
                              Best Value
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="mt-5 text-[13px] text-muted-foreground font-medium px-4">
                      Rates scale dynamically with your commitment level.
                    </p>
                  </div>

                  {/* Resource Cards (Glass Effect) */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* Developer Card */}
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative p-10 rounded-[56px] bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-xl"
                    >
                      <div className="absolute -top-24 -right-24 size-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />

                      <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="max-w-[200px]">
                          <h3 className={cn("text-3xl font-bold text-foreground tracking-tight", urbanist.className)}>Full-Stack Developer</h3>
                          <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                            Unlock developer discounts by contract length. Rate updates automatically.
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={cn("text-5xl font-bold text-foreground", syneTactile.className)}>
                            ${contractLength === 3 ? 38 : contractLength === 6 ? 35 : contractLength === 12 ? 31 : 28}
                            <span className="text-lg text-muted-foreground ml-1 font-sans">/hr</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-5 mb-12 relative z-10">
                        {[
                          'Complimentary QA resource included',
                          'Fluent English communication',
                          'Daily updates with progress tracking',
                          'Synced to your specific time zone',
                          'Senior technical expertise'
                        ].map((feat) => (
                          <div key={feat} className="flex items-center gap-4">
                            <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                              <Check className="size-3.5 text-primary" strokeWidth={3} />
                            </div>
                            <span className="text-foreground/80 text-sm font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`${paths.getStarted}?tier=${encodeURIComponent('Full-Stack Developer')}`}
                        className="block w-full py-5 rounded-[24px] bg-primary text-primary-foreground font-black text-sm text-center transition-all hover:bg-primary/90 active:scale-[0.97] relative z-10 shadow-lg"
                      >
                        Hire Developer Resource
                      </Link>
                    </motion.div>

                    {/* Designer Card */}
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative p-10 rounded-[56px] bg-card border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-xl"
                    >
                      <div className="absolute -top-24 -right-24 size-64 bg-secondary/10 rounded-full blur-[80px] group-hover:bg-secondary/20 transition-colors duration-700" />

                      <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="max-w-[200px]">
                          <h3 className={cn("text-3xl font-bold text-foreground tracking-tight", urbanist.className)}>Product Designer</h3>
                          <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                            Unlock designer discounts by contract length. Rate updates automatically.
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={cn("text-5xl font-bold text-foreground", syneTactile.className)}>
                            ${contractLength === 3 ? 30 : contractLength === 6 ? 27 : contractLength === 12 ? 24 : 21}
                            <span className="text-lg text-muted-foreground ml-1 font-sans">/hr</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-5 mb-12 relative z-10">
                        {[
                          'Premium UI/UX handoff assets',
                          'Fluent English communication',
                          'Daily creative iterations',
                          'Available in your time zone',
                          'Systems-thinking approach'
                        ].map((feat) => (
                          <div key={feat} className="flex items-center gap-4">
                            <div className="size-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 border border-secondary/20">
                              <Check className="size-3.5 text-secondary" strokeWidth={3} />
                            </div>
                            <span className="text-foreground/80 text-sm font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`${paths.getStarted}?tier=${encodeURIComponent('Product Designer')}`}
                        className="block w-full py-5 rounded-[24px] bg-gradient-to-r from-secondary to-primary text-primary-foreground font-black text-sm text-center transition-all hover:opacity-90 active:scale-[0.97] relative z-10 shadow-lg"
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
