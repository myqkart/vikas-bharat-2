"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Compass, ShieldCheck, Users, CheckCircle, ArrowRight } from "lucide-react";
import { photos } from "@/lib/photos";

interface ValueItem {
  id: string;
  num: string;
  title: string;
  text: string;
  location: string;
  coords: string;
  image: string;
  glowColor: string;
  icon: React.ComponentType<any>;
}

const valueItems: ValueItem[] = [
  {
    id: "clear-speech",
    num: "01",
    title: "Clear speech",
    text: "We explain eligibility in Hindi and English before we ask for a single document.",
    location: "AHMEDABAD HELP DESK",
    coords: "23° 01' 44\" N / 72° 34' 47\" E",
    image: photos.stepCall,
    glowColor: "rgba(245, 166, 35, 0.12)", // Marigold glow
    icon: Compass,
  },
  {
    id: "proof-over-promises",
    num: "02",
    title: "Proof over promises",
    text: "Stamped outcomes, case timelines, and WhatsApp updates you can forward to family.",
    location: "PUNE HELP DESK",
    coords: "18° 32' 13\" N / 73° 51' 24\" E",
    image: photos.serviceCertificate,
    glowColor: "rgba(30, 62, 114, 0.12)", // Indigo glow
    icon: ShieldCheck,
  },
  {
    id: "no-hidden-desks",
    num: "03",
    title: "No hidden desks",
    text: "One accountable team from first call to money-in-account or licence-in-hand.",
    location: "JAIPUR HELP DESK",
    coords: "26° 54' 44\" N / 75° 47' 11\" E",
    image: photos.personRitu,
    glowColor: "rgba(29, 131, 72, 0.12)", // Success Green glow
    icon: Users,
  },
  {
    id: "respect-for-small-scale",
    num: "04",
    title: "Respect for small scale",
    text: "Kirana, tailoring, hardware, food, and first-time founders get the same care as larger MSMEs.",
    location: "INDORE HELP DESK",
    coords: "22° 43' 11\" N / 75° 51' 28\" E",
    image: photos.heroShopkeeper,
    glowColor: "rgba(217, 140, 15, 0.14)", // Marigold dark glow
    icon: CheckCircle,
  },
];

