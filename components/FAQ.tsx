"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Users,
  FileText,
  HelpCircle,
  Zap,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Plus,
} from "lucide-react";
import { faq, site } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;

// Reorder items to match the layout in the reference image when activeIndex is initially set to 2 (Kya main eligible hoon?)
// Visual order: Kitna time lagega -> Kitna paisa lagega -> Kya main eligible hoon -> Kya mera business chhota -> Documents kaise bheju
const getOrderedItems = () => {
  const items = [...faq.items];
  const order = [
    "time",      // Kitna time lagega?
    "paisa",     // Kitna paisa lagega hume?
    "eligible",  // Kya main eligible hoon?
    "chhota",    // Kya mera business chhota hai to bhi help milegi?
    "bheju",     // Documents kaise bheju?
    "office",    // Kya aap government office ho?
  ];

  const ordered: typeof faq.items[number][] = [];
  
  order.forEach((keyword) => {
    const found = items.find((item) =>
      item.question.toLowerCase().includes(keyword)
    );
    if (found) {
      ordered.push(found);
    }
  });

  // Append any items that were not matched
  items.forEach((item) => {
    if (!ordered.includes(item)) {
      ordered.push(item);
    }
  });

  return ordered;
};

// Helper to resolve card icons dynamically
function getCardIcon(question: string) {
  const q = question.toLowerCase();
  if (q.includes("eligible")) {
    return {
      type: "text",
      char: "?",
      icon: HelpCircle,
    };
  }
  if (q.includes("paisa") || q.includes("fee") || q.includes("cost")) {
    return {
      type: "text",
      char: "₹",
      icon: null,
    };
  }
  if (q.includes("time") || q.includes("duration") || q.includes("din")) {
    return {
      type: "lucide",
      icon: Clock,
    };
  }
  if (q.includes("chhota") || q.includes("help") || q.includes("chhoti")) {
    return {
      type: "lucide",
      icon: Users,
    };
  }
  if (q.includes("document") || q.includes("bheju") || q.includes("check")) {
    return {
      type: "lucide",
      icon: FileText,
    };
  }
  return {
    type: "text",
    char: "?",
    icon: HelpCircle,
  };
}

