"use client"

import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'

const services = [
  {
    title: "Cloud Infrastructure",
    image: "/service_cloud.png",
    active: true,
    tag: "Available"
  },
  {
    title: "UI/UX Experience",
    image: "/service_ui.png",
    active: false,
    tag: "Coming Soon"
  },
  {
    title: "Backend Systems",
    image: "/service_backend.png",
    active: false,
    tag: "Available"
  },
  {
    title: "Cyber Security",
    image: "/service_security.png",
    active: false,
    tag: "Premium"
  },
]

export const Services = () => {
  return (
    <section className="bg-[#020617] py-24 px-6 md:px-12 lg:px-24" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area (Matches DESIGN.md neutrals) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#3B82F6] font-bold">/</span>
              <span className="text-[14px] uppercase tracking-wider font-bold text-[#94A3B8]">Solutions Marketplace</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#F1F5F9] leading-none tracking-tight">
              Certified<br />Excellence
            </h2>
          </div>
          
          <div className="flex-1 max-w-md">
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              A mixture of high-fidelity engineering and glassmorphic aesthetics. Choose reliability, choose Hive Sync.
            </p>
            <div className="flex gap-8">
              <a href="#" className="group flex items-center gap-1 text-[#3B82F6] font-bold hover:text-[#60A5FA] transition-all">
                View All Services <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#" className="group flex items-center gap-1 text-[#3B82F6] font-bold hover:text-[#60A5FA] transition-all">
                Call For Booking <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bento Grid - Mixture Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, i) => {
            // Bento sizing logic for 4 items
            const bentoStyles = [
              "md:col-span-2 md:row-span-2", // Cloud (Large 2x2)
              "md:col-span-1 md:row-span-2", // UI/UX (Tall 1x2)
              "md:col-span-1 md:row-span-1", // Backend (Small 1x1)
              "md:col-span-2 md:row-span-1", // Security (Wide 2x1)
            ];
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "group relative rounded-[2.5rem] overflow-hidden cursor-pointer border border-[#1E293B] hover:border-[#3B82F6]/40 transition-all duration-500 shadow-2xl",
                  bentoStyles[i % bentoStyles.length]
                )}
              >
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-90"
                />
                
                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617]/80 transition-all duration-500" />
                
                {/* Floating Glass Footer (The Uilora Mixture) */}
                <div className="absolute bottom-4 left-4 right-4 h-16 rounded-[1.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 flex items-center justify-between px-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transform transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#3B82F6]/10 group-hover:border-[#3B82F6]/30">
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-0.5">
                      {service.tag}
                    </span>
                    <span className="text-white text-xs font-bold tracking-tight leading-none truncate max-w-[120px]">
                      {service.title}
                    </span>
                  </div>
                  
                  <button className="bg-white/5 hover:bg-[#3B82F6] text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-full transition-all active:scale-95 border border-white/10 hover:border-transparent backdrop-blur-sm">
                    Explore
                  </button>
                </div>

                {/* Top Right Accent */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#3B82F6]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
