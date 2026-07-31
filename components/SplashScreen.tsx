"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

const TOTAL_MS = 3200;
const EXIT_MS = 850;

/**
 * Survives client-side navigations in the same JS runtime,
 * but resets on a full page reload — so reload always shows splash.
 */
let splashDoneThisRuntime = false;

type SplashAudioHooks = {
  playAmbient?: () => void;
  playSweep?: () => void;
  playReveal?: () => void;
  playExit?: () => void;
};

type SplashScreenProps = {
  onComplete: () => void;
  audio?: SplashAudioHooks;
};

function SplashParticles({ active }: { active: boolean }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: ((i * 47) % 100) + (i % 7) * 0.3,
        y: ((i * 31) % 100) + (i % 5) * 0.4,
        size: 1.5 + (i % 4),
        delay: (i % 12) * 0.08,
        duration: 3.2 + (i % 5) * 0.45,
        color:
          i % 3 === 0
            ? "rgba(245,166,35,0.85)"
            : i % 3 === 1
              ? "rgba(29,131,72,0.75)"
              : "rgba(255,255,255,0.55)",
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            active
              ? {
                  opacity: [0, 0.9, 0.35, 0.8, 0],
                  scale: [0, 1.2, 0.8, 1, 0.4],
                  y: [0, -24 - (p.id % 20), 8, -12],
                  x: [0, (p.id % 2 === 0 ? 1 : -1) * (8 + (p.id % 10))],
                }
              : { opacity: 0 }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function BrandName() {
  const words = ["VIKAS", "BHART"] as const;

  return (
    <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 sm:gap-x-4">
      {words.map((word, wi) => (
        <span key={word} className="inline-flex overflow-hidden">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${word}-${ci}`}
              className={`inline-block font-sans text-[clamp(2rem,7vw,3.75rem)] font-bold tracking-[0.12em] ${
                wi === 0
                  ? "text-paper"
                  : "bg-gradient-to-r from-marigold via-[#f0c14a] to-success bg-clip-text text-transparent"
              }`}
              initial={{ y: "110%", opacity: 0, filter: "blur(10px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              transition={{
                delay: 1.35 + wi * 0.18 + ci * 0.035,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
}

function SplashScreen({ onComplete, audio }: SplashScreenProps) {
  const [phase, setPhase] = useState<"play" | "exit">("play");
  const finished = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const audioRef = useRef(audio);
  onCompleteRef.current = onComplete;
  audioRef.current = audio;

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    onCompleteRef.current();
  }, []);

  useEffect(() => {
    let cancelled = false;
    const audioHooks = audioRef.current;

    audioHooks?.playAmbient?.();
    const sweep = window.setTimeout(() => {
      if (!cancelled) audioHooks?.playSweep?.();
    }, 700);
    const reveal = window.setTimeout(() => {
      if (!cancelled) audioHooks?.playReveal?.();
    }, 1100);
    const exitTimer = window.setTimeout(() => {
      if (cancelled) return;
      audioHooks?.playExit?.();
      setPhase("exit");
    }, TOTAL_MS - EXIT_MS);
    const done = window.setTimeout(() => {
      if (!cancelled) finish();
    }, TOTAL_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(sweep);
      window.clearTimeout(reveal);
      window.clearTimeout(exitTimer);
      window.clearTimeout(done);
    };
  }, [finish]);

  return (
    <motion.div
      role="presentation"
      aria-hidden
      className="splash-root fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={
        phase === "exit"
          ? { opacity: 0, scale: 1.04, filter: "blur(12px)" }
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      exit={{ opacity: 0 }}
      transition={
        phase === "exit"
          ? { duration: EXIT_MS / 1000, ease: [0.22, 1, 0.36, 1] }
          : { duration: 0.2 }
      }
    >
      <div className="absolute inset-0 bg-[#070e1a]" />
      <motion.div
        className="splash-aurora absolute inset-0"
        initial={{ opacity: 0, scale: 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.55, 0.4] }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(245,166,35,0.28), transparent 70%)",
        }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.3, duration: 1.1 }}
        style={{
          background:
            "radial-gradient(ellipse 40% 35% at 50% 55%, rgba(29,131,72,0.22), transparent 65%)",
        }}
      />

      <div className="splash-noise absolute inset-0 opacity-[0.07]" />
      <SplashParticles active={phase === "play"} />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.line
          x1="8"
          y1="50"
          x2="92"
          y2="50"
          stroke="url(#splashLine)"
          strokeWidth="0.08"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.9, 0.35] }}
          transition={{ delay: 0.4, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.line
          x1="50"
          y1="12"
          x2="50"
          y2="88"
          stroke="url(#splashLineV)"
          strokeWidth="0.06"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.55, 0.2] }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <defs>
          <linearGradient id="splashLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(245,166,35,0)" />
            <stop offset="50%" stopColor="rgba(245,166,35,0.9)" />
            <stop offset="100%" stopColor="rgba(29,131,72,0)" />
          </linearGradient>
          <linearGradient id="splashLineV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(30,62,114,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="100%" stopColor="rgba(29,131,72,0)" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-[28%] -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
        initial={{ left: "-40%", opacity: 0 }}
        animate={{ left: ["-40%", "120%"], opacity: [0, 1, 0] }}
        transition={{ delay: 0.65, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          className="relative mb-7"
          initial={{ opacity: 0, scale: 0.72, filter: "blur(18px)", rotate: -6 }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            rotate: 0,
          }}
          transition={{
            delay: 0.85,
            duration: 0.9,
            type: "spring",
            stiffness: 120,
            damping: 16,
          }}
        >
          <motion.div
            aria-hidden
            className="absolute -inset-10 rounded-full bg-marigold/30 blur-3xl"
            animate={{
              opacity: [0.25, 0.65, 0.4, 0.55],
              scale: [0.85, 1.08, 1, 1.05],
            }}
            transition={{
              delay: 1,
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative h-[min(42vw,168px)] w-[min(42vw,168px)] overflow-hidden rounded-[28%] bg-white/95 shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/30">
            <Image
              src={site.logo}
              alt=""
              fill
              priority
              sizes="168px"
              className="object-cover object-[50%_32%]"
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent"
              initial={{ x: "-120%", opacity: 0 }}
              animate={{ x: ["-120%", "140%"], opacity: [0, 1, 0] }}
              transition={{ delay: 1.25, duration: 0.85, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <BrandName />

        <motion.div
          className="mt-5 flex items-center gap-3"
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.95, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-marigold sm:w-14" />
          <span className="h-1.5 w-1.5 rounded-full bg-marigold" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-success sm:w-14" />
        </motion.div>

        <motion.p
          className="mt-4 max-w-md font-sans text-[11px] font-bold tracking-[0.22em] text-paper/75 uppercase sm:text-xs"
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 2.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {site.tagline}
        </motion.p>

        <motion.p
          className="mt-3 font-sans text-[10px] font-semibold tracking-[0.28em] text-paper/40 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.25, duration: 0.45 }}
        >
          Together · Growing · Building · Bharat
        </motion.p>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </motion.div>
  );
}

export default function SplashGate({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") return true;
    return !splashDoneThisRuntime;
  });
  const [contentVisible, setContentVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return splashDoneThisRuntime;
  });

  useEffect(() => {
    if (reduce) {
      splashDoneThisRuntime = true;
      setShowSplash(false);
      setContentVisible(true);
      return;
    }
    if (splashDoneThisRuntime) {
      setShowSplash(false);
      setContentVisible(true);
    }
  }, [reduce]);

  useEffect(() => {
    if (!showSplash) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showSplash]);

  const handleComplete = useCallback(() => {
    splashDoneThisRuntime = true;
    // Reveal content first (still under fading splash), then drop splash
    setContentVisible(true);
    window.requestAnimationFrame(() => {
      setShowSplash(false);
    });
  }, []);

  return (
    <>
      {/* Content stays fully hidden until splash finishes — no mid-intro fade races */}
      <div
        className="flex min-h-full flex-1 flex-col"
        style={{
          opacity: contentVisible ? 1 : 0,
          visibility: contentVisible ? "visible" : "hidden",
        }}
        aria-hidden={!contentVisible}
      >
        {children}
      </div>

      <AnimatePresence>
        {showSplash ? (
          <SplashScreen key="vb-splash" onComplete={handleComplete} />
        ) : null}
      </AnimatePresence>

      {/* Solid cover until first paint decides — prevents main-content flash */}
      {!contentVisible && !showSplash ? (
        <div className="fixed inset-0 z-[199] bg-[#070e1a]" aria-hidden />
      ) : null}
    </>
  );
}
