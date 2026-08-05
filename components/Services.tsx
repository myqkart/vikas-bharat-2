"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Coins,
  Gift,
  FileText,
  HandCoins,
  Landmark,
  Users,
  ShieldCheck,
  Percent,
} from "lucide-react";

interface ServiceNode {
  title: string;
  slug: string;
  href: string;
  angle: number; // angle in degrees: 0 = top (12 o'clock), clockwise
  icon: any;
  colorClass: {
    iconBg: string;
    iconText: string;
  };
}

const serviceNodes: ServiceNode[] = [
  {
    title: "Registration\n& Incorporation",
    slug: "registration",
    href: "/services/registration",
    angle: 0,
    icon: FileText,
    colorClass: {
      iconBg: "bg-blue-50 text-blue-600",
      iconText: "text-blue-600",
    },
  },
  {
    title: "Loan &\nFunding",
    slug: "loan",
    href: "/services/loan",
    angle: 60,
    icon: HandCoins,
    colorClass: {
      iconBg: "bg-emerald-50 text-emerald-600",
      iconText: "text-emerald-600",
    },
  },
  {
    title: "Government\nGrant",
    slug: "grant",
    href: "/services/grant",
    angle: 120,
    icon: Landmark,
    colorClass: {
      iconBg: "bg-orange-50 text-orange-600",
      iconText: "text-orange-600",
    },
  },
  {
    title: "MSME /\nUdyam",
    slug: "udyam",
    href: "/services/registration",
    angle: 180,
    icon: Users,
    colorClass: {
      iconBg: "bg-indigo-50 text-indigo-600",
      iconText: "text-indigo-600",
    },
  },
  {
    title: "FSSAI\nLicense",
    slug: "fssai",
    href: "/services/certificate",
    angle: 240,
    icon: ShieldCheck,
    colorClass: {
      iconBg: "bg-amber-50 text-amber-600",
      iconText: "text-amber-600",
    },
  },
  {
    title: "GST\nRegistration",
    slug: "gst",
    href: "/services/registration",
    angle: 300,
    icon: Percent,
    colorClass: {
      iconBg: "bg-teal-50 text-teal-600",
      iconText: "text-teal-600",
    },
  },
];

const intermediateAngles = [30, 90, 150, 210, 270, 330];

// Radius of the orbit circle in SVG coordinates
const R = 180;

