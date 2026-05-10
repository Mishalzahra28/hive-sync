"use client"
import { ArrowRight, BriefcaseBusiness, ChevronRight, Globe2, Telescope, Zap } from "lucide-react"
import { motion } from "motion/react"
import React from "react"
import Link from "next/link"

import { CareerForm } from "./career-form"
import { MotionH1, MotionP, MotionWrapper } from "../sections/client/motion-wrappers"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Zap,
    title: "Ship at speed",
    description:
      "We move fast without cutting corners. Our engineers own features end-to-end, from architecture to deploy.",
  },
  {
    icon: Globe2,
    title: "Fully remote-first",
    description:
      "Work from anywhere, meet on purpose. Async by default, in-person when it matters.",
  },
  {
    icon: Telescope,
    title: "Forward thinking",
    description:
      "We're building for a decade ahead. If you get excited about problems nobody has solved yet, you'll fit right in.",
  },
]

function NoOpenRoles() {
  return (
    <div className="relative h-full rounded-[2.5rem] border border-border overflow-hidden flex items-center justify-center bg-card shadow-xl">
      {/* Animated gradient orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      {/* Dotted grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center py-20 px-8 text-center gap-7">
        {/* Icon cluster */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute inset-6 rounded-full bg-brand-gradient border border-primary/40 flex items-center justify-center shadow-lg">
            <BriefcaseBusiness className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
          </div>
        </div>

        <div className="max-w-sm">
          <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight font-syne">
            No open roles — yet.
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-inter">
            We're heads-down building. When we're ready to grow the team, you'll
            want to already be on our radar. Drop your details below — we review
            every application personally.
          </p>
        </div>

        <div className="flex items-center gap-2 text-primary text-sm font-bold font-inter">
          <span>Apply speculatively</span>
          <ArrowRight className="w-4 h-4 animate-bounce-x" />
        </div>
      </div>
    </div>
  )
}

export const Careers = () => {
  return (
    <main className="bg-background min-h-screen text-foreground overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative px-5 md:px-10 pt-32 pb-24 md:pt-48 md:pb-32">
        {/* Background Animation & Patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-15%] left-[-10%] w-[65%] h-[65%] rounded-full opacity-25 blur-[140px] animate-pulse" style={{ background: 'linear-gradient(135deg, hsl(221, 83%, 45%), hsl(262, 70%, 55%))' }} />
            <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[140px] animate-pulse" style={{ animationDelay: '0.8s', background: 'linear-gradient(225deg, hsl(262, 70%, 55%), hsl(226, 70%, 52%))' }} />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-6 max-w-4xl">
              <MotionWrapper
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Careers</span>
              </MotionWrapper>

              <MotionH1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] text-foreground font-syne"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Build what&apos;s <span className="text-brand-gradient">next.</span>
              </MotionH1>

              <MotionP
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We&apos;re hiring engineers who think in systems, ship with conviction,
                and aren&apos;t satisfied by problems that are already solved.
              </MotionP>
            </div>

            <MotionWrapper
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="#apply"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-gradient text-primary-foreground font-bold text-sm uppercase tracking-widest shadow-xl hover:shadow-primary/40 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now <ChevronRight className="w-5 h-5" />
                </span>
              </Link>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ── Values strip ── */}
      <section className="py-24 md:py-32 px-5 md:px-10 border-y border-border/50 bg-muted/30">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                className="group flex flex-col gap-6 p-8 rounded-[2.5rem] border border-border hover:border-primary/30 bg-card shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-syne">{v.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed font-inter">{v.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Open Roles + Form ── */}
      <section id="apply" className="py-24 md:py-32 px-5 md:px-10">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-stretch">
            {/* ── Left col — Open roles ── */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Open Positions</p>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground font-syne mb-12">
                Current<br />Openings
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <NoOpenRoles />
              </motion.div>
            </div>

            {/* ── Right col — Application form ── */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Get on our radar</p>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground font-syne mb-12">
                Join Our<br />Workforce
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col rounded-[2.5rem] border border-border bg-card p-8 md:p-10 shadow-2xl backdrop-blur-sm"
              >
                <CareerForm className="flex-1" />
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}