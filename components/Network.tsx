"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { network } from "@/lib/content";
import CinematicGlobe, {
  type GlobeCinemaPhase,
} from "@/components/CinematicGlobe";
import IndiaNetworkMap from "@/components/IndiaNetworkMap";
import { fadeUp, staggerContainer } from "@/lib/motion";

function formatCount(n: number) {
  return n.toLocaleString("en-IN");
}

const phaseLabel: Record<GlobeCinemaPhase, string> = {
  orbit: "Orbiting Earth…",
  locate: "Locating India…",
  zoom: "Entering Bharat…",
  done: "MSME network unlocked",
};

function NetworkCopy() {
  return (
    <>
      <h2
        id="network-heading"
        className="font-sans text-[28px] leading-[1.15] text-ink sm:text-[32px] lg:text-[40px]"
      >
        <span className="font-medium">{network.headingLead}</span>
        <br />
        <span className="font-bold">{network.headingStrong}</span>
        <br />
        <span className="font-display text-[1.05em] font-semibold italic text-ink">
          {network.headingAccent}
        </span>
        <br />
        <span className="font-bold">{network.headingEnd}</span>
      </h2>

      <p className="mt-4 max-w-md text-base text-slate lg:text-lg">
        {network.sub}
      </p>

      <p className="mt-3 text-sm font-semibold text-charcoal">
        {network.totalLabel}:{" "}
        <span className="text-success">{formatCount(network.totalCount)}</span>
      </p>

      <motion.a
        href={network.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="btn-shine mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#26C6DA] to-[#1D8348] px-7 py-3.5 text-base font-bold text-white shadow-raised"
      >
        {network.cta}
        <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
      </motion.a>

      <motion.ul
        className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {network.partners.map((name) => (
          <motion.li
            key={name}
            variants={fadeUp}
            className="text-[11px] font-bold tracking-[0.14em] text-slate/70 uppercase"
          >
            {name}
          </motion.li>
        ))}
        <motion.li variants={fadeUp}>
          <span className="inline-flex items-center rounded-md border border-dashed border-success/50 bg-success-bg px-3 py-1.5 text-[11px] font-bold text-success">
            {network.moreLabel}
          </span>
        </motion.li>
      </motion.ul>
    </>
  );
}

export default function Network() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.4 });

  const [phase, setPhase] = useState<GlobeCinemaPhase | "idle">("idle");
  const [showContent, setShowContent] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (reduce) {
      setShowContent(true);
      setPhase("done");
      return;
    }
    if (inView) setPlay(true);
  }, [inView, reduce]);

  // Hold the page on the cinema until the map journey finishes
  useEffect(() => {
    if (reduce || showContent || !play) return;

    const section = sectionRef.current;
    const lockY = section
      ? section.getBoundingClientRect().top + window.scrollY
      : window.scrollY;
    window.scrollTo(0, lockY);

    const body = document.body;
    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${lockY}px`;
    body.style.width = "100%";

    return () => {
      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      window.scrollTo(0, lockY);
    };
  }, [play, showContent, reduce]);

  const onPhaseChange = useCallback((p: GlobeCinemaPhase) => {
    setPhase(p);
  }, []);

  const onComplete = useCallback(() => {
    setPhase("done");
    setShowContent(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      id={network.id}
      aria-labelledby="network-heading"
      className="relative overflow-hidden bg-[#f4f2ee]"
    >
      {/* ===== Full-viewport cinema (no boxed globe) ===== */}
      <AnimatePresence>
        {!showContent ? (
          <motion.div
            key="cinema"
            className="relative h-[100svh] w-full overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,#ffffff_0%,#f4f2ee_50%,#e8e4dc_100%)]" />

            {/* Globe fills the entire viewport */}
            <CinematicGlobe
              play={play}
              onPhaseChange={onPhaseChange}
              onComplete={onComplete}
            />

            {/* Overlay chrome — does not constrain the globe */}
            <div className="pointer-events-none absolute inset-x-0 top-[max(3.5rem,env(safe-area-inset-top))] z-20 flex justify-center px-4">
              <AnimatePresence mode="wait">
                {phase !== "idle" ? (
                  <motion.p
                    key={phase}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="rounded-full border border-black/8 bg-white/90 px-4 py-2 text-[11px] font-bold tracking-[0.18em] text-slate uppercase shadow-card"
                  >
                    {phaseLabel[phase]}
                  </motion.p>
                ) : (
                  <p className="text-[11px] font-bold tracking-[0.18em] text-slate/50 uppercase">
                    Preparing Earth…
                  </p>
                )}
              </AnimatePresence>
            </div>

            <p className="pointer-events-none absolute inset-x-0 bottom-8 z-20 text-center text-[12px] text-slate/55">
              Country outlines · auto journey to India
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* ===== Content after cinema ===== */}
      <AnimatePresence>
        {showContent ? (
          <motion.div
            key="content"
            className="relative px-5 py-16 lg:px-8 lg:py-24"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(245,166,35,0.1),transparent_50%),radial-gradient(ellipse_at_85%_70%,rgba(29,131,72,0.08),transparent_45%)]" />

            <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.12, duration: 0.55 }}
              >
                <IndiaNetworkMap />
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.55 }}
              >
                <NetworkCopy />
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
