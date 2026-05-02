"use client"

import { Link as LinkIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { Urbanist } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/lib/utils'

const urbanist = Urbanist({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

const caseStudies = [
  {
    client: "McDonald's",
    project: "Compliance & Data Management",
    slug: "mcdonalds",
    image: "/case-mcd.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
    accent: "#FFBC0D"
  },
  {
    client: "Subway",
    project: "CRM & Franchise Management",
    slug: "subway",
    image: "/case-subway.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg",
    accent: "#008B2B"
  }
]

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-[#020617]" id="work">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">Work</p>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-[64px] leading-[1.1] text-[#F1F5F9] max-w-xl">
              Client Results.
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-[17px] text-[#94A3B8] leading-relaxed">
              Real outcomes for Fortune 500 teams, universities, and high-growth startups that trusted us to deliver.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Link href={`/work/${study.slug}`} key={study.client}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[16/10] rounded-[40px] overflow-hidden cursor-pointer"
              >
                {/* Image with Parallax-like scale */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Image 
                    src={study.image} 
                    alt={study.client}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

                {/* Glass Info Bar */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[32px] bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-between transition-all duration-500 group-hover:bg-white/5 group-hover:border-white/20 shadow-2xl">
                  <div className="flex items-center gap-5">
                    <div className="size-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-inner overflow-hidden">
                      <Image 
                        src={study.logo} 
                        alt={study.client} 
                        width={48}
                        height={48}
                        className="w-full h-full object-contain grayscale-0" 
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className={cn("text-xl font-bold text-white", urbanist.className)}>
                        {study.client}
                      </h3>
                      <p className="text-white/50 text-sm font-medium">
                        {study.project}
                      </p>
                    </div>
                  </div>

                  <div className="size-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                    <LinkIcon className="size-5" />
                  </div>
                </div>

                {/* Hover Light Sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 ease-in-out" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
