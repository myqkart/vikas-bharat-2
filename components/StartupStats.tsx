"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { startupIndia } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

// CountUp Component for premium stat counting
function CountUp({ to, decimal = 0, suffix = "", prefix = "" }: { to: number; decimal?: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!inView) return;
    
    const startTime = performance.now();
    const duration = 2000; // 2 seconds
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress); // Ease out quad
      const currentValue = easeProgress * to;
      
      if (ref.current) {
        const formattedValue = decimal > 0 
          ? currentValue.toFixed(decimal) 
          : Math.floor(currentValue).toLocaleString("en-IN");
        ref.current.textContent = prefix + formattedValue + suffix;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, to, decimal, prefix, suffix]);
  
  return <span ref={ref}>{prefix}{(0).toFixed(decimal)}{suffix}</span>;
}

// 3D Building SVG Illustration (Card 1)
const BuildingIllustration = () => (
  <svg viewBox="0 0 100 80" className="w-20 h-16 shrink-0 select-none drop-shadow-[0_4px_8px_rgba(59,130,246,0.1)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="40" r="28" fill="#EFF6FF" />
    
    {/* Towers */}
    <rect x="42" y="22" width="16" height="34" rx="2" fill="url(#blueBldg)" />
    <rect x="30" y="32" width="12" height="24" rx="1.5" fill="url(#blueBldgDark)" />
    <rect x="58" y="36" width="12" height="20" rx="1.5" fill="url(#blueBldgDark)" />
    
    {/* Flag */}
    <line x1="50" y1="22" x2="50" y2="15" stroke="#2563EB" strokeWidth="1.5" />
    <path d="M 50 15 L 59 18 L 50 21 Z" fill="#2563EB" />
    
    {/* Windows */}
    <rect x="34" y="36" width="4" height="4" rx="0.5" fill="#93C5FD" />
    <rect x="46" y="27" width="3" height="4" rx="0.5" fill="#93C5FD" />
    <rect x="51" y="27" width="3" height="4" rx="0.5" fill="#93C5FD" />
    <rect x="46" y="35" width="3" height="4" rx="0.5" fill="#93C5FD" />
    <rect x="51" y="35" width="3" height="4" rx="0.5" fill="#93C5FD" />
    <rect x="46" y="43" width="3" height="4" rx="0.5" fill="#93C5FD" />
    <rect x="51" y="43" width="3" height="4" rx="0.5" fill="#93C5FD" />
    <rect x="62" y="40" width="4" height="4" rx="0.5" fill="#93C5FD" />
    
    {/* Pedestal Base */}
    <ellipse cx="50" cy="56" rx="24" ry="4" fill="#DBEAFE" />

    <defs>
      <linearGradient id="blueBldg" x1="50" y1="22" x2="50" y2="56">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="blueBldgDark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
  </svg>
);

// 3D Document checkmark Illustration (Card 2)
const DocumentCheckIllustration = () => (
  <svg viewBox="0 0 100 80" className="w-20 h-16 shrink-0 select-none drop-shadow-[0_4px_8px_rgba(16,185,129,0.1)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="40" r="28" fill="#ECFDF5" />
    
    {/* Paper Sheet */}
    <rect x="36" y="18" width="28" height="38" rx="3" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
    
    {/* Paper Lines */}
    <line x1="42" y1="26" x2="58" y2="26" stroke="#D1FAE5" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="42" y1="34" x2="58" y2="34" stroke="#D1FAE5" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="42" y1="42" x2="52" y2="42" stroke="#D1FAE5" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Checkmark badge */}
    <circle cx="62" cy="50" r="9" fill="#10B981" />
    <path d="M 57 50 L 60 53 L 67 46" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 3D Chart / Coins Illustration (Card 3)
