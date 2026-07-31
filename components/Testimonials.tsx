"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section id="stories" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-semibold tracking-wide text-slate lg:text-sm">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
            {testimonials.heading}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">
            {testimonials.sub}
          </p>
        </Reveal>

        <motion.ul
          className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {testimonials.items.map((item, i) => (
            <motion.li key={item.name} variants={fadeUp}>
              <TiltCard intensity={6} className="h-full">
                <div className="flex h-full flex-col items-center rounded-[14px] border border-border/60 bg-paper-deep/80 px-5 py-8 text-center shadow-card backdrop-blur-sm sm:px-6">
                  <motion.div
                    className="relative h-20 w-20 overflow-hidden rounded-full shadow-card ring-4 ring-white"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`Photo of ${item.name}, ${item.role}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="mt-3 flex gap-0.5" aria-label={`${item.rating} star rating`}>
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        className="fill-marigold text-marigold"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate">
                    {item.businessType}
                  </p>
                  <Quote
                    size={24}
                    strokeWidth={2.25}
                    className="mt-4 text-marigold"
                    aria-hidden
                  />
                  <blockquote className="mt-3 font-display text-lg font-medium italic leading-snug text-ink sm:text-xl">
                    “{item.quote}”
                  </blockquote>
                  <p className="mt-5 text-sm font-bold text-ink">{item.name}</p>
                  <p className="mt-1 text-sm text-slate">{item.role}</p>
                  <motion.span
                    className="mt-4 inline-flex rounded-[6px] bg-success-bg px-3 py-1.5 text-sm font-bold text-success"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.badge}
                  </motion.span>
                </div>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
