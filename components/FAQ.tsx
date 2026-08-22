"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  Building2,
  Clock,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  Headphones,
  ArrowRight,
  Plus,
} from "lucide-react";
import { faq, site } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import {
  dramaticFadeLeft,
  flipIn,
  popIn,
  staggerDramatic,
} from "@/lib/motion";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;

type FaqItem = { question: string; answer: string };
type FaqData = {
  heading: string;
  sub: string;
  items: readonly FaqItem[];
};

// Reorder items to match the layout in the reference image when activeIndex is initially set to 2 (Kya main eligible hoon?)
// Visual order: Kitna time lagega -> Kitna paisa lagega -> Kya main eligible hoon -> Kya mera business chhota -> Documents kaise bheju
const getOrderedItems = (items: readonly FaqItem[], useLandingOrder: boolean) => {
  if (!useLandingOrder) return [...items];

  const order = [
    "time",      // Kitna time lagega?
    "paisa",     // Kitna paisa lagega hume?
    "eligible",  // Kya main eligible hoon?
    "chhota",    // Kya mera business chhota hai to bhi help milegi?
    "bheju",     // Documents kaise bheju?
    "office",    // Kya aap government office ho?
  ];

  const ordered: FaqItem[] = [];
  const pool = [...items];

  order.forEach((keyword) => {
    const found = pool.find((item) =>
      item.question.toLowerCase().includes(keyword)
    );
    if (found) {
      ordered.push(found);
    }
  });

  // Append any items that were not matched
  pool.forEach((item) => {
    if (!ordered.includes(item)) {
      ordered.push(item);
    }
  });

  return ordered;
};

const CAROUSEL_LIMIT = 5;

// Helper to resolve card icons dynamically — never a question-mark glyph
function getCardIcon(question: string) {
  const q = question.toLowerCase();
  if (
    q.includes("paisa") ||
    q.includes("fee") ||
    q.includes("cost") ||
    q.includes("costs")
  ) {
    return {
      type: "text" as const,
      char: "₹",
      icon: null,
    };
  }
  if (
    q.includes("time") ||
    q.includes("duration") ||
    q.includes("din") ||
    q.includes("how long") ||
    q.includes("quickly") ||
    q.includes("how soon")
  ) {
    return {
      type: "lucide" as const,
      icon: Clock,
    };
  }
  if (
    q.includes("chhota") ||
    q.includes("help") ||
    q.includes("chhoti") ||
    q.includes("foreign") ||
    q.includes("convert")
  ) {
    return {
      type: "lucide" as const,
      icon: Users,
    };
  }
  if (
    q.includes("document") ||
    q.includes("bheju") ||
    q.includes("check") ||
    q.includes("compliance") ||
    q.includes("file")
  ) {
    return {
      type: "lucide" as const,
      icon: FileText,
    };
  }
  if (
    q.includes("office") ||
    q.includes("visit") ||
    q.includes("noida") ||
    q.includes("walk")
  ) {
    return {
      type: "lucide" as const,
      icon: Building2,
    };
  }
  if (
    q.includes("reliable") ||
    q.includes("partner") ||
    q.includes("eligible") ||
    q.includes("structure")
  ) {
    return {
      type: "lucide" as const,
      icon: ShieldCheck,
    };
  }
  if (q.includes("more than one") || q.includes("start the")) {
    return {
      type: "lucide" as const,
      icon: Sparkles,
    };
  }
  return {
    type: "lucide" as const,
    icon: MessageCircle,
  };
}

