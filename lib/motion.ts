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

export const springDramatic = {
  type: "spring" as const,
  stiffness: 90,
  damping: 14,
  mass: 0.9,
};

export const springSnap = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
  mass: 0.7,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: easeOutExpo },
};

/** Bigger travel + blur for hero-level entrances */
export const dramaticFadeUp: Variants = {
  hidden: { opacity: 0, y: 72, filter: "blur(14px)", scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
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

export const dramaticFadeLeft: Variants = {
  hidden: { opacity: 0, x: -90, rotate: -4, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: springDramatic,
  },
};

export const dramaticFadeRight: Variants = {
  hidden: { opacity: 0, x: 90, rotate: 4, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: springDramatic,
  },
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

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.72, y: 36, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: springSnap,
  },
};

export const flipIn: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 55,
    y: 48,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
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

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.18,
    clipPath: "inset(18% 18% 18% 18% round 32px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0% round 0px)",
    transition: { duration: 1.25, ease: [0.16, 1, 0.3, 1] },
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

export const staggerDramatic: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
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

export const letterRevealExtreme: Variants = {
  hidden: { opacity: 0, y: "1.1em", rotateX: 70, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};
