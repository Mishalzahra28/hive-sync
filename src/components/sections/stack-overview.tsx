"use client"

import { motion, MotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import React, { useRef } from 'react'

import { cn } from '@/lib/utils'

interface CardData {
  title: string;
  description: string;
  image: string;
  accent: string;
  bg: string;
}

const featureCards: CardData[] = [
  {
    title: "Design and Develop Your Platform",
    description: "We turn your idea into a fully branded, custom-built product—designed with precision and crafted to stand out. From web apps to full platforms, we build it your way.",
    image: "/design_feature.png",
    accent: "blue",
    bg: "bg-[#0F172A]"
  },
  {
    title: "Integrate and Launch With Confidence",
    description: "We handle essential integrations—payments, auth, analytics, and more—so your product is secure, scalable, and ready to deliver a seamless user experience.",
    image: "/integrate_feature.png",
    accent: "purple",
    bg: "bg-[#0F172A]"
  },
  {
    title: "Scale and Optimize Your Business",
    description: "After launch, we stay on team. From backend improvements to performance monitoring, we help you grow efficiently while maintaining a strong technical foundation.",
    image: "/scale_feature.png",
    accent: "blue",
    bg: "bg-[#0F172A]"
  }
]

const StickyCard_HiveSync = ({
  i,
  card,
  progress,
  range,
  targetScale,
}: {
  i: number;
  card: CardData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center px-4 md:px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${i * 40}px)`,
          willChange: 'transform',
        }}
        className={cn(
          "relative flex h-full max-h-[500px] md:max-h-[600px] w-full max-w-6xl origin-top flex-col md:flex-row overflow-hidden rounded-[2.5rem] border-[1px] border-[#1E293B] shadow-2xl",
          card.bg
        )}
      >
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center text-left">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center mb-8",
            card.accent === 'blue' ? 'bg-[#3B82F6]/10 text-[#3B82F6]' : 'bg-[#8B5CF6]/10 text-[#8B5CF6]'
          )}>
            <span className="text-xl font-bold">{i + 1}</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-[#F1F5F9] mb-6 leading-tight">
            {card.title}
          </h3>
          <p className="text-[#94A3B8] text-sm md:text-lg leading-relaxed mb-8">
            {card.description}
          </p>
          <div className="flex items-center gap-4">
            <button className={cn(
              "px-8 py-4 rounded-2xl font-bold text-[#020617] shadow-lg transition-all hover:scale-105 active:scale-95",
              card.accent === 'blue' ? 'bg-[#3B82F6]' : 'bg-[#8B5CF6]'
            )}>
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden hidden md:block">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0F172A]/40" />
        </div>
      </motion.div>
    </div>
  );
};

const CompanyStackOverview = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-[#020617] relative z-20 pb-24">
      <div className="max-w-7xl mx-auto pt-24 px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#F1F5F9]/90 leading-relaxed">
            <span className="font-bold text-[#3B82F6]">Hive Sync powers your tech vision</span> from idea to launch—whether
            you&apos;re building a platform, app, marketplace, or any other venture.
            We provide the tools, expertise, and full-scale support to bring
            your project to life, no matter the industry or complexity.
          </h2>
        </motion.div>
      </div>

      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[300vh]"
      >
        {featureCards.map((card, i) => {
          const targetScale = Math.max(
            0.8,
            1 - (featureCards.length - i - 1) * 0.05,
          );
          return (
            <StickyCard_HiveSync
              key={`p_${i}`}
              i={i}
              card={card}
              progress={smoothProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
};

export default CompanyStackOverview
