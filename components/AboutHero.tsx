"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { about, site } from "@/lib/content";
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

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;

const pillars = [
  { ...about.whoWeAre, image: photos.aboutIntroPortrait },
  { ...about.whatWeDo, image: photos.aboutIntroWork },
  { ...about.whoWeHelp, image: photos.aboutIntroCrowd },
] as const;

export default function AboutHero() {
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
      id="company-introduction"
      aria-labelledby="about-intro-heading"
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
              {about.eyebrow}
            </motion.p>
            <motion.p
              variants={dramaticFadeUp}
              className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl"
            >
              {site.companyName}
            </motion.p>
            <TextReveal
              as="h1"
              id="about-intro-heading"
              text={about.heading}
              onMount
              className="mt-3 max-w-xl font-display text-[2.15rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[2.8rem] lg:text-[3.25rem]"
            />
            <motion.p
              variants={dramaticFadeUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-slate sm:text-lg"
            >
              {about.body}
            </motion.p>
            <motion.div
              variants={popIn}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.a
                href="#mission-vision"
                whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex min-h-12 items-center justify-center rounded-[14px] bg-ink px-7 py-3.5 text-base font-bold text-paper transition-colors hover:bg-indigo"
              >
                Mission &amp; Vision
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
                src={photos.aboutHeroPortrait}
                alt="Advisor guiding a founder at the desk"
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
                src={photos.aboutHeroMarket}
                alt="Local entrepreneur at their shop"
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
                src={photos.aboutHeroCity}
                alt="City presence across India"
                fill
                sizes="96px"
                className="rounded-full object-cover"
              />
            </motion.div>
            <motion.p
              variants={flipIn}
              className="absolute -bottom-1 right-2 rotate-[-3deg] font-handwriting text-xl font-bold text-indigo sm:text-2xl"
            >
              Real desks. Real people.
            </motion.p>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerDramatic}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {pillars.map((pillar, idx) => (
            <motion.li
              key={pillar.title}
              variants={flipIn}
              style={{ transformStyle: "preserve-3d" }}
              className={idx === 1 ? "md:-translate-y-4" : ""}
            >
              <TiltCard
                intensity={reduce ? 0 : 14}
                className="relative overflow-hidden rounded-[24px]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-paper">
                    <h2 className="font-display text-2xl font-semibold tracking-tight">
                      {pillar.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-paper/85">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
