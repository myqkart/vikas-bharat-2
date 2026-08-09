"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Compass, CheckCircle2, ChevronRight, Award } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";

// Helper for premium, bright Unsplash images
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const missionPhotos = {
  // Tall Portrait: Proud Indian merchant/retailer in vibrant clothing (The Seed)
  portrait: u("photo-1540910419892-4a36d2c3266c", 800),
  // Environmental: Indian community marketplace street (The Ripple)
  market: u("photo-1542838132-92c53300491e", 1000),
  // Detail: Close-up of writing on ledger or documentation (Direct Support)
  ledger: u("photo-1506784983877-45594efa4cbe", 600),
  // Future/Progress: Modern digital collaboration & planning (The Canopy)
  progress: u("photo-1522441815192-d9f04eb0615c", 800)
};

export default function CompanyMission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll animations linked to section view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Background drift of the Hindi text "संकल्प"
  const xDriftRaw = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const xDrift = useTransform(xDriftRaw, (val) => isDesktop ? val : "0%");

  // Image parallax coordinates
  const yPortraitRaw = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const yMarketRaw = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const yLedgerRaw = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yProgressRaw = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const yPortrait = useTransform(yPortraitRaw, (val) => isDesktop ? val : 0);
  const yMarket = useTransform(yMarketRaw, (val) => isDesktop ? val : 0);
  const yLedger = useTransform(yLedgerRaw, (val) => isDesktop ? val : 0);
  const yProgress = useTransform(yProgressRaw, (val) => isDesktop ? val : 0);

  // Background concentric ripples scaling
  const rippleScaleRaw = useTransform(scrollYProgress, [0, 0.8], [0.85, 1.15]);
  const rippleScale = useTransform(rippleScaleRaw, (val) => isDesktop ? val : 1);

  // Spotlight card variants
  const spotlightVariants: any = {
    inactive: {
      opacity: 0.28,
      filter: "blur(1.5px)",
      scale: 0.98,
      y: 12,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    active: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="company-mission"
      ref={sectionRef}
      className="noise-overlay relative overflow-hidden bg-gradient-to-b from-paper-deep via-paper-deep to-paper px-6 py-28 sm:px-8 lg:py-40"
    >
      {/* Background Decorative Mesh Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_65%,rgba(245,166,35,0.055),transparent_50%)] pointer-events-none -z-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(30,62,114,0.045),transparent_55%)] pointer-events-none -z-30" />

      {/* Repeating fine grid coordinates */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none select-none -z-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="missionGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#12294D" strokeWidth="0.8" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#missionGridPattern)" />
        </svg>
      </div>

      {/* ========================================================
          BACKGROUND TYPOGRAPHY & SVG STORYTELLING LAYERS
         ======================================================== */}

      {/* Giant drifting outlined background text: "संकल्प" (Resolve / Intent) */}
      <motion.div
        className="absolute top-[32%] left-[5%] select-none pointer-events-none -z-20 font-display text-[15vw] font-black uppercase tracking-[0.2em] text-transparent opacity-[0.022]"
        style={{ WebkitTextStroke: "1.5px var(--color-ink)", x: xDrift } as any}
      >
        संकल्प
      </motion.div>

      {/* Concentric orbit lines behind left column images (Expanding Ripple) */}
      <motion.div
        style={{ scale: rippleScale }}
        className="absolute top-[15%] left-[-150px] lg:left-[-100px] w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] opacity-[0.09] pointer-events-none -z-10 text-indigo"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" strokeWidth="0.5" strokeDasharray="3 4" />
          <circle cx="50" cy="50" r="36" strokeWidth="0.35" />
          <circle cx="50" cy="50" r="24" strokeWidth="0.5" strokeDasharray="1 2" />
        </svg>
      </motion.div>

      {/* Corner marks (handcrafted micro-details) */}
      <div className="absolute bottom-12 left-8 text-[9px] font-mono tracking-widest text-slate/40 pointer-events-none select-none hidden lg:block">
        VIKAS BHARK DESK · EST. 2016
      </div>
      <div className="absolute top-12 right-12 text-marigold/30 text-lg font-bold font-mono pointer-events-none select-none">+</div>
      <div className="absolute bottom-24 right-16 text-indigo/25 text-lg font-bold font-mono pointer-events-none select-none">×</div>

      {/* ======================================================== */}

      <div className="mx-auto max-w-[1240px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-16 lg:gap-12 items-start">

          {/* ========================================================
              LEFT COLUMN: ASYMMETRIC PHOTOGRAPHY COLLAGE
             ======================================================== */}
          <div className="relative w-full h-[580px] sm:h-[640px] lg:h-[700px] z-10">

            {/* 1. Large Progress Backdrop (Bleeds off the top edge) */}
            <motion.div
              style={{ y: yProgress }}
              className="absolute right-0 top-0 w-[55%] h-[32%] opacity-90 rounded-2xl overflow-hidden border border-border/40 shadow-card"
            >
              <Image
                src={missionPhotos.progress}
                alt="Digital growth and business support coordination"
                fill
                sizes="(max-width: 1024px) 40vw, 320px"
                className="object-cover"
              />
            </motion.div>

            {/* 2. Environmental Marketplace Background (Ripple context) */}
            <motion.div
              style={{ y: yMarket }}
              className="absolute left-0 top-[22%] w-[64%] h-[40%] opacity-[0.85] rounded-[24px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-raised"
            >
              <Image
                src={missionPhotos.market}
                alt="Active local Indian retail market scene"
                fill
                sizes="(max-width: 1024px) 50vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* 3. Dominant Tall Portrait Arch Crop (The Seed) */}
            <motion.div
              style={{ y: yPortrait }}
              className="absolute left-[20%] top-[12%] w-[58%] h-[68%] z-20"
            >
              <TiltCard className="w-full h-full" intensity={8}>
                <div 
                  className="relative w-full h-full bg-white p-3 shadow-[0_24px_50px_-16px_rgba(18,41,77,0.3)] border border-border/60"
                  style={{ borderRadius: '180px 180px 24px 24px' }}
                >
                  <div 
                    className="relative w-full h-full overflow-hidden"
                    style={{ borderRadius: '170px 170px 14px 14px' }}
                  >
                    <Image
                      src={missionPhotos.portrait}
                      alt="Indian small shopkeeper standing proud"
                      fill
                      sizes="(max-width: 1024px) 45vw, 340px"
                      className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                      priority
                    />
                    {/* Visual overlap label */}
                    <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none z-10 px-4">
                      <span className="font-handwriting text-2xl text-white drop-shadow-[0_2px_4px_rgba(18,41,77,0.8)] block">
                        Sapno Se Safalta Tak
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* 4. Ledger Detail/Process Overlay (Direct Support) */}
            <motion.div
              style={{ y: yLedger }}
              className="absolute right-[4%] bottom-[6%] w-[42%] h-[28%] z-30"
            >
              <div className="relative w-full h-full bg-paper-deep p-2 shadow-[0_16px_40px_-8px_rgba(18,41,77,0.25)] border border-marigold/30 rounded-2xl rotate-[4deg] hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={missionPhotos.ledger}
                    alt="Hands writing down financial ledger details"
                    fill
                    sizes="(max-width: 1024px) 30vw, 220px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Decorative Orbit Dot Indicator */}
            <div className="absolute top-[8%] left-[8%] w-4 h-4 rounded-full bg-marigold border-4 border-white animate-ping pointer-events-none" />
            <div className="absolute top-[8%] left-[8%] w-4 h-4 rounded-full bg-marigold border-2 border-white pointer-events-none" />

          </div>

          {/* ========================================================
              RIGHT COLUMN: IMMERSIVE EDITORIAL MANIFESTO
             ======================================================== */}
          <div className="flex flex-col items-start text-left lg:pl-4">
            
            {/* Header label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate uppercase border-l-2 border-marigold pl-3.5 mb-6">
              OUR UNDERLYING BELIEF
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-ink tracking-tight">
              An ecosystem built on <br className="hidden sm:inline" />
              <span className="italic text-indigo font-normal font-display">shared progress.</span>
            </h2>

            {/* Prose stream with scroll-based spotlight highlights */}
            <div className="mt-12 space-y-12 lg:space-y-16 w-full">

              {/* CARD 01: THE MISSION (The Seed) */}
              <motion.div
                initial="inactive"
                whileInView="active"
                viewport={{ once: false, amount: 0.55 }}
                variants={spotlightVariants}
                className="relative pl-6 lg:pl-10 border-l border-border/60 flex flex-col items-start group"
              >
                {/* Active indicator dot */}
                <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-marigold scale-0 group-hover:scale-100 transition-transform duration-300" />
                
                <span className="text-[10px] font-bold text-slate/40 font-mono tracking-widest mb-1.5 block">
                  01 / PURPOSE
                </span>
                
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight mb-4 flex items-center gap-2">
                  To Simplify the Hardest Steps.
                </h3>
                
                <p className="text-slate leading-relaxed font-sans text-base sm:text-lg font-medium max-w-[540px]">
                  Traditional credit and licensing frameworks are heavily biased toward corporations. Our mission is to make capital, complex subsidies, and trade certifications accessible for every serious micro-merchant and startup in India. We represent those who are excluded by technical jargon and portal barriers.
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-marigold-dark">
                  <span>ESTD. 2016 · pan-India guidance</span>
                  <ChevronRight size={12} />
                </div>
              </motion.div>

              {/* CARD 02: THE GOALS (The Active Drive) */}
              <motion.div
                initial="inactive"
                whileInView="active"
                viewport={{ once: false, amount: 0.55 }}
                variants={spotlightVariants}
                className="relative pl-6 lg:pl-10 border-l border-border/60 flex flex-col items-start group"
              >
                <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-indigo scale-0 group-hover:scale-100 transition-transform duration-300" />

                <span className="text-[10px] font-bold text-slate/40 font-mono tracking-widest mb-1.5 block">
                  02 / THE ACTIVE FORCE
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight mb-4">
                  Bilingual clarity, stamped results.
                </h3>

                <p className="text-slate leading-relaxed font-sans text-base sm:text-lg font-medium max-w-[540px] mb-6">
                  We don't sell promises; we deliver outcomes. We measure our success on actual funds credited and licenses validated. Through a walk-in consultant model, we bring high-end financial liaison skills right to your storefront.
                </p>

                {/* Sub-goals inside the prose flow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[480px]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-indigo mt-0.5 shrink-0" />
                    <span className="text-xs font-semibold text-slate">Bilingual walkthroughs (Hindi/English)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-indigo mt-0.5 shrink-0" />
                    <span className="text-xs font-semibold text-slate">No fees until initial screen is passed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-indigo mt-0.5 shrink-0" />
                    <span className="text-xs font-semibold text-slate">Direct bank & agency coordination</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-indigo mt-0.5 shrink-0" />
                    <span className="text-xs font-semibold text-slate">Kirana & food trucks get equal care</span>
                  </div>
                </div>
              </motion.div>

              {/* CARD 03: THE FUTURE (The Expansion) */}
              <motion.div
                initial="inactive"
                whileInView="active"
                viewport={{ once: false, amount: 0.55 }}
                variants={spotlightVariants}
                className="relative pl-6 lg:pl-10 border-l border-border/60 flex flex-col items-start group"
              >
                <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-success scale-0 group-hover:scale-100 transition-transform duration-300" />

                <span className="text-[10px] font-bold text-slate/40 font-mono tracking-widest mb-1.5 block">
                  03 / ROAD AHEAD
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight mb-4">
                  100+ Help Desks across Bharat.
                </h3>

                <p className="text-slate leading-relaxed font-sans text-base sm:text-lg font-medium max-w-[540px]">
                  Our future is offline and physical. We believe that digital tools require direct human support. By 2028, Aarohan plans to deploy over 100 walk-in consulting hubs, assisting more than 1,00,000 merchants to secure mudra subsidies and digital licenses.
                </p>

                {/* Micro-stats cards */}
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex flex-col">
                    <span className="font-display font-black text-3xl text-ink">₹1,000 Cr+</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate mt-1">MSME Capital Target</span>
                  </div>
                  <div className="w-[1px] h-8 bg-border hidden sm:block" />
                  <div className="flex flex-col">
                    <span className="font-display font-black text-3xl text-ink">100+</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate mt-1">Walk-in Cities</span>
                  </div>
                  <div className="w-[1px] h-8 bg-border hidden sm:block" />
                  <div className="flex flex-col">
                    <span className="font-display font-black text-3xl text-ink">1 Lakh+</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate mt-1">Merchants Empowered</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
