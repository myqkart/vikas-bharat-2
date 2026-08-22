"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
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
  Leaf,
  ListChecks,
  Route,
  Sprout,
  Store,
  Timer,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { missionTrees, site } from "@/lib/content";

type Accent = (typeof missionTrees.trees)[number]["accent"];
type Tree = (typeof missionTrees.trees)[number];

const trees = missionTrees.trees;
const CHAPTER_COUNT = trees.length;
const VH_PER_CHAPTER = 95;
const CX = 500;
const CY = 500;
const R_SEAL = 78;
const R_INNER = 148;
const R_TOKENS = 265;
const R_MANDATE = 372;
const R_OUTER = 445;

const groupIcons: Record<string, LucideIcon> = {
  "core-mission": Flag,
  funding: IndianRupee,
  process: ListChecks,
  benefits: BadgeCheck,
};

const itemIcons: Record<string, LucideIcon> = {
  "Atmanirbhar Bharat": Flag,
  "MSME Empowerment": Store,
  "Nation Building": Building2,
  "Viksit Bharat Vision": Eye,
  "Government Grants": Banknote,
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
  { hex: string; glow: string; soft: string; wash: string; ink: string }
> = {
  marigold: {
    hex: "#F5A623",
    glow: "rgba(245,166,35,0.45)",
    soft: "rgba(245,166,35,0.14)",
    wash: "rgba(245,166,35,0.09)",
    ink: "#B8740A",
  },
  success: {
    hex: "#1D8348",
    glow: "rgba(29,131,72,0.4)",
    soft: "rgba(29,131,72,0.12)",
    wash: "rgba(29,131,72,0.08)",
    ink: "#146338",
  },
  indigo: {
    hex: "#1E3E72",
    glow: "rgba(30,62,114,0.4)",
    soft: "rgba(30,62,114,0.12)",
    wash: "rgba(30,62,114,0.08)",
    ink: "#1E3E72",
  },
  ink: {
    hex: "#12294D",
    glow: "rgba(18,41,77,0.35)",
    soft: "rgba(18,41,77,0.1)",
    wash: "rgba(18,41,77,0.07)",
    ink: "#12294D",
  },
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function polar(angleDeg: number, r: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function arcPath(r: number, startDeg: number, endDeg: number) {
  const s = polar(startDeg, r);
  const e = polar(endDeg, r);
  const delta = ((endDeg - startDeg) % 360 + 360) % 360;
  const large = delta > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

function tokenAngle(index: number, total: number) {
  const span = Math.min(150, 28 * total);
  const start = -span / 2;
  const step = total > 1 ? span / (total - 1) : 0;
  return start + index * step;
}

/** Reduced-motion: ink dossier — discovery-shaped, never a timeline */
function InkDossier() {
  return (
    <section
      id={missionTrees.id}
      aria-labelledby="mission-trees-heading"
      className="relative px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[720px]">
        <p className="text-[12px] font-semibold tracking-[0.18em] text-slate uppercase">
          {missionTrees.eyebrow}
        </p>
        <h2
          id="mission-trees-heading"
          className="mt-2 font-display text-[26px] font-semibold text-ink lg:text-[36px]"
        >
          {missionTrees.heading}
        </h2>
        <p className="mt-3 text-[15px] text-slate lg:text-base">{missionTrees.sub}</p>

        <div className="mt-10 space-y-10">
          {trees.map((tree, i) => {
            const a = accent[tree.accent];
            const Icon = groupIcons[tree.id] ?? Building2;
            return (
              <div key={tree.id} className="relative pl-6">
                <span
                  aria-hidden
                  className="absolute top-1 left-0 h-full w-px"
                  style={{
                    background: `linear-gradient(${a.hex}, transparent)`,
                  }}
                />
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{ background: a.hex }}
                  >
                    <Icon size={18} strokeWidth={2.1} />
                  </span>
                  <div>
                    <p
                      className="text-[11px] font-bold tracking-[0.16em] uppercase"
                      style={{ color: a.ink }}
                    >
                      Mandate {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-[22px] font-semibold text-ink">
                      {tree.root}
                    </h3>
                  </div>
                </div>
                <p className="mt-2 text-[14px] text-slate">{tree.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {tree.children.map((leaf) => (
                    <li
                      key={leaf}
                      className="text-[13px] font-semibold text-ink/80"
                    >
                      <span style={{ color: a.hex }}>▸ </span>
                      {leaf}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Atmosphere({
  progress,
  activeAccent,
}: {
  progress: MotionValue<number>;
  activeAccent: Accent;
}) {
  const a = accent[activeAccent];
  const y1 = useTransform(progress, [0, 1], [0, -60]);
  const y2 = useTransform(progress, [0, 1], [10, 50]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 transition-[background] duration-700"
        style={{ background: a.wash }}
      />
      <motion.div
        className="absolute -top-32 left-[-12%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          y: y1,
          background: `radial-gradient(circle, ${a.glow}, transparent 68%)`,
        }}
      />
      <motion.div
        className="absolute right-[-18%] bottom-[-10%] h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{
          y: y2,
          background:
            "radial-gradient(circle, rgba(30,62,114,0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}



function MandateArc({
  tree,
  index,
  selected,
  systemRot,
  onSelect,
}: {
  tree: Tree;
  index: number;
  selected: boolean;
  systemRot: MotionValue<number>;
  onSelect: () => void;
}) {
  const a = accent[tree.accent];
  const Icon = groupIcons[tree.id] ?? Building2;
  const home = index * 90;
  const half = 28;

  const pathD = useTransform(systemRot, (rot) =>
    arcPath(R_MANDATE, home - half - rot, home + half - rot),
  );
  const midX = useTransform(
    systemRot,
    (rot) => polar(home - rot, R_MANDATE).x,
  );
  const midY = useTransform(
    systemRot,
    (rot) => polar(home - rot, R_MANDATE).y,
  );

  return (
    <g>
      <motion.path
        d={pathD}
        fill="none"
        stroke={selected ? a.hex : "rgba(18,41,77,0.16)"}
        strokeWidth={selected ? 14 : 9}
        strokeLinecap="round"
        style={{
          filter: selected ? `drop-shadow(0 0 14px ${a.glow})` : undefined,
        }}
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke="transparent"
        strokeWidth={40}
        strokeLinecap="round"
        className="cursor-pointer"
        onClick={onSelect}
        role="button"
        tabIndex={0}
        aria-label={`${tree.root}: ${tree.blurb}`}
        aria-pressed={selected}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect();
          }
        }}
      />
      <motion.g style={{ x: midX, y: midY }}>
        <g transform="translate(-28 -28)">
          <motion.circle
            cx={28}
            cy={28}
            r={26}
            fill={selected ? a.hex : "#FBF6EC"}
            stroke={selected ? a.hex : "rgba(18,41,77,0.2)"}
            strokeWidth={1.5}
            className="cursor-pointer"
            onClick={onSelect}
            animate={{ scale: selected ? 1 : 0.9 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            style={{
              transformOrigin: "28px 28px",
              filter: selected
                ? `drop-shadow(0 10px 22px ${a.glow})`
                : undefined,
            }}
          />
          <foreignObject
            x={16}
            y={16}
            width={24}
            height={24}
            className="pointer-events-none"
          >
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ color: selected ? "#FBF6EC" : a.hex }}
            >
              <Icon size={15} strokeWidth={2.15} />
            </div>
          </foreignObject>
        </g>
        {/* Upright label — only when near the lock meridian */}
        {selected ? (
          <foreignObject
            x={-100}
            y={34}
            width={200}
            height={36}
            className="pointer-events-none"
          >
            <p
              className="text-center text-[15px] font-extrabold tracking-[0.02em] leading-tight"
              style={{ color: a.ink }}
            >
              {tree.root}
            </p>
          </foreignObject>
        ) : null}
      </motion.g>
    </g>
  );
}

function CenterSeal({
  activeAccent,
  stamped,
  glowId,
}: {
  activeAccent: Accent;
  stamped: number;
  glowId: string;
}) {
  const a = accent[activeAccent];

  return (
    <g>
      <circle cx={CX} cy={CY} r={R_OUTER + 24} fill={`url(#${glowId})`} />
      <circle
        cx={CX}
        cy={CY}
        r={R_SEAL + 12}
        fill="none"
        stroke={a.hex}
        strokeWidth={1}
        strokeOpacity={0.32}
        strokeDasharray="3 7"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`0 ${CX} ${CY}`}
          to={`360 ${CX} ${CY}`}
          dur="52s"
          repeatCount="indefinite"
        />
      </circle>
      <motion.circle
        cx={CX}
        cy={CY}
        r={R_SEAL}
        fill="#FBF6EC"
        stroke={a.hex}
        strokeWidth={2.2}
        animate={{ filter: `drop-shadow(0 14px 30px ${a.glow})` }}
        transition={{ duration: 0.55 }}
      />
      <circle
        cx={CX}
        cy={CY}
        r={R_SEAL - 11}
        fill="none"
        stroke={a.hex}
        strokeWidth={0.75}
        strokeOpacity={0.4}
      />
      <AnimatePresence mode="wait">
        <motion.g
          key={stamped}
          initial={{ scale: 0.78, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.06, opacity: 0 }}
          transition={{ type: "spring", stiffness: 360, damping: 22 }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          <foreignObject x={CX - 40} y={CY - 40} width={80} height={80}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center shadow-card ring-1 ring-border/20">
              <Image 
                src={site.logoMark} 
                alt={site.companyName} 
                fill 
                sizes="80px" 
                className="object-contain p-1.5"
                priority 
              />
            </div>
          </foreignObject>
        </motion.g>
      </AnimatePresence>
      <AnimatePresence>
        <motion.circle
          key={`flash-${stamped}`}
          cx={CX}
          cy={CY}
          r={R_SEAL}
          fill="none"
          stroke={a.hex}
          strokeWidth={2.5}
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />
      </AnimatePresence>
    </g>
  );
}

export default function MissionTrees() {
  const reduce = useReducedMotion();
  const glowId = useId().replace(/:/g, "");
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stamped, setStamped] = useState(0);
  const [focusedLeaf, setFocusedLeaf] = useState<string | null>(
    trees[0]?.children[0] ?? null,
  );
  const jumping = useRef(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltX = useSpring(pointerY, { stiffness: 110, damping: 22 });
  const tiltY = useSpring(pointerX, { stiffness: 110, damping: 22 });
  const rotateX = useTransform(tiltX, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(tiltY, [-0.5, 0.5], [-9, 9]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const rawAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0, (CHAPTER_COUNT - 1) * 90],
  );
  const systemRot = useSpring(rawAngle, {
    stiffness: 68,
    damping: 24,
    mass: 0.9,
  });

  const chapterRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, CHAPTER_COUNT - 1],
  );

  useMotionValueEvent(chapterRaw, "change", (v) => {
    if (jumping.current) return;
    const next = clamp(Math.round(v), 0, CHAPTER_COUNT - 1);
    
    const children = trees[next]?.children ?? [];
    let targetLeaf: string | null = null;
    if (children.length > 0) {
      const minV = next === 0 ? 0 : next - 0.5;
      const maxV = next === CHAPTER_COUNT - 1 ? CHAPTER_COUNT - 1 : next + 0.5;
      const p = (v - minV) / (maxV - minV || 1);
      const idx = clamp(Math.floor(p * children.length), 0, children.length - 1);
      targetLeaf = children[idx];
    }
    setFocusedLeaf(targetLeaf);

    setActiveIndex((prev) => {
      if (next === prev) return prev;
      setStamped((s) => s + 1);
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
    setActiveIndex(next);
    setStamped((s) => s + 1);
    setFocusedLeaf(trees[next]?.children[0] ?? null);
    window.scrollTo({ top: target, behavior: "smooth" });
    window.setTimeout(() => {
      jumping.current = false;
    }, 900);
  }, []);

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
      pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [pointerX, pointerY],
  );

  const onPointerLeave = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  const transform = useMotionTemplate`perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  // Prefer fine pointer for tilt; touch scrolls instead
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => {
      if (!mq.matches) {
        pointerX.set(0);
        pointerY.set(0);
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [pointerX, pointerY]);

  if (reduce) return <InkDossier />;

  const active = trees[activeIndex];
  const a = accent[active.accent];

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
        <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden px-3 pt-[max(1.1rem,env(safe-area-inset-top))] pb-[max(6.25rem,env(safe-area-inset-bottom))] sm:px-6 md:pt-[max(5rem,env(safe-area-inset-top))] md:pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:px-8">
          <Atmosphere
            progress={scrollYProgress}
            activeAccent={active.accent}
          />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1120px] flex-col">
            <header className="shrink-0 pt-2 text-center lg:pt-0 lg:text-left">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-slate uppercase sm:text-[12px]">
                {missionTrees.eyebrow}
              </p>
              <h2
                id="mission-trees-heading"
                className="mt-2.5 font-display text-[22px] font-semibold leading-[1.12] text-ink sm:text-[30px] lg:text-[42px]"
              >
                {missionTrees.heading}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[13px] leading-snug text-slate sm:text-[14px] lg:mx-0 lg:text-base">
                {missionTrees.sub}
              </p>
            </header>

            <div
              ref={stageRef}
              onPointerMove={onPointerMove}
              onPointerLeave={onPointerLeave}
              className="relative mt-5 flex min-h-0 flex-1 flex-col items-center justify-start gap-5 lg:mt-0 lg:grid lg:grid-cols-[240px_minmax(0,1fr)_260px] lg:items-center lg:justify-center lg:gap-8 w-full"
            >
              {/* Left Column - 5-6 points list */}
              <aside className="relative z-10 w-full max-w-xs shrink-0 hidden lg:flex lg:flex-col gap-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col gap-2.5"
                  >
                    {active.children.map((leaf) => {
                      const on = focusedLeaf === leaf;
                      const Icon = itemIcons[leaf] ?? Banknote;
                      return (
                        <button
                          key={leaf}
                          type="button"
                          onClick={() => setFocusedLeaf(leaf)}
                          className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-left transition-all duration-300 w-full ${
                            on 
                              ? "bg-white shadow-raised border-border/80" 
                              : "bg-white/40 border-border/20 hover:bg-white/60"
                          }`}
                        >
                          <div 
                            className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                              on ? "text-white" : "text-slate/60"
                            }`}
                            style={{ backgroundColor: on ? a.hex : "rgba(18,41,77,0.05)" }}
                          >
                            <Icon size={14} strokeWidth={2.2} />
                          </div>
                          <span 
                            className="text-xs font-bold transition-colors"
                            style={{ color: on ? a.ink : "rgba(18,41,77,0.7)" }}
                          >
                            {leaf}
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </aside>

              {/* Center Column - Compass */}
              <motion.div
                className="relative mx-auto aspect-square w-full max-w-[min(68vw,320px)] overflow-hidden sm:max-w-[min(100%,420px)] lg:max-w-[500px]"
                style={{ transform, transformStyle: "preserve-3d" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                dragDirectionLock
                onDragEnd={(_, info) => {
                  if (info.offset.x < -56 || info.velocity.x < -320) {
                    scrollToChapter(activeIndex + 1);
                  } else if (info.offset.x > 56 || info.velocity.x > 320) {
                    scrollToChapter(activeIndex - 1);
                  }
                }}
              >
                <svg
                  viewBox="0 0 1000 1000"
                  className="h-full w-full select-none"
                  role="img"
                  aria-label="Interactive Ink Compass — drag or click to lock mandates"
                >
                  <defs>
                    <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={a.hex} stopOpacity="0.16" />
                      <stop offset="100%" stopColor={a.hex} stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <circle
                    cx={CX}
                    cy={CY}
                    r={R_OUTER}
                    fill="none"
                    stroke="rgba(18,41,77,0.11)"
                    strokeWidth={1}
                  />
                  <circle
                    cx={CX}
                    cy={CY}
                    r={R_OUTER - 14}
                    fill="none"
                    stroke="rgba(18,41,77,0.07)"
                    strokeWidth={0.8}
                    strokeDasharray="2 6"
                  />

                  <motion.circle
                    cx={CX}
                    cy={CY}
                    r={R_INNER}
                    fill="none"
                    stroke={a.hex}
                    strokeWidth={1.05}
                    strokeOpacity={0.26}
                    animate={{ r: [R_INNER - 5, R_INNER + 5, R_INNER - 5] }}
                    transition={{
                      duration: 5.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {Array.from({ length: 72 }).map((_, i) => {
                    const ang = i * 5;
                    const major = i % 6 === 0;
                    const p1 = polar(ang, R_OUTER - (major ? 0 : 6));
                    const p2 = polar(ang, R_OUTER - (major ? 16 : 11));
                    return (
                      <line
                        key={i}
                        x1={p1.x}
                        y1={p1.y}
                        x2={p2.x}
                        y2={p2.y}
                        stroke={
                          major
                            ? "rgba(18,41,77,0.26)"
                            : "rgba(18,41,77,0.1)"
                        }
                        strokeWidth={major ? 1.3 : 0.75}
                      />
                    );
                  })}

                  {/* Lock meridian */}
                  <path
                    d={`M ${CX} ${CY - R_OUTER + 10} L ${CX - 7} ${CY - R_OUTER + 28} L ${CX + 7} ${CY - R_OUTER + 28} Z`}
                    fill={a.hex}
                    opacity={0.9}
                  />
                  <line
                    x1={CX}
                    y1={CY - R_OUTER + 18}
                    x2={CX}
                    y2={CY - R_INNER - 8}
                    stroke={a.hex}
                    strokeWidth={1}
                    strokeOpacity={0.25}
                    strokeDasharray="3 5"
                  />

                  {trees.map((tree, i) => (
                    <MandateArc
                      key={tree.id}
                      tree={tree}
                      index={i}
                      selected={i === activeIndex}
                      systemRot={systemRot}
                      onSelect={() => scrollToChapter(i)}
                    />
                  ))}

                  <CenterSeal
                    activeAccent={active.accent}
                    stamped={stamped}
                    glowId={glowId}
                  />
                </svg>
              </motion.div>

              {/* Right Column - Details panel */}
              <aside className="relative z-10 mt-0 w-full max-w-md shrink-0 px-2 text-center lg:max-w-none lg:px-0 lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p
                      className="text-[11px] font-bold tracking-[0.2em] uppercase"
                      style={{ color: a.ink }}
                    >
                      Mandate {String(activeIndex + 1).padStart(2, "0")} · locked
                    </p>
                    <h3 className="mt-1 font-display text-[22px] font-semibold leading-tight text-ink sm:text-[26px] lg:text-[30px]">
                      {active.root}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate sm:text-[14px]">
                      {active.blurb}
                    </p>
                    <ul className="mt-4 space-y-2.5 text-left w-full max-w-sm mx-auto lg:mx-0">
                      {active.children.map((leaf) => {
                        return (
                          <li key={leaf} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-charcoal">
                            <span 
                              className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full animate-pulse"
                              style={{ backgroundColor: a.hex }}
                            />
                            <span className="font-semibold leading-tight text-ink/90">
                              {leaf}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-4 flex items-center justify-center gap-2.5 lg:justify-start">
                  {trees.map((tree, i) => {
                    const selected = i === activeIndex;
                    const ta = accent[tree.accent];
                    return (
                      <button
                        key={tree.id}
                        type="button"
                        onClick={() => scrollToChapter(i)}
                        aria-label={tree.root}
                        aria-current={selected ? "true" : undefined}
                        className="flex h-9 w-9 items-center justify-center"
                      >
                        <span
                          className="block rounded-full transition-all duration-300"
                          style={{
                            width: selected ? 11 : 6,
                            height: selected ? 11 : 6,
                            background: selected
                              ? ta.hex
                              : "rgba(18,41,77,0.2)",
                            boxShadow: selected
                              ? `0 0 0 4px ${ta.soft}`
                              : "none",
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
                <p className="mt-1.5 text-[11px] text-slate/65">
                  Drag to spin · click a ring to lock
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
