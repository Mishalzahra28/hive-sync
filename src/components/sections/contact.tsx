"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { AlertCircle, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { submitContactForm } from "@/actions/contact"

import { cn } from "@/lib/utils"

import { contactSchema, ContactValues } from "@/schema/contact"

const inputClass = "h-auto w-full rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:bg-white/[0.05] transition-all duration-300"

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactValues) => {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(data)

      if (result.success) {
        toast.success(result.message)
        reset()
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <motion.div
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
              Have a vision? We have the engineering power to make it real. Reach out for a consultation or just to say hello.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground font-syne">Email Us</h4>
                </div>
                <p className="text-muted-foreground text-sm font-inter">hello@hivesync.io</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="size-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                    <MessageSquare className="size-5 text-secondary" />
                  </div>
                  <h4 className="font-bold text-foreground font-syne">Support</h4>
                </div>
                <p className="text-muted-foreground text-sm font-inter">24/7 technical assistance</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground font-syne">Call Us</h4>
                </div>
                <p className="text-muted-foreground text-sm font-inter">+1 (555) 123-4567</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="size-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                    <MapPin className="size-5 text-secondary" />
                  </div>
                  <h4 className="font-bold text-foreground font-syne">Global</h4>
                </div>
                <p className="text-muted-foreground text-sm font-inter">Distributed Engineering Force</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-6 md:p-10 rounded-[40px] bg-card border border-border shadow-2xl relative overflow-hidden">
              {/* Card Accent Glow */}
              <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

              <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] text-muted-foreground">
                      Full Name<span className="text-primary ml-0.5">*</span>
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="John Doe"
                      className={cn(inputClass, errors.name && "border-red-400 focus:border-red-400")}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="flex items-center gap-1.5 text-[11px] text-red-400 font-medium mt-1"
                        >
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.name.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[13px] text-muted-foreground">
                      Email Address<span className="text-primary ml-0.5">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@company.com"
                      className={cn(inputClass, errors.email && "border-red-400 focus:border-red-400")}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="flex items-center gap-1.5 text-[11px] text-red-400 font-medium mt-1"
                        >
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.email.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-muted-foreground">
                    Subject<span className="text-primary ml-0.5">*</span>
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="How can we help?"
                    className={cn(inputClass, errors.subject && "border-red-400 focus:border-red-400")}
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="flex items-center gap-1.5 text-[11px] text-red-400 font-medium mt-1"
                      >
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.subject.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] text-muted-foreground">
                    Message<span className="text-primary ml-0.5">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className={cn(inputClass, "resize-none", errors.message && "border-red-400 focus:border-red-400")}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="flex items-center gap-1.5 text-[11px] text-red-400 font-medium mt-1"
                      >
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.message.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-foreground text-background font-black text-[13px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 shadow-xl mt-4"
                >
                  {isSubmitting ? (
                    <div className="size-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="size-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

