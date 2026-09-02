"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

const TOTAL_MS = 4200;
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
  return (
    <motion.p
      className="mt-2 text-center text-xl font-bold tracking-[0.25em] text-white uppercase sm:text-2xl font-display"
      initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 1.45, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {site.companyName}
    </motion.p>
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
      {/* Background Image with smooth Ken Burns entry scale effect */}
      <motion.div
        className="absolute inset-0 select-none overflow-hidden"
        initial={{ scale: 1.12, filter: "blur(6px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/splash-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Sleek dark gradient overlays to ensure text and logo contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)]" />
      </motion.div>

      {/* Decorative ambient tri-color glow to reinforce brand identity */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 55%, rgba(245,166,35,0.15) 0%, rgba(29,131,72,0.1) 60%, transparent 100%)",
        }}
      />

      <div className="splash-noise absolute inset-0 opacity-[0.05]" />
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
          animate={{ pathLength: 1, opacity: [0, 0.5, 0.15] }}
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
          animate={{ pathLength: 1, opacity: [0, 0.35, 0.1] }}
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

          <div className="relative h-[min(52vw,220px)] w-[min(52vw,220px)] overflow-hidden rounded-[22px] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/30">
            <Image
              src={site.logo}
              alt={site.companyName}
              fill
              priority
              sizes="220px"
              className="object-contain p-3"
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

        {/* Loading Indicator */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="relative h-1 w-48 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm sm:w-56">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-marigold via-white to-success"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
            {/* Glowing tracer shine */}
            <motion.div
              className="absolute top-0 h-full w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                left: ["-20%", "120%"],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          <span className="font-sans text-[8px] font-bold tracking-[0.3em] text-white/40 uppercase">
            Loading
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

const BOT_UA =
  /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot|embedly|whatsapp|telegrambot|applebot|bingpreview|gptbot|chatgpt-user|claudebot|anthropic|perplexity|bytespider/i;

function shouldSkipSplash(userAgent: string, reduceMotion: boolean | null) {
  return Boolean(reduceMotion) || BOT_UA.test(userAgent);
}

export default function SplashGate({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") return true;
    return !splashDoneThisRuntime;
  });

  useEffect(() => {
    if (shouldSkipSplash(window.navigator.userAgent, reduce)) {
      splashDoneThisRuntime = true;
      setShowSplash(false);
      window.dispatchEvent(new CustomEvent("vb:splash-complete"));
      return;
    }
    if (splashDoneThisRuntime) {
      setShowSplash(false);
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
    setShowSplash(false);
    window.dispatchEvent(new CustomEvent("vb:splash-complete"));
  }, []);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col">{children}</div>

      <AnimatePresence>
        {showSplash ? (
          <SplashScreen key="vb-splash" onComplete={handleComplete} />
        ) : null}
      </AnimatePresence>
    </>
  );
}
