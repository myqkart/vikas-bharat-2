"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { grantPage } from "@/lib/content";
import { photos } from "@/lib/photos";
import {
  dramaticFadeLeft,
  dramaticFadeRight,
  dramaticFadeUp,
  imageReveal,
  popIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

type ProcessData = {
  eyebrow: string;
  heading: string;
  sub: string;
  steps: readonly { title: string; text: string }[];
};

const defaultProcessImages = [
  photos.aboutProcessConsult,
  photos.aboutProcessMap,
  photos.aboutProcessDocs,
  photos.aboutProcessFile,
  photos.aboutProcessFollow,
  photos.aboutProcessResult,
] as const;

export default function GrantPageProcess({
  data = grantPage.process,
  images = defaultProcessImages,
  sectionId = "grant-process",
}: {
  data?: ProcessData;
  images?: readonly string[];
  sectionId?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section
      id={sectionId}
      aria-labelledby={`${sectionId}-heading`}
      className="relative overflow-hidden bg-gradient-to-b from-paper via-[#FFF9F0] to-[#EEF5F0] px-5 py-20 sm:px-8 lg:py-28"
    >
      {!reduce ? <FloatingOrbs className="opacity-45" /> : null}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(18,41,77,0.14) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerDramatic}
          className="max-w-2xl"
        >
          <motion.p
            variants={dramaticFadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
          >
            {data.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            id={`${sectionId}-heading`}
            text={data.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            {data.sub}
          </motion.p>
        </motion.div>

        <div className="relative mt-16">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-marigold/50 via-indigo/30 to-transparent lg:block"
            aria-hidden
          />

          <ol className="space-y-10 lg:space-y-14">
            {data.steps.map((step, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <motion.li
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerDramatic}
                  className="grid items-center gap-6 lg:grid-cols-2 lg:gap-14"
                  style={{ perspective: 1000 }}
                >
                  <motion.div
                    variants={reverse ? dramaticFadeRight : dramaticFadeLeft}
                    className={`relative ${reverse ? "lg:order-2" : ""}`}
                  >
                    <TiltCard
                      intensity={reduce ? 0 : 10}
                      className="relative overflow-hidden rounded-[24px] shadow-raised"
                    >
                      <motion.div
                        variants={imageReveal}
                        className="relative aspect-[5/4] overflow-hidden"
                      >
                        <Image
                          src={images[idx % images.length]}
                          alt={step.title}
                          fill
                          sizes="(max-width: 1024px) 90vw, 520px"
                          className="object-cover"
                        />
                        <motion.div
                          variants={popIn}
                          className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.18em] text-ink"
                        >
                          STEP {String(idx + 1).padStart(2, "0")}
                        </motion.div>
                      </motion.div>
                    </TiltCard>
                  </motion.div>

                  <motion.div
                    variants={reverse ? dramaticFadeLeft : dramaticFadeRight}
                    className={`lg:pl-10 ${
                      reverse ? "lg:order-1 lg:pl-0 lg:pr-10 lg:text-right" : ""
                    }`}
                  >
                    <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-marigold-dark">
                      PROCESS / {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-slate lg:inline-block">
                      {step.text}
                    </p>
                  </motion.div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