export default function FAQ({ data }: { data?: FaqData }) {
  const source = data ?? faq;
  const useLandingOrder = !data;
  const orderedItems = getOrderedItems(source.items, useLandingOrder);
  const carouselItems = orderedItems.slice(0, CAROUSEL_LIMIT);
  const total = carouselItems.length;
  const reduce = useReducedMotion();

  // Landing FAQ opens on "eligible"; custom sets open on the first card
  const [activeIndex, setActiveIndex] = useState(useLandingOrder ? 2 : 0);
  const [isMobile, setIsMobile] = useState(true);

  // Monitor screen resize to adjust layouts dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Normalize relative index for the circular/loop fan deck
  const getRelativeIndex = (index: number) => {
    let diff = index - activeIndex;
    while (diff < -total / 2) diff += total;
    while (diff >= total / 2) diff -= total;
    return diff;
  };

  // Get responsive motion styling properties for each card based on its relative index
  const getCardStyles = (index: number) => {
    const diff = getRelativeIndex(index);
    const active = diff === 0;

    if (isMobile) {
      // Mobile card layout: Stacked deck of playing cards sneaking/fanning out from left and right
      let x = 0;
      let y = 0;
      let rotate = 0;
      let scale = 1;
      let zIndex = 10;
      let opacity = 1;

      if (diff === 0) {
        x = 0;
        y = 0;
        rotate = 0;
        scale = 1;
        zIndex = 30;
        opacity = 1;
      } else if (diff === -1) {
        x = -72;
        y = 10;
        rotate = -7;
        scale = 0.94;
        zIndex = 25;
        opacity = 0.92;
      } else if (diff === 1) {
        x = 72;
        y = 10;
        rotate = 7;
        scale = 0.94;
        zIndex = 25;
        opacity = 0.92;
      } else if (diff === -2) {
        x = -118;
        y = 20;
        rotate = -12;
        scale = 0.88;
        zIndex = 20;
        opacity = 0.72;
      } else if (diff === 2) {
        x = 118;
        y = 20;
        rotate = 12;
        scale = 0.88;
        zIndex = 20;
        opacity = 0.72;
      } else {
        // Cards that are hidden behind the stack
        x = 0;
        y = 24;
        rotate = 0;
        scale = 0.85;
        zIndex = 10;
        opacity = 0;
      }

      return {
        x,
        y,
        rotate,
        scale,
        zIndex,
        opacity,
        width: 250,
        height: 350,
      };
    }

    // Desktop 3D Fan layout configurations
    let x = 0;
    let y = 0;
    let rotate = 0;
    let scale = 1;
    let zIndex = 10;
    let opacity = 1;
    let width = 240;
    let height = 300;

    if (diff === 0) {
      x = 0;
      y = -20;
      rotate = 0;
      scale = 1.08;
      zIndex = 35;
      opacity = 1;
      width = 300;
      height = 440;
    } else if (diff === -1) {
      x = -155;
      y = 12;
      rotate = -6;
      scale = 0.94;
      zIndex = 25;
      opacity = 0.95;
      width = 240;
      height = 300;
    } else if (diff === 1) {
      x = 155;
      y = 12;
      rotate = 6;
      scale = 0.94;
      zIndex = 25;
      opacity = 0.95;
      width = 240;
      height = 300;
    } else if (diff === -2) {
      x = -285;
      y = 35;
      rotate = -12;
      scale = 0.85;
      zIndex = 15;
      opacity = 0.6;
      width = 240;
      height = 300;
    } else if (diff === 2) {
      x = 285;
      y = 35;
      rotate = 12;
      scale = 0.85;
      zIndex = 15;
      opacity = 0.6;
      width = 240;
      height = 300;
    } else {
      // Hidden cards in the deck background
      x = diff > 0 ? 420 : -420;
      y = 80;
      rotate = diff > 0 ? 20 : -20;
      scale = 0.7;
      zIndex = 5;
      opacity = 0;
      width = 240;
      height = 300;
    }

    return { x, y, rotate, scale, zIndex, opacity, width, height };
  };

  const handleLearnMore = () => {
    // Open WhatsApp support chat
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  // Safe navigation function for dot/arrows
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Find index of "Kya main eligible hoon?" to route to it on clicking Quick Answers
  const eligibleIndex = carouselItems.findIndex((item) =>
    item.question.toLowerCase().includes("eligible") ||
    item.question.toLowerCase().includes("structure")
  );
  // Find index of paisa/fee/cost card to route on clicking 100% updated
  const updatedIndex = carouselItems.findIndex((item) => {
    const q = item.question.toLowerCase();
    return q.includes("paisa") || q.includes("cost") || q.includes("fee");
  });

  return (
    <section
      id="faq"
      className="relative scroll-mt-8 overflow-hidden border-t border-border/10 bg-gradient-to-b from-paper via-[#FAF5EA] to-paper px-6 py-24 lg:py-28"
    >
      <dl className="sr-only">
        {orderedItems.map((item) => (
          <div key={item.question}>
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
      {!reduce ? <FloatingOrbs className="opacity-50" /> : null}
      {/* Background Decorative Blobs & Circles in Theme Colors */}
      <motion.svg
        animate={
          reduce
            ? undefined
            : {
                rotate: [0, 8, -4, 0],
                transition: { duration: 22, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="absolute -left-20 top-[20%] -z-10 w-96 h-96 opacity-40 text-border/30 pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle cx="50" cy="100" r="40" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="50" cy="100" r="70" strokeWidth="1.5" />
        <circle cx="50" cy="100" r="100" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="50" cy="100" r="130" strokeWidth="2" />
      </motion.svg>

      <motion.svg
        animate={
          reduce
            ? undefined
            : {
                rotate: [0, -10, 6, 0],
                transition: { duration: 26, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="absolute -right-20 bottom-[10%] -z-10 w-80 h-80 opacity-35 text-border/30 pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle cx="150" cy="100" r="50" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="150" cy="100" r="80" strokeWidth="1.5" />
        <circle cx="150" cy="100" r="110" strokeWidth="1" strokeDasharray="4 4" />
      </motion.svg>

      {/* Decorative Dot Grid in Warm Accent Color */}
      <svg
        className="absolute bottom-10 left-10 -z-10 w-40 h-40 opacity-[0.25] text-[#C4B79B] pointer-events-none select-none"
        fill="currentColor"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="faq-dot-grid"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faq-dot-grid)" />
      </svg>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16 relative">
          <Reveal className="inline-flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-marigold/30 bg-marigold/[0.04] text-xs font-bold text-marigold-dark shadow-sm">
              FAQ <span className="text-marigold/60">•</span> Quick answers
            </span>
          </Reveal>

          <div className="mb-4 relative inline-block px-8">
            <motion.svg
              animate={
                reduce
                  ? undefined
                  : {
                      rotate: [0, -12, 8, 0],
                      scale: [1, 1.1, 1],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className="absolute -left-4 md:-left-8 top-1 w-6 h-6 text-marigold pointer-events-none select-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="20" y1="12" x2="6" y2="7" />
              <line x1="20" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="8" y2="18" />
            </motion.svg>

            <h2 className="relative inline-block font-display text-[32px] md:text-[46px] font-semibold leading-[1.15] text-ink">
              {useLandingOrder ? (
                <>
                  <TextReveal
                    as="span"
                    text="Sawal Jo Har"
                    className="inline"
                  />{" "}
                  <span className="relative inline-block font-handwriting text-marigold-dark px-1 italic">
                    Founder
                    <motion.svg
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                      className="absolute -bottom-2.5 left-0 w-full h-3 text-marigold"
                      viewBox="0 0 100 12"
                      fill="none"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M2,8 C30,10 70,8 98,4 C70,6 30,8 2,10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.35 }}
                      />
                    </motion.svg>
                  </span>{" "}
                  <TextReveal as="span" text="Poochta Hai" className="inline" />
                </>
              ) : (
                <TextReveal as="span" text={source.heading} className="inline" />
              )}
            </h2>

            <motion.svg
              animate={
                reduce
                  ? undefined
                  : {
                      rotate: [0, 12, -8, 0],
                      scale: [1, 1.1, 1],
                      transition: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4,
                      },
                    }
              }
              className="absolute -right-4 md:-right-8 top-0 w-6 h-6 text-marigold pointer-events-none select-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="4" y1="12" x2="18" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="12" x2="16" y2="18" />
            </motion.svg>
          </div>

          <Reveal delay={0.1}>
            <p className="max-w-xl mx-auto text-sm md:text-base lg:text-lg text-slate leading-relaxed">
              {source.sub}
            </p>
          </Reveal>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Feature List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerDramatic}
            className="lg:col-span-4 flex flex-col gap-6 md:px-12 lg:px-0"
            style={{ perspective: 900 }}
          >
            {/* Quick answers feature */}
            <motion.button
              variants={dramaticFadeLeft}
              whileHover={reduce ? undefined : { x: 8, scale: 1.02 }}
              onClick={() => eligibleIndex !== -1 && setActiveIndex(eligibleIndex)}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/20 border border-transparent hover:border-marigold/20 hover:bg-white/60 transition-all duration-300 text-left group shadow-sm/50"
            >
              <motion.div
                whileHover={reduce ? undefined : { rotate: 18, scale: 1.12 }}
                className="w-12 h-12 shrink-0 rounded-full bg-marigold/[0.04] border border-marigold/20 flex items-center justify-center text-marigold-dark transition-all duration-300 group-hover:bg-marigold group-hover:text-ink group-hover:border-marigold shadow-sm"
              >
                <Zap className="w-6 h-6" />
              </motion.div>
              <div>
                <h4 className="text-base font-bold text-ink leading-tight transition-colors group-hover:text-marigold-dark">
                  Quick answers
                </h4>
                <p className="text-sm text-slate mt-1">in 2 minutes</p>
              </div>
            </motion.button>

            {/* 100% updated feature */}
            <motion.button
              variants={flipIn}
              whileHover={reduce ? undefined : { x: 8, scale: 1.02 }}
              onClick={() => updatedIndex !== -1 && setActiveIndex(updatedIndex)}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/20 border border-transparent hover:border-marigold/20 hover:bg-white/60 transition-all duration-300 text-left group shadow-sm/50"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                whileHover={reduce ? undefined : { rotate: -14, scale: 1.12 }}
                className="w-12 h-12 shrink-0 rounded-full bg-marigold/[0.04] border border-marigold/20 flex items-center justify-center text-marigold-dark transition-all duration-300 group-hover:bg-marigold group-hover:text-ink group-hover:border-marigold shadow-sm"
              >
                <ShieldCheck className="w-6 h-6" />
              </motion.div>
              <div>
                <h4 className="text-base font-bold text-ink leading-tight transition-colors group-hover:text-marigold-dark">
                  100% updated
                </h4>
                <p className="text-sm text-slate mt-1">as per latest rules</p>
              </div>
            </motion.button>

            {/* Still confused feature */}
            <motion.a
              variants={popIn}
              whileHover={reduce ? undefined : { x: 8, scale: 1.02 }}
              href="#contact"
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/20 border border-transparent hover:border-marigold/20 hover:bg-white/60 transition-all duration-300 text-left group shadow-sm/50"
            >
              <motion.div
                whileHover={reduce ? undefined : { rotate: 12, scale: 1.12 }}
                className="w-12 h-12 shrink-0 rounded-full bg-marigold/[0.04] border border-marigold/20 flex items-center justify-center text-marigold-dark transition-all duration-300 group-hover:bg-marigold group-hover:text-ink group-hover:border-marigold shadow-sm"
              >
                <Headphones className="w-6 h-6" />
              </motion.div>
              <div>
                <h4 className="text-base font-bold text-ink leading-tight transition-colors group-hover:text-marigold-dark">
                  Still confused?
                </h4>
                <p className="text-sm text-slate mt-1">Talk to our experts</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Column - 3D Card Fan Deck / Carousel */}
          <div className="lg:col-span-8 relative flex flex-col items-center justify-center min-h-[380px] md:min-h-[480px]">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-radial-gradient from-marigold/5 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

            {/* Arrow & Handdrawn Label (desktop only) */}
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 10 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 14 }}
              className="absolute -top-[12%] right-[10%] hidden xl:flex flex-col items-center select-none pointer-events-none z-20"
            >
              <motion.div
                animate={
                  reduce
                    ? undefined
                    : {
                        y: [0, -6, 0],
                        transition: {
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                }
                className="flex flex-col items-center"
              >
                <span className="font-handwriting text-2xl font-bold text-ink/75 rotate-[10deg] text-center leading-tight mb-1">
                  Your doubts,
                  <br />
                  our clarity!
                </span>
                <svg
                  className="w-14 h-14 text-marigold/80 -rotate-[15deg] -translate-x-2"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M70,10 C50,45 25,60 15,65" />
                  <path d="M12,52 C13,57 15,65 15,65 L26,62" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Active/Carousel Deck Container */}
            <div className="relative flex h-[400px] w-full max-w-[420px] items-center justify-center overflow-visible md:h-[440px] lg:max-w-none">
              <AnimatePresence initial={false}>
                {carouselItems.map((item, idx) => {
                  const diff = getRelativeIndex(idx);
                  const isActive = diff === 0;
                  const cardIcon = getCardIcon(item.question);
                  const IconComponent = cardIcon.icon;

                  // Skip rendering cards that are far away in desktop mode to keep the fan tidy
                  if (!isMobile && Math.abs(diff) > 2) return null;

                  return (
                    <motion.div
                      key={item.question}
                      drag={isMobile && isActive ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(_, info) => {
                        const swipeThreshold = 40;
                        if (info.offset.x < -swipeThreshold) {
                          goNext();
                        } else if (info.offset.x > swipeThreshold) {
                          goPrev();
                        }
                      }}
                      onClick={() => {
                        if (!isActive) setActiveIndex(idx);
                      }}
                      animate={getCardStyles(idx)}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 28,
                      }}
                      className={`absolute rounded-3xl p-5 md:p-8 flex flex-col items-center justify-between border select-none bg-white ${
                        isActive
                          ? "border-marigold/30 shadow-[0_8px_30px_rgba(18,41,77,0.08)] cursor-default"
                          : "border-border/20 shadow-[0_4px_16px_rgba(18,41,77,0.04)] hover:shadow-lg cursor-pointer group"
                      }`}
                    >
                      {/* Top Icon Area */}
                      <div
                        className={`transition-all duration-300 flex items-center justify-center shrink-0 aspect-square ${
                          isActive
                            ? "w-16 h-16 rounded-full bg-gradient-to-b from-marigold to-marigold-dark text-white shadow-md mb-3 md:mb-4"
                            : "w-12 h-12 rounded-full bg-paper-deep/80 text-ink/70 mb-3 md:mb-4 group-hover:bg-paper-deep"
                        }`}
                      >
                        {cardIcon.type === "text" ? (
                          <span
                            className={`font-bold leading-none shrink-0 ${
                              isActive ? "text-2xl" : "text-xl"
                            }`}
                          >
                            {cardIcon.char}
                          </span>
                        ) : (
                          IconComponent && (
                            <IconComponent
                              className={`shrink-0 ${isActive ? "w-8 h-8" : "w-6 h-6"}`}
                            />
                          )
                        )}
                      </div>

                      {/* Question Title */}
                      <h3
                        className={`font-bold text-ink text-center leading-snug tracking-tight mb-2 ${
                          isActive ? "text-base md:text-xl" : "text-xs md:text-base"
                        }`}
                      >
                        {item.question}
                      </h3>

                      {/* Description Answer (Active Card Only) */}
                      {isActive && (
                        <p className="text-[11px] md:text-sm text-slate text-center leading-relaxed mb-4 px-1 line-clamp-6">
                          {item.answer}
                        </p>
                      )}

                      {/* Bottom Action Icon/Button */}
                      {isActive ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLearnMore();
                          }}
                          className="mt-auto px-6 py-2.5 rounded-full bg-ink hover:bg-charcoal text-paper font-semibold text-[10px] md:text-xs flex items-center gap-1.5 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer shrink-0"
                        >
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <div className="mt-auto w-8 h-8 rounded-full border border-border/80 text-slate flex items-center justify-center group-hover:border-marigold group-hover:text-marigold transition-all duration-300 shrink-0">
                          <Plus className="w-4 h-4" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {isMobile && total > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Previous question"
                    onClick={goPrev}
                    className="absolute inset-y-10 left-0 z-40 w-[22%] cursor-pointer lg:hidden"
                  />
                  <button
                    type="button"
                    aria-label="Next question"
                    onClick={goNext}
                    className="absolute inset-y-10 right-0 z-40 w-[22%] cursor-pointer lg:hidden"
                  />
                </>
              ) : null}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center items-center gap-3 mt-10 z-20">
              {carouselItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-3.5 h-3.5 bg-marigold scale-110 shadow-sm"
                      : "w-2.5 h-2.5 bg-paper-deep hover:bg-border cursor-pointer"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Bottom-right Handwritten Slogan & Yellow Highlighter */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 14 }}
              className="absolute right-[5%] -bottom-16 hidden lg:flex flex-col items-start select-none z-20"
            >
              <span className="relative z-10 font-handwriting text-3xl font-bold text-ink/90">
                Har sawal ka
                <br />
                seedha jawab
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-1 left-0 -right-2 h-4 origin-left bg-marigold/25 -z-10 rounded-lg transform skew-x-12 scale-y-75"
                />
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
