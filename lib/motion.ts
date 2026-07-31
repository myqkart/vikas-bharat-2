import type { Variants, Transition } from "framer-motion";

export const easeOutExpo: Transition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1],
};

export const easeSoft: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 120,
  damping: 18,
  mass: 0.8,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: easeOutExpo },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -32, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: easeOutExpo },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: easeOutExpo },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 48, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: easeOutExpo },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.88, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: easeOutExpo,
  },
};

export const clipReveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(12% 12% 12% 12% round 24px)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0% round 0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: "0.6em", rotateX: 40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
