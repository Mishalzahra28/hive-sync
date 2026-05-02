"use client"

import { motion } from 'motion/react'
import React from 'react'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Animated Hexagon Logo */}
        <div className="relative size-24 mb-12">
          {/* Outer Pulsing Hexagon */}
          <motion.div
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 border-2 border-blue-500/20 rounded-[20%] blur-[2px]"
            style={{ clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)' }}
          />

          {/* Main Logo Hexagon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="relative w-full h-full"
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <defs>
                <linearGradient id="loader_gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6" />
                  <stop offset="0.5" stopColor="#6366F1" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path 
                d="M50 5L93.3 30V80L50 105L6.7 80V30L50 5Z" 
                fill="url(#loader_gradient)" 
                className="opacity-20"
              />
              <motion.path 
                d="M50 15L80.3 32.5V67.5L50 85L19.7 67.5V32.5L50 15Z" 
                stroke="url(#loader_gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <path 
                d="M50 30L67.3 40V60L50 70L32.7 60V40L50 30Z" 
                fill="url(#loader_gradient)"
              />
            </svg>
          </motion.div>
        </div>

        {/* Text Loader */}
        <div className="flex flex-col items-center gap-3">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-blue-500 font-black tracking-widest text-[10px] uppercase">Initializing</span>
            <span className="flex gap-1">
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                className="size-1 rounded-full bg-blue-500"
              />
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="size-1 rounded-full bg-blue-500"
              />
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="size-1 rounded-full bg-blue-500"
              />
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-[#94A3B8] text-xs font-medium tracking-wide"
          >
            Securing Connection
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  )
}
