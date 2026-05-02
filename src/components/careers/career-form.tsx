"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle,CheckCircle2, FileText, Upload, X } from "lucide-react"
import { AnimatePresence,motion } from "motion/react"
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
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-[11px] text-red-400 font-medium"
          >
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputClass =
  "h-auto w-full rounded-2xl border-border bg-white/[0.03] px-4 py-3.5 text-sm text-foreground placeholder:text-slate-700 focus-visible:border-primary/60 focus-visible:bg-white/[0.05] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"


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
          : "border-border hover:border-primary/40 hover:bg-white/[0.02]"
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
      <div className="flex items-center gap-4 px-5 py-4">
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
          file ? "bg-primary/20" : "bg-white/5"
        )}>
          {file ? (
            <FileText className="w-5 h-5 text-primary" />
          ) : (
            <Upload className="w-5 h-5 text-slate-600" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          {file ? (
            <>
              <p className="text-sm font-semibold text-foreground truncate">{file.name}</p>
              <p className="text-[11px] text-slate-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB · PDF
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold text-muted-foreground">
                Upload your CV <span className="text-slate-600 font-normal">(optional)</span>
              </p>
              <p className="text-[11px] text-slate-600">PDF only · max 5MB · drag & drop or click</p>
            </>
          )}
        </div>
        {file && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onClear() }}
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-500/20 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <X className="w-3.5 h-3.5 text-muted-foreground hover:text-red-400" />
          </button>
        )}
      </div>
    </div>
  )
}


type SubmitState = Awaited<ReturnType<typeof submitCareerApplication>> | null

// className is forwarded from the parent card so the form participates in the
// flex-1 height contract that keeps the form card and NoOpenRoles card equal.
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
    // flex flex-col + className (flex-1 from parent) make the form stretch to
    // fill the card, so the success state can center itself without collapsing.
    <form
      onSubmit={handleSubmit(onValid)}
      className={cn("flex flex-col", className)}
    >
      <AnimatePresence mode="wait">
        {state?.success ? (
          // flex-1 + justify-center: success state fills the card height and
          // centres its content — no py-12 that would let the card shrink.
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-1 flex-col items-center justify-center gap-4 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground mb-1">{state.message}</p>
              <p className="text-sm text-slate-500">Keep an eye on your inbox — good things are coming.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="form" className="flex flex-col gap-5">
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="First Name" error={errors.first_name?.message}>
                <Input
                  {...register("first_name")}
                  placeholder="Ada"
                  className={inputClass}
                />
              </Field>
              <Field label="Last Name" error={errors.last_name?.message}>
                <Input
                  {...register("last_name")}
                  placeholder="Lovelace"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Email Address" error={errors.email?.message}>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="ada@example.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone Number" error={errors.phone_number?.message}>
                <Input
                  {...register("phone_number")}
                  type="tel"
                  placeholder="+1 555 000 0000"
                  className={inputClass}
                />
              </Field>
            </div>

            {/* Message */}
            <Field label="Cover Message" error={errors.message?.message}>
              <Textarea
                {...register("message")}
                rows={4}
                placeholder="Tell us what makes you a great fit — your stack, your mindset, what excites you..."
                className={cn(inputClass, "resize-none leading-relaxed")}
              />
            </Field>

            {/* CV Upload */}
            <Field label="CV / Résumé">
              <CVDropzone
                file={cvFile}
                onChange={setCvFile}
                onClear={() => setCvFile(null)}
              />
            </Field>

            {/* Submit */}
            <Button
              type="submit"
              disabled={busy}
              isLoading={busy}
              className="group relative w-full py-4 rounded-2xl bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 active:scale-[0.98] overflow-hidden"
            >
              <span className={cn("flex items-center justify-center gap-2 transition-opacity", busy && "opacity-0")}>
                Send Application
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}