"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, HandCoins, Landmark, Wallet } from "lucide-react";
import { servicePage } from "@/lib/content";
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

const icons = {
  grant: Landmark,
  loan: Wallet,
  nbfc: HandCoins,
} as const;

export default function ServicePageFunding() {
  const reduce = useReducedMotion();
  const { funding } = servicePage;

  return (
    <section
      id="funding-pathways"
      aria-labelledby="funding-heading"
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
      <div
        className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-success/12 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-indigo/10 blur-[110px]"
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
            {funding.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            id="funding-heading"
            text={funding.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            {funding.sub}
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
            {funding.items.map((item, idx) => {
              const Icon = icons[item.icon];
              const reverse = idx % 2 === 1;
              return (
                <motion.li
                  key={item.title}
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
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 90vw, 520px"
                          className="object-cover"
                        />
                      </motion.div>
                    </TiltCard>
                    <motion.span
                      variants={popIn}
                      className={`absolute -bottom-4 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-paper bg-success text-paper shadow-raised ${
                        reverse ? "left-6 lg:left-auto lg:right-6" : "right-6"
                      }`}
                    >
                      <Icon size={22} strokeWidth={2.2} aria-hidden />
                    </motion.span>
                  </motion.div>

                  <motion.div
                    variants={reverse ? dramaticFadeLeft : dramaticFadeRight}
                    className={reverse ? "lg:order-1" : ""}
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-success">
                      Capital pathway
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-slate sm:text-base">
                      {item.text}
                    </p>
                    <Link
                      href={item.href}
                      className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-paper transition-colors hover:bg-indigo"
                    >
                      Know more about {item.title}
                      <ArrowRight
                        size={15}
                        strokeWidth={2.4}
                        className="transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
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
