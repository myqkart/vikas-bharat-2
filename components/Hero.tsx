"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  Award,
  Building2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";
import { hero as homeHero, site } from "@/lib/content";
import { photos } from "@/lib/photos";
import TextReveal from "@/components/motion/TextReveal";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import { staggerContainer, fadeUp } from "@/lib/motion";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
const phoneHref = `tel:${site.phoneNumber}`;

type HeroProps = {
  eyebrow?: string;
  headline?: string;
  subhead?: string;
  image?: { src: string; alt: string };
  floatingProof?: string | null;
  showCtas?: boolean;
  animate?: boolean;
  aspectClass?: string;
};

function Spotlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const bg = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, rgba(245,166,35,0.22), transparent 55%)`;

  return (
    <motion.div
      ref={ref}
      className="relative"
      style={{ background: bg }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero({
  eyebrow = homeHero.eyebrow,
  headline = homeHero.headline,
  subhead = homeHero.subhead,
  image = homeHero.image,
  floatingProof = homeHero.floatingProof,
  showCtas = true,
  animate = true,
}: HeroProps) {
  if (!showCtas) {
    return (
      <SimpleHero
        eyebrow={eyebrow}
        headline={headline}
        subhead={subhead}
        image={image}
        floatingProof={floatingProof}
        animate={animate}
      />
    );
  }

  return (
    <section className="relative min-h-[min(100vh,980px)] overflow-hidden">
      {/* Full-bleed photo layer */}
      <div className="absolute inset-0">
        <Image
          src={photos.heroGlow}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-paper via-paper/90 to-indigo/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,166,35,0.25),transparent_50%)]" />
      </div>
      <FloatingOrbs />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <Spotlight>
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-5 pt-20 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pt-24 lg:pb-24">
          {/* Copy column */}
          <motion.div
            className="min-w-0"
            initial={animate ? "hidden" : false}
            animate={animate ? "visible" : undefined}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-3 py-1.5 text-[12px] font-bold text-ink shadow-card backdrop-blur-md"
            >
              <Sparkles size={14} className="text-marigold" aria-hidden />
              {eyebrow}
            </motion.div>

            <TextReveal
              as="h1"
              text={headline}
              onMount
              className="mt-5 font-display text-[40px] font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-[64px]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/90 lg:text-xl"
            >
              {subhead}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-success px-7 py-4 text-base font-bold text-white shadow-raised"
              >
                <MessageCircle size={20} strokeWidth={2.25} aria-hidden />
                {homeHero.primaryCta}
              </motion.a>
              <motion.a
                href={phoneHref}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border-2 border-ink/90 bg-white/80 px-7 py-4 text-base font-bold text-ink backdrop-blur-md transition-colors hover:bg-ink hover:text-white"
              >
                <Phone size={20} strokeWidth={2.25} aria-hidden />
                {homeHero.secondaryCta}
              </motion.a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[13px] font-semibold text-slate"
            >
              {homeHero.microcopy.join(" · ")}
            </motion.p>

          </motion.div>

          {/* Visual composition */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_30px_80px_-20px_rgba(18,41,77,0.45)] lg:aspect-[5/6]"
              initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1.08, 1] }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-marigold/10" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Floating metric card */}
            <motion.div
              className="absolute -left-2 top-8 z-20 w-[min(100%,220px)] rounded-[16px] border border-white/50 bg-white/85 p-4 shadow-raised backdrop-blur-xl sm:-left-6"
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              whileHover={{ y: -6, rotate: -1 }}
            >
              <div className="flex items-center gap-2 text-success">
                <TrendingUp size={18} aria-hidden />
                <span className="text-xs font-bold uppercase tracking-wide">
                  Money delivered
                </span>
              </div>
              <p className="mt-1 font-display text-3xl font-bold text-ink">₹100Cr+</p>
              <p className="text-xs font-semibold text-slate">Across loans & subsidies</p>
            </motion.div>

            {/* Floating proof */}
            {floatingProof ? (
              <motion.div
                className="absolute right-2 bottom-28 z-20 rounded-[16px] border border-white/50 bg-ink/90 px-4 py-3 text-paper shadow-raised backdrop-blur-md sm:right-0"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.7 }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                <p className="font-display text-sm font-semibold sm:text-base">
                  {floatingProof}
                </p>
              </motion.div>
            ) : null}

            {/* Service preview cards */}
            <motion.div
              className="absolute -bottom-4 left-4 right-4 z-20 grid grid-cols-2 gap-2 sm:left-auto sm:right-0 sm:w-64"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              {[
                { icon: Building2, label: "Registration", sub: "Company · GST · Udyam" },
                { icon: Sparkles, label: "Growth", sub: "Funding · Scale · Advisory" },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  className="rounded-[14px] border border-white/60 bg-white/90 p-3 shadow-card backdrop-blur-xl"
                  animate={{ y: [0, i === 0 ? -6 : 6, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                >
                  <card.icon size={18} className="text-marigold" aria-hidden />
                  <p className="mt-1 text-sm font-bold text-ink">{card.label}</p>
                  <p className="text-[11px] font-semibold text-slate">{card.sub}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Award chip */}
            <motion.div
              className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-full bg-marigold px-3 py-1.5 text-ink shadow-raised"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <Award size={14} aria-hidden />
              <span className="text-[11px] font-bold">ISO · MSME desk</span>
            </motion.div>
          </div>
        </div>
      </Spotlight>


    </section>
  );
}

function SimpleHero({
  eyebrow,
  headline,
  subhead,
  image,
  floatingProof,
  animate,
}: {
  eyebrow: string;
  headline: string;
  subhead: string;
  image: { src: string; alt: string };
  floatingProof?: string | null;
  animate: boolean;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-16 lg:px-8 lg:pt-20 lg:pb-24">
      <FloatingOrbs />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={animate ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[13px] font-semibold text-slate">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink lg:text-[52px]">
            {headline}
          </h1>
          <p className="mt-4 text-lg text-charcoal">{subhead}</p>
        </motion.div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-raised">
          <Image src={image.src} alt={image.alt} fill sizes="560px" className="object-cover" priority />
          {floatingProof ? (
            <div className="absolute bottom-4 left-4 rounded-[14px] bg-white/90 px-4 py-2 shadow-card backdrop-blur">
              <p className="font-display text-sm font-semibold text-ink">{floatingProof}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
