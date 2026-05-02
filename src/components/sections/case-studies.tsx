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
    <section className="py-24 bg-background" id="work">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Work</p>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-[64px] leading-[1.1] text-foreground max-w-xl">
              Client Results.
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-[17px] text-muted-foreground leading-relaxed">
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

                {/* Soft fade so the light info bar reads on busy images */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />

                {/* Light Glass Info Bar */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-[32px] bg-card/40 backdrop-blur-2xl border border-white/40 flex items-center justify-between transition-all duration-500 group-hover:bg-card/60 group-hover:border-white/60 shadow-xl">
                  <div className="flex items-center gap-5">
                    <div className="size-12 rounded-xl bg-background flex items-center justify-center p-2 shadow-inner overflow-hidden border border-border">
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
                      <h3 className={cn("text-xl font-bold text-foreground", urbanist.className)}>
                        {study.client}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        {study.project}
                      </p>
                    </div>
                  </div>

                  <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground transition-all duration-500 group-hover:scale-110 shadow-md group-hover:shadow-lg">
                    <LinkIcon className="size-5" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
