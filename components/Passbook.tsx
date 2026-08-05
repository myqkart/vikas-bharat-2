"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { passbook } from "@/lib/content";
import { Building2, Percent, TrendingUp, Users, ShieldCheck, Timer, Wallet } from "lucide-react";

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

export default function Passbook() {
  return (
    <section id="ledger" className="relative px-5 py-24 lg:px-8 bg-[#FEFCF7] overflow-hidden">
      {/* Background soft grids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-br from-indigo-50/15 to-transparent blur-3xl pointer-events-none" />
      


      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-blue-600 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            Live Case Statistics
          </span>
          <h2 className="mt-3 font-display text-[32px] font-semibold leading-tight text-ink lg:text-[44px]">
            {passbook.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base font-medium text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {passbook.subtitle}
          </p>
        </div>

        {/* Desktop Orbital Stats Experience */}
        <div className="hidden lg:block relative w-full aspect-[2.4/1] max-w-5xl mx-auto mb-16">
          {/* SVG Orbits */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 1000 417" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="orbit-outer" d="M 120,208.5 A 380,92 0 1,0 880,208.5 A 380,92 0 1,0 120,208.5" />
                <path id="orbit-middle" d="M 220,208.5 A 280,63 0 1,0 780,208.5 A 280,63 0 1,0 220,208.5" />
                <path id="orbit-inner" d="M 320,208.5 A 180,33 0 1,0 680,208.5 A 180,33 0 1,0 320,208.5" />
              </defs>

              {/* Concentric ellipses drawn as path strokes */}
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.25 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 120,208.5 A 380,92 0 1,0 880,208.5 A 380,92 0 1,0 120,208.5" 
                stroke="#cbd5e1" 
                strokeWidth="1" 
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.25 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                d="M 220,208.5 A 280,63 0 1,0 780,208.5 A 280,63 0 1,0 220,208.5" 
                stroke="#cbd5e1" 
                strokeWidth="1" 
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.25 }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.4 }}
                d="M 320,208.5 A 180,33 0 1,0 680,208.5 A 180,33 0 1,0 320,208.5" 
                stroke="#cbd5e1" 
                strokeWidth="1" 
              />
              
              {/* Rotating Decorative Nodes along Orbits */}
              
              {/* Orange dot: middle orbit, starts at 35% */}
              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} r="4.5" fill="#f97316">
                <animateMotion dur="25s" repeatCount="indefinite" keyPoints="0.35;1;0;0.35" keyTimes="0;0.65;0.65;1" calcMode="linear">
                  <mpath href="#orbit-middle" />
                </animateMotion>
              </motion.circle>

              {/* Green dot 1: middle orbit, starts at 65% */}
              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }} r="4.5" fill="#22c55e">
                <animateMotion dur="25s" repeatCount="indefinite" keyPoints="0.65;1;0;0.65" keyTimes="0;0.35;0.35;1" calcMode="linear">
                  <mpath href="#orbit-middle" />
                </animateMotion>
              </motion.circle>

              {/* Green dot 2: inner orbit, starts at 60% */}
              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.0 }} r="4.5" fill="#22c55e">
                <animateMotion dur="20s" repeatCount="indefinite" keyPoints="0.60;1;0;0.60" keyTimes="0;0.40;0.40;1" calcMode="linear">
                  <mpath href="#orbit-inner" />
                </animateMotion>
              </motion.circle>

              {/* Green dot 3: inner orbit, starts at 90% */}
              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }} r="4.5" fill="#22c55e">
                <animateMotion dur="20s" repeatCount="indefinite" keyPoints="0.90;1;0;0.90" keyTimes="0;0.10;0.10;1" calcMode="linear">
                  <mpath href="#orbit-inner" />
                </animateMotion>
              </motion.circle>

              {/* Blue dot: middle orbit, starts at 85% */}
              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} r="4.5" fill="#3b82f6">
                <animateMotion dur="25s" repeatCount="indefinite" keyPoints="0.85;1;0;0.85" keyTimes="0;0.15;0.15;1" calcMode="linear">
                  <mpath href="#orbit-middle" />
                </animateMotion>
              </motion.circle>

              {/* Purple dot: outer orbit, starts at 80% */}
              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.3 }} r="4.5" fill="#a855f7">
                <animateMotion dur="30s" repeatCount="indefinite" keyPoints="0.80;1;0;0.80" keyTimes="0;0.20;0.20;1" calcMode="linear">
                  <mpath href="#orbit-outer" />
                </animateMotion>
              </motion.circle>

              {/* Grey dot 1: outer orbit, starts at 50% */}
              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} r="4.5" fill="#cbd5e1">
                <animateMotion dur="30s" repeatCount="indefinite" keyPoints="0.50;1;0;0.50" keyTimes="0;0.50;0.50;1" calcMode="linear">
                  <mpath href="#orbit-outer" />
                </animateMotion>
              </motion.circle>

              {/* Grey dot 2: outer orbit, starts at 0% */}
              <motion.circle initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} r="4.5" fill="#cbd5e1">
                <animateMotion dur="30s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                  <mpath href="#orbit-outer" />
                </animateMotion>
              </motion.circle>
            </svg>
          </div>

          {/* Top Node (48 hrs - First Reply Time) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            style={{ x: "-50%", y: "-50%" }}
            className="absolute left-[50%] top-[35%] w-20 h-20 z-20 group cursor-default"
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-[0_12px_35px_rgba(234,88,12,0.12)] transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#fff7ed] text-[#ea580c] flex items-center justify-center">
                <Timer className="w-6 h-6" strokeWidth={2.5} />
              </div>
            </div>
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 flex flex-col items-start select-none pointer-events-none">
              <span className="font-sans text-2.5xl font-black text-ink leading-none whitespace-nowrap">
                <CountUp to={48} suffix=" hrs" />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 block whitespace-nowrap">
                First Reply Time
              </span>
              <div className="w-9 h-0.75 bg-[#ea580c] rounded-full mt-2" />
            </div>
          </motion.div>

          {/* Left Node (12,000+ - Businesses Helped) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{ x: "-50%", y: "-50%" }}
            className="absolute left-[12%] top-[50%] w-20 h-20 z-20 group cursor-default"
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center group-hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)] transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                <Users className="w-6 h-6" strokeWidth={2.5} />
              </div>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col items-center text-center select-none pointer-events-none">
              <span className="font-sans text-2.5xl font-black text-ink leading-none whitespace-nowrap">
                <CountUp to={12000} suffix="+" />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 block whitespace-nowrap">
                Businesses Helped
              </span>
              <div className="w-9 h-0.75 bg-[#3b82f6] rounded-full mt-2" />
            </div>
          </motion.div>

          {/* Right Node (95% - Applications Approved) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            style={{ x: "-50%", y: "-50%" }}
            className="absolute left-[88%] top-[50%] w-20 h-20 z-20 group cursor-default"
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center group-hover:shadow-[0_12px_35px_rgba(124,58,237,0.12)] transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#faf5ff] text-[#7c3aed] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
              </div>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col items-center text-center select-none pointer-events-none">
              <span className="font-sans text-2.5xl font-black text-ink leading-none whitespace-nowrap">
                <CountUp to={95} suffix="%" />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 block whitespace-nowrap">
                Applications Approved
              </span>
              <div className="w-9 h-0.75 bg-[#7c3aed] rounded-full mt-2" />
            </div>
          </motion.div>

          {/* Center/Bottom Node (₹480Cr+ - Money Delivered) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            style={{ x: "-50%", y: "-50%" }}
            className="absolute left-[50%] top-[65%] w-24 h-24 z-20 group cursor-default"
          >
            <div className="w-24 h-24 rounded-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center group-hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)] transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#ecfdf5] text-[#10b981] flex items-center justify-center">
                <Wallet className="w-7 h-7" strokeWidth={2.5} />
              </div>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex flex-col items-center text-center select-none pointer-events-none">
              <span className="font-sans text-3.5xl font-black text-ink leading-none whitespace-nowrap">
                <CountUp to={480} prefix="₹" suffix="Cr+" />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-1.5 block whitespace-nowrap">
                Money Delivered
              </span>
              <div className="w-9 h-0.75 bg-[#22c55e] rounded-full mt-2" />
            </div>
          </motion.div>
        </div>

        {/* Mobile / Tablet Stats Grid Layout */}
        <div className="lg:hidden max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Businesses Helped */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div className="select-none">
              <span className="font-sans text-2xl font-black text-ink block">
                <CountUp to={12000} suffix="+" />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 block">
                Businesses Helped
              </span>
              <div className="w-8 h-0.75 bg-[#3b82f6] rounded-full mt-2" />
            </div>
          </motion.div>

          {/* Card 2: Applications Approved */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-full bg-[#faf5ff] text-[#7c3aed] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div className="select-none">
              <span className="font-sans text-2xl font-black text-ink block">
                <CountUp to={95} suffix="%" />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 block">
                Applications Approved
              </span>
              <div className="w-8 h-0.75 bg-[#7c3aed] rounded-full mt-2" />
            </div>
          </motion.div>

          {/* Card 3: First Reply Time */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center gap-5"
          >
            <div className="w-14 h-14 rounded-full bg-[#fff7ed] text-[#ea580c] flex items-center justify-center shrink-0">
              <Timer className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div className="select-none">
              <span className="font-sans text-2xl font-black text-ink block">
                <CountUp to={48} suffix=" hrs" />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 block">
                First Reply Time
              </span>
              <div className="w-8 h-0.75 bg-[#ea580c] rounded-full mt-2" />
            </div>
          </motion.div>

          {/* Card 4: Money Delivered */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center gap-5 sm:col-span-2"
          >
            <div className="w-14 h-14 rounded-full bg-[#ecfdf5] text-[#10b981] flex items-center justify-center shrink-0">
              <Wallet className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div className="select-none">
              <span className="font-sans text-2xl font-black text-ink block">
                <CountUp to={480} prefix="₹" suffix="Cr+" />
              </span>
              <span className="text-[11px] font-semibold text-slate-500 mt-1 block">
                Money Delivered
              </span>
              <div className="w-8 h-0.75 bg-[#22c55e] rounded-full mt-2" />
            </div>
          </motion.div>
        </div>

        {/* Unified Bottom Row Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-5xl rounded-[28px] border border-slate-100 bg-white py-4 md:py-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] md:flex md:items-center md:justify-between md:divide-x md:divide-slate-100"
        >
          {/* Column 1: DPIT-recognised startups */}
          <div className="flex items-center gap-4 py-4 md:py-0 px-6 md:px-8 w-full md:w-1/3">
            <div className="h-12 w-12 rounded-2xl bg-[#ecfdf5] text-[#10b981] flex items-center justify-center shrink-0">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                DPIT–RECOGNISED STARTUPS
              </span>
              <span className="font-sans text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1 block leading-none">
                <CountUp to={245430} />
              </span>
            </div>
          </div>
          
          {/* Column 2: PAN India 80 IAC tax exemption */}
          <div className="flex items-center gap-4 py-4 md:py-0 px-6 md:px-8 w-full md:w-1/3">
            <div className="h-12 w-12 rounded-2xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0">
              <Percent className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                PAN INDIA 80 IAC TAX EXEMPTION
              </span>
              <span className="font-sans text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1 block leading-none">
                <CountUp to={4567} />
              </span>
            </div>
          </div>
          
          {/* Column 3: Startup turnover threshold */}
          <div className="flex items-center gap-4 py-4 md:py-0 px-6 md:px-8 w-full md:w-1/3">
            <div className="h-12 w-12 rounded-2xl bg-[#fff7ed] text-[#ea580c] flex items-center justify-center shrink-0">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                STARTUP TURNOVER THRESHOLD
              </span>
              <span className="font-sans text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1 block leading-none">
                <CountUp to={200} prefix="₹" suffix=" Cr" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
