"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { aboutFaq, site } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import { scaleUp, easeOutExpo } from "@/lib/motion";

type FaqItem = (typeof aboutFaq.items)[number];

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
const phoneHref = `tel:${site.phoneNumber}`;

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
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

function CornerMarks({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden>
      <span className="absolute top-0 left-0 h-3 w-3 border-l border-t border-current" />
      <span className="absolute top-0 right-0 h-3 w-3 border-r border-t border-current" />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-l border-b border-current" />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-r border-b border-current" />
    </div>
  );
}

function ClarityPanel({
  item,
  index,
  total,
  reduceMotion,
}: {
  item: FaqItem;
  index: number;
  total: number;
  reduceMotion: boolean | null;
}) {
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="relative">
      <div className="flex items-center justify-between text-[9px] font-mono font-bold tracking-[0.22em] text-slate/45 uppercase">
        <span className="text-indigo">{aboutFaq.indexLabel}</span>
        <span>
          {item.num} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Giant active number */}
      <div className="relative mt-3 mb-1 h-[56px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.num}
            initial={reduceMotion ? false : { y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? undefined : { y: -40, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[56px] font-black text-ink/[0.07] leading-none tracking-tight"
            aria-hidden
          >
            {item.num}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-[9px] font-mono font-bold tracking-[0.2em] text-marigold-dark uppercase mb-2">
        {aboutFaq.questionLabel} · {item.tag}
      </div>

      <AnimatePresence mode="wait">
        <motion.h3
          key={item.id}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl sm:text-3xl lg:text-[34px] font-black text-ink leading-[1.02] tracking-tight"
        >
          {item.display.map((line, i) => (
            <span key={line} className="block">
              {i === item.display.length - 1 ? (
                <span className="relative inline-block">
                  {line}
                  <HandUnderline className="text-marigold" active />
                </span>
              ) : (
                line
              )}
            </span>
          ))}
        </motion.h3>
      </AnimatePresence>

      {/* Contextual image */}
      <div className="relative mt-5 h-[180px] xl:h-[210px] rounded-2xl overflow-hidden border border-border/50 shadow-raised">
        <CornerMarks className="absolute inset-3 z-20 text-paper/40" />
        <AnimatePresence mode="wait">
          <motion.div
            key={item.image}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
          <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-paper/85">
            {item.note}
          </span>
          <span className="text-paper/70 text-xs font-mono" aria-hidden>
            ↗
          </span>
        </div>
      </div>

      {/* Progress measurement ticks */}
      <div className="mt-8">
        <div className="flex items-center justify-between text-[8px] font-mono font-bold tracking-widest text-slate/35 mb-2">
          <span>01</span>
          <span className="text-indigo/60">CLARITY / {item.num}</span>
          <span>{String(total).padStart(2, "0")}</span>
        </div>
        <div className="relative h-px bg-border/70">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-marigold to-indigo/60"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.span
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-marigold border-2 border-paper shadow-sm"
            animate={{ left: `calc(${progress}% - 4px)` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </div>
  );
}

function QuestionRow({
  item,
  index,
  active,
  onSelect,
  panelId,
  reduceMotion,
}: {
  item: FaqItem;
  index: number;
  active: boolean;
  onSelect: (index: number) => void;
  panelId: string;
  reduceMotion: boolean | null;
}) {
  const buttonId = `${panelId}-q-${item.id}`;
  const answerId = `${panelId}-a-${item.id}`;

  return (
    <div
      className={`relative border-b border-border/55 transition-colors ${
        active ? "border-marigold/40" : ""
      }`}
    >
      {/* Active marker ring */}
      <motion.span
        className="absolute -left-1 top-7 w-2.5 h-2.5 rounded-full border border-marigold bg-paper z-10 hidden lg:block"
        animate={{
          scale: active ? 1 : 0.7,
          backgroundColor: active ? "var(--color-marigold)" : "var(--color-paper)",
          opacity: active ? 1 : 0.35,
        }}
        transition={{ duration: 0.35 }}
        aria-hidden
      />

      <button
        id={buttonId}
        type="button"
        aria-expanded={active}
        aria-controls={answerId}
        onClick={() => onSelect(index)}
        className="group relative w-full text-left py-6 sm:py-7 pl-0 lg:pl-6 pr-2 focus-visible:outline-none"
      >
        <div className="flex items-start gap-4 sm:gap-6">
          <span
            className={`mt-1.5 shrink-0 text-[11px] font-mono font-bold tracking-[0.18em] transition-colors ${
              active ? "text-marigold-dark" : "text-slate/40 group-hover:text-indigo/70"
            }`}
          >
            {item.num}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <h3
                className={`font-display font-black leading-[1.08] tracking-tight transition-colors duration-300 ${
                  active
                    ? "text-2xl sm:text-3xl lg:text-[34px] text-ink"
                    : "text-xl sm:text-2xl lg:text-[28px] text-ink/55 group-hover:text-ink"
                }`}
              >
                <span className="relative inline">
                  {item.question}
                  {active && (
                    <HandUnderline className="text-marigold/90" active />
                  )}
                </span>
              </h3>

              <span
                className={`mt-2 shrink-0 text-sm font-mono transition-transform duration-300 ${
                  active
                    ? "text-marigold rotate-45"
                    : "text-slate/35 group-hover:text-indigo/60 group-hover:translate-x-0.5"
                }`}
                aria-hidden
              >
                {active ? "×" : "+"}
              </span>
            </div>

            <div
              className={`mt-2 flex items-center gap-3 text-[9px] font-mono font-bold tracking-[0.18em] uppercase transition-opacity ${
                active ? "opacity-100 text-indigo/70" : "opacity-0"
              }`}
            >
              <span>{item.tag}</span>
              <span className="text-border">·</span>
              <span className="text-marigold-dark">{item.note}</span>
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            initial={
              reduceMotion
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={
              reduceMotion
                ? { opacity: 0, height: 0 }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 lg:pl-6 lg:pr-4">
              <div className="relative ml-10 sm:ml-12 lg:ml-[3.25rem] max-w-xl">
                {/* Answer connector arrow */}
                <svg
                  className="absolute -left-8 top-1 w-6 h-10 text-marigold/50"
                  viewBox="0 0 24 40"
                  fill="none"
                  aria-hidden
                >
                  <motion.path
                    d="M4 2 C 4 18, 4 22, 18 28"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.path
                    d="M12 24 L 18 28 L 13 33"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                  />
                </svg>

                <div className="flex items-center gap-2 text-[9px] font-mono font-bold tracking-[0.22em] text-success uppercase mb-3">
                  <span className="h-px w-5 bg-success/40" />
                  {aboutFaq.answerLabel}
                </div>

                <p className="text-base sm:text-lg text-charcoal font-semibold leading-relaxed">
                  {item.answer}
                </p>

                {/* Mobile image reveal */}
                <div className="relative mt-5 h-[160px] rounded-xl overflow-hidden border border-border/50 shadow-card lg:hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[9px] font-mono font-bold tracking-widest text-paper/90">
                    {item.note}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutFAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const uid = useId();
  const panelId = `about-faq-${uid.replace(/:/g, "")}`;
  const headerInView = useInView(sectionRef, { amount: 0.12, once: true });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const items = aboutFaq.items;
  const active = items[activeIndex] ?? items[0];

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const clarityDrift = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion || !isDesktop ? ["0%", "0%"] : ["3%", "-8%"]
  );
  const ringRotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 90]
  );
  const entryPath = useTransform(
    scrollYProgress,
    [0.05, 0.22],
    reduceMotion ? [1, 1] : [0, 1]
  );
  const connectorDash = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -50]
  );
  const exitPath = useTransform(
    scrollYProgress,
    [0.78, 0.95],
    reduceMotion ? [1, 1] : [0, 1]
  );

  const selectQuestion = useCallback((index: number) => {
    setActiveIndex(index);
    // Keep the chosen question visible inside the right-hand scroller
    requestAnimationFrame(() => {
      const el = document.getElementById(`${panelId}-q-${items[index]?.id}`);
      el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }, [items, panelId]);

  const onKeyNav = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % items.length);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + items.length) % items.length);
      } else if (e.key === "Home") {
        e.preventDefault();
        setActiveIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActiveIndex(items.length - 1);
      }
    },
    [items.length]
  );

  return (
    <section
      ref={sectionRef}
      id={aboutFaq.id}
      className="noise-overlay relative bg-gradient-to-b from-paper-deep via-paper to-paper"
    >
      {/* Continuity curve from Stories → FAQ */}
      <div className="absolute -top-1 left-0 right-0 h-24 pointer-events-none overflow-hidden z-30">
        <svg
          className="w-full h-full text-marigold/40"
          viewBox="0 0 1200 96"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M 0 36 C 180 10, 360 80, 560 48 S 860 8, 1040 55 S 1160 90, 1200 60"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            style={{ strokeDashoffset: connectorDash }}
          />
          <motion.path
            d="M 0 36 C 180 10, 360 80, 560 48 S 860 8, 1040 55 S 1160 90, 1200 60"
            stroke="var(--color-indigo)"
            strokeWidth="1.75"
            strokeLinecap="round"
            style={{ pathLength: entryPath }}
          />
          <circle cx="40" cy="32" r="3.5" className="fill-marigold" />
          <circle cx="1040" cy="55" r="2.5" className="fill-indigo/70" />
        </svg>
      </div>

      {/* Ambient glows — light paper language */}
      <div className="absolute inset-0 pointer-events-none -z-30">
        <div className="absolute top-[6%] right-[-12%] w-[520px] h-[520px] rounded-full bg-marigold/8 blur-[140px]" />
        <div className="absolute top-[40%] left-[-10%] w-[460px] h-[460px] rounded-full bg-indigo/5 blur-[130px]" />
        <div className="absolute bottom-[8%] right-[20%] w-[380px] h-[380px] rounded-full bg-success/5 blur-[120px]" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.028] pointer-events-none select-none -z-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="faqClarityDotGrid"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.4" fill="var(--color-ink)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#faqClarityDotGrid)" />
        </svg>
      </div>

      {/* Fine diagonal hatch — subtle */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none -z-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="faqDiagHatch"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="12"
              stroke="var(--color-ink)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#faqDiagHatch)" />
        </svg>
      </div>

      {/* Giant outlined drift text */}
      <motion.div
        className="absolute top-[10%] right-[-2%] select-none pointer-events-none -z-20 font-display text-[16vw] font-black uppercase tracking-[0.12em] text-transparent opacity-[0.03]"
        style={{
          WebkitTextStroke: "1.25px var(--color-ink)",
          x: clarityDrift,
        }}
        aria-hidden
      >
        CLARITY
      </motion.div>

      {/* Giant decorative ? */}
      <div
        className="absolute top-[18%] left-[4%] font-display text-[28vw] lg:text-[220px] font-black text-ink/[0.03] leading-none select-none pointer-events-none -z-10 hidden sm:block"
        aria-hidden
      >
        ?
      </div>

      {/* Concentric rings */}
      <motion.div
        style={{ rotate: ringRotate }}
        className="absolute bottom-[12%] left-[-80px] w-[320px] h-[320px] opacity-[0.08] pointer-events-none -z-10 text-indigo"
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
        [ HELP FIELD ]
      </div>
      <div className="absolute top-16 right-12 text-marigold/30 text-lg font-bold font-mono pointer-events-none select-none hidden lg:block">
        +
      </div>
      <div className="absolute top-[55%] right-8 text-indigo/20 text-lg font-bold font-mono pointer-events-none select-none hidden lg:block">
        ×
      </div>

      {/* ========== SECTION INTRO ========== */}
      <header className="relative px-6 sm:px-8 lg:px-14 xl:px-20 pt-24 lg:pt-32 pb-10 lg:pb-14">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-4 flex items-center gap-2 text-[9px] font-mono tracking-widest text-slate/40">
            <span className="w-6 h-px bg-marigold/50" />
            {aboutFaq.continuity}
          </div>

          <Reveal>
            <div className="flex items-center gap-2.5 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo">
              <span className="h-1.5 w-1.5 rounded-full bg-marigold animate-pulse" />
              {aboutFaq.eyebrow}
            </div>
          </Reveal>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-end">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-black text-ink leading-[0.98] tracking-tight max-w-xl">
                {aboutFaq.headingLead}{" "}
                <span className="font-serif italic text-marigold-dark font-normal">
                  {aboutFaq.headingAccent}
                </span>
              </h2>
              <p className="font-handwriting text-2xl sm:text-3xl text-marigold-dark mt-2 font-bold">
                {aboutFaq.hindi}
              </p>
              <p className="mt-5 text-slate text-sm sm:text-base font-semibold leading-relaxed max-w-md">
                {aboutFaq.sub}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="relative">
              <div className="relative h-[180px] sm:h-[220px] rounded-2xl overflow-hidden border border-border/50 shadow-raised">
                <Image
                  src={aboutFaq.items[0].image}
                  alt="Clarity begins with a clear conversation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-paper">
                  <span className="text-[9px] font-mono tracking-widest opacity-80">
                    {String(items.length).padStart(2, "0")} QUESTIONS · HELP / 2026
                  </span>
                  <ArrowUpRight size={14} className="opacity-70" aria-hidden />
                </div>
              </div>
              {/* Floating offset fragment */}
              <div className="absolute -bottom-5 -right-3 w-[36%] aspect-square rounded-xl overflow-hidden border-[4px] border-paper shadow-card rotate-3 hidden sm:block">
                <Image
                  src={aboutFaq.items[5].image}
                  alt="Document checklist fragment"
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <span
                className="absolute -top-3 -left-2 w-9 h-9 rounded-full border border-dashed border-marigold/50 flex items-center justify-center text-marigold text-xs font-mono font-bold bg-paper/85"
                aria-hidden
              >
                ✦
              </span>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Connecting path under intro */}
      <div className="relative px-6 sm:px-8 lg:px-14 xl:px-20 mb-4 pointer-events-none" aria-hidden>
        <svg
          className="mx-auto max-w-[1240px] w-full h-10 text-border"
          viewBox="0 0 1200 40"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 0 20 C 200 5, 400 35, 600 18 S 900 5, 1200 22"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="4 6"
            style={{ pathLength: headerInView || reduceMotion ? 1 : entryPath }}
          />
          <circle cx="600" cy="18" r="3" className="fill-marigold/70" />
        </svg>
      </div>

      {/* ========== INTERACTIVE FAQ ==========
          Desktop: pinned split — left stays fixed, only the question list scrolls.
      */}
      <div className="relative px-6 sm:px-8 lg:px-14 xl:px-20 pb-8 lg:pb-12">
        <div
          className="mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 lg:items-stretch lg:h-[calc(100dvh-7.5rem)] lg:max-h-[820px] lg:sticky lg:top-[6.5rem]"
        >
          {/* Left clarity panel — stays put on desktop */}
          <aside className="relative z-10 hidden lg:flex lg:flex-col lg:min-h-0 lg:overflow-hidden">
            {/* Number index rail (stays with left panel) */}
            <div className="mb-5 flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-border/50 pb-4 shrink-0">
              <span className="mr-3 text-[9px] font-mono font-bold tracking-[0.22em] text-slate/40">
                {String(items.length).padStart(2, "0")} QUESTIONS
              </span>
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectQuestion(i)}
                  aria-label={`Go to question ${item.num}: ${item.question}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                  className={`relative px-2 py-1 text-[11px] font-mono font-bold tracking-wider transition-colors focus-visible:outline-none ${
                    i === activeIndex
                      ? "text-ink"
                      : "text-ink/35 hover:text-indigo"
                  }`}
                >
                  {item.num}
                  {i === activeIndex && (
                    <motion.span
                      layoutId="faq-index-dot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-marigold"
                      transition={easeOutExpo}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="relative flex-1 min-h-0">
              {/* Vertical guide line */}
              <div
                className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent"
                aria-hidden
              >
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-marigold"
                  animate={{
                    top: `${(activeIndex / Math.max(items.length - 1, 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <ClarityPanel
                item={active}
                index={activeIndex}
                total={items.length}
                reduceMotion={reduceMotion}
              />

              <div
                className="absolute -right-10 top-[40%] w-28 h-28 opacity-[0.12] pointer-events-none text-marigold"
                aria-hidden
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    strokeWidth="0.6"
                    strokeDasharray="2 3"
                  />
                  <circle cx="50" cy="50" r="28" strokeWidth="0.4" />
                </svg>
              </div>
            </div>
          </aside>

          {/* Right — question list scrolls independently on desktop */}
          <div
            ref={listRef}
            role="list"
            aria-label="Frequently asked questions"
            onKeyDown={onKeyNav}
            className="relative lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain lg:pr-3 lg:scroll-smooth [scrollbar-width:thin]"
          >
            {/* Mobile number rail */}
            <div className="mb-6 flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-border/50 pb-4 lg:hidden">
              <span className="mr-3 text-[9px] font-mono font-bold tracking-[0.22em] text-slate/40">
                {String(items.length).padStart(2, "0")} QUESTIONS
              </span>
              {items.map((item, i) => (
                <button
                  key={`m-${item.id}`}
                  type="button"
                  onClick={() => selectQuestion(i)}
                  aria-label={`Go to question ${item.num}: ${item.question}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                  className={`relative px-2 py-1 text-[11px] font-mono font-bold tracking-wider transition-colors focus-visible:outline-none ${
                    i === activeIndex
                      ? "text-ink"
                      : "text-ink/35 hover:text-indigo"
                  }`}
                >
                  {item.num}
                  {i === activeIndex && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-marigold" />
                  )}
                </button>
              ))}
            </div>

            <svg
              className="absolute left-0 top-8 bottom-8 w-3 pointer-events-none text-border/80 hidden lg:block"
              aria-hidden
            >
              <line
                x1="5"
                y1="0"
                x2="5"
                y2="100%"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 5"
              />
            </svg>

            {items.map((item, i) => (
              <div key={item.id} role="listitem">
                <QuestionRow
                  item={item}
                  index={i}
                  active={i === activeIndex}
                  onSelect={selectQuestion}
                  panelId={panelId}
                  reduceMotion={reduceMotion}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== SECTION EXIT ========== */}
      <footer className="relative px-6 sm:px-8 lg:px-14 xl:px-20 pt-10 pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1240px]">
          <svg
            className="w-full h-16 mb-10 text-marigold/40"
            viewBox="0 0 1200 64"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M 0 40 C 220 12, 420 55, 620 30 S 920 8, 1200 38"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              style={{ pathLength: exitPath }}
            />
            <circle cx="620" cy="30" r="3.5" className="fill-indigo/50" />
          </svg>

          <div className="text-[9px] font-mono font-bold tracking-[0.25em] text-slate/40 mb-4">
            {aboutFaq.exitLabel}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink leading-[1.05] tracking-tight">
                {aboutFaq.exitLead}{" "}
                <span className="font-serif italic text-marigold-dark font-normal">
                  {aboutFaq.exitAccent}
                </span>
              </h3>
              <p className="mt-4 text-slate text-sm font-semibold leading-relaxed max-w-md">
                {aboutFaq.exitSub}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center gap-2 rounded-md bg-marigold px-5 py-3 text-sm font-bold text-ink shadow-card hover:bg-marigold-dark transition-colors focus-visible:outline-none"
                >
                  <MessageCircle size={16} aria-hidden />
                  {aboutFaq.ctaPrimary}
                  <ArrowUpRight size={14} aria-hidden />
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-paper px-5 py-3 text-sm font-bold text-ink hover:border-indigo/30 transition-colors focus-visible:outline-none"
                >
                  <Phone size={15} aria-hidden />
                  {aboutFaq.ctaSecondary}
                </a>
              </div>
            </Reveal>

            <Reveal variants={scaleUp}>
              <div className="relative h-[200px] sm:h-[240px]">
                {[0, 5, 3].map((qi, i) => {
                  const img = items[qi];
                  return (
                    <div
                      key={img.id}
                      className="absolute top-0 overflow-hidden border-[4px] border-paper shadow-raised rounded-2xl"
                      style={{
                        left: `${i * 26}%`,
                        width: "48%",
                        height: "100%",
                        zIndex: 3 - i,
                        transform: `rotate(${(i - 1) * 2.5}deg) translateY(${i === 1 ? 14 : 0}px)`,
                      }}
                    >
                      <Image
                        src={img.image}
                        alt={img.imageAlt}
                        fill
                        className="object-cover"
                        sizes="220px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 text-[9px] font-mono font-bold tracking-widest text-paper">
                        {img.num} · {img.tag.toUpperCase()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <div className="mt-14 flex items-center gap-3 text-[9px] font-mono font-bold tracking-widest text-slate/35">
            <span>08</span>
            <span className="flex-1 h-px bg-gradient-to-r from-border via-marigold/40 to-border relative">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-marigold" />
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo/50" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-success" />
            </span>
            <span>CTA</span>
            <span className="text-border">·</span>
            <span className="text-indigo/60">READY WHEN YOU ARE →</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
