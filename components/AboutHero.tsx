"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Landmark, MapPin, Sparkles, Users, Award, Coins, Calendar } from "lucide-react";
import { photos } from "@/lib/photos";
import TiltCard from "@/components/motion/TiltCard";

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll parallax for collage items and background elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yCollage1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCollage2 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yCollage3 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacityCollage = useTransform(scrollYProgress, [0, 0.8], [1, 0.45]);

  // Parallax transforms for the stats cards (staggered wave motion)
  const yStat1Raw = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const yStat2Raw = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const yStat3Raw = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const yStat4Raw = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const yStat5Raw = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const yStat1 = useTransform(yStat1Raw, (val) => isDesktop ? val : 0);
  const yStat2 = useTransform(yStat2Raw, (val) => isDesktop ? val : 0);
  const yStat3 = useTransform(yStat3Raw, (val) => isDesktop ? val : 0);
  const yStat4 = useTransform(yStat4Raw, (val) => isDesktop ? val : 0);
  const yStat5 = useTransform(yStat5Raw, (val) => isDesktop ? val : 0);

  // Framer Motion variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.12,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="noise-overlay relative overflow-hidden bg-paper px-6 pt-32 pb-24 sm:px-8 lg:pt-40 lg:pb-36"
    >
      {/* Background Mesh Gradient (moves on drift animation) */}
      <div className="mesh-gradient absolute inset-0 opacity-[0.45] pointer-events-none -z-30" />

      {/* Atmospheric Blur glow blobs */}
      <div className="absolute top-[10%] left-[5%] w-[380px] h-[380px] rounded-full bg-marigold/10 blur-[100px] pointer-events-none -z-20 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-indigo/800 opacity-[0.06] blur-[120px] pointer-events-none -z-20" />

      {/* Repeating fine grid overlay */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none select-none -z-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="heroGridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#12294D" strokeWidth="0.8" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#heroGridPattern)" />
        </svg>
      </div>

      {/* Concentric Circle Orbit lines in the background */}
      <motion.div
        style={{ y: yBg }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 180, ease: "linear" }}
        className="absolute top-[12%] right-[-100px] w-[500px] h-[500px] opacity-[0.12] pointer-events-none -z-10 text-indigo"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" strokeWidth="0.5" strokeDasharray="3 5" />
          <circle cx="50" cy="50" r="38" strokeWidth="0.35" />
          <circle cx="50" cy="50" r="22" strokeWidth="0.5" strokeDasharray="1 3" />
        </svg>
      </motion.div>

      {/* Giant outlined background text */}
      <div 
        className="absolute top-[18%] left-1/2 -translate-x-1/2 select-none pointer-events-none -z-20 font-display text-[13vw] font-black uppercase tracking-[0.15em] text-transparent opacity-[0.02]"
        style={{ WebkitTextStroke: "1.5px var(--color-ink)" }}
      >
        AAROHAN
      </div>

      <div className="mx-auto max-w-[1240px] relative">
        


        {/* Main Grid: Info & Narrative (Left) vs Collage (Right) */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[52%_48%] lg:gap-8 items-start">
          
          {/* LEFT SIDE - Info & Story */}
          <div className="flex flex-col items-start text-left relative">
            
            {/* Corner Decorative Ornaments */}
            <div className="absolute -top-6 -left-6 w-3 h-3 border-t-2 border-l-2 border-marigold/50 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-3 h-3 border-t-2 border-r-2 border-marigold/25 lg:hidden pointer-events-none" />

            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="inline-flex items-center gap-2 rounded-full border border-indigo/10 bg-indigo/[0.04] px-4 py-1.5 text-xs font-bold tracking-wider text-indigo uppercase"
            >
              <Sparkles size={12} className="text-marigold fill-marigold/20" />
              Empowering Small Scale Enterprises
            </motion.div>

            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-ink tracking-tight"
            >
              Built for dukaan owners,{" "}
              <span className="relative inline-block text-indigo">
                not dashboards.
                {/* Wavy handwritten underline path */}
                <svg className="absolute left-0 bottom-[-10px] w-full h-[12px] text-marigold" viewBox="0 0 280 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
                    d="M5 8 C 65 4, 135 10, 275 3"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="mt-8 text-lg font-handwriting text-indigo-dark text-2xl sm:text-3xl leading-snug font-bold italic"
            >
              "Sapno Se Safalta Tak — empowering local merchants with capital, subsidies, and compliance clarity."
            </motion.p>

            {/* Founder Mini Label */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="mt-6 flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-white/60 border border-border/30 shadow-card backdrop-blur-sm"
            >
              <Award size={18} className="text-marigold" />
              <div className="text-xs font-semibold text-slate tracking-wide">
                Founded in 2016 by <span className="font-bold text-ink">Kamlesh Mundel</span> (Founder & MD)
              </div>
            </motion.div>

            {/* Core Narrative Text (Short Description: 5 sentences) */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="mt-8 text-slate leading-relaxed font-sans text-base sm:text-lg max-w-[620px] space-y-4"
            >
              <p>
                <span className="font-display font-bold text-3xl float-left text-marigold mr-2.5 line-height-none mt-1">A</span>
                arohan Finance Pvt. Ltd. was established to bridge the gap between traditional banking institutions and the hard-working micro, small, and medium enterprises (MSMEs) of India. We began our journey as a simple walk-in help desk in Ahmedabad, supporting local shopkeepers who were overwhelmed by portal logins and complicated loan forms. Today, we stand as a trusted multi-city financial consultancy operating in 50+ cities, simplifying company incorporation, GST registration, Mudra loans, and PMEGP subsidies. We believe that securing capital or licensing should be straightforward, transparent, and completely stress-free.
              </p>
            </motion.div>

            {/* Differentiators Checklist */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px] border-t border-border/40 pt-8"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-success-bg text-success flex items-center justify-center font-bold text-xs">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Bilingual Support</h4>
                  <p className="text-xs text-slate mt-0.5">Jargon-free guidance in Hindi & English.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-success-bg text-success flex items-center justify-center font-bold text-xs">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-ink">WhatsApp-First Status</h4>
                  <p className="text-xs text-slate mt-0.5">Real-time case tracking on your phone.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-success-bg text-success flex items-center justify-center font-bold text-xs">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Walk-in Consultancy</h4>
                  <p className="text-xs text-slate mt-0.5">Physical help desks in 4 major hubs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-success-bg text-success flex items-center justify-center font-bold text-xs">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-ink">Direct Follow-up</h4>
                  <p className="text-xs text-slate mt-0.5">We coordinate with banks and portals directly.</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE - Image Collage with Parallax */}
          <motion.div
            style={{ opacity: opacityCollage }}
            className="relative w-full h-[460px] sm:h-[540px] lg:h-[580px] z-10 select-none"
          >
            
            {/* Background Graphic Plus/Cross marks */}
            <div className="absolute top-[8%] left-[2%] text-indigo/25 text-xl font-bold font-mono pointer-events-none">+</div>
            <div className="absolute bottom-[12%] right-[8%] text-indigo/25 text-xl font-bold font-mono pointer-events-none">+</div>
            <div className="absolute top-[48%] right-[12%] text-indigo/15 text-2xl font-bold font-mono pointer-events-none">×</div>

            {/* 1. Main Portrait (Team) with Polaroid/Glass Frame (parallaxes up) */}
            <motion.div
              style={{ y: yCollage1 }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[8%] top-[8%] w-[68%] h-[68%] z-10"
            >
              <TiltCard className="w-full h-full rounded-[28px] overflow-hidden bg-white p-3 shadow-raised border border-border/50">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                  <Image
                    src={photos.aboutTeam}
                    alt="Aarohan Finance Team supporting clients"
                    fill
                    sizes="(max-width: 1024px) 50vw, 420px"
                    className="object-cover"
                    priority
                  />

                </div>
              </TiltCard>
            </motion.div>

            {/* 2. Secondary Overlapping Image (Shopkeeper) with Arch Crop Mask (parallaxes down) */}
            <motion.div
              style={{ y: yCollage2 }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-[2%] bottom-[12%] w-[48%] h-[48%] z-20"
            >
              <TiltCard intensity={15} className="w-full h-full rounded-[24px] overflow-hidden bg-paper-deep p-2.5 shadow-raised border border-marigold/30">
                {/* Arch Crop mask via class style */}
                <div className="relative w-full h-full rounded-[18px] overflow-hidden" style={{ borderRadius: '18px 18px 8px 8px' }}>
                  <Image
                    src={photos.heroShopkeeper}
                    alt="Small dukaan owner working in his store"
                    fill
                    sizes="(max-width: 1024px) 35vw, 280px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[9px] font-bold text-marigold uppercase tracking-wider block">Grassroots Focus</span>
                    <span className="text-[12px] font-bold text-white block mt-0.5">Empowering Dukaan Owners</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* 3. Tertiary Overlapping Mini Image (Office) (parallaxes slightly up) */}
            <motion.div
              style={{ y: yCollage3 }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[3%] bottom-[6%] w-[34%] h-[30%] z-30"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white p-2 shadow-[0_16px_36px_-8px_rgba(18,41,77,0.22)] border border-border/40 -rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={photos.aboutOffice}
                    alt="Aarohan Finance walk-in office desk"
                    fill
                    sizes="(max-width: 1024px) 25vw, 180px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating EST. 2016 Stamp Badge with rotating circle frame */}
            <motion.div
              style={{ y: yCollage1 }}
              className="absolute -top-3 left-[2%] w-24 h-24 z-20 pointer-events-none"
            >
              <svg className="w-full h-full text-indigo animate-spin-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="circlePath" d="M 50 12 A 38 38 0 1 1 49.9 12" />
                <text className="text-[8.5px] font-bold uppercase tracking-[0.14em]" fill="currentColor">
                  <textPath href="#circlePath" startOffset="0%">
                    Aarohan Finance • Estd. 2016 •
                  </textPath>
                </text>
              </svg>
              {/* Inner floating center stamp */}
              <div className="absolute inset-[30px] rounded-full bg-marigold text-ink flex items-center justify-center font-display font-black text-xs shadow-md">
                10Y
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* BOTTOM STATISTICS STRIP - Modern Glassmorphic Offset Card Grid */}
        <div className="mt-24 lg:mt-32 relative z-20">
          
          {/* Decorative mesh background glow for stats section */}
          <div className="absolute inset-0 bg-gradient-to-r from-marigold/10 via-indigo/5 to-success/10 blur-[90px] pointer-events-none -z-10" />

          {/* Grid Layout: Staggered columns on desktop, responsive stack on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            
            {/* Stat Card 1: Experience */}
            <motion.div
              style={{ y: yStat1 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={1}
              variants={fadeInVariants}
              className="h-full"
            >
              <TiltCard intensity={6} className="h-full bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-border/30 shadow-card hover:border-marigold/50 hover:shadow-raised transition-all duration-300 flex flex-col justify-between group overflow-hidden relative">
                {/* Asymmetric dash boundary frame */}
                <div className="absolute inset-0 border border-dashed border-slate/10 rounded-2xl -translate-x-1.5 -translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-marigold/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-marigold/10 text-marigold-dark flex items-center justify-center font-bold">
                    <Calendar size={18} strokeWidth={2.25} />
                  </div>
                  <span className="text-[10px] font-bold text-slate/40 font-mono tracking-widest">№ 01</span>
                </div>
                
                <div className="mt-10">
                  <span className="text-3xl font-black text-ink tracking-tight block group-hover:translate-x-1 transition-transform duration-300">10+ Years</span>
                  <span className="text-[10px] font-bold text-slate uppercase tracking-wider mt-2.5 block">Market Experience</span>
                </div>
              </TiltCard>
            </motion.div>

            {/* Stat Card 2: Customers */}
            <motion.div
              style={{ y: yStat2 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={2}
              variants={fadeInVariants}
              className="h-full"
            >
              <TiltCard intensity={6} className="h-full bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-border/30 shadow-card hover:border-indigo/50 hover:shadow-raised transition-all duration-300 flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute inset-0 border border-dashed border-slate/10 rounded-2xl translate-x-1.5 -translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo/10 text-indigo flex items-center justify-center font-bold">
                    <Users size={18} strokeWidth={2.25} />
                  </div>
                  <span className="text-[10px] font-bold text-slate/40 font-mono tracking-widest">№ 02</span>
                </div>
                
                <div className="mt-10">
                  <span className="text-3xl font-black text-ink tracking-tight block group-hover:translate-x-1 transition-transform duration-300">25,000+</span>
                  <span className="text-[10px] font-bold text-slate uppercase tracking-wider mt-2.5 block">Customers Served</span>
                </div>
              </TiltCard>
            </motion.div>

            {/* Stat Card 3: Loans Disbursed */}
            <motion.div
              style={{ y: yStat3 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={3}
              variants={fadeInVariants}
              className="h-full"
            >
              <TiltCard intensity={6} className="h-full bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-border/30 shadow-card hover:border-success/50 hover:shadow-raised transition-all duration-300 flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute inset-0 border border-dashed border-slate/10 rounded-2xl -translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-success/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-success/10 text-success flex items-center justify-center font-bold">
                    <Coins size={18} strokeWidth={2.25} />
                  </div>
                  <span className="text-[10px] font-bold text-slate/40 font-mono tracking-widest">№ 03</span>
                </div>
                
                <div className="mt-10">
                  <span className="text-3xl font-black text-ink tracking-tight block group-hover:translate-x-1 transition-transform duration-300">₹150+ Cr</span>
                  <span className="text-[10px] font-bold text-slate uppercase tracking-wider mt-2.5 block">Loans Disbursed</span>
                </div>
              </TiltCard>
            </motion.div>

            {/* Stat Card 4: Banking Partners */}
            <motion.div
              style={{ y: yStat4 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={4}
              variants={fadeInVariants}
              className="h-full"
            >
              <TiltCard intensity={6} className="h-full bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-border/30 shadow-card hover:border-indigo/50 hover:shadow-raised transition-all duration-300 flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute inset-0 border border-dashed border-slate/10 rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo/10 text-indigo flex items-center justify-center font-bold">
                    <Landmark size={18} strokeWidth={2.25} />
                  </div>
                  <span className="text-[10px] font-bold text-slate/40 font-mono tracking-widest">№ 04</span>
                </div>
                
                <div className="mt-10">
                  <span className="text-3xl font-black text-ink tracking-tight block group-hover:translate-x-1 transition-transform duration-300">12+</span>
                  <span className="text-[10px] font-bold text-slate uppercase tracking-wider mt-2.5 block">Banking Partners</span>
                </div>
              </TiltCard>
            </motion.div>

            {/* Stat Card 5: Service Locations */}
            <motion.div
              style={{ y: yStat5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={5}
              variants={fadeInVariants}
              className="h-full"
            >
              <TiltCard intensity={6} className="h-full bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-border/30 shadow-card hover:border-marigold/50 hover:shadow-raised transition-all duration-300 flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute inset-0 border border-dashed border-slate/10 rounded-2xl -translate-x-1.5 -translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-marigold/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-marigold/10 text-marigold-dark flex items-center justify-center font-bold">
                    <MapPin size={18} strokeWidth={2.25} />
                  </div>
                  <span className="text-[10px] font-bold text-slate/40 font-mono tracking-widest">№ 05</span>
                </div>
                
                <div className="mt-10">
                  <span className="text-3xl font-black text-ink tracking-tight block group-hover:translate-x-1 transition-transform duration-300">50+ Cities</span>
                  <span className="text-[10px] font-bold text-slate uppercase tracking-wider mt-2.5 block">Service Locations</span>
                </div>
              </TiltCard>
            </motion.div>

          </div>
        </div>

      </div>

      {/* SVG Wave separator bottom border */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[40px] text-paper-deep" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor" />
        </svg>
      </div>

      {/* Tailwind rotate animation setting style */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>

    </section>
  );
}
