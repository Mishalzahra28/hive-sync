"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format, parseISO } from "date-fns"
import { AnimatePresence, motion } from "motion/react"
import { AlertCircle, CalendarIcon, CheckCircle2, Plus, X } from "lucide-react"
import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { submitSalesInquiry } from "@/actions/sales"
import { salesIntakeSchema, SalesIntakeValues } from "@/schema/sales-intake"


const PROJECT_TYPES = [
  "Website Sprint",
  "Mobile App + UX",
  "AI Workflow + Growth",
  "Custom Project",
]

const ENGAGEMENT_MODELS = [
  "Part-time",
  "Full-time",
  "Specific requirement",
]

const TECH_OPTIONS = [
  "Next.js", "Node.js", "TypeScript", "React", "JavaScript",
  "PHP", "Laravel", "Vue", "Angular", "ASP.NET", "C#", "Python",
  "Flutter", "Java", "Kotlin", "React Native", "Figma", "Webflow",
]

const SERVICE_OPTIONS = [
  "UI/UX Design",
  "Web Development",
  "Mobile App Development",
  "AI Workflow Automation",
  "QA & Testing",
  "Growth + Marketing",
]

const BUDGET_MAP: Record<string, string> = {
  "Website Sprint": "$1,500–$8,000 / project",
  "Mobile App + UX": "$8,000–$40,000 / project",
  "AI Workflow + Growth": "$5,000–$25,000 / project",
  "Custom Project": "$2,500–$20,000 / project",
}

const BUDGET_OPTIONS = [
  "Under $2,500",
  "$2,500 – $8,000",
  "$8,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
  "Let's discuss",
]


function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] text-muted-foreground">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
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
  "h-auto w-full rounded-2xl border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary/60 focus-visible:bg-white/[0.05] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300"


function SinglePillGroup({
  options,
  value,
  onChange,
  addLabel,
  addPlaceholder,
  error,
}: {
  options: string[]
  value: string
  onChange: (v: string) => void
  addLabel: string
  addPlaceholder: string
  error?: string
}) {
  const [allOptions, setAllOptions] = useState(options)
  const [showInput, setShowInput] = useState(false)
  const [inputVal, setInputVal] = useState("")

  const handleAdd = () => {
    const trimmed = inputVal.trim()
    if (!trimmed) return
    setAllOptions((prev) => [...prev, trimmed])
    onChange(trimmed)
    setInputVal("")
    setShowInput(false)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        {allOptions.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              "px-4 py-2 rounded-full text-[13px] border transition-all duration-150",
              value === opt
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            )}
          >
            {opt}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setShowInput(true)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] text-muted-foreground border border-dashed border-border hover:border-primary/40 hover:text-muted-foreground transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          {addLabel}
        </button>
      </div>

      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 overflow-hidden"
          >
            <Input
              autoFocus
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAdd())}
              placeholder={addPlaceholder}
              className={cn(inputClass, "max-w-[220px] py-2")}
            />
            <button
              type="button"
              onClick={handleAdd}
              className="px-3 py-2 rounded-full text-[12px] border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => { setShowInput(false); setInputVal("") }}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-500/20 flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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


function MultiPillGroup({
  options,
  value,
  onChange,
  addLabel,
  addPlaceholder,
  error,
}: {
  options: string[]
  value: string[]
  onChange: (v: string[]) => void
  addLabel: string
  addPlaceholder: string
  error?: string
}) {
  const [allOptions, setAllOptions] = useState(options)
  const [showInput, setShowInput] = useState(false)
  const [inputVal, setInputVal] = useState("")

  const toggle = (opt: string) => {
    onChange(
      value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]
    )
  }

  const handleAdd = () => {
    const trimmed = inputVal.trim()
    if (!trimmed) return
    setAllOptions((prev) => [...prev, trimmed])
    onChange([...value, trimmed])
    setInputVal("")
    setShowInput(false)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        {allOptions.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={cn(
              "px-4 py-2 rounded-full text-[13px] border transition-all duration-150",
              value.includes(opt)
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            )}
          >
            {opt}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setShowInput(true)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] text-muted-foreground border border-dashed border-border hover:border-primary/40 hover:text-muted-foreground transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          {addLabel}
        </button>
      </div>

      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 overflow-hidden"
          >
            <Input
              autoFocus
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAdd())}
              placeholder={addPlaceholder}
              className={cn(inputClass, "max-w-[220px] py-2")}
            />
            <button
              type="button"
              onClick={handleAdd}
              className="px-3 py-2 rounded-full text-[12px] border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => { setShowInput(false); setInputVal("") }}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-red-500/20 flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] text-muted-foreground mb-3">{children}</p>
  )
}


type SubmitState = Awaited<ReturnType<typeof submitSalesInquiry>> | null

