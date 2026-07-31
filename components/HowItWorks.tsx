"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { howItWorks } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-semibold tracking-wide text-slate lg:text-sm">
            {howItWorks.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
            {howItWorks.heading}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">{howItWorks.sub}</p>
        </Reveal>

        <Reveal className="relative mx-auto mt-10 aspect-[2/1] max-w-4xl overflow-hidden rounded-[14px] shadow-raised">
          <Image
            src={howItWorks.diagram.src}
            alt={howItWorks.diagram.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </Reveal>

        <div className="relative mt-12 sm:mt-14">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-[64px] right-[12.5%] left-[12.5%] hidden h-px bg-border lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />

          <motion.ol
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {howItWorks.steps.map((step, index) => (
              <motion.li
                key={step.title}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <motion.div
                    className="relative h-32 w-32 overflow-hidden rounded-full shadow-card ring-4 ring-paper"
                    whileHover={{ scale: 1.06 }}
                  >
                    <Image
                      src={step.image}
                      alt={`Step ${index + 1}: ${step.title}. ${step.caption}`}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.span
                    className="absolute -bottom-1 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white shadow-card"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 14,
                      delay: 0.12 * index,
                    }}
                  >
                    {index + 1}
                  </motion.span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm font-bold text-marigold">
                  {step.caption}
                </p>
                <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-slate">
                  {step.detail}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
