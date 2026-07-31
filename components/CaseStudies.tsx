"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function CaseStudies() {
  return (
    <section id="cases" className="bg-paper-deep/60 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-semibold tracking-wide text-slate lg:text-sm">
            {caseStudies.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
            {caseStudies.heading}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">{caseStudies.sub}</p>
        </Reveal>

        <motion.ul
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {caseStudies.items.map((item) => (
            <motion.li key={item.name} variants={fadeUp}>
              <TiltCard intensity={6} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[14px] border border-border bg-white shadow-card">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.image}
                      alt={`${item.business} case study visual`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm font-bold text-ink">{item.name}</p>
                    <p className="text-sm text-slate">{item.business}</p>
                    <dl className="mt-4 space-y-3 text-sm">
                      <div>
                        <dt className="font-bold text-marigold">Challenge</dt>
                        <dd className="mt-1 text-charcoal">{item.challenge}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-indigo">Solution</dt>
                        <dd className="mt-1 text-charcoal">{item.solution}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-success">Outcome</dt>
                        <dd className="mt-1 text-charcoal">{item.outcome}</dd>
                      </div>
                    </dl>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.metrics.map((m) => (
                        <span
                          key={m}
                          className="rounded-[6px] bg-success-bg px-2.5 py-1 text-xs font-bold text-success"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <blockquote className="mt-4 border-l-2 border-border pl-3 font-display text-sm italic text-ink">
                      “{item.quote}”
                    </blockquote>
                  </div>
                </article>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
