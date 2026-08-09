"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { photos } from "@/lib/photos";
import { fadeUp, staggerContainer } from "@/lib/motion";

const processImages = [
  photos.aboutProcessConsult,
  photos.aboutProcessMap,
  photos.aboutProcessDocs,
  photos.aboutProcessFile,
  photos.aboutProcessFollow,
  photos.aboutProcessResult,
] as const;

export default function AboutProcess() {
  return (
    <section
      id="our-process"
      aria-labelledby="our-process-heading"
      className="relative overflow-hidden bg-gradient-to-b from-paper via-[#FFF9F0] to-[#EEF5F0] px-5 py-20 sm:px-8 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(18,41,77,0.14) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
          >
            06 / Our Process
          </motion.p>
          <motion.h2
            id="our-process-heading"
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            Six steps from first call to result
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            A clear path — consultation to stamped outcome.
          </motion.p>
        </motion.div>

        <div className="relative mt-16">
          <ol className="space-y-10 lg:space-y-14">
            {about.process.map((step, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <motion.li
                  key={step.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  variants={staggerContainer}
                  className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-14 ${
                    reverse ? "" : ""
                  }`}
                >
                  <motion.div
                    variants={fadeUp}
                    className={`relative ${reverse ? "lg:order-2" : ""}`}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-raised">
                      <Image
                        src={processImages[idx]}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1024px) 90vw, 520px"
                        className="object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.18em] text-ink">
                        STEP {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div
                      className={`absolute -bottom-4 ${
                        reverse ? "-left-4" : "-right-4"
                      } hidden h-20 w-20 overflow-hidden rounded-full border-4 border-paper shadow-raised lg:block`}
                    >
                      <Image
                        src={processImages[(idx + 1) % processImages.length]}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className={`lg:pl-10 ${reverse ? "lg:order-1 lg:pl-0 lg:pr-10 lg:text-right" : ""}`}
                  >
                    <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-marigold-dark">
                      PROCESS / {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-slate lg:inline-block">
                      {step.text}
                    </p>
                  </motion.div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
