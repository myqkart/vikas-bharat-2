"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
};

export default function TiltCard({
  children,
  className,
  intensity = 10,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(rawRotateY, { stiffness: 180, damping: 18 });
  const smoothGlareX = useSpring(glareX, { stiffness: 120, damping: 20 });
  const smoothGlareY = useSpring(glareY, { stiffness: 120, damping: 20 });
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${smoothGlareX}% ${smoothGlareY}%, rgba(255,255,255,0.28), transparent 55%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    glareX.set(px * 100);
    glareY.set(py * 100);
    rawRotateX.set((0.5 - py) * intensity);
    rawRotateY.set((px - 0.5) * intensity);
  }

  function onLeave() {
    rawRotateX.set(0);
    rawRotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`group relative [transform-style:preserve-3d] ${className ?? ""}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
      {glare ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg, mixBlendMode: "soft-light" }}
        />
      ) : null}
    </motion.div>
  );
}
