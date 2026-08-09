"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
  ShieldCheck,
  Award,
  CheckCircle,
  FileCheck2,
  Lock,
  Plus,
  Star,
  Activity,
  ArrowUpRight,
  TrendingUp,
  MapPin
} from "lucide-react";
import { photos } from "@/lib/photos";

// Structure for our official recognition items
interface ProofItem {
  id: string;
  num: string;
  type: "CERTIFICATION" | "REGISTRATION" | "LIASON" | "TRUST";
  label: string;
  subtitle: string;
  body: string;
  stampText: string;
  certNumber: string;
  authority: string;
  extraLabel: string;
  extraValue: string;
  coords: string;
  image: string;
  bgGlow: string;
}

const proofData: ProofItem[] = [
  {
    id: "dpiit",
    num: "01",
    type: "REGISTRATION",
    label: "DPIIT Startup India",
    subtitle: "Gazetted Startup Recognition",
    body: "Officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry. Stamped under Gazette Notification 108(E) dated 4 February 2026, defining active compliance.",
    stampText: "REG-DPIIT // 2026",
    certNumber: "CERT-DIPP143290",
    authority: "Ministry of Commerce, GoI",
    extraLabel: "Turnover Threshold",
    extraValue: "₹200 Crore Cap",
    coords: "28° 36' 36\" N / 77° 13' 48\" E",
    image: photos.seoUdyam,
    bgGlow: "rgba(245, 166, 35, 0.15)" // Warm marigold glow
  },
  {
    id: "iso",
    num: "02",
    type: "CERTIFICATION",
    label: "ISO 9001:2015",
    subtitle: "Quality Management System",
    body: "Accredited standards certificate auditing our regulatory liaison desks, scheme eligibility mappings, and MSME assistance portals to ensure zero-defect document compilation.",
    stampText: "ISO-9001 // QMS-AUDIT",
    certNumber: "CERT-QMS2026/0948",
    authority: "Universal Quality Standards",
    extraLabel: "Audit Exemption Status",
    extraValue: "Sec. 80-IAC Ready",
    coords: "23° 01' 44\" N / 72° 34' 47\" E",
    image: photos.seoIso,
    bgGlow: "rgba(30, 62, 114, 0.18)" // Deep indigo glow
  },
  {
    id: "govt",
    num: "03",
    type: "LIASON",
    label: "Govt. Scheme Partner Desk",
    subtitle: "Credit Guarantee Liaison",
    body: "Authorized advisory liaison aligning business credit applicants with MUDRA portals, CGTMSE limits, and SIDBI lending corridors for direct interest subvention tracking.",
    stampText: "GOVT-LIAISON // ₹200CR CAP",
    certNumber: "REG-SCHEME/GATEWAY",
    authority: "MSME Scheme Desk Association",
    extraLabel: "Max Mudra Limit",
    extraValue: "₹10L / ₹5Cr CGTMSE",
    coords: "26° 54' 44\" N / 75° 47' 11\" E",
    image: photos.schemeMudra,
    bgGlow: "rgba(29, 131, 72, 0.15)" // Success green glow
  },
  {
    id: "trust",
    num: "04",
    type: "TRUST",
    label: "Trust Index Desk",
    subtitle: "5.0 Verified Google Rating",
    body: "Credibility audit representing direct storefront support networks across Ahmedabad, Jaipur, Delhi NCR, and Hyderabad. Authenticated by 4,500+ small business reviews.",
    stampText: "TRUST-INDEX // 5.0 RATING",
    certNumber: "AUDIT-4500/GOOGLE",
    authority: "Google Storefront Network",
    extraLabel: "Active Operations",
    extraValue: "4 Major Cities",
    coords: "17° 22' 31\" N / 78° 28' 27\" E",
    image: photos.heroMeeting,
    bgGlow: "rgba(109, 40, 217, 0.14)" // Purple glow
  }
];

