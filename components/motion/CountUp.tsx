"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

type CountUpProps = {
  value: string;
  className?: string;
};

/** Animates numeric portion of strings like "₹480Cr+", "12,000+", "95%", "48 hrs" */
export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const match = value.match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numeric = match?.[2] ? Number(match[2].replace(/,/g, "")) : null;
  const suffix = match?.[3] ?? value;
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || numeric === null) return;
    motionVal.set(0);
    motionVal.set(numeric);
  }, [inView, numeric, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  if (numeric === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const formatted = display.toLocaleString("en-IN");

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}
