"use client"

import { Globe, Rocket,ShieldCheck, Target, Users, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { Urbanist } from 'next/font/google'
import React from 'react'

import { cn } from '@/lib/utils'

const urbanist = Urbanist({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
})

const stats = [
  { label: 'Founded', value: '2021', icon: Rocket },
  { label: 'Global Team', value: '45+', icon: Users },
  { label: 'Projects Delivered', value: '120+', icon: Zap },
  { label: 'Client Retention', value: '98%', icon: ShieldCheck },
]

const values = [
  {
    title: 'Precision Engineering',
    description: 'We don\'t just build; we craft. Every line of code is optimized for scale and performance.',
    icon: Target,
    color: '#3B82F6',
  },
  {
    title: 'Global Mindset',
    description: 'Our solutions are built for a world without borders, enabling seamless international growth.',
    icon: Globe,
    color: '#6366F1',
  },
  {
    title: 'Future-Proof Tech',
    description: 'We stay at the bleeding edge, ensuring your platform is ready for the next decade of innovation.',
    icon: Zap,
    color: '#8B5CF6',
  },
]

export const CompanyOverview: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-[#020617] text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Story</span>
            </div>
            
            <h2 className={cn(
              "text-4xl md:text-6xl font-extrabold leading-tight mb-8",
              urbanist.className
            )}>
              Bridging the gap between <span className="text-blue-500">Vision</span> and <span className="text-purple-500">Reality</span>.
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              Nine2 was founded on a simple premise: that complex technology should feel effortless. We specialize in building high-performance digital ecosystems that empower businesses to scale globally with confidence.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    <stat.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Values & Visual */}
          <div className="space-y-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative p-8 rounded-[32px] bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500"
              >
                <div 
                  className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${value.color}15, transparent 60%)` }}
                />
                
                <div className="relative flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-800 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="w-6 h-6 text-white" style={{ color: value.color }} />
                  </div>
                  <div>
                    <h3 className={cn("text-xl font-bold mb-3", urbanist.className)}>
                      {value.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
