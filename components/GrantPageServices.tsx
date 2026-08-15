"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardCheck,
  FileText,
  FolderOpen,
  Landmark,
  Map,
  Mic,
  Search,
  Send,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { grantPage } from "@/lib/content";
import { dramaticFadeUp, flipIn, staggerDramatic } from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  clipboard: ClipboardCheck,
  map: Map,
  file: FileText,
  folder: FolderOpen,
  send: Send,
  mic: Mic,
  shield: ShieldCheck,
  wallet: Wallet,
  zap: Zap,
  users: Users,
  landmark: Landmark,
};

type ServicesData = {
  eyebrow: string;
  heading: string;
  sub: string;
  items: readonly { title: string; text: string; icon: string }[];
};

export default function GrantPageServices({
  data = grantPage.services,
  sectionId = "grants-consultancy",
}: {
  data?: ServicesData;
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

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerDramatic}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: 1200 }}
        >
          {data.items.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? Search;
            return (
              <motion.li
                key={item.title}
                variants={flipIn}
                style={{ transformStyle: "preserve-3d" }}
              >
                <TiltCard
                  intensity={reduce ? 0 : 10}
                  className="flex h-full flex-col rounded-[24px] border border-border/50 bg-white p-6 shadow-card"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-marigold">
                    <Icon size={18} strokeWidth={2.2} aria-hidden />
                  </span>
                  <p className="mt-5 font-mono text-[10px] font-bold tracking-[0.18em] text-marigold-dark">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                    {item.text}
                  </p>
                </TiltCard>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
