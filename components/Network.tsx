"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { network } from "@/lib/content";
import IndiaNetworkMap from "@/components/IndiaNetworkMap";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

function formatCount(n: number) {
  return n.toLocaleString("en-IN");
}

export default function Network() {
  return (
    <section
      id={network.id}
      aria-labelledby="network-heading"
      className="relative overflow-hidden bg-white px-5 py-16 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(245,166,35,0.1),transparent_50%),radial-gradient(ellipse_at_85%_70%,rgba(29,131,72,0.08),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <IndiaNetworkMap />
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.08}>
          <h2
            id="network-heading"
            className="font-sans text-[28px] leading-[1.15] text-ink sm:text-[32px] lg:text-[40px]"
          >
            <span className="font-medium">{network.headingLead}</span>
            <br />
            <span className="font-bold">{network.headingStrong}</span>
            <br />
            <span className="font-display text-[1.05em] font-semibold italic text-ink">
              {network.headingAccent}
            </span>
            <br />
            <span className="font-bold">{network.headingEnd}</span>
          </h2>

          <p className="mt-4 max-w-md text-base text-slate lg:text-lg">
            {network.sub}
          </p>

          <p className="mt-3 text-sm font-semibold text-charcoal">
            {network.totalLabel}:{" "}
            <span className="text-success">{formatCount(network.totalCount)}</span>
          </p>

          <motion.a
            href={network.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-shine mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-[#26C6DA] to-[#1D8348] px-7 py-3.5 text-base font-bold text-white shadow-raised"
          >
            {network.cta}
            <ArrowRight size={18} strokeWidth={2.5} aria-hidden />
          </motion.a>

          <motion.ul
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {network.partners.map((name) => (
              <motion.li
                key={name}
                variants={fadeUp}
                className="text-[11px] font-bold tracking-[0.14em] text-slate/70 uppercase"
              >
                {name}
              </motion.li>
            ))}
            <motion.li variants={fadeUp}>
              <span className="inline-flex items-center rounded-md border border-dashed border-success/50 bg-success-bg px-3 py-1.5 text-[11px] font-bold text-success">
                {network.moreLabel}
              </span>
            </motion.li>
          </motion.ul>
        </Reveal>
      </div>
    </section>
  );
}
