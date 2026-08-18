"use client";

import { motion, type Variants } from "framer-motion";
import { letterRevealExtreme, staggerFast } from "@/lib/motion";

type TextRevealProps = {
  text: string;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  once?: boolean;
  amount?: number | "some" | "all";
  /** Mount animation instead of scroll (heroes) */
  onMount?: boolean;
  wordVariants?: Variants;
  staggerVariants?: Variants;
};

export default function TextReveal({
  text,
  className,
  id,
  as = "p",
  once = true,
  amount = 0.35,
  onMount = false,
  wordVariants = letterRevealExtreme,
  staggerVariants = staggerFast,
}: TextRevealProps) {
  const words = text.split(" ");
  const Tag = motion[as];

  return (
    <Tag
      id={id}
      className={className}
      initial="hidden"
      {...(onMount
        ? { animate: "visible" as const }
        : {
            whileInView: "visible" as const,
            viewport: { once, amount, margin: "0px 0px -6% 0px" },
          })}
      variants={staggerVariants}
      aria-label={text}
      style={{ perspective: 800 }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-top"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={wordVariants}
            style={{ transformOrigin: "bottom", transformStyle: "preserve-3d" }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
