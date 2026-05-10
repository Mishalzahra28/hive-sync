"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle, CheckCircle2, FileText, Upload, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { submitCareerApplication } from "@/actions/careers"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { careerFormSchema, CareerFormValues } from "@/schema/careers"

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-[11px] text-red-400 font-bold ml-1"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputClass =
  "h-auto w-full rounded-2xl border-border bg-muted/30 px-5 py-4 text-[15px] text-foreground placeholder:text-muted-foreground/50 focus-visible:border-primary/60 focus-visible:bg-muted/50 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 font-inter"

function CVDropzone({
  file,
  onChange,
  onClear,
}: {
  file: File | null
  onChange: (f: File) => void
  onClear: () => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped?.type === "application/pdf") onChange(dropped)
  }

  return (
    <div
      onClick={() => !file && inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={cn(
        "relative rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden",
        dragging
          ? "border-primary bg-primary/5"
          : file
          ? "border-primary/40 bg-primary/5 cursor-default"
          : "border-border hover:border-primary/40 hover:bg-muted/50"
      )}
    >
      <input
        ref={inputRef}
        type="file"
        name="cv"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) onChange(f)
        }}
      />
      <div className="flex items-center gap-5 px-6 py-5">
        <div className={cn(
          "size-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
          file ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted border border-border"
        )}>
          {file ? (
            <FileText className="size-6" />
          ) : (
            <Upload className="size-6 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          {file ? (
            <>
              <p className="text-[15px] font-bold text-foreground truncate font-syne">{file.name}</p>
              <p className="text-[12px] text-muted-foreground font-medium">
                {(file.size / 1024 / 1024).toFixed(2)} MB · PDF Document
              </p>
            </>
          ) : (
            <>
              <p className="text-[15px] font-bold text-foreground font-syne">
                Upload your CV <span className="text-muted-foreground font-normal text-sm">(optional)</span>
              </p>
              <p className="text-[12px] text-muted-foreground font-medium">PDF only · max 5MB · drag & drop</p>
            </>
          )}
        </div>
        {file && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onClear() }}
            className="size-8 rounded-full bg-muted border border-border hover:bg-red-500/10 hover:border-red-500/30 flex items-center justify-center transition-all duration-300 flex-shrink-0 group/clear"
          >
            <X className="size-4 text-muted-foreground group-hover/clear:text-red-500 transition-colors" />
          </button>
        )}
      </div>
    </div>
  )
}

type SubmitState = Awaited<ReturnType<typeof submitCareerApplication>> | null

export function CareerForm({ className }: { className?: string }) {
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [state, setState] = useState<SubmitState>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(careerFormSchema),
  })

  const onValid = async (values: CareerFormValues) => {
    const formData = new FormData()
    if (cvFile) formData.set("cv", cvFile)
    try {
      const result = await submitCareerApplication(values, formData)
      setState(result)
      if (result.success) {
        toast.success("Application submitted", { description: result.message })
        reset()
        setCvFile(null)
      } else {
        toast.error("Submission failed", { description: result.error })
      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong", {
        description: "Please try again in a moment.",
      })
    }
  }

  const busy = isSubmitting

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className={cn("flex flex-col h-full", className)}
    >
      <AnimatePresence mode="wait">
        {state?.success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 text-center"
          >
            <div className="size-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-xl">
              <CheckCircle2 className="size-10 text-primary" />
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-foreground font-syne">{state.message}</p>
              <p className="text-muted-foreground font-inter max-w-xs mx-auto">
                Keep an eye on your inbox — our talent team will be in touch soon.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="form" className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="First name" error={errors.first_name?.message}>
                <Input
                  {...register("first_name")}
                  placeholder="e.g. John"
                  className={inputClass}
                />
              </Field>
              <Field label="Last name" error={errors.last_name?.message}>
                <Input
                  {...register("last_name")}
                  placeholder="e.g. Doe"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Email address" error={errors.email?.message}>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="e.g. john@company.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone number" error={errors.phone_number?.message}>
                <Input
                  {...register("phone_number")}
                  type="tel"
                  placeholder="e.g. +1 (555) 000-0000"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Cover message" error={errors.message?.message}>
              <Textarea
                {...register("message")}
                rows={4}
                placeholder="e.g. Tell us about your background..."
                className={cn(inputClass, "resize-none leading-relaxed h-32")}
              />
            </Field>

            <Field label="CV / resume">
              <CVDropzone
                file={cvFile}
                onChange={setCvFile}
                onClear={() => setCvFile(null)}
              />
            </Field>

            <Button
              type="submit"
              disabled={busy}
              isLoading={busy}
              className="group relative w-full py-4 rounded-full bg-brand-gradient text-primary-foreground font-bold text-[13px] uppercase tracking-[0.2em] shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden mt-2"
            >
              <span className={cn("relative z-10 flex items-center justify-center gap-2 transition-opacity", busy && "opacity-0")}>
                Send Application
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}