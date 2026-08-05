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
      // Mobile card layout (stacked or swipable side-by-side)
      return {
        x: `${diff * 96}%`,
        y: 0,
        rotate: 0,
        scale: active ? 1 : 0.9,
        zIndex: active ? 30 : 10,
        opacity: active ? 1 : 0.35,
        width: "100%",
        maxHeight: active ? 500 : 280,
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
      className="relative px-6 py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#FAF9FF] via-[#F5EFFF] to-[#FAF9FF] border-t border-indigo-50/50"
    >
      {/* Background Decorative Blobs & Circles */}
      <svg
        className="absolute -left-20 top-[20%] -z-10 w-96 h-96 opacity-40 text-indigo-200 pointer-events-none select-none"
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
        className="absolute -right-20 bottom-[10%] -z-10 w-80 h-80 opacity-35 text-indigo-200 pointer-events-none select-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle cx="150" cy="100" r="50" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="150" cy="100" r="80" strokeWidth="1.5" />
        <circle cx="150" cy="100" r="110" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Decorative Dot Grid */}
      <svg
        className="absolute bottom-10 left-10 -z-10 w-40 h-40 opacity-30 text-indigo-300 pointer-events-none select-none"
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
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-indigo-100 bg-white/80 backdrop-blur text-xs font-semibold text-indigo-600 shadow-sm">
              FAQ <span className="text-indigo-300">•</span> Quick answers
            </span>
          </Reveal>

          <Reveal className="mb-4">
            <h2 className="relative inline-block font-display text-[32px] md:text-[46px] font-semibold leading-[1.15] text-ink px-8">
              {/* Decorative rays left */}
              <svg
                className="absolute -left-4 md:-left-8 top-1 w-6 h-6 text-indigo-500/80 pointer-events-none select-none"
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
              <span className="relative inline-block font-handwriting text-indigo-600 px-1 italic">
                founder
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3 text-indigo-500/90"
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
                className="absolute -right-4 md:-right-8 top-0 w-6 h-6 text-indigo-500/80 pointer-events-none select-none"
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
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 border border-transparent hover:border-indigo-100 hover:bg-white/80 transition-all duration-300 text-left group"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-ink leading-tight transition-colors group-hover:text-indigo-600">
                  Quick answers
                </h4>
                <p className="text-sm text-slate mt-1">in 2 minutes</p>
              </div>
            </button>

            {/* 100% updated feature */}
            <button
              onClick={() => updatedIndex !== -1 && setActiveIndex(updatedIndex)}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 border border-transparent hover:border-indigo-100 hover:bg-white/80 transition-all duration-300 text-left group"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-ink leading-tight transition-colors group-hover:text-indigo-600">
                  100% updated
                </h4>
                <p className="text-sm text-slate mt-1">as per latest rules</p>
              </div>
            </button>

            {/* Still confused feature */}
            <a
              href="#contact"
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 border border-transparent hover:border-indigo-100 hover:bg-white/80 transition-all duration-300 text-left group"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-ink leading-tight transition-colors group-hover:text-indigo-600">
                  Still confused?
                </h4>
                <p className="text-sm text-slate mt-1">Talk to our experts</p>
              </div>
            </a>
          </div>

          {/* Right Column - 3D Card Fan Deck / Carousel */}
          <div className="lg:col-span-8 relative flex flex-col items-center justify-center min-h-[360px] md:min-h-[480px]">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-radial-gradient from-indigo-300/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

            {/* Arrow & Handdrawn Label (desktop only) */}
            <div className="absolute -top-[12%] right-[10%] hidden xl:flex flex-col items-center select-none pointer-events-none z-20">
              <span className="font-handwriting text-2xl font-bold text-indigo-950/80 rotate-[10deg] text-center leading-tight mb-1">
                Your doubts,
                <br />
                our clarity!
              </span>
              <svg
                className="w-14 h-14 text-indigo-600/90 -rotate-[15deg] -translate-x-2"
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
            <div className="relative w-full max-w-[320px] lg:max-w-none h-[440px] flex items-center justify-center">
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
                        const swipeThreshold = 50;
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
                      className={`absolute rounded-3xl p-6 md:p-8 flex flex-col items-center justify-between border select-none bg-white ${
                        isActive
                          ? "border-indigo-100/50 shadow-[0_8px_30px_rgb(30,62,114,0.12)] cursor-default"
                          : "border-gray-100/60 shadow-[0_4px_16px_rgba(18,41,77,0.06)] hover:shadow-lg cursor-pointer group"
                      }`}
                    >
                      {/* Top Icon Area */}
                      <div
                        className={`transition-all duration-300 flex items-center justify-center ${
                          isActive
                            ? "w-16 h-16 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-700 text-white shadow-md mb-4"
                            : "w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 mb-4 group-hover:bg-indigo-100"
                        }`}
                      >
                        {cardIcon.type === "text" ? (
                          <span
                            className={`font-bold leading-none ${
                              isActive ? "text-2xl" : "text-xl"
                            }`}
                          >
                            {cardIcon.char}
                          </span>
                        ) : (
                          IconComponent && (
                            <IconComponent
                              className={isActive ? "w-8 h-8" : "w-6 h-6"}
                            />
                          )
                        )}
                      </div>

                      {/* Question Title */}
                      <h3
                        className={`font-bold text-ink text-center leading-snug tracking-tight mb-2 ${
                          isActive ? "text-lg md:text-xl" : "text-sm md:text-base"
                        }`}
                      >
                        {item.question}
                      </h3>

                      {/* Description Answer (Active Card Only) */}
                      {isActive ? (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.25 }}
                          className="text-xs md:text-sm text-slate text-center leading-relaxed mb-5 line-clamp-6 px-1"
                        >
                          {item.answer}
                        </motion.p>
                      ) : null}

                      {/* Bottom Action Icon/Button */}
                      {isActive ? (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.2 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLearnMore();
                          }}
                          className="mt-auto px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                        >
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                      ) : (
                        <div className="mt-auto w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-indigo-300 group-hover:text-indigo-600 transition-all duration-300">
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
                      ? "w-3.5 h-3.5 bg-indigo-600 scale-110 shadow-sm"
                      : "w-2.5 h-2.5 bg-indigo-200 hover:bg-indigo-300 cursor-pointer"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Bottom-right Handwritten Slogan & Yellow Highlighter */}
            <div className="absolute right-[5%] -bottom-16 hidden lg:flex flex-col items-start select-none rotate-[-4deg] z-20">
              <span className="relative z-10 font-handwriting text-3xl font-bold text-indigo-950/90">
                Har sawal ka
                <br />
                seedha jawab
                <span className="absolute -bottom-1 left-0 -right-2 h-4 bg-yellow-300/40 -z-10 rounded-lg transform skew-x-12 scale-y-75" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
