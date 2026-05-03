"use client"

import { ArrowLeft, CheckCircle2, ChevronRight, Target, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const caseStudiesData = {
  'mcdonalds': {
    client: "McDonald's",
    title: "Global Compliance & Data Management System",
    description: "Developing a robust, real-time compliance tracking system for 38,000+ global locations, ensuring data integrity and regulatory adherence across multiple jurisdictions.",
    heroImage: "/case-mcd.png",
    accent: "#FFBC0D",
    challenge: "McDonald's faced significant hurdles in synchronizing compliance data across thousands of international franchises. Manual reporting led to delays, inconsistencies, and potential regulatory risks.",
    solution: "Hive Sync engineered a custom, distributed ledger-based management system. We implemented real-time data ingestion pipelines and a glassmorphic executive dashboard for instant oversight.",
    results: [
      { label: "Reporting Speed", value: "95%", icon: Zap },
      { label: "Data Accuracy", value: "99.9%", icon: CheckCircle2 },
      { label: "Global Reach", value: "120+", icon: Globe },
    ],
    techStack: ["Next.js", "ClickHouse", "GraphQL", "AWS Lambda", "Terraform"],
    metrics: [
      "Real-time monitoring across 38k+ locations",
      "Automated regulatory reporting for 120+ countries",
      "Centralized data warehouse with sub-second querying",
      "Custom mobile app for franchise managers"
    ]
  },
  'subway': {
    client: "Subway",
    title: "Next-Gen CRM & Franchise Management Portal",
    description: "Reimagining the franchise experience with a data-driven CRM that streamlines operations, boosts loyalty, and provides deep insights into store performance.",
    heroImage: "/case-subway.png",
    accent: "#008B2B",
    challenge: "Fragmented legacy systems made it difficult for Subway headquarters to communicate with franchise owners and track customer loyalty trends effectively.",
    solution: "We built a unified, cloud-native portal that integrates CRM, supply chain tracking, and performance analytics into a single, high-fidelity experience.",
    results: [
      { label: "Franchise Adoption", value: "88%", icon: Zap },
      { label: "Efficiency Gain", value: "45%", icon: CheckCircle2 },
      { label: "Customer Loyalty", value: "+30%", icon: Globe },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    metrics: [
      "Unified portal for 20k+ franchise owners",
      "Integrated loyalty program with real-time rewards",
      "AI-driven inventory forecasting",
      "Cross-platform support (Desktop, Tablet, Mobile)"
    ]
  }
}

// Fixed missing Globe icon from the original code
import { Globe } from 'lucide-react'

export default function CaseStudyDetailClient({ slug }: { slug: string }) {
  const study = caseStudiesData[slug as keyof typeof caseStudiesData]

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-background min-h-screen text-foreground pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[80vh] min-h-[450px] sm:min-h-[600px] w-full overflow-hidden">
        <Image 
          src={study.heroImage} 
          alt={study.title}
          fill
          className="object-cover"
          priority
        />
        {/* Soft fade so hero text reads on busy images and blends into the page below */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-background" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-20">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 sm:mb-8 transition-colors group"
              >
                <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-widest">Back to Work</span>
              </Link>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="size-8 rounded-lg bg-white p-1.5 flex items-center justify-center border border-white/40">
                      <Image
                        src={study.accent === "#FFBC0D" ? "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" : "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg"}
                        alt={study.client}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-white">{study.client}</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 text-white drop-shadow-lg">
                    {study.title}
                  </h1>
                </div>

                <div className="hidden lg:block">
                   <div className="p-1 px-4 rounded-full border border-white/40 bg-white/15 backdrop-blur-xl mb-10">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Success Story</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview & Metrics */}
      <section className="relative z-10 -mt-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            
            {/* Left: Content */}
            <div className="space-y-12 sm:space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  {study.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border">
                  <div>
                    <div className="flex items-center gap-3 mb-4 sm:mb-6 text-foreground">
                      <Target className="size-5 sm:size-6" style={{ color: study.accent }} />
                      <h3 className="text-xl sm:text-2xl font-bold m-0">The Challenge</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4 sm:mb-6 text-foreground">
                      <Zap className="size-5 sm:size-6" style={{ color: study.accent }} />
                      <h3 className="text-xl sm:text-2xl font-bold m-0">The Hive Solution</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Success Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-foreground">Success Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {study.results.map((res, i) => (
                    <div key={i} className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                      <res.icon className="size-6 sm:size-8 mb-4 sm:mb-6" style={{ color: study.accent }} />
                      <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">{res.value}</div>
                      <div className="text-[10px] sm:text-sm font-bold uppercase tracking-widest text-muted-foreground">{res.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Sidebar Info */}
            <aside className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] bg-card border border-border shadow-sm"
              >
                <h4 className="text-lg font-bold mb-6 sm:mb-8 text-foreground">Project Details</h4>
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Technologies</span>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-full bg-muted border border-border text-[10px] sm:text-xs font-bold text-foreground/80">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 sm:pt-8 border-t border-border">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4 sm:mb-6">Key Deliverables</span>
                    <ul className="space-y-3 sm:space-y-4">
                      {study.metrics.map((m, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/get-started"
                  className="block w-full mt-8 sm:mt-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-primary text-primary-foreground font-black text-xs sm:text-sm uppercase tracking-widest text-center hover:bg-primary/90 transition-colors"
                >
                  Let&apos;s Work Together
                </Link>
              </motion.div>

              {/* Small Banner */}
              <Link href="/get-started" className="block p-5 rounded-[24px] bg-gradient-to-br from-primary to-secondary overflow-hidden relative group cursor-pointer shadow-md hover:shadow-lg transition-shadow">
                <div className="relative z-10 flex items-center justify-between gap-6">
                  <div className="min-w-0">
                    <h4 className="text-[13px] md:text-sm font-bold text-primary-foreground">Scale Your Vision</h4>
                    <p className="text-primary-foreground/80 text-[11px] leading-relaxed line-clamp-1">Ready to build your next breakthrough platform?</p>
                  </div>
                  <div className="size-8 rounded-full bg-background flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-1">
                    <ChevronRight className="size-4 text-primary" />
                  </div>
                </div>
              </Link>
            </aside>

          </div>
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="mt-20 sm:mt-32 pt-16 sm:pt-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-6 sm:mb-8 block">Up Next</span>
          <Link href={slug === 'mcdonalds' ? '/work/subway' : '/work/mcdonalds'} className="group">
             <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-foreground/30 group-hover:text-foreground transition-colors duration-500">
               {slug === 'mcdonalds' ? 'Subway' : "McDonald's"}
             </h2>
             <div className="mt-6 sm:mt-8 inline-flex items-center gap-3 text-primary font-bold group-hover:translate-x-2 transition-transform">
               View Case Study <ArrowLeft className="size-4 sm:size-5 rotate-180" />
             </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
