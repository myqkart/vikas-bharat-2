"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { aboutStories } from "@/lib/content";
import { photos } from "@/lib/photos";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, fadeLeft, fadeRight, scaleUp } from "@/lib/motion";

type Story = (typeof aboutStories.items)[number];

function HandUnderline({
  className = "",
  active = true,
}: {
  className?: string;
  active?: boolean;
}) {
  return (
    <svg
      className={`absolute -bottom-2 left-0 w-full h-3 ${className}`}
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M2 8 C 40 14, 90 3, 130 7 S 180 11, 198 5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: active ? 1 : 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

function StoryMeta({
  story,
  align = "left",
}: {
  story: Story;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-mono font-bold tracking-[0.18em] uppercase text-slate/55 ${
        align === "right" ? "justify-end" : ""
      }`}
    >
      <span className="text-indigo">STORY / {story.num}</span>
      <span className="text-border">·</span>
      <span>{story.businessType}</span>
      <span className="text-border">·</span>
      <span className="text-marigold-dark border-b border-dashed border-marigold/50 pb-0.5">
        {story.loanType}
      </span>
    </div>
  );
}

function JourneyLabels({ story }: { story: Story }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-3">
      <div>
        <div className="flex items-center gap-2 text-[9px] font-mono font-bold tracking-[0.2em] text-slate/45 uppercase mb-2">
          <span className="h-px w-4 bg-border" />
          The Challenge
        </div>
        <p className="text-sm text-charcoal font-semibold leading-relaxed">
          {story.challenge}
        </p>
      </div>
      <div>
        <div className="flex items-center gap-2 text-[9px] font-mono font-bold tracking-[0.2em] text-marigold-dark/80 uppercase mb-2">
          <span className="h-px w-4 bg-marigold/50" />
          The Turning Point
        </div>
        <p className="text-sm text-charcoal font-semibold leading-relaxed">
          {story.solution}
        </p>
        <p className="mt-2 text-[11px] text-slate font-medium leading-relaxed">
          {story.process}
        </p>
      </div>
      <div>
        <div className="flex items-center gap-2 text-[9px] font-mono font-bold tracking-[0.2em] text-success uppercase mb-2">
          <span className="h-px w-4 bg-success/40" />
          Outcome
        </div>
        <p className="font-display text-lg sm:text-xl font-bold text-ink leading-snug">
          {story.outcome}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {story.metrics.map((m) => (
            <span
              key={m}
              className="inline-flex items-center rounded-md border border-success/15 bg-success-bg/70 px-2.5 py-1 text-[10px] font-bold text-success"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StoryPortraitLead({ story }: { story: Story }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { amount: 0.25, once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yMain = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [40, -40]
  );
  const yFloat = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-30, 50]
  );
  const yQuote = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [20, -20]
  );
  const pathDraw = useTransform(
    scrollYProgress,
    [0.15, 0.55],
    reduceMotion ? [1, 1] : [0, 1]
  );

  return (
    <article
      ref={ref}
      className="relative px-6 sm:px-8 lg:px-14 xl:px-20 py-16 lg:py-24"
      aria-labelledby={`story-${story.id}-name`}
    >
      {/* Local connecting path */}
      <svg
        className="absolute top-[8%] left-[8%] w-[40%] h-[30%] pointer-events-none text-marigold/25 hidden lg:block"
        viewBox="0 0 200 120"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M10 100 C 40 40, 90 20, 140 45 S 190 90, 195 30"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          style={{ pathLength: pathDraw }}
        />
        <circle cx="10" cy="100" r="3" className="fill-marigold" />
        <circle cx="195" cy="30" r="2.5" className="fill-indigo/50" />
      </svg>

      <div className="mx-auto max-w-[1240px]">
        <StoryMeta story={story} />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
          {/* Image collage — left */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
            <motion.div
              style={{ y: yMain }}
              className="absolute left-0 top-0 w-[72%] h-[88%] rounded-[24px] overflow-hidden border border-border/60 shadow-raised bg-paper p-1.5 group"
            >
              <div className="relative w-full h-full overflow-hidden rounded-[18px]">
                <Image
                  src={story.businessImage}
                  alt={`${story.business} — business environment`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 90vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-paper/90">
                    BUSINESS · AT WORK
                  </span>
                  <span className="text-paper/70 text-xs font-mono">↗</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: yFloat }}
              className="absolute right-0 bottom-[4%] w-[42%] aspect-[3/4] rounded-2xl overflow-hidden border-[5px] border-paper shadow-raised bg-paper z-10 group"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src={story.portrait}
                  alt={`Portrait of ${story.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="220px"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full border border-border bg-paper flex items-center justify-center text-[10px] font-mono font-bold text-indigo shadow-sm">
                {story.num}
              </div>
            </motion.div>

            <motion.div
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="absolute right-[8%] top-[6%] w-[28%] aspect-square rounded-xl overflow-hidden border border-border/50 shadow-card -rotate-3 hidden sm:block"
            >
              <Image
                src={story.challengeImage}
                alt={`${story.business} — challenge context`}
                fill
                className="object-cover"
                sizes="140px"
              />
            </motion.div>

            {/* Concentric ring accent */}
            <div className="absolute -left-8 top-[30%] w-36 h-36 opacity-[0.12] pointer-events-none text-indigo hidden lg:block">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                <circle cx="50" cy="50" r="46" strokeWidth="0.6" strokeDasharray="2 3" />
                <circle cx="50" cy="50" r="30" strokeWidth="0.4" />
              </svg>
            </div>
          </div>

          {/* Story copy — right */}
          <div className="relative lg:pt-8">
            <div className="absolute -right-4 top-0 font-display text-[120px] lg:text-[160px] font-black text-ink/[0.035] leading-none select-none pointer-events-none hidden lg:block">
              {story.num}
            </div>

            <p className="text-[10px] font-mono font-bold tracking-[0.22em] text-slate/40 uppercase">
              Customer
            </p>
            <h3
              id={`story-${story.id}-name`}
              className="mt-2 font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-ink leading-[0.95] tracking-tight"
            >
              {story.name}
            </h3>
            <p className="mt-2 font-handwriting text-2xl text-marigold-dark font-bold">
              {story.business}
            </p>

            <JourneyLabels story={story} />

            <motion.blockquote
              style={{ y: yQuote }}
              className="relative mt-10 lg:mt-14"
            >
              <span
                className="absolute -left-2 -top-8 font-display text-7xl text-marigold/25 select-none pointer-events-none"
                aria-hidden
              >
                “
              </span>
              <p className="relative font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-ink leading-[1.2] tracking-tight">
                <span className="relative inline">
                  {story.quote}
                  <HandUnderline
                    className="text-marigold"
                    active={inView}
                  />
                </span>
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-border" />
                <cite className="not-italic text-xs font-mono font-bold tracking-wider text-slate uppercase">
                  {story.name} · {story.business}
                </cite>
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </article>
  );
}

function StoryBusinessCanvas({ story }: { story: Story }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { amount: 0.2, once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yWide = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [30, -50]
  );
  const xPortrait = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [20, -30]
  );
  const openScale = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    reduceMotion ? [1, 1] : [0.94, 1]
  );

  return (
    <article
      ref={ref}
      className="relative py-16 lg:py-28 overflow-hidden"
      aria-labelledby={`story-${story.id}-name`}
    >
      {/* Soft ambient for this story */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-[radial-gradient(circle_at_70%_40%,rgba(29,131,72,0.06),transparent_55%)]" />

      <div className="px-6 sm:px-8 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1240px]">
          <StoryMeta story={story} align="right" />

          <div className="mt-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono font-bold tracking-[0.22em] text-slate/40 uppercase">
                Customer / {story.num}
              </p>
              <h3
                id={`story-${story.id}-name`}
                className="mt-1 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-[0.95]"
              >
                {story.name}
              </h3>
            </div>
            <div className="lg:text-right">
              <p className="font-handwriting text-2xl text-marigold-dark font-bold">
                {story.business}
              </p>
              <p className="text-[10px] font-mono font-bold tracking-widest text-indigo mt-1">
                LOAN TYPE · {story.loanType.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wide cinematic business canvas */}
      <motion.div
        style={{ y: yWide, scale: openScale }}
        className="relative mt-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10"
      >
        <div className="relative h-[280px] sm:h-[380px] lg:h-[460px] rounded-[20px] lg:rounded-[28px] overflow-hidden border border-border/50 shadow-raised group">
          <Image
            src={story.challengeImage}
            alt={`${story.business} workshop environment`}
            fill
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
            sizes="(max-width: 1400px) 95vw, 1400px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

          {/* Before label */}
          <div className="absolute top-5 left-5 sm:top-8 sm:left-8">
            <div className="text-[9px] font-mono font-bold tracking-[0.25em] text-paper/70">
              BEFORE · THE CHALLENGE
            </div>
            <p className="mt-2 max-w-xs font-display text-lg sm:text-xl font-bold text-paper leading-snug">
              {story.challenge}
            </p>
          </div>

          {/* Floating portrait */}
          <motion.div
            style={{ x: xPortrait }}
            className="absolute right-4 sm:right-10 bottom-[-28px] sm:bottom-[-40px] w-[120px] sm:w-[160px] aspect-[3/4] rounded-xl overflow-hidden border-[4px] border-paper shadow-raised z-20"
          >
            <Image
              src={story.portrait}
              alt={`Portrait of ${story.name}`}
              fill
              className="object-cover"
              sizes="160px"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="px-6 sm:px-8 lg:px-14 xl:px-20 mt-16 lg:mt-20">
        <div className="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Outcome image + arrow path */}
          <Reveal variants={fadeLeft}>
            <div className="relative">
              <div className="absolute -top-6 left-4 text-[9px] font-mono font-bold tracking-[0.2em] text-success flex items-center gap-2">
                <ArrowDown size={12} aria-hidden />
                AFTER · OUTCOME
              </div>
              <div className="relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden border border-border/50 shadow-card bg-paper p-1.5">
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{ borderRadius: "10px 70px 10px 70px" }}
                >
                  <Image
                    src={story.outcomeImage}
                    alt={`${story.business} — growth after support`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 480px"
                  />
                </div>
              </div>
              {/* Cross marks */}
              <span className="absolute -right-2 top-1/2 text-marigold/40 font-mono text-lg select-none" aria-hidden>
                ✦
              </span>
            </div>
          </Reveal>

          <Reveal variants={fadeRight}>
            <div>
              <div className="text-[9px] font-mono font-bold tracking-[0.2em] text-slate/45 uppercase mb-3">
                The Turning Point
              </div>
              <p className="text-base text-charcoal font-semibold leading-relaxed max-w-md">
                {story.solution}
              </p>
              <p className="mt-2 text-sm text-slate font-medium">{story.process}</p>

              <p className="mt-8 font-display text-2xl sm:text-3xl font-black text-ink leading-snug max-w-lg">
                {story.outcome}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {story.metrics.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center rounded-md border border-success/15 bg-success-bg/70 px-3 py-1.5 text-[11px] font-bold text-success"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <blockquote className="relative mt-10 border-l-2 border-marigold/60 pl-5">
                <p className="font-display text-xl sm:text-2xl font-bold text-ink leading-snug">
                  <span className="relative">
                    “{story.quote}”
                    <HandUnderline className="text-marigold/80" active={inView} />
                  </span>
                </p>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

function StoryVoiceFirst({ story }: { story: Story }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { amount: 0.2, once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yPortrait = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [50, -40]
  );
  const yDetail = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-25, 35]
  );
  const quoteX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-15, 15]
  );

  return (
    <article
      ref={ref}
      className="relative px-6 sm:px-8 lg:px-14 xl:px-20 py-16 lg:py-28"
      aria-labelledby={`story-${story.id}-name`}
    >
      <div className="absolute inset-0 pointer-events-none -z-20 bg-[radial-gradient(circle_at_25%_60%,rgba(245,166,35,0.07),transparent_50%)]" />

      <div className="mx-auto max-w-[1240px]">
        <StoryMeta story={story} />

        {/* Giant voice-first testimonial */}
        <motion.div style={{ x: quoteX }} className="mt-8 lg:mt-12 relative">
          <span
            className="absolute -left-1 lg:-left-6 -top-10 font-display text-[100px] lg:text-[140px] leading-none text-marigold/15 select-none pointer-events-none"
            aria-hidden
          >
            “
          </span>
          <blockquote>
            <p className="font-display text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] font-black text-ink leading-[1.08] tracking-tight max-w-4xl">
              <span className="relative">
                {story.quote}
                <HandUnderline className="text-marigold" active={inView} />
              </span>
            </p>
            <footer className="mt-8 flex flex-wrap items-center gap-4">
              <div>
                <cite
                  id={`story-${story.id}-name`}
                  className="not-italic font-display text-xl font-bold text-ink"
                >
                  {story.name}
                </cite>
                <p className="font-handwriting text-xl text-marigold-dark font-bold mt-0.5">
                  {story.business}
                </p>
              </div>
              <span className="hidden sm:block h-8 w-px bg-border" />
              <div className="text-[9px] font-mono font-bold tracking-[0.18em] text-slate/50 uppercase space-y-1">
                <div>Story / {story.num}</div>
                <div className="text-indigo">{story.loanType}</div>
              </div>
            </footer>
          </blockquote>
        </motion.div>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          {/* Portrait + detail stack */}
          <div className="relative h-[420px] sm:h-[480px]">
            <motion.div
              style={{ y: yPortrait }}
              className="absolute left-0 top-0 w-[70%] h-[90%] rounded-t-[100px] rounded-b-2xl overflow-hidden border border-border/60 shadow-raised bg-paper p-1.5 group"
            >
              <div className="relative w-full h-full rounded-t-[92px] rounded-b-[12px] overflow-hidden">
                <Image
                  src={story.portrait}
                  alt={`Portrait of ${story.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 70vw, 400px"
                />
              </div>
            </motion.div>

            <motion.div
              style={{ y: yDetail }}
              className="absolute right-0 bottom-0 w-[48%] aspect-[4/5] rounded-2xl overflow-hidden border-[4px] border-paper shadow-raised z-10"
            >
              <Image
                src={story.businessImage}
                alt={`${story.business} craft detail`}
                fill
                className="object-cover"
                sizes="200px"
              />
            </motion.div>

            <div className="absolute right-[10%] top-[8%] w-10 h-10 rounded-full border border-dashed border-marigold/50 flex items-center justify-center text-marigold text-xs font-mono font-bold bg-paper/80">
              +
            </div>
          </div>

          {/* Journey copy */}
          <Reveal variants={fadeUp}>
            <div>
              <div className="grid gap-8">
                <div className="relative pl-5 border-l border-border">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-paper border border-slate/40" />
                  <div className="text-[9px] font-mono font-bold tracking-[0.2em] text-slate/45 uppercase mb-2">
                    The Challenge
                  </div>
                  <p className="text-sm sm:text-base text-charcoal font-semibold leading-relaxed">
                    {story.challenge}
                  </p>
                </div>

                <div className="relative pl-5 border-l border-marigold/40">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-marigold" />
                  <div className="text-[9px] font-mono font-bold tracking-[0.2em] text-marigold-dark uppercase mb-2">
                    The Turning Point
                  </div>
                  <p className="text-sm sm:text-base text-charcoal font-semibold leading-relaxed">
                    {story.solution}
                  </p>
                  <p className="mt-2 text-[12px] text-slate font-medium">
                    {story.process}
                  </p>
                </div>

                <div className="relative pl-5 border-l border-success/40">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-success" />
                  <div className="text-[9px] font-mono font-bold tracking-[0.2em] text-success uppercase mb-2">
                    Outcome
                  </div>
                  <p className="font-display text-xl sm:text-2xl font-bold text-ink leading-snug">
                    {story.outcome}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {story.metrics.map((m) => (
                      <span
                        key={m}
                        className="inline-flex items-center rounded-md border border-success/15 bg-success-bg/70 px-2.5 py-1 text-[10px] font-bold text-success"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

function StoryBridge({ from, to }: { from: string; to: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(
    scrollYProgress,
    [0.1, 0.7],
    reduceMotion ? [1, 1] : [0, 1]
  );
  const dashOffset = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -40]
  );

  return (
    <div
      ref={ref}
      className="relative h-24 sm:h-32 lg:h-40 pointer-events-none select-none overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full text-border"
        viewBox="0 0 1200 160"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 60 40 C 220 140, 380 20, 560 90 S 860 150, 1040 50 S 1160 20, 1200 80"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="5 8"
          style={{ strokeDashoffset: dashOffset }}
        />
        <motion.path
          d="M 60 40 C 220 140, 380 20, 560 90 S 860 150, 1040 50 S 1160 20, 1200 80"
          stroke="var(--color-marigold)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <circle cx="60" cy="40" r="4" className="fill-marigold" />
        <circle cx="1200" cy="80" r="3.5" className="fill-indigo/60" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="bg-paper/80 backdrop-blur-sm px-3 py-1 text-[8px] font-mono font-bold tracking-[0.25em] text-slate/40 border border-border/40 rounded-full">
          {from} → {to}
        </span>
      </div>
    </div>
  );
}

export default function AboutStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const onMotion = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", onMotion);

    return () => {
      window.removeEventListener("resize", handleResize);
      mq.removeEventListener("change", onMotion);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xPeopleDrift = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion || !isDesktop ? ["0%", "0%"] : ["4%", "-10%"]
  );
  const ringRotate = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, 120]
  );
  const connectorDash = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -60]
  );
  const exitPath = useTransform(
    scrollYProgress,
    [0.75, 0.95],
    prefersReducedMotion ? [1, 1] : [0, 1]
  );

  const [ritu, manoj, asha] = aboutStories.items;

  return (
    <section
      ref={sectionRef}
      id={aboutStories.id}
      className="noise-overlay relative overflow-hidden bg-gradient-to-b from-paper via-paper to-paper-deep"
    >
      {/* Continuity curve from Credentials → Stories */}
      <div className="absolute -top-1 left-0 right-0 h-24 pointer-events-none overflow-hidden z-30">
        <svg
          className="w-full h-full text-indigo/35"
          viewBox="0 0 1200 96"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M 40 20 C 180 70, 340 90, 520 55 S 820 10, 980 48 S 1120 80, 1200 40"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            fill="none"
            style={{
              strokeDashoffset: prefersReducedMotion ? 0 : connectorDash,
            }}
          />
          <circle cx="40" cy="22" r="3.5" className="fill-indigo" />
          <circle cx="980" cy="48" r="2.5" className="fill-marigold/70" />
        </svg>
      </div>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none -z-30">
        <div className="absolute top-[8%] left-[-10%] w-[500px] h-[500px] rounded-full bg-marigold/8 blur-[140px]" />
        <div className="absolute top-[45%] right-[-8%] w-[480px] h-[480px] rounded-full bg-success/6 blur-[130px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-indigo/5 blur-[120px]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.028] pointer-events-none select-none -z-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="storiesDotGrid"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.4" fill="var(--color-ink)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#storiesDotGrid)" />
        </svg>
      </div>

      {/* Giant outlined drift text */}
      <motion.div
        className="absolute top-[12%] left-[2%] select-none pointer-events-none -z-20 font-display text-[14vw] font-black uppercase tracking-[0.18em] text-transparent opacity-[0.025]"
        style={{
          WebkitTextStroke: "1.25px var(--color-ink)",
          x: xPeopleDrift,
        }}
        aria-hidden
      >
        PEOPLE
      </motion.div>

      {/* Concentric rings */}
      <motion.div
        style={{ rotate: ringRotate }}
        className="absolute top-[6%] right-[-100px] w-[380px] h-[380px] opacity-[0.07] pointer-events-none -z-10 text-marigold"
        aria-hidden
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="48" strokeWidth="0.5" strokeDasharray="3 4" />
          <circle cx="50" cy="50" r="34" strokeWidth="0.35" />
          <circle cx="50" cy="50" r="20" strokeWidth="0.25" strokeDasharray="1 2" />
          <line x1="50" y1="2" x2="50" y2="98" strokeWidth="0.25" />
          <line x1="2" y1="50" x2="98" y2="50" strokeWidth="0.25" />
        </svg>
      </motion.div>

      {/* Micro corner details */}
      <div className="absolute top-16 left-8 text-[9px] font-mono tracking-widest text-slate/35 pointer-events-none select-none hidden lg:block">
        [ IMPACT FIELD ]
      </div>
      <div className="absolute top-16 right-12 text-marigold/30 text-lg font-bold font-mono pointer-events-none select-none hidden lg:block">
        +
      </div>
      <div className="absolute top-[40%] left-6 text-indigo/20 text-lg font-bold font-mono pointer-events-none select-none hidden lg:block">
        ×
      </div>

      {/* ========== SECTION INTRO ========== */}
      <header className="relative px-6 sm:px-8 lg:px-14 xl:px-20 pt-24 lg:pt-32 pb-10 lg:pb-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-4 flex items-center gap-2 text-[9px] font-mono tracking-widest text-slate/40">
            <span className="w-6 h-px bg-indigo/50" />
            {aboutStories.continuity}
          </div>

          <Reveal>
            <div className="flex items-center gap-2.5 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo">
              <span className="h-1.5 w-1.5 rounded-full bg-marigold animate-pulse" />
              {aboutStories.eyebrow}
            </div>
          </Reveal>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-end">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-black text-ink leading-[0.98] tracking-tight max-w-xl">
                {aboutStories.headingLead}{" "}
                <span className="font-serif italic text-marigold-dark font-normal">
                  {aboutStories.headingAccent}
                </span>
              </h2>
              <p className="font-handwriting text-2xl sm:text-3xl text-marigold-dark mt-2 font-bold">
                {aboutStories.hindi}
              </p>
              <p className="mt-5 text-slate text-sm sm:text-base font-semibold leading-relaxed max-w-md">
                {aboutStories.sub}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="relative">
              <div className="relative h-[200px] sm:h-[240px] rounded-2xl overflow-hidden border border-border/50 shadow-raised">
                <Image
                  src={photos.storyConsult}
                  alt="Advisor supporting a small business founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-paper">
                  <span className="text-[9px] font-mono tracking-widest opacity-80">
                    FACILITATOR · NOT THE HERO
                  </span>
                  <ArrowUpRight size={14} className="opacity-70" aria-hidden />
                </div>
              </div>
              {/* Floating offset frame */}
              <div className="absolute -bottom-6 -left-4 w-[38%] aspect-[4/3] rounded-xl overflow-hidden border-[4px] border-paper shadow-card hidden sm:block">
                <Image
                  src={photos.personRitu}
                  alt="Customer portrait preview"
                  fill
                  className="object-cover"
                  sizes="140px"
                />
              </div>
            </Reveal>
          </div>

          {/* Story index rail */}
          <div className="mt-14 lg:mt-20 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/50 pt-6">
            <span className="text-[9px] font-mono font-bold tracking-[0.22em] text-slate/40">
              {String(aboutStories.items.length).padStart(2, "0")} STORIES
            </span>
            {aboutStories.items.map((s, i) => (
              <a
                key={s.id}
                href={`#story-anchor-${s.id}`}
                className="group inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-ink/70 hover:text-indigo transition-colors focus-visible:outline-none"
              >
                <span className="text-marigold/70 group-hover:text-marigold">
                  {s.num}
                </span>
                <span className="border-b border-transparent group-hover:border-marigold/60 pb-0.5">
                  {s.name.split(" ")[0]}
                </span>
                {i < aboutStories.items.length - 1 && (
                  <span className="text-border ml-2 hidden sm:inline" aria-hidden>
                    /
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ========== STORIES ========== */}
      <div id={`story-anchor-${ritu.id}`}>
        <StoryPortraitLead story={ritu} />
      </div>

      <StoryBridge from={ritu.num} to={manoj.num} />

      <div id={`story-anchor-${manoj.id}`}>
        <StoryBusinessCanvas story={manoj} />
      </div>

      <StoryBridge from={manoj.num} to={asha.num} />

      <div id={`story-anchor-${asha.id}`}>
        <StoryVoiceFirst story={asha} />
      </div>

      {/* ========== SECTION EXIT ========== */}
      <footer className="relative px-6 sm:px-8 lg:px-14 xl:px-20 pt-8 pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1240px]">
          {/* Exit path SVG */}
          <svg
            className="w-full h-16 mb-10 text-marigold/40"
            viewBox="0 0 1200 64"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M 0 40 C 200 10, 400 55, 600 28 S 900 8, 1200 36"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              style={{ pathLength: exitPath }}
            />
          </svg>

          <div className="text-[9px] font-mono font-bold tracking-[0.25em] text-slate/40 mb-4">
            {aboutStories.exitLabel}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink leading-[1.05] tracking-tight">
                {aboutStories.exitLead}{" "}
                <span className="font-serif italic text-marigold-dark font-normal">
                  {aboutStories.exitAccent}
                </span>
              </h3>
              <p className="mt-4 text-slate text-sm font-semibold leading-relaxed max-w-md">
                Credentials prove we can file. These stories prove why it
                matters — capital, licences, and clarity in the hands of real
                founders.
              </p>
            </Reveal>

            {/* Converging portrait mosaic */}
            <Reveal variants={scaleUp}>
              <div className="relative h-[200px] sm:h-[240px]">
                {[ritu, manoj, asha].map((s, i) => (
                  <div
                    key={s.id}
                    className="absolute top-0 overflow-hidden border-[4px] border-paper shadow-raised rounded-2xl"
                    style={{
                      left: `${i * 28}%`,
                      width: "42%",
                      height: "100%",
                      zIndex: 3 - i,
                      transform: `rotate(${(i - 1) * 3}deg) translateY(${i === 1 ? 12 : 0}px)`,
                    }}
                  >
                    <Image
                      src={s.portrait}
                      alt={s.name}
                      fill
                      className="object-cover"
                      sizes="220px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[9px] font-mono font-bold tracking-widest text-paper">
                      {s.num} · {s.name.split(" ")[0].toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Micro progress / measurement ticks */}
          <div className="mt-14 flex items-center gap-3 text-[9px] font-mono font-bold tracking-widest text-slate/35">
            <span>01</span>
            <span className="flex-1 h-px bg-gradient-to-r from-border via-marigold/40 to-border relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-marigold" />
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo/50" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-success" />
            </span>
            <span>03</span>
            <span className="text-border">·</span>
            <span className="text-indigo/60">PEOPLE → CLARITY →</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
