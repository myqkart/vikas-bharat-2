"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  GitMerge,
  Megaphone,
  Rocket,
  Scale,
  TrendingUp,
  UserRound,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { servicePage } from "@/lib/content";
import {
  dramaticFadeUp,
  flipIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

const iconMap: Record<
  (typeof servicePage.catalog.items)[number]["icon"],
  LucideIcon
> = {
  registration: Building2,
  opc: UserRound,
  startup: Rocket,
  certificate: BadgeCheck,
  growth: TrendingUp,
  ma: GitMerge,
  marketing: Megaphone,
  legal: Scale,
  funding: Wallet,
};

export default function ServicePageCatalog() {
  const reduce = useReducedMotion();
  const { catalog } = servicePage;

  return (
    <section
      id="service-catalog"
      aria-labelledby="catalog-heading"
      className="relative overflow-hidden bg-[#FEFCF7] px-5 py-20 sm:px-8 lg:py-28"
    >
      {!reduce ? <FloatingOrbs className="opacity-55" /> : null}
      <div
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-marigold/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full bg-indigo/10 blur-[90px]"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-border/45"
        aria-hidden
      >
        <defs>
          <pattern
            id="catalog-dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#catalog-dots)" opacity="0.35" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerDramatic}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={dramaticFadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
          >
            {catalog.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            id="catalog-heading"
            text={catalog.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            {catalog.sub}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerDramatic}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {catalog.items.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.li
                key={item.title}
                variants={flipIn}
                style={{ transformStyle: "preserve-3d" }}
                className={idx % 3 === 1 ? "lg:translate-y-5" : ""}
              >
                <TiltCard
                  intensity={reduce ? 0 : 12}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border/50 bg-white shadow-card"
                >
                  <Link href={item.href} className="flex h-full flex-col outline-offset-4">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-card">
                        <Icon size={18} strokeWidth={2.2} aria-hidden />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-xl font-bold tracking-tight text-ink">
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
