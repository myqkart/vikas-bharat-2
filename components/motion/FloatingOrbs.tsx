"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    className: "left-[-8%] top-[12%] h-56 w-56 bg-marigold/25",
    duration: 14,
  },
  {
    className: "right-[-6%] top-[28%] h-72 w-72 bg-success/20",
    duration: 18,
  },
  {
    className: "left-[18%] bottom-[-10%] h-64 w-64 bg-indigo/25",
    duration: 16,
  },
  {
    className: "right-[22%] bottom-[8%] h-40 w-40 bg-marigold/20",
    duration: 12,
  },
];

export default function FloatingOrbs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.12),transparent_55%)]" />
      <div className="mesh-gradient absolute inset-0 opacity-60" />
    </div>
  );
}
