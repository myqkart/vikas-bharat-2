"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Quote,
  Star,
  ChefHat,
  Store,
  Shirt,
  ArrowUpRight,
  ShieldCheck,
  Users,
} from "lucide-react";
import { testimonials } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

// Custom high-fidelity Rupee coin SVG icon
const RupeeCoin = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 8h8M8 12h8M9 8c3 0 5 1 5 4s-2 4-5 4M12 12L8 16" />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="stories" className="relative px-5 py-20 lg:px-8 lg:py-28 overflow-hidden bg-paper/50">
      {/* ========================================================
          BACKGROUND DECORATIONS (Skyline, Waves, and Glows)
         ======================================================== */}
      
      {/* Left side ambient glow */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-marigold/8 blur-[100px] pointer-events-none -z-20" />
      
      {/* Right side ambient glow */}
      <div className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-success/6 pointer-events-none blur-[120px] -z-20" />

      {/* Left-side wave curves & dots */}
      <div className="absolute left-0 top-[15%] w-[250px] h-[350px] md:w-[400px] md:h-[500px] opacity-[0.08] pointer-events-none -z-10 text-indigo">
        <svg className="w-full h-full" viewBox="0 0 400 500" fill="none" stroke="currentColor" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
          <path d="M -50 150 C 100 100, 120 300, 250 200 S 320 80, 450 150" strokeDasharray="3 5" />
          <path d="M -50 230 C 120 180, 150 380, 300 280 S 380 150, 450 220" />
          <path d="M -50 310 C 80 260, 180 430, 350 330 S 420 220, 450 290" strokeDasharray="2 3" />
        </svg>
      </div>

      {/* Right-side Indian architectural skyline SVG (Taj Mahal, domes, minarets, spires) */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[220px] sm:w-[450px] sm:h-[320px] lg:w-[550px] lg:h-[400px] opacity-[0.07] pointer-events-none -z-10 text-marigold">
        <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" stroke="currentColor" strokeWidth="1.25" xmlns="http://www.w3.org/2000/svg">
          {/* Left-most Minaret */}
          <path d="M 30 400 L 30 220 L 26 220 L 26 215 L 34 215 L 34 220 L 30 220 M 26 215 L 26 200 C 26 192 34 192 34 200 L 34 215" />
          <path d="M 28 200 L 28 175 L 26 175 L 26 170 L 34 170 L 34 175 L 32 175 L 32 200" />
          <path d="M 26 170 C 26 160 34 160 34 170 Z" />
          
          {/* Minaret 2 */}
          <path d="M 90 400 L 90 190 L 86 190 L 86 185 L 94 185 L 94 190 L 90 190 M 86 185 L 86 170 C 86 162 94 162 94 170 L 94 185" />
          <path d="M 88 170 L 88 140 L 86 140 L 86 135 L 94 135 L 94 140 L 92 140 L 92 170" />
          <path d="M 86 135 C 86 125 94 125 94 135 Z" />

          {/* Temple Shikhara/Spire */}
          <path d="M 150 400 L 150 250 L 190 250 L 190 400 M 150 250 C 150 200 170 120 170 100 C 170 120 190 200 190 250" />
          <path d="M 170 100 L 170 65 M 170 73 L 182 78 L 170 83" /> {/* Flag */}
          <circle cx="170" cy="100" r="1.5" fill="currentColor" />

          {/* Dome 1 (Small Onion Dome) */}
          <path d="M 240 400 L 240 280 L 285 280 L 285 400" />
          <path d="M 240 280 C 240 245 245 235 262.5 215 C 280 235 285 245 285 280 Z" />
          <path d="M 262.5 215 L 262.5 200" />

          {/* Dome 2 (Large Taj Mahal Dome) */}
          <path d="M 340 400 L 340 220 L 430 220 L 430 400" />
          <path d="M 340 220 C 320 220 330 200 330 190 L 440 190 C 440 200 450 220 430 220" />
          <path d="M 345 190 C 345 140 365 110 385 85 C 405 110 425 140 425 190 Z" />
          <path d="M 385 85 L 385 50" />
          <path d="M 383 55 C 383 50 387 50 387 55" />
          
          {/* Small Chhatri on the right of Large Dome */}
          <path d="M 450 400 L 450 260 L 485 260 L 485 400" />
          <path d="M 450 260 L 450 245 L 485 245 L 485 260" />
          <path d="M 455 245 L 455 220 L 480 220 L 480 245" />
          <path d="M 450 220 C 450 205 485 205 485 220 Z" />
          <path d="M 467.5 205 L 467.5 195" />

          {/* Right Minaret */}
          <path d="M 520 400 L 520 170 L 516 170 L 516 165 L 524 165 L 524 170 L 520 170 M 516 165 L 516 150 C 516 142 524 142 524 150 L 524 165" />
          <path d="M 518 150 L 518 120 L 516 120 L 516 115 L 524 115 L 524 120 L 522 120 L 522 150" />
          <path d="M 516 115 C 516 105 524 105 524 115 Z" />

          {/* Arches inside bases */}
          <path d="M 250 400 C 250 355 275 355 275 400" />
          <path d="M 355 400 C 355 315 415 315 415 400" strokeWidth="1.5" />
          <path d="M 365 400 C 365 335 405 335 405 400" />
          <path d="M 458 400 C 458 355 477 355 477 400" />
        </svg>
      </div>

      {/* Structured Diagonal Dots */}
      <div className="absolute top-[8%] right-[10%] w-24 h-12 opacity-[0.06] text-slate pointer-events-none -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cardSectionDots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cardSectionDots)" />
        </svg>
      </div>

      {/* ========================================================
          TITLE & HEADER SECTION
         ======================================================== */}
      <div className="mx-auto max-w-[1200px] relative">
        <Reveal className="mx-auto max-w-3xl text-center flex flex-col items-center">
          {/* Eyebrow with the custom orange/green underline */}
          <div className="flex flex-col items-center">
            <p className="text-[13px] font-bold tracking-[0.15em] text-slate lg:text-sm uppercase">
              {testimonials.eyebrow}
            </p>
            <div className="flex gap-1 mt-1.5 h-0.5 w-12 justify-center">
              <span className="h-full w-6 bg-marigold rounded-full" />
              <span className="h-full w-6 bg-success rounded-full" />
            </div>
          </div>

          {/* Heading with "unki zubaani." colored in gold */}
          <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.15] text-ink lg:text-[42px]">
            {testimonials.heading === "Unki kahani, unki zubaani." ? (
              <>
                Unki kahani, <span className="text-marigold">unki zubaani.</span>
              </>
            ) : (
              testimonials.heading
            )}
          </h2>

          <p className="mt-4 text-base text-slate max-w-2xl lg:text-[17px] leading-relaxed">
            {testimonials.sub}
          </p>
        </Reveal>

        {/* ========================================================
            TESTIMONIALS CARDS GRID
           ======================================================== */}
        <div className="relative mt-16 sm:mt-24">
          {/* Dotted curves connecting the floating circle category icons on Desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none -z-10">
            <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="curveLeftGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f5a623" />
                  <stop offset="100%" stopColor="#1d8348" />
                </linearGradient>
                <linearGradient id="curveRightGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1d8348" />
                  <stop offset="100%" stopColor="#1e3e72" />
                </linearGradient>
              </defs>
              {/* Left Curve: Chef Hat to Shop Store */}
              <path
                d="M 50 180 C 180 260, 250 250, 360 170"
                stroke="url(#curveLeftGrad)"
                strokeWidth="1.75"
                strokeDasharray="4 6"
              />
              {/* Right Curve: Shop Store to Garments Shirt */}
              <path
                d="M 680 185 C 740 230, 840 220, 950 180"
                stroke="url(#curveRightGrad)"
                strokeWidth="1.75"
                strokeDasharray="4 6"
              />
            </svg>
          </div>

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {/* CARD 1: Ritu Sharma */}
            <motion.li
              variants={fadeUp}
              className="order-2 lg:order-1 flex"
            >
              <div className="group relative w-full rounded-[22px] border border-border/50 bg-white p-6 md:p-8 text-center shadow-card hover:shadow-raised hover:-translate-y-2 hover:scale-[1.015] transition-all duration-500 ease-out flex flex-col justify-between items-center">
                {/* Floating Outer Circle: Chef Hat */}
                <div className="absolute left-0 -translate-x-[40%] md:-translate-x-[50%] top-[45%] -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_-2px_rgba(18,41,77,0.12)] border border-border/40 pointer-events-none z-10">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-marigold/30 bg-marigold/5 text-marigold flex items-center justify-center">
                    <ChefHat size={18} className="md:w-5 md:h-5" />
                  </div>
                </div>

                <div className="flex flex-col items-center w-full">
                  {/* Avatar with Floating Quote Badge */}
                  <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full shadow-card ring-4 ring-white">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={testimonials.items[0].image}
                        alt={`Photo of ${testimonials.items[0].name}`}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* Floating quote badge on avatar */}
                  <div className="absolute top-6 right-[calc(50%-48px)] w-8 h-8 rounded-full bg-marigold flex items-center justify-center text-white shadow-md border-2 border-white translate-x-1/3 -translate-y-1/3 pointer-events-none">
                    <Quote size={12} className="fill-white text-white rotate-180" />
                  </div>

                  {/* Rating Stars */}
                  <div className="mt-6 flex gap-0.5" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        className="fill-marigold text-marigold"
                      />
                    ))}
                  </div>

                  {/* Business Type */}
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-slate font-sans">
                    {testimonials.items[0].businessType}
                  </p>
                  
                  {/* Small Accent Line */}
                  <div className="mt-2 h-0.5 w-6 bg-marigold/40 rounded-full" />

                  {/* Quote Statement */}
                  <blockquote className="mt-5 font-display text-lg font-medium leading-snug text-ink sm:text-xl relative">
                    {/* Large background quote marks */}
                    <span className="absolute -top-4 -left-2 text-[5rem] font-serif text-slate/5 select-none pointer-events-none leading-none">“</span>
                    “I only signed papers. They did everything else. <span className="text-marigold font-bold">₹22 lakh</span> in 6 weeks.”
                  </blockquote>
                </div>

                <div className="mt-6 flex flex-col items-center w-full">
                  <p className="text-sm font-bold text-ink font-sans">{testimonials.items[0].name}</p>
                  <p className="mt-0.5 text-xs text-slate font-sans">{testimonials.items[0].role}</p>
                  
                  {/* Outcome Badge */}
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-[9px] bg-success-bg px-4 py-1.5 text-[13px] font-bold text-success border border-success/10 shadow-sm transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(29,131,72,0.2)]">
                    <ArrowUpRight size={15} className="stroke-[2.5]" />
                    <span>{testimonials.items[0].badge}</span>
                  </div>
                </div>
              </div>
            </motion.li>

            {/* CARD 2: Manoj Verma (Featured Hero Card - Tall & Elevated) */}
            <motion.li
              variants={fadeUp}
              className="order-1 lg:order-2 lg:-mt-6 lg:mb-6 flex"
            >
              <div className="group relative w-full rounded-[24px] border border-border bg-white p-7 md:p-9 text-center shadow-raised hover:shadow-[0_24px_50px_-8px_rgba(18,41,77,0.18)] hover:-translate-y-3 hover:scale-[1.015] transition-all duration-500 ease-out flex flex-col justify-between items-center ring-1 ring-border/20">
                {/* Floating Outer Circle: Store */}
                <div className="absolute left-0 -translate-x-[40%] md:-translate-x-[50%] top-[45%] -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_-2px_rgba(18,41,77,0.12)] border border-border/40 pointer-events-none z-10">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-success/30 bg-success/5 text-success flex items-center justify-center">
                    <Store size={18} className="md:w-5 md:h-5" />
                  </div>
                </div>

                <div className="flex flex-col items-center w-full">
                  {/* Avatar with Floating Quote Badge */}
                  <div className="relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-full shadow-raised ring-4 ring-white">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={testimonials.items[1].image}
                        alt={`Photo of ${testimonials.items[1].name}`}
                        fill
                        sizes="112px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* Floating quote badge on avatar */}
                  <div className="absolute top-8 right-[calc(50%-56px)] w-8 h-8 rounded-full bg-marigold flex items-center justify-center text-white shadow-md border-2 border-white translate-x-1/3 -translate-y-1/3 pointer-events-none">
                    <Quote size={12} className="fill-white text-white rotate-180" />
                  </div>

                  {/* Rating Stars */}
                  <div className="mt-6 flex gap-0.5" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={15}
                        className="fill-marigold text-marigold"
                      />
                    ))}
                  </div>

                  {/* Business Type */}
                  <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-slate font-sans">
                    {testimonials.items[1].businessType}
                  </p>
                  
                  {/* Small Accent Line */}
                  <div className="mt-2 h-0.5 w-6 bg-success/40 rounded-full" />

                  {/* Quote Statement */}
                  <blockquote className="mt-5 font-display text-[19px] sm:text-[21px] font-medium leading-snug text-ink relative px-2">
                    {/* Large background quote marks */}
                    <span className="absolute -top-4 -left-2 text-[5.5rem] font-serif text-slate/5 select-none pointer-events-none leading-none">“</span>
                    “I didn’t know I could get a <span className="text-success font-bold">govt. subsidy</span>. They found it for me.”
                  </blockquote>
                </div>

                <div className="mt-6 flex flex-col items-center w-full">
                  <p className="text-base font-bold text-ink font-sans">{testimonials.items[1].name}</p>
                  <p className="mt-0.5 text-xs text-slate font-sans">{testimonials.items[1].role}</p>
                  
                  {/* Outcome Badge */}
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-[9px] bg-success-bg px-5 py-2 text-sm font-bold text-success border border-success/10 shadow-sm transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(29,131,72,0.25)]">
                    <ShieldCheck size={16} className="stroke-[2.5]" />
                    <span>{testimonials.items[1].badge}</span>
                  </div>
                </div>
              </div>
            </motion.li>

            {/* CARD 3: Asha Devi */}
            <motion.li
              variants={fadeUp}
              className="order-3 flex md:col-span-2 lg:col-span-1"
            >
              <div className="group relative w-full rounded-[22px] border border-border/50 bg-white p-6 md:p-8 text-center shadow-card hover:shadow-raised hover:-translate-y-2 hover:scale-[1.015] transition-all duration-500 ease-out flex flex-col justify-between items-center">
                {/* Floating Outer Circle: Clothes Shirt */}
                <div className="absolute right-0 translate-x-[40%] md:translate-x-[50%] top-[45%] -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_-2px_rgba(18,41,77,0.12)] border border-border/40 pointer-events-none z-10">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-indigo/30 bg-indigo/5 text-indigo flex items-center justify-center">
                    <Shirt size={18} className="md:w-5 md:h-5" />
                  </div>
                </div>

                <div className="flex flex-col items-center w-full">
                  {/* Avatar with Floating Quote Badge */}
                  <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full shadow-card ring-4 ring-white">
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={testimonials.items[2].image}
                        alt={`Photo of ${testimonials.items[2].name}`}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* Floating quote badge on avatar */}
                  <div className="absolute top-6 right-[calc(50%-48px)] w-8 h-8 rounded-full bg-indigo flex items-center justify-center text-white shadow-md border-2 border-white translate-x-1/3 -translate-y-1/3 pointer-events-none">
                    <Quote size={12} className="fill-white text-white rotate-180" />
                  </div>

                  {/* Rating Stars */}
                  <div className="mt-6 flex gap-0.5" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={14}
                        className="fill-marigold text-marigold"
                      />
                    ))}
                  </div>

                  {/* Business Type */}
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-slate font-sans">
                    {testimonials.items[2].businessType}
                  </p>
                  
                  {/* Small Accent Line */}
                  <div className="mt-2 h-0.5 w-6 bg-indigo/40 rounded-full" />

                  {/* Quote Statement */}
                  <blockquote className="mt-5 font-display text-lg font-medium leading-snug text-ink sm:text-xl relative">
                    {/* Large background quote marks */}
                    <span className="absolute -top-4 -left-2 text-[5rem] font-serif text-slate/5 select-none pointer-events-none leading-none">“</span>
                    “Sab kuch Hindi mein samjhaya. <span className="text-indigo font-bold">Bahut aasan</span> tha.”
                  </blockquote>
                </div>

                <div className="mt-6 flex flex-col items-center w-full">
                  <p className="text-sm font-bold text-ink font-sans">{testimonials.items[2].name}</p>
                  <p className="mt-0.5 text-xs text-slate font-sans">{testimonials.items[2].role}</p>
                  
                  {/* Outcome Badge */}
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-[9px] bg-success-bg px-4 py-1.5 text-[13px] font-bold text-success border border-success/10 shadow-sm transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(29,131,72,0.2)]">
                    <RupeeCoin className="w-4 h-4 stroke-[2.5]" />
                    <span>{testimonials.items[2].badge}</span>
                  </div>
                </div>
              </div>
            </motion.li>
          </motion.ul>
        </div>

        {/* ========================================================
            BOTTOM REAL IMPACT/STORIES SVG DECORATIVE ARC & BADGE
           ======================================================== */}
        <div className="mt-20 flex flex-col items-center justify-center relative w-full">
          {/* Curved dotted line SVG background connecting underneath the cards */}
          <div className="absolute inset-x-0 top-0 h-10 flex justify-center -z-10 pointer-events-none overflow-hidden select-none">
            <svg className="w-[700px] h-[30px] text-marigold/30" viewBox="0 0 700 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 5 C 250 25, 450 25, 650 5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>
          </div>
          
          <div className="flex items-center justify-center mt-2 px-6 py-1 select-none pointer-events-none">
            <Star size={10} className="fill-marigold text-marigold mr-4" />
            <span className="font-display italic text-base md:text-lg text-slate/80">Real stories.</span>
            
            {/* Outer white circle with inner gold icon */}
            <div className="mx-4 w-9 h-9 rounded-full bg-white border border-marigold/30 flex items-center justify-center shadow-sm">
              <Users size={16} className="text-marigold" />
            </div>
            
            <span className="font-display italic text-base md:text-lg text-slate/80">Real impact.</span>
            <Star size={10} className="fill-marigold text-marigold ml-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