export default function AboutProof() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Mouse coords for 3D card tilt effect
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // Smooth springs for 3D card rotation
  const springRotateX = useSpring(useTransform(cardY, [-0.5, 0.5], [10, -10]), { damping: 25, stiffness: 200 });
  const springRotateY = useSpring(useTransform(cardX, [-0.5, 0.5], [-10, 10]), { damping: 25, stiffness: 200 });

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background vault dark crossfade trigger
  const bgTransition = useTransform(scrollYProgress, [0, 0.12], ["rgba(251, 246, 236, 1)", "rgba(10, 15, 29, 1)"]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.12], [0.15, 0.45]);
  const textDarkTheme = useTransform(scrollYProgress, [0, 0.12], ["#12294D", "#FBF6EC"]);

  // Track scroll position to change the active index (0 to 3)
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Divide the range after the entry into 4 zones
      const start = 0.15;
      const end = 0.95;
      if (latest < start) {
        setCurrentSlide(0);
      } else if (latest >= end) {
        setCurrentSlide(3);
      } else {
        const relativeProgress = (latest - start) / (end - start);
        const slideIndex = Math.min(Math.floor(relativeProgress * 4), 3);
        setCurrentSlide(slideIndex);
      }
    });
  }, [scrollYProgress]);

  // Large background outlined text drift
  const xTitleDrift = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);
  // Concentric circle scale scroll response
  const circleScale = useTransform(scrollYProgress, [0.1, 0.9], [1, 1.25]);

  // Handles mouse movement inside the certificate frame for 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardX.set(x);
    cardY.set(y);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
    setHoveredCard(false);
  };

  const activeItem = proofData[currentSlide];

  return (
    <motion.div
      ref={containerRef}
      id="proof-archive"
      className="relative bg-paper transition-colors duration-700 noise-overlay border-t border-border/40"
      style={{
        backgroundColor: bgTransition,
        height: isDesktop ? "350vh" : "auto"
      }}
    >
      {/* 1. TRANSITION BRIDGE HEADER (Only scrolls into view first, bridging Process -> Proof) */}
      <div className="absolute top-0 left-0 w-full h-[30vh] pointer-events-none flex flex-col justify-center px-6 lg:px-24">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-marigold font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-marigold animate-ping" />
          OUTCOME SECURED // LOADING ARCHIVE
        </div>
        <div className="h-[1px] w-24 bg-marigold/30 mt-3" />
      </div>

      {isDesktop ? (
        /* ========================================================
           DESKTOP VERSION: PINNED CINEMATIC ARCHIVE VAULT
           ======================================================== */
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-between px-16 xl:px-24 z-10">
          
          {/* A. DYNAMIC BACKGROUND LAYERS */}
          {/* Subtle Technical Grid Lines */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none -z-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="proofGridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#proofGridPattern)" />
            </svg>
          </div>

          {/* Glowing Ambient Mesh Backdrop (Synced with active slide glow color) */}
          <div className="absolute inset-0 pointer-events-none -z-30 blur-[140px] transition-all duration-[1200ms] ease-in-out">
            {proofData.map((item, idx) => (
              <div
                key={item.id}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{
                  background: `radial-gradient(circle at 75% 50%, ${item.bgGlow}, transparent 55%)`,
                  opacity: currentSlide === idx ? 1 : 0
                }}
              />
            ))}
          </div>

          {/* Giant Outlined Drifting Watermark */}
          <motion.div
            className="absolute top-[18%] left-[10%] select-none pointer-events-none -z-20 font-display text-[15vw] font-black uppercase tracking-[0.2em] text-transparent opacity-[0.02] transition-colors"
            style={{
              WebkitTextStroke: "1px var(--color-ink)",
              x: xTitleDrift,
              color: textDarkTheme
            }}
          >
            EVIDENCE
          </motion.div>

          {/* B. LEFT COLUMN: THE SVG VERIFICATION SYSTEM & READOUTS */}
          <div className="w-[38%] flex flex-col justify-between h-[75vh] relative z-10">
            
            {/* Header Readout */}
            <div className="max-w-md">
              <div className="flex items-center gap-3 text-[10px] font-mono font-bold tracking-[0.25em] text-marigold">
                <ShieldCheck size={12} />
                <span>SECTION 06 // ARCHIVE OF PROOF</span>
              </div>
              <h2 className="mt-4 font-display text-[46px] xl:text-[54px] font-black text-[#FBF6EC] leading-[1.05] tracking-tight">
                The Evidence <br />
                <span className="font-serif italic text-marigold-dark font-normal">Behind Aarohan.</span>
              </h2>
              <p className="mt-5 text-slate text-sm font-semibold leading-relaxed">
                Credentials are not claims. We present official gazettes, quality certifications, and scheme liaison registrations that stand behind our storefront.
              </p>
            </div>

            {/* Core SVG Concentric Seal System */}
            <div className="relative w-[280px] h-[280px] flex items-center justify-center my-6">
              
              {/* Rotating outer text orbit path */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
                transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <path
                    id="sealTextCircle"
                    d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                    fill="none"
                  />
                  <text className="font-mono text-[5.5px] fill-marigold/70 uppercase tracking-[0.16em] font-bold">
                    <textPath href="#sealTextCircle" startOffset="0%">
                      • VERIFIED AUTHORITY DESK • NATIONAL MSME REGISTERED • AUDITED & COMPLIANT •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Pinned rotating compass ticks */}
              <motion.div
                className="absolute inset-4 opacity-15"
                style={{ scale: circleScale }}
                animate={{ rotate: prefersReducedMotion ? 0 : -360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              >
                <svg className="w-full h-full text-border" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <circle cx="50" cy="50" r="48" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="38" />
                  <path d="M 50 0 L 50 100 M 0 50 L 100 50" strokeWidth="0.5" />
                </svg>
              </motion.div>

              {/* Interactive verification status core */}
              <div className="absolute inset-16 rounded-full border border-border/20 bg-[#0c1524]/60 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg border-marigold/10">
                <motion.div
                  key={activeItem.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <Activity size={18} className="text-marigold animate-pulse mb-1.5" />
                  <span className="font-mono text-[8px] font-bold text-slate/50">COORDS</span>
                  <span className="font-mono text-[9px] font-bold text-[#FBF6EC] tracking-tighter leading-none mt-0.5">
                    {activeItem.coords.split("/")[0]}
                  </span>
                  <span className="font-mono text-[8px] text-marigold font-black uppercase tracking-wider mt-2.5">
                    {activeItem.stampText.split("//")[0]}
                  </span>
                </motion.div>
              </div>

              {/* Orbit dots indicating overall count */}
              <div className="absolute inset-0 pointer-events-none">
                {proofData.map((item, idx) => {
                  const angle = (idx * 360) / proofData.length;
                  const isActive = currentSlide === idx;
                  return (
                    <div
                      key={item.id}
                      className="absolute w-2 h-2 rounded-full transition-all duration-500"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`,
                        backgroundColor: isActive ? "var(--color-marigold)" : "rgba(228, 217, 190, 0.2)",
                        boxShadow: isActive ? "0 0 8px var(--color-marigold)" : "none"
                      }}
                    />
                  );
                })}
              </div>

            </div>

            {/* Readout stats footer */}
            <div className="border-t border-border/15 pt-5 max-w-sm flex justify-between font-mono text-[10px] text-slate/50">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-slate/40 uppercase">LEDGER VALUE</span>
                <span className="font-black text-[#FBF6EC] text-xs">{activeItem.extraValue}</span>
              </div>
              <div className="h-8 w-[1px] bg-border/15" />
              <div className="flex flex-col gap-1.5 text-right">
                <span className="font-semibold text-slate/40 uppercase">DESK CODE</span>
                <span className="font-black text-marigold text-xs">{activeItem.certNumber}</span>
              </div>
            </div>

          </div>

          {/* C. RIGHT COLUMN: THE COMPOSITE EVIDENCE VIEWPORT (Interactive 3D Stage) */}
          <div className="w-[52%] h-[75vh] flex items-center justify-center relative z-10">
            
            {/* Visual HUD Container */}
            <div className="relative w-full max-w-[550px] aspect-[4/3] flex items-center justify-center">
              
              {/* Outer border coordinate framing */}
              <div className="absolute inset-0 border border-border/10 rounded-2xl pointer-events-none" />
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-marigold/30 pointer-events-none" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-marigold/30 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-marigold/30 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-marigold/30 pointer-events-none" />

              {/* Cursor indicator detail when hovering */}
              {hoveredCard && (
                <div className="absolute top-8 left-8 bg-marigold/10 border border-marigold/20 px-3 py-1.5 rounded-lg text-[8px] font-mono tracking-widest text-marigold font-bold uppercase animate-pulse pointer-events-none z-30">
                  SECURE INSPECTION ACTIVE
                </div>
              )}

              {/* THE 3D TILT CARD (Triggered by scroll indexing) */}
              {proofData.map((item, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <motion.div
                    key={item.id}
                    className="absolute inset-8 cursor-crosshair flex items-center justify-center"
                    style={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 50,
                      scale: isActive ? 1 : 0.95,
                      rotateX: isActive ? springRotateX : 0,
                      rotateY: isActive ? springRotateY : 0,
                      transformStyle: "preserve-3d",
                      zIndex: isActive ? 20 : 0,
                      pointerEvents: isActive ? "auto" : "none"
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHoveredCard(true)}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isActive ? { opacity: 1, x: 0, scale: 1 } : {}}
                    transition={{ type: "spring", damping: 20 }}
                  >
                    
                    {/* LAYER 1: CERTIFICATE ARTIFACT (Backplane of composition) */}
                    <div 
                      className="absolute inset-0 bg-[#0d1525]/90 border-[2px] border-border/30 rounded-2xl p-6 flex flex-col justify-between shadow-raised overflow-hidden select-none"
                      style={{ transform: "translateZ(-20px)" }}
                    >
                      {/* Document Watermark Overlay */}
                      <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none">
                        <svg className="w-[60%] h-[60%] text-[#FBF6EC]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                          <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
                          <circle cx="50" cy="50" r="35" strokeDasharray="2 2" strokeWidth="0.5" />
                          <polygon points="50,15 62,38 88,38 67,54 75,80 50,64 25,80 33,54 12,38 38,38" strokeWidth="0.5" />
                        </svg>
                      </div>

                      {/* Top Bar: Label & Authority */}
                      <div className="flex justify-between items-start border-b border-border/15 pb-4">
                        <div className="flex flex-col">
                          <span className="font-mono text-[7px] font-bold text-marigold tracking-widest uppercase">
                            OFFICIAL CERTIFICATION RECORD
                          </span>
                          <h3 className="font-display text-lg font-bold text-[#FBF6EC] mt-0.5">
                            {item.label}
                          </h3>
                        </div>
                        <span className="font-mono text-[8px] font-bold text-slate/50 uppercase bg-slate/5 border border-border/10 px-2 py-0.5 rounded">
                          {item.type}
                        </span>
                      </div>

                      {/* Middle Details Grid */}
                      <div className="my-5 grid grid-cols-2 gap-4 text-left">
                        <div className="flex flex-col gap-0.5">
                          <span className="font-mono text-[7px] text-slate/50 uppercase font-semibold">
                            ISSUING AUTHORITY
                          </span>
                          <span className="font-sans text-xs font-semibold text-[#FBF6EC] tracking-tight">
                            {item.authority}
                          </span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-mono text-[7px] text-slate/50 uppercase font-semibold">
                            REGISTRATION ID
                          </span>
                          <span className="font-mono text-xs font-bold text-marigold tracking-wider">
                            {item.certNumber}
                          </span>
                        </div>
                        <div className="flex flex-col gap-0.5 col-span-2 border-t border-border/10 pt-3">
                          <span className="font-mono text-[7px] text-slate/50 uppercase font-semibold">
                            EXEMPTION & LEDGER MAPPING
                          </span>
                          <p className="font-sans text-[11px] text-slate/85 leading-normal font-medium mt-0.5">
                            {item.body}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Footer: Signatures & Seal stamp */}
                      <div className="flex justify-between items-end border-t border-border/10 pt-4">
                        <div className="flex flex-col font-mono text-[8px] text-slate/50">
                          <span>LAT: {item.coords.split("/")[0]}</span>
                          <span>LON: {item.coords.split("/")[1]}</span>
                        </div>
                        
                        {/* Circular Approved Seal Stamp */}
                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-marigold/40 bg-marigold/[0.04] p-1 scale-90">
                          <div className="absolute inset-0 border border-dashed border-marigold/20 rounded-full animate-spin [animation-duration:15s]" />
                          <span className="font-mono text-[6px] font-black text-marigold text-center leading-tight uppercase tracking-tighter">
                            VERIFIED<br />RECORD
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* LAYER 2: PHOTO COLLAGE (Overlapping Foreground) */}
                    <div 
                      className="absolute right-[-45px] bottom-[-25px] w-[45%] aspect-[3/4] rounded-xl overflow-hidden border-[5px] border-[#0a0f1d] shadow-raised transition-transform duration-[1200ms] ease-out bg-[#0a0f1d] p-0.5"
                      style={{ 
                        transform: hoveredCard ? "translateZ(45px) rotate(3deg)" : "translateZ(20px) rotate(-1deg)"
                      }}
                    >
                      <div className="relative w-full h-full overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={`${item.label} real-world representation`}
                          fill
                          className="object-cover transition-transform duration-[2500ms]"
                          style={{
                            transform: hoveredCard ? "scale(1.05)" : "scale(1.0)"
                          }}
                          sizes="200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/40 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* LAYER 3: MICRO FLOATING TAG */}
                    <div
                      className="absolute top-[-10px] right-[20px] bg-marigold text-ink font-mono text-[9px] font-black px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 select-none"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <Plus size={10} className="text-ink" />
                      <span>{item.extraLabel.toUpperCase()}: {item.extraValue}</span>
                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

          {/* D. RIGHT EDGE SLIDE TRACKER INDICATOR */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 font-mono text-[9px] text-[#FBF6EC]/30">
            {proofData.map((item, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={item.id}
                  aria-label={`Go to slide 0${idx + 1}: ${item.label}`}
                  onClick={() => {
                    // Quick page navigation by target offset if they click indicator
                    const scrollTarget = containerRef.current;
                    if (scrollTarget) {
                      const scrollStart = scrollTarget.offsetTop;
                      const scrollHeight = scrollTarget.clientHeight;
                      const targetScroll = scrollStart + (idx * 0.25 + 0.18) * scrollHeight;
                      window.scrollTo({ top: targetScroll, behavior: "smooth" });
                    }
                  }}
                  className="flex items-center gap-3 text-right hover:text-[#FBF6EC] transition-all group"
                >
                  <span className={`w-1.5 h-1.5 rounded-full border transition-all duration-300 ${
                    isActive 
                      ? "border-marigold bg-marigold scale-150 shadow-[0_0_8px_var(--color-marigold)]" 
                      : "border-border/30 bg-transparent scale-75 group-hover:scale-100"
                  }`} />
                  <span className={`tracking-widest transition-all duration-300 ${
                    isActive 
                      ? "text-marigold opacity-100 font-bold" 
                      : "opacity-30 group-hover:opacity-60"
                  }`}>
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      ) : (
        /* ========================================================
           MOBILE & TABLET VERSION: EDITORIAL VAULT STACK
           ======================================================== */
        <div className="px-6 py-24 max-w-[640px] mx-auto flex flex-col bg-[#0a0f1d] text-[#FBF6EC]">
          
          {/* Mobile Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-marigold">
              <ShieldCheck size={11} className="text-marigold" />
              SECTION 06 // ARCHIVE OF PROOF
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-black text-[#FBF6EC] leading-tight">
              The Evidence <br />
              <span className="font-serif italic text-marigold font-normal">Behind Aarohan.</span>
            </h2>
            <p className="mt-4 text-slate text-xs leading-relaxed font-semibold">
              Credentials are not claims. We present official gazettes, quality certifications, and scheme liaison registrations that stand behind our storefront.
            </p>
          </div>

          {/* Staggered Vertical Feed of High-Fidelity Documents */}
          <div className="space-y-20">
            {proofData.map((item, idx) => {
              return (
                <div key={item.id} className="relative flex flex-col border-b border-border/10 pb-12 last:border-b-0">
                  
                  {/* Step HUD Floating Badge */}
                  <div className="flex justify-between items-center mb-4 text-[9px] font-mono text-slate/50">
                    <span className="text-marigold font-bold uppercase tracking-widest">
                      EVIDENCE 0{idx + 1} // {item.type}
                    </span>
                    <span>{item.coords}</span>
                  </div>

                  {/* Overlapping Document Frame Visual */}
                  <div className="relative w-full rounded-2xl overflow-hidden bg-[#0d1525] border border-border/20 p-5 shadow-raised mb-6">
                    
                    {/* Header info */}
                    <div className="flex justify-between items-start border-b border-border/10 pb-3">
                      <div className="flex flex-col">
                        <span className="font-mono text-[7px] text-marigold tracking-wider font-bold">
                          REGISTRATION RECORD
                        </span>
                        <h3 className="font-display text-lg font-extrabold text-[#FBF6EC] mt-0.5">
                          {item.label}
                        </h3>
                      </div>
                      <span className="font-mono text-[7px] text-slate/40 border border-border/10 px-1.5 py-0.5 rounded uppercase font-bold">
                        {item.stampText.split("//")[0]}
                      </span>
                    </div>

                    {/* Metadata Readout */}
                    <div className="my-4 space-y-2 text-[11px] leading-relaxed">
                      <div className="flex justify-between">
                        <span className="text-slate/50 font-mono text-[8px] font-semibold">AUTHORITY:</span>
                        <span className="text-[#FBF6EC] font-semibold">{item.authority}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate/50 font-mono text-[8px] font-semibold">CERTIFICATE ID:</span>
                        <span className="text-marigold font-mono font-bold">{item.certNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate/50 font-mono text-[8px] font-semibold">{item.extraLabel.toUpperCase()}:</span>
                        <span className="text-indigo-400 font-bold">{item.extraValue}</span>
                      </div>
                      <p className="text-slate/80 text-[11px] pt-2.5 border-t border-border/10 font-semibold">
                        {item.body}
                      </p>
                    </div>

                    {/* Photo embed within the certificate */}
                    <div className="relative w-full h-[180px] rounded-xl overflow-hidden mt-4 border border-border/10">
                      <Image
                        src={item.image}
                        alt={`${item.label} detail`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, 500px"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-ink/10" />
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Exit Section Visual Anchor (A clean resolution linking into the next section) */}
          <div className="mt-12 pt-8 border-t border-border/10 text-center flex flex-col items-center">
            <span className="text-[9px] font-mono text-slate/50 tracking-[0.25em] uppercase font-bold">
              VERIFICATION AUDIT COMPLETE
            </span>
            <Lock size={16} className="text-marigold mt-4 animate-bounce" />
          </div>

        </div>
      )}
    </motion.div>
  );
}
