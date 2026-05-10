import { BadgeCheck, Bot, ChevronRight, Cloud, Layers, Palette, Smartphone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { getServiceSchema, JsonLd } from '@/components/common/json-ld'

import { paths } from '@/constants/paths'

import { MotionWrapper } from './client/motion-wrappers'

type Service = {
  title: string
  description: string
  labels: string[]
  iconName: 'layers' | 'bot' | 'smartphone' | 'cloud' | 'palette' | 'badge-check'
}

const services: Service[] = [
  {
    title: "Custom Web Application Development",
    description:
      "Multi-tenant platforms built to scale from your first user to your millionth. Subscription billing, RBAC, analytics, and an API-first foundation — production-grade on day one.",
    labels: ["SaaS Architecture", "API Development", "Multi-tenancy", "Subscription Billing"],
    iconName: 'layers',
  },
  {
    title: "AI Solutions & Intelligent Agents",
    description:
      "AI workflows, conversational agents, and ML pipelines that move real metrics — not slide decks. Every system ships with evals, monitoring, and guardrails wired in from the start.",
    labels: ["AI Agents", "ML Pipelines", "LLM Integration", "Workflow Automation"],
    iconName: 'bot',
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android — Flutter, React Native, Kotlin, Swift. Consumer products users come back to, and enterprise tools that hold up in the field.",
    labels: ["iOS & Android", "Flutter", "React Native", "Enterprise Mobile"],
    iconName: 'smartphone',
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    description:
      "AWS, Azure, and GCP architectures that scale predictably and bill predictably. CI/CD, container orchestration, IaC, and 24/7 observability so your team ships at speed without flinching.",
    labels: ["AWS", "Azure", "CI/CD", "Kubernetes"],
    iconName: 'cloud',
  },
  {
    title: "UI/UX Design & Brand Identity",
    description:
      "Interfaces, design systems, and brand identities engineered to convert. Research-led UX, pixel-precise UI, and a coherent visual language across every surface your customers touch.",
    labels: ["UI/UX Design", "Design Systems", "Brand Identity", "Conversion Optimization"],
    iconName: 'palette',
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Manual and automated coverage across web, mobile, and API layers. We surface the things that break in production — race conditions, security gaps, performance cliffs — before your users do.",
    labels: ["Test Automation", "Performance Testing", "Security QA", "Regression"],
    iconName: 'badge-check',
  },
]

const ICON_MAP = {
  layers: Layers,
  bot: Bot,
  smartphone: Smartphone,
  cloud: Cloud,
  palette: Palette,
  'badge-check': BadgeCheck,
}


export const Services = () => {
  return (
    <section className="bg-background py-24 md:py-32 px-5 md:px-10" id="services">
      <JsonLd data={getServiceSchema(services)} />
      <div className="max-w-[1500px] mx-auto">

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
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Services</p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.1] text-foreground max-w-2xl font-syne">
              Software Services <br /><span className="text-brand-gradient">That Scale .</span>
            </h2>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-6">
            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed font-inter">
              We build scalable web apps, AI solutions, mobile apps, and modern digital products.
            </p>
            <Link href={paths.getStarted} className="group flex items-center gap-1 text-primary font-bold hover:text-primary/80 transition-all text-sm uppercase tracking-widest">
              Start a project <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </MotionWrapper>

        {/* Uniform Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.iconName]
            return (
              <MotionWrapper
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative flex flex-col gap-6 p-8 rounded-[2rem] transition-all duration-500 overflow-hidden shadow-[0_18px_60px_hsl(var(--primary)/0.08)] hover:-translate-y-1 hover:shadow-[0_24px_80px_hsl(var(--primary)/0.16)]"
              >
                {/* Gradient Border Background */}
                <div className="absolute -inset-px rounded-[2rem] bg-brand-gradient opacity-80 transition-all duration-500 group-hover:opacity-100 z-0" />
                <div className="absolute -inset-px rounded-[2rem] bg-brand-gradient opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25 z-0" />
                <div className="absolute inset-[2px] rounded-[calc(2rem-2px)] bg-card z-0" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem] z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer-slide_1.5s_infinite]" />
                </div>

                {/* Icon */}
                <div className="relative z-10 size-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm group-hover:shadow-primary/20">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>

                {/* Title + Description */}
                <div className="relative z-10 flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Labels */}
                <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-2">
                  {service.labels.map((label) => (
                    <span
                      key={label}
                      className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted/50 border border-border rounded-full px-2.5 py-1 group-hover:border-primary/20 transition-colors"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </MotionWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
