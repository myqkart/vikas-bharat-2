"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  Building2,
  Store,
  FileText,
  IndianRupee,
  Check,
  ClipboardList,
  TrendingUp,
  Handshake,
  Scale,
  ArrowUpRight,
  ShieldAlert,
} from "lucide-react";
import { services } from "@/lib/content";
import { photos } from "@/lib/photos";

// Helper function to map content icon strings to Lucide icon components
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "building":
      return Building2;
    case "store":
      return Store;
    case "file":
      return FileText;
    case "rupee":
      return IndianRupee;
    case "check":
      return Check;
    case "clipboard":
      return ClipboardList;
    case "growth":
      return TrendingUp;
    case "handshake":
      return Handshake;
    case "scale":
      return Scale;
    default:
      return FileText;
  }
};

// Curated secondary images that tell a human narrative story behind each service
const secondaryImagesMap = [
  photos.stepPaperwork, // Start a Business -> Filling incorporation details
  photos.stepMoney,     // Get a Loan -> Sanctioned ledger / capital credit
  photos.heroMeeting,   // Government Grant -> Matching a scheme with business owners
  photos.stepMatch,     // Licence & Certificate -> Official verification checks
  photos.heroShopkeeper,// Grow Your Business -> Happy small business shopkeeper
  photos.stepCall,      // Legal Help -> Consultations and documentation reviews
];

// Target labels mapping for editorial clarity
const targetAudienceMap = [
  "Proprietors, LLPs, Private Limited Founders",
  "MSMEs, Retailers, Manufacturing Units",
  "Startup India Applicants, Mudra subsidy seekers",
  "Food Outlets, Exporters, Trade Outfits",
  "Franchises, Branch owners, Local trade desks",
  "Agreements, compliance reviews, small teams",
];

