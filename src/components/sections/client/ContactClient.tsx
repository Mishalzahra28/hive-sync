"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence, motion } from "framer-motion"
import { AlertCircle, Send } from "lucide-react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { submitContactForm } from "@/actions/contact"

import { cn } from "@/lib/utils"

import { contactSchema, ContactValues } from "@/schema/contact"

const inputClass = "h-auto w-full rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:bg-white/[0.05] transition-all duration-300"

export const ContactClient = () => {
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
            className="w-full py-4 rounded-2xl bg-brand-gradient text-primary-foreground font-black text-[13px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 shadow-xl mt-4"
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
  )
}
