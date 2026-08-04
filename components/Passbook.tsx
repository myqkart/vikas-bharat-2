"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { passbook } from "@/lib/content";
import { Building2, Percent, TrendingUp } from "lucide-react";

// CountUp Component for ledger statistics
function CountUp({ to, prefix = "", suffix = "", decimal = 0 }: { to: number; prefix?: string; suffix?: string; decimal?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();
    const duration = 2000;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      const currentValue = easeProgress * to;

      if (ref.current) {
        const formatted = decimal > 0 
          ? currentValue.toFixed(decimal) 
          : Math.floor(currentValue).toLocaleString("en-IN");
        ref.current.textContent = prefix + formatted + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, to, decimal, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

// WALLET SVG ILLUSTRATION (Column 1)
const WalletIllustration = () => (
  <svg viewBox="0 0 80 60" className="w-16 h-12 shrink-0 select-none drop-shadow-[0_4px_8px_rgba(16,185,129,0.1)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Notes sticking out */}
    <rect x="25" y="10" width="22" height="15" rx="1.5" transform="rotate(-12 25 10)" fill="#A7F3D0" stroke="#059669" strokeWidth="1" />
    <rect x="35" y="8" width="22" height="15" rx="1.5" transform="rotate(8 35 8)" fill="#D1FAE5" stroke="#10B981" strokeWidth="1" />
    
    {/* Wallet Body */}
    <rect x="15" y="20" width="48" height="32" rx="6" fill="#10B981" />
    {/* Wallet Flap */}
    <path d="M 45 28 L 58 28 C 61 28, 61 38, 58 38 L 45 38 Z" fill="#047857" />
    {/* Silver snap button */}
    <circle cx="55" cy="33" r="2.5" fill="#E5E7EB" stroke="#374151" strokeWidth="0.5" />
    
    {/* Golden Coins */}
    <circle cx="20" cy="52" r="5" fill="#FBBF24" stroke="#D97706" strokeWidth="0.75" />
    <circle cx="16" cy="52" r="5" fill="#FCD34D" stroke="#D97706" strokeWidth="0.75" />
  </svg>
);

// PEOPLE/AVATARS SVG ILLUSTRATION (Column 2)
const AvatarsIllustration = () => (
  <svg viewBox="0 0 80 60" className="w-16 h-12 shrink-0 select-none drop-shadow-[0_4px_8px_rgba(59,130,246,0.1)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Avatar Left */}
    <g transform="translate(16, 20)">
      <circle cx="10" cy="8" r="6" fill="url(#blueAvatarGrad)" />
      <path d="M 0 24 C 0 17, 20 17, 20 24 Z" fill="url(#blueAvatarGrad)" />
    </g>
    {/* Avatar Right */}
    <g transform="translate(44, 20)">
      <circle cx="10" cy="8" r="6" fill="url(#blueAvatarGrad)" />
      <path d="M 0 24 C 0 17, 20 17, 20 24 Z" fill="url(#blueAvatarGrad)" />
    </g>
    {/* Avatar Center/Front */}
    <g transform="translate(28, 14)">
      <circle cx="12" cy="10" r="7.5" fill="url(#frontAvatarGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M 0 28 C 0 20, 24 20, 24 28 Z" fill="url(#frontAvatarGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
    </g>
    
    <defs>
      <linearGradient id="blueAvatarGrad" x1="0" y1="0" x2="20" y2="24">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="frontAvatarGrad" x1="0" y1="0" x2="24" y2="28">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
  </svg>
);

// TIMER/STOPWATCH SVG ILLUSTRATION (Column 3)
const TimerIllustration = () => (
  <svg viewBox="0 0 80 60" className="w-16 h-12 shrink-0 select-none drop-shadow-[0_4px_8px_rgba(245,158,11,0.1)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Speed lines */}
    <line x1="12" y1="24" x2="24" y2="24" className="stroke-orange-400" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="32" x2="20" y2="32" className="stroke-orange-400" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="40" x2="22" y2="40" className="stroke-orange-400" strokeWidth="2" strokeLinecap="round" />
    
    {/* Timer Body */}
    <circle cx="45" cy="32" r="18" className="stroke-orange-500 fill-white" strokeWidth="3" />
    <circle cx="45" cy="32" r="14" className="fill-orange-50" />
    
    {/* Dial markings */}
    <line x1="45" y1="17" x2="45" y2="20" className="stroke-orange-500" strokeWidth="1.5" />
    <line x1="45" y1="44" x2="45" y2="47" className="stroke-orange-500" strokeWidth="1.5" />
    <line x1="30" y1="32" x2="33" y2="32" className="stroke-orange-500" strokeWidth="1.5" />
    <line x1="57" y1="32" x2="60" y2="32" className="stroke-orange-500" strokeWidth="1.5" />
    
    {/* Buttons */}
    <rect x="42" y="10" width="6" height="4" rx="1" fill="#EA580C" />
    <rect x="56" y="15" width="4" height="4" rx="1" transform="rotate(30 56 15)" fill="#EA580C" />
    
    {/* Watch Hand */}
    <path d="M 45 32 L 53 25" className="stroke-orange-600" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="45" cy="32" r="2" fill="#EA580C" />
  </svg>
);

// SHIELD SVG ILLUSTRATION (Column 4)
const GuardShieldIllustration = () => (
  <svg viewBox="0 0 80 60" className="w-16 h-12 shrink-0 select-none drop-shadow-[0_4px_8px_rgba(139,92,246,0.1)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield outer border */}
    <path 
      d="M 26 15 C 26 15, 40 10, 40 10 C 40 10, 54 15, 54 15 C 54 32, 57 48, 40 55 C 23 48, 26 32, 26 15 Z" 
      fill="url(#purpleShieldGrad)" 
      className="stroke-white/40" 
      strokeWidth="1" 
    />
    
    {/* Shield inner overlay */}
    <path 
      d="M 30 18 C 30 18, 40 14, 40 14 C 40 14, 50 18, 50 18 C 50 31, 52 44, 40 50 C 28 44, 30 31, 30 18 Z" 
      fill="none" 
      className="stroke-purple-300/40" 
      strokeWidth="1" 
    />
    
    {/* Checkmark */}
    <path 
      d="M 34 32 L 38 36 L 46 27" 
      className="stroke-white" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    
    <defs>
      <linearGradient id="purpleShieldGrad" x1="40" y1="10" x2="40" y2="55">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#7C3AED" />
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
  PAID: { border: "border-emerald-500/40", text: "text-emerald-600", bg: "bg-emerald-50/60" },
  DONE: { border: "border-blue-500/40", text: "text-blue-600", bg: "bg-blue-50/60" },
  FAST: { border: "border-orange-500/40", text: "text-orange-600", bg: "bg-orange-50/60" },
  OK: { border: "border-purple-500/40", text: "text-purple-600", bg: "bg-purple-50/60" },
};

const progressColors: Record<string, { track: string; dot: string }> = {
  PAID: { track: "bg-emerald-100", dot: "bg-emerald-500" },
  DONE: { track: "bg-blue-100", dot: "bg-blue-500" },
  FAST: { track: "bg-orange-100", dot: "bg-orange-500" },
  OK: { track: "bg-purple-100", dot: "bg-purple-500" },
};

export default function Passbook() {
  const statsConfig = [
    {
      to: 480,
      decimal: 0,
      prefix: "₹",
      suffix: "Cr+",
      label: "Money delivered",
      stamp: "PAID",
      illustration: <WalletIllustration />
    },
    {
      to: 12000,
      decimal: 0,
      suffix: "+",
      label: "Businesses helped",
      stamp: "DONE",
      illustration: <AvatarsIllustration />
    },
    {
      to: 48,
      decimal: 0,
      suffix: " hrs",
      label: "First reply time",
      stamp: "FAST",
      illustration: <TimerIllustration />
    },
    {
      to: 95,
      decimal: 0,
      suffix: "%",
      label: "Applications approved",
      stamp: "OK",
      illustration: <GuardShieldIllustration />
    }
  ];

  const extrasConfig = [
    {
      label: "DPIIT-recognised startups",
      to: 245430,
      decimal: 0,
      theme: "orange",
      iconBg: "bg-orange-500/10 text-orange-600",
      btnClass: "border-orange-500/20 text-orange-600 hover:bg-orange-500 hover:text-white hover:shadow-orange-500/20",
      icon: <Building2 className="h-5 w-5" />
    },
    {
      label: "PAN India 80 IAC tax exemption",
      to: 4567,
      decimal: 0,
      theme: "blue",
      iconBg: "bg-blue-500/10 text-blue-600",
      btnClass: "border-blue-500/20 text-blue-600 hover:bg-blue-500 hover:text-white hover:shadow-blue-500/20",
      icon: <Percent className="h-5 w-5" />
    },
    {
      label: "Startup turnover threshold",
      to: 200,
      decimal: 0,
      prefix: "₹",
      suffix: " Cr",
      theme: "green",
      iconBg: "bg-emerald-500/10 text-emerald-600",
      btnClass: "border-emerald-500/20 text-emerald-600 hover:bg-emerald-50 hover:text-white hover:shadow-emerald-500/20",
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];

  return (
    <section id="ledger" className="relative px-5 py-24 lg:px-8 bg-[#FEFCF7] overflow-hidden">
      {/* Background soft grids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-br from-indigo-50/15 to-transparent blur-3xl pointer-events-none" />
      
      <div className="absolute top-12 right-12 text-orange-400/15 font-sans select-none pointer-events-none text-xl">✦</div>
      <div className="absolute bottom-20 left-16 text-indigo/10 font-sans select-none pointer-events-none text-2xl font-bold">+</div>

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

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest text-indigo uppercase">
            Live Case Statistics
          </span>
          <h2 className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
            {passbook.title}
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-semibold text-slate/75 leading-relaxed">
            {passbook.subtitle}
          </p>
          <p className="mt-3.5 text-xs font-semibold leading-relaxed text-slate/50">
            {passbook.body}
          </p>
        </div>

        {/* Segmented Ledger Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl rounded-[32px] border border-border bg-white shadow-raised backdrop-blur-md overflow-hidden"
        >
          <div className="grid grid-cols-1 divide-y lg:grid-cols-4 lg:divide-y-0 lg:divide-x divide-slate-100">
            {statsConfig.map((stat, idx) => {
              const stamp = stampStyles[stat.stamp];
              const progress = progressColors[stat.stamp];
              return (
                <motion.div
                  key={stat.label}
                  className="flex flex-col justify-between p-6 sm:p-8 relative group hover:bg-slate-50/25 transition-all duration-300"
                >
                  <div>
                    {/* Stamp at top-right */}
                    <motion.span
                      initial={{ rotate: -18, opacity: 0, scale: 0.7 }}
                      whileInView={{ rotate: -8, opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 165, damping: 12, delay: 0.15 + idx * 0.05 }}
                      className={`absolute right-4 top-4 select-none rounded-lg border-2 border-dashed px-2 py-0.5 font-sans text-[10px] font-black uppercase tracking-widest ${stamp.border} ${stamp.text} ${stamp.bg}`}
                    >
                      {stat.stamp}
                    </motion.span>

                    {/* Illustration & Numeric stat */}
                    <div className="flex items-center gap-4 mt-4">
                      {stat.illustration}
                      
                      <div className="flex flex-col justify-center min-w-0">
                        <span className="font-sans text-3.5xl font-black text-[#1a2f4c] tracking-tight whitespace-nowrap">
                          <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} decimal={stat.decimal} />
                        </span>
                        <p className="mt-1 text-xs font-bold text-slate/75 uppercase tracking-wide">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Progress Bar */}
                  <div className="w-full mt-8">
                    <div className={`w-full h-1 ${progress.track} rounded-full relative`}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
                        className={`h-full ${progress.dot} rounded-full absolute left-0 top-0`}
                      />
                      <motion.div 
                        initial={{ left: 0 }}
                        whileInView={{ left: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
                        className={`h-2 w-2 ${progress.dot} rounded-full absolute -top-0.5 -translate-x-1/2 border border-white`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Extras Row */}
        <motion.ul
          className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={localStaggerContainer}
        >
          {extrasConfig.map((extra) => (
            <motion.li
              key={extra.label}
              variants={localFadeUp}
              className="rounded-2.5xl border border-border bg-white p-5 flex items-center shadow-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Circular Icon background */}
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 ${extra.iconBg}`}>
                  {extra.icon}
                </div>
                
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold text-slate/50 uppercase tracking-wider block truncate">
                    {extra.label}
                  </span>
                  <span className="font-sans text-xl font-black text-[#1a2f4c] mt-0.5">
                    <CountUp to={extra.to} prefix={extra.prefix} suffix={extra.suffix} decimal={extra.decimal} />
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
