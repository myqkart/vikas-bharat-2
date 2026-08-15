"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { grantPage } from "@/lib/content";
import { photos } from "@/lib/photos";
import {
  dramaticFadeLeft,
  dramaticFadeRight,
  dramaticFadeUp,
  flipIn,
  imageReveal,
  popIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

type UnlockData = {
  eyebrow: string;
  heading: string;
  paragraphs: readonly string[];
  benefitsHeading: string;
  benefits: readonly string[];
};

export default function GrantPageUnlock({
  data = grantPage.unlock,
  image = {
    src: photos.aboutServiceGrants,
    alt: "Founder reviewing non-repayable grant options",
  },
}: {
  data?: UnlockData;
  image?: { src: string; alt: string };
}) {
  const reduce = useReducedMotion();

  return (
    <section
      id="unlock-funding"
      aria-labelledby="unlock-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#EEF5F0] via-paper to-[#FFF8EE] px-5 py-20 sm:px-8 lg:py-28"
    >
      {!reduce ? <FloatingOrbs className="opacity-55" /> : null}
      <div
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-marigold/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full bg-success/10 blur-[90px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerDramatic}
          >
            <motion.p
              variants={dramaticFadeLeft}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
            >
              {data.eyebrow}
            </motion.p>
            <TextReveal
              as="h2"
              id="unlock-heading"
              text={data.heading}
              className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            />
            {data.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph.slice(0, 40)}
                variants={dramaticFadeUp}
                className="mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-[17px]"
              >
                {paragraph}
              </motion.p>
            ))}
            <motion.div
              variants={imageReveal}
              className="relative mt-10 hidden aspect-[16/10] max-w-lg overflow-hidden rounded-[28px] shadow-raised lg:block"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerDramatic}
            className="lg:pt-10"
          >
            <motion.p
              variants={dramaticFadeRight}
              className="text-[11px] font-bold uppercase tracking-[0.16em] text-marigold-dark"
            >
              {data.benefitsHeading}
            </motion.p>
            <ul className="mt-5 space-y-4" style={{ perspective: 1000 }}>
              {data.benefits.map((benefit, idx) => (
                <motion.li
                  key={benefit}
                  variants={idx % 2 === 0 ? dramaticFadeRight : flipIn}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <TiltCard
                    intensity={reduce ? 0 : 8}
                    glare={false}
                    className="group relative overflow-hidden rounded-[18px] bg-white/90 p-5 shadow-card"
                  >
                    <div className="flex items-start gap-4">
                      <motion.span
                        variants={popIn}
                        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success/12 text-success"
                      >
                        <Check size={16} strokeWidth={2.6} aria-hidden />
                      </motion.span>
                      <div>
                        <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-marigold-dark">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-1 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
