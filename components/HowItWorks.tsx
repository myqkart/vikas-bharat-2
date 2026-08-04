"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Caveat } from "next/font/google";
import { 
  Phone, 
  Search, 
  FileText, 
  Landmark, 
  Shield, 
  Eye, 
  Award, 
  MessageSquare,
  Sparkles
} from "lucide-react";
import { howItWorks } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat",
  display: "swap",
});

const stepsData = [
  {
    id: "01",
    title: "Tell Us About You",
    caption: "2-minute call. No forms.",
    detail: "Share business type, city, turnover band, and what you need.",
    icon: Phone,
    color: "#f5a623", // marigold
    iconColor: "text-marigold",
    iconBg: "bg-marigold/10",
    captionColor: "text-marigold",
    floatY: -8,
    floatDuration: 5,
    floatDelay: 0,
    positionClasses: "left-[2%] lg:left-[4%] xl:left-[8%] top-[10%] lg:top-[12%]"
  },
  {
    id: "02",
    title: "We Find Your Match",
    caption: "We check 120+ schemes.",
    detail: "Our desk screens loans and government schemes and ranks the top 2-3 options.",
    icon: Search,
    color: "#1e3e72", // indigo
    iconColor: "text-indigo",
    iconBg: "bg-indigo/10",
    captionColor: "text-indigo",
    floatY: -10,
    floatDuration: 6,
    floatDelay: 0.5,
    positionClasses: "left-[2%] lg:left-[4%] xl:left-[8%] bottom-[10%] lg:bottom-[12%]"
  },
  {
    id: "03",
    title: "We Do the Paperwork",
    caption: "You just sign. We handle the rest.",
    detail: "We assemble KYC, statements, quotations, and portal forms. You review and sign.",
    icon: FileText,
    color: "#1d8348", // success green
    iconColor: "text-success",
    iconBg: "bg-success/10",
    captionColor: "text-success",
    floatY: -9,
    floatDuration: 5.5,
    floatDelay: 0.2,
    positionClasses: "right-[2%] lg:right-[4%] xl:right-[8%] top-[10%] lg:top-[12%]"
  },
  {
    id: "04",
    title: "Money in Your Account",
    caption: "We follow up until it's done.",
    detail: "Sanction, disbursement, licence download, or GST live — we stay on the case.",
    icon: Landmark,
    color: "#d98c0f", // marigold-dark
    iconColor: "text-marigold-dark",
    iconBg: "bg-marigold-dark/10",
    captionColor: "text-marigold-dark",
    floatY: -11,
    floatDuration: 6.5,
    floatDelay: 0.7,
    positionClasses: "right-[2%] lg:right-[4%] xl:right-[8%] bottom-[10%] lg:bottom-[12%]"
  }
];

const trustItems = [
  {
    icon: Shield,
    title: "No Jargon",
    subtitle: "Plain English & Hindi",
  },
  {
    icon: Eye,
    title: "100% Transparent",
    subtitle: "Zero hidden charges",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    subtitle: "Verified scheme experts",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Updates",
    subtitle: "Realtime tracking",
  },
];

