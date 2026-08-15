"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, Check } from "lucide-react";
import { grantPage, site } from "@/lib/content";
import {
  dramaticFadeUp,
  flipIn,
  popIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hi, please send me the government grant documents checklist.",
)}`;

export default function GrantPageDocuments() {
  const reduce = useReducedMotion();
  const { documents } = grantPage;

  return (
    <section
      id="grant-documents"
      aria-labelledby="grant-documents-heading"
      className="relative overflow-hidden bg-[#FEFCF7] px-5 py-20 sm:px-8 lg:py-28"
    >
      {!reduce ? <FloatingOrbs className="opacity-45" /> : null}
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
          className="max-w-3xl"
        >
          <motion.p
            variants={dramaticFadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
          >
            {documents.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            id="grant-documents-heading"
            text={documents.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 rounded-[16px] border border-marigold/25 bg-marigold/8 px-4 py-3 text-sm leading-relaxed text-ink sm:text-base"
          >
            <span className="font-bold">Important: </span>
            {documents.note}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerDramatic}
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2"
          style={{ perspective: 1000 }}
        >
          {documents.items.map((item) => (
            <motion.li key={item} variants={flipIn}>
              <TiltCard
                intensity={reduce ? 0 : 6}
                glare={false}
                className="flex h-full items-start gap-3 rounded-[16px] border border-border/50 bg-white p-4 shadow-card"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success/12 text-success">
                  <Check size={14} strokeWidth={2.6} aria-hidden />
                </span>
                <p className="text-sm font-semibold leading-relaxed text-charcoal">
                  {item}
                </p>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={popIn}
          className="mt-10"
        >
          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-ink px-7 py-3.5 text-base font-bold text-paper transition-colors hover:bg-indigo"
          >
            {documents.cta}
            <ArrowDownToLine size={18} strokeWidth={2.4} aria-hidden />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
