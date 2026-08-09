"use client";

import { motion } from "framer-motion";
import {
  Award,
  HeartHandshake,
  Scale,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { about } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

const icons = [Shield, Scale, HeartHandshake, Award, Sparkles, TrendingUp] as const;

const accents = [
  "bg-marigold/12 text-marigold-dark border-marigold/30",
  "bg-indigo/10 text-indigo border-indigo/25",
  "bg-success-bg text-success border-success/25",
  "bg-[#FFF4E0] text-marigold-dark border-marigold/25",
  "bg-indigo/8 text-indigo border-indigo/20",
  "bg-success-bg text-success border-success/20",
] as const;

export default function CoreValues() {
  return (
    <section
      id="core-values"
      aria-labelledby="core-values-heading"
      className="relative overflow-hidden bg-[#FEFCF7] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div
        className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-success/10 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-20 h-64 w-64 rounded-full bg-marigold/10 blur-[80px]"
        aria-hidden
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-border/50"
        aria-hidden
      >
        <defs>
          <pattern id="values-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#values-dots)" opacity="0.35" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
          >
            03 / Core Values
          </motion.p>
          <motion.h2
            id="core-values-heading"
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Six commitments we work by
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            Principles that shape every consultation, filing, and follow-up.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {about.values.map((value, idx) => {
            const Icon = icons[idx] ?? Shield;
            return (
              <motion.li
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`relative overflow-hidden rounded-[22px] border border-border/50 bg-white/90 p-6 shadow-card ${
                  idx % 3 === 1 ? "lg:translate-y-4" : ""
                }`}
              >
                <span className="pointer-events-none absolute -right-3 -top-3 font-display text-6xl font-black text-ink/[0.04]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full border ${accents[idx]}`}
                >
                  <motion.span
                    whileHover={{ rotate: 12, scale: 1.08 }}
                    className="inline-flex"
                  >
                    <Icon size={20} strokeWidth={2.2} aria-hidden />
                  </motion.span>
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate sm:text-[15px]">
                  {value.text}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
