"use client";

import { motion, useReducedMotion } from "framer-motion";
import { schemePage } from "@/lib/content";
import { flipIn, staggerDramatic } from "@/lib/motion";
import CountUp from "@/components/motion/CountUp";

export default function SchemePageStats() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Scheme impact statistics"
      className="relative overflow-hidden bg-ink px-5 py-14 sm:px-8 lg:py-16"
    >
      <div
        className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-marigold/20 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-indigo/40 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(251,246,236,0.35) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerDramatic}
        className="relative z-10 mx-auto grid max-w-[1200px] gap-10 sm:grid-cols-3 sm:gap-8"
      >
        {schemePage.strip.map((stat, idx) => (
          <motion.li
            key={stat.label}
            variants={flipIn}
            className={`text-center ${
              idx === 1 ? "sm:border-x sm:border-white/10" : ""
            }`}
          >
            <p className="font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
              {reduce ? stat.value : <CountUp value={stat.value} />}
            </p>
            <p className="mx-auto mt-3 max-w-[16rem] text-[11px] font-bold uppercase tracking-[0.14em] text-marigold">
              {stat.label}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
