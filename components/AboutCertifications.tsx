"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  ShieldCheck,
  Stamp,
  Star,
} from "lucide-react";
import { aboutCredentials } from "@/lib/content";
import { photos } from "@/lib/photos";

const certIcons = [ShieldCheck, Stamp, Building2, BadgeCheck] as const;

export default function AboutCertifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const { certifications, recognition, affiliations } = aboutCredentials;

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xProofDrift = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const pathLength = useTransform(scrollYProgress, [0.08, 0.72], [0, 1]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yearScale = useTransform(scrollYProgress, [0, 0.35, 1], [0.92, 1.05, 1]);
  const yearOpacity = useTransform(scrollYProgress, [0, 0.12, 0.5], [0.15, 0.28, 0.12]);
  const certY1 = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -40]);
  const certY2 = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 28]);
  const certY3 = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -18]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 50]);
  const connectorDash = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Intro (0) + 4 certs (1–4) + recognition band (5)
    if (latest < 0.12) setActiveIndex(0);
    else if (latest < 0.28) setActiveIndex(1);
    else if (latest < 0.44) setActiveIndex(2);
    else if (latest < 0.6) setActiveIndex(3);
    else if (latest < 0.76) setActiveIndex(4);
    else setActiveIndex(5);
  });

  const activeCert =
    activeIndex >= 1 && activeIndex <= 4
      ? certifications[activeIndex - 1]
      : certifications[0];

  return (
    <div
      ref={containerRef}
      id="credentials"
      className="relative bg-paper"
      style={{ height: isDesktop ? "240vh" : "auto" }}
    >
      {/* Continuity curve from Process → Credentials */}
      <div className="absolute -top-1 left-0 right-0 h-24 pointer-events-none overflow-hidden z-30">
        <svg
          className="w-full h-full text-marigold/40"
          viewBox="0 0 1200 96"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M 80 0 C 200 40, 320 70, 480 58 S 780 20, 920 48 S 1120 90, 1200 72"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            fill="none"
            style={{ strokeDashoffset: prefersReducedMotion ? 0 : connectorDash }}
          />
          <circle cx="80" cy="4" r="3.5" className="fill-marigold" />
          <circle cx="920" cy="48" r="2.5" className="fill-indigo/50" />
        </svg>
      </div>

      {isDesktop ? (
        <div className="sticky top-0 h-screen w-full overflow-hidden flex">
          {/* Ambient glows */}
          <div className="absolute inset-0 pointer-events-none -z-30">
            {certifications.map((cert, idx) => (
              <div
                key={cert.id}
                className="absolute inset-0 transition-opacity duration-[1200ms] blur-[140px]"
                style={{
                  background: `radial-gradient(circle at ${35 + idx * 12}% ${40 + (idx % 2) * 15}%, ${
                    idx % 2 === 0
                      ? "rgba(245, 166, 35, 0.11)"
                      : "rgba(30, 62, 114, 0.09)"
                  }, transparent 62%)`,
                  opacity: activeIndex === idx + 1 ? 1 : activeIndex === 0 && idx === 0 ? 0.45 : 0,
                }}
              />
            ))}
          </div>

          {/* Dotted grid */}
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none select-none -z-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="credentialsGrid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="var(--color-ink)" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#credentialsGrid)" />
            </svg>
          </div>

          {/* Giant outlined drift text */}
          <motion.div
            className="absolute top-[22%] left-[4%] select-none pointer-events-none -z-20 font-display text-[13vw] font-black uppercase tracking-[0.22em] text-transparent opacity-[0.02]"
            style={{
              WebkitTextStroke: "1.25px var(--color-ink)",
              x: prefersReducedMotion ? 0 : xProofDrift,
            }}
          >
            PROOF
          </motion.div>

          {/* Concentric ring — process language continued */}
          <motion.div
            style={{ rotate: prefersReducedMotion ? 0 : ringRotate }}
            className="absolute top-[-60px] left-[-80px] w-[420px] h-[420px] opacity-[0.06] pointer-events-none -z-10 text-indigo"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="50" cy="50" r="48" strokeWidth="0.5" strokeDasharray="3 4" />
              <circle cx="50" cy="50" r="34" strokeWidth="0.35" />
              <circle cx="50" cy="50" r="20" strokeWidth="0.25" strokeDasharray="1 2" />
              <line x1="50" y1="2" x2="50" y2="98" strokeWidth="0.25" />
              <line x1="2" y1="50" x2="98" y2="50" strokeWidth="0.25" />
            </svg>
          </motion.div>

          {/* Connecting SVG pathway across composition */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 12 78 C 28 62, 38 48, 52 44 S 72 52, 88 28"
              stroke="var(--color-border)"
              strokeWidth="0.12"
              strokeDasharray="0.8 1.4"
              fill="none"
            />
            <motion.path
              d="M 12 78 C 28 62, 38 48, 52 44 S 72 52, 88 28"
              stroke="var(--color-marigold)"
              strokeWidth="0.28"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength: prefersReducedMotion ? 1 : pathLength }}
            />
          </svg>

          {/* LEFT — sticky credential canvas */}
          <div className="relative w-[54%] h-full flex flex-col justify-between py-10 pl-14 xl:pl-20 pr-4 z-20">
            {/* Top HUD */}
            <div className="flex justify-between items-start pointer-events-none select-none">
              <div>
                <span className="text-[10px] font-bold text-slate/50 font-mono tracking-widest">
                  {aboutCredentials.eyebrow}
                </span>
                <h2 className="font-display text-lg font-bold text-ink mt-0.5">
                  Certifications & Recognition
                </h2>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-slate/50 text-right">
                EST. {aboutCredentials.founded} · VERIFIED DESK · INDIA
              </div>
            </div>

            {/* Artifact stage */}
            <div className="relative flex-1 flex items-center justify-center min-h-0">
              <div className="relative w-full max-w-[520px] h-[62vh]">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-border/80" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-border/80" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-border/80" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-border/80" />

                {/* Oversized year */}
                <motion.div
                  style={{
                    scale: prefersReducedMotion ? 1 : yearScale,
                    opacity: prefersReducedMotion ? 0.18 : yearOpacity,
                  }}
                  className="absolute -top-2 right-6 font-display text-[9rem] xl:text-[11rem] font-black leading-none text-ink/10 select-none pointer-events-none tracking-tighter"
                  aria-hidden
                >
                  {aboutCredentials.founded}
                </motion.div>

                {/* Supporting atmosphere photo */}
                <motion.div
                  style={{ y: photoY }}
                  className="absolute -left-4 top-[8%] w-[38%] aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 bg-paper p-1.5 shadow-card z-0"
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={photos.credentialShop}
                      alt="Indian retail entrepreneur at work"
                      fill
                      className="object-cover"
                      sizes="180px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Primary certificate — arch portal language from Process */}
                <motion.div
                  style={{ y: certY1 }}
                  className="absolute left-[18%] top-[4%] w-[58%] h-[78%] z-20 group"
                >
                  <div className={`absolute -top-10 -right-10 w-[140px] h-[140px] border border-ink/[0.04] rounded-full flex items-center justify-center p-2 pointer-events-none ${prefersReducedMotion ? "" : "animate-spin [animation-duration:55s]"}`}>
                    <svg
                      className="w-full h-full text-ink/[0.04]"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="50" cy="50" r="48" strokeDasharray="3 3" />
                      <circle cx="50" cy="50" r="36" />
                    </svg>
                  </div>

                  <div className="relative w-full h-full rounded-t-[160px] rounded-b-[18px] overflow-hidden border border-border bg-paper p-2.5 shadow-raised transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.015]">
                    <div className="relative w-full h-full rounded-t-[150px] rounded-b-[10px] overflow-hidden bg-paper-deep">
                      {certifications.map((cert, idx) => {
                        const isCurrent =
                          activeIndex === 0
                            ? idx === 0
                            : activeIndex === 5
                              ? idx === 3
                              : activeIndex - 1 === idx;
                        return (
                          <div
                            key={cert.id}
                            className="absolute inset-0 transition-all duration-[1100ms] ease-in-out"
                            style={{
                              opacity: isCurrent ? 1 : 0,
                              transform: isCurrent
                                ? "scale(1)"
                                : "scale(1.06)",
                              filter: isCurrent ? "blur(0px)" : "blur(4px)",
                            }}
                          >
                            <Image
                              src={cert.image}
                              alt={`${cert.name} credential visual`}
                              fill
                              className="object-cover"
                              sizes="320px"
                              priority={idx === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Floating meta chip */}
                  <div className="absolute -bottom-3 left-3 bg-white/80 backdrop-blur-md border border-border/60 shadow-sm rounded-lg px-3 py-2 font-mono text-[9px] font-bold text-ink flex items-center gap-2 z-30">
                    <span className="w-1.5 h-1.5 rounded-full bg-marigold" />
                    <span className="text-slate/50">ARTIFACT</span>
                    <span>/</span>
                    <span className="text-indigo">{activeCert.tag}</span>
                  </div>
                </motion.div>

                {/* Overlapping document detail */}
                <motion.div
                  style={{ y: certY2 }}
                  className="absolute right-[2%] bottom-[10%] w-[46%] aspect-[4/3] z-30 group"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-[5px] border-paper bg-paper shadow-raised p-1 border border-border/50 transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-[1.03]">
                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-paper-deep">
                      {certifications.map((cert, idx) => {
                        const isCurrent =
                          activeIndex === 0
                            ? idx === 0
                            : activeIndex === 5
                              ? idx === 3
                              : activeIndex - 1 === idx;
                        return (
                          <Image
                            key={cert.id}
                            src={cert.detailImage}
                            alt={`${cert.name} detail`}
                            fill
                            className="object-cover transition-opacity duration-700"
                            style={{ opacity: isCurrent ? 1 : 0 }}
                            sizes="220px"
                          />
                        );
                      })}
                      <div className="absolute inset-0 bg-ink/5" />
                    </div>
                  </div>
                </motion.div>

                {/* Small third photo — team desk / growth context */}
                <motion.div
                  style={{ y: certY3 }}
                  className="absolute right-[8%] top-[6%] w-[28%] aspect-square rounded-xl overflow-hidden border border-border/60 bg-paper p-1 shadow-card z-10"
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={
                        activeIndex === 5
                          ? photos.credentialGrowth
                          : photos.credentialTeam
                      }
                      alt={
                        activeIndex === 5
                          ? "Partnership and recognition context"
                          : "Advisory desk meeting with business owners"
                      }
                      fill
                      className="object-cover transition-opacity duration-700"
                      sizes="140px"
                    />
                  </div>
                </motion.div>

                {/* Plus / cross micro marks */}
                <span className="absolute bottom-[22%] left-[8%] text-indigo/20 text-lg font-mono font-bold select-none">
                  +
                </span>
                <span className="absolute top-[42%] right-[0%] text-indigo/15 text-xl font-mono font-bold select-none">
                  ×
                </span>
                <span className="absolute top-[18%] left-[42%] text-marigold/30 text-sm select-none">
                  ✦
                </span>
              </div>
            </div>

            {/* Bottom HUD */}
            <div className="flex justify-between items-end pointer-events-none select-none">
              <div className="flex flex-col font-mono text-[9px] text-slate/50 bg-paper-deep/40 border border-border/30 backdrop-blur-md px-4 py-3 rounded-lg shadow-sm">
                <span className="font-bold text-ink mb-1">
                  [ CREDENTIAL READOUT ]
                </span>
                <span className="flex justify-between gap-6">
                  <span>ACTIVE:</span>
                  <span className="text-indigo font-bold">
                    {activeIndex === 0
                      ? "00 / INTRO"
                      : activeIndex === 5
                        ? "RECOGNITION"
                        : `${activeCert.num} / ${activeCert.tag}`}
                  </span>
                </span>
                <span className="flex justify-between gap-6">
                  <span>ISSUED BY:</span>
                  <span className="text-marigold-dark font-bold truncate max-w-[180px]">
                    {activeIndex === 5
                      ? "MULTI-SOURCE"
                      : activeCert.authority.toUpperCase()}
                  </span>
                </span>
                <span className="flex justify-between gap-6">
                  <span>STATUS:</span>
                  <span className="text-ink">
                    {activeIndex === 5 ? "PUBLIC RECORD" : activeCert.status}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-3 text-[9px] font-mono tracking-widest text-slate/40">
                <span>01</span>
                <div className="w-28 h-[1.5px] bg-border relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-marigold"
                    style={{
                      width: `${Math.min(100, (activeIndex / 5) * 100)}%`,
                    }}
                  />
                </div>
                <span>04</span>
              </div>
            </div>
          </div>

          {/* RIGHT — scrolling narrative panels (via sticky viewport + opacity) */}
          <div className="relative w-[46%] h-full flex flex-col justify-center pr-14 xl:pr-20 pl-6 z-20">
            {/* Intro */}
            <div
              className="absolute inset-x-6 xl:inset-x-8 top-0 bottom-0 flex flex-col justify-center transition-all duration-700"
              style={{
                opacity: activeIndex === 0 ? 1 : 0,
                transform:
                  activeIndex === 0 ? "translateY(0)" : "translateY(-16px)",
                pointerEvents: activeIndex === 0 ? "auto" : "none",
                filter: activeIndex === 0 ? "blur(0)" : "blur(2px)",
              }}
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-indigo">
                <span
                  className={`h-2 w-2 rounded-full bg-marigold ${
                    prefersReducedMotion ? "" : "animate-pulse"
                  }`}
                />
                {aboutCredentials.eyebrow}
              </div>
              <h3 className="mt-5 font-display text-[40px] xl:text-[48px] font-black text-ink leading-[1.08] tracking-tight">
                {aboutCredentials.headingLead}{" "}
                <span className="font-serif italic text-marigold-dark font-normal">
                  {aboutCredentials.headingAccent}
                </span>
              </h3>
              <p className="font-handwriting text-3xl text-marigold-dark mt-2 font-bold">
                {aboutCredentials.hindi}
              </p>
              <p className="mt-5 text-slate text-sm xl:text-base leading-relaxed font-semibold max-w-md">
                {aboutCredentials.sub}
              </p>
              <div className="mt-8 flex items-center gap-3 text-[10px] font-mono tracking-widest text-slate/50">
                <span>SCROLL TO INSPECT CREDENTIALS</span>
                <ArrowUpRight size={11} className="rotate-90" />
              </div>
            </div>

            {/* Certification panels */}
            {certifications.map((cert, idx) => {
              const isActive = activeIndex === idx + 1;
              const Icon = certIcons[idx];
              return (
                <div
                  key={cert.id}
                  className="absolute inset-x-6 xl:inset-x-8 top-0 bottom-0 flex flex-col justify-center transition-all duration-700"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(20px)",
                    pointerEvents: isActive ? "auto" : "none",
                    filter: isActive ? "blur(0)" : "blur(2px)",
                  }}
                >
                  <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-[0.2em] text-indigo/70 mb-3 border-l-2 border-marigold pl-3">
                    <span>CRED / {cert.num}</span>
                    <span className="text-slate/30">•</span>
                    <span>{cert.status}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-2 flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-white/50 text-marigold shadow-sm">
                      <Icon size={16} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-[36px] xl:text-[42px] font-extrabold text-ink leading-tight tracking-tight">
                        {cert.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-mono font-bold tracking-wider text-slate/50 uppercase">
                        Issued by · {cert.authority}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-slate text-sm leading-relaxed font-medium max-w-md">
                    {cert.detail}
                  </p>

                  <div className="mt-7 bg-paper-deep/30 border border-border/50 rounded-xl p-4 flex gap-4 items-start shadow-sm max-w-md">
                    <span className="text-marigold text-lg shrink-0 mt-0.5">✦</span>
                    <span className="text-xs font-semibold text-charcoal leading-relaxed">
                      The same credential language we cite on client WhatsApp updates —
                      stamped outcomes you can forward to family and bank desks.
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 border border-border/70 rounded-xl bg-white/40 backdrop-blur-md overflow-hidden max-w-md text-[10px] text-ink font-mono font-bold divide-x divide-border/60 shadow-sm">
                    <div className="p-3">
                      <div className="text-[8px] font-semibold text-slate/50 mb-1">
                        TAG
                      </div>
                      <span>{cert.tag}</span>
                    </div>
                    <div className="p-3">
                      <div className="text-[8px] font-semibold text-slate/50 mb-1">
                        INDEX
                      </div>
                      <span className="text-indigo">
                        {cert.num} / 0{certifications.length}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Recognition outro panel */}
            <div
              className="absolute inset-x-6 xl:inset-x-8 top-0 bottom-0 flex flex-col justify-center transition-all duration-700"
              style={{
                opacity: activeIndex === 5 ? 1 : 0,
                transform:
                  activeIndex === 5 ? "translateY(0)" : "translateY(20px)",
                pointerEvents: activeIndex === 5 ? "auto" : "none",
                filter: activeIndex === 5 ? "blur(0)" : "blur(2px)",
              }}
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-widest text-indigo">
                <span className="h-2 w-2 rounded-full bg-success" />
                RECOGNITION // PUBLIC MARKERS
              </div>
              <h3 className="mt-4 font-display text-[34px] xl:text-[40px] font-black text-ink leading-tight tracking-tight">
                Recognition beyond{" "}
                <span className="font-serif italic text-marigold-dark font-normal">
                  a single stamp.
                </span>
              </h3>
              <p className="mt-3 text-slate text-sm leading-relaxed font-semibold max-w-md">
                Scheme partnerships, client ratings, walk-in city desks, and the
                portals we file through every week.
              </p>

              <ul className="mt-6 space-y-2.5 max-w-md">
                {recognition.map((item) => (
                  <li
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group flex gap-3 items-center rounded-xl border border-border/50 bg-white/40 backdrop-blur-sm px-3 py-2.5 transition-all duration-300 hover:border-marigold/50 hover:shadow-card"
                  >
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-border/40">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="44px"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="font-display text-sm font-bold text-ink">
                          {item.label}
                        </span>
                        <ArrowUpRight
                          size={12}
                          className={`text-marigold transition-all duration-300 ${
                            hoveredId === item.id
                              ? "opacity-100 translate-x-0.5 -translate-y-0.5"
                              : "opacity-40 group-hover:opacity-100"
                          }`}
                          aria-hidden
                        />
                      </span>
                      <span className="block text-[11px] text-slate font-medium leading-snug mt-0.5">
                        {item.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Affiliation ribbon — editorial text, not logo wall */}
              <div className="mt-6 max-w-md">
                <div className="text-[8px] font-mono font-bold tracking-[0.25em] text-slate/40 mb-2">
                  PORTAL AFFILIATIONS · FILING PATHWAYS
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {affiliations.map((name) => (
                    <span
                      key={name}
                      className="text-[10px] font-mono font-bold tracking-wider text-ink/70 border-b border-dashed border-border/80 pb-0.5 hover:text-indigo hover:border-marigold transition-colors"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================
           MOBILE — editorial vertical stack
           ======================================================== */
        <div className="px-6 py-20 max-w-[640px] mx-auto flex flex-col">
          {/* Continuity marker */}
          <div className="mb-3 flex items-center gap-2 text-[9px] font-mono tracking-widest text-slate/40">
            <span className="w-6 h-px bg-marigold/60" />
            FROM PROCESS → PROOF
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo">
              <span className="h-1.5 w-1.5 rounded-full bg-marigold animate-pulse" />
              {aboutCredentials.eyebrow}
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-black text-ink leading-tight">
              {aboutCredentials.headingLead}{" "}
              <span className="font-serif italic text-marigold-dark font-normal">
                {aboutCredentials.headingAccent}
              </span>
            </h2>
            <p className="font-handwriting text-2xl text-marigold-dark mt-1 font-bold">
              {aboutCredentials.hindi}
            </p>
            <p className="mt-4 text-slate text-xs sm:text-sm font-semibold leading-relaxed">
              {aboutCredentials.sub}
            </p>
          </div>

          {/* Primary artifact */}
          <div className="relative mb-16">
            <div className="absolute -top-3 right-2 font-display text-7xl font-black text-ink/[0.06] leading-none select-none pointer-events-none">
              {aboutCredentials.founded}
            </div>
            <div className="relative w-full h-[300px] rounded-t-[120px] rounded-b-[16px] overflow-hidden border border-border bg-paper p-2 shadow-raised">
              <div className="relative w-full h-full rounded-t-[110px] rounded-b-[10px] overflow-hidden">
                <Image
                  src={certifications[0].image}
                  alt={`${certifications[0].name} primary credential`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-6 right-4 w-[48%] aspect-[4/3] rounded-xl overflow-hidden border-[4px] border-paper shadow-raised bg-paper p-0.5">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={certifications[0].detailImage}
                  alt={`${certifications[0].name} detail`}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
            <div className="absolute -left-1 top-10 w-[30%] aspect-[3/4] rounded-xl overflow-hidden border border-border/50 shadow-card bg-paper p-1 -rotate-3">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={photos.credentialShop}
                  alt="Entrepreneur context"
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
            </div>
          </div>

          {/* Certification list */}
          <div className="relative border-l border-border/80 pl-6 ml-1 space-y-12 mt-8">
            {certifications.map((cert, idx) => {
              const Icon = certIcons[idx];
              return (
                <article key={cert.id} className="relative flex flex-col">
                  <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full border border-marigold bg-paper flex items-center justify-center shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-marigold" />
                  </span>

                  <div className="relative w-full h-[200px] rounded-2xl overflow-hidden mb-5 border border-border/50 bg-paper p-1.5 shadow-raised">
                    <div
                      className="relative w-full h-full overflow-hidden"
                      style={{
                        borderRadius:
                          idx % 2 === 0
                            ? "70px 10px 70px 10px"
                            : "10px 70px 10px 70px",
                      }}
                    >
                      <Image
                        src={cert.image}
                        alt={`${cert.name} visual`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90vw, 500px"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
                    </div>
                    <div className="absolute top-3 right-3 bg-paper/95 border border-border px-2 py-1 rounded-lg shadow-sm text-[8px] font-mono tracking-widest text-ink font-bold flex items-center gap-1.5">
                      <Icon size={9} className="text-marigold" />
                      CRED {cert.num} // {cert.tag}
                    </div>
                  </div>

                  <div className="text-[9px] font-mono font-bold tracking-wider text-slate/50 mb-1">
                    ISSUED BY · {cert.authority.toUpperCase()}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-ink leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-slate text-xs sm:text-sm mt-2 leading-relaxed font-semibold">
                    {cert.detail}
                  </p>
                  <div className="mt-3 bg-paper-deep/20 border border-border/40 rounded-xl p-3 w-full text-[10px] text-charcoal font-semibold flex gap-2">
                    <span className="text-marigold font-black">•</span>
                    <span>Status · {cert.status}</span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Recognition */}
          <div className="mt-16 border-t border-border/40 pt-12">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo mb-4">
              <Star size={12} className="text-marigold" aria-hidden />
              Recognition markers
            </div>
            <h3 className="font-display text-2xl font-extrabold text-ink leading-tight">
              Recognition beyond a single stamp.
            </h3>

            <ul className="mt-6 space-y-3">
              {recognition.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 items-center rounded-xl border border-border/50 bg-white/50 px-3 py-3"
                >
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border/40">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </span>
                  <span>
                    <span className="block font-display text-sm font-bold text-ink">
                      {item.label}
                    </span>
                    <span className="block text-[11px] text-slate font-medium mt-0.5">
                      {item.text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="text-[8px] font-mono font-bold tracking-[0.2em] text-slate/40 mb-2">
                PORTAL AFFILIATIONS
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {affiliations.map((name) => (
                  <span
                    key={name}
                    className="text-[10px] font-mono font-bold tracking-wider text-ink/70 border-b border-dashed border-border/80 pb-0.5"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 relative h-36 rounded-2xl overflow-hidden border border-border/50 shadow-raised">
              <Image
                src={photos.credentialGrowth}
                alt="Partnership and business growth context"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 90vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-ink/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-paper">
                <div className="text-[9px] font-mono tracking-widest opacity-80">
                  EST. {aboutCredentials.founded} · INDIA
                </div>
                <div className="font-display text-lg font-bold mt-1">
                  Credentials that hold with every file.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
