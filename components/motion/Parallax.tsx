"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  scaleRange?: [number, number];
};

export default function Parallax({
  children,
  className,
  speed = 0.2,
  scaleRange = [1, 1],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [-80 * speed, 80 * speed]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 24 });
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);

  return (
    <motion.div ref={ref} className={className} style={{ y, scale }}>
      {children}
    </motion.div>
  );
}
