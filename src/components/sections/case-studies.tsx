import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { MotionWrapper } from './client/motion-wrappers'

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
    <section className="py-16 md:py-24 bg-background px-6 md:px-10" id="work">
      <div className="mx-auto max-w-[1500px]">
        <MotionWrapper
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

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.1] text-foreground max-w-xl font-syne">
              Client Results.
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed font-inter">
              Real enterprise software development and AI automation outcomes for Fortune 500 teams and high-growth startups that trusted HiveSync.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((study, index) => (
            <Link href={`/work/${study.slug}`} key={study.client}>
              <MotionWrapper
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/5] md:aspect-[16/10] rounded-[48px] overflow-hidden cursor-pointer shadow-2xl"
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

                {/* Overlay for readability - stronger on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Info Section - Clean Glass Card */}
                <div className="absolute inset-x-4 bottom-4 md:inset-x-8 md:bottom-8">
                  <div className="relative p-4 md:p-6 rounded-[28px] md:rounded-[32px] border-2 border-primary/30 bg-black/40 backdrop-blur-xl flex items-center justify-between transition-all duration-500 group-hover:bg-black/50 group-hover:border-primary/50 shadow-2xl">
                    <div className="flex items-center gap-3 md:gap-5 flex-1 min-w-0">
                      <div className="size-10 md:size-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center p-2 md:p-2.5 border border-white/20 shrink-0">
                        <Image
                          src={study.logo}
                          alt={study.client}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain brightness-0 invert"
                          unoptimized
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg md:text-2xl font-bold text-white truncate font-syne">
                          {study.client}
                        </h3>
                        <p className="text-white/70 text-[11px] md:text-sm font-medium leading-tight line-clamp-1">
                          {study.project}
                        </p>
                      </div>
                    </div>

                    <div className="size-9 md:size-12 rounded-lg md:rounded-xl bg-primary flex items-center justify-center text-primary-foreground transition-all duration-500 group-hover:rotate-12 shadow-lg shrink-0 ml-3">
                      <ArrowUpRight className="size-4 md:size-6" />
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
