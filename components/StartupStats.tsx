"use client";

import { motion } from "framer-motion";
import { startupIndia } from "@/lib/content";
import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stampStyles: Record<string, string> = {
  DPIIT: "border-indigo text-indigo",
  TAX: "border-success text-success",
  NEW: "border-marigold-dark text-marigold-dark",
};

export default function StartupStats() {
  return (
    <section
      id={startupIndia.id}
      aria-labelledby="startup-india-heading"
      className="relative px-5 py-14 lg:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(30,62,114,0.1),transparent_45%)]" />

      <div className="relative mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-semibold tracking-[0.16em] text-slate uppercase">
            {startupIndia.eyebrow}
          </p>
          <h2
            id="startup-india-heading"
            className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]"
          >
            {startupIndia.heading}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">{startupIndia.sub}</p>
        </Reveal>

        <motion.ul
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {startupIndia.stats.map((stat) => (
            <motion.li
              key={stat.label}
              variants={fadeUp}
              className="relative overflow-hidden rounded-[18px] border border-border bg-white/90 px-5 py-7 text-center shadow-card"
            >
              <span
                className={`absolute top-3 right-3 rounded-[6px] border-2 bg-white/80 px-1.5 py-0.5 text-[10px] font-bold tracking-[0.16em] uppercase ${
                  stampStyles[stat.stamp] ?? "border-ink text-ink"
                }`}
              >
                {stat.stamp}
              </span>
              <CountUp
                value={stat.value}
                className="font-display text-[36px] font-bold leading-none text-ink sm:text-[40px]"
              />
              <p className="mt-3 text-sm font-semibold text-slate sm:text-base">
                {stat.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal className="mx-auto mt-8 max-w-3xl rounded-[14px] border border-dashed border-indigo/30 bg-indigo/[0.04] px-5 py-4 text-left sm:px-6">
          <p className="text-[11px] font-bold tracking-[0.14em] text-indigo uppercase">
            Gazette update · 4 Feb 2026
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal">
            {startupIndia.notice}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
