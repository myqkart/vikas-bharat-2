"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trustBadges } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function TrustStrip() {
  return (
    <section aria-label="Trust badges" className="relative px-5 py-14 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,166,35,0.08),transparent_65%)]" />
      <motion.ul
        className="relative mx-auto grid max-w-[1200px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerContainer}
      >
        {trustBadges.map((badge) => (
          <motion.li
            key={badge.label}
            variants={fadeUp}
            whileHover={{ y: -8, rotate: -1 }}
            className="group overflow-hidden rounded-[18px] border border-white/70 bg-white/80 shadow-card backdrop-blur-xl"
          >
            <div className="relative h-28 overflow-hidden">
              <Image
                src={badge.image}
                alt={badge.alt}
                fill
                sizes="280px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            </div>
            <p className="px-4 py-3 text-sm font-bold text-ink lg:text-base">
              {badge.label}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
