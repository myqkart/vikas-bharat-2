"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { resources } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Resources() {
  return (
    <section id="resources" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-semibold tracking-wide text-slate lg:text-sm">
            {resources.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
            {resources.heading}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">{resources.sub}</p>
        </Reveal>

        <motion.ul
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer}
        >
          {resources.topics.map((topic) => (
            <motion.li key={topic.title} variants={fadeUp}>
              <Link
                href={topic.href}
                className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-border bg-white shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {topic.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                    {topic.text}
                  </p>
                  <span className="mt-4 text-sm font-bold text-indigo">
                    Read path →
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
