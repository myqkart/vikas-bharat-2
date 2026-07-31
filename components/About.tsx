"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="relative px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-[13px] font-semibold tracking-wide text-slate lg:text-sm">
              {about.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
              {about.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal lg:text-lg">
              {about.body}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[14px] bg-paper-deep p-5 shadow-card">
                <p className="text-sm font-bold text-ink">Mission</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {about.mission}
                </p>
              </div>
              <div className="rounded-[14px] bg-ink p-5 text-paper shadow-card">
                <p className="text-sm font-bold">Vision</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/80">
                  {about.vision}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[14px] shadow-raised">
              <Image
                src={about.images.team.src}
                alt={about.images.team.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[14px] shadow-card">
              <Image
                src={about.images.office.src}
                alt={about.images.office.alt}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[14px] shadow-card">
              <Image
                src={about.images.mission.src}
                alt={about.images.mission.alt}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <motion.ul
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {about.values.map((value) => (
            <motion.li
              key={value.title}
              variants={fadeUp}
              className="rounded-[14px] border border-border bg-white/80 p-5 shadow-card"
            >
              <p className="font-display text-lg font-semibold text-ink">
                {value.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {value.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Milestones
            </h3>
            <ol className="mt-6 space-y-4 border-l-2 border-marigold pl-5">
              {about.milestones.map((m) => (
                <li key={m.year}>
                  <p className="text-sm font-bold text-marigold">{m.year}</p>
                  <p className="mt-1 text-sm text-charcoal">{m.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Certifications & desk strength
            </h3>
            <ul className="mt-6 space-y-3">
              {about.certifications.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-[14px] bg-success-bg px-4 py-3 text-sm font-semibold text-success"
                >
                  <span aria-hidden>✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
