"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { finalCta, site } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";
import FloatingOrbs from "@/components/motion/FloatingOrbs";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
const phoneHref = `tel:${site.phoneNumber}`;

export default function FinalCTA() {
  return (
    <section id="contact" className="px-5 py-16 lg:px-8 lg:py-24">
      <Reveal className="relative mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[24px] bg-ink px-6 py-14 text-center shadow-raised sm:px-10 sm:py-16 lg:py-20">
          <FloatingOrbs className="opacity-70" />
          <div className="noise-overlay absolute inset-0" />

          <div className="relative z-10 mx-auto max-w-xl">
            <motion.h2
              className="font-display text-[28px] font-semibold leading-[1.1] text-paper lg:text-[40px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {finalCta.heading}
            </motion.h2>
            <motion.p
              className="mt-3 text-base text-paper/80 lg:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {finalCta.sub}
            </motion.p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] bg-success px-6 py-4 text-base font-bold text-white shadow-raised"
              >
                <MessageCircle size={20} strokeWidth={2.25} aria-hidden />
                {finalCta.primary}
              </motion.a>
              <motion.a
                href={phoneHref}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] bg-marigold px-6 py-4 text-base font-bold text-ink"
              >
                <Phone size={20} strokeWidth={2.25} aria-hidden />
                {finalCta.secondary}
              </motion.a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