export default function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [paths, setPaths] = useState<string[]>(["", "", "", ""]);
  const [nodes, setNodes] = useState<{ x: number; y: number }[]>([]);
  const [orbitData, setOrbitData] = useState<{
    centerX: number;
    centerY: number;
    radius: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const cardRef0 = useRef<HTMLDivElement>(null);
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);

  const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3];

  useEffect(() => {
    const updateCoords = () => {
      if (!containerRef.current || !circleRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      if (containerRect.width === 0) return; // Hidden on mobile

      const circleRect = circleRef.current.getBoundingClientRect();
      const centerX = circleRect.left + circleRect.width / 2 - containerRect.left;
      const centerY = circleRect.top + circleRect.height / 2 - containerRect.top;
      
      // Radius of the concentric dashed circle
      const R = circleRect.width / 2 + 36;
      setOrbitData({ centerX, centerY, radius: R });

      // Node angles: Step 1 (215°), Step 2 (145°), Step 3 (325°), Step 4 (35°)
      const angles = [
        (215 * Math.PI) / 180,
        (145 * Math.PI) / 180,
        (325 * Math.PI) / 180,
        (35 * Math.PI) / 180,
      ];

      const calculatedNodes = angles.map((angle) => ({
        x: centerX + R * Math.cos(angle),
        y: centerY + R * Math.sin(angle),
      }));
      setNodes(calculatedNodes);

      const calculatedPaths = cardRefs.map((cardRef, index) => {
        if (!cardRef.current) return "";
        const cardRect = cardRef.current.getBoundingClientRect();
        const targetNode = calculatedNodes[index];
        const isLeft = index < 2;

        // Card anchor points: right edge for left cards, left edge for right cards
        const startX = isLeft
          ? cardRect.right - containerRect.left
          : cardRect.left - containerRect.left;
        const startY = cardRect.top + cardRect.height / 2 - containerRect.top;

        const endX = targetNode.x;
        const endY = targetNode.y;

        // Smooth cubic bezier S-curve
        const dx = Math.abs(endX - startX);
        const cp1X = isLeft ? startX + dx * 0.55 : startX - dx * 0.55;
        const cp1Y = startY;
        const cp2X = isLeft ? endX - dx * 0.15 : endX + dx * 0.15;
        const cp2Y = endY;

        return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
      });

      setPaths(calculatedPaths);
    };

    updateCoords();
    window.addEventListener("resize", updateCoords);
    
    // Safety check after brief delay for complete layout rendering
    const timer = setTimeout(updateCoords, 600);

    return () => {
      window.removeEventListener("resize", updateCoords);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="how-it-works" className={`px-5 py-16 lg:px-8 lg:py-24 overflow-hidden relative ${caveat.variable}`}>
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.04),transparent_60%)] pointer-events-none" />

      {/* Decorative Sparkles & Tiny dots */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none hidden md:block">
        <Sparkles className="absolute left-[8%] top-[20%] w-5 h-5 text-marigold" />
        <Sparkles className="absolute right-[8%] top-[15%] w-4 h-4 text-success" />
        <div className="absolute left-[20%] bottom-[20%] w-2 h-2 rounded-full bg-indigo/35" />
        <div className="absolute right-[22%] bottom-[30%] w-1.5 h-1.5 rounded-full bg-marigold-dark/45" />
      </div>

      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* Title / Heading (Unmodified) */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-semibold tracking-wide text-slate lg:text-sm">
            {howItWorks.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
            {howItWorks.heading}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">{howItWorks.sub}</p>
        </Reveal>

        {/* ============================================================== */}
        {/* DESKTOP/TABLET ORBIT LAYOUT                                    */}
        {/* ============================================================== */}
        <div 
          ref={containerRef} 
          className="relative w-full h-[660px] lg:h-[740px] mt-16 hidden md:block"
        >
          {/* SVG Connection Paths & Target Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Concentric dashed circle around center image */}
            {orbitData && (
              <circle
                cx={orbitData.centerX}
                cy={orbitData.centerY}
                r={orbitData.radius}
                fill="none"
                stroke="rgba(18, 41, 77, 0.06)"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
            )}

            {/* Connection Curves */}
            {paths.map((path, index) => {
              if (!path) return null;
              const isHovered = hoveredStep === index;
              return (
                <motion.path
                  key={index}
                  d={path}
                  fill="none"
                  stroke={isHovered ? stepsData[index].color : "rgba(91, 100, 114, 0.16)"}
                  strokeWidth={isHovered ? 2.5 : 1.2}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    pathLength: { duration: 1.5, ease: "easeOut", delay: 0.15 * index },
                    opacity: { duration: 0.5, delay: 0.15 * index },
                    stroke: { duration: 0.3 },
                    strokeWidth: { duration: 0.3 }
                  }}
                />
              );
            })}

            {/* Target dots on Concentric circle */}
            {nodes.map((node, index) => {
              const isHovered = hoveredStep === index;
              return (
                <circle
                  key={index}
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 6 : 4}
                  fill={stepsData[index].color}
                  className="transition-all duration-300"
                  style={{
                    transform: isHovered ? "scale(1.5)" : "scale(1)",
                    transformOrigin: `${node.x}px ${node.y}px`,
                  }}
                />
              );
            })}
          </svg>

          {/* Centerpiece Image */}
          <div
            ref={circleRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <motion.div 
              className="relative w-[340px] h-[340px] lg:w-[440px] lg:h-[440px] rounded-full p-2 bg-white shadow-raised flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Soft glow behind the circle */}
              <div
                className={`absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-marigold/10 via-indigo/5 to-success/10 blur-3xl opacity-60 transition-all duration-500 -z-10 ${
                  hoveredStep !== null ? "opacity-90 scale-105" : "opacity-60"
                }`}
              />
              
              {/* Thin white border + Editorial Image */}
              <div className="w-full h-full rounded-full overflow-hidden border-[4px] border-white relative bg-paper-deep">
                <Image
                  src={howItWorks.diagram.src}
                  alt={howItWorks.diagram.alt}
                  fill
                  sizes="440px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Floating Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full h-full relative"
          >
            {stepsData.map((step, index) => {
              return (
                <motion.div
                  key={step.id}
                  ref={cardRefs[index]}
                  className={`absolute z-30 ${step.positionClasses}`}
                  animate={{ y: [0, step.floatY, 0] }}
                  transition={{
                    duration: step.floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: step.floatDelay
                  }}
                >
                  <motion.div
                    className="w-[250px] lg:w-[270px] rounded-[28px] bg-white/80 backdrop-blur-md border border-border/40 p-6 shadow-card hover:shadow-raised relative transition-all duration-300 cursor-pointer group"
                    whileHover={{ y: -8, scale: 1.02 }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    variants={fadeUp}
                  >
                    {/* Overlapping Icon Badge */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-white shadow-card border border-border/10 flex items-center justify-center z-40 transition-transform duration-300 group-hover:scale-110">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${step.iconBg}`}>
                        <step.icon className={`w-4.5 h-4.5 ${step.iconColor}`} />
                      </div>
                    </div>

                    <div className="pl-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-wider text-slate/40">
                          STEP {step.id}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base font-bold text-ink font-display leading-tight">
                        {step.title}
                      </h3>
                      {step.caption && (
                        <p className={`mt-1 text-[11px] font-bold ${step.captionColor}`}>
                          {step.caption}
                        </p>
                      )}
                      <p className="mt-1.5 text-xs leading-relaxed text-slate line-clamp-2">
                        {step.detail}
                      </p>
                      <div className="mt-3 flex items-center text-[10px] font-bold text-indigo/60 group-hover:text-indigo transition-colors duration-300">
                        Learn More <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Floating Handwritten Annotations & Arrows */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {/* Top Left annotation */}
            <div className="absolute left-[26%] top-[6%] -rotate-6 opacity-60 font-handwriting text-indigo text-[15px] select-none">
              Simple. Fast. Done.
            </div>
            
            {/* Top Right annotation */}
            <div className="absolute right-[25%] top-[5%] rotate-3 opacity-60 font-handwriting text-indigo text-[15px] select-none">
              From first call to final approval.
            </div>

            {/* Bottom Right annotation */}
            <div className="absolute right-[27%] bottom-[8%] -rotate-2 opacity-60 font-handwriting text-indigo text-[15px] select-none">
              {"We stay with you till it's done."}
            </div>

            {/* Curved text at the bottom */}
            <div className="absolute left-1/2 bottom-[1%] -translate-x-1/2 text-center select-none">
              <span className="font-handwriting text-indigo text-lg opacity-85 block">
                {"From first call to final credit, we've got your back."}
              </span>
              <svg className="w-56 h-3 text-indigo/35 mx-auto mt-1" viewBox="0 0 200 10" fill="none">
                <path d="M10,2 Q100,8 190,2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE LAYOUT (STACKED)                                        */}
        {/* ============================================================== */}
        <div className="block md:hidden mt-12 space-y-12">
          {/* Centered Circle Image */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] rounded-full p-1.5 bg-white shadow-raised">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-marigold/10 to-indigo/5 blur-2xl opacity-60 -z-10" />
              
              <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-white relative bg-paper-deep">
                <Image
                  src={howItWorks.diagram.src}
                  alt={howItWorks.diagram.alt}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mobile Cursive Text */}
          <div className="text-center font-handwriting text-indigo text-base px-4 opacity-80">
            {"\"From first call to final credit, we've got your back.\""}
          </div>

          {/* Cards Stack */}
          <div className="space-y-10 max-w-sm mx-auto px-4">
            {stepsData.map((step) => (
              <div key={step.id} className="relative rounded-[24px] bg-white border border-border/40 p-6 shadow-card">
                {/* Badge Overlapping */}
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-white shadow-card border border-border/10 flex items-center justify-center z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.iconBg}`}>
                    <step.icon className={`w-4 h-4 ${step.iconColor}`} />
                  </div>
                </div>

                <div className="pl-1">
                  <span className="text-[9px] font-bold tracking-wider text-slate/40">
                    STEP {step.id}
                  </span>
                  <h3 className="mt-0.5 text-base font-bold text-ink font-display leading-tight">
                    {step.title}
                  </h3>
                  {step.caption && (
                    <p className={`mt-0.5 text-[10px] font-bold ${step.captionColor}`}>
                      {step.caption}
                    </p>
                  )}
                  <p className="mt-1.5 text-xs leading-relaxed text-slate">
                    {step.detail}
                  </p>
                  <div className="mt-3 flex items-center text-[10px] font-bold text-indigo/60">
                    Learn More <span className="ml-1">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM TRUST STRIP                                             */}
        {/* ============================================================== */}
        <Reveal className="mt-16 lg:mt-24">
          <div className="max-w-4xl mx-auto rounded-[24px] md:rounded-full bg-ink border border-white/10 p-5 md:py-4 md:px-8 shadow-raised text-white">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 md:gap-2">
              {trustItems.map((item, index) => (
                <div key={item.title} className="flex-1 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-white/90" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide">{item.title}</h4>
                    <p className="text-[10px] text-white/50">{item.subtitle}</p>
                  </div>
                  
                  {/* Vertical separator (hidden on mobile, last item doesn't have it) */}
                  {index < trustItems.length - 1 && (
                    <div className="hidden md:block self-stretch w-px bg-white/10 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
