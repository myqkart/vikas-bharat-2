"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { schemePage, site } from "@/lib/content";
import { photos } from "@/lib/photos";
import {
  dramaticFadeUp,
  flipIn,
  imageReveal,
  popIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";
import CountUp from "@/components/motion/CountUp";

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I want to check eligibility for government schemes.",
)}`;

export default function SchemePageHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const yCircle = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);
  const rotateBlob = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : 18],
  );

  return (
    <section
      ref={ref}
      id="schemes-hero"
      aria-labelledby="schemes-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-paper via-[#FFF8EE] to-[#EAF1FA] px-5 pt-28 pb-24 sm:px-8 lg:pt-36 lg:pb-32"
    >
      {!reduce ? <FloatingOrbs /> : null}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(18,41,77,0.12) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <motion.div
        style={{ rotate: rotateBlob }}
        className="pointer-events-none absolute -right-24 top-16 h-[460px] w-[460px] rounded-full bg-marigold/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-28 bottom-0 h-[380px] w-[380px] rounded-full bg-indigo/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerDramatic}
          className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
        >
          <div>
            <motion.p
              variants={dramaticFadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
            >
              {schemePage.eyebrow}
            </motion.p>
            <TextReveal
              as="h1"
              id="schemes-hero-heading"
              text={schemePage.heading}
              onMount
              className="mt-4 max-w-xl font-display text-[2.15rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[2.8rem] lg:text-[3.25rem]"
            />
            <motion.p
              variants={dramaticFadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-slate sm:text-lg"
            >
              {schemePage.intro}
            </motion.p>
            <motion.div variants={popIn} className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-ink px-7 py-3.5 text-base font-bold text-paper transition-colors hover:bg-indigo"
              >
                {schemePage.cta}
                <ArrowRight size={18} strokeWidth={2.4} aria-hidden />
              </motion.a>
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border-2 border-ink/80 bg-white/75 px-7 py-3.5 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <MessageCircle size={18} strokeWidth={2.25} aria-hidden />
                Talk on WhatsApp
              </motion.a>
            </motion.div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[500px] lg:mx-0 lg:h-[540px]">
            <motion.div
              variants={imageReveal}
              style={{ y: ySlow }}
              className="absolute right-0 top-0 h-[72%] w-[70%] overflow-hidden rounded-[30px] shadow-raised [transform:translateZ(0)]"
            >
              <Image
                src={photos.schemeMudra}
                alt={schemePage.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 380px"
                className="rounded-[30px] object-cover"
              />
            </motion.div>
            <motion.div
              variants={imageReveal}
              style={{ y: yFast }}
              className="absolute bottom-6 left-0 h-[48%] w-[54%] overflow-hidden rounded-[22px] border-[6px] border-paper shadow-raised [transform:translateZ(0)]"
            >
              <Image
                src={photos.schemeAgri}
                alt="Agriculture infrastructure under government scheme support"
                fill
                sizes="(max-width: 1024px) 50vw, 280px"
                className="rounded-[16px] object-cover"
              />
            </motion.div>
            <motion.div
              variants={popIn}
              style={{ y: yCircle }}
              animate={
                reduce
                  ? undefined
                  : {
                      rotate: [0, 6, -4, 0],
                      transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className="absolute right-4 bottom-28 hidden h-24 w-24 overflow-hidden rounded-full border-4 border-paper shadow-raised sm:block [transform:translateZ(0)]"
            >
              <Image
                src={photos.schemeStandup}
                alt="Entrepreneur accessing a government scheme"
                fill
                sizes="96px"
                className="rounded-full object-cover"
              />
            </motion.div>
            <motion.p
              variants={flipIn}
              className="absolute -bottom-1 right-2 rotate-[-3deg] font-handwriting text-xl font-bold text-indigo sm:text-2xl"
            >
              Sapno Se Safalta Tak
            </motion.p>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerDramatic}
          className="mt-20 grid gap-5 sm:grid-cols-3"
          style={{ perspective: 1100 }}
        >
          {schemePage.stats.map((stat) => (
            <motion.li key={stat.label} variants={flipIn}>
              <TiltCard
                intensity={reduce ? 0 : 10}
                className="relative h-full overflow-hidden rounded-[22px] border border-border/50 bg-white/90 p-5 shadow-card"
              >
                <p className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.1rem]">
                  {reduce ? stat.value : <CountUp value={stat.value} />}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate">
                  {stat.label}
                </p>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
