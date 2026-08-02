"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import indiaMap from "@svg-maps/india";
import { network } from "@/lib/content";

const FILL_BASE = "#E8E4DC";
const FILL_HIGHLIGHT = "#FFB37E";
const FILL_HOVER = "#F5A623";
const STROKE = "#FFFFFF";

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

export default function IndiaNetworkMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [pulseId, setPulseId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

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
    () => indiaMap.locations.map((loc) => loc.id).filter((id) => byMapId.has(id)),
    [byMapId],
  );

  useEffect(() => {
    if (pulseableIds.length === 0) return;

    const pickNext = () => {
      if (pausedRef.current) return;
      setPulseId((prev) => {
        let next = pulseableIds[Math.floor(Math.random() * pulseableIds.length)];
        // Avoid repeating the same state back-to-back when possible
        if (pulseableIds.length > 1) {
          let guard = 0;
          while (next === prev && guard < 6) {
            next = pulseableIds[Math.floor(Math.random() * pulseableIds.length)];
            guard += 1;
          }
        }
        return next;
      });
    };

    pickNext();
    const timer = window.setInterval(pickNext, 1600);
    return () => window.clearInterval(timer);
  }, [pulseableIds]);

  const activeId = hoveredId ?? pulseId;

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
      <svg
        viewBox={indiaMap.viewBox}
        role="img"
        aria-label="Interactive map of India showing MSME counts by state"
        className="h-auto w-full select-none"
      >
        {indiaMap.locations.map((loc) => {
          const isActive = activeId === loc.id;
          const isHovered = hoveredId === loc.id;
          const hasData = byMapId.has(loc.id);
          return (
            <path
              key={loc.id}
              d={loc.path}
              fill={
                isHovered ? FILL_HOVER : isActive ? FILL_HIGHLIGHT : FILL_BASE
              }
              stroke={STROKE}
              strokeWidth={1.15}
              strokeLinejoin="round"
              className={`transition-[fill] duration-500 ease-out ${
                hasData ? "cursor-pointer" : "pointer-events-none"
              }`}
              onMouseEnter={(e) => {
                if (!hasData) return;
                pausedRef.current = true;
                setHoveredId(loc.id);
                moveTooltip(e.clientX, e.clientY, loc.id);
              }}
              onMouseMove={(e) => {
                if (!hasData) return;
                moveTooltip(e.clientX, e.clientY, loc.id);
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
                setHoveredId(null);
                setTooltip(null);
              }}
              onClick={(e) => {
                if (!hasData) return;
                pausedRef.current = true;
                setHoveredId(loc.id);
                moveTooltip(e.clientX, e.clientY, loc.id);
              }}
              onFocus={(e) => {
                if (!hasData) return;
                pausedRef.current = true;
                setHoveredId(loc.id);
                const rect = e.currentTarget.getBoundingClientRect();
                moveTooltip(rect.left + rect.width / 2, rect.top, loc.id);
              }}
              onBlur={() => {
                pausedRef.current = false;
                setHoveredId(null);
                setTooltip(null);
              }}
              tabIndex={hasData ? 0 : undefined}
              aria-label={
                hasData
                  ? `${byMapId.get(loc.id)!.name}: ${formatCount(byMapId.get(loc.id)!.count)} MSMEs`
                  : loc.name
              }
            />
          );
        })}
      </svg>

      {tooltip ? (
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
    </div>
  );
}
