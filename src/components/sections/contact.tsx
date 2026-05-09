import { Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import React from "react"

import { ContactClient } from "./client/ContactClient"
import { MotionWrapper } from "./client/motion-wrappers"

export const Contact = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-background px-5 md:px-10" id="contact">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

          {/* Left Side: Info */}
          <MotionWrapper
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Get in Touch</p>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-foreground mb-8 font-syne">
              Let&apos;s Build Your <span className="text-primary">Next Big Thing.</span>
            </h2>

            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed font-inter mb-12 max-w-lg">
              Have a custom software or AI automation project in mind? We have the engineering power to make it real. Reach out for a technical consultation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground font-syne">Email Us</h3>
                </div>
                <p className="text-muted-foreground text-sm font-inter">hello@hivesync.io</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="size-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                    <MessageSquare className="size-5 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground font-syne">Support</h3>
                </div>
                <p className="text-muted-foreground text-sm font-inter">24/7 technical assistance</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground font-syne">Call Us</h3>
                </div>
                <p className="text-muted-foreground text-sm font-inter">+1 (555) 123-4567</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="size-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                    <MapPin className="size-5 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground font-syne">Global</h3>
                </div>
                <p className="text-muted-foreground text-sm font-inter">Distributed Engineering Force</p>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Side: Form */}
          <ContactClient />

        </div>
      </div>
    </section>
  )
}

