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
import { missionTrees } from "@/lib/content";

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

function BloomToken({
  label,
  index,
  total,
  accentKey,
  focused,
  onFocus,
}: {
  label: string;
  index: number;
  total: number;
  accentKey: Accent;
  focused: boolean;
  onFocus: () => void;
}) {
  const a = accent[accentKey];
  const Icon = itemIcons[label] ?? Banknote;
  const ang = tokenAngle(index, total);
  const tip = polar(ang, R_TOKENS);
  const inner = polar(ang, R_SEAL + 10);
  const outer = polar(ang, R_TOKENS - 30);
  const spoke = `M ${inner.x} ${inner.y} L ${outer.x} ${outer.y}`;

  return (
    <g>
      <motion.path
        d={spoke}
        fill="none"
        stroke={a.hex}
        strokeWidth={1.15}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: focused ? 0.55 : 0.28 }}
        transition={{
          duration: 0.55,
          delay: 0.06 + index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <motion.g
        initial={{ opacity: 0, scale: 0.35 }}
        animate={{ opacity: 1, scale: focused ? 1.08 : 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.1 + index * 0.055,
        }}
        style={{
          transformOrigin: `${tip.x}px ${tip.y}px`,
        }}
      >
        <circle
          cx={tip.x}
          cy={tip.y}
          r={focused ? 24 : 21}
          fill="#FBF6EC"
          stroke={a.hex}
          strokeWidth={focused ? 2.2 : 1.5}
          className="cursor-pointer"
          onClick={onFocus}
          style={{
            filter: focused
              ? `drop-shadow(0 8px 18px ${a.glow})`
              : `drop-shadow(0 4px 10px ${a.glow})`,
          }}
        />
        <circle
          cx={tip.x}
          cy={tip.y}
          r={16}
          fill={a.soft}
          stroke={a.hex}
          strokeWidth={0.55}
          strokeOpacity={0.35}
          className="pointer-events-none"
        />
        <foreignObject
          x={tip.x - 11}
          y={tip.y - 11}
          width={22}
          height={22}
          className="pointer-events-none"
        >
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ color: a.hex }}
          >
            <Icon size={13} strokeWidth={2.2} />
          </div>
        </foreignObject>
        <foreignObject
          x={tip.x - 56}
          y={tip.y + 26}
          width={112}
          height={40}
          className="pointer-events-none"
        >
          <p
            className="text-center text-[10px] leading-tight font-semibold sm:text-[11px]"
            style={{
              color: focused ? a.ink : "rgba(18,41,77,0.62)",
            }}
          >
            {label}
          </p>
        </foreignObject>
      </motion.g>
    </g>
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
            x={-78}
            y={34}
            width={156}
            height={28}
            className="pointer-events-none"
          >
            <p
              className="text-center text-[12px] font-bold tracking-[0.02em]"
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
          <foreignObject x={CX - 64} y={CY - 34} width={128} height={68}>
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p
                className="text-[9px] font-bold tracking-[0.22em] uppercase"
                style={{ color: a.ink }}
              >
                {missionTrees.hubLabel}
              </p>
              <p className="mt-1 font-display text-[13px] leading-tight font-semibold text-ink sm:text-[14px]">
                {missionTrees.hubTagline}
              </p>
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
    setActiveIndex((prev) => {
      if (next === prev) return prev;
      setStamped((s) => s + 1);
      setFocusedLeaf(trees[next]?.children[0] ?? null);
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
        <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden px-3 pt-[max(4.5rem,env(safe-area-inset-top))] pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:px-6 lg:px-8">
          <Atmosphere
            progress={scrollYProgress}
            activeAccent={active.accent}
          />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1120px] flex-col">
            <header className="shrink-0 text-center lg:text-left">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-slate uppercase sm:text-[12px]">
                {missionTrees.eyebrow}
              </p>
              <h2
                id="mission-trees-heading"
                className="mt-1 font-display text-[22px] font-semibold leading-[1.12] text-ink sm:text-[30px] lg:text-[42px]"
              >
                {missionTrees.heading}
              </h2>
              <p className="mx-auto mt-1.5 max-w-xl text-[13px] leading-snug text-slate sm:text-[14px] lg:mx-0 lg:text-base">
                {missionTrees.sub}
              </p>
            </header>

            <div
              ref={stageRef}
              onPointerMove={onPointerMove}
              onPointerLeave={onPointerLeave}
              className="relative mt-1 flex min-h-0 flex-1 flex-col items-center justify-center lg:mt-0 lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center lg:gap-4"
            >
              <motion.div
                className="relative mx-auto aspect-square w-full max-w-[min(100%,520px)] lg:max-w-[600px]"
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
                  aria-label="Interactive Ink Compass — scroll, drag, or click to lock mandates"
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
                    d={`M ${CX} ${CY - R_OUTER - 6} L ${CX - 7} ${CY - R_OUTER + 12} L ${CX + 7} ${CY - R_OUTER + 12} Z`}
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

                  <AnimatePresence mode="wait">
                    <motion.g
                      key={active.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {active.children.map((leaf, i) => (
                        <BloomToken
                          key={leaf}
                          label={leaf}
                          index={i}
                          total={active.children.length}
                          accentKey={active.accent}
                          focused={focusedLeaf === leaf}
                          onFocus={() => setFocusedLeaf(leaf)}
                        />
                      ))}
                    </motion.g>
                  </AnimatePresence>

                  <CenterSeal
                    activeAccent={active.accent}
                    stamped={stamped}
                    glowId={glowId}
                  />
                </svg>
              </motion.div>

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
                    <ul className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 lg:justify-start">
                      {active.children.map((leaf) => {
                        const on = focusedLeaf === leaf;
                        return (
                          <li key={leaf}>
                            <button
                              type="button"
                              onClick={() => setFocusedLeaf(leaf)}
                              className="text-[12px] font-semibold transition-colors sm:text-[13px]"
                              style={{
                                color: on ? a.hex : "rgba(18,41,77,0.5)",
                                textDecoration: on ? "underline" : "none",
                                textUnderlineOffset: 3,
                              }}
                            >
                              {leaf}
                            </button>
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
                  Scroll or drag to spin · click a ring to lock
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
