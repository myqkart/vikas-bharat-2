"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { about } from "@/lib/content";
import { photos } from "@/lib/photos";
import {
  dramaticFadeLeft,
  dramaticFadeRight,
  flipIn,
  imageReveal,
  popIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

export default function AboutWhyChoose() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-heading"
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
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerDramatic}
            className="relative"
          >
            <motion.p
              variants={dramaticFadeLeft}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
            >
              Why Choose Vikas Bharat
            </motion.p>
            <TextReveal
              as="h2"
              id="why-choose-heading"
              text="One desk. Clear path. Growth-focused."
              className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.85rem]"
            />

            <motion.div
              variants={imageReveal}
              className="relative mt-10 aspect-[4/5] max-w-md overflow-hidden rounded-[28px] shadow-raised"
            >
              <Image
                src={photos.aboutWhyDesk}
                alt="Dedicated advisory desk"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={popIn}
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, -12, 0],
                      rotate: [0, -3, 2, 0],
                      transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className="absolute -right-2 bottom-16 hidden h-36 w-28 overflow-hidden rounded-[18px] border-4 border-paper shadow-raised lg:block"
            >
              <Image
                src={photos.aboutWhyShop}
                alt="Shop owner we support"
                fill
                sizes="112px"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={popIn}
              animate={
                reduce
                  ? undefined
                  : {
                      scale: [1, 1.06, 1],
                      rotate: [0, 8, -4, 0],
                      transition: {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className="absolute right-16 top-36 hidden h-24 w-24 overflow-hidden rounded-full border-4 border-paper shadow-raised lg:block"
            >
              <Image
                src={photos.aboutWhyCity}
                alt="Pan-India city presence"
                fill
                sizes="96px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerDramatic}
            className="space-y-4 pt-2 lg:pt-16"
            style={{ perspective: 1000 }}
          >
            {about.whyChoose.map((item, idx) => (
              <motion.li
                key={item.title}
                variants={idx % 2 === 0 ? dramaticFadeRight : flipIn}
                style={{ transformStyle: "preserve-3d" }}
              >
                <TiltCard
                  intensity={reduce ? 0 : 8}
                  glare={false}
                  className="group relative overflow-hidden rounded-[18px] bg-white/90 p-5 shadow-card"
                >
                  <motion.div
                    whileHover={reduce ? undefined : { x: 4 }}
                    className="flex items-start gap-4"
                  >
                    <motion.span
                      variants={popIn}
                      whileHover={
                        reduce
                          ? undefined
                          : { scale: 1.15, rotate: 12 }
                      }
                      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-marigold/15 text-marigold-dark"
                    >
                      <Check size={16} strokeWidth={2.6} aria-hidden />
                    </motion.span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-marigold-dark">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate sm:text-[15px]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