export function SalesIntakeForm({
  defaultProjectType = "Custom Project",
  onBack,
}: {
  defaultProjectType?: string
  onBack?: () => void
}) {
  const [state, setState] = useState<SubmitState>(null)

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SalesIntakeValues>({
    resolver: zodResolver(salesIntakeSchema),
    defaultValues: {
      project_type: defaultProjectType,
      engagement_model: "Part-time",
      tech_stack: [],
      services: [],
      budget_range: "",
    },
  })

  const projectType = watch("project_type")
  const budgetSuggestion = BUDGET_MAP[projectType] ?? "$2,500–$20,000 / project"

  const selectedDescriptions: Record<string, string> = {
    "Website Sprint": 'You selected "Website Sprint". We\'ll scope a fast, focused site delivery with clear milestones.',
    "Mobile App + UX": 'You selected "Mobile App + UX". Tell us your platform targets and user experience goals.',
    "AI Workflow + Growth": 'You selected "AI Workflow + Growth". We\'ll map automation opportunities across your stack.',
    "Custom Project": 'You selected "Custom Project". Share project details and we will prepare a practical delivery plan.',
  }

  const onValid = async (values: SalesIntakeValues) => {
    // Sync the suggested budget if user hasn't overridden it
    const payload = { ...values, budget_range: values.budget_range || budgetSuggestion }
    try {
      const result = await submitSalesInquiry(payload)
      setState(result)
      if (result.success) {
        toast.success("Inquiry submitted", { description: result.message })
        reset()
      } else {
        toast.error("Submission failed", { description: result.error })
      }
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong", { description: "Please try again in a moment." })
    }
  }

  const busy = isSubmitting

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground pt-24 md:pt-28">
      <AnimatePresence mode="wait">
        {state?.success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-1 items-center justify-center px-6 text-center"
          >
            <div className="flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground mb-1">{state.message}</p>
                <p className="text-sm text-muted-foreground">
                  We review every inquiry personally and aim to respond within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onValid)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full px-6 md:px-12 py-10 flex flex-col gap-8 max-w-7xl mx-auto"
          >
            {/* Heading */}
            <div className="flex flex-col gap-3">
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className="self-start text-[11px] uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Back to pricing
                </button>
              )}
             
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Let&apos;s scope your engagement
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                Tell us about your project and we&apos;ll get back to you with a tailored plan.
              </p>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Full name" required error={errors.full_name?.message}>
                <Input {...register("full_name")} placeholder="Your name" className={inputClass} />
              </Field>
              <Field label="Work email" required error={errors.work_email?.message}>
                <Input {...register("work_email")} type="email" placeholder="you@company.com" className={inputClass} />
              </Field>
            </div>

            {/* Company + Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Company / brand" error={errors.company?.message}>
                <Input {...register("company")} placeholder="Company name" className={inputClass} />
              </Field>
              <Field label="Website" error={errors.website?.message}>
                <Input {...register("website")} placeholder="https://example.com" className={inputClass} />
              </Field>
            </div>

            {/* Project type */}
            <div>
              <SectionLabel>Project type</SectionLabel>
              <Controller
                control={control}
                name="project_type"
                render={({ field }) => (
                  <SinglePillGroup
                    options={PROJECT_TYPES}
                    value={field.value}
                    onChange={field.onChange}
                    addLabel="Add your option"
                    addPlaceholder="e.g. SaaS Platform…"
                    error={errors.project_type?.message}
                  />
                )}
              />
            </div>

            {/* Engagement model */}
            <div>
              <SectionLabel>Engagement model</SectionLabel>
              <Controller
                control={control}
                name="engagement_model"
                render={({ field }) => (
                  <SinglePillGroup
                    options={ENGAGEMENT_MODELS}
                    value={field.value}
                    onChange={field.onChange}
                    addLabel="Add specific requirement"
                    addPlaceholder="Describe your requirement…"
                    error={errors.engagement_model?.message}
                  />
                )}
              />
            </div>

            {/* Tech stack */}
            <div>
              <SectionLabel>Preferred tech stack (optional)</SectionLabel>
              <Controller
                control={control}
                name="tech_stack"
                render={({ field }) => (
                  <MultiPillGroup
                    options={TECH_OPTIONS}
                    value={field.value ?? []}
                    onChange={field.onChange}
                    addLabel="Add custom technology/tool"
                    addPlaceholder="e.g. Supabase, Elixir…"
                    error={errors.tech_stack?.message}
                  />
                )}
              />
            </div>

            {/* Services */}
            <div>
              <SectionLabel>Services needed (optional)</SectionLabel>
              <Controller
                control={control}
                name="services"
                render={({ field }) => (
                  <MultiPillGroup
                    options={SERVICE_OPTIONS}
                    value={field.value ?? []}
                    onChange={field.onChange}
                    addLabel="Add custom service"
                    addPlaceholder="e.g. DevOps, Localization…"
                    error={errors.services?.message}
                  />
                )}
              />
            </div>

            {/* Goals */}
            <Field label="Goals, requirements, and delivery expectations" error={errors.goals?.message}>
              <Textarea
                {...register("goals")}
                rows={5}
                placeholder="Describe outcomes, priorities, and constraints."
                className={cn(inputClass, "resize-none leading-relaxed")}
              />
            </Field>

            {/* Start date + Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Target start date" error={errors.start_date?.message}>
                <Controller
                  control={control}
                  name="start_date"
                  render={({ field }) => {
                    const selected = field.value ? parseISO(field.value) : undefined
                    return (
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className={cn(
                              inputClass,
                              "flex items-center justify-between text-left",
                              !selected && "text-muted-foreground/60",
                            )}
                          >
                            {selected ? format(selected, "PPP") : "Pick a date"}
                            <CalendarIcon className="ml-2 h-4 w-4 opacity-60" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selected}
                            onSelect={(d) =>
                              field.onChange(d ? format(d, "yyyy-MM-dd") : "")
                            }
                            disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                            autoFocus
                          />
                        </PopoverContent>
                      </Popover>
                    )
                  }}
                />
              </Field>
              <Field label="Budget range" error={errors.budget_range?.message}>
                <Controller
                  control={control}
                  name="budget_range"
                  render={({ field }) => (
                    <Select value={field.value ?? ""} onValueChange={field.onChange}>
                      <SelectTrigger className={cn(inputClass, "justify-between")}>
                        <SelectValue placeholder={`e.g. ${budgetSuggestion}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGET_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={busy}
              isLoading={busy}
              className="w-full py-4 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm uppercase tracking-widest transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Submit inquiry
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}