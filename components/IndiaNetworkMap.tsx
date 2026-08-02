"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import indiaMap from "@svg-maps/india";
import { network } from "@/lib/content";
import { MetroCityIcon } from "@/components/MetroCityIcon";

const FILL_BASE = "#E8E4DC";
const FILL_HIGHLIGHT = "#FFB37E";
const FILL_HOVER = "#F5A623";
const FILL_INTRO = "#DED8CE";
const STROKE = "#FFFFFF";

type Phase = "idle" | "map" | "metros" | "live";

type TooltipState = {
  x: number;
  y: number;
  name: string;
  rank: number;
  count: number;
};

function formatCount(n: number) {
  return n.toLocaleString("en-IN");
}

function labelWidth(name: string) {
  return Math.max(52, name.length * 6.4 + 16);
}

export default function IndiaNetworkMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const inView = useInView(wrapRef, { once: true, amount: 0.4 });
  const [phase, setPhase] = useState<Phase>("idle");
  const [pulseId, setPulseId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [status, setStatus] = useState("Scroll to explore the map");

  const byMapId = useMemo(() => {
    const map = new Map<
      string,
      { name: string; rank: number; count: number }
    >();
    for (const state of network.states) {
      map.set(state.id, {
        name: state.name,
        rank: state.rank,
        count: state.count,
      });
      if ("aliasIds" in state && state.aliasIds) {
        for (const alias of state.aliasIds) {
          map.set(alias, {
            name: state.name,
            rank: state.rank,
            count: state.count,
          });
        }
      }
    }
    return map;
  }, []);

  const pulseableIds = useMemo(
    () =>
      indiaMap.locations.map((loc) => loc.id).filter((id) => byMapId.has(id)),
    [byMapId],
  );

  useEffect(() => {
    if (!inView) return;
    setPhase("map");
    setStatus("Mapping Bharat…");

    const metroAt = 1200;
    const liveAt = metroAt + 900 + network.metros.length * 140;

    const t1 = window.setTimeout(() => {
      setPhase("metros");
      setStatus("Metro cities & desk presence");
    }, metroAt);

    const t2 = window.setTimeout(() => {
      setPhase("live");
      setStatus("Hover any state for MSME counts");
    }, liveAt);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [inView]);

  useEffect(() => {
    if (phase !== "live" || pulseableIds.length === 0) return;

    const pickNext = () => {
      if (pausedRef.current) return;
      setPulseId((prev) => {
        let next =
          pulseableIds[Math.floor(Math.random() * pulseableIds.length)];
        if (pulseableIds.length > 1) {
          let guard = 0;
          while (next === prev && guard < 6) {
            next =
              pulseableIds[Math.floor(Math.random() * pulseableIds.length)];
            guard += 1;
          }
        }
        return next;
      });
    };

    pickNext();
    const timer = window.setInterval(pickNext, 1600);
    return () => window.clearInterval(timer);
  }, [phase, pulseableIds]);

  const live = phase === "live";
  const showMetros = phase === "metros";
  const activeId = live ? hoveredId ?? pulseId : null;
  const interact = live;

  const moveTooltip = (clientX: number, clientY: number, id: string) => {
    const data = byMapId.get(id);
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!data || !rect) return;
    setTooltip({
      x: clientX - rect.left,
      y: clientY - rect.top,
      name: data.name,
      rank: data.rank,
      count: data.count,
    });
  };

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[520px]">
      <motion.p
        className="mb-3 text-center text-[11px] font-bold tracking-[0.14em] text-slate uppercase lg:text-left"
        key={status}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {status}
      </motion.p>

      <svg
        viewBox={indiaMap.viewBox}
        role="img"
        aria-label="Interactive map of India showing MSME counts by state"
        className="h-auto w-full select-none overflow-visible"
      >
        <defs>
          <filter id="metro-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {indiaMap.locations.map((loc, i) => {
          const isActive = activeId === loc.id;
          const isHovered = hoveredId === loc.id;
          const hasData = byMapId.has(loc.id);
          const fill = !live
            ? FILL_INTRO
            : isHovered
              ? FILL_HOVER
              : isActive
                ? FILL_HIGHLIGHT
                : FILL_BASE;

          return (
            <motion.path
              key={loc.id}
              d={loc.path}
              fill={fill}
              stroke={STROKE}
              strokeWidth={1.15}
              strokeLinejoin="round"
              className={
                interact && hasData ? "cursor-pointer" : "pointer-events-none"
              }
              initial={{ opacity: 0 }}
              animate={phase === "idle" ? { opacity: 0 } : { opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: phase === "idle" ? 0 : Math.min(i * 0.018, 0.7),
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={(e) => {
                if (!interact || !hasData) return;
                pausedRef.current = true;
                setHoveredId(loc.id);
                moveTooltip(e.clientX, e.clientY, loc.id);
              }}
              onMouseMove={(e) => {
                if (!interact || !hasData) return;
                moveTooltip(e.clientX, e.clientY, loc.id);
              }}
              onMouseLeave={() => {
                if (!interact) return;
                pausedRef.current = false;
                setHoveredId(null);
                setTooltip(null);
              }}
              onClick={(e) => {
                if (!interact || !hasData) return;
                pausedRef.current = true;
                setHoveredId(loc.id);
                moveTooltip(e.clientX, e.clientY, loc.id);
              }}
              onFocus={(e) => {
                if (!interact || !hasData) return;
                pausedRef.current = true;
                setHoveredId(loc.id);
                const rect = e.currentTarget.getBoundingClientRect();
                moveTooltip(rect.left + rect.width / 2, rect.top, loc.id);
              }}
              onBlur={() => {
                if (!interact) return;
                pausedRef.current = false;
                setHoveredId(null);
                setTooltip(null);
              }}
              tabIndex={interact && hasData ? 0 : undefined}
              aria-label={
                hasData
                  ? `${byMapId.get(loc.id)!.name}: ${formatCount(byMapId.get(loc.id)!.count)} MSMEs`
                  : loc.name
              }
            />
          );
        })}

        <AnimatePresence>
          {showMetros
            ? network.metros.map((metro, i) => {
                const color = metro.office ? "#F5A623" : "#1D8348";
                const w = labelWidth(metro.name);
                const labelRight = metro.label === "right";
                const iconSize = 36;
                const ix = metro.x - iconSize / 2;
                const iy = metro.y - iconSize - 4;

                return (
                  <motion.g
                    key={metro.id}
                    initial={{ opacity: 0, scale: 0.6, y: -12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.7, y: -10 }}
                    transition={{
                      delay: i * 0.12,
                      type: "spring",
                      stiffness: 320,
                      damping: 18,
                    }}
                    style={{ transformOrigin: `${metro.x}px ${metro.y}px` }}
                  >
                    <motion.circle
                      cx={metro.x}
                      cy={metro.y}
                      r={5}
                      fill={color}
                      initial={{ opacity: 0.4, scale: 0.5 }}
                      animate={{ opacity: 0, scale: 3.2 }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.12,
                        ease: "easeOut",
                      }}
                      style={{
                        transformOrigin: `${metro.x}px ${metro.y}px`,
                      }}
                    />

                    {/* Landmark metro icon badge */}
                    <g transform={`translate(${ix} ${iy})`}>
                      <circle
                        cx={iconSize / 2}
                        cy={iconSize / 2}
                        r={iconSize / 2}
                        fill="#fff"
                        stroke={color}
                        strokeWidth={2}
                        filter="url(#metro-glow)"
                      />
                      <g transform="translate(2 2) scale(0.8)">
                        <MetroCityIcon cityId={metro.id} color={color} />
                      </g>
                    </g>

                    {/* Dot on exact city point */}
                    <circle
                      cx={metro.x}
                      cy={metro.y}
                      r={3.5}
                      fill={color}
                      stroke="#fff"
                      strokeWidth={1.4}
                    />

                    {/* City name */}
                    <g>
                      <rect
                        x={labelRight ? metro.x + 8 : metro.x - 8 - w}
                        y={metro.y - 8}
                        width={w}
                        height={16}
                        rx={5}
                        fill="rgba(255,255,255,0.96)"
                        stroke="#E4D9BE"
                        strokeWidth={1}
                      />
                      <text
                        x={labelRight ? metro.x + 16 : metro.x - 8 - w + 8}
                        y={metro.y + 3}
                        fill="#12294D"
                        fontSize={9.5}
                        fontWeight={700}
                        fontFamily="var(--font-plus-jakarta), system-ui, sans-serif"
                      >
                        {metro.name}
                      </text>
                    </g>
                  </motion.g>
                );
              })
            : null}
        </AnimatePresence>
      </svg>

      <AnimatePresence>
        {phase === "metros" ? (
          <motion.div
            className="mt-3 flex flex-wrap items-center justify-center gap-4 text-[11px] font-semibold text-slate lg:justify-start"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-marigold" />
              Desk city landmark
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-success" />
              Metro reach landmark
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {tooltip && live ? (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-[120%] rounded-[14px] border border-border bg-white px-3.5 py-2.5 shadow-raised"
          style={{ left: tooltip.x, top: tooltip.y }}
          role="tooltip"
        >
          <p className="text-[11px] font-semibold tracking-wide text-slate uppercase">
            Rank #{tooltip.rank}
          </p>
          <p className="mt-0.5 text-sm font-bold text-ink">{tooltip.name}</p>
          <p className="mt-1 text-sm text-charcoal">
            <span className="font-bold text-marigold-dark">
              {formatCount(tooltip.count)}
            </span>{" "}
            <span className="text-slate">MSMEs</span>
          </p>
        </div>
      ) : null}

      {live ? (
        <p className="mt-3 text-center text-xs text-slate lg:text-left">
          States pulse one by one — hover for MSME statistics.
        </p>
      ) : null}
    </div>
  );
}
