"use client"

import type { CSSProperties } from 'react'

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

import { paths } from '@/constants/paths'

type CaseStudy = {
  client: string
  title: string
  description: string
  heroImage: string
  logo: string
  accent: string
  category: string
  outcome: string
  challenge: string
  solution: string
  results: {
    label: string
    value: string
    icon: LucideIcon
  }[]
  overview: {
    label: string
    value: string
    icon: LucideIcon
  }[]
  techStack: string[]
  metrics: string[]
}

const caseStudiesData = {
  taskhorse: {
    client: 'TaskHorse',
    title: 'On-Demand Service Marketplace Platform',
    description:
      'TaskHorse modernizes how customers hire verified local service providers, schedule jobs, make secure payments, and track work in real time.',
    heroImage: '/task-horse.jpeg',
    logo: '/task-horse-logo.svg',
    accent: '#3B82F6',
    category: 'Marketplace Platform',
    outcome:
      'A scalable two-sided marketplace with mobile apps, live tracking, payments, provider operations, and trust workflows built into one product.',
    challenge:
      'Traditional service hiring is fragmented across phone calls, unreliable provider availability, delayed scheduling, unclear payments, and low customer trust. TaskHorse needed one coordinated system that could support customers, providers, agencies, commissions, disputes, and real-time job status at scale.',
    solution:
      'Hive Sync engineered a full marketplace ecosystem with cross-platform mobile apps, a scalable backend, Stripe payments, Google Maps live tracking, in-app messaging, ratings, reviews, and operational tools for both individual providers and agencies.',
    results: [
      { label: 'Service Categories', value: '20+', icon: Target },
      { label: 'Booking Speed', value: 'Instant', icon: Zap },
      { label: 'Payment Security', value: '100%', icon: ShieldCheck },
    ],
    overview: [
      { label: 'Industry', value: 'Local services', icon: LineChart },
      { label: 'Platform', value: 'iOS, Android, APIs', icon: Layers3 },
      { label: 'Engagement', value: 'Product build', icon: Clock3 },
    ],
    techStack: ['React Native', 'Node.js', 'NestJS', 'MongoDB', 'Stripe', 'Google Maps API', 'Socket.IO', 'AWS'],
    metrics: [
      'Real-time booking and service management',
      'Cross-platform mobile applications for iOS and Android',
      'Secure Stripe payment integration with platform fees',
      'Live GPS tracking and ETA monitoring for providers',
      'Agency and individual provider support',
      'In-app messaging and real-time notifications',
      'Ratings, reviews, dispute handling, and customer trust workflows',
      'Scalable backend architecture on AWS',
    ],
  },
  hungerrush: {
    client: 'HungerRush',
    title: 'POS & Restaurant Management Ecosystem',
    description:
      'HungerRush is an all-in-one restaurant commerce and operations platform for restaurant chains, franchise groups, and high-growth food brands.',
    heroImage: 'https://www.hungerrush.com/wp-content/uploads/Restaurant_POS_hungerrush_pos-system.png',
    logo: 'https://pos.hungerrush.com/hs-fs/hubfs/HungerRush_RGB-3.png?width=1193&height=294&name=HungerRush_RGB-3.png',
    accent: '#E11D48',
    category: 'Restaurant Operations',
    outcome:
      'A unified operational layer connecting POS, kitchen routing, delivery workflows, customer data, and automated marketing programs.',
    challenge:
      'Restaurant chains were operating across disconnected POS systems, kitchen workflows, marketing tools, and third-party delivery providers. The result was operational drag, limited customer data ownership, and higher dependency on outside delivery marketplaces.',
    solution:
      "We developed the operational engine 'Full Rails' for POS integrations, kitchen routing, and delivery infrastructure, paired with HungerRush 360 Marketing for data-driven SMS and email re-engagement campaigns.",
    results: [
      { label: 'Data Ownership', value: '100%', icon: Target },
      { label: 'Campaign ROI', value: 'High', icon: Zap },
      { label: 'Delivery Speed', value: 'Real-time', icon: CheckCircle2 },
    ],
    overview: [
      { label: 'Industry', value: 'Restaurant tech', icon: LineChart },
      { label: 'Platform', value: 'POS, CRM, ordering', icon: Layers3 },
      { label: 'Engagement', value: 'Ecosystem build', icon: Clock3 },
    ],
    techStack: ['Ruby on Rails', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    metrics: [
      'Unified POS and digital ordering infrastructure',
      'Real-time kitchen workflow and order routing',
      'Automated SMS and email marketing triggers',
      'Advanced customer segmentation and loyalty tracking',
      'Franchise-level operational and marketing controls',
      'GPS-enabled driver dispatch and tracking system',
      'Restaurant analytics and reporting',
      'Third-party delivery sync for DoorDash and Uber Eats',
    ],
  },
  flowpilot: {
    client: 'FlowPilot AI',
    title: 'SaaS Platform for Workflow Automation',
    description: 'A modern SaaS platform focused on workflow automation, subscription management, analytics, and seamless collaboration for growing businesses.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    logo: '/flowpilot-logo.svg',
    accent: '#8B5CF6',
    category: 'SaaS Platform',
    outcome: 'A scalable SaaS platform with secure authentication, Stripe subscription billing, and a real-time analytics dashboard optimized for speed and SEO.',
    challenge: 'The client needed a scalable architecture capable of handling subscription management, real-time data synchronization, secure webhook processing, and extremely fast page loads while maintaining a visually polished UI.',
    solution: 'Hive Sync engineered a modern full-stack solution leveraging Next.js Server Components, Supabase Auth and Realtime, Stripe Checkout for subscriptions, and Tailwind CSS for a highly responsive, fast-loading, and SEO-optimized dashboard.',
    results: [
      { label: 'Onboarding Speed', value: 'Faster', icon: Zap },
      { label: 'Performance Score', value: 'High', icon: LineChart },
      { label: 'Payment Sync', value: 'Automated', icon: ShieldCheck },
    ],
    overview: [
      { label: 'Industry', value: 'B2B SaaS', icon: Target },
      { label: 'Platform', value: 'Web Application', icon: Layers3 },
      { label: 'Engagement', value: 'Full-Stack Build', icon: Clock3 },
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Vercel'],
    metrics: [
      'Complete authentication flow with Supabase Auth (Email, OAuth)',
      'Stripe Checkout integration for monthly and yearly subscription plans',
      'Secure webhook handling for automated subscription syncing and billing events',
      'Real-time dashboard updates and analytics filtering using Supabase Realtime',
      'Next.js Server Components and Edge deployment for maximum SEO and performance',
      'Modern, minimal SaaS interface with dark/light mode compatibility',
      'Scalable backend architecture designed for growing user traffic',
    ],
  },
} satisfies Record<string, CaseStudy>

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55 },
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5">
      <span className="size-1.5 rounded-full bg-primary" />
      <span className="text-[11px] font-black uppercase tracking-[0.22em] text-primary font-inter">
        {children}
      </span>
    </div>
  )
}

