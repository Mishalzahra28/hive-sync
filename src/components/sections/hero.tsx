"use client"

import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

import DarkVeil from '../ui/DarkVeil'

export const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <DarkVeil
          speed={1}
          hueShift={0}
          noiseIntensity={0.05}
          scanlineIntensity={0.1}
          warpAmount={0.2}
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#020617]/60 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F1F5F9] mb-8 leading-[1.1] tracking-tight"
        >
          Strategic IT & Cybersecurity Partner for Modern Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Experts in managed IT services and cybersecurity solutions that keep your business secure, efficient, and ready to grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {/* Fancy Shimmer Button */}
          <button className="group relative overflow-hidden rounded-full px-10 py-4 bg-[#3B82F6] text-[#020617] font-bold text-base transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            {/* Shimmer light effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <span className="relative z-10">Book a strategy call</span>
            
            {/* Hover Outer Glow */}
            <div className="absolute -inset-1 bg-[#3B82F6]/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <a 
            href="#services" 
            className="group relative flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-[#F1F5F9] font-semibold text-base transition-all hover:bg-white/10 hover:border-[#3B82F6]/30 backdrop-blur-md"
          >
            Explore our services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-0" />
    </section>
  )
}
