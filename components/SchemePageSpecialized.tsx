"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgePercent,
  Landmark,
  Sprout,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { schemePage } from "@/lib/content";
import { dramaticFadeUp, flipIn, staggerDramatic } from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

const iconMap: Record<
  (typeof schemePage.specialized.items)[number]["icon"],
  LucideIcon
> = {
  naiff: Landmark,
  tax: BadgePercent,
  seed: Sprout,
  vc: TrendingUp,
};

export default function SchemePageSpecialized() {
  const reduce = useReducedMotion();
  const { specialized } = schemePage;

  return (
    <section
      id="specialized-schemes"
      aria-labelledby="specialized-heading"
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
            {specialized.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            id="specialized-heading"
            text={specialized.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            {specialized.sub}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerDramatic}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
          style={{ perspective: 1200 }}
        >
          {specialized.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.li
                key={item.title}
                variants={flipIn}
                style={{ transformStyle: "preserve-3d" }}
              >
                <TiltCard
                  intensity={reduce ? 0 : 10}
                  className="group relative flex h-full overflow-hidden rounded-[24px] border border-border/50 bg-white shadow-card"
                >
                  <Link
                    href={item.href}
                    className="grid h-full min-h-[220px] w-full grid-cols-[0.85fr_1.15fr] outline-offset-4 sm:grid-cols-[0.9fr_1.1fr]"
                  >
                    <div className="relative min-h-[180px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 40vw, 280px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-col p-5 sm:p-6">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-marigold/12 text-marigold-dark ring-1 ring-marigold/25">
                        <Icon size={18} strokeWidth={2.2} aria-hidden />
                      </span>
                      <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                        {item.text}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                        Know More
                        <ArrowUpRight
                          size={15}
                          strokeWidth={2.4}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
