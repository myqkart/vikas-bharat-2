"use client";

import { motion } from "framer-motion";
import { letterReveal, staggerFast } from "@/lib/motion";

type TextRevealProps = {
  text: string;
  className?: string;
};

export default function TextReveal({ text, className }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerFast}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-top">
          <motion.span
            className="inline-block will-change-transform"
            variants={letterReveal}
            style={{ transformOrigin: "bottom" }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
