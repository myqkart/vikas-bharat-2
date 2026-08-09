"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { photos } from "@/lib/photos";
import { fadeUp, staggerContainer, scaleUp } from "@/lib/motion";

const certImages = {
  aboutCertIso: photos.aboutCertIso,
  aboutCertBis: photos.aboutCertBis,
  aboutCertFssai: photos.aboutCertFssai,
  aboutCertTax: photos.aboutCertTax,
  aboutCertZed: photos.aboutCertZed,
  aboutCertOther: photos.aboutCertOther,
} as const;

export default function AboutRecognition() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative overflow-hidden bg-paper-deep px-5 py-20 sm:px-8 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-indigo/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-marigold/15 blur-[90px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
          className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
            >
              07 / Certifications &amp; Recognition
            </motion.p>
            <motion.h2
              id="certifications-heading"
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            >
              Credentials that travel with every file
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="max-w-md text-base leading-relaxed text-slate lg:justify-self-end"
          >
            ISO, BIS/CRS, FSSAI, tax exemption pathways, ZED, and more — the
            stamps founders ask for.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {about.certifications.map((cert, idx) => (
            <motion.li
              key={cert.title}
              variants={scaleUp}
              whileHover={{ y: -8, rotate: idx % 2 === 0 ? -0.6 : 0.6 }}
              className={`group relative overflow-hidden rounded-[24px] bg-white shadow-card ${
                idx === 0 || idx === 5 ? "sm:col-span-2 lg:col-span-1" : ""
              } ${idx === 1 ? "lg:-translate-y-6" : ""} ${
                idx === 4 ? "lg:translate-y-4" : ""
              }`}
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={certImages[cert.imageKey]}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-sm">
                  {String(idx + 1).padStart(2, "0")} / CERT
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {cert.text}
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-3 top-[42%] font-display text-7xl font-black text-ink/[0.04]"
                aria-hidden
              >
                ✦
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