export default function CaseStudyDetailClient({ slug }: { slug: string }) {
  const study = caseStudiesData[slug as keyof typeof caseStudiesData]

  if (!study) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center text-foreground px-5">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="text-4xl font-bold font-syne">Project Not Found</h1>
          <Link href={paths.caseStudies} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Back to Work <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </main>
    )
  }

  const accentStyle = { '--study-accent': study.accent } as CSSProperties

  return (
    <main style={accentStyle} className="min-h-screen bg-background text-foreground">
      {/* Hero Section — Separate Text & Media */}
      <section className="relative bg-background pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={paths.caseStudies}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-foreground transition-all hover:bg-muted"
              >
                <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" aria-hidden />
                Back to Work
              </Link>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div className="group relative flex h-16 w-24 items-center justify-center rounded-2xl border border-border bg-card p-3 shadow-lg transition-transform hover:scale-105">
                    <Image
                      src={study.logo}
                      alt={`${study.client} logo`}
                      width={120}
                      height={48}
                      className="max-h-10 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1 font-inter">
                      {study.category}
                    </span>
                    <h2 className="text-3xl font-bold text-foreground font-syne tracking-tight leading-none">{study.client}</h2>
                  </div>
                </div>

                <h1 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground font-syne sm:text-5xl md:text-6xl">
                  {study.title.split(' ').map((word, i) => (
                    <span key={i} className="inline-block mr-[0.2em]">
                      {word === 'Platform' || word === 'Ecosystem' ? (
                        <span className="text-brand-gradient">{word}</span>
                      ) : word}
                    </span>
                  ))}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground font-inter md:text-xl font-medium">
                  {study.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separate Hero Banner Image */}
      <section className="px-5 md:px-10 pb-16 md:pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] shadow-2xl border border-border"
        >
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[minmax(0,1fr)_380px] xl:gap-20">
          <div className="flex flex-col gap-16 md:gap-20">
            <motion.section {...fadeUp} className="flex max-w-4xl flex-col gap-7">
              <SectionEyebrow>Project Overview</SectionEyebrow>
              <h2 className="text-3xl font-bold tracking-tight text-foreground font-syne sm:text-4xl md:text-5xl">
                From operational complexity to a product system that feels simple.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-inter md:text-xl">
                {study.outcome}
              </p>
            </motion.section>

            <motion.section {...fadeUp} className="grid gap-6 md:grid-cols-2">
              <article className="group relative overflow-hidden rounded-[32px] border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/30">
                <div className="absolute inset-x-0 top-0 h-1 bg-[var(--study-accent)] opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col gap-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-muted text-[var(--study-accent)] group-hover:scale-110 transition-transform">
                    <Target className="size-7" aria-hidden />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground font-syne">The Challenge</h3>
                    <p className="text-base leading-relaxed text-muted-foreground font-inter">
                      {study.challenge}
                    </p>
                  </div>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-[32px] border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/30">
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col gap-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Zap className="size-7" aria-hidden />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground font-syne">The Hive Solution</h3>
                    <p className="text-base leading-relaxed text-muted-foreground font-inter">
                      {study.solution}
                    </p>
                  </div>
                </div>
              </article>
            </motion.section>

            <motion.section {...fadeUp} className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="flex max-w-2xl flex-col gap-4">
                  <SectionEyebrow>What We Built</SectionEyebrow>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground font-syne sm:text-4xl">
                    Delivery scope designed for real product adoption.
                  </h2>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {study.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-primary/30"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span className="text-sm font-medium leading-relaxed text-foreground/80 font-inter">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <motion.div {...fadeUp} className="flex flex-col gap-5">
              <div className="rounded-[32px] border border-border bg-card p-6 shadow-xl shadow-foreground/5 md:p-7">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-bold tracking-tight text-foreground font-syne">Project Snapshot</h2>
                    <span className="size-2.5 rounded-full bg-[var(--study-accent)]" />
                  </div>

                  <div className="flex flex-col gap-4">
                    {study.overview.map((item) => {
                      const Icon = item.icon

                      return (
                        <div key={item.label} className="flex items-start gap-4 rounded-2xl bg-muted/50 p-4">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-background text-[var(--study-accent)]">
                            <Icon className="size-5" aria-hidden />
                          </div>
                          <div className="flex min-w-0 flex-col gap-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground font-inter">
                              {item.label}
                            </span>
                            <span className="text-sm font-bold leading-relaxed text-foreground font-inter">{item.value}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-border bg-card p-6 shadow-xl shadow-foreground/5 md:p-7">
                <div className="flex flex-col gap-5">
                  <h2 className="text-xl font-bold tracking-tight text-foreground font-syne">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground/80 font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={paths.getStarted}
                className="group flex items-center justify-between gap-4 rounded-[32px] bg-brand-gradient p-6 text-primary-foreground shadow-xl shadow-primary/15 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="flex flex-col gap-1 relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em]">Ready to scale?</span>
                  <span className="text-base font-bold">Start a Project</span>
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1 relative z-10">
                  <ArrowRight className="size-6" aria-hidden />
                </span>
              </Link>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* Discover More Work */}
      <section className="px-5 py-20 md:px-10 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <SectionEyebrow>More Projects</SectionEyebrow>
              <h2 className="text-3xl font-bold tracking-tight text-foreground font-syne sm:text-4xl">
                Discover more of our work.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(caseStudiesData)
                .filter(([key]) => key !== slug)
                .map(([key, otherStudy]) => (
                  <Link key={key} href={`/work/${key}`} className="group relative aspect-[16/10] overflow-hidden rounded-[24px] cursor-pointer shadow-2xl">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <Image
                        src={otherStudy.heroImage}
                        alt={otherStudy.client}
                        fill
                        className="object-cover object-left"
                        sizes="(max-width: 768px) 100vw, 800px"
                        unoptimized
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-4 bottom-4 md:inset-x-8 md:bottom-8">
                      <div className="relative p-4 md:p-6 rounded-[20px] md:rounded-[24px] border-2 border-primary/30 bg-black/40 backdrop-blur-xl flex items-center justify-between transition-all duration-500 group-hover:bg-black/50 group-hover:border-primary/50 shadow-2xl">
                        <div className="flex items-center gap-3 md:gap-5 flex-1 min-w-0">
                          <div className="size-10 md:size-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center p-2 md:p-2.5 border border-white/20 shrink-0">
                            <Image
                              src={otherStudy.logo}
                              alt={otherStudy.client}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain brightness-0 invert"
                              unoptimized
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg md:text-2xl font-bold text-white truncate font-syne">
                              {otherStudy.client}
                            </h3>
                            <p className="text-white/70 text-[11px] md:text-sm font-medium leading-tight line-clamp-1">
                              {otherStudy.title}
                            </p>
                          </div>
                        </div>
                        <div className="size-9 md:size-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground transition-all duration-500 group-hover:rotate-12 shadow-lg shrink-0 ml-3">
                          <ArrowUpRight className="size-4 md:size-6" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px] flex flex-col gap-12">
          <motion.div {...fadeUp} className="flex flex-col gap-5 max-w-3xl">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
              Next Step
            </span>
            <h2 className="text-3xl font-bold tracking-tight font-syne md:text-5xl leading-[1.1]">
              Ready to build your next breakthrough platform?
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-xl">
              We help ambitious teams build scalable web apps, AI systems, and mobile products that drive growth.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="group relative flex flex-col gap-8 overflow-hidden rounded-[40px] bg-brand-gradient p-10 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-16 shadow-2xl shadow-primary/20"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold font-syne">Let&apos;s start your project</h3>
              <p className="text-primary-foreground/80 font-inter">Book a strategy call to discuss your vision.</p>
            </div>

            <Link
              href={paths.getStarted}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-bold text-primary transition-all hover:gap-5 hover:shadow-xl hover:scale-105 active:scale-95 relative z-10"
            >
              Get Started <ArrowRight className="size-5" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