export default function CoreValues() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useScroll binds animations to scroll progress of containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background and HUD transforms
  const xValuesText = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const rotateCompass = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Path length for SVG connection line
  // The path starts drawing after intro (0.15) and finishes near end (0.85)
  const pathLength = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  // Handle active value state based on scroll coordinates
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) {
      setActiveIndex(0); // Intro/Threshold
    } else if (latest < 0.42) {
      setActiveIndex(1); // Value 1
    } else if (latest < 0.65) {
      setActiveIndex(2); // Value 2
    } else if (latest < 0.88) {
      setActiveIndex(3); // Value 3
    } else {
      setActiveIndex(4); // Value 4
    }
  });

  // Spatial node coordinates (percentage values mapping to coordinates on desktop viewport)
  // These form a Z-pattern pathway: Top-Left -> Top-Right -> Bottom-Left -> Bottom-Right
  const nodes = [
    { x: 25, y: 35 }, // Value 1
    { x: 75, y: 28 }, // Value 2
    { x: 28, y: 72 }, // Value 3
    { x: 72, y: 62 }, // Value 4
  ];

  return (
    <div
      ref={containerRef}
      id="core-values"
      className="relative bg-paper-deep/30"
      style={{ height: isDesktop ? "350vh" : "auto" }}
    >
      {isDesktop ? (
        /* ========================================================
           DESKTOP VERSION: STICKY COORDINATE CONSTELLATION
           ======================================================== */
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-paper noise-overlay flex flex-col justify-between py-12">
          
          {/* Background Ambient Mesh Glows (Opacity changes based on activeIndex) */}
          <div className="absolute inset-0 pointer-events-none -z-30 transition-all duration-700">
            {valueItems.map((item, idx) => (
              <div
                key={item.id}
                className="absolute inset-0 opacity-0 transition-opacity duration-1000 blur-[130px] rounded-full"
                style={{
                  background: `radial-gradient(circle at ${nodes[idx].x}% ${nodes[idx].y}%, ${item.glowColor}, transparent 60%)`,
                  opacity: activeIndex === idx + 1 ? 1 : 0,
                }}
              />
            ))}
          </div>

          {/* Dotted Grid Coordinate Canvas */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none -z-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="valuesGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="var(--color-ink)" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#valuesGridPattern)" />
            </svg>
          </div>

          {/* Giant Outlined Drifting Background Text "VALUES" */}
          <motion.div
            className="absolute top-[28%] left-[8%] select-none pointer-events-none -z-20 font-display text-[15vw] font-black uppercase tracking-[0.2em] text-transparent opacity-[0.022]"
            style={{ WebkitTextStroke: "1.5px var(--color-ink)", x: xValuesText }}
          >
            VALUES
          </motion.div>

          {/* Background Concentric Compass Radar (Centered at Node 1 initially) */}
          <motion.div
            style={{ rotate: rotateCompass }}
            className="absolute top-[-80px] right-[-100px] w-[500px] h-[500px] opacity-[0.065] pointer-events-none -z-10 text-indigo"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" strokeWidth="0.5" strokeDasharray="3 4" />
              <circle cx="50" cy="50" r="34" strokeWidth="0.35" />
              <line x1="50" y1="2" x2="50" y2="98" strokeWidth="0.25" strokeDasharray="1 1" />
              <line x1="2" y1="50" x2="98" y2="50" strokeWidth="0.25" strokeDasharray="1 1" />
            </svg>
          </motion.div>

          {/* ========================================================
             SVG LIVING PATHWAY LAYER
             ======================================================== */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Background static dashed guideline */}
            <path
              d="M 25 35 L 75 28 L 28 72 L 72 62"
              stroke="var(--color-border)"
              strokeWidth="0.15"
              strokeDasharray="1 2"
              fill="none"
            />
            {/* Animated drawing pathway */}
            <motion.path
              d="M 25 35 L 75 28 L 28 72 L 72 62"
              stroke="var(--color-marigold)"
              strokeWidth="0.3"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength }}
            />
          </svg>

          {/* ========================================================
             HUD & META INFORMATION LAYER
             ======================================================== */}
          {/* Top Panel: Title & Section Category */}
          <div className="w-full px-12 flex justify-between items-center pointer-events-none select-none z-20">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate/50 font-mono tracking-widest">
                SECTION 03 // BHAROSA CULTURAL CORE
              </span>
              <h2 className="font-display text-lg font-bold text-ink">
                How We Operate Daily
              </h2>
            </div>
            <div className="text-[10px] font-mono tracking-wider text-slate/50 text-right">
              EST. 2018 · AHM-HQ · COORDINATE MAP
            </div>
          </div>

          {/* Bottom Panel: Live Coordinate HUD & Scroll Progress Indicator */}
          <div className="w-full px-12 flex justify-between items-end pointer-events-none select-none z-20">
            {/* Live GPS Panel */}
            <div className="flex flex-col font-mono text-[9px] text-slate/50 bg-paper-deep/40 border border-border/30 backdrop-blur-md px-4 py-3 rounded-lg shadow-sm">
              <span className="font-bold text-ink mb-1">[ SYSTEM COORDINATE READOUT ]</span>
              <span className="flex justify-between gap-4">
                <span>ACTIVE NODE:</span>
                <span className="text-indigo font-bold">
                  {activeIndex === 0 ? "00 / INITIALIZING" : `0${activeIndex} / VALUE`}
                </span>
              </span>
              <span className="flex justify-between gap-4">
                <span>HELP DESK:</span>
                <span className="text-marigold-dark font-bold">
                  {activeIndex === 0 ? "WAITING FOR INPUT" : valueItems[activeIndex - 1].location}
                </span>
              </span>
              <span className="flex justify-between gap-4">
                <span>LAT/LONG:</span>
                <span className="text-ink">
                  {activeIndex === 0 ? "SCANNING CONTINENT" : valueItems[activeIndex - 1].coords}
                </span>
              </span>
            </div>

            {/* Centered Scroll Progress Bar */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[9px] font-mono tracking-widest text-slate/40">
              <span>01 / CLEAR</span>
              <div className="w-32 h-[1.5px] bg-border relative">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-marigold"
                  style={{ width: progressWidth }}
                />
              </div>
              <span>04 / SCALE</span>
            </div>

            {/* Instruction hint */}
            <div className="text-[9px] font-mono text-slate/40 flex items-center gap-1.5 animate-pulse">
              <span>SCROLL TO TRAVERSE PATHWAY</span>
              <ArrowRight size={10} />
            </div>
          </div>

          {/* ========================================================
             SPATIAL CONTENT PORTALS (THE CORE VALUES NODES)
             ======================================================== */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
            
            {/* INTRO THRESHOLD (Visible when index is 0) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] text-center flex flex-col items-center justify-center transition-all duration-700 pointer-events-auto"
              style={{
                opacity: activeIndex === 0 ? 1 : 0,
                transform: activeIndex === 0 ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.95)",
                filter: activeIndex === 0 ? "blur(0px)" : "blur(8px)",
                visibility: activeIndex === 0 ? "visible" : "hidden",
              }}
            >
              <div className="w-8 h-8 rounded-full border border-marigold flex items-center justify-center text-marigold text-xs font-mono font-bold mb-4 animate-bounce">
                ↓
              </div>
              <span className="text-[10px] font-bold text-indigo font-mono tracking-[0.25em] uppercase mb-3">
                THE BHAROSA PRINCIPLES
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-black text-ink leading-tight tracking-tight mb-4">
                Not rules on walls.<br />
                <span className="italic font-normal text-marigold-dark">Weave them in storefronts.</span>
              </h1>
              <p className="text-slate font-sans text-sm font-medium max-w-[420px] leading-relaxed">
                Scroll down to draw the path of execution. Travel from Ahmedabad to Pune, Jaipur, and Indore to explore our spatial commitments.
              </p>
            </div>

            {/* RENDER THE 4 NODES */}
            {valueItems.map((item, idx) => {
              const node = nodes[idx];
              const isCurrent = activeIndex === idx + 1;
              const Icon = item.icon;

              // Spatial offsets depending on which node it is to prevent overlap and create asymmetric look
              // Node 1: Left Node. Image top-left, text bottom-left
              // Node 2: Right Node. Image top-right, text center-left
              // Node 3: Bottom-Left Node. Image bottom-left, text bottom-right
              // Node 4: Bottom-Right Node. Image bottom-right, text top-left

              const positions = [
                {
                  imgClass: "left-[10vw] top-[14vh] w-[20vw] h-[26vh]",
                  txtClass: "left-[10vw] top-[43vh] w-[24vw]",
                  align: "text-left",
                },
                {
                  imgClass: "right-[9vw] top-[32vh] w-[20vw] h-[26vh]",
                  txtClass: "right-[31vw] top-[34vh] w-[24vw]",
                  align: "text-right",
                },
                {
                  imgClass: "left-[10vw] top-[50vh] w-[20vw] h-[26vh]",
                  txtClass: "left-[32vw] top-[53vh] w-[24vw]",
                  align: "text-left",
                },
                {
                  imgClass: "right-[9vw] top-[48vh] w-[20vw] h-[26vh]",
                  txtClass: "right-[31vw] top-[52vh] w-[24vw]",
                  align: "text-right",
                },
              ];

              const currentPos = positions[idx];

              return (
                <div key={item.id} className="absolute inset-0 w-full h-full pointer-events-none">
                  
                  {/* Pulsing Coordinate Dot */}
                  <div
                    className="absolute z-20 transition-all duration-700"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className={`absolute w-8 h-8 rounded-full border border-marigold/30 scale-[2] pointer-events-none transition-transform duration-700 ${isCurrent ? 'animate-ping' : ''}`} />
                      <div className={`absolute w-5 h-5 rounded-full ${isCurrent ? 'bg-marigold' : 'bg-border'} border-4 border-white shadow-sm flex items-center justify-center transition-colors duration-500`}>
                        {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                  </div>

                  {/* Editorial Photo Portal */}
                  <div
                    className={`absolute overflow-hidden pointer-events-auto transition-all duration-1000 ${currentPos.imgClass}`}
                    style={{
                      opacity: isCurrent ? 1 : 0.08,
                      transform: isCurrent ? "translateY(0) scale(1)" : "translateY(24px) scale(0.95)",
                      filter: isCurrent ? "blur(0px) grayscale(0%)" : "blur(4px) grayscale(100%)",
                      borderRadius: idx % 2 === 0 ? "140px 14px 140px 14px" : "14px 140px 14px 140px",
                      border: isCurrent ? "1px solid var(--color-border)" : "1px dashed transparent",
                      padding: "6px",
                      backgroundColor: "var(--color-paper)",
                      boxShadow: isCurrent ? "var(--shadow-raised)" : "none",
                    }}
                  >
                    <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: idx % 2 === 0 ? "134px 8px 134px 8px" : "8px 134px 8px 134px" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-[2000ms]"
                        style={{ transform: isCurrent ? "scale(1)" : "scale(1.08)" }}
                        sizes="20vw"
                      />
                      {/* Dark overlay for integration */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Editorial Content Text Block */}
                  <div
                    className={`absolute flex flex-col pointer-events-auto transition-all duration-1000 ${currentPos.txtClass} ${currentPos.align}`}
                    style={{
                      opacity: isCurrent ? 1 : 0,
                      transform: isCurrent ? "translateY(0)" : "translateY(32px)",
                      filter: isCurrent ? "blur(0px)" : "blur(6px)",
                      visibility: isCurrent ? "visible" : "hidden",
                    }}
                  >
                    {/* Outline Section Number in background */}
                    <div
                      className="absolute select-none pointer-events-none -z-10 font-display text-[8vw] font-black leading-none text-transparent opacity-[0.04]"
                      style={{
                        WebkitTextStroke: "1px var(--color-ink)",
                        top: "-5vh",
                        left: currentPos.align === "text-left" ? "-1vw" : "auto",
                        right: currentPos.align === "text-right" ? "-1vw" : "auto",
                      }}
                    >
                      {item.num}
                    </div>

                    <div className={`inline-flex items-center gap-2 mb-2 ${currentPos.align === "text-right" ? "justify-end" : ""}`}>
                      <div className="p-1 rounded-md bg-paper border border-border/60 text-indigo shadow-sm">
                        <Icon size={12} className="shrink-0" />
                      </div>
                      <span className="text-[10px] font-bold text-slate/50 font-mono tracking-widest">
                        {item.location}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-ink leading-tight tracking-tight mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate font-sans text-sm font-medium leading-relaxed">
                      {item.text}
                    </p>

                    {/* Small coordinate metadata details */}
                    <div className="mt-4 border-t border-border/40 pt-3 flex items-center gap-2 text-[8px] font-mono tracking-wider text-slate/40 justify-start" style={{ justifyContent: currentPos.align === "text-right" ? "flex-end" : "flex-start" }}>
                      <span>LATITUDE: {item.coords.split(" / ")[0]}</span>
                      <span className="opacity-50">·</span>
                      <span>LONGITUDE: {item.coords.split(" / ")[1]}</span>
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
        <div className="px-6 py-20 bg-paper noise-overlay relative overflow-hidden">
          
          {/* Subtle Mobile grid */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none -z-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="mobileValuesGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#12294D" strokeWidth="0.8" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#mobileValuesGrid)" />
            </svg>
          </div>

          <div className="max-w-[600px] mx-auto flex flex-col items-start">
            
            {/* Header Area */}
            <div className="mb-16">
              <span className="text-[9px] font-bold text-slate/50 font-mono tracking-[0.2em] uppercase block mb-2 border-l-2 border-marigold pl-3">
                THE BHAROSA PRINCIPLES
              </span>
              <h2 className="font-display text-3xl font-black text-ink leading-tight tracking-tight">
                Not rules on walls, but <span className="italic text-indigo font-normal font-display">ground realities.</span>
              </h2>
              <p className="text-slate font-sans text-xs mt-3 leading-relaxed">
                Four underlying commitments that define how we build financial support, incorporate, and license small businesses across India.
              </p>
            </div>

            {/* Core Values Stack */}
            <div className="space-y-20 w-full relative z-10">
              {valueItems.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col w-full"
                  >
                    {/* Staggered asymmetric layout: Image first or text first */}
                    <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6 shadow-raised border border-border/40 bg-paper p-1.5">
                      <div 
                        className="relative w-full h-full overflow-hidden" 
                        style={{ borderRadius: idx % 2 === 0 ? "80px 10px 80px 10px" : "10px 80px 10px 80px" }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 90vw, 500px"
                        />
                      </div>
                      
                      {/* Floating Stamp Label */}
                      <div className="absolute top-4 right-4 bg-paper/95 border border-border/60 px-2.5 py-1.5 rounded-lg shadow-sm text-[8px] font-mono tracking-widest text-ink font-bold flex items-center gap-1.5">
                        <Icon size={8} className="text-marigold" />
                        <span>{item.num} / {item.id.toUpperCase().replace(/-/g, " ")}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start pl-2">
                      <span className="text-[8px] font-mono tracking-widest text-slate/50 mb-1.5 block">
                        {item.location} // {item.coords}
                      </span>
                      
                      <h3 className="font-display text-xl font-bold text-ink mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate font-sans text-xs leading-relaxed max-w-[480px]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
