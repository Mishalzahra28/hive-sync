"use client"

import { ArrowRight,BriefcaseBusiness, ChevronRight, Globe2, Telescope, Zap } from "lucide-react"
import { motion } from "motion/react"
import React from "react"

import { CareerForm } from "./career-form"


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
    <div className="relative h-full rounded-[2.5rem] border border-border overflow-hidden  flex items-center justify-center bg-white/[0.01] text-slate-500 text-center p-8">
      {/* Animated gradient orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-accent/10 blur-[60px]" />
      </div>

      {/* Dotted grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center py-24 px-8 text-center gap-7">
        {/* Icon cluster */}
        <div className="relative w-28 h-28">
          {/* Outer ring pulse */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute inset-3 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: "2.3s", animationDelay: "0.4s" }} />
          {/* Core */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#0F1C2E] border border-primary/40 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            <BriefcaseBusiness className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        <div className="max-w-sm">
          <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
            No open roles — yet.
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            We're heads-down building. When we're ready to grow the team, you'll
            want to already be on our radar. Drop your details below — we review
            every application personally.
          </p>
        </div>

        {/* CTA arrow */}
        <div className="flex items-center gap-2 text-primary text-sm font-bold">
          <span>Apply speculatively</span>
          <ArrowRight className="w-4 h-4 animate-bounce-x" />
        </div>
      </div>
    </div>
  )
}


export const Careers = () => {
  return (
    <main className="bg-background min-h-screen text-foreground">
      {/* ── Hero ── */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="text-primary font-bold">/</span>
              <span className="text-[14px] uppercase tracking-wider font-bold text-muted-foreground">
                Join the team
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold leading-none tracking-tight mb-8">
              Build what's{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                  next.
                </span>
                {/* Underline accent */}
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-primary/60 to-transparent" />
              </span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
              <p className="max-w-xl text-lg md:text-xl text-slate-500 leading-relaxed">
                We're hiring engineers who think in systems, ship with conviction,
                and aren't satisfied by problems that are already solved. If that
                sounds like you — keep reading.
              </p>
              <a
                href="#apply"
                className="flex-shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 active:scale-95 w-fit"
              >
                Apply Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Values strip ── */}
      <section className="py-16 px-6 md:px-12 lg:px-24 border-y border-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group flex flex-col gap-4 p-7 rounded-[2rem] border border-border hover:border-primary/30 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Open Roles + Form ── */}
      <section id="apply" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/*
            `items-stretch` makes both columns adopt the tallest sibling's
            height. Each column is `flex flex-col` so `flex-1` on the card
            fills the remaining space after the label + heading.
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

            {/* ── Left col — Open roles ── */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary font-bold">/</span>
                <span className="text-[14px] uppercase tracking-wider font-bold text-muted-foreground">
                  Open Positions
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-10">
                Current<br />Openings
              </h2>

              {/* flex-1 → card grows to fill remaining column height */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex-1"
              >
                {/* NoOpenRoles is h-full, so it fills this flex-1 wrapper */}
                <NoOpenRoles />
              </motion.div>
            </div>

            {/* ── Right col — Application form ── */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary font-bold">/</span>
                <span className="text-[14px] uppercase tracking-wider font-bold text-muted-foreground">
                  Get on our radar
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-10">
                Join Our<br />Workforce
              </h2>

              {/*
                flex-1 + flex flex-col: the card border stretches to match
                the left card. CareerForm receives `flex-1` via className so
                the success state fills the same height — no shrinking.
              */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex-1 flex flex-col rounded-[2.5rem] border border-border bg-white/[0.015] p-8 shadow-2xl backdrop-blur-sm"
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