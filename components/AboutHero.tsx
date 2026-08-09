"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { about, site } from "@/lib/content";
import { photos } from "@/lib/photos";
import { fadeUp, staggerContainer } from "@/lib/motion";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-paper via-[#FFF9F0] to-[#EEF3FA] px-5 pt-28 pb-20 sm:px-8 lg:pt-36 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute -right-20 top-10 h-[380px] w-[380px] rounded-full bg-marigold/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-[320px] w-[320px] rounded-full bg-indigo/10 blur-[90px]"
        aria-hidden
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate"
          >
            <span className="h-2 w-2 rounded-full bg-marigold" aria-hidden />
            Company Introduction
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            {site.companyName}
          </motion.p>

          <motion.h1
            id="about-hero-heading"
            variants={fadeUp}
            className="mt-3 max-w-xl font-display text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.15rem]"
          >
            {about.heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 font-handwriting text-2xl font-bold text-indigo sm:text-3xl"
          >
            &ldquo;{site.tagline}&rdquo;
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-slate sm:text-lg"
          >
            A walk-in help desk for first-time founders — capital, licences, and
            compliance explained in Hindi &amp; English, not jargon.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#company-mission"
              className="btn-shine inline-flex min-h-12 items-center justify-center rounded-[14px] bg-ink px-7 py-3.5 text-base font-bold text-paper shadow-raised transition-colors hover:bg-indigo"
            >
              Our mission
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border-2 border-ink/85 bg-white/80 px-7 py-3.5 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <MessageCircle size={18} strokeWidth={2.25} aria-hidden />
              Talk on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[460px] lg:mx-0 lg:h-[520px] lg:max-w-none"
        >
          <div className="absolute right-0 top-0 h-[78%] w-[68%] overflow-hidden rounded-[28px] bg-paper-deep shadow-raised">
            <Image
              src={photos.aboutHeroPortrait}
              alt="Consultant guiding a small business founder"
              fill
              priority
              sizes="(max-width: 1024px) 70vw, 380px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-0 h-[46%] w-[52%] overflow-hidden rounded-[22px] border-[6px] border-paper bg-paper-deep shadow-raised">
            <Image
              src={photos.aboutHeroMarket}
              alt="Local retail entrepreneur at their shop"
              fill
              sizes="(max-width: 1024px) 50vw, 260px"
              className="object-cover"
            />
          </div>
          <p className="absolute -bottom-1 right-2 rotate-[-3deg] font-handwriting text-xl font-bold text-indigo sm:text-2xl">
            Real desks. Real people.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
