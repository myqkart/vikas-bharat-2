"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { about, site } from "@/lib/content";
import { photos } from "@/lib/photos";
import TiltCard from "@/components/motion/TiltCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

/**
 * Metaphor: PATH / DIRECTION
 * Continues the Hero's curved SVG into Purpose → Mission → Goals → Future,
 * then splits toward Core Values. Not pinned — Core Values already owns sticky.
 */

const goals = [
  {
    id: "serve",
    num: "01",
    label: "Who we serve",
    title: "Dukaan owners & first-time founders",
    text: "Kirana, tailoring, hardware, food, and serious MSMEs — the same care whether you walk in or message us.",
    image: photos.aboutMissionServe,
    alt: "Local commerce and small retail energy across India",
    coord: "SERVE",
  },
  {
    id: "clear",
    num: "02",
    label: "What we clear",
    title: "Capital, compliance & licences",
    text: "Company incorporation, MSME/Udyam, GST, schemes, loans, and growth advisory — matched to your business, not a generic portal.",
    image: photos.aboutMissionClear,
    alt: "Business filings and scheme documents being prepared",
    coord: "CLEAR",
  },
  {
    id: "stand",
    num: "03",
    label: "How we stand",
    title: "Hindi, English & proof",
    text: "Eligibility explained before a single document. Stamped outcomes, case timelines, and updates you can forward to family.",
    image: photos.aboutMissionAction,
    alt: "Consultant guiding a founder at a walk-in help desk",
    coord: "STAND",
  },
] as const;

type Stage = "purpose" | "mission" | "goals" | "future";

