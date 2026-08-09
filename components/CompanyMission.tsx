"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { about } from "@/lib/content";
import { photos } from "@/lib/photos";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function CompanyMission() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 40, reduce ? 0 : -40]);

  return (
    <section
      ref={ref}
      id="mission-vision"
      aria-labelledby="mission-vision-heading"
      className="relative overflow-hidden"
    >
      <div className="relative bg-gradient-to-br from-paper via-[#FFF8EE] to-[#EEF3FA] px-5 py-20 sm:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute -right-20 top-10 h-[380px] w-[380px] rounded-full bg-marigold/15 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo/10 blur-[90px]"
          aria-hidden
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
            >
              02 / Mission &amp; Vision
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[10px] font-mono font-bold tracking-[0.22em] text-marigold-dark"
            >
              OUR MISSION
            </motion.p>
            <motion.h2
              id="mission-vision-heading"
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.85rem]"
            >
              {about.mission}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 font-handwriting text-2xl text-indigo"
            >
              Capital · Compliance · Licences
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            style={{ y: imgY }}
            className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[28px] shadow-raised lg:mx-0 lg:max-w-none"
          >
            <Image
              src={photos.aboutMissionPurpose}
              alt="Founder with quiet resolve"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
            <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 overflow-hidden rounded-full border-[5px] border-paper shadow-raised sm:block">
              <Image
                src={photos.aboutMissionAction}
                alt="Guidance in action"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative bg-gradient-to-br from-[#FFF4E0] via-paper to-[#E8F5EE] px-5 py-20 sm:px-8 lg:py-28">
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-success/10 blur-[80px]"
          aria-hidden
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div
            variants={fadeUp}
            className="relative order-2 mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[28px] shadow-raised lg:order-1 lg:mx-0 lg:max-w-none"
          >
            <Image
              src={photos.aboutMissionHorizon}
              alt="Planning the next chapter of growth"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
            <div className="absolute -left-6 -top-6 h-28 w-28 overflow-hidden rounded-full border-[5px] border-paper shadow-raised">
              <Image
                src={photos.aboutMissionServe}
                alt="Local commerce we serve"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-mono font-bold tracking-[0.22em] text-success"
            >
              OUR VISION
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.85rem]"
            >
              {about.vision}
            </motion.h3>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-slate sm:text-lg"
            >
              Opening a shop or startup should never fail because of paperwork
              confusion.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