export default function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "loan" | "grant">("all");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Helper to determine if a node is highlighted based on the active tab filter
  const isNodeActive = (slug: string) => {
    if (activeTab === "all") return true;
    if (activeTab === "loan") {
      return slug === "loan" || slug === "grant" || slug === "udyam";
    }
    if (activeTab === "grant") {
      return slug === "grant" || slug === "udyam";
    }
    return true;
  };

  return (
    <section id="services" className="relative px-5 py-16 lg:px-8 lg:py-24 overflow-hidden">
      {/* Background Dot Grid for visual flair matching the screenshot */}
      <div className="absolute right-0 bottom-0 w-80 h-80 opacity-15 pointer-events-none select-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 320 320" fill="none">
          <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#12294D" />
          </pattern>
          <rect width="320" height="320" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate">
              <span className="h-2.5 w-2.5 rounded-full bg-marigold" />
              WHAT WE DO
            </div>

            {/* Heading */}
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] text-ink">
              Ek jagah, <br />
              har <span className="text-marigold font-serif">madad.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-base text-slate lg:text-lg">
              Everything your business needs under one roof.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2.5 rounded-[12px] font-bold text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === "all"
                    ? "bg-ink text-white shadow-card"
                    : "bg-[#FAF5ED] text-slate hover:bg-paper-deep border border-border/40"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("loan")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-[12px] font-bold text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === "loan"
                    ? "bg-ink text-white shadow-card"
                    : "bg-[#FAF5ED] text-slate hover:bg-paper-deep border border-border/40"
                }`}
              >
                <Coins size={16} className={activeTab === "loan" ? "text-white" : "text-slate/80"} />
                Loan
              </button>
              <button
                onClick={() => setActiveTab("grant")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-[12px] font-bold text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === "grant"
                    ? "bg-ink text-white shadow-card"
                    : "bg-[#FAF5ED] text-slate hover:bg-paper-deep border border-border/40"
                }`}
              >
                <Gift size={16} className={activeTab === "grant" ? "text-white" : "text-slate/80"} />
                Grant
              </button>
            </div>

            {/* Stats Box (Hidden on Mobile, placed below grid for better flow on mobile) */}
            <div className="hidden lg:block mt-10 max-w-lg rounded-[16px] border border-border bg-white/40 backdrop-blur-sm p-6 shadow-card">
              <div className="grid grid-cols-3 divide-x divide-border">
                <div className="px-4 text-center first:pl-0">
                  <p className="text-2xl font-extrabold text-ink lg:text-3xl">3,000+</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate">Businesses helped</p>
                </div>
                <div className="px-4 text-center">
                  <p className="text-2xl font-extrabold text-ink lg:text-3xl">48 hrs</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate">First reply time</p>
                </div>
                <div className="px-4 text-center last:pr-0">
                  <p className="text-2xl font-extrabold text-ink lg:text-3xl">95%</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate">Applications approved</p>
                </div>
              </div>
            </div>

            {/* More Services Button (Hidden on Mobile) */}
            <div className="hidden lg:block mt-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-between gap-6 rounded-[16px] border border-marigold/30 bg-marigold/[0.03] px-6 py-4 text-ink font-bold hover:bg-marigold/[0.06] transition-all duration-200 group w-full max-w-[280px]"
              >
                <span>+94 More Services</span>
                <span className="flex h-6 w-6 items-center justify-center text-marigold transition-transform group-hover:translate-x-1">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Orbit Graph */}
          <div className="lg:col-span-7 flex justify-center items-center">
            
            {/* Desktop Circular Constellation Layout */}
            <div className="hidden lg:block relative w-full max-w-[550px] aspect-square">
              
              {/* SVG Orbit and Radiating Lines */}
              <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
                {/* Orbit Dotted Circle */}
                <circle
                  cx={250}
                  cy={250}
                  r={R}
                  fill="none"
                  stroke="rgba(18, 41, 77, 0.08)"
                  strokeWidth={1.5}
                  strokeDasharray="4 6"
                />

                {/* Radiating Lines from Center to Cards */}
                {serviceNodes.map((node) => {
                  const isActive = isNodeActive(node.slug);
                  const isHovered = hoveredNode === node.slug;
                  const angleRad = ((node.angle - 90) * Math.PI) / 180;
                  const x = 250 + R * Math.cos(angleRad);
                  const y = 250 + R * Math.sin(angleRad);
                  
                  return (
                    <line
                      key={node.slug}
                      x1={250}
                      y1={250}
                      x2={x}
                      y2={y}
                      stroke={isHovered ? "var(--color-marigold)" : "rgba(18, 41, 77, 0.08)"}
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      strokeDasharray={isHovered ? "none" : "4 6"}
                      className="transition-all duration-300"
                      style={{ opacity: isActive ? 1 : 0.2 }}
                    />
                  );
                })}

                {/* Small Orbit Dots in between Main Nodes */}
                {intermediateAngles.map((angle, idx) => {
                  const angleRad = ((angle - 90) * Math.PI) / 180;
                  const x = 250 + R * Math.cos(angleRad);
                  const y = 250 + R * Math.sin(angleRad);
                  
                  return (
                    <circle
                      key={idx}
                      cx={x}
                      cy={y}
                      r={4}
                      fill="rgba(18, 41, 77, 0.25)"
                    />
                  );
                })}
              </svg>

              {/* Central Bharosa Hub Circle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-[125px] h-[125px] rounded-full bg-white border-[7px] border-paper shadow-raised flex flex-col items-center justify-center p-2 text-center select-none">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-marigold bg-marigold/[0.05] border border-marigold/10">
                    <Users size={18} className="stroke-[2.25]" />
                  </div>
                  <p className="text-sm font-bold text-ink leading-tight mt-1.5">Bharosa<br />Hub</p>
                </div>
              </div>

              {/* Orbiting Badges */}
              {serviceNodes.map((node) => {
                const isActive = isNodeActive(node.slug);
                const isHovered = hoveredNode === node.slug;
                const angleRad = ((node.angle - 90) * Math.PI) / 180;
                const x = 250 + R * Math.cos(angleRad);
                const y = 250 + R * Math.sin(angleRad);
                
                // Convert SVG Coordinates (0-500) to Percentages (0-100) for responsive alignment
                const leftPercent = (x / 500) * 100;
                const topPercent = (y / 500) * 100;
                const IconComponent = node.icon;

                return (
                  <Link
                    key={node.slug}
                    href={node.href}
                    onMouseEnter={() => setHoveredNode(node.slug)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className={`absolute flex items-center gap-3 px-4 py-3.5 rounded-[16px] bg-white border border-border/20 shadow-card select-none cursor-pointer transition-all duration-300 z-10 w-[175px] ${
                      isActive ? "opacity-100 scale-100 text-ink" : "opacity-25 scale-95 pointer-events-none text-ink/40"
                    } ${isHovered ? "scale-105 shadow-raised border-marigold/30" : ""}`}
                  >
                    {/* Badge Icon */}
                    <div className={`w-9.5 h-9.5 rounded-full flex items-center justify-center shrink-0 ${node.colorClass.iconBg}`}>
                      <IconComponent size={18} className="stroke-[2.25]" />
                    </div>
                    {/* Badge Title (wraps with newlines) */}
                    <span className="text-xs font-bold leading-tight whitespace-pre-wrap text-left">
                      {node.title}
                    </span>
                  </Link>
                );
              })}

            </div>

            {/* Mobile/Tablet Adaptive Grid Layout */}
            <div className="block lg:hidden w-full mt-4">
              {/* Central Hub Mini Banner */}
              <div className="flex items-center gap-3.5 p-4 bg-white border border-border/30 rounded-[18px] shadow-card max-w-sm mx-auto justify-center mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-marigold bg-marigold/[0.05] border border-marigold/10">
                  <Users size={20} className="stroke-[2]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate font-bold uppercase tracking-wider">BHAROSA HUB CENTRAL</p>
                  <p className="text-sm font-bold text-ink leading-tight">Interactive Service Network</p>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceNodes.map((node) => {
                  const isActive = isNodeActive(node.slug);
                  const IconComponent = node.icon;
                  
                  return (
                    <Link
                      key={node.slug}
                      href={node.href}
                      className={`flex items-center gap-4 p-4 rounded-[18px] bg-white border border-border/20 shadow-card transition-all duration-300 ${
                        isActive ? "opacity-100 scale-100 text-ink" : "opacity-35 scale-95 pointer-events-none text-ink/40"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${node.colorClass.iconBg}`}>
                        <IconComponent size={18} className="stroke-[2]" />
                      </div>
                      <div className="text-left">
                        <span className="text-sm font-bold leading-tight block whitespace-pre-line">
                          {node.title.replace("\n", " ")}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Stats Box */}
              <div className="mt-8 rounded-[16px] border border-border bg-white/40 backdrop-blur-sm p-5 shadow-card">
                <div className="grid grid-cols-3 divide-x divide-border">
                  <div className="px-2 text-center first:pl-0">
                    <p className="text-xl font-extrabold text-ink">3,000+</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate">Businesses helped</p>
                  </div>
                  <div className="px-2 text-center">
                    <p className="text-xl font-extrabold text-ink">48 hrs</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate">First reply time</p>
                  </div>
                  <div className="px-2 text-center last:pr-0">
                    <p className="text-xl font-extrabold text-ink">95%</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate">Apps approved</p>
                  </div>
                </div>
              </div>

              {/* Mobile More Services Button */}
              <div className="mt-6 text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-between gap-6 rounded-[16px] border border-marigold/30 bg-marigold/[0.03] px-6 py-4 text-ink font-bold hover:bg-marigold/[0.06] transition-all duration-200 group w-full"
                >
                  <span>+94 More Services</span>
                  <span className="flex h-6 w-6 items-center justify-center text-marigold transition-transform group-hover:translate-x-1">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