export default function FAQ() {
  const orderedItems = getOrderedItems();
  const total = orderedItems.length;

  // Initialize with index of "Kya main eligible hoon?" which is index 2 in our ordered list
  const [activeIndex, setActiveIndex] = useState(2);
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
        x = -24;
        y = 8;
        rotate = -5;
        scale = 0.95;
        zIndex = 25;
        opacity = 0.9;
      } else if (diff === 1) {
        x = 24;
        y = 8;
        rotate = 5;
        scale = 0.95;
        zIndex = 25;
        opacity = 0.9;
      } else if (diff === -2) {
        x = -46;
        y = 16;
        rotate = -10;
        scale = 0.9;
        zIndex = 20;
        opacity = 0.7;
      } else if (diff === 2) {
        x = 46;
        y = 16;
        rotate = 10;
        scale = 0.9;
        zIndex = 20;
        opacity = 0.7;
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

  // Find index of "Kya main eligible hoon?" to route to it on clicking Quick Answers
  const eligibleIndex = orderedItems.findIndex((item) =>
    item.question.toLowerCase().includes("eligible")
  );
  // Find index of paisa/fee card to route on clicking 100% updated
  const updatedIndex = orderedItems.findIndex((item) =>
    item.question.toLowerCase().includes("paisa")
  );

  return (
    <section
      id="faq"
      className="relative px-6 py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-paper via-[#FAF5EA] to-paper border-t border-border/10"
    >
      {/* Background Decorative Blobs & Circles in Theme Colors */}
      <svg
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
      </svg>

      <svg
        className="absolute -right-20 bottom-[10%] -z-10 w-80 h-80 opacity-35 text-border/30 pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle cx="150" cy="100" r="50" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="150" cy="100" r="80" strokeWidth="1.5" />
        <circle cx="150" cy="100" r="110" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

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

          <Reveal className="mb-4">
            <h2 className="relative inline-block font-display text-[32px] md:text-[46px] font-semibold leading-[1.15] text-ink px-8">
              {/* Decorative rays left */}
              <svg
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
              </svg>

              Sawal jo har{" "}
              <span className="relative inline-block font-handwriting text-marigold-dark px-1 italic">
                founder
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3 text-marigold"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2,8 C30,10 70,8 98,4 C70,6 30,8 2,10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              poochta hai

              {/* Decorative rays right */}
              <svg
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
              </svg>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl mx-auto text-sm md:text-base lg:text-lg text-slate leading-relaxed">
              {faq.sub}
            </p>
          </Reveal>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Feature List */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:px-12 lg:px-0">
            {/* Quick answers feature */}
            <button
              onClick={() => eligibleIndex !== -1 && setActiveIndex(eligibleIndex)}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/20 border border-transparent hover:border-marigold/20 hover:bg-white/60 transition-all duration-300 text-left group shadow-sm/50"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-marigold/[0.04] border border-marigold/20 flex items-center justify-center text-marigold-dark transition-all duration-300 group-hover:bg-marigold group-hover:text-ink group-hover:border-marigold shadow-sm">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-ink leading-tight transition-colors group-hover:text-marigold-dark">
                  Quick answers
                </h4>
                <p className="text-sm text-slate mt-1">in 2 minutes</p>
              </div>
            </button>

            {/* 100% updated feature */}
            <button
              onClick={() => updatedIndex !== -1 && setActiveIndex(updatedIndex)}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/20 border border-transparent hover:border-marigold/20 hover:bg-white/60 transition-all duration-300 text-left group shadow-sm/50"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-marigold/[0.04] border border-marigold/20 flex items-center justify-center text-marigold-dark transition-all duration-300 group-hover:bg-marigold group-hover:text-ink group-hover:border-marigold shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-ink leading-tight transition-colors group-hover:text-marigold-dark">
                  100% updated
                </h4>
                <p className="text-sm text-slate mt-1">as per latest rules</p>
              </div>
            </button>

            {/* Still confused feature */}
            <a
              href="#contact"
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/20 border border-transparent hover:border-marigold/20 hover:bg-white/60 transition-all duration-300 text-left group shadow-sm/50"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-marigold/[0.04] border border-marigold/20 flex items-center justify-center text-marigold-dark transition-all duration-300 group-hover:bg-marigold group-hover:text-ink group-hover:border-marigold shadow-sm">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-ink leading-tight transition-colors group-hover:text-marigold-dark">
                  Still confused?
                </h4>
                <p className="text-sm text-slate mt-1">Talk to our experts</p>
              </div>
            </a>
          </div>

          {/* Right Column - 3D Card Fan Deck / Carousel */}
          <div className="lg:col-span-8 relative flex flex-col items-center justify-center min-h-[380px] md:min-h-[480px]">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-radial-gradient from-marigold/5 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

            {/* Arrow & Handdrawn Label (desktop only) */}
            <div className="absolute -top-[12%] right-[10%] hidden xl:flex flex-col items-center select-none pointer-events-none z-20">
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
            </div>

            {/* Active/Carousel Deck Container */}
            <div className="relative w-full max-w-[320px] lg:max-w-none h-[400px] md:h-[440px] flex items-center justify-center">
              <AnimatePresence initial={false}>
                {orderedItems.map((item, idx) => {
                  const diff = getRelativeIndex(idx);
                  const isActive = diff === 0;
                  const cardIcon = getCardIcon(item.question);
                  const IconComponent = cardIcon.icon;

                  // Skip rendering cards that are far away in desktop mode to keep the fan tidy
                  if (!isMobile && Math.abs(diff) > 2) return null;

                  return (
                    <motion.div
                      key={item.question}
                      drag={isMobile ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(_, info) => {
                        const swipeThreshold = 40;
                        if (info.offset.x < -swipeThreshold) {
                          // Swipe left -> Next card
                          setActiveIndex((prev) => (prev + 1) % total);
                        } else if (info.offset.x > swipeThreshold) {
                          // Swipe right -> Previous card
                          setActiveIndex((prev) => (prev - 1 + total) % total);
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
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center items-center gap-3 mt-10 z-20">
              {orderedItems.map((_, idx) => (
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
            <div className="absolute right-[5%] -bottom-16 hidden lg:flex flex-col items-start select-none rotate-[-4deg] z-20">
              <span className="relative z-10 font-handwriting text-3xl font-bold text-ink/90">
                Har sawal ka
                <br />
                seedha jawab
                <span className="absolute -bottom-1 left-0 -right-2 h-4 bg-marigold/25 -z-10 rounded-lg transform skew-x-12 scale-y-75" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
