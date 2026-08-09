"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

type DummyPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function DummyPage({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: DummyPageProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-paper via-[#FFF8EE] to-[#EEF3FA] px-5 pt-28 pb-24 sm:px-8 lg:pt-36 lg:pb-32">
      <div
        className="pointer-events-none absolute -right-24 top-20 h-[420px] w-[420px] rounded-full bg-marigold/15 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-[320px] w-[320px] rounded-full bg-indigo/10 blur-[90px]"
        aria-hidden
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md text-base leading-relaxed text-slate sm:text-lg"
          >
            {description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-marigold/40 bg-marigold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-marigold-dark">
              Coming soon
            </span>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              About Us
              <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] shadow-raised lg:mx-0 lg:max-w-none"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 480px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 font-handwriting text-2xl font-bold text-white">
            Page in progress
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
