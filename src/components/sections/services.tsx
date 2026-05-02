"use client"

import { paths } from '@/constants/paths'
import { BadgeCheck, Bot, ChevronRight, Cloud, Layers, Palette, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

type Service = {
  title: string
  description: string
  labels: string[]
  Icon: LucideIcon
}

const services: Service[] = [
  {
    title: "SaaS Product Engineering",
    description:
      "Multi-tenant platforms built to scale from your first user to your millionth. Subscription billing, RBAC, analytics, and an API-first foundation — production-grade on day one.",
    labels: ["SaaS Architecture", "API Development", "Multi-tenancy", "Subscription Billing"],
    Icon: Layers,
  },
  {
    title: "AI Solutions & Intelligent Agents",
    description:
      "AI workflows, conversational agents, and ML pipelines that move real metrics — not slide decks. Every system ships with evals, monitoring, and guardrails wired in from the start.",
    labels: ["AI Agents", "ML Pipelines", "LLM Integration", "Workflow Automation"],
    Icon: Bot,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android — Flutter, React Native, Kotlin, Swift. Consumer products users come back to, and enterprise tools that hold up in the field.",
    labels: ["iOS & Android", "Flutter", "React Native", "Enterprise Mobile"],
    Icon: Smartphone,
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    description:
      "AWS, Azure, and GCP architectures that scale predictably and bill predictably. CI/CD, container orchestration, IaC, and 24/7 observability so your team ships at speed without flinching.",
    labels: ["AWS", "Azure", "CI/CD", "Kubernetes"],
    Icon: Cloud,
  },
  {
    title: "UI/UX Design & Brand Identity",
    description:
      "Interfaces, design systems, and brand identities engineered to convert. Research-led UX, pixel-precise UI, and a coherent visual language across every surface your customers touch.",
    labels: ["UI/UX Design", "Design Systems", "Brand Identity", "Conversion Optimization"],
    Icon: Palette,
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Manual and automated coverage across web, mobile, and API layers. We surface the things that break in production — race conditions, security gaps, performance cliffs — before your users do.",
    labels: ["Test Automation", "Performance Testing", "Security QA", "Regression"],
    Icon: BadgeCheck,
  },
]

export const Services = () => {
  return (
    <section className="bg-background py-24 px-6 md:px-12 lg:px-24" id="services">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary font-bold">/</span>
              <span className="text-[14px] uppercase tracking-wider font-bold text-muted-foreground">What we build</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-none tracking-tight">
              Engineered<br />to ship.
            </h2>
          </div>

          <div className="flex-1 max-w-md">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Six core practices. One delivery standard. Hire a single capability or an integrated team — the bar stays the same: shippable software, measurable outcomes, no hand-waving.
            </p>
            <div className="flex gap-8">
              <Link href={paths.getStarted} className="group flex items-center gap-1 text-primary font-bold hover:text-primary/80 transition-all">
                Start a project <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Uniform Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.Icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative flex flex-col gap-6 p-8 rounded-[2rem] bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="size-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>

                {/* Title + Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Labels */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {service.labels.map((label) => (
                    <span
                      key={label}
                      className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted border border-border rounded-full px-2.5 py-1"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
