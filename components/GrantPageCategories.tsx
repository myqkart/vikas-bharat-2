"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Cog,
  Globe,
  Lightbulb,
  Microscope,
  Network,
  Scissors,
  Sparkles,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { grantPage } from "@/lib/content";
import {
  dramaticFadeUp,
  flipIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

const iconMap: Record<
  (typeof grantPage.categories.items)[number]["icon"],
  LucideIcon
> = {
  seed: Lightbulb,
  tech: Cog,
  factory: Briefcase,
  export: Globe,
  lab: Microscope,
  chip: Sparkles,
  landmark: BarChart3,
  rocket: Network,
  agri: Sprout,
  textile: Scissors,
};

const iconTone: Record<
  (typeof grantPage.categories.items)[number]["icon"],
  string
> = {
  seed: "bg-marigold/12 text-marigold-dark",
  tech: "bg-success/12 text-success",
  factory: "bg-[#FFF4E0] text-marigold-dark",
  export: "bg-indigo/10 text-indigo",
  lab: "bg-indigo/8 text-indigo",
  chip: "bg-marigold/12 text-marigold-dark",
  landmark: "bg-[#FFF4E0] text-marigold-dark",
  rocket: "bg-indigo/10 text-indigo",
  agri: "bg-success/12 text-success",
  textile: "bg-marigold/12 text-marigold-dark",
};

function SchemeList({
  items,
}: {
  items: (typeof grantPage.categories.items)[number][];
}) {
  return (
    <ul className="mt-8 space-y-6">
      {items.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <li key={item.title} className="flex items-start gap-4">
            <span
              className={`mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconTone[item.icon]}`}
            >
              <Icon size={18} strokeWidth={2.2} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg font-bold leading-snug tracking-tight text-ink">
                {item.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate sm:text-[15px]">
                {item.text}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function GrantPageCategories() {
  const reduce = useReducedMotion();
  const { categories } = grantPage;
  const columns = [
    {
      heading: categories.leftHeading,
      icon: Lightbulb,
      items: categories.items.slice(0, 5),
    },
    {
      heading: categories.rightHeading,
      icon: Sparkles,
      items: categories.items.slice(5),
    },
  ] as const;

  return (
    <section
      id="grant-categories"
      aria-labelledby="grant-categories-heading"
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
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-marigold/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full bg-success/10 blur-[90px]"
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
            {categories.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            id="grant-categories-heading"
            text={categories.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            {categories.sub}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerDramatic}
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2"
          style={{ perspective: 1200 }}
        >
          {columns.map((column) => {
            const HeadingIcon = column.icon;
            return (
              <motion.div
                key={column.heading}
                variants={flipIn}
                style={{ transformStyle: "preserve-3d" }}
              >
                <TiltCard
                  intensity={reduce ? 0 : 8}
                  className="h-full rounded-[24px] border border-border/50 bg-white p-6 shadow-card sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-marigold">
                      <HeadingIcon size={18} strokeWidth={2.2} aria-hidden />
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                      {column.heading}
                    </h3>
                  </div>
                  <SchemeList items={[...column.items]} />
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
