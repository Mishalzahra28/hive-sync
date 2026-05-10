import React from 'react'
import Link from 'next/link'
import { MotionWrapper } from './client/motion-wrappers'
import { paths } from '@/constants/paths'

export const CTA = () => {
  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-background px-5 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] md:rounded-[3rem] bg-card border border-border p-8 sm:p-12 md:p-24 text-left overflow-hidden shadow-2xl"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" />
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Ready to grow?</p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] text-foreground font-syne">
              Let&apos;s Build Your <br className="hidden sm:block" />
              <span className="text-brand-gradient">Next Big Success Story .</span>
            </h2>
            </div>

            <div className="flex max-w-xl flex-col items-start gap-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-inter">
              Schedule a technical discovery call today. We&apos;ll audit your current workflow and show you how to automate it.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full gap-4 sm:gap-6">
              <Link
                href={paths.book}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-brand-gradient text-primary-foreground font-bold text-xs sm:text-sm shadow-md hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-center">Book a Free Consultation</span>
              </Link>
              <Link
                href={paths.contact}
                className="block w-full sm:w-auto text-sm font-bold text-center sm:text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Or send a message →
              </Link>
            </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
