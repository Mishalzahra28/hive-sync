"use client"

import { HTMLMotionProps, motion, Variants } from "framer-motion"
import React from "react"

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  variant?: Variants
}

export const MotionWrapper = ({ children, ...props }: MotionWrapperProps) => {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  )
}

export const MotionH1 = ({ children, ...props }: HTMLMotionProps<"h1">) => {
  return <motion.h1 {...props}>{children}</motion.h1>
}

export const MotionP = ({ children, ...props }: HTMLMotionProps<"p">) => {
  return <motion.p {...props}>{children}</motion.p>
}
