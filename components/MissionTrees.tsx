"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { missionTrees } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";

type Accent = "marigold" | "success" | "indigo" | "ink";

const strokeOf: Record<Accent, string> = {
  marigold: "#F5A623",
  success: "#1D8348",
  indigo: "#1E3E72",
  ink: "#12294D",
};

const rootOf: Record<Accent, string> = {
  marigold: "bg-marigold text-ink",
  success: "bg-success text-white",
  indigo: "bg-indigo text-paper",
  ink: "bg-ink text-paper",
};

const chipOf: Record<Accent, string> = {
  marigold: "bg-marigold text-ink border-marigold",
  success: "bg-success text-white border-success",
  indigo: "bg-indigo text-paper border-indigo",
  ink: "bg-ink text-paper border-ink",
};

type Pt = { x: number; y: number };
type Tree = (typeof missionTrees.trees)[number];

function branchPath(from: Pt, to: Pt, vertical: boolean) {
  if (vertical) {
    const midY = from.y + (to.y - from.y) * 0.45;
    return `M ${from.x} ${from.y} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${to.y}`;
  }
  const dx = Math.max(to.x - from.x, 40);
  const pull = Math.min(dx * 0.55, 110);
  return `M ${from.x} ${from.y} C ${from.x + pull} ${from.y}, ${to.x - pull} ${to.y}, ${to.x} ${to.y}`;
}

function DashedBranch({
  d,
  stroke,
  delay,
  lit,
  draw,
  maskKey,
}: {
  d: string;
  stroke: string;
  delay: number;
  lit: boolean;
  draw: boolean;
  maskKey: string;
}) {
  const maskId = `dash-mask-${maskKey}`;

  return (
    <g>
      <mask id={maskId}>
        <motion.path
          d={d}
          fill="none"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: draw ? 1 : 0 }}
          transition={{
            duration: 0.9,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </mask>
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={lit ? 2.25 : 1.6}
        strokeLinecap="round"
        strokeDasharray="5 7"
        opacity={lit ? 1 : 0.4}
        mask={`url(#${maskId})`}
      />
    </g>
  );
}

