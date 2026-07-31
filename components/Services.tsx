"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { services } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check className="mx-auto text-success" size={18} strokeWidth={2.5} />;
  if (value === false)
    return <X className="mx-auto text-error/70" size={18} strokeWidth={2.5} />;
  return <span className="text-xs font-semibold text-slate">{value}</span>;
}

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-semibold tracking-wide text-slate lg:text-sm">
            {services.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
            {services.heading}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">{services.sub}</p>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            {services.overview}
          </p>
        </Reveal>

        <motion.ul
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.categories.map((cat) => (
            <motion.li
              key={cat.title}
              variants={fadeUp}
              className="rounded-[14px] border border-border bg-white p-5 shadow-card"
            >
              <p className="font-display text-lg font-semibold text-ink">
                {cat.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">{cat.text}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {services.items.map((item) => (
            <motion.li key={item.slug} variants={fadeUp}>
              <TiltCard intensity={8}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-[14px] shadow-card"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} — ${item.subtitle}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-paper/90">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm text-paper/80">
                      {item.summary}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-marigold">
                      Full details
                      <ArrowUpRight size={16} strokeWidth={2.25} />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal className="mt-16 overflow-hidden rounded-[14px] border border-border bg-white shadow-card">
          <div className="border-b border-border px-5 py-4">
            <h3 className="font-display text-xl font-semibold text-ink">
              Why founders pick Bharosa vs DIY / generic agents
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-paper-deep/80">
                <tr>
                  <th className="px-5 py-3 font-bold text-ink">Feature</th>
                  <th className="px-5 py-3 text-center font-bold text-ink">
                    Bharosa
                  </th>
                  <th className="px-5 py-3 text-center font-bold text-ink">DIY</th>
                  <th className="px-5 py-3 text-center font-bold text-ink">
                    Generic agent
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <td className="px-5 py-3 font-semibold text-charcoal">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3 text-center">
                      <Cell value={row.us} />
                    </td>
                    <td className="px-5 py-3 text-center">
                      <Cell value={row.diy} />
                    </td>
                    <td className="px-5 py-3 text-center">
                      <Cell value={row.generic} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
