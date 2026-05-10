"use client"

import { MotionWrapper } from '@/components/sections/client/motion-wrappers'

export default function BookPage() {
  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Consultation</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-syne mb-6">
            Book a Free <span className="text-brand-gradient">Consultation</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select a time that works best for you. Let&apos;s discuss your project goals, technical requirements, and how HiveSync can help you scale.
          </p>
        </MotionWrapper>

        <MotionWrapper
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-2xl h-[800px]"
        >
          {/* Calendly Inline Widget */}
          <iframe
            src="https://calendly.com/hivesync?hide_gdpr_banner=1&hide_event_type_details=1&background_color=ffffff&text_color=0f172a&primary_color=2563eb"
            width="100%"
            height="100%"
          ></iframe>
        </MotionWrapper>
      </div>
    </main>
  )
}
