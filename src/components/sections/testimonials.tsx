import React from 'react';

import { MotionWrapper } from './client/motion-wrappers';
import { TestimonialsClient } from './client/TestimonialsClient';

// Testimonials rewritten for an IT services / software agency (HiveSync)
const testimonials = [
  {
    tempId: 0,
    testimonial: "HiveSync delivered our custom software platform in half the time we expected. The quality was outstanding.",
    by: "Alex, CEO at TechCorp",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "Their enterprise cloud migration saved us 40% on infrastructure costs. Couldn't have done it without HiveSync.",
    by: "Dan, CTO at SecureNet",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "We were lost trying to scale our SaaS app. HiveSync stepped in and completely transformed our architecture.",
    by: "Stephanie, COO at InnovateCo",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "HiveSync built our AI-powered fintech platform from scratch. Flawless execution, on time, on budget.",
    by: "Marie, CFO at FuturePlanning",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12. The custom AI automation work alone was worth every penny.",
    by: "Andre, Head of Design at CreativeSolutions",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "HiveSync has saved me at least 100 hours a month with their custom software and automation tools.",
    by: "Jeremy, Product Manager at TimeWise",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing to switch from our old software agency. Now that we're with HiveSync, we're never going back.",
    by: "Pam, Marketing Director at BrandBuilders",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "Their DevOps setup reduced our deployment time from 2 hours to 8 minutes. The ROI is easily 100X.",
    by: "Daniel, Data Scientist at AnalyticsPro",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "Best software partner we've ever had. Communication, quality, speed — it's just the best. Period.",
    by: "Fernando, UX Designer at UserFirst",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 9,
    testimonial: "Switched to HiveSync 5 years ago for our mobile app. Never looked back.",
    by: "Andy, DevOps Engineer at CloudMasters",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  },
  {
    tempId: 10,
    testimonial: "I've searched for a reliable AI and software development partner for years. HiveSync is exactly what we needed.",
    by: "Pete, Sales Director at RevenueRockets",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden" id="testimonials">
      {/* Section header */}
      <div className="mx-auto max-w-[1500px] mb-16 px-5 md:px-10">
        <MotionWrapper
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Testimonials</p>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.1] text-foreground max-w-xl font-syne">
              Trusted software<br />development partners.
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed font-inter">
              Don&apos;t take our word for it — here&apos;s what our clients say about working with HiveSync.
            </p>
          </div>
        </MotionWrapper>
      </div>

      <TestimonialsClient initialTestimonials={testimonials} />
    </section>
  );
};
