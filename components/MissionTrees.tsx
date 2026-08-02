"use client";

import {
  useCallback,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BadgePercent,
  Banknote,
  Briefcase,
  Building2,
  ClipboardCheck,
  Eye,
  FileText,
  Flag,
  GraduationCap,
  HandCoins,
  IndianRupee,
  Landmark,
  Leaf,
  ListChecks,
  Route,
  Sprout,
  Store,
  Timer,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { missionTrees } from "@/lib/content";

type Accent = (typeof missionTrees.trees)[number]["accent"];
type Tree = (typeof missionTrees.trees)[number];

const trees = missionTrees.trees;
const CHAPTER_COUNT = trees.length;
/** Scroll distance per chapter — user must scroll through all four */
const VH_PER_CHAPTER = 90;

const groupIcons: Record<string, LucideIcon> = {
  "core-mission": Flag,
  funding: IndianRupee,
  process: ListChecks,
  benefits: BadgeCheck,
};

const itemIcons: Record<string, LucideIcon> = {
  "Atmanirbhar Bharat": Flag,
  "MSME Empowerment": Store,
  "Nation Building": Landmark,
  "Viksit Bharat Vision": Eye,
  "Government Grants": Landmark,
  "Seed Fund Support": Sprout,
  "Business Loan Assistance": HandCoins,
  "Subsidy Consulting": BadgePercent,
  "Project Report Preparation": FileText,
  "Scheme Eligibility Assessment": ClipboardCheck,
  "Expert Guidance": GraduationCap,
  "End-to-End Support": Route,
  "Documentation Assistance": FileText,
  "Dedicated Consultants": UserCheck,
  "Transparent Workflow": Eye,
  "Timely Execution": Timer,
  "Professional Credibility": BadgeCheck,
  "Economic Growth Partner": TrendingUp,
  "Modern Corporate Tone": Briefcase,
  "Sustainable Business Building": Leaf,
};

const accent: Record<
  Accent,
  {
    hex: string;
    glow: string;
    soft: string;
    solid: string;
    ink: string;
    bar: string;
  }
> = {
  marigold: {
    hex: "#F5A623",
    glow: "rgba(245,166,35,0.4)",
    soft: "rgba(245,166,35,0.12)",
    solid: "bg-marigold text-ink",
    ink: "text-marigold-dark",
    bar: "bg-marigold",
  },
  success: {
    hex: "#1D8348",
    glow: "rgba(29,131,72,0.35)",
    soft: "rgba(29,131,72,0.1)",
    solid: "bg-success text-white",
    ink: "text-success",
    bar: "bg-success",
  },
  indigo: {
    hex: "#1E3E72",
    glow: "rgba(30,62,114,0.35)",
    soft: "rgba(30,62,114,0.1)",
    solid: "bg-indigo text-paper",
    ink: "text-indigo",
    bar: "bg-indigo",
  },
  ink: {
    hex: "#12294D",
    glow: "rgba(18,41,77,0.3)",
    soft: "rgba(18,41,77,0.08)",
    solid: "bg-ink text-paper",
    ink: "text-ink",
    bar: "bg-ink",
  },
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function StampItem({
  label,
  index,
  accentKey,
  reduce,
}: {
  label: string;
  index: number;
  accentKey: Accent;
  reduce: boolean | null;
}) {
  const Icon = itemIcons[label] ?? Banknote;
  const a = accent[accentKey];
  const [ripple, setRipple] = useState({ x: 0, y: 0, n: 0 });
  const ref = useRef<HTMLLIElement>(null);

  function onPointerDown(e: ReactPointerEvent<HTMLLIElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      n: ripple.n + 1,
    });
  }

  return (
    <motion.li
      ref={ref}
      onPointerDown={onPointerDown}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 340,
              damping: 24,
              delay: 0.05 + index * 0.045,
            }
      }
      whileTap={reduce ? undefined : { scale: 0.985 }}
      className="relative isolate min-h-11 overflow-hidden rounded-[14px] border border-border/70 bg-white px-3 py-2.5 sm:min-h-12 sm:px-3.5 sm:py-3"
    >
      <AnimatePresence>
        {ripple.n > 0 ? (
          <motion.span
            key={ripple.n}
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 10,
              height: 10,
              marginLeft: -5,
              marginTop: -5,
              background: a.glow,
            }}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 22, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : null}
      </AnimatePresence>

      <span className="relative z-[1] flex items-center gap-2.5 sm:gap-3">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] sm:h-9 sm:w-9"
          style={{ background: a.soft, color: a.hex }}
          aria-hidden
        >
          <Icon size={15} strokeWidth={2.15} />
        </span>
        <span className="text-[13px] font-semibold leading-snug text-ink sm:text-[14px]">
          {label}
        </span>
      </span>
    </motion.li>
  );
}

