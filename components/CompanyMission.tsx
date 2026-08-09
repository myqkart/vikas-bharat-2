"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { photos } from "@/lib/photos";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function CompanyMission() {
  return (
    <section
      id="company-mission"
      aria-labelledby="company-mission-heading"
      className="relative overflow-hidden"
    >
      {/* Mission — indigo block */}
      <div className="bg-indigo px-5 py-20 text-paper sm:px-8 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
          className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.18em] text-marigold"
            >
              Company Mission
            </motion.p>
            <motion.h2
              id="company-mission-heading"
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
            >
              {about.mission}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-paper/80 sm:text-lg"
            >
              We match the right scheme, loan, or licence to your business — and
              stay with you until the outcome is stamped.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[28px] border border-white/15 shadow-raised lg:mx-0 lg:max-w-none"
          >
            <Image
              src={photos.aboutMissionPurpose}
              alt="Small business owner with quiet resolve"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Vision — warm paper / marigold tint */}
      <div className="bg-gradient-to-br from-[#FFF4E0] via-paper to-[#E8F5EE] px-5 py-20 sm:px-8 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
          className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div
            variants={fadeUp}
            className="relative order-2 mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[28px] shadow-raised lg:order-1 lg:mx-0 lg:max-w-none"
          >
            <Image
              src={photos.aboutMissionHorizon}
              alt="Planning the next chapter of business growth"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.18em] text-success"
            >
              Company Vision
            </motion.p>
            <motion.h3
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
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