const ChartCoinsIllustration = () => (
  <svg viewBox="0 0 100 80" className="w-20 h-16 shrink-0 select-none drop-shadow-[0_4px_8px_rgba(245,158,11,0.1)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="40" r="28" fill="#FFF7ED" />
    
    {/* Stacks of Coins */}
    {/* Coin Stack Left */}
    <ellipse cx="40" cy="50" rx="8" ry="3.5" fill="#F59E0B" stroke="#D97706" strokeWidth="0.75" />
    <ellipse cx="40" cy="46" rx="8" ry="3.5" fill="#FBBF24" stroke="#D97706" strokeWidth="0.75" />
    
    {/* Coin Stack Right */}
    <ellipse cx="54" cy="52" rx="9" ry="4" fill="#F59E0B" stroke="#D97706" strokeWidth="0.75" />
    <ellipse cx="54" cy="48" rx="9" ry="4" fill="#FBBF24" stroke="#D97706" strokeWidth="0.75" />
    <ellipse cx="54" cy="44" rx="9" ry="4" fill="#FDE68A" stroke="#D97706" strokeWidth="0.75" />
    
    {/* Ascending Trend Line */}
    <path d="M 30 42 L 44 32 L 62 23" stroke="#EA580C" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 54 23 L 62 23 L 62 31" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Gazette Alert Icon (Alert Box)
const GazetteAlertIcon = () => (
  <svg viewBox="0 0 80 80" className="w-12 h-12 shrink-0 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="32" fill="url(#alertBgGrad)" />
    
    {/* Document sheet */}
    <rect x="26" y="22" width="22" height="30" rx="2" fill="#FFFFFF" stroke="#F97316" strokeWidth="1.5" />
    <line x1="32" y1="30" x2="42" y2="30" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="36" x2="42" y2="36" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="42" x2="38" y2="42" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round" />
    
    {/* Bell */}
    <path d="M 44 48 C 44 42, 54 42, 54 48 L 56 52 L 42 52 Z" fill="#FBBF24" stroke="#EA580C" strokeWidth="1" />
    <circle cx="49" cy="54" r="2" fill="#D97706" />

    <defs>
      <linearGradient id="alertBgGrad" x1="0" y1="0" x2="80" y2="80">
        <stop offset="0%" stopColor="#FFEDD5" />
        <stop offset="100%" stopColor="#FFDBB5" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
);

const localStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const localFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring" as const, 
      stiffness: 100, 
      damping: 20 
    } 
  }
};

const stampStyles: Record<string, { border: string; text: string; bg: string }> = {
  DPIIT: { border: "border-blue-500/20", text: "text-blue-600", bg: "bg-blue-500/[0.05]" },
  TAX: { border: "border-emerald-500/20", text: "text-emerald-600", bg: "bg-emerald-500/[0.05]" },
  NEW: { border: "border-orange-500/20", text: "text-orange-600", bg: "bg-orange-500/[0.05]" },
};

const cardThemeStyles: Record<string, { cardBg: string; waveColor: string; knobColor: string }> = {
  DPIIT: { 
    cardBg: "from-blue-500/[0.03] to-transparent border-blue-500/10 hover:border-blue-500/20 bg-white/70", 
    waveColor: "stroke-blue-200/50",
    knobColor: "fill-blue-500/80"
  },
  TAX: { 
    cardBg: "from-emerald-500/[0.03] to-transparent border-emerald-500/10 hover:border-emerald-500/20 bg-white/70", 
    waveColor: "stroke-emerald-200/50",
    knobColor: "fill-emerald-500/80"
  },
  NEW: { 
    cardBg: "from-orange-500/[0.03] to-transparent border-orange-500/10 hover:border-orange-500/20 bg-white/70", 
    waveColor: "stroke-orange-200/50",
    knobColor: "fill-orange-500/80"
  },
};