export default function CompanyMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [stage, setStage] = useState<Stage>("purpose");
  const [activeGoal, setActiveGoal] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const motionOff = !!reduceMotion || !isDesktop;

  const pathDraw = useTransform(
    scrollYProgress,
    [0.12, 0.78],
    reduceMotion ? [1, 1] : [0.08, 1]
  );
  const dashOffset = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -64]
  );
  const splitDraw = useTransform(
    scrollYProgress,
    [0.72, 0.95],
    reduceMotion ? [1, 1] : [0, 1]
  );

  const yGiant = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? ["0%", "0%"] : ["4%", "-10%"]
  );
  const yBg = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, 60]
  );
  const yPrimary = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, -40]
  );
  const ySupportA = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, 48]
  );
  const ySupportB = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, -28]
  );
  const yHorizon = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [20, -50]
  );
  const ringRotate = useTransform(
    scrollYProgress,
    [0, 1],
    motionOff ? [0, 0] : [0, -28]
  );
  const underlineDraw = useTransform(
    scrollYProgress,
    [0.18, 0.38],
    reduceMotion ? [1, 1] : [0.2, 1]
  );
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.28) setStage("purpose");
    else if (latest < 0.45) setStage("mission");
    else if (latest < 0.72) setStage("goals");
    else setStage("future");

    if (latest < 0.5) setActiveGoal(0);
    else if (latest < 0.6) setActiveGoal(1);
    else if (latest < 0.72) setActiveGoal(2);
  });

  const stageMeta: Record<
    Stage,
    { index: string; label: string; hint: string }
  > = {
    purpose: { index: "00", label: "Purpose", hint: "Why we exist" },
    mission: { index: "01", label: "Mission", hint: "The mandate" },
    goals: { index: "02", label: "Goals", hint: "Checkpoints" },
    future: { index: "03", label: "Future", hint: "Where we go" },
  };

  return (
    <section
      ref={sectionRef}
      id="company-mission"
      aria-labelledby="company-mission-heading"
      className="noise-overlay relative overflow-hidden bg-gradient-to-b from-paper-deep via-paper to-paper px-5 py-24 sm:px-8 lg:py-36"
    >
      {/* Atmosphere — continues Hero paper language */}
      <div className="mesh-gradient pointer-events-none absolute inset-0 -z-30 opacity-[0.35]" />
      <div
        className="pointer-events-none absolute -left-[10%] top-[18%] h-[380px] w-[380px] rounded-full bg-marigold/10 blur-[110px] -z-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[8%] right-[-8%] h-[460px] w-[460px] rounded-full bg-indigo/[0.07] blur-[120px] -z-20"
        aria-hidden
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035] select-none"
        aria-hidden
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="missionDotGrid"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1" fill="#12294D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#missionDotGrid)" />
        </svg>
      </div>

      {/* Fine line grid — left corridor (path canvas) */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-[38%] -z-20 opacity-[0.028] select-none"
        aria-hidden
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="missionLineGrid"
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
          <rect width="100%" height="100%" fill="url(#missionLineGrid)" />
        </svg>
      </div>

      {/* Giant outlined Hindi — दिशा (direction) */}
      <motion.div
        style={{ y: yGiant }}
        className="pointer-events-none absolute left-[-1%] top-[8%] z-0 select-none font-display text-[20vw] font-black leading-none tracking-[-0.04em] text-transparent opacity-[0.05] lg:top-[6%] lg:text-[16vw]"
        aria-hidden
      >
        <span style={{ WebkitTextStroke: "1.75px var(--color-ink)" }}>
          दिशा
        </span>
      </motion.div>

      {/* Concentric rings — shared Hero vocabulary */}
      <motion.div
        style={{ y: yBg, rotate: ringRotate }}
        className="pointer-events-none absolute -left-32 top-[12%] -z-10 h-[360px] w-[360px] text-indigo opacity-[0.12] sm:h-[440px] sm:w-[440px] lg:left-[-60px] lg:top-[10%]"
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
        className="pointer-events-none absolute left-[5%] top-[16%] z-10 hidden font-mono text-lg font-bold text-indigo/25 lg:block"
        aria-hidden
      >
        +
      </span>
      <span
        className="pointer-events-none absolute right-[12%] top-[42%] z-10 hidden font-mono text-xl font-bold text-indigo/20 lg:block"
        aria-hidden
      >
        ×
      </span>
      <span
        className="pointer-events-none absolute bottom-[34%] left-[22%] z-10 hidden font-mono text-sm font-bold text-marigold/40 lg:block"
        aria-hidden
      >
        ✦
      </span>

      {/* Measurement ticks */}
      <div
        className="pointer-events-none absolute left-3 top-[24%] hidden flex-col gap-2 lg:flex"
        aria-hidden
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`h-px bg-slate/25 ${i % 2 === 0 ? "w-4" : "w-2"}`}
          />
        ))}
      </div>

      {/* Primary desktop PATH — left corridor, purpose → future */}
      <svg
        className="pointer-events-none absolute left-[4%] top-[6%] z-[1] hidden h-[88%] w-[200px] text-marigold/55 lg:block xl:left-[6%]"
        viewBox="0 0 120 1000"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M 42 8 C 68 70, 28 140, 52 210 S 78 300, 40 380 S 22 470, 58 560 S 90 650, 48 740 S 24 820, 56 900 S 78 960, 52 990"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="6 10"
          style={{ pathLength: pathDraw, strokeDashoffset: dashOffset }}
        />
        <motion.path
          d="M 42 8 C 68 70, 28 140, 52 210 S 78 300, 40 380 S 22 470, 58 560 S 90 650, 48 740 S 24 820, 56 900 S 78 960, 52 990"
          stroke="var(--color-indigo)"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.32"
          style={{ pathLength: pathDraw }}
        />
        <circle cx="42" cy="8" r="4.5" className="fill-marigold" />
        <circle cx="52" cy="210" r="3.2" className="fill-indigo/45" />
        <circle cx="40" cy="380" r="3.2" className="fill-indigo/45" />
        <circle cx="58" cy="560" r="3.2" className="fill-indigo/45" />
        <circle cx="48" cy="740" r="3.2" className="fill-indigo/45" />
        <circle cx="52" cy="990" r="4.5" className="fill-marigold" />

        {/* Split toward Core Values */}
        <motion.path
          d="M 52 990 C 78 995, 96 992, 118 998"
          stroke="var(--color-marigold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
          style={{ pathLength: splitDraw }}
        />
        <motion.path
          d="M 52 990 C 70 1000, 88 1004, 110 1008"
          stroke="var(--color-indigo)"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeDasharray="3 5"
          opacity="0.55"
          style={{ pathLength: splitDraw }}
        />
        <motion.path
          d="M 52 990 C 62 1004, 72 1010, 90 1014"
          stroke="var(--color-ink)"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeDasharray="2 5"
          opacity="0.35"
          style={{ pathLength: splitDraw }}
        />
      </svg>

      {/* Mobile path — simplified vertical corridor */}
      <svg
        className="pointer-events-none absolute left-0 top-[8%] z-[1] h-[88%] w-16 text-marigold/35 lg:hidden"
        viewBox="0 0 64 1600"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M 28 20 C 40 120, 16 240, 32 360 S 44 520, 24 680 S 40 860, 30 1040 S 18 1220, 34 1400 S 40 1520, 28 1580"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="5 8"
          style={{ pathLength: pathDraw }}
        />
        <circle cx="28" cy="20" r="3.5" className="fill-marigold" />
        <circle cx="28" cy="1580" r="3" className="fill-indigo/40" />
      </svg>

      {/* Live stage HUD */}
      <div
        className="pointer-events-none absolute right-5 top-28 z-20 hidden lg:right-10 lg:top-32 lg:block"
        aria-hidden
      >
        <div className="rounded-lg border border-border/40 bg-paper/70 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-slate/55 shadow-card backdrop-blur-md">
          <div className="flex items-center gap-2 text-indigo">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold" />
            Path · {stageMeta[stage].index}
          </div>
          <p className="mt-1.5 font-bold text-ink">{stageMeta[stage].label}</p>
          <p className="mt-0.5 text-slate/45">{stageMeta[stage].hint}</p>
          <div className="mt-2.5 h-px w-full overflow-hidden bg-border/50">
            <motion.div
              className="h-full bg-marigold"
              style={{ width: progressWidth }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] pl-8 sm:pl-4 lg:pl-0">
        {/* Meta rail — continues Hero editorial system */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-4 lg:mb-14"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate/55"
          >
            <span className="text-indigo">About / 02</span>
            <span className="text-border">·</span>
            <span>Company Mission</span>
            <span className="text-border">·</span>
            <span className="border-b border-dashed border-marigold/50 pb-0.5 text-marigold-dark">
              Our Direction
            </span>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-slate/45"
          >
            <span>Est. 2016</span>
            <span className="text-border">·</span>
            <span>India</span>
            <span className="hidden text-border sm:inline">·</span>
            <span className="hidden sm:inline">Purpose → Impact</span>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            STATE 01 — PURPOSE + MISSION STATEMENT
           ═══════════════════════════════════════════ */}
        <div className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-12">
          {/* Image collage — purpose chapter */}
          <div className="relative mx-auto h-[440px] w-full max-w-[520px] sm:h-[520px] lg:mx-0 lg:h-[620px] lg:max-w-none">
            {/* Dominant — human purpose (arch) */}
            <motion.div
              style={{ y: yPrimary }}
              className="absolute left-[6%] top-[2%] z-20 h-[70%] w-[64%] sm:left-[8%] lg:left-[4%] lg:w-[60%]"
            >
              <TiltCard intensity={reduceMotion ? 0 : 8} className="h-full w-full">
                <div
                  className="relative h-full w-full overflow-hidden border border-border/55 bg-white p-2.5 shadow-raised sm:p-3"
                  style={{ borderRadius: "180px 180px 22px 22px" }}
                >
                  <div
                    className="relative h-full w-full overflow-hidden"
                    style={{ borderRadius: "168px 168px 14px 14px" }}
                  >
                    <Image
                      src={photos.aboutMissionPurpose}
                      alt="Indian small business owner standing with quiet resolve"
                      fill
                      sizes="(max-width: 1024px) 70vw, 360px"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-0 right-0 px-4 text-center">
                      <span className="font-handwriting text-xl font-bold text-white drop-shadow-[0_2px_6px_rgba(18,41,77,0.75)] sm:text-2xl">
                        Why we exist
                      </span>
                    </div>
                  </div>
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

            {/* Supporting — who we serve */}
            <motion.div
              style={{ y: ySupportA }}
              className="absolute right-0 top-[12%] z-30 h-[34%] w-[42%] sm:w-[40%]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-marigold/35 bg-paper-deep p-2 shadow-raised rotate-[3deg] transition-transform duration-500 hover:rotate-0">
                <div className="relative h-full w-full overflow-hidden rounded-[16px]">
                  <Image
                    src={photos.aboutMissionServe}
                    alt="Local market and small commerce in India"
                    fill
                    sizes="(max-width: 1024px) 40vw, 220px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono font-bold uppercase tracking-[0.16em] text-white/90">
                    Who we serve
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Supporting — action fragment */}
            <motion.div
              style={{ y: ySupportB }}
              className="absolute bottom-[4%] left-[2%] z-10 h-[26%] w-[38%] sm:w-[36%]"
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
                    src={photos.aboutMissionAction}
                    alt="Advisory conversation at a business help desk"
                    fill
                    sizes="(max-width: 1024px) 30vw, 180px"
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="mt-1.5 block text-center text-[8px] font-mono font-bold uppercase tracking-[0.18em] text-slate/45">
                Walk-in desk
              </span>
            </motion.div>

            {/* Orbit marker */}
            <div
              className="pointer-events-none absolute left-[2%] top-[0%] z-30"
              aria-hidden
            >
              {!reduceMotion ? (
                <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-marigold/50" />
              ) : null}
              <span className="relative block h-3.5 w-3.5 rounded-full border-2 border-white bg-marigold" />
            </div>
          </div>

          {/* Typography — mission as hero of section */}
          <div className="relative z-20 lg:pl-4 lg:pt-4">
            <p className="inline-flex items-center gap-2 border-l-2 border-marigold pl-3.5 text-xs font-bold uppercase tracking-[0.2em] text-slate">
              02 / Mission · Why we exist
            </p>

            <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-indigo sm:text-base">
              WHY
              <br />
              WE EXIST
            </p>

            <h2
              id="company-mission-heading"
              className="mt-4 font-display text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-[2.35rem] lg:text-[2.75rem]"
            >
              <span className="relative inline">
                {about.mission}
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-marigold sm:-bottom-3 sm:h-3.5"
                  viewBox="0 0 640 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <motion.path
                    d="M4 9 C 120 3, 280 12, 400 7 S 560 4, 636 8"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    style={{ pathLength: underlineDraw }}
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-6 font-handwriting text-2xl font-bold leading-snug text-indigo sm:text-3xl">
              &ldquo;{site.tagline}&rdquo;
            </p>

            <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-slate sm:text-lg">
              We started as a walk-in help desk for first-time entrepreneurs stuck
              between bank queues, portal logins, and Hindi–English form language.
              Today we remain a multi-city consultancy — still explained with
              pictures and phone calls, not jargon.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/45 pt-6 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate/50">
              <span>Purpose</span>
              <span className="text-border">→</span>
              <span>Direction</span>
              <span className="text-border">→</span>
              <span>Impact</span>
              <span className="text-border">→</span>
              <span className="text-marigold-dark">Future</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            STATE 02 — GOALS as path checkpoints
           ═══════════════════════════════════════════ */}
        <div className="relative mt-24 lg:mt-36">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4 lg:mb-16 lg:pl-[18%]">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate/50">
                Goals · Checkpoints on the path
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                What we want to{" "}
                <span className="italic text-indigo">change.</span>
              </h3>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate/70">
              Three commitments that turn the mission into daily work — not posters on a wall.
            </p>
          </div>

          <ol className="relative space-y-16 lg:space-y-24 lg:pl-[18%]">
            {goals.map((goal, idx) => {
              const isActive = activeGoal === idx || !isDesktop;
              const flip = idx % 2 === 1;

              return (
                <li
                  key={goal.id}
                  className={`relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12 ${
                    flip ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Path node marker */}
                  <div
                    className="pointer-events-none absolute -left-1 top-3 hidden lg:left-[-14%] lg:block"
                    aria-hidden
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-[11px] font-bold transition-colors duration-500 ${
                        isActive
                          ? "border-marigold bg-marigold text-ink shadow-raised"
                          : "border-border bg-paper text-slate/40"
                      }`}
                    >
                      {goal.num}
                    </div>
                  </div>

                  {/* Editorial text */}
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0.35, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-marigold-dark">
                        {goal.num} / {goal.label}
                      </span>
                      <span className="hidden h-px flex-1 bg-border/60 sm:block" />
                      <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-slate/35 sm:inline">
                        {goal.coord}
                      </span>
                    </div>
                    <h4 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.75rem]">
                      {goal.title}
                    </h4>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-slate">
                      {goal.text}
                    </p>
                    <span
                      className="mt-4 inline-block font-mono text-lg font-bold text-indigo/20 transition-transform duration-300 hover:translate-x-1"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </motion.div>

                  {/* Art-directed image — not a card grid */}
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0.4, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative h-[220px] w-full sm:h-[260px] lg:h-[300px] ${
                      flip ? "lg:mr-auto lg:max-w-[420px]" : "lg:ml-auto lg:max-w-[420px]"
                    }`}
                  >
                    <div
                      className={`relative h-full w-full overflow-hidden border border-border/50 bg-white p-2 shadow-raised transition-transform duration-500 hover:scale-[1.015] ${
                        idx === 0
                          ? "rounded-[28px_28px_18px_18px]"
                          : idx === 1
                            ? "rounded-[18px] rotate-[-1.5deg] hover:rotate-0"
                            : "rounded-[999px_999px_20px_20px]"
                      }`}
                    >
                      <div
                        className={`relative h-full w-full overflow-hidden ${
                          idx === 0
                            ? "rounded-[22px_22px_12px_12px]"
                            : idx === 1
                              ? "rounded-[12px]"
                              : "rounded-[999px_999px_14px_14px]"
                        }`}
                      >
                        <Image
                          src={goal.image}
                          alt={goal.alt}
                          fill
                          sizes="(max-width: 1024px) 90vw, 420px"
                          className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                      </div>
                      <span
                        className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-marigold/60"
                        aria-hidden
                      />
                      <span
                        className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-indigo/35"
                        aria-hidden
                      />
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ═══════════════════════════════════════════
            STATE 03 — FUTURE / HORIZON
           ═══════════════════════════════════════════ */}
        <div className="relative mt-28 lg:mt-40 lg:pl-[12%]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 border-l-2 border-indigo pl-3.5 text-xs font-bold uppercase tracking-[0.2em] text-slate">
                03 / Future · Where we are going
              </p>

              <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate/45">
                Horizon · Vision
              </p>

              <h3 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.6rem]">
                {about.vision}
              </h3>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate">
                The path does not end at a filing. It ends when a founder can open,
                run, and grow without paperwork becoming the reason they stop.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate/50">
                <span className="text-indigo">Today</span>
                <span className="text-border">→</span>
                <span>Progress</span>
                <span className="text-border">→</span>
                <span className="border-b border-dashed border-marigold/50 pb-0.5 text-marigold-dark">
                  Tomorrow
                </span>
              </div>
            </div>

            {/* Horizon image — largest open visual moment */}
            <motion.div style={{ y: yHorizon }} className="relative">
              <div className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[32px_32px_20px_20px] border border-border/50 bg-white p-3 shadow-raised sm:aspect-[5/6] lg:ml-auto">
                <div className="relative h-full w-full overflow-hidden rounded-[24px_24px_14px_14px]">
                  <Image
                    src={photos.aboutMissionHorizon}
                    alt="Planning the next chapter of business growth"
                    fill
                    sizes="(max-width: 1024px) 90vw, 440px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-0 right-0 px-5 text-center">
                    <span className="font-handwriting text-2xl font-bold text-white drop-shadow-[0_2px_6px_rgba(18,41,77,0.75)] sm:text-3xl">
                      What&apos;s next
                    </span>
                  </div>
                </div>
                <span
                  className="pointer-events-none absolute left-2 top-2 h-5 w-5 border-l-2 border-t-2 border-marigold/70"
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute bottom-2 right-2 h-5 w-5 border-b-2 border-r-2 border-indigo/40"
                  aria-hidden
                />
              </div>
              {/* Floating annotation */}
              <div className="absolute -left-3 top-[18%] hidden rounded-md border border-border/50 bg-paper/90 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-slate/55 shadow-card backdrop-blur-sm sm:block lg:-left-8">
                Dest. · Bharat
              </div>
            </motion.div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            HANDOFF → CORE VALUES
            Path splits: what we achieve → how we choose to
           ═══════════════════════════════════════════ */}
        <div className="relative mt-24 border-t border-border/40 pt-10 sm:mt-28 lg:mt-32">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-lg">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate/45">
                02 → 03 · Mission opens into values
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                What we want to achieve{" "}
                <span className="text-slate/40">→</span>{" "}
                <span className="italic text-indigo">how we choose to.</span>
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate/70">
                The path splits into four commitments — clear speech, proof, one desk,
                and respect for small scale.
              </p>
            </div>

            <a
              href="#core-values"
              className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo"
            >
              <span>Continue to values</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/80 shadow-card transition-transform duration-300 group-hover:translate-y-1">
                <ArrowDown
                  size={14}
                  className="text-marigold-dark"
                  aria-hidden
                />
              </span>
            </a>
          </div>

          {/* Decorative split lines — visual bridge into Core Values */}
          <svg
            className="pointer-events-none mt-8 hidden h-16 w-full max-w-xl text-marigold/45 lg:block"
            viewBox="0 0 480 64"
            fill="none"
            aria-hidden
          >
            <motion.path
              d="M 20 8 C 80 40, 120 20, 180 36"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeDasharray="4 6"
              style={{ pathLength: splitDraw }}
            />
            <motion.path
              d="M 20 8 C 100 28, 160 48, 240 52"
              stroke="var(--color-indigo)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="3 6"
              opacity="0.6"
              style={{ pathLength: splitDraw }}
            />
            <motion.path
              d="M 20 8 C 70 50, 140 56, 200 60"
              stroke="var(--color-ink)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="2 5"
              opacity="0.35"
              style={{ pathLength: splitDraw }}
            />
            <motion.path
              d="M 20 8 C 60 18, 90 10, 140 22"
              stroke="var(--color-marigold-dark)"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeDasharray="3 5"
              opacity="0.7"
              style={{ pathLength: splitDraw }}
            />
            <circle cx="20" cy="8" r="3.5" className="fill-marigold" />
            <circle cx="180" cy="36" r="2.5" className="fill-indigo/50" />
            <circle cx="240" cy="52" r="2.5" className="fill-indigo/40" />
            <circle cx="200" cy="60" r="2.5" className="fill-ink/30" />
            <circle cx="140" cy="22" r="2.5" className="fill-marigold/60" />
          </svg>
        </div>
      </div>

      {/* Soft continuity into Core Values */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-paper-deep/40"
        aria-hidden
      />
    </section>
  );
}
