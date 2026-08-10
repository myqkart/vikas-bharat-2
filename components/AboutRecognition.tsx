"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { about } from "@/lib/content";
import { photos } from "@/lib/photos";
import {
  dramaticFadeUp,
  flipIn,
  popIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

const certImages = {
  aboutCertIso: photos.aboutCertIso,
  aboutCertBis: photos.aboutCertBis,
  aboutCertFssai: photos.aboutCertFssai,
  aboutCertTax: photos.aboutCertTax,
  aboutCertZed: photos.aboutCertZed,
  aboutCertOther: photos.aboutCertOther,
} as const;

export default function AboutRecognition() {
  const reduce = useReducedMotion();

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative overflow-hidden bg-paper-deep px-5 py-20 sm:px-8 lg:py-28"
    >
      {!reduce ? <FloatingOrbs className="opacity-55" /> : null}
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
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerDramatic}
          className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <motion.p
              variants={dramaticFadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
            >
              07 / Certifications &amp; Recognition
            </motion.p>
            <TextReveal
              as="h2"
              id="certifications-heading"
              text="Credentials that travel with every file"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
            />
          </div>
          <motion.p
            variants={dramaticFadeUp}
            className="max-w-md text-base leading-relaxed text-slate lg:justify-self-end"
          >
            ISO, BIS/CRS, FSSAI, tax exemption pathways, ZED, and more — the
            stamps founders ask for.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerDramatic}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1400 }}
        >
          {about.certifications.map((cert, idx) => (
            <motion.li
              key={cert.title}
              variants={flipIn}
              style={{ transformStyle: "preserve-3d" }}
              className={`${
                idx === 0 || idx === 5 ? "sm:col-span-2 lg:col-span-1" : ""
              } ${idx === 1 ? "lg:-translate-y-6" : ""} ${
                idx === 4 ? "lg:translate-y-4" : ""
              }`}
            >
              <TiltCard
                intensity={reduce ? 0 : 14}
                className="group relative h-full overflow-hidden rounded-[24px] bg-white shadow-card"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={certImages[cert.imageKey]}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
                  <motion.span
                    variants={popIn}
                    className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-sm"
                  >
                    {String(idx + 1).padStart(2, "0")} / CERT
                  </motion.span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {cert.text}
                  </p>
                </div>
                <motion.span
                  aria-hidden
                  animate={
                    reduce
                      ? undefined
                      : {
                          rotate: [0, 12, -8, 0],
                          scale: [1, 1.08, 0.96, 1],
                          transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.3,
                          },
                        }
                  }
                  className="pointer-events-none absolute right-3 top-[42%] font-display text-7xl font-black text-ink/[0.04]"
                >
                  ✦
                </motion.span>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
