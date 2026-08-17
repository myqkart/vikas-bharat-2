"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  Compass,
  PhoneCall,
  Users,
  FolderOpen,
  Search,
  FileCheck2,
  Building,
  BadgeAlert,
  Coins,
  ArrowUpRight,
  Plus,
  Check
} from "lucide-react";
import { photos } from "@/lib/photos";
import { site } from "@/lib/content";

const journeyWhatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hello, I have reviewed the process and want to consult an expert.",
)}`;

// Step structure definition
interface JourneyStep {
  num: string;
  title: string;
  titleHindi: string;
  caption: string;
  detail: string;
  emotion: string;
  image: string;
  detailImage: string;
  status: string;
  progress: string;
  icon: React.ComponentType<any>;
  glowColor: string;
}

// 8 steps representing the customer journey from possibility to outcome
const journeySteps: JourneyStep[] = [
  {
    num: "01",
    title: "Inquiry",
    titleHindi: "पूछताछ",
    caption: "First contact. No friction.",
    detail: "Reach out via WhatsApp or our web desk. Share your baseline business idea and vision in plain Hindi or English.",
    emotion: "Uncertainty",
    image: photos.stepCall,
    detailImage: photos.aboutOffice,
    status: "STATUS / INITIALIZING",
    progress: "12.5%",
    icon: PhoneCall,
    glowColor: "rgba(30, 62, 114, 0.14)" // Deep Indigo
  },
  {
    num: "02",
    title: "Free Consultation",
    titleHindi: "परामर्श",
    caption: "2-minute discovery call.",
    detail: "Speak directly with a dedicated scheme advisor. We map your funding, licence, or registration needs against government and private credit options.",
    emotion: "Discovery",
    image: photos.heroMeeting,
    detailImage: photos.badgeRating,
    status: "STATUS / SCHEME_MATCH",
    progress: "25.0%",
    icon: Compass,
    glowColor: "rgba(245, 166, 35, 0.12)" // Marigold
  },
  {
    num: "03",
    title: "Document Collection",
    titleHindi: "दस्तावेज",
    caption: "Zero-hassle checklist.",
    detail: "Receive a minimal checklist on WhatsApp. Share basic KYC and financials — our desk screens them for compliance so you don't file twice.",
    emotion: "Structure",
    image: photos.badgeMsme,
    detailImage: photos.seoTrademark,
    status: "STATUS / AUDIT_READY",
    progress: "37.5%",
    icon: FolderOpen,
    glowColor: "rgba(34, 38, 46, 0.12)" // Charcoal
  },
  {
    num: "04",
    title: "Eligibility Check",
    titleHindi: "पात्रता",
    caption: "Audited against 120+ schemes.",
    detail: "Our team cross-references your profile against active programs (Mudra, PMEGP, Startup India, subsidies) and ranks realistic approval odds.",
    emotion: "Clarity",
    image: photos.stepMatch,
    detailImage: photos.seoUdyam,
    status: "STATUS / CHECKING_FIT",
    progress: "50.0%",
    icon: Search,
    glowColor: "rgba(29, 131, 72, 0.12)" // Success Green
  },
  {
    num: "05",
    title: "Application Filing",
    titleHindi: "आवेदन",
    caption: "We compile the file.",
    detail: "We draft detailed project reports (DPR), assemble bank dossiers, and fill registration forms. You review and sign — we handle portal submissions.",
    emotion: "Progress",
    image: photos.serviceLoan,
    detailImage: photos.stepPaperwork,
    status: "STATUS / FILING_ACTIVE",
    progress: "62.5%",
    icon: FileCheck2,
    glowColor: "rgba(30, 62, 114, 0.12)" // Indigo
  },
  {
    num: "06",
    title: "Bank Verification",
    titleHindi: "सत्यापन",
    caption: "Active branch liaison.",
    detail: "We liaise directly with bank managers, address verification queries, clear credit check remarks, and track application flow weekly.",
    emotion: "Verification",
    image: photos.stepPaperwork,
    detailImage: photos.seoCompany,
    status: "STATUS / LIASON_STAGE",
    progress: "75.0%",
    icon: Building,
    glowColor: "rgba(34, 38, 46, 0.14)" // Charcoal dark
  },
  {
    num: "07",
    title: "Approval Secured",
    titleHindi: "स्वीकृति",
    caption: "Stamped and sanctioned.",
    detail: "Receive your official bank sanction letter, Udyam certificate, or tax exemption. We verify that interest subvention or subsidy options are locked in.",
    emotion: "Confidence",
    image: photos.badgeGovt,
    detailImage: photos.heroGlow,
    status: "STATUS / SANCTIONED_OK",
    progress: "87.5%",
    icon: BadgeAlert,
    glowColor: "rgba(29, 131, 72, 0.15)" // Success Green
  },
  {
    num: "08",
    title: "Disbursement",
    titleHindi: "भुगतान",
    caption: "Capital in hand.",
    detail: "Funds hit your account, or registration certificates go live. Your business expansion begins, supported by our ongoing advisory helpline.",
    emotion: "Outcome",
    image: photos.stepMoney,
    detailImage: photos.serviceGrowth,
    status: "STATUS / DISBURSED_PAID",
    progress: "100%",
    icon: Coins,
    glowColor: "rgba(245, 166, 35, 0.15)" // Marigold
  }
];

export default function AboutJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // 0 = Intro, 1-8 = Steps, 9 = Outro
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Track scroll progress of the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background Outlined Text drift animation
  const xJourneyDrift = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Calculate active index segment divisions (10 total segments: Intro + 8 Steps + Outro)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalSegments = 10;
    const currentIdx = Math.min(Math.floor(latest * totalSegments), totalSegments - 1);
    setActiveIndex(currentIdx);
  });

  // Typography morphing scale and opacity transforms for the INTRO segment (0.0 to 0.1)
  const introOpacity = useTransform(scrollYProgress, [0, 0.08, 0.11], [1, 1, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.85]);
  const introY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  // Outro transition mapping (0.90 to 1.0)
  const outroOpacity = useTransform(scrollYProgress, [0.88, 0.92, 1], [0, 1, 1]);
  const outroY = useTransform(scrollYProgress, [0.88, 0.95], [40, 0]);

  return (
    <div
      ref={containerRef}
      className="relative bg-paper noise-overlay border-t border-border/40"
    >
      {isDesktop ? (
        /* ========================================================
           DESKTOP VERSION: DUAL-COLUMN CSS STICKY WORKFLOW
           ======================================================== */
        <div className="relative w-full flex">
          
          {/* A. BACKGROUND LAYERS (Mesh glows + grids crossfaded via activeIndex) */}
          <div className="absolute inset-0 pointer-events-none -z-30 transition-all duration-700">
            {/* Ambient glows indexed to active step */}
            {journeySteps.map((step, idx) => {
              const isActive = activeIndex === idx + 1;
              return (
                <div
                  key={step.num}
                  className="absolute inset-0 opacity-0 transition-opacity duration-[1200ms] blur-[150px]"
                  style={{
                    background: `radial-gradient(circle at 65% 45%, ${step.glowColor}, transparent 65%)`,
                    opacity: isActive ? 1 : 0,
                  }}
                />
              );
            })}
          </div>

          {/* Dotted Grid Background Canvas */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none -z-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="desktopJourneyGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="var(--color-ink)" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#desktopJourneyGrid)" />
            </svg>
          </div>

          {/* Giant Outlined Drifting HUD Text */}
          <motion.div
            className="absolute bottom-[6%] right-[8%] select-none pointer-events-none -z-20 font-display text-[14vw] font-black uppercase tracking-[0.25em] text-transparent opacity-[0.015]"
            style={{ WebkitTextStroke: "1px var(--color-ink)", x: xJourneyDrift }}
          >
            TRAJECTORY
          </motion.div>

          {/* B. LEFT COLUMN: NATURAL SCROLLING CONTENT PANELS (Width 46%) */}
          <div className="w-[46%] flex flex-col pl-16 xl:pl-24 pr-6">
            
            {/* PANEL 0: INTRO MANIFESTO */}
            <div className="h-screen flex flex-col justify-center relative z-10">
              <motion.div 
                style={{ opacity: introOpacity, scale: introScale, y: introY }}
                className="max-w-xl"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-indigo">
                  <span className="h-2 w-2 rounded-full bg-marigold animate-pulse" />
                  ACTION MAP
                </div>
                <h2 className="mt-6 font-display text-[48px] xl:text-[58px] font-black text-ink leading-[1.1] tracking-tight">
                  Possibility to <br />
                  <span className="font-serif italic text-marigold-dark font-normal">Realized Outcome.</span>
                </h2>
                <p className="mt-6 text-slate text-sm xl:text-base leading-relaxed font-semibold">
                  A custom business filing is not a single transaction. It is a path of validation —
                  from your first question to money in hand.
                </p>
              </motion.div>
            </div>

            {/* PANEL 1-8: STEPS */}
            {journeySteps.map((step, idx) => {
              const isActive = activeIndex === idx + 1;
              return (
                <div
                  key={step.num}
                  className="h-screen flex flex-col justify-center relative z-10"
                >
                  <div
                    className="transition-all duration-1000 ease-out max-w-xl"
                    style={{
                      opacity: isActive ? 1 : 0.15,
                      transform: isActive ? "translateY(0)" : "translateY(24px)",
                      filter: isActive ? "blur(0px)" : "blur(1.5px)",
                    }}
                  >
                    {/* Step Metatags */}
                    <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-[0.2em] text-indigo/70 mb-3 border-l-2 border-marigold pl-3">
                      <span>STEP / {step.num}</span>
                      <span className="text-slate/30">•</span>
                      <span>{step.emotion.toUpperCase()}</span>
                    </div>

                    {/* Step Titles */}
                    <h3 className="font-display text-[42px] xl:text-[50px] font-extrabold text-ink leading-tight tracking-tight mt-1">
                      {step.title}
                    </h3>
                    <p className="font-handwriting text-3xl text-marigold-dark mt-1 font-bold">
                      {step.titleHindi}
                    </p>

                    {/* Step Description */}
                    <p className="mt-5 text-slate text-sm xl:text-base leading-relaxed font-medium">
                      {step.detail}
                    </p>

                    {/* Ledger Benefit Banner */}
                    <div className="mt-8 bg-paper-deep/30 border border-border/50 rounded-xl p-4 flex gap-4 items-start shadow-sm">
                      <span className="text-marigold text-lg shrink-0 mt-0.5">✦</span>
                      <span className="text-xs font-semibold text-charcoal leading-relaxed">
                        {step.caption}
                      </span>
                    </div>

                    {/* Step HUD Micro-details */}
                    <div className="grid grid-cols-2 border border-border/70 rounded-xl bg-white/40 backdrop-blur-md overflow-hidden mt-6 text-[10px] text-ink font-mono font-bold divide-x divide-border/60 shadow-sm">
                      <div className="p-3 flex flex-col justify-between">
                        <div className="text-[8px] font-semibold text-slate/50 mb-1">PHASE</div>
                        <span className="leading-tight text-[9px] tracking-tight">{step.emotion}</span>
                      </div>
                      <div className="p-3 flex flex-col justify-between">
                        <div className="text-[8px] font-semibold text-slate/50 mb-1">SYSTEM STATE</div>
                        <span className="leading-tight text-[9px] tracking-tight text-indigo">{step.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* PANEL 9: OUTRO */}
            <div className="h-screen flex flex-col justify-center relative z-10">
              <motion.div 
                style={{ opacity: outroOpacity, y: outroY }}
                className="max-w-xl"
              >
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-indigo">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  YATRA COMPLETED // DESK READY
                </div>
                <h3 className="mt-6 font-display text-[40px] xl:text-[46px] font-black text-ink leading-tight tracking-tight">
                  No hidden desks. <br />
                  Just a <span className="font-serif italic text-marigold-dark font-normal">Direct Pathway.</span>
                </h3>
                <p className="mt-5 text-slate text-sm leading-relaxed font-semibold">
                  We don't leave you with a packet of forms or a PDF. We stay on the line until the capital enters your ledger or the licence is active on the gateway.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href={journeyWhatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between bg-success text-white font-mono text-xs font-bold tracking-wider px-6 py-4 rounded-xl shadow-raised hover:bg-success/90 transition-all group max-w-xs"
                  >
                    <span>START YOUR JOURNEY</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <span className="text-[9px] font-mono text-slate/40 tracking-wider">
                    FREE FIRST CONSULTATION • ACTIVE CHANNELS IN HINDI & ENGLISH
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

          {/* C. RIGHT COLUMN: PINNED VISUAL CANVAS (Width 54%) */}
          <div className="w-[54%] h-screen sticky top-0 flex items-center justify-center pr-12 xl:pr-20 pl-6 z-20">
            
            {/* Visual HUD Outer Frame */}
            <div className="relative w-full h-[70vh] max-w-[500px] flex items-center justify-center">
              
              {/* Corner HUD Bracket Markings */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-border/80" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-border/80" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-border/80" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-border/80" />
              
              {/* Core Image Portal (Active only when index is between 1 and 8) */}
              {journeySteps.map((step, idx) => {
                const isCurrent = activeIndex === idx + 1;
                return (
                  <div
                    key={step.num}
                    className="absolute inset-8 transition-all duration-[1200ms] ease-in-out"
                    style={{
                      opacity: isCurrent ? 1 : 0,
                      transform: isCurrent ? "scale(1) translateY(0px)" : "scale(0.94) translateY(24px)",
                      filter: isCurrent ? "blur(0px)" : "blur(5px)",
                      pointerEvents: isCurrent ? "auto" : "none",
                    }}
                  >
                    {/* Rotating blueprint compass seal */}
                    <div className="absolute -top-14 -right-14 w-[180px] h-[180px] border border-ink/[0.03] rounded-full flex items-center justify-center p-3 animate-spin [animation-duration:50s] pointer-events-none">
                      <svg className="w-full h-full text-ink/[0.03]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                        <circle cx="50" cy="50" r="48" strokeDasharray="3 3" />
                        <circle cx="50" cy="50" r="38" />
                        <path d="M 50 2 L 50 98 M 2 50 L 98 50" strokeWidth="0.5" />
                      </svg>
                    </div>

                    {/* Primary Arched Frame Portal */}
                    <div className="absolute left-0 top-0 w-[78%] h-full rounded-t-[200px] rounded-b-[20px] overflow-hidden border border-border bg-paper p-2.5 shadow-raised transition-transform duration-[1500ms] ease-out">
                      <div className="relative w-full h-full rounded-t-[190px] rounded-b-[12px] overflow-hidden bg-paper-deep">
                        <Image
                          src={step.image}
                          alt={`${step.title} portrait`}
                          fill
                          className="object-cover transition-transform duration-[2500ms]"
                          style={{ transform: isCurrent ? "scale(1)" : "scale(1.10)" }}
                          sizes="400px"
                          priority={idx < 2}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Secondary Overlapping Document Frame */}
                    <div className="absolute right-0 bottom-6 w-[56%] aspect-[4/3] rounded-2xl overflow-hidden border-[6px] border-paper bg-paper shadow-raised transition-transform duration-[1800ms] ease-out flex p-1 border border-border/45">
                      <div className="relative w-full h-full rounded-lg overflow-hidden bg-paper-deep">
                        <Image
                          src={step.detailImage}
                          alt={`${step.title} document detail`}
                          fill
                          className="object-cover"
                          sizes="200px"
                        />
                        <div className="absolute inset-0 bg-ink/5" />
                      </div>
                    </div>

                    {/* Active Step HUD Micro Label */}
                    <div className="absolute -bottom-4 left-4 font-mono text-[9px] font-bold text-slate/40 flex items-center gap-2 pointer-events-none">
                      <span>PHASE: {step.emotion.toUpperCase()}</span>
                      <span>•</span>
                      <span>INDEX: {step.progress}</span>
                    </div>

                  </div>
                );
              })}

              {/* Dynamic HUD Details on Intro & Outro Screen */}
              <div 
                className="absolute inset-8 flex flex-col items-center justify-center text-center transition-all duration-[1200ms] ease-in-out pointer-events-none"
                style={{ opacity: (activeIndex === 0 || activeIndex === 9) ? 0.35 : 0 }}
              >
                <div className="w-[180px] h-[180px] border border-ink/[0.04] rounded-full flex items-center justify-center p-3 animate-spin [animation-duration:90s]">
                  <svg className="w-full h-full text-ink/[0.05]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <circle cx="50" cy="50" r="48" strokeDasharray="4 4" />
                    <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.5" />
                  </svg>
                </div>
                <span className="font-mono text-[8px] tracking-[0.3em] text-slate/50 mt-6 block uppercase">
                  {activeIndex === 0 ? "TRAJECTORY IDLE // WAITING" : "PATH COMPLETED // LINK CLOSED"}
                </span>
              </div>
              {/* Sidebar Step HUD Indicator tracker */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 font-mono text-[9px] text-slate/40">
                {journeySteps.map((step, idx) => {
                  const isPassed = activeIndex >= idx + 1;
                  const isCurrent = activeIndex === idx + 1;
                  return (
                    <div
                      key={step.num}
                      className="flex items-center gap-3 text-left transition-all duration-300 pointer-events-none"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full border transition-all duration-300 ${
                        isCurrent 
                          ? "border-marigold bg-marigold scale-150 shadow-sm" 
                          : isPassed 
                            ? "border-indigo bg-indigo scale-100" 
                            : "border-border bg-transparent scale-75"
                      }`} />
                      <span className={`tracking-widest transition-all duration-300 font-bold ${
                        isCurrent 
                          ? "text-ink opacity-100 scale-105 origin-left" 
                          : isPassed 
                            ? "text-slate/60 opacity-80" 
                            : "opacity-20"
                      }`}>
                        STEP {step.num}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* D. HUD BOTTOM STATS CARD */}
              <div className="absolute bottom-[2%] right-0 bg-white/60 backdrop-blur-md border border-border/60 shadow-sm rounded-xl p-3.5 flex gap-5 items-center max-w-[240px] pointer-events-none font-mono">
                <div className="w-1.5 h-10 bg-marigold rounded-full" />
                <div className="flex flex-col gap-0.5 text-[9px] font-bold text-ink">
                  <div className="text-slate/50 text-[8px] uppercase tracking-wider">PROJECT PROGRESS</div>
                  <div className="flex gap-1.5 items-baseline">
                    <span className="text-sm font-black text-ink">
                      {activeIndex === 0 ? "0.0%" : activeIndex === 9 ? "100%" : journeySteps[activeIndex - 1].progress}
                    </span>
                    <span className="text-slate/40 text-[7px]">VERIFIED</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      ) : (
        /* ========================================================
           MOBILE VERSION: STAGGERED EDITORIAL VERTICAL TIMELINE
           ======================================================== */
        <div className="px-6 py-20 max-w-[640px] mx-auto flex flex-col">
          
          {/* Mobile Intro Header */}
          <div className="mb-20">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo">
              <span className="h-1.5 w-1.5 rounded-full bg-marigold animate-pulse" />
              ACTION MAP
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-black text-ink leading-tight">
              Possibility to <br />
              <span className="font-serif italic text-marigold-dark font-normal">Realized Outcome.</span>
            </h2>
            <p className="mt-4 text-slate text-xs sm:text-sm font-semibold leading-relaxed">
              We guide MSMEs and startups through validation pathways. Explore the exact roadmap from your first WhatsApp inquiry to capital disbursement.
            </p>
          </div>

          {/* Staggered Vertical Feed */}
          <div className="relative border-l border-border/80 pl-6 ml-2 space-y-16">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col">
                  
                  {/* Step Timeline Indicator Node */}
                  <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full border border-marigold bg-paper flex items-center justify-center shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-marigold" />
                  </span>

                  {/* Overlapping Photo Portal Card */}
                  <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mb-6 border border-border/50 bg-paper p-1.5 shadow-raised">
                    <div 
                      className="relative w-full h-full overflow-hidden" 
                      style={{ borderRadius: idx % 2 === 0 ? "80px 10px 80px 10px" : "10px 80px 10px 80px" }}
                    >
                      <Image
                        src={step.image}
                        alt={`${step.title} visual`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, 500px"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                    </div>

                    {/* Step HUD Floating Badge */}
                    <div className="absolute top-4 right-4 bg-paper/95 border border-border px-2.5 py-1 rounded-lg shadow-sm text-[8px] font-mono tracking-widest text-ink font-bold flex items-center gap-1.5">
                      <Icon size={9} className="text-marigold" />
                      <span>STEP 0{idx + 1} // {step.emotion.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* Content details block */}
                  <div className="flex flex-col items-start px-1">
                    <div className="text-[9px] font-mono font-bold tracking-wider text-slate/50 mb-1">
                      {step.emotion.toUpperCase()} · {step.progress}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-ink leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-handwriting text-2xl text-marigold-dark mt-0.5 font-bold">
                      {step.titleHindi}
                    </p>
                    <p className="text-slate font-sans text-xs sm:text-sm mt-3 leading-relaxed font-semibold">
                      {step.detail}
                    </p>

                    <div className="mt-4 bg-paper-deep/20 border border-border/40 rounded-xl p-3 w-full text-[10px] text-charcoal font-semibold flex gap-2">
                      <span className="text-marigold font-black">•</span>
                      <span>{step.caption}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Mobile Outro Call To Action */}
          <div className="mt-20 border-t border-border/40 pt-12 text-center flex flex-col items-center">
            <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-slate/50 uppercase">
              YATRA COMPLETED
            </span>
            <h3 className="mt-4 font-display text-2xl font-extrabold text-ink leading-tight">
              No hidden desks. <br /> Just progression.
            </h3>
            <p className="mt-3 text-slate text-xs leading-relaxed max-w-sm">
              We stay on the line from first WhatsApp inquiry to loan disbursement or licence download. Get a free check on your eligibility today.
            </p>

            <a
              href={journeyWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full bg-success text-white font-mono text-xs font-bold tracking-wider px-6 py-4 rounded-xl shadow-raised hover:bg-success/90 transition-all mt-8 group"
            >
              <span>FREE ELIGIBILITY CHECK ON WHATSAPP</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      )}
    </div>
  );
}