export default function AboutServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll progress of the entire Services container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background text drift animation
  const xOpportunitiesDrift = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Radial ambient glows corresponding to active index (to change background aura color smoothly)
  const glowColors = [
    "rgba(30, 62, 114, 0.08)",   // Indigo glow for Registration
    "rgba(245, 166, 35, 0.09)",  // Marigold glow for Loans
    "rgba(29, 131, 72, 0.08)",   // Success Green glow for Grants
    "rgba(30, 62, 114, 0.07)",   // Indigo glow for Certificates
    "rgba(217, 140, 15, 0.10)",  // Marigold dark glow for Growth
    "rgba(34, 38, 46, 0.08)",    // Charcoal glow for Legal
  ];

  // Set active index based on scroll progress segment divisions (0 to 5)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalPanels = services.items.length;
    const currentIdx = Math.min(Math.floor(latest * totalPanels), totalPanels - 1);
    setActiveIndex(currentIdx);
  });

  // Handle sidebar navigation clicks to scroll directly to the correct section
  const handleScrollToPanel = (index: number) => {
    panelRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="relative bg-paper/60 border-t border-border/40">
      
      {/* ========================================================
         ENTRY VIEWPORT: INTRO MANIFESTO
         ======================================================== */}
      <section className="relative px-6 py-24 lg:py-32 overflow-hidden bg-paper noise-overlay border-b border-border/20">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="gridIntro" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--color-ink)" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#gridIntro)" />
          </svg>
        </div>

        {/* Ambient background glow inside entry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-marigold/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-indigo">
            <span className="h-2 w-2 rounded-full bg-marigold animate-pulse" />
            THE GROWTH BLUEPRINT
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl font-black text-ink leading-tight max-w-4xl tracking-tight">
            The Infrastructure of <span className="font-serif italic text-marigold-dark font-normal">Bharat's Ambition.</span>
          </h2>
          <p className="mt-6 text-slate max-w-2xl text-base lg:text-lg leading-relaxed font-medium">
            From a single registration to a central grant match, we clear the paperwork pathways so founders can build. No hidden desks, no legal jargon.
          </p>
        </div>
      </section>

      {/* ========================================================
         MAIN SERVICES CONTAINER (PINNED ON DESKTOP)
         ======================================================== */}
      <div
        ref={containerRef}
        id="about-services"
        className="relative bg-paper noise-overlay"
      >
        {isDesktop ? (
          /* ========================================================
             DESKTOP VERSION: STICKY VIEWPORT & NATURAL SCROLL ROW
             ======================================================== */
          <div className="relative w-full flex gap-16 px-16 xl:px-24">
            
            {/* Background Ambient Mesh Glows */}
            <div className="absolute inset-0 pointer-events-none -z-30 transition-all duration-700">
              {glowColors.map((color, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 opacity-0 transition-opacity duration-1000 blur-[130px]"
                  style={{
                    background: `radial-gradient(circle at 35% 50%, ${color}, transparent 65%)`,
                    opacity: activeIndex === idx ? 1 : 0,
                  }}
                />
              ))}
            </div>

            {/* Dotted Grid Background Canvas */}
            <div className="absolute inset-0 opacity-[0.022] pointer-events-none select-none -z-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="desktopServicesGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="var(--color-ink)" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#desktopServicesGrid)" />
              </svg>
            </div>

            {/* Giant Outlined Drifting Background Text "OPPORTUNITIES" */}
            <motion.div
              className="absolute bottom-[8%] left-[5%] select-none pointer-events-none -z-20 font-display text-[12vw] font-black uppercase tracking-[0.2em] text-transparent opacity-[0.02]"
              style={{ WebkitTextStroke: "1px var(--color-ink)", x: xOpportunitiesDrift }}
            >
              GROWTH
            </motion.div>

            {/* Background Continuous Opportunity Growth SVG Line */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none -z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Static faint dashed guide line */}
              <path
                d="M 5 85 C 20 85, 35 70, 50 50 C 65 30, 80 15, 95 15"
                stroke="var(--color-border)"
                strokeWidth="0.1"
                strokeDasharray="1 2"
                fill="none"
              />
              {/* Animated marigold drawing curve linked to scroll */}
              <motion.path
                d="M 5 85 C 20 85, 35 70, 50 50 C 65 30, 80 15, 95 15"
                stroke="var(--color-marigold)"
                strokeWidth="0.2"
                strokeLinecap="round"
                fill="none"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>

            {/* LEFT SIDE: Pinned Visual Frame Container */}
            <div className="w-[42%] h-screen sticky top-0 flex items-center justify-center">
              <div className="relative w-full h-[65vh] max-w-[420px] select-none pointer-events-none">
                
                {/* 6 Image collages, cross-faded using activeIndex */}
                {services.items.map((item, idx) => {
                  const isCurrent = activeIndex === idx;
                  return (
                    <div
                      key={item.slug}
                      className="absolute inset-0 transition-all duration-1000 ease-in-out"
                      style={{
                        opacity: isCurrent ? 1 : 0,
                        transform: isCurrent ? "scale(1) translateY(0px)" : "scale(0.95) translateY(20px)",
                        filter: isCurrent ? "blur(0px)" : "blur(4px)",
                      }}
                    >
                      {/* Frame Decorative Blueprint Stamp Seal background */}
                      <div className="absolute -top-12 -left-12 w-[160px] h-[160px] border border-ink/[0.04] rounded-full flex items-center justify-center p-3 animate-spin [animation-duration:40s]">
                        <svg className="w-full h-full text-ink/[0.04]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                          <circle cx="50" cy="50" r="48" strokeDasharray="3 3" />
                          <circle cx="50" cy="50" r="38" />
                          <path d="M 50 2 L 50 98 M 2 50 L 98 50" strokeWidth="0.5" />
                        </svg>
                      </div>

                      {/* Primary Arched Image Portal */}
                      <div className="absolute left-0 top-0 w-[80%] h-full rounded-t-[180px] rounded-b-[18px] overflow-hidden border border-border bg-paper p-2 shadow-raised transition-transform duration-[1200ms] ease-out">
                        <div className="relative w-full h-full rounded-t-[172px] rounded-b-[10px] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={`${item.title} primary`}
                            fill
                            className="object-cover transition-transform duration-[2000ms]"
                            style={{ transform: isCurrent ? "scale(1)" : "scale(1.08)" }}
                            sizes="400px"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                        </div>
                      </div>

                      {/* Secondary Overlapping Document Image (offset with depth) */}
                      <div className="absolute right-0 bottom-6 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden border-[6px] border-paper bg-paper shadow-raised transition-transform duration-[1500ms] ease-out flex p-1">
                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                          <Image
                            src={secondaryImagesMap[idx]}
                            alt={`${item.title} secondary`}
                            fill
                            className="object-cover"
                            sizes="200px"
                          />
                          <div className="absolute inset-0 bg-ink/10" />
                        </div>
                      </div>

                      {/* Micro label stamp */}
                      <div className="absolute -bottom-8 left-4 font-mono text-[8px] tracking-widest text-slate/40 flex items-center gap-2">
                        <span>DESK · AHMEDABAD</span>
                        <span>•</span>
                        <span>EST. 2016</span>
                      </div>
                    </div>
                  );
                })}

                {/* Sidebar Interactive Pagination Control */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20 font-mono text-[9px] text-slate/40">
                  {services.items.map((item, idx) => {
                    const isCurrent = activeIndex === idx;
                    return (
                      <button
                        key={item.slug}
                        onClick={() => handleScrollToPanel(idx)}
                        className="flex items-center gap-3 text-left transition-all duration-300 group cursor-pointer outline-none border-0 bg-transparent py-1"
                        aria-label={item.title}
                      >
                        <span className={`w-2 h-2 rounded-full border border-marigold transition-all duration-300 ${
                          isCurrent ? "bg-marigold scale-150" : "bg-transparent scale-100 group-hover:bg-marigold/40"
                        }`} />
                        <span className={`tracking-widest transition-all duration-300 ${
                          isCurrent ? "text-ink font-bold translate-x-0 opacity-100" : "opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
                        }`}>
                          {item.title.toUpperCase()}
                        </span>
                      </button>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* RIGHT SIDE: Scrolling Panels (Full h-screen) */}
            <div className="w-[50%] flex flex-col pl-4">
              {services.items.map((item, idx) => {
                const isCurrent = activeIndex === idx;
                return (
                  <div
                    key={item.slug}
                    ref={(el) => {
                      panelRefs.current[idx] = el;
                    }}
                    className="h-screen flex flex-col justify-center py-16"
                  >
                    <div
                      className="transition-all duration-1000 ease-out"
                      style={{
                        opacity: isCurrent ? 1 : 0.2,
                        transform: isCurrent ? "translateY(0)" : "translateY(16px)",
                        filter: isCurrent ? "blur(0px)" : "blur(1.5px)",
                      }}
                    >
                      {/* Micro-UI section number */}
                      <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-indigo/60 block mb-2 border-l border-marigold pl-3">
                        SERVICE
                      </span>

                      {/* Main Typography Title */}
                      <h3 className="font-display text-[44px] xl:text-[54px] font-extrabold text-ink leading-tight tracking-tight mt-1">
                        {item.title}
                      </h3>

                      {/* Bilingual Subtitle (Hindi tagline) */}
                      <p className="font-handwriting text-2xl text-marigold-dark tracking-wide mt-1.5 font-bold">
                        {item.subtitle}
                      </p>

                      {/* Service Summary Text */}
                      <p className="mt-4 text-slate text-sm xl:text-base leading-relaxed font-medium max-w-lg">
                        {item.summary}
                      </p>

                      {/* Outcomes (Benefits list styled as premium ledger rows) */}
                      <div className="mt-8 border-t border-border/40 divide-y divide-border/30 max-w-lg">
                        {item.benefits.map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="py-3.5 flex items-start gap-4 text-xs font-semibold text-charcoal leading-relaxed group"
                          >
                            <span className="text-marigold shrink-0 mt-0.5 font-bold text-sm">✦</span>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Blueprint Metadata Grid (Eligibility & Timeline details) */}
                      <div className="grid grid-cols-3 border border-border/70 rounded-xl bg-white/40 backdrop-blur-md overflow-hidden mt-8 text-[11px] text-ink font-mono font-bold max-w-lg shadow-sm divide-x divide-border/60">
                        <div className="p-3.5 flex flex-col justify-between">
                          <div className="text-[9px] font-semibold text-slate/50 mb-1">TIMELINE</div>
                          <span className="leading-tight">{item.timeline.split(" ")[0]}</span>
                        </div>
                        <div className="p-3.5 flex flex-col justify-between">
                          <div className="text-[9px] font-semibold text-slate/50 mb-1">DOCUMENTS</div>
                          <span className="leading-tight">{item.documents.length} Required</span>
                        </div>
                        <div className="p-3.5 flex flex-col justify-between">
                          <div className="text-[9px] font-semibold text-slate/50 mb-1">BUILT FOR</div>
                          <span className="leading-tight truncate text-[10px]" title={targetAudienceMap[idx]}>
                            {targetAudienceMap[idx].split(",")[0]}
                          </span>
                        </div>
                      </div>

                      {/* Secondary metadata toggle panel */}
                      <div className="mt-6 flex flex-col gap-2 max-w-lg bg-paper-deep/20 border border-border/40 rounded-xl p-4">
                        <div className="text-[9px] font-mono font-bold text-slate/50 tracking-wider">PRIMARY DOCUMENTS NEEDED:</div>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                          {item.documents.slice(0, 4).map((doc, docIdx) => (
                            <li key={docIdx} className="text-[10px] font-semibold text-charcoal flex gap-1.5 items-start">
                              <span className="text-slate font-bold shrink-0">•</span>
                              <span className="truncate leading-tight" title={doc}>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ) : (
          /* ========================================================
             MOBILE VERSION: STAGGERED EDITORIAL VERTICAL FEED
             ======================================================== */
          <div className="px-6 py-16 max-w-[640px] mx-auto flex flex-col gap-20">
            {services.items.map((item, idx) => {
              const Icon = getIcon(item.includes[0]?.icon || "file");
              return (
                <div key={item.slug} className="flex flex-col border-b border-border/20 last:border-b-0 pb-16 last:pb-0">
                  
                  {/* Visual Portrait Stamp Collage */}
                  <div className="relative w-full h-[260px] rounded-2xl overflow-hidden mb-8 shadow-raised border border-border bg-paper p-1.5">
                    <div className="relative w-full h-full rounded-[10px] overflow-hidden" style={{ borderRadius: idx % 2 === 0 ? "80px 10px 80px 10px" : "10px 80px 10px 80px" }}>
                      <Image
                        src={item.image}
                        alt={`${item.title} image`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, 500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-paper/95 border border-border px-2.5 py-1.5 rounded-lg shadow-sm text-[8px] font-mono tracking-widest text-ink font-bold flex items-center gap-1.5">
                      <Icon size={9} className="text-marigold" />
                      <span>SERVICE 0{idx + 1}</span>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="flex flex-col items-start px-1">
                    {/* Title */}
                    <h3 className="font-display text-2xl font-black text-ink leading-tight">
                      {item.title}
                    </h3>
                    
                    {/* Bilingual tagline */}
                    <p className="font-handwriting text-xl text-marigold-dark mt-1 font-bold">
                      {item.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-slate font-sans text-xs mt-3 leading-relaxed font-semibold">
                      {item.summary}
                    </p>

                    {/* Benefits List */}
                    <div className="mt-6 border-t border-border/30 divide-y divide-border/20 w-full">
                      {item.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="py-2.5 flex items-start gap-3 text-[11px] font-bold text-charcoal leading-relaxed">
                          <span className="text-marigold shrink-0 mt-0.5">•</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mobile Metadata Grid */}
                    <div className="grid grid-cols-3 border border-border/60 rounded-xl bg-white/40 backdrop-blur-sm overflow-hidden mt-6 text-[10px] text-ink font-mono font-bold w-full shadow-sm divide-x divide-border/60">
                      <div className="p-3 text-center">
                        <div className="text-[8px] font-semibold text-slate/50 mb-0.5">TIMELINE</div>
                        <span>{item.timeline.split(" ")[0]}</span>
                      </div>
                      <div className="p-3 text-center">
                        <div className="text-[8px] font-semibold text-slate/50 mb-0.5">PAPERS</div>
                        <span>{item.documents.length} Required</span>
                      </div>
                      <div className="p-3 text-center">
                        <div className="text-[8px] font-semibold text-slate/50 mb-0.5">TARGET</div>
                        <span className="truncate block max-w-full text-[9px]">{targetAudienceMap[idx].split(" ")[0]}</span>
                      </div>
                    </div>

                    {/* Mobile document list */}
                    <div className="mt-4 w-full bg-paper-deep/15 border border-border/30 rounded-xl p-3 text-[10px]">
                      <div className="font-mono font-bold text-slate/50 tracking-wider mb-2 text-[8px]">PRIMARY PAPERS NEEDED:</div>
                      <ul className="space-y-1">
                        {item.documents.slice(0, 3).map((doc, docIdx) => (
                          <li key={docIdx} className="font-semibold text-charcoal flex gap-1.5 items-start">
                            <span className="text-slate font-bold shrink-0">-</span>
                            <span className="leading-tight">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ========================================================
         SECTION EXIT: CONVERGENCE POINT
         ======================================================== */}
      <section className="relative px-6 py-20 bg-paper-deep/30 border-t border-border/20 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="gridExit" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-ink)" strokeWidth="0.8" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#gridExit)" />
          </svg>
        </div>

        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-slate/50 uppercase">
            PATHWAY RESOLVED
          </span>
          <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-ink leading-snug">
            Your vision deserves a dedicated desk.
          </h3>
          <p className="mt-3 text-slate text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            We operate in Ahmedabad, Jaipur, Delhi NCR, and Hyderabad — supporting promoters from first query on WhatsApp to money in bank or licence in hand.
          </p>
        </div>
      </section>
    </div>
  );
}