function ChapterCard({
  tree,
  index,
  reduce,
}: {
  tree: Tree;
  index: number;
  reduce: boolean | null;
}) {
  const a = accent[tree.accent];
  const Icon = groupIcons[tree.id] ?? Building2;

  return (
    <article
      className="overflow-hidden rounded-[22px] border border-border/80 bg-white"
      style={{
        boxShadow: `0 18px 40px -20px rgba(18,41,77,0.28), 0 0 0 1px ${a.hex}18`,
      }}
    >
      <div className={`h-1 w-full ${a.bar}`} aria-hidden />

      <div className="px-4 pt-4 pb-4 sm:px-6 sm:pt-5 sm:pb-5 lg:px-7">
        <div className="flex items-start gap-3 sm:gap-3.5">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] sm:h-12 sm:w-12 ${a.solid}`}
            style={{ boxShadow: `0 10px 24px -10px ${a.glow}` }}
          >
            <Icon size={20} strokeWidth={2.1} />
          </span>
          <div className="min-w-0 flex-1">
            <p
              className={`text-[11px] font-bold tracking-[0.16em] uppercase ${a.ink}`}
            >
              Chapter {String(index + 1).padStart(2, "0")} of {CHAPTER_COUNT}
            </p>
            <h3 className="mt-0.5 font-display text-[20px] font-semibold leading-tight text-ink sm:text-[26px] lg:text-[30px]">
              {tree.root}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-slate sm:text-[15px]">
              {tree.blurb}
            </p>
          </div>
        </div>

        <ul className="mt-4 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-2">
          {tree.children.map((leaf, i) => (
            <StampItem
              key={leaf}
              label={leaf}
              index={i}
              accentKey={tree.accent}
              reduce={reduce}
            />
          ))}
        </ul>
      </div>
    </article>
  );
}

function ParallaxOrbs({
  progress,
  activeAccent,
}: {
  progress: MotionValue<number>;
  activeAccent: Accent;
}) {
  const a = accent[activeAccent];
  const y1 = useTransform(progress, [0, 1], [0, -80]);
  const y2 = useTransform(progress, [0, 1], [20, 70]);
  const y3 = useTransform(progress, [0, 1], [-10, 40]);
  const x2 = useTransform(progress, [0, 1], [0, -30]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full blur-3xl"
        style={{
          y: y1,
          background: `radial-gradient(circle, ${a.glow}, transparent 70%)`,
        }}
      />
      <motion.div
        className="absolute top-[35%] right-[-15%] h-80 w-80 rounded-full blur-3xl"
        style={{
          y: y2,
          x: x2,
          background: "radial-gradient(circle, rgba(30,62,114,0.2), transparent 70%)",
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[20%] h-52 w-52 rounded-full blur-2xl"
        style={{
          y: y3,
          background: "radial-gradient(circle, rgba(29,131,72,0.16), transparent 70%)",
        }}
      />
    </div>
  );
}

function ProgressRail({
  progress,
  activeIndex,
  onSelect,
}: {
  progress: MotionValue<number>;
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const scaleX = useSpring(progress, { stiffness: 120, damping: 28 });

  return (
    <div className="w-full">
      <div className="relative h-1 overflow-hidden rounded-full bg-ink/10">
        <motion.div
          className="absolute inset-y-0 left-0 origin-left rounded-full"
          style={{
            scaleX,
            background: accent[trees[activeIndex].accent].hex,
          }}
        />
      </div>
      <div className="mt-3 flex items-center justify-center gap-1 sm:justify-between">
        {trees.map((tree, i) => {
          const selected = i === activeIndex;
          const a = accent[tree.accent];
          return (
            <button
              key={tree.id}
              type="button"
              onClick={() => onSelect(i)}
              className="flex min-h-10 min-w-[4.5rem] flex-col items-center justify-center gap-0.5 rounded-[12px] px-2 py-1.5 sm:min-w-0 sm:flex-1 sm:px-1"
              style={{
                background: selected ? a.soft : "transparent",
              }}
              aria-label={tree.root}
              aria-current={selected ? "step" : undefined}
            >
              <span
                className="text-[10px] font-bold tracking-wide"
                style={{ color: selected ? a.hex : "#5B6472" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`max-w-full truncate text-[10px] font-semibold sm:text-[11px] ${
                  selected ? a.ink : "text-slate"
                }`}
              >
                {tree.root.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Flat fallback when prefers-reduced-motion — still shows all chapters in order */
function ReducedStack() {
  return (
    <section
      id={missionTrees.id}
      aria-labelledby="mission-trees-heading"
      className="relative px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[640px] lg:max-w-[900px]">
        <p className="text-[12px] font-semibold tracking-[0.16em] text-slate uppercase">
          {missionTrees.eyebrow}
        </p>
        <h2
          id="mission-trees-heading"
          className="mt-2 font-display text-[26px] font-semibold text-ink lg:text-[36px]"
        >
          {missionTrees.heading}
        </h2>
        <p className="mt-3 text-[15px] text-slate lg:text-base">{missionTrees.sub}</p>

        <div className="mt-8 space-y-6">
          {trees.map((tree, i) => (
            <ChapterCard key={tree.id} tree={tree} index={i} reduce />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MissionTrees() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const jumping = useRef(false);
  const dragX = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const chapterRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, CHAPTER_COUNT - 1],
  );

  const chapterLocal = useTransform(chapterRaw, (v) => v - Math.floor(v + 0.0001));
  const cardY = useTransform(chapterLocal, [0, 0.5, 1], [22, 0, -22]);
  const cardScale = useTransform(chapterLocal, [0, 0.5, 1], [0.98, 1, 0.98]);
  const smoothY = useSpring(cardY, { stiffness: 140, damping: 28 });
  const smoothScale = useSpring(cardScale, { stiffness: 140, damping: 28 });

  useMotionValueEvent(chapterRaw, "change", (v) => {
    if (jumping.current) return;
    const next = clamp(Math.round(v), 0, CHAPTER_COUNT - 1);
    setActiveIndex((prev) => {
      if (next === prev) return prev;
      setDirection(next > prev ? 1 : -1);
      return next;
    });
  });

  const scrollToChapter = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = clamp(index, 0, CHAPTER_COUNT - 1);
    const rect = track.getBoundingClientRect();
    const trackTop = window.scrollY + rect.top;
    const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
    const target =
      trackTop + (scrollable * next) / Math.max(CHAPTER_COUNT - 1, 1);

    jumping.current = true;
    setDirection(next > activeIndex ? 1 : -1);
    setActiveIndex(next);
    window.scrollTo({ top: target, behavior: "smooth" });
    window.setTimeout(() => {
      jumping.current = false;
    }, 800);
  }, [activeIndex]);

  if (reduce) return <ReducedStack />;

  const active = trees[activeIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir >= 0 ? 48 : -48,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir >= 0 ? -36 : 36,
      opacity: 0,
    }),
  };

  return (
    <section
      id={missionTrees.id}
      aria-labelledby="mission-trees-heading"
      className="relative"
    >
      <div
        ref={trackRef}
        className="relative"
        style={{ height: `${CHAPTER_COUNT * VH_PER_CHAPTER}vh` }}
      >
        <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden px-4 pt-[max(4.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 lg:px-8">
          <ParallaxOrbs progress={scrollYProgress} activeAccent={active.accent} />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[420px] flex-col lg:max-w-[1080px]">
            {/* Header */}
            <header className="shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 lg:max-w-2xl">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-slate uppercase sm:text-[12px]">
                    {missionTrees.eyebrow}
                  </p>
                  <h2
                    id="mission-trees-heading"
                    className="mt-1 font-display text-[22px] font-semibold leading-[1.15] text-ink sm:text-[28px] lg:text-[40px]"
                  >
                    {missionTrees.heading}
                  </h2>
                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-slate sm:text-[14px] lg:line-clamp-none lg:text-base">
                    {missionTrees.sub}
                  </p>
                </div>
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-white text-[12px] font-bold text-ink shadow-card"
                  aria-live="polite"
                >
                  {activeIndex + 1}/{CHAPTER_COUNT}
                </div>
              </div>
            </header>

            <div className="mt-3 flex min-h-0 flex-1 flex-col lg:mt-5 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
              {/* Desktop nav */}
              <aside className="relative z-10 hidden lg:flex lg:flex-col lg:justify-center lg:gap-2">
                {trees.map((tree, i) => {
                  const selected = i === activeIndex;
                  const ta = accent[tree.accent];
                  const Icon = groupIcons[tree.id] ?? Building2;
                  return (
                    <button
                      key={tree.id}
                      type="button"
                      onClick={() => scrollToChapter(i)}
                      className="flex min-h-14 items-center gap-3 rounded-[16px] border px-3.5 py-3 text-left"
                      style={{
                        borderColor: selected ? ta.hex : "var(--color-border)",
                        background: selected
                          ? `linear-gradient(90deg, ${ta.soft}, #fff)`
                          : "#fff",
                        boxShadow: selected
                          ? `0 10px 24px -14px ${ta.glow}`
                          : "none",
                      }}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${
                          selected ? ta.solid : "bg-paper-deep text-slate"
                        }`}
                      >
                        <Icon size={18} strokeWidth={2.1} />
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block text-[10px] font-bold tracking-[0.14em] uppercase ${
                            selected ? ta.ink : "text-slate"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="block truncate text-[13px] font-semibold text-ink">
                          {tree.root}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </aside>

              {/* Parallax card stage */}
              <div className="relative flex min-h-0 flex-1 flex-col justify-center">
                <motion.div
                  className="w-full"
                  style={{ y: smoothY, scale: smoothScale }}
                >
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={active.id}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "spring", stiffness: 280, damping: 30 }}
                      style={{ x: dragX }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.14}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -64 || info.velocity.x < -350)
                          scrollToChapter(activeIndex + 1);
                        else if (info.offset.x > 64 || info.velocity.x > 350)
                          scrollToChapter(activeIndex - 1);
                        dragX.set(0);
                      }}
                    >
                      <ChapterCard
                        tree={active}
                        index={activeIndex}
                        reduce={false}
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Scroll progress + chapter jumps — centered on mobile */}
            <div className="relative z-10 mx-auto mt-auto w-full max-w-[360px] shrink-0 pt-3 pb-1 sm:max-w-none lg:mx-0 lg:max-w-none">
              <ProgressRail
                progress={scrollYProgress}
                activeIndex={activeIndex}
                onSelect={scrollToChapter}
              />
              <p className="mt-2 text-center text-[11px] text-slate/75 lg:text-left">
                Keep scrolling — all {CHAPTER_COUNT} chapters unlock as you go
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
