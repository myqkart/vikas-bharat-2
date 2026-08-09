"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { site } from "@/lib/content";
import { photos } from "@/lib/photos";
import TiltCard from "@/components/motion/TiltCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;

const heroImages = [
  {
    src: photos.aboutHeroPortrait,
    alt: "VIKASBHART consultant guiding a small business founder at the walk-in desk",
    label: "Walk-in desk",
  },
  {
    src: photos.aboutHeroMarket,
    alt: "Local retail entrepreneur at their shop counter",
    label: "Dukaan floor",
  },
  {
    src: photos.aboutHeroCity,
    alt: "Indian city skyline — the places we serve from",
    label: "India / multi-city",
  },
  {
    src: photos.aboutHeroDocs,
    alt: "Business filings and scheme documents being prepared",
    label: "Filings",
  },
  {
    src: photos.aboutHeroLeader,
    alt: "Founder deciding the next step for her enterprise",
    label: "Founders",
  },
] as const;

function MagCta({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 280, damping: 22, mass: 0.35 });
  const y = useSpring(my, { stiffness: 280, damping: 22, mass: 0.35 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ x, y }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set((e.clientX - r.left - r.width / 2) * 0.28);
        my.set((e.clientY - r.top - r.height / 2) * 0.28);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const motionOff = !!reduceMotion || !isDesktop;

  const yBg = useTransform(scrollYProgress, [0, 1], motionOff ? [0, 0] : [0, 80]);
  const yGiant = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? ["0%", "0%"] : ["0%", "-8%"]
  );
  const yPrimary = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, -36]
  );
  const ySupportA = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, 48]
  );
  const ySupportB = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, -24]
  );
  const ySupportC = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, 32]
  );
  const yType = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, -18]
  );
  const pathDraw = useTransform(
    scrollYProgress,
    [0.05, 0.55],
    reduceMotion ? [1, 1] : [0.12, 1]
  );
  const dashOffset = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -48]
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 1, 0.55]
  );
  const ringRotate = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, 35]
  );
  const underlineDraw = useTransform(
    scrollYProgress,
    [0, 0.28],
    reduceMotion ? [1, 1] : [0.35, 1]
  );

  return (
    <section
      ref={containerRef}
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="noise-overlay relative overflow-hidden bg-paper px-5 pt-28 pb-20 sm:px-8 lg:pt-36 lg:pb-28"
    >
      {/* LAYER 01–04: atmosphere */}
      <div className="mesh-gradient pointer-events-none absolute inset-0 -z-30 opacity-[0.4]" />
      <div
        className="pointer-events-none absolute -left-[8%] top-[8%] h-[420px] w-[420px] rounded-full bg-marigold/10 blur-[110px] -z-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[12%] right-[-6%] h-[480px] w-[480px] rounded-full bg-indigo/[0.07] blur-[120px] -z-20"
        aria-hidden
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.04] select-none"
        aria-hidden
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="aboutHeroDotGrid"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1" fill="#12294D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutHeroDotGrid)" />
        </svg>
      </div>

      {/* Fine line grid accent — top right only */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[55%] w-[42%] -z-20 opacity-[0.03] select-none"
        aria-hidden
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="aboutHeroLineGrid"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 36 0 L 0 0 0 36"
                fill="none"
                stroke="#12294D"
                strokeWidth="0.7"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutHeroLineGrid)" />
        </svg>
      </div>

      {/* Giant background typography */}
      <motion.div
        style={{ y: yGiant }}
        className="pointer-events-none absolute left-[-2%] top-[14%] z-0 select-none font-display text-[22vw] font-black leading-none tracking-[-0.04em] text-transparent opacity-[0.055] lg:top-[10%] lg:text-[18vw]"
        aria-hidden
      >
        <span style={{ WebkitTextStroke: "1.75px var(--color-ink)" }}>हम</span>
      </motion.div>

      {/* Concentric rings — shared vocabulary with Mission */}
      <motion.div
        style={{ y: yBg, rotate: ringRotate }}
        className="pointer-events-none absolute -right-24 top-[6%] -z-10 h-[440px] w-[440px] text-indigo opacity-[0.14] sm:h-[520px] sm:w-[520px] lg:right-[-80px] lg:top-[4%]"
        aria-hidden
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="50" cy="50" r="48" strokeWidth="0.45" strokeDasharray="3 5" />
          <circle cx="50" cy="50" r="36" strokeWidth="0.35" />
          <circle cx="50" cy="50" r="22" strokeWidth="0.5" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" opacity="0.4" />
        </svg>
      </motion.div>

      {/* Micro marks */}
      <span
        className="pointer-events-none absolute left-[6%] top-[22%] z-10 hidden font-mono text-lg font-bold text-indigo/25 lg:block"
        aria-hidden
      >
        +
      </span>
      <span
        className="pointer-events-none absolute right-[18%] top-[38%] z-10 hidden font-mono text-xl font-bold text-indigo/20 lg:block"
        aria-hidden
      >
        ×
      </span>
      <span
        className="pointer-events-none absolute bottom-[28%] left-[14%] z-10 hidden font-mono text-sm font-bold text-marigold/40 lg:block"
        aria-hidden
      >
        ✦
      </span>

      {/* Measurement ticks */}
      <div
        className="pointer-events-none absolute left-3 top-[30%] hidden flex-col gap-2 lg:flex"
        aria-hidden
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-px bg-slate/25 ${i % 2 === 0 ? "w-4" : "w-2"}`}
          />
        ))}
      </div>

      {/* Primary SVG path system — draws through the hero toward Mission */}
      <svg
        className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full text-marigold/55 lg:block"
        viewBox="0 0 1240 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <motion.path
          d="M 90 160 C 220 140, 280 260, 420 240 S 560 120, 700 180 S 880 320, 980 280 S 1100 420, 1160 620"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="6 10"
          style={{ pathLength: pathDraw, strokeDashoffset: dashOffset }}
        />
        <motion.path
          d="M 90 160 C 220 140, 280 260, 420 240 S 560 120, 700 180 S 880 320, 980 280 S 1100 420, 1160 620"
          stroke="var(--color-indigo)"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.35"
          style={{ pathLength: pathDraw }}
        />
        <circle cx="90" cy="160" r="4" className="fill-marigold" />
        <circle cx="700" cy="180" r="3" className="fill-indigo/50" />
        <circle cx="1160" cy="620" r="4.5" className="fill-marigold" />
      </svg>

      {/* Mobile path — simplified, still visible */}
      <svg
        className="pointer-events-none absolute left-0 top-[18%] z-[1] h-[42%] w-full text-marigold/40 lg:hidden"
        viewBox="0 0 390 420"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M 24 40 C 90 20, 120 110, 200 90 S 300 40, 360 140 S 300 260, 340 380"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="5 8"
          style={{ pathLength: pathDraw }}
        />
        <circle cx="24" cy="40" r="3.5" className="fill-marigold" />
        <circle cx="340" cy="380" r="3" className="fill-indigo/40" />
      </svg>

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 mx-auto max-w-[1240px]"
      >
        {/* Top meta rail */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-4 lg:mb-12"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate/55"
          >
            <span className="text-indigo">About / 01</span>
            <span className="text-border">·</span>
            <span>Who we are</span>
            <span className="text-border">·</span>
            <span className="border-b border-dashed border-marigold/50 pb-0.5 text-marigold-dark">
              Est. 2016
            </span>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate/45"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
              Ahmedabad
            </span>
            <span className="text-border">→</span>
            <span>India</span>
            <span className="hidden text-border sm:inline">·</span>
            <span className="hidden sm:inline">23.02°N · 72.57°E</span>
          </motion.div>
        </motion.div>

        {/* Main composition */}
        <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 xl:gap-10">
          {/* Typography column */}
          <motion.div style={{ y: yType }} className="relative z-20 lg:pr-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="inline-flex items-center gap-2 border-l-2 border-marigold pl-3.5 text-xs font-bold uppercase tracking-[0.2em] text-slate"
              >
                About · Who we are
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
              >
                {site.companyName}
              </motion.p>

              <motion.h1
                id="about-hero-heading"
                variants={fadeUp}
                className="mt-3 font-display text-[2.15rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem]"
              >
                Built for dukaan owners,{" "}
                <span className="relative inline-block italic text-indigo">
                  not dashboards.
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-full text-marigold sm:-bottom-3 sm:h-3.5"
                    viewBox="0 0 320 14"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <motion.path
                      d="M4 9 C 70 3, 140 12, 200 7 S 280 4, 316 8"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      style={{ pathLength: underlineDraw }}
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 font-handwriting text-2xl font-bold leading-snug text-indigo sm:text-3xl"
              >
                &ldquo;{site.tagline}&rdquo;
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-[34rem] text-base leading-relaxed text-slate sm:text-lg"
              >
                We exist so capital, licences, and compliance stay reachable for
                every serious small business in India — explained in Hindi &amp;
                English, not jargon.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <MagCta
                  href="#company-mission"
                  className="btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-ink px-7 py-3.5 text-base font-bold text-paper shadow-raised transition-colors hover:bg-indigo"
                >
                  Why we exist
                  <ArrowDown size={16} strokeWidth={2.4} aria-hidden />
                </MagCta>
                <MagCta
                  href={whatsappHref}
                  external
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border-2 border-ink/85 bg-white/70 px-7 py-3.5 text-base font-bold text-ink backdrop-blur-md transition-colors hover:bg-ink hover:text-white"
                >
                  <MessageCircle size={18} strokeWidth={2.25} aria-hidden />
                  Talk on WhatsApp
                </MagCta>
              </motion.div>

              {/* Editorial annotation strip — not stats cards */}
              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/45 pt-6 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate/50"
              >
                <span>Walk-in help desks</span>
                <span className="text-border">·</span>
                <span>Bilingual guidance</span>
                <span className="text-border">·</span>
                <span>Proof over promises</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image collage — art-directed, not a card grid */}
          <div className="relative z-10 mx-auto h-[420px] w-full max-w-[560px] sm:h-[500px] lg:mx-0 lg:h-[580px] lg:max-w-none">
            {/* Dominant portrait — visual anchor */}
            <motion.div
              style={{ y: yPrimary }}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[8%] top-[4%] z-20 h-[72%] w-[62%] sm:left-[10%] lg:left-[6%] lg:w-[58%]"
            >
              <TiltCard
                intensity={reduceMotion ? 0 : 9}
                className="h-full w-full"
              >
                <div
                  className="relative h-full w-full overflow-hidden border border-border/55 bg-white p-2.5 shadow-raised sm:p-3"
                  style={{ borderRadius: "180px 180px 22px 22px" }}
                >
                  <div
                    className="relative h-full w-full overflow-hidden"
                    style={{ borderRadius: "168px 168px 14px 14px" }}
                  >
                    <Image
                      src={heroImages[0].src}
                      alt={heroImages[0].alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 70vw, 380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-0 right-0 px-4 text-center">
                      <span className="font-handwriting text-xl font-bold text-white drop-shadow-[0_2px_6px_rgba(18,41,77,0.75)] sm:text-2xl">
                        Real desks. Real people.
                      </span>
                    </div>
                  </div>
                  {/* Corner brackets on dominant frame */}
                  <span
                    className="pointer-events-none absolute left-1 top-1 h-4 w-4 border-l-2 border-t-2 border-marigold/70"
                    aria-hidden
                  />
                  <span
                    className="pointer-events-none absolute right-1 top-1 h-4 w-4 border-r-2 border-t-2 border-marigold/40"
                    aria-hidden
                  />
                </div>
              </TiltCard>
            </motion.div>

            {/* Supporting — dukaan / market (offset frame) */}
            <motion.div
              style={{ y: ySupportA }}
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-0 top-[10%] z-30 h-[38%] w-[42%] sm:w-[40%]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-marigold/35 bg-paper-deep p-2 shadow-raised rotate-[3deg] transition-transform duration-500 hover:rotate-0">
                <div className="relative h-full w-full overflow-hidden rounded-[16px]">
                  <Image
                    src={heroImages[1].src}
                    alt={heroImages[1].alt}
                    fill
                    sizes="(max-width: 1024px) 40vw, 220px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-white/90">
                    {heroImages[1].label}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Supporting — city / place (arch crop fragment) */}
            <motion.div
              style={{ y: ySupportB }}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.28,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute bottom-[6%] left-0 z-10 h-[28%] w-[36%] sm:bottom-[8%] sm:w-[34%]"
            >
              <div
                className="relative h-full w-full overflow-hidden border border-border/50 bg-white p-1.5 shadow-card -rotate-[4deg] transition-transform duration-500 hover:rotate-0"
                style={{ borderRadius: "999px 999px 14px 14px" }}
              >
                <div
                  className="relative h-full w-full overflow-hidden"
                  style={{ borderRadius: "999px 999px 10px 10px" }}
                >
                  <Image
                    src={heroImages[2].src}
                    alt={heroImages[2].alt}
                    fill
                    sizes="(max-width: 1024px) 30vw, 180px"
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="mt-1.5 block text-center text-[8px] font-mono font-bold uppercase tracking-[0.18em] text-slate/45">
                {heroImages[2].label}
              </span>
            </motion.div>

            {/* Supporting — docs (floating annotation) */}
            <motion.div
              style={{ y: ySupportC }}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute bottom-[4%] right-[4%] z-40 h-[26%] w-[40%] sm:right-[2%] sm:w-[38%]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/45 bg-white p-2 shadow-[0_16px_36px_-10px_rgba(18,41,77,0.28)] rotate-[2deg] transition-transform duration-500 hover:rotate-0">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={heroImages[3].src}
                    alt={heroImages[3].alt}
                    fill
                    sizes="(max-width: 1024px) 35vw, 200px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-border/60 bg-paper font-mono text-[10px] font-bold text-indigo shadow-card">
                04
              </div>
            </motion.div>

            {/* Tiny founder fragment — desktop annotation */}
            <motion.div
              style={{ y: ySupportA }}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute right-[8%] top-[52%] z-50 hidden h-[18%] w-[22%] overflow-hidden rounded-full border-2 border-white shadow-raised lg:block"
            >
              <Image
                src={heroImages[4].src}
                alt={heroImages[4].alt}
                fill
                sizes="120px"
                className="object-cover"
              />
            </motion.div>

            {/* Orbit marker near dominant */}
            <div
              className="pointer-events-none absolute left-[4%] top-[2%] z-30"
              aria-hidden
            >
              {!reduceMotion ? (
                <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-marigold/50" />
              ) : null}
              <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-marigold" />
            </div>
          </div>
        </div>

        {/* First-scroll invitation + transition cue into Mission */}
        <div className="relative mt-14 flex flex-col items-start justify-between gap-6 border-t border-border/40 pt-8 sm:mt-16 sm:flex-row sm:items-end lg:mt-20">
          <div className="max-w-md">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate/45">
              01 → 02 · Opening into purpose
            </p>
            <p className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
              Next: why we exist —{" "}
              <span className="italic text-indigo">shared progress.</span>
            </p>
          </div>

          <a
            href="#company-mission"
            className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate transition-colors hover:text-ink"
          >
            <span>Scroll to explore</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/80 shadow-card transition-transform duration-300 group-hover:translate-y-1">
              <ArrowDown
                size={14}
                className="text-marigold-dark"
                aria-hidden
              />
            </span>
          </a>
        </div>
      </motion.div>

      {/* Soft continuity into Mission (paper → paper-deep) — no generic wave */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-paper-deep"
        aria-hidden
      />

      {/* Continuing path stub that visually hands off to Mission */}
      <svg
        className="pointer-events-none absolute bottom-0 left-1/2 z-[2] hidden h-24 w-[min(100%,720px)] -translate-x-1/2 text-marigold/40 lg:block"
        viewBox="0 0 720 96"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M 40 8 C 180 70, 320 10, 420 48 S 600 90, 700 40"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="5 8"
          style={{ pathLength: pathDraw }}
        />
        <circle cx="700" cy="40" r="3.5" className="fill-indigo/40" />
      </svg>
    </section>
  );
}
