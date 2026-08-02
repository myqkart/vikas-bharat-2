"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Accent = "marigold" | "success" | "indigo" | "ink";

type TreeBranchProps = {
  root: string;
  leaves: readonly string[];
  accent?: Accent;
  index?: number;
};

const strokeOf: Record<Accent, string> = {
  marigold: "#F5A623",
  success: "#1D8348",
  indigo: "#1E3E72",
  ink: "#12294D",
};

const rootOf: Record<Accent, string> = {
  marigold: "bg-marigold text-ink shadow-[0_10px_28px_-10px_rgba(245,166,35,0.65)]",
  success: "bg-success text-white shadow-[0_10px_28px_-10px_rgba(29,131,72,0.55)]",
  indigo: "bg-indigo text-paper shadow-[0_10px_28px_-10px_rgba(30,62,114,0.55)]",
  ink: "bg-ink text-paper shadow-[0_10px_28px_-10px_rgba(18,41,77,0.55)]",
};

const glowOf: Record<Accent, string> = {
  marigold: "bg-marigold/25",
  success: "bg-success/20",
  indigo: "bg-indigo/20",
  ink: "bg-ink/15",
};

type Pt = { x: number; y: number };

function curveFromTo(from: Pt, to: Pt) {
  const dx = Math.max(to.x - from.x, 40);
  const bulge = Math.min(dx * 0.55, 120);
  return `M ${from.x} ${from.y} C ${from.x + bulge} ${from.y}, ${to.x - bulge} ${to.y}, ${to.x} ${to.y}`;
}

export default function TreeBranch({
  root,
  leaves,
  accent = "ink",
  index = 0,
}: TreeBranchProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLSpanElement>(null);
  const leafRefs = useRef<(HTMLLIElement | null)[]>([]);
  const inView = useInView(wrapRef, { once: true, amount: 0.4 });
  const [paths, setPaths] = useState<string[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const hub = hubRef.current;
    if (!wrap || !hub) return;

    const wr = wrap.getBoundingClientRect();
    const hr = hub.getBoundingClientRect();

    const from: Pt = {
      x: hr.left + hr.width / 2 - wr.left,
      y: hr.top + hr.height / 2 - wr.top,
    };

    const next: string[] = [];
    leafRefs.current.forEach((el) => {
      if (!el) return;
      const lr = el.getBoundingClientRect();
      const to: Pt = {
        x: lr.left - wr.left + 2,
        y: lr.top + lr.height / 2 - wr.top,
      };
      next.push(curveFromTo(from, to));
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
    window.addEventListener("resize", measure);
    const t = window.setTimeout(measure, 100);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t);
    };
  }, [measure, leaves]);

  const stroke = strokeOf[accent];
  const label = String(index + 1).padStart(2, "0");

  return (
    <article className="relative py-2">
      <div
        ref={wrapRef}
        className="relative grid items-center gap-x-0 gap-y-8 md:grid-cols-[minmax(11rem,16rem)_1.25rem_minmax(0,1fr)] md:gap-y-0"
      >
        {/* Dashed connectors — draw source → leaf */}
        {size.w > 0 && paths.length > 0 ? (
          <svg
            className="pointer-events-none absolute inset-0 z-[1] hidden overflow-visible md:block"
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
            aria-hidden
          >
            {paths.map((d, i) => (
              <motion.path
                key={`${i}-${Math.round(size.w)}`}
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="5 7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  inView
                    ? { pathLength: 1, opacity: 0.75 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                  pathLength: {
                    duration: 1.05,
                    delay: 0.28 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  opacity: { duration: 0.2, delay: 0.28 + i * 0.1 },
                }}
              />
            ))}
          </svg>
        ) : null}

        {/* Source */}
        <div className="relative z-[2] flex items-center gap-3 md:justify-end">
          <span
            aria-hidden
            className={`pointer-events-none absolute -inset-6 rounded-full blur-2xl ${glowOf[accent]}`}
          />
          <motion.div
            className="relative flex items-center gap-3"
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-display text-xs font-semibold tracking-[0.2em] text-slate/70">
              {label}
            </span>
            <span
              className={`relative rounded-[14px] px-5 py-3.5 text-sm font-bold tracking-wide sm:text-base ${rootOf[accent]}`}
            >
              {root}
            </span>
          </motion.div>
        </div>

        {/* Hub */}
        <div className="relative z-[2] hidden justify-center md:flex">
          <motion.span
            ref={hubRef}
            className="relative flex h-3.5 w-3.5 items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : undefined}
            transition={{
              delay: 0.18,
              type: "spring",
              stiffness: 320,
              damping: 16,
            }}
            aria-hidden
          >
            <span
              className="absolute inset-[-6px] rounded-full opacity-40"
              style={{ background: stroke }}
            />
            <span
              className="relative h-3.5 w-3.5 rounded-full ring-4 ring-paper"
              style={{ background: stroke }}
            />
          </motion.span>
        </div>

        {/* Destinations */}
        <ul className="relative z-[2] flex flex-col gap-3 border-l border-dashed border-border/80 pl-5 md:border-0 md:pl-8">
          {leaves.map((leaf, i) => (
            <motion.li
              key={leaf}
              ref={(el) => {
                leafRefs.current[i] = el;
              }}
              className="group relative"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.45,
                delay: 0.7 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center gap-3 rounded-[14px] bg-white/70 px-4 py-3 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: stroke }}
                  aria-hidden
                />
                <span className="text-sm font-semibold text-ink sm:text-[15px]">
                  {leaf}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </article>
  );
}
