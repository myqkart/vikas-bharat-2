"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AboutMilestones() {
  return (
    <section
      id="about-milestones"
      aria-labelledby="about-milestones-heading"
      className="relative overflow-hidden bg-success-bg px-5 py-16 sm:px-8 lg:py-20"
    >
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.18em] text-success"
          >
            Our journey
          </motion.p>
          <motion.h2
            id="about-milestones-heading"
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Built step by step
          </motion.h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {about.milestones.map((item) => (
            <motion.li
              key={item.year}
              variants={fadeUp}
              className="rounded-[20px] border border-success/15 bg-white/80 px-5 py-6 text-center shadow-card"
            >
              <p className="font-display text-2xl font-bold text-success">
                {item.year}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
