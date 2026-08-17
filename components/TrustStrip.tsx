"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Clock, CheckCircle, MapPin } from "lucide-react";

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

// 3D Rocket Illustration
const RocketIllustration = () => (
  <svg viewBox="0 0 200 160" className="w-full h-32 select-none drop-shadow-[0_6px_12px_rgba(245,158,11,0.12)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid System / Ring Orbits */}
    <circle cx="100" cy="115" r="50" className="stroke-amber-500/10" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="100" cy="115" r="35" className="stroke-amber-500/10" strokeWidth="1" />
    <ellipse cx="100" cy="115" rx="70" ry="18" className="stroke-amber-500/15" strokeWidth="1" transform="rotate(-10 100 115)" />
    
    {/* Base Smoke Cloud */}
    <ellipse cx="100" cy="132" rx="40" ry="12" fill="url(#smokeGlow)" />
    <path 
      d="M 65 140 C 55 130, 80 118, 95 128 C 105 115, 125 120, 125 130 C 135 122, 150 128, 142 138 Z" 
      fill="url(#smokeGrad)" 
      className="opacity-90"
    />
    
    {/* Floating Rocket Group */}
    <motion.g 
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    >
      {/* Rocket Flame */}
      <motion.path 
        d="M 94 108 L 100 128 L 106 108 Z" 
        fill="url(#flameGrad)"
        animate={{ scaleY: [1, 1.4, 1], y: [0, -1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
      <motion.circle 
        cx="100" cy="122" r="4" 
        className="fill-orange-400 blur-[2px]"
        animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0.2, 0.8] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      />
      
      {/* Rocket Fins */}
      <path d="M 85 96 L 76 108 L 88 108 Z" className="fill-orange-500" />
      <path d="M 115 96 L 124 108 L 112 108 Z" className="fill-orange-500" />
      
      {/* Rocket Body */}
      <path d="M 88 65 C 88 65, 88 98, 88 104 C 88 108, 112 108, 112 104 C 112 98, 112 65, 112 65 Z" fill="url(#rocketBodyGrad)" className="stroke-white/20" strokeWidth="1" />
      
      {/* Rocket Nose Cone */}
      <path d="M 88 65 C 88 45, 100 25, 100 25 C 100 25, 112 45, 112 65 Z" className="fill-orange-600" />
      
      {/* Window */}
      <circle cx="100" cy="74" r="5" className="fill-slate-100 stroke-orange-600/40" strokeWidth="2.5" />
      <circle cx="98" cy="72" r="1.5" className="fill-white" />
    </motion.g>

    {/* Sparkles / Gold Stars */}
    <g>
      <motion.circle cx="45" cy="40" r="2.5" className="fill-amber-400" animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2.2 }} />
      <motion.circle cx="160" cy="50" r="1.5" className="fill-amber-400" animate={{ scale: [1.2, 0.7, 1.2], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }} />
      <motion.circle cx="145" cy="100" r="2" className="fill-amber-400" animate={{ scale: [0.7, 1.3, 0.7], opacity: [0.3, 0.9, 0.3] }} transition={{ repeat: Infinity, duration: 1.8, delay: 1 }} />
    </g>

    {/* Gradients */}
    <defs>
      <linearGradient id="rocketBodyGrad" x1="88" y1="65" x2="112" y2="108">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F5F5F7" />
      </linearGradient>
      <linearGradient id="flameGrad" x1="100" y1="108" x2="100" y2="128">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="60%" stopColor="#EF4444" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="smokeGrad" x1="100" y1="115" x2="100" y2="142">
        <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FFF7ED" stopOpacity="0.2" />
      </linearGradient>
      <radialGradient id="smokeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// 3D Shield Illustration
const ShieldIllustration = () => (
  <svg viewBox="0 0 200 160" className="w-full h-32 select-none drop-shadow-[0_6px_12px_rgba(59,130,246,0.12)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid & Ring Orbits */}
    <circle cx="100" cy="115" r="48" className="stroke-blue-500/10" strokeWidth="1" strokeDasharray="3 3" />
    <ellipse cx="100" cy="120" rx="55" ry="14" className="stroke-blue-500/10" strokeWidth="1" />
    
    {/* Pedestal Base */}
    <ellipse cx="100" cy="122" rx="45" ry="12" fill="url(#pedestalShadow)" />
    <ellipse cx="100" cy="118" rx="38" ry="10" className="fill-slate-100 stroke-slate-200" strokeWidth="1" />
    <ellipse cx="100" cy="114" rx="38" ry="10" className="fill-white stroke-slate-100" strokeWidth="1" />
    
    {/* Floating Shield Group */}
    <motion.g
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
    >
      {/* Shield Base Shape */}
      <path 
        d="M 80 45 C 80 45, 100 37, 100 37 C 100 37, 120 45, 120 45 C 120 70, 124 95, 100 108 C 76 95, 80 70, 80 45 Z" 
        fill="url(#shieldGrad)" 
        className="stroke-white/30" 
        strokeWidth="1.5" 
      />
      {/* Inner Shield border detail */}
      <path 
        d="M 85 49 C 85 49, 100 42, 100 42 C 100 42, 115 49, 115 49 C 115 68, 118 88, 100 99 C 82 88, 85 68, 85 49 Z" 
        fill="none" 
        className="stroke-blue-300/40" 
        strokeWidth="1" 
      />
      {/* Tick mark */}
      <path 
        d="M 92 70 L 98 76 L 109 63" 
        className="stroke-white" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </motion.g>

    {/* Orbit Particles */}
    <motion.circle 
      cx="65" cy="85" r="3" 
      className="fill-blue-400" 
      animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />
    <motion.circle 
      cx="140" cy="65" r="4.5" 
      className="fill-blue-500" 
      animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.circle 
      cx="70" cy="50" r="2" 
      className="fill-blue-300" 
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ repeat: Infinity, duration: 2.4 }}
    />

    {/* Gradients */}
    <defs>
      <linearGradient id="shieldGrad" x1="100" y1="37" x2="100" y2="108">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
      <radialGradient id="pedestalShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// 3D Analytics Chart Illustration
