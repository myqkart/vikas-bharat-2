"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { about, site } from "@/lib/content";
import { photos } from "@/lib/photos";
import { fadeUp, staggerContainer } from "@/lib/motion";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;

export default function AboutFaqSection() {
  const [activeCat, setActiveCat] = useState<string>(about.faqCategories[0].id);
  const [openId, setOpenId] = useState<string | null>(
    `${about.faqCategories[0].id}-0`,
  );

  const category =
    about.faqCategories.find((c) => c.id === activeCat) ?? about.faqCategories[0];

  return (
    <section
      id="about-faq"
      aria-labelledby="about-faq-heading"
      className="relative overflow-hidden bg-gradient-to-br from-paper via-[#FFF8EE] to-[#EEF3FA] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(18,41,77,0.12) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
          className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
            >
              09 / Frequently Asked Questions
            </motion.p>
            <motion.h2
              id="about-faq-heading"
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Questions before you begin
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-lg text-base leading-relaxed text-slate sm:text-lg"
            >
              Browse by topic — general, funding, registration, certification,
              digital, and process.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative mx-auto hidden aspect-[5/4] w-full max-w-md overflow-hidden rounded-[24px] shadow-raised lg:block lg:mx-0 lg:max-w-none"
          >
            <Image
              src={photos.faqConsult}
              alt="Advisor clarifying founder questions"
              fill
              sizes="420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/35 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex gap-3">
              <div className="relative h-16 flex-1 overflow-hidden rounded-xl border-2 border-paper">
                <Image
                  src={photos.faqDocuments}
                  alt="Document checklist"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <div className="relative h-16 flex-1 overflow-hidden rounded-xl border-2 border-paper">
                <Image
                  src={photos.faqShop}
                  alt="Small business ready to grow"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {about.faqCategories.map((cat) => {
            const selected = cat.id === activeCat;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCat(cat.id);
                  setOpenId(`${cat.id}-0`);
                }}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                  selected
                    ? "bg-ink text-paper"
                    : "border border-border/70 bg-white/70 text-slate hover:text-ink"
                }`}
              >
                {cat.title.replace(" Questions", "")}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-marigold-dark">
              {category.title.toUpperCase()}
            </p>
            <ul className="mt-4 divide-y divide-border/60 overflow-hidden rounded-[22px] border border-border/60 bg-white/80 shadow-card">
              {category.items.map((item, idx) => {
                const id = `${category.id}-${idx}`;
                const open = openId === id;
                return (
                  <li key={id}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenId(open ? null : id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    >
                      <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                        {item.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-slate transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-slate sm:px-6 sm:text-[15px]">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-[22px] border border-border/60 bg-white/70 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-ink">
              Still unsure?
            </p>
            <p className="mt-1 text-sm text-slate">
              Free first call — eligibility and next steps in two minutes.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-[14px] bg-ink px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-indigo"
          >
            <MessageCircle size={16} strokeWidth={2.3} aria-hidden />
            WhatsApp Par Baat Karo
          </a>
        </div>
      </div>
    </section>
  );
}
