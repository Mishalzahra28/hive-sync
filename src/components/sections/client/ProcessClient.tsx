"use client"

import { motion } from "framer-motion"
import React from 'react'
import { cn } from '@/lib/utils'
import { Code2, Compass, Eye, FlaskConical, Palette, Rocket } from "lucide-react"

interface Step {
  id: string
  title: string
  description: string
  iconName: 'eye' | 'compass' | 'palette' | 'code' | 'flask' | 'rocket'
  accent: string
  side: 'left' | 'right'
}

const ICON_MAP = {
  eye: Eye,
  compass: Compass,
  palette: Palette,
  code: Code2,
  flask: FlaskConical,
  rocket: Rocket,
}

const Thumbtack: React.FC<{ color: string }> = ({ color }) => {
  const uniqueId = React.useId().replace(/:/g, '');
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      fill="none"
      className="drop-shadow-xl overflow-visible"
    >
      <defs>
        <linearGradient id={`grad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      {/* Pin Shadow */}
      <ellipse cx="50" cy="90" rx="15" ry="5" fill="black" fillOpacity="0.3" />
      {/* Pin Needle */}
      <path
        d="M50 40 L50 90"
        stroke="#94a3b8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Pin Head */}
      <circle cx="50" cy="35" r="28" fill={color} />
      <circle cx="50" cy="35" r="28" fill={`url(#grad-${uniqueId})`} />
      <circle cx="42" cy="27" r="8" fill="white" fillOpacity="0.4" />
    </svg>
  )
}

export const ProcessCard = ({ step }: { step: Step }) => {
  const isLeft = step.side === 'left'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: isLeft ? -48 : 48, rotate: isLeft ? -2 : 2 }}
      whileInView={{ opacity: 1, scale: 1, x: 0, rotate: isLeft ? -2 : 2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-[340px] md:max-w-[420px] group pt-8"
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
        <Thumbtack color={step.accent} />
      </div>

      <div
        className="relative rounded-[42px] border border-slate-900/5 px-6 md:px-8 pt-10 md:pt-12 pb-8 md:pb-10 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-primary/10"
      >
        <div className="relative mb-2 md:mb-4 flex items-center justify-between">
          <div className="inline-flex h-[60px] md:h-[93px] items-center">
            <span
              className="text-4xl sm:text-5xl md:text-[65px] font-bold tracking-tighter leading-none relative z-10 font-syne"
              style={{ color: step.accent }}
            >
              {step.id}
            </span>
          </div>
          {(() => {
            const Icon = ICON_MAP[step.iconName as keyof typeof ICON_MAP] || Eye
            return <Icon className="size-10 md:size-14 opacity-20" style={{ color: step.accent }} strokeWidth={1} />
          })()}
        </div>

        <h3 className={cn("mb-3 md:mb-4 text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[48px] tracking-tight text-brand-gradient", "font-syne")}>
          {step.title}
        </h3>
        <p className="text-sm sm:text-base md:text-[20px] md:leading-[28px] font-normal text-muted-foreground">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}
