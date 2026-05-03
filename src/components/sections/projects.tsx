"use client"

import Image from 'next/image'
import React from 'react'

const images = [
  '/dashboard_view_1.png',
  '/dashboard_view_2.png',
  '/dashboard_view_3.png',
  '/dashboard_view_4.png',
  '/dashboard_view_5.png',
]

const Projects = () => {
  return (
    <section className="relative w-full py-24 z-30 overflow-hidden px-6 md:px-12 lg:px-24" id="projects">
      <div className="max-w-[1440px] mx-auto">
      {/* Row Container - This will overlap the hero arc */}
      <div className="relative flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 px-4 md:px-8 pb-16">
        <div className="flex gap-8 mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative shrink-0 w-[800px] h-[510px] max-w-[90vw] rounded-3xl border-3 border-white shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,255,255,0.02),inset_0_0_20px_rgba(255,255,255,0.02)] transition-transform duration-500 cursor-pointer bg-white snap-center group"
            >
              <Image
                src={src}
                alt={`Dashboard View ${index + 1}`}
                className="w-full rounded-xl h-full object-cover"
                loading="lazy"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      </div>
    </section>
  )
}

export default Projects
