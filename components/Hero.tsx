"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Sparkles,
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
      className="relative flex min-h-[min(100svh,980px)] items-center"
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
    <section className="relative min-h-[min(100svh,980px)] overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src={photos.heroBackground}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/75 to-paper/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.6),transparent_55%)]" />
      </div>
      <FloatingOrbs />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <Spotlight>
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-[max(5.5rem,calc(env(safe-area-inset-top)+3.5rem))] lg:px-8 lg:py-28">
          <motion.div
            className="min-w-0 max-w-2xl lg:max-w-3xl"
            initial={animate ? "hidden" : false}
            animate={animate ? "visible" : undefined}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/70 px-4 py-2 text-[13px] font-bold text-ink shadow-card backdrop-blur-md"
            >
              <Sparkles size={15} className="text-marigold" aria-hidden />
              {eyebrow}
            </motion.div>

            <TextReveal
              as="h1"
              text={headline}
              onMount
              className="mt-7 font-display text-[44px] font-semibold leading-[1.06] text-ink sm:text-5xl lg:mt-8 lg:text-[72px]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/90 sm:mt-7 sm:text-xl lg:mt-8 lg:max-w-2xl lg:text-2xl lg:leading-relaxed"
            >
              {subhead}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:mt-12"
            >
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-[14px] bg-success px-8 py-4 text-base font-bold text-white shadow-raised lg:min-h-14 lg:px-9 lg:text-lg"
              >
                <MessageCircle size={22} strokeWidth={2.25} aria-hidden />
                {homeHero.primaryCta}
              </motion.a>
              <motion.a
                href={phoneHref}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-[14px] border-2 border-ink/90 bg-white/80 px-8 py-4 text-base font-bold text-ink backdrop-blur-md transition-colors hover:bg-ink hover:text-white lg:min-h-14 lg:px-9 lg:text-lg"
              >
                <Phone size={22} strokeWidth={2.25} aria-hidden />
                {homeHero.secondaryCta}
              </motion.a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm font-semibold text-slate lg:mt-8 lg:text-[15px]"
            >
              {homeHero.microcopy.join(" · ")}
            </motion.p>

            {floatingProof ? (
              <motion.p
                variants={fadeUp}
                className="mt-8 inline-flex rounded-full border border-border/80 bg-white/70 px-5 py-2.5 text-sm font-semibold text-ink shadow-card backdrop-blur-md lg:mt-10 lg:text-base"
              >
                {floatingProof}
              </motion.p>
            ) : null}

          </motion.div>
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
