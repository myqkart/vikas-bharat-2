"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { schemes } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import { fadeUp, staggerContainer } from "@/lib/motion";

const tagStyles: Record<string, string> = {
  Loan: "bg-indigo text-white",
  Subsidy: "bg-success text-white",
  Grant: "bg-marigold text-ink",
};

export default function Schemes() {
  return (
    <section
      id="schemes"
      className="relative overflow-hidden bg-ink px-5 py-16 lg:px-8 lg:py-24"
    >
      <FloatingOrbs className="opacity-40" />
      <div className="noise-overlay absolute inset-0" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-3xl">
            <p className="text-[13px] font-semibold tracking-wide text-paper/70 lg:text-sm">
              {schemes.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-paper lg:text-[40px]">
              {schemes.heading}
            </h2>
            <p className="mt-3 text-base text-paper/75 lg:text-lg">{schemes.sub}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/#schemes"
              className="shrink-0 text-sm font-bold text-marigold transition-colors hover:text-marigold-dark"
            >
              {schemes.link}
            </Link>
          </Reveal>
        </div>

        <motion.ul
          className="mt-8 flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {schemes.categories.map((cat) => (
            <motion.li
              key={cat.label}
              variants={fadeUp}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-paper/90 backdrop-blur"
            >
              <span className="font-bold text-marigold">{cat.label}</span>
              <span className="ml-2 text-paper/60">{cat.count}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
        >
          {schemes.items.map((item) => (
            <motion.li key={item.slug} variants={fadeUp}>
              <TiltCard intensity={7} className="h-full">
                <Link
                  href={`/schemes/${item.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-[14px] bg-white shadow-raised"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.name} — ${item.tag}, ${item.amount}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <span
                      className={`absolute left-3 top-3 rounded-[6px] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                        tagStyles[item.tag] ?? "bg-ink text-white"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-1 font-sans text-base font-bold text-success">
                      {item.amount}
                    </p>
                    <p className="mt-2 text-sm text-slate">{item.description}</p>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-charcoal">
                      {item.longDescription}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-slate">
                      Timeline: {item.timeline}
                    </p>
                    <span className="mt-4 inline-block text-sm font-bold text-ink">
                      Eligibility, docs & FAQ →
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
