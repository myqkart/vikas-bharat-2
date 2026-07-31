"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  as?: keyof typeof motion;
};

export default function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.25,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
