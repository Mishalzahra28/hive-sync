import React from 'react'
import { MotionWrapper } from './client/motion-wrappers'
import { TestimonialsClient } from './client/TestimonialsClient'

const testimonials = [
  {
    tempId: 1,
    testimonial: "They delivered a high-quality web app on time. The performance and design exceeded our expectations.",
    by: "Client Review 1",
    imgSrc: ""
  },
  {
    tempId: 2,
    testimonial: "Professional team with great communication. Our SaaS platform is now scalable and stable.",
    by: "Client Review 2",
    imgSrc: ""
  },
  {
    tempId: 3,
    testimonial: "Excellent experience from start to finish. The AI automation they built saved us so much time.",
    by: "Client Review 3",
    imgSrc: ""
  },
  {
    tempId: 4,
    testimonial: "Clean design, smooth functionality, and fast delivery. Highly recommended for software development.",
    by: "Client Review 4",
    imgSrc: ""
  },
  {
    tempId: 5,
    testimonial: "HiveSync transformed our manual processes into a streamlined digital workflow. Their expertise is unmatched.",
    by: "Client Review 5",
    imgSrc: ""
  },
  {
    tempId: 6,
    testimonial: "The best software partner we've ever worked with. They truly understand business needs and translate them into code.",
    by: "Client Review 6",
    imgSrc: ""
  },
  {
    tempId: 7,
    testimonial: "Reliable, fast, and creative. They didn't just build what we asked; they built what we needed.",
    by: "Client Review 7",
    imgSrc: ""
  },
  {
    tempId: 8,
    testimonial: "A game-changer for our fintech startup. Secure, scalable, and beautifully designed architecture.",
    by: "Client Review 8",
    imgSrc: ""
  }
];

export const Testimonials = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-background overflow-hidden" id="testimonials">
      {/* Section header */}
      <div className="mx-auto max-w-[1500px] mb-16 px-5 md:px-10">
        <MotionWrapper
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Testimonials</p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.1] text-foreground max-w-2xl font-syne">
              What Our Clients <span className="text-brand-gradient">Say</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed font-inter">
              Real feedback from businesses we’ve helped grow with custom software solutions.
            </p>
          </div>
        </MotionWrapper>
      </div>

      <TestimonialsClient initialTestimonials={testimonials} />
    </section>
  );
};