export default function StartupStats() {
  const statsConfig = [
    {
      to: 245430,
      decimal: 0,
      label: "DPIIT Recognised Startups",
      stamp: "DPIIT",
      illustration: <BuildingIllustration />
    },
    {
      to: 4567,
      decimal: 0,
      label: "80 IAC Tax Exemption",
      stamp: "TAX",
      illustration: <DocumentCheckIllustration />
    },
    {
      to: 200,
      decimal: 0,
      prefix: "₹",
      suffix: " Cr",
      label: "Startup turnover threshold",
      stamp: "NEW",
      illustration: <ChartCoinsIllustration />
    }
  ];

  return (
    <section
      id={startupIndia.id}
      aria-labelledby="startup-india-heading"
      className="relative px-5 py-20 sm:py-24 bg-[#FEFCF7] overflow-hidden"
    >
      {/* Background warm decorations */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-100/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-50/15 to-transparent blur-3xl pointer-events-none" />

      {/* Left Side Background SVG Decorator */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64 pointer-events-none select-none z-0 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 128 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dot Grid (5x8) */}
          <g className="fill-orange-300/30">
            {Array.from({ length: 5 }).map((_, col) => 
              Array.from({ length: 8 }).map((_, row) => (
                <circle key={`l-${col}-${row}`} cx={16 + col * 12} cy={40 + row * 12} r="1.5" />
              ))
            )}
          </g>
          {/* Dotted curve sweeping in */}
          <path 
            d="M -10 180 Q 40 160 30 110 T 80 40" 
            className="stroke-orange-300/40" 
            strokeWidth="1.5" 
            strokeDasharray="4 4" 
          />
        </svg>
      </div>

      {/* Right Side Background SVG Decorator */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 pointer-events-none select-none z-0 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 128 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dot Grid (5x8) */}
          <g className="fill-purple-300/30">
            {Array.from({ length: 5 }).map((_, col) => 
              Array.from({ length: 8 }).map((_, row) => (
                <circle key={`r-${col}-${row}`} cx={60 + col * 12} cy={80 + row * 12} r="1.5" />
              ))
            )}
          </g>
          {/* Dotted curve sweeping out */}
          <path 
            d="M 138 60 Q 88 80 98 130 T 48 200" 
            className="stroke-purple-300/40" 
            strokeWidth="1.5" 
            strokeDasharray="4 4" 
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px] z-10">
        
        {/* Center Aligned Header - UNTOUCHED */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-semibold tracking-[0.16em] text-slate uppercase">
            {startupIndia.eyebrow}
          </p>
          <h2
            id="startup-india-heading"
            className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]"
          >
            {startupIndia.heading}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">{startupIndia.sub}</p>
        </Reveal>

        {/* Redesigned Premium Horizontal Cards */}
        <motion.ul
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={localStaggerContainer}
        >
          {statsConfig.map((stat, idx) => {
            const stamp = stampStyles[stat.stamp];
            const theme = cardThemeStyles[stat.stamp];
            return (
              <motion.li
                key={stat.label}
                variants={localFadeUp}
                whileHover="hover"
                className={`relative overflow-hidden rounded-[24px] border bg-gradient-to-b ${theme.cardBg} p-6 shadow-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[148px]`}
              >
                {/* Stamp at top-right */}
                <span
                  className={`absolute top-4 right-4 rounded-lg border px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${stamp.border} ${stamp.text} ${stamp.bg}`}
                >
                  {stat.stamp}
                </span>

                <div className="flex items-center gap-4 mt-2">
                  {stat.illustration}
                  
                  <div className="flex flex-col min-w-0">
                    <span className="font-sans text-3xl font-black text-[#1a2f4c] tracking-tight block">
                      <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} decimal={stat.decimal} />
                    </span>
                    <span className="text-xs font-semibold text-slate/70 mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                </div>

                {/* Animated bottom wavy curve */}
                <div className="w-full h-10 mt-4 relative overflow-hidden pointer-events-none">
                  <svg className="absolute bottom-0 left-0 w-full h-8" fill="none" preserveAspectRatio="none">
                    <path 
                      d="M 0 25 Q 60 10 120 22 T 240 18 T 360 25" 
                      className={theme.waveColor} 
                      strokeWidth="1.5" 
                    />
                    <circle cx="330" cy="22" r="2.5" className={theme.knobColor} />
                  </svg>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Redesigned Gazette Update alert box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl rounded-3xl border border-dashed border-orange-200 bg-orange-500/[0.01] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm"
        >
          <GazetteAlertIcon />
          
          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-black tracking-widest text-orange-600/90 uppercase block">
              Gazette update · 4 Feb 2026
            </span>
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-700 font-semibold">
              {startupIndia.notice}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
