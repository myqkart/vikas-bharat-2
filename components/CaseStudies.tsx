"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { photos } from "@/lib/photos";

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(1);

  const cardsData = [
    {
      name: "Ritu Sharma",
      business: "Saanvi Food Works",
      image: photos.caseFood,
      badgeBg: "bg-[#E9611D]",
      quote: "I only signed papers. They did everything else. ₹22 lakh in 6 weeks.",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2z" />
          <path d="M18 15v7" />
        </svg>
      )
    },
    {
      name: "Manoj Verma",
      business: "Verma Hardware",
      image: photos.caseHardware,
      badgeBg: "bg-[#1E52B6]",
      quote: "I didn't know I could get a govt. subsidy. They found it for me.",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      name: "Asha Devi",
      business: "Asha Tailoring",
      image: photos.caseTailoring,
      badgeBg: "bg-[#8A56EC]",
      quote: "Sab kuch Hindi mein samjhaya. Bahut aasan tha.",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 18h16M6 18V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M18 10h2v4h-2z" />
          <circle cx="18" cy="12" r="3" />
          <path d="M10 6v9" />
          <path d="M8 15h4" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="cases"
      className="relative bg-gradient-to-br from-[#FAF5EC] to-[#FFFDF9] px-6 py-20 lg:px-12 lg:py-28 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft gradient glow top-left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#F5A623]/8 to-transparent rounded-full blur-3xl opacity-60" />
        
        {/* Soft gradient glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#F5A623]/8 to-transparent rounded-full blur-3xl opacity-60" />

        {/* Orange dashed curved line */}
        <svg
          className="absolute top-[20%] left-[-5%] w-[110%] h-[55%] text-[#FF7A00]/15"
          fill="none"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M 50 120 C 300 380, 750 340, 1150 220"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="4 8"
          />
        </svg>

        {/* Dot Grid at bottom right */}
        <svg
          className="absolute bottom-6 right-6 w-36 h-36 text-[#FF7A00]/15"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <defs>
            <pattern id="caseDotGrid" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#caseDotGrid)" />
        </svg>

        {/* Soft orange wave at bottom left */}
        <svg
          className="absolute bottom-0 left-0 w-80 h-40 text-[#FF7A00]/4"
          viewBox="0 0 200 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0 100 C 60 75, 120 115, 200 65 L200 100 Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1250px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.7fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Stats */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <div className="inline-block">
                <span className="inline-block rounded-full border border-[#FF7A00]/80 bg-[#FF7A00]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF7A00]">
                  CASE STUDIES
                </span>
              </div>
            </Reveal>

            <Reveal className="mt-5">
              <h2 className="font-display text-4xl lg:text-[48px] font-bold leading-[1.12] text-ink font-serif">
                Challenge <span className="inline-block">→</span>
                <br />
                solution <span className="inline-block">→</span>{" "}
                <span className="relative inline-block text-[#FF7A00]">
                  paisa.
                  {/* Underline Swoosh SVG */}
                  <svg
                    className="absolute -bottom-3.5 left-0 w-[108%] h-3.5 text-[#FF7A00]"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 6 C 30 11, 70 9, 98 4"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Radiating Ticks SVG */}
                  <svg
                    className="absolute -top-3.5 -right-6.5 w-6 h-6 text-[#FF7A00]"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M 2 12 L 6 4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 9 14 L 11 3"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 16 12 L 20 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </Reveal>

            <Reveal className="mt-6">
              <p className="text-base text-slate max-w-md leading-relaxed font-medium">
                Short stories from food, hardware, and tailoring businesses — what
                blocked them, what we filed, and what landed.
              </p>
            </Reveal>

            {/* Statistics Container */}
            <Reveal className="mt-8">
              <div className="p-5 bg-[#FAF5EB]/40 backdrop-blur-md border border-[#E4D9BE]/60 rounded-2xl max-w-[440px] shadow-sm flex items-center justify-between gap-4">
                
                {/* Stat 1 */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#FF7A00]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" />
                    </svg>
                  </div>
                  <span className="text-[19px] lg:text-[21px] font-extrabold text-ink mt-2">
                    ₹3.2Cr+
                  </span>
                  <span className="text-[11px] text-slate font-semibold mt-0.5 leading-none">
                    Loans Sanctioned
                  </span>
                </div>

                {/* Divider */}
                <div className="h-10 w-[1px] bg-[#E4D9BE]/70" />

                {/* Stat 2 */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#FF7A00]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="text-[19px] lg:text-[21px] font-extrabold text-ink mt-2">
                    850+
                  </span>
                  <span className="text-[11px] text-slate font-semibold mt-0.5 leading-none">
                    Businesses Helped
                  </span>
                </div>

                {/* Divider */}
                <div className="h-10 w-[1px] bg-[#E4D9BE]/70" />

                {/* Stat 3 */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-[#FF7A00]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="text-[19px] lg:text-[21px] font-extrabold text-ink mt-2">
                    6 Weeks
                  </span>
                  <span className="text-[11px] text-slate font-semibold mt-0.5 leading-none">
                    Average Fast-track
                  </span>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="flex flex-col">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
            >
              {cardsData.map((card, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div key={card.name} variants={fadeUp} className="w-full">
                    <TiltCard intensity={isActive ? 4 : 6} className="h-full">
                      <div
                        onClick={() => setActiveIndex(index)}
                        className={`border cursor-pointer transition-all duration-500 rounded-3xl p-3 relative group select-none ${
                          isActive
                            ? "border-[#E4D9BE]/80 bg-white shadow-raised md:-translate-y-8 z-10 pb-8"
                            : "border-[#E4D9BE]/60 bg-[#FAF5EB]/50 shadow-sm md:translate-y-0 z-0 pb-6 hover:shadow-md hover:bg-[#FAF5EB]/80 hover:border-[#E4D9BE]/80"
                        }`}
                      >
                        {/* Circle Badge overlay */}
                        <div className={`absolute top-5 left-5 z-20 w-11 h-11 rounded-full ${card.badgeBg} flex items-center justify-center text-white shadow-md border-2 border-white transition-transform duration-300 group-hover:scale-105`}>
                          {card.icon}
                        </div>

                        {/* Image container */}
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                          <Image
                            src={card.image}
                            alt={`${card.name} case study visual`}
                            fill
                            sizes="(max-width: 768px) 100vw, 20vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            priority
                          />
                        </div>

                        {/* Details */}
                        <div className="mt-4 px-2">
                          <h3 className="font-sans font-bold text-ink text-[17px] transition-colors duration-300">
                            {card.name}
                          </h3>
                          <p className="text-[13px] text-slate font-medium mt-0.5">
                            {card.business}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2.5 mt-8 md:mt-4">
              {cardsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer ${
                    activeIndex === i
                      ? "bg-[#E9611D] w-6"
                      : "bg-[#E4D9BE]/60 w-2.5 hover:bg-[#E4D9BE]"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Full-width Testimonial Quote Banner */}
        <Reveal className="mt-16 lg:mt-24">
          <div className="max-w-5xl mx-auto bg-[#FBF6EC]/55 backdrop-blur-md border border-[#E4D9BE]/60 rounded-[32px] py-6 px-8 lg:py-8 lg:px-14 flex items-center justify-center gap-2 sm:gap-4 shadow-sm relative overflow-hidden min-h-[96px] lg:min-h-[112px]">
            <span className="text-4xl lg:text-[54px] font-display font-bold text-[#E9611D] leading-none select-none relative -top-2">
              “
            </span>
            
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-center font-sans text-base lg:text-[18px] font-semibold text-ink italic leading-relaxed px-2"
                >
                  {cardsData[activeIndex].quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <span className="text-4xl lg:text-[54px] font-display font-bold text-[#E9611D] leading-none select-none relative top-2">
              ”
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

