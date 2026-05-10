"use client"

import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

interface Testimonial {
  tempId: number
  /** 1–5 scale, testimonials use ~3.8–4.5 for a believable spread */
  rating: number
  testimonial: string
  by: string
  imgSrc: string
}

interface TestimonialCardProps {
  position: number
  testimonial: Testimonial
  handleMove: (steps: number) => void
  cardSize: number
}

function StarSlot({
  fill,
  filledClassName,
  emptyClassName
}: {
  fill: number
  filledClassName: string
  emptyClassName: string
}) {
  const pct = Math.min(1, Math.max(0, fill)) * 100
  return (
    <span className="relative inline-flex size-3.5 shrink-0">
      <Star className={cn("size-3.5", emptyClassName)} aria-hidden />
      <span className="absolute left-0 top-0 overflow-hidden" style={{ width: `${pct}%` }} aria-hidden>
        <Star className={cn("size-3.5 fill-current", filledClassName)} />
      </span>
    </span>
  )
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0
  const rating = testimonial.rating
  const filledStar = isCenter ? "text-amber-400" : "text-amber-400/30"
  const emptyStar = isCenter ? "text-muted-foreground/25" : "text-muted-foreground/15"

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
        "rounded-[2rem] border p-8 sm:p-10 flex flex-col gap-6",
        isCenter
          ? "z-10 bg-card border-primary/40 shadow-xl shadow-primary/5"
          : "z-0 bg-card/60 border-border opacity-40 hover:opacity-60"
      )}
      style={{
        width: cardSize,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.4) * position}px)
          translateY(${isCenter ? -50 : position % 2 ? 20 : -20}px)
          scale(${isCenter ? 1 : 0.88})
          rotate(${isCenter ? 0 : position % 2 ? 3 : -3}deg)
        `,
      }}
    >
      {/* Icon Badge */}
      <div className={cn(
        "size-12 rounded-2xl flex items-center justify-center transition-colors",
        isCenter
          ? "bg-primary text-primary-foreground"
          : "bg-primary/10 border border-primary/20 text-primary"
      )}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 5v3c0 1 0 1 1 1z" />
        </svg>
      </div>

      {/* Quote Text */}
      <p className={cn(
        "text-sm sm:text-[15px] leading-[1.8] font-inter",
        isCenter ? "text-foreground" : "text-muted-foreground"
      )}>
        {testimonial.testimonial}
      </p>

      {/* Stars — fractional display from rating */}
      <div
        className="flex flex-wrap items-center gap-2 mt-auto pt-2"
        aria-label={`${rating.toFixed(1)} out of 5 stars`}
      >
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarSlot
              key={i}
              fill={Math.min(1, Math.max(0, rating - i))}
              filledClassName={filledStar}
              emptyClassName={emptyStar}
            />
          ))}
        </div>
        <span
          className={cn(
            "text-xs tabular-nums font-medium font-inter",
            isCenter ? "text-muted-foreground" : "text-muted-foreground/50"
          )}
        >
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  )
}

export const TestimonialsClient = ({ initialTestimonials }: { initialTestimonials: Testimonial[] }) => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(initialTestimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 400 : 300)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 520 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}

      {/* Navigation — matches site style */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
            "bg-card border border-border text-foreground hover:border-primary/40 hover:text-primary hover:shadow-xl active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
            "bg-card border border-border text-foreground hover:border-primary/40 hover:text-primary hover:shadow-xl active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
