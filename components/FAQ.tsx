"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <Reveal className="mb-10 text-center">
          <h2 className="font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
            {faq.heading}
          </h2>
          <p className="mt-3 text-base text-slate lg:text-lg">{faq.sub}</p>
        </Reveal>

        <Reveal>
          <ul className="divide-y divide-border overflow-hidden rounded-[14px] border border-border bg-white/70 shadow-card backdrop-blur">
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <li key={item.question} className="px-4 sm:px-5">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-indigo"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-bold text-ink sm:text-lg">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-slate"
                    >
                      <ChevronDown size={22} strokeWidth={2.25} aria-hidden />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pr-8 pb-5 text-base leading-relaxed text-charcoal">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
