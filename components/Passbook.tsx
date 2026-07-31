"use client";

import { motion } from "framer-motion";
import { passbook } from "@/lib/content";
import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, scaleUp, staggerContainer } from "@/lib/motion";

const stampStyles: Record<string, string> = {
  PAID: "border-success text-success",
  DONE: "border-indigo text-indigo",
  FAST: "border-marigold-dark text-marigold-dark",
  OK: "border-ink text-ink",
};

export default function Passbook() {
  return (
    <section className="relative px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
            {passbook.title}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">
            {passbook.subtitle}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal lg:text-base">
            {passbook.body}
          </p>
        </Reveal>

        <Reveal variants={scaleUp} className="relative mx-auto mt-10 max-w-5xl lg:mt-14">
          <motion.div
            className="relative overflow-hidden rounded-[14px] border border-border bg-white/90 shadow-raised backdrop-blur"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div
              aria-hidden
              className="passbook-perforation pointer-events-none absolute inset-y-0 left-0 z-10"
            />

            <motion.div
              className="grid grid-cols-2 divide-x divide-y divide-border pl-3 lg:grid-cols-4 lg:divide-y-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={staggerContainer}
            >
              {passbook.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="relative min-w-0 px-4 pb-6 pt-8 sm:px-6 sm:pb-8 sm:pt-10 lg:px-7"
                >
                  <motion.span
                    aria-hidden
                    initial={{ rotate: -18, opacity: 0, scale: 0.7 }}
                    whileInView={{ rotate: -6, opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 160, damping: 12, delay: 0.2 }}
                    className={`absolute right-3 top-3 select-none rounded-[6px] border-2 bg-white/80 px-1.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] sm:right-4 sm:top-4 sm:text-[11px] ${
                      stampStyles[stat.stamp] ?? "border-ink text-ink"
                    }`}
                  >
                    {stat.stamp}
                  </motion.span>

                  <CountUp
                    value={stat.value}
                    className="block pr-12 font-display text-[32px] font-bold leading-none tracking-tight text-ink whitespace-nowrap sm:text-4xl lg:text-[44px]"
                  />
                  <p className="mt-3 text-sm font-semibold text-slate sm:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Reveal>

        <motion.ul
          className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {passbook.extras.map((extra) => (
            <motion.li
              key={extra.label}
              variants={fadeUp}
              className="rounded-[14px] border border-border bg-white/80 px-4 py-4 text-center shadow-card"
            >
              <p className="text-sm font-semibold text-slate">{extra.label}</p>
              <p className="mt-1 font-display text-xl font-bold text-ink">
                {extra.value}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