function MindmapFan({ tree }: { tree: Tree }) {
  const uid = useId().replace(/:/g, "");
  const wrapRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const leafRefs = useRef<(HTMLLIElement | null)[]>([]);
  const inView = useInView(wrapRef, { once: true, amount: 0.35 });
  const [paths, setPaths] = useState<string[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [vertical, setVertical] = useState(true);
  const [lit, setLit] = useState(0);
  const stroke = strokeOf[tree.accent];

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const hub = hubRef.current;
    if (!wrap || !hub) return;

    const wr = wrap.getBoundingClientRect();
    const hr = hub.getBoundingClientRect();
    const isVertical = wr.width < 640;
    setVertical(isVertical);

    const from: Pt = isVertical
      ? {
          x: hr.left + hr.width / 2 - wr.left,
          y: hr.bottom - wr.top,
        }
      : {
          x: hr.right - wr.left,
          y: hr.top + hr.height / 2 - wr.top,
        };

    const next: string[] = [];
    leafRefs.current.forEach((el) => {
      if (!el) return;
      const lr = el.getBoundingClientRect();
      const to: Pt = isVertical
        ? {
            x: lr.left - wr.left + 14,
            y: lr.top + lr.height / 2 - wr.top,
          }
        : {
            x: lr.left - wr.left,
            y: lr.top + lr.height / 2 - wr.top,
          };
      next.push(branchPath(from, to, isVertical));
    });

    setSize({ w: wr.width, h: wr.height });
    setPaths(next);
  }, []);

  useLayoutEffect(() => {
    measure();
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => requestAnimationFrame(measure));
    ro.observe(wrap);
    const t = window.setTimeout(measure, 80);
    return () => {
      ro.disconnect();
      window.clearTimeout(t);
    };
  }, [measure, tree.id, tree.children]);

  useEffect(() => {
    if (!inView) return;
    setLit(0);
    const id = window.setInterval(() => {
      setLit((n) => (n + 1) % tree.children.length);
    }, 1700);
    return () => window.clearInterval(id);
  }, [inView, tree.id, tree.children.length]);

  return (
    <div
      ref={wrapRef}
      className={`relative ${
        vertical
          ? "flex flex-col items-stretch gap-5 pt-1"
          : "flex min-h-[300px] items-center gap-3"
      }`}
    >
      {size.w > 0 && paths.length > 0 ? (
        <svg
          className="pointer-events-none absolute inset-0 z-0 overflow-visible"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          aria-hidden
        >
          {paths.map((d, i) => (
            <DashedBranch
              key={`${tree.id}-${i}-${Math.round(size.w)}-${vertical}`}
              maskKey={`${uid}-${i}`}
              d={d}
              stroke={stroke}
              delay={0.12 + i * 0.09}
              lit={lit === i}
              draw={inView}
            />
          ))}
        </svg>
      ) : null}

      <motion.div
        ref={hubRef}
        className={`relative z-10 ${vertical ? "mx-auto" : "shrink-0"}`}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
      >
        <div
          className={`rounded-[14px] px-5 py-3 text-center text-sm font-bold shadow-raised sm:px-6 sm:py-3.5 sm:text-base ${rootOf[tree.accent]}`}
        >
          {tree.root}
        </div>
        <span
          aria-hidden
          className={`absolute h-2.5 w-2.5 rounded-full ring-[4px] ring-paper ${
            vertical
              ? "bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2"
              : "top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
          }`}
          style={{ background: stroke }}
        />
      </motion.div>

      <ul
        className={`relative z-10 flex flex-col gap-2.5 ${
          vertical ? "w-full pl-6" : "ml-8 w-full max-w-lg flex-1"
        }`}
      >
        {tree.children.map((leaf, i) => {
          const on = lit === i;
          return (
            <motion.li
              key={leaf}
              ref={(el) => {
                leafRefs.current[i] = el;
              }}
              initial={{ opacity: 0, y: vertical ? 12 : 0, x: vertical ? 0 : 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                delay: 0.4 + i * 0.08,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              onPointerEnter={() => setLit(i)}
            >
              <div
                className={`flex min-h-11 items-center gap-3 rounded-[14px] border px-3.5 py-3 transition-shadow ${
                  on
                    ? "border-transparent bg-white shadow-card"
                    : "border-border/70 bg-white/80"
                }`}
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    background: stroke,
                    boxShadow: on ? `0 0 0 4px ${stroke}30` : undefined,
                  }}
                  aria-hidden
                />
                <span className="text-[14px] font-semibold leading-snug text-ink sm:text-[15px]">
                  {leaf}
                </span>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default function MissionTrees() {
  const trees = missionTrees.trees;
  const [activeId, setActiveId] = useState<string>(trees[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.25 });
  const paused = useRef(false);
  const active = trees.find((t) => t.id === activeId) ?? trees[0];

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      if (paused.current) return;
      setActiveId((curr) => {
        const i = trees.findIndex((t) => t.id === curr);
        return trees[(i + 1) % trees.length].id;
      });
    }, 5500);
    return () => window.clearInterval(id);
  }, [inView, trees]);

  // Keep active chip visible in the horizontal scroller
  useEffect(() => {
    const scroller = tabsRef.current;
    if (!scroller) return;
    const chip = scroller.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    chip?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  return (
    <section
      ref={sectionRef}
      id={missionTrees.id}
      aria-labelledby="mission-trees-heading"
      className="relative overflow-hidden px-4 py-14 sm:px-5 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,166,35,0.12),transparent_50%)]" />

      <div className="relative mx-auto max-w-[720px] lg:max-w-[980px]">
        <Reveal>
          <p className="text-[12px] font-semibold tracking-[0.16em] text-slate uppercase sm:text-[13px]">
            {missionTrees.eyebrow}
          </p>
          <h2
            id="mission-trees-heading"
            className="mt-2 max-w-xl font-display text-[26px] font-semibold leading-[1.15] text-ink sm:text-[32px] lg:text-[40px]"
          >
            {missionTrees.heading}
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate sm:text-base lg:text-lg">
            {missionTrees.sub}
          </p>
        </Reveal>

        {/* Mobile-first pillar chips */}
        <div
          ref={tabsRef}
          className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Business pillars"
          onPointerDown={() => {
            paused.current = true;
          }}
          onPointerUp={() => {
            window.setTimeout(() => {
              paused.current = false;
            }, 2500);
          }}
        >
          {trees.map((tree) => {
            const selected = tree.id === activeId;
            return (
              <button
                key={tree.id}
                type="button"
                role="tab"
                data-id={tree.id}
                aria-selected={selected}
                onClick={() => {
                  paused.current = true;
                  setActiveId(tree.id);
                  window.setTimeout(() => {
                    paused.current = false;
                  }, 4000);
                }}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition-colors ${
                  selected
                    ? chipOf[tree.accent]
                    : "border-border bg-white/80 text-ink"
                }`}
              >
                {tree.root}
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate">{active.blurb}</p>

        {/* Mindmap panel */}
        <div
          className="mt-5 rounded-[20px] border border-border/80 bg-white/85 p-4 shadow-card sm:p-6"
          onPointerEnter={() => {
            paused.current = true;
          }}
          onPointerLeave={() => {
            paused.current = false;
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <MindmapFan tree={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
