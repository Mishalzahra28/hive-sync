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
    <section className="relative overflow-hidden py-24 bg-[#020617]" id="pricing">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-[10%] w-[50%] h-[50%] rounded-full bg-[#3B82F6]/10 blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#8B5CF6]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B82F6]">Pricing</p>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-[64px] leading-[1.1] text-[#F1F5F9] max-w-xl">
              Transparent Pricing, Zero <span className="text-[#3B82F6]">Surprises.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-[17px] text-[#94A3B8] leading-relaxed">
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
          <h3 className={cn("text-xl md:text-2xl font-medium text-[#F1F5F9] mb-6", urbanist.className)}>
            How do you want to work?
          </h3>
          
          <div className="relative inline-flex p-1 rounded-full bg-[#1E293B]/40 border border-[#1E293B] backdrop-blur-md">
            <button
              onClick={() => setWorkType('resource')}
              className={cn(
                "relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300",
                workType === 'resource' ? "text-[#020617]" : "text-[#94A3B8] hover:text-[#F1F5F9]"
              )}
            >
              {workType === 'resource' && (
                <motion.div
                  layoutId="work-type-pill"
                  className="absolute inset-0 bg-[#F1F5F9] rounded-full -z-10 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              I need a resource
            </button>
            <button
              onClick={() => setWorkType('project')}
              className={cn(
                "relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300",
                workType === 'project' ? "text-[#020617]" : "text-[#94A3B8] hover:text-[#F1F5F9]"
              )}
            >
              {workType === 'project' && (
                <motion.div
                  layoutId="work-type-pill"
                  className="absolute inset-0 bg-[#F1F5F9] rounded-full -z-10 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              I have a project
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
                    "group relative flex flex-col p-8 md:p-10 rounded-[56px] transition-all duration-700 overflow-hidden",
                    tier.name === 'Custom Project'
                      ? "bg-white text-black"
                      : "bg-[#0A0F1E]/40 backdrop-blur-3xl border border-white/10 hover:border-white/20 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)]"
                  )}
                >
                  {/* Premium Shine Sweep Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 ease-in-out" />
                  </div>

                  {/* Dynamic Accent Glow */}
                  {tier.name !== 'Custom Project' && (
                    <div 
                      className="absolute -top-32 -right-32 size-80 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" 
                      style={{ backgroundColor: tier.accent }}
                    />
                  )}

                  <div className="relative z-10 mb-10">
                    <h3 className={cn("text-3xl font-bold tracking-tight mb-3", urbanist.className, tier.name === 'Custom Project' ? "text-black" : "text-white")}>
                      {tier.name}
                    </h3>

                    <div className={cn(
                      "inline-flex px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.15em] mb-8",
                      tier.name === 'Custom Project' ? "bg-black/5 text-black" : "bg-white/5 text-white/40"
                    )}>
                      {tier.price}
                    </div>

                    <p className={cn("text-base leading-relaxed", tier.name === 'Custom Project' ? "text-black/60" : "text-white/40")}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="relative z-10 space-y-5 mb-12 flex-grow">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-4">
                        <div className={cn(
                          "size-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0",
                          tier.name === 'Custom Project' ? "bg-black/10" : "bg-white/5 border border-white/10"
                        )}>
                          <Check className={cn("size-3", tier.name === 'Custom Project' ? "text-black" : "text-white")} strokeWidth={4} />
                        </div>
                        <span className={cn("text-[15px] font-medium transition-colors duration-300", tier.name === 'Custom Project' ? "text-black/80" : "text-white/60 group-hover:text-white/90")}>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`${paths.getStarted}?tier=${encodeURIComponent(tier.name)}`}
                    className={cn(
                      "relative z-10 w-full py-5 rounded-[24px] font-black text-sm tracking-widest uppercase transition-all duration-300 active:scale-[0.97] text-center",
                      tier.name === 'Custom Project'
                        ? "bg-black text-white hover:bg-black/90 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                        : "bg-white text-black hover:bg-white/90 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
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
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#3B82F6]/5 border border-[#3B82F6]/10 mb-10">
                      <span className="size-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3B82F6]">How it works</span>
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
                          <div className="size-14 rounded-2xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-center flex-shrink-0 group-hover:border-[#3B82F6]/50 transition-colors shadow-2xl">
                            <step.icon className="size-6 text-[#3B82F6]" />
                            <div className="absolute -bottom-2 -right-2 size-6 rounded-full bg-[#1E293B] border border-[#3B82F6]/20 flex items-center justify-center text-[10px] font-bold text-[#3B82F6]">
                              0{index + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className={cn("text-lg font-bold text-[#F1F5F9] mb-2", urbanist.className)}>
                              {step.title}
                            </h4>
                            <p className="text-[#94A3B8] text-sm leading-relaxed">
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
                    <div className="p-2 rounded-[28px] bg-white/[0.02] backdrop-blur-2xl border border-white/10 flex flex-wrap gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                      {contractLengths.map((len) => (
                        <button
                          key={len.value}
                          onClick={() => setContractLength(len.value)}
                          className={cn(
                            "relative px-8 py-4 rounded-[22px] text-[15px] font-bold transition-all duration-500",
                            contractLength === len.value
                              ? "text-white"
                              : "text-white/30 hover:text-white/60 hover:bg-white/[0.02]"
                          )}
                        >
                          {contractLength === len.value && (
                            <motion.div
                              layoutId="contract-pill"
                              className="absolute inset-0 bg-white/[0.08] border border-white/20 backdrop-blur-md rounded-[22px] -z-10 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                              transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                            />
                          )}
                          <span className="relative z-10">{len.label}</span>
                          
                          {len.popular && (
                            <span className={cn(
                              "absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.1em] shadow-2xl border transition-all duration-500 whitespace-nowrap",
                              contractLength === len.value 
                                ? "bg-white text-[#3B82F6] border-white shadow-blue-500/20" 
                                : "bg-[#1E293B] text-white/70 border-white/10"
                            )}>
                              Best Value
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="mt-5 text-[13px] text-white/40 font-medium px-4">
                      Rates scale dynamically with your commitment level.
                    </p>
                  </div>

                  {/* Resource Cards (Glass Effect) */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* Developer Card */}
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative p-10 rounded-[56px] bg-white/[0.03] backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                    >
                      <div className="absolute -top-24 -right-24 size-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-700" />
                      
                      <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="max-w-[200px]">
                          <h3 className={cn("text-3xl font-bold text-white tracking-tight", urbanist.className)}>Full-Stack Developer</h3>
                          <p className="text-[11px] text-white/40 mt-2 leading-relaxed">
                            Unlock developer discounts by contract length. Rate updates automatically.
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={cn("text-5xl font-bold text-white", syneTactile.className)}>
                            ${contractLength === 3 ? 38 : contractLength === 6 ? 35 : contractLength === 12 ? 31 : 28}
                            <span className="text-lg text-white/40 ml-1 font-sans">/hr</span>
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
                            <div className="size-6 rounded-full bg-blue-400/10 flex items-center justify-center flex-shrink-0 border border-blue-400/20">
                              <Check className="size-3.5 text-blue-400" strokeWidth={3} />
                            </div>
                            <span className="text-white/60 text-sm font-medium group-hover:text-white/90 transition-colors">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full py-5 rounded-[24px] bg-white text-black font-black text-sm transition-all hover:bg-white/90 active:scale-[0.97] relative z-10 shadow-[0_15px_30px_rgba(255,255,255,0.1)]">
                        Hire Developer Resource
                      </button>
                    </motion.div>

                    {/* Designer Card */}
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group relative p-10 rounded-[56px] bg-white/[0.03] backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                    >
                      <div className="absolute -top-24 -right-24 size-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-700" />

                      <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="max-w-[200px]">
                          <h3 className={cn("text-3xl font-bold text-white tracking-tight", urbanist.className)}>Product Designer</h3>
                          <p className="text-[11px] text-white/40 mt-2 leading-relaxed">
                            Unlock designer discounts by contract length. Rate updates automatically.
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={cn("text-5xl font-bold text-white", syneTactile.className)}>
                            ${contractLength === 3 ? 30 : contractLength === 6 ? 27 : contractLength === 12 ? 24 : 21}
                            <span className="text-lg text-white/40 ml-1 font-sans">/hr</span>
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
                            <div className="size-6 rounded-full bg-purple-400/10 flex items-center justify-center flex-shrink-0 border border-purple-400/20">
                              <Check className="size-3.5 text-purple-400" strokeWidth={3} />
                            </div>
                            <span className="text-white/60 text-sm font-medium group-hover:text-white/90 transition-colors">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full py-5 rounded-[24px] bg-gradient-to-r from-purple-500 to-blue-500 text-white font-black text-sm transition-all hover:opacity-90 active:scale-[0.97] relative z-10 shadow-[0_15px_30px_rgba(139,92,246,0.2)]">
                        Hire Designer Resource
                      </button>
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