const ChartIllustration = () => (
  <svg viewBox="0 0 200 160" className="w-full h-32 select-none drop-shadow-[0_6px_12px_rgba(16,185,129,0.12)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid & Ring Orbits */}
    <ellipse cx="100" cy="120" rx="60" ry="14" className="stroke-emerald-500/10" strokeWidth="1" />
    <line x1="50" y1="100" x2="150" y2="100" className="stroke-emerald-500/10" strokeWidth="1" />
    <line x1="50" y1="75" x2="150" y2="75" className="stroke-emerald-500/5" strokeWidth="1" strokeDasharray="3 3" />
    
    {/* Pedestal Base */}
    <ellipse cx="100" cy="122" rx="50" ry="12" fill="url(#chartPedestalShadow)" />
    <ellipse cx="100" cy="118" rx="42" ry="10" className="fill-slate-100 stroke-slate-200" strokeWidth="1" />
    <ellipse cx="100" cy="114" rx="42" ry="10" className="fill-white stroke-slate-100" strokeWidth="1" />
    
    {/* Floating Chart Group */}
    <motion.g
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
    >
      {/* Rising Bar 1 */}
      <motion.rect 
        x="62" y="98" width="12" height="0" rx="2.5" 
        fill="url(#barGrad1)"
        animate={{ height: 28, y: 70 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* Rising Bar 2 */}
      <motion.rect 
        x="84" y="98" width="12" height="0" rx="2.5" 
        fill="url(#barGrad2)"
        animate={{ height: 44, y: 54 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
      />
      {/* Rising Bar 3 */}
      <motion.rect 
        x="106" y="98" width="12" height="0" rx="2.5" 
        fill="url(#barGrad3)"
        animate={{ height: 58, y: 40 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
      {/* Rising Bar 4 */}
      <motion.rect 
        x="128" y="98" width="12" height="0" rx="2.5" 
        fill="url(#barGrad4)"
        animate={{ height: 72, y: 26 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.45 }}
      />

      {/* Trend Line (Arrow curve) */}
      <motion.path 
        d="M 56 86 C 80 82, 100 50, 134 32" 
        className="stroke-emerald-400" 
        strokeWidth="3.5" 
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
      />
      <motion.path 
        d="M 126 31 L 135 31 L 135 40" 
        className="stroke-emerald-400" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      />
    </motion.g>

    {/* Gradients */}
    <defs>
      <linearGradient id="barGrad1" x1="68" y1="70" x2="68" y2="98">
        <stop offset="0%" stopColor="#A7F3D0" />
        <stop offset="100%" stopColor="#34D399" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="barGrad2" x1="90" y1="54" x2="90" y2="98">
        <stop offset="0%" stopColor="#6EE7B7" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="barGrad3" x1="112" y1="40" x2="112" y2="98">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="barGrad4" x1="134" y1="26" x2="134" y2="98">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <radialGradient id="chartPedestalShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#D1FAE5" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#D1FAE5" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// 3D Network Nodes / Stars Illustration
const NetworkIllustration = () => (
  <svg viewBox="0 0 200 160" className="w-full h-32 select-none drop-shadow-[0_6px_12px_rgba(139,92,246,0.12)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background connections ring */}
    <ellipse cx="100" cy="80" rx="55" ry="32" className="stroke-purple-500/10" strokeWidth="1" />
    
    {/* Pedestal Base */}
    <ellipse cx="100" cy="122" rx="42" ry="12" fill="url(#purplePedestalShadow)" />
    <ellipse cx="100" cy="118" rx="34" ry="9" className="fill-slate-100 stroke-slate-200" strokeWidth="1" />
    <ellipse cx="100" cy="114" rx="34" ry="9" className="fill-white stroke-slate-100" strokeWidth="1" />

    {/* Connected Nodes Lines */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
      style={{ transformOrigin: "100px 80px" }}
    >
      <path d="M 50 80 L 100 42 L 150 80 L 125 110 L 75 110 Z" className="stroke-purple-500/15" strokeWidth="1.5" />
      <path d="M 50 80 L 150 80 M 100 42 L 125 110 M 100 42 L 75 110" className="stroke-purple-500/15" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Outer Nodes */}
      <circle cx="50" cy="80" r="5.5" fill="url(#purpleNodeGrad)" className="stroke-white" strokeWidth="1" />
      <circle cx="100" cy="42" r="5.5" fill="url(#purpleNodeGrad)" className="stroke-white" strokeWidth="1" />
      <circle cx="150" cy="80" r="5.5" fill="url(#purpleNodeGrad)" className="stroke-white" strokeWidth="1" />
      <circle cx="125" cy="110" r="5.5" fill="url(#purpleNodeGrad)" className="stroke-white" strokeWidth="1" />
      <circle cx="75" cy="110" r="5.5" fill="url(#purpleNodeGrad)" className="stroke-white" strokeWidth="1" />
    </motion.g>

    {/* Floating Star Badge (Center) */}
    <motion.g
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
    >
      {/* Central Glass Globe */}
      <circle cx="100" cy="80" r="22" fill="url(#glassGlobeGrad)" className="stroke-white/60" strokeWidth="1" />
      <circle cx="100" cy="80" r="16" className="fill-amber-500/10 stroke-amber-500/20" strokeWidth="1" />
      
      {/* Gold Star */}
      <path 
        d="M 100 70 L 103.5 77.5 L 111.5 78 L 105.5 83.5 L 107.5 91 L 100 87 L 92.5 91 L 94.5 83.5 L 88.5 78 L 96.5 77.5 Z" 
        className="fill-amber-500" 
      />
    </motion.g>

    {/* Sparkle effects */}
    <motion.circle cx="50" cy="45" r="1.5" className="fill-purple-400" animate={{ scale: [1, 1.8, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2.2 }} />
    <motion.circle cx="150" cy="115" r="2" className="fill-purple-400" animate={{ scale: [1.6, 0.8, 1.6], opacity: [0.8, 0.2, 0.8] }} transition={{ repeat: Infinity, duration: 2.8, delay: 0.4 }} />

    {/* Gradients */}
    <defs>
      <linearGradient id="purpleNodeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="glassGlobeGrad" x1="100" y1="58" x2="100" y2="102">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#F3E8FF" stopOpacity="0.6" />
      </linearGradient>
      <radialGradient id="purplePedestalShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const localStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    }
  }
};

const localFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring" as const, 
      stiffness: 90, 
      damping: 20 
    } 
  }
};

const cardsData = [
  {
    to: 2.45,
    decimal: 2,
    suffix: "L+",
    badge: "MSME Registered",
    title: "Registry & Recognition",
    sub: "Direct portal integrations for Udyam registration and official DPIIT Startup status.",
    illustration: <RocketIllustration />,
    cardBg: "from-orange-500/[0.04] to-transparent border-orange-500/10 hover:border-orange-500/20",
    badgeStyles: "border-orange-500/20 bg-orange-500/[0.06] text-orange-600"
  },
  {
    to: 4567,
    decimal: 0,
    suffix: " Approved",
    badge: "ISO 9001:2015",
    title: "80 IAC Tax Exemption",
    sub: "Helping businesses secure corporate tax relief and ISO quality systems standards.",
    illustration: <ShieldIllustration />,
    cardBg: "from-blue-500/[0.04] to-transparent border-blue-500/10 hover:border-blue-500/20",
    badgeStyles: "border-blue-500/20 bg-blue-500/[0.06] text-blue-600"
  },
  {
    to: 200,
    decimal: 0,
    prefix: "₹",
    suffix: " Cr Limit",
    badge: "Govt. Scheme Partner",
    title: "Turnover Subsidy Cap",
    sub: "Enabling easy access to MUDRA loans, CGTMSE credit, and government grants.",
    illustration: <ChartIllustration />,
    cardBg: "from-emerald-500/[0.04] to-transparent border-emerald-500/10 hover:border-emerald-500/20",
    badgeStyles: "border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-600"
  },
  {
    to: 5.0,
    decimal: 1,
    suffix: " Google Rating",
    badge: "Noida Desk",
    title: "Trusted Support Network",
    sub: "Walk in at Sector 63, Noida — or connect from anywhere in India.",
    illustration: <NetworkIllustration />,
    cardBg: "from-purple-500/[0.04] to-transparent border-purple-500/10 hover:border-purple-500/20",
    badgeStyles: "border-purple-500/20 bg-purple-500/[0.06] text-purple-600"
  }
];

const features = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-indigo shrink-0" />,
    title: "Verified & Compliant",
    desc: "100% official & transparent"
  },
  {
    icon: <Clock className="h-5 w-5 text-indigo shrink-0" />,
    title: "Faster Processing",
    desc: "Reduced turnaround time"
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-indigo shrink-0" />,
    title: "End-to-End Support",
    desc: "From registration to growth"
  },
  {
    icon: <MapPin className="h-5 w-5 text-indigo shrink-0" />,
    title: "Local Presence",
    desc: "Noida walk-in. Pan-India support."
  }
];

export default function TrustStrip() {
  return (
    <section id="trust-scale" className="relative px-4 py-20 sm:py-24 bg-[#FEFCF7] overflow-hidden">
      {/* Backdrop Radial Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-100/25 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-50/20 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle Background Elements */}
      <div className="absolute top-16 left-12 text-orange-400/20 font-sans select-none pointer-events-none text-xl font-bold">+</div>
      <div className="absolute top-44 right-20 text-orange-400/25 font-sans select-none pointer-events-none text-lg">✦</div>
      <div className="absolute bottom-36 left-1/4 text-indigo/15 font-sans select-none pointer-events-none text-xl">✦</div>
      <div className="absolute bottom-20 right-1/4 text-orange-300/15 font-sans select-none pointer-events-none text-2xl font-bold">+</div>

      {/* Dotted Flow Line behind cards */}
      <svg className="absolute top-[52%] left-0 w-full h-24 pointer-events-none z-0" fill="none">
        <motion.path 
          d="M -100 50 Q 250 90 600 35 T 1300 55 T 2100 40" 
          className="stroke-orange-300/30" 
          strokeWidth="1.5" 
          strokeDasharray="6 6"
          animate={{ strokeDashoffset: [-120, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        />
      </svg>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Center Aligned Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black tracking-widest text-indigo uppercase"
          >
            Trust & Scale Indicators
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]"
          >
            Official Recognition · Verified Standards
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-xs sm:text-sm font-semibold text-slate/75 leading-relaxed"
          >
            We integrate official registries, audited metrics, and local support desk presence to bring verified success parameters to your business journey.
          </motion.p>
        </div>

        {/* Premium Cards Grid */}
        <motion.ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={localStaggerContainer}
        >
          {cardsData.map((card, index) => (
            <motion.li
              key={card.title}
              variants={localFadeUp}
              whileHover="hover"
              className={`glass-panel border rounded-2.5xl p-6 bg-white/70 backdrop-blur-md shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-raised flex flex-col justify-between relative overflow-hidden h-full min-h-[350px] bg-gradient-to-b ${card.cardBg}`}
            >
              <div>
                {/* SVG Illustration Container */}
                <div className="w-full h-32 flex items-center justify-center relative mb-4">
                  {card.illustration}
                </div>

                {/* Animated Stat Metric */}
                <span className="font-sans text-3.5xl font-black text-[#1a2f4c] tracking-tight block">
                  <CountUp to={card.to} decimal={card.decimal} suffix={card.suffix} prefix={card.prefix} />
                </span>

                {/* Badge Pill */}
                <span className={`inline-block px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-wider mt-3 ${card.badgeStyles}`}>
                  {card.badge}
                </span>

                {/* Section Title */}
                <h3 className="text-xs font-extrabold text-[#1a2f4c] mt-4 uppercase tracking-wide">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs font-semibold leading-relaxed text-[#5a718c] mt-2 line-clamp-3">
                  {card.sub}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Floating Capsule Bottom Feature Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-[24px] md:rounded-full shadow-raised border border-white/60 bg-white/70 px-8 py-5 mt-16 max-w-[1020px] mx-auto flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-stretch md:items-center relative z-10 backdrop-blur-md"
        >
          {features.map((feature, i) => (
            <React.Fragment key={feature.title}>
              <div className="flex items-center gap-4 flex-1 md:justify-center px-2">
                <div className="h-10 w-10 rounded-full bg-indigo/5 border border-indigo/10 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1a2f4c] uppercase tracking-wide leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] font-semibold text-[#5a718c] mt-0.5">
                    {feature.desc}
                  </p>
                </div>
              </div>
              {i < features.length - 1 && (
                <div className="h-px md:h-8 w-full md:w-px bg-slate-200/80" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
