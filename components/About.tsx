"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Users, Clock, ShieldCheck, MapPin } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll parallax for collage elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yTopImage = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const yBottomImage = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const yCircle = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  // Parallax for background SVG decorations to make them feel alive
  const yDecor1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yDecor2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Magnetic button hover logic
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { stiffness: 120, damping: 12 });
  const springY = useSpring(btnY, { stiffness: 120, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    btnX.set(mouseX * 0.35);
    btnY.set(mouseY * 0.35);
  };

  const handleMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  // Variants for clean entrances
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.03, opacity: 0 },
    visible: {
      scale: 1.0,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.9, duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-paper px-6 py-24 sm:px-8 lg:py-32"
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(245,166,35,0.06),transparent_55%)] pointer-events-none -z-30" />

      {/* Repeating Dot Grid across the FULL section */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none -z-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="fullSectionDots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#12294D" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#fullSectionDots)" />
        </svg>
      </div>

      {/* ========================================================
          DIFFERENT BACKGROUND SVGS DISTRIBUTED EQUALLY IN SECTION
         ======================================================== */}

      {/* 1. TOP-LEFT: Rotating Concentric Dashed Circles */}
      <motion.div
        style={{ y: yDecor1 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        className="absolute -top-12 -left-12 w-48 h-48 opacity-[0.16] pointer-events-none -z-10 text-marigold"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="50" cy="50" r="32" strokeWidth="0.75" />
          <circle cx="50" cy="50" r="18" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      {/* 2. MIDDLE-LEFT (behind copy): Repeating Plus/Cross Grid */}
      <motion.div
        style={{ y: yDecor2 }}
        className="absolute top-[32%] left-[4%] w-36 h-36 opacity-[0.14] pointer-events-none -z-10 text-indigo"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="plusPattern" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <line x1="11" y1="5" x2="11" y2="17" stroke="currentColor" strokeWidth="1.2" />
            <line x1="5" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="1.2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#plusPattern)" />
        </svg>
      </motion.div>

      {/* 3. CENTER-TOP: Floating Sine Wave Path Accent */}
      <div className="absolute top-[8%] left-[34%] w-[260px] h-[80px] opacity-[0.1] pointer-events-none -z-10 text-indigo/70">
        <svg className="w-full h-full" viewBox="0 0 260 80" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40 C 50 10, 80 70, 130 40 S 210 10, 250 40" strokeDasharray="4 6" />
        </svg>
      </div>

      {/* 4. BOTTOM-LEFT (near stats card): Structured Diagonal Isometric Lines */}
      <motion.div
        style={{ y: yDecor1 }}
        className="absolute bottom-[220px] left-[3%] w-48 h-32 opacity-[0.08] pointer-events-none -z-10 text-marigold"
      >
        <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.75" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 40 L150 -60 M-50 70 L180 -50 M-50 100 L210 -40 M-50 130 L240 -30 M-50 160 L270 -20" />
        </svg>
      </motion.div>

      {/* 5. BOTTOM-RIGHT: Geometric Corner Starburst/Grid Accent */}
      <motion.div
        style={{ y: yDecor2 }}
        className="absolute bottom-[240px] right-[4%] w-44 h-44 opacity-[0.09] pointer-events-none -z-10 text-marigold"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="10" x2="90" y2="90" />
          <line x1="90" y1="10" x2="10" y2="90" />
          <circle cx="50" cy="50" r="30" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </motion.div>

      {/* ======================================================== */}

      <div className="mx-auto max-w-[1200px] relative">
        {/* Main Two-Column Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-16 lg:grid-cols-[45%_55%] lg:gap-12 items-center"
        >
          {/* LEFT SIDE - Copy Area */}
          <motion.div className="order-2 lg:order-1 text-center lg:text-left z-10 flex flex-col items-center lg:items-start">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-xs lg:text-sm font-bold tracking-widest text-slate uppercase"
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-marigold animate-pulse" />
              ABOUT BHAROSA
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-4 font-display text-4xl sm:text-5xl lg:text-[52px] font-semibold leading-[1.12] text-ink tracking-tight"
            >
              Built for dukaan owners,<br className="hidden sm:inline lg:hidden" /> not dashboards.
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-slate leading-relaxed font-sans font-medium max-w-md"
            >
              Simple help. Real results.
              <br />
              Human support.
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <motion.a
                href="#contact"
                style={{ x: springX, y: springY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="inline-flex items-center gap-3 rounded-full border border-marigold/60 bg-white/50 px-7 py-3.5 text-base font-bold text-ink backdrop-blur-sm shadow-card hover:bg-white/90 hover:border-marigold transition-colors duration-300 group"
              >
                Know more about us
                <span className="text-marigold group-hover:translate-x-1.5 transition-transform duration-200 ease-out">
                  →
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Collage Container */}
          <div className="order-1 lg:order-2 relative w-full h-[380px] sm:h-[480px] lg:h-[520px] max-w-[620px] mx-auto z-10">
            
            {/* Parallax Background Circle SVG with Radial Gradient */}
            <motion.div
              style={{ y: yCircle }}
              className="absolute -right-8 top-[10%] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] -z-20 pointer-events-none opacity-85"
            >
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" fill="url(#aboutCircleGrad)" />
                <defs>
                  <radialGradient id="aboutCircleGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F5A623" stopOpacity="0.14" />
                    <stop offset="65%" stopColor="#F5A623" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#F5A623" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Dotted Pattern SVG Decoration 1 (Top-Left of Collage, Slow Rotation) */}
            <motion.div
              style={{ y: yCircle }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
              className="absolute top-4 left-[26%] w-24 h-24 -z-10 opacity-75 pointer-events-none text-marigold/30"
            >
              <svg className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dotPatternLeft" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dotPatternLeft)" />
              </svg>
            </motion.div>

            {/* Dotted Pattern SVG Decoration 2 (Right-Middle of Collage, Slow Rotation) */}
            <motion.div
              style={{ y: yCircle }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
              className="absolute top-[40%] -right-4 w-20 h-32 -z-10 opacity-60 pointer-events-none text-marigold/30"
            >
              <svg className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dotPatternRight" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dotPatternRight)" />
              </svg>
            </motion.div>

            {/* Top Image (Large Portrait Rectangle) - Verified Unsplash Image */}
            <motion.div
              style={{ y: yTopImage }}
              variants={imageVariants}
              className="absolute top-0 right-[4%] w-[62%] h-[78%] rounded-[28px] overflow-hidden shadow-raised z-10 bg-paper-deep"
            >
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
                alt="Indian business owner crossing arms in front of his shop"
                fill
                sizes="(max-width: 768px) 60vw, 400px"
                className="object-cover object-center"
                priority
              />
            </motion.div>

            {/* Bottom Image (Smaller Landscape Overlapping) */}
            <motion.div
              style={{ y: yBottomImage }}
              variants={imageVariants}
              className="absolute bottom-2 left-[4%] w-[54%] h-[48%] rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(18,41,77,0.18)] z-20 bg-paper-deep"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                alt="Friendly consultation meeting with laptops on table"
                fill
                sizes="(max-width: 768px) 50vw, 320px"
                className="object-cover"
              />
            </motion.div>

            {/* Handwritten Quote */}
            <motion.div
              variants={quoteVariants}
              className="absolute bottom-[-32px] right-[4%] rotate-[-4deg] text-right font-handwriting text-2xl sm:text-[28px] text-indigo leading-tight select-none z-30"
            >
              <p>Your growth.</p>
              <p className="mt-0.5">Our responsibility.</p>
              {/* Organic hand-drawn look stroke */}
              <svg className="w-36 h-3 text-marigold mt-1.5 ml-auto" viewBox="0 0 150 12" fill="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, duration: 0.9 }}
                  d="M10 8 C 45 4, 105 10, 140 3"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM STATS STRIP - Horizontal Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 lg:mt-32 rounded-[32px] bg-white px-6 py-10 sm:px-10 lg:px-8 lg:py-9 shadow-[0_12px_45px_-12px_rgba(18,41,77,0.06)] border border-border/10 max-w-[1060px] mx-auto hover:-translate-y-1.5 transition-all duration-500 ease-out"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-0 items-center justify-items-center">
            {/* Stat Column 1 */}
            <div className="flex items-center gap-4 justify-start w-full px-4 lg:px-8 md:border-r md:border-border/30">
              <div className="w-12 h-12 rounded-full bg-success-bg text-success flex items-center justify-center shrink-0">
                <Users size={20} strokeWidth={2.25} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-ink tracking-tight">3,000+</div>
                <div className="text-xs sm:text-sm text-slate font-semibold leading-tight mt-0.5">Businesses Helped</div>
              </div>
            </div>

            {/* Stat Column 2 */}
            <div className="flex items-center gap-4 justify-start w-full px-4 lg:px-8 md:border-r md:border-border/30">
              <div className="w-12 h-12 rounded-full bg-marigold/[0.08] text-marigold-dark flex items-center justify-center shrink-0">
                <Clock size={20} strokeWidth={2.25} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-ink tracking-tight">48 hrs</div>
                <div className="text-xs sm:text-sm text-slate font-semibold leading-tight mt-0.5">First Reply Time</div>
              </div>
            </div>

            {/* Stat Column 3 */}
            <div className="flex items-center gap-4 justify-start w-full px-4 lg:px-8 md:border-r md:border-border/30">
              <div className="w-12 h-12 rounded-full bg-indigo/[0.06] text-indigo flex items-center justify-center shrink-0">
                <ShieldCheck size={20} strokeWidth={2.25} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-ink tracking-tight">95%</div>
                <div className="text-xs sm:text-sm text-slate font-semibold leading-tight mt-0.5">Satisfaction Approved</div>
              </div>
            </div>

            {/* Stat Column 4 */}
            <div className="flex items-center gap-4 justify-start w-full px-4 lg:px-8">
              <div className="w-12 h-12 rounded-full bg-marigold/[0.08] text-marigold flex items-center justify-center shrink-0">
                <MapPin size={20} strokeWidth={2.25} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-ink tracking-tight">4 Cities</div>
                <div className="text-xs sm:text-sm text-slate font-semibold leading-tight mt-0.5">Local Presence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
