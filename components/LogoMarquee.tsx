"use client";

import { motion } from "framer-motion";

const logos = [
  "MSME India",
  "Udyam",
  "GST Network",
  "Mudra",
  "PMEGP",
  "Stand-Up India",
  "Startup India",
  "FSSAI",
  "ISO",
  "BIS",
];

export default function LogoMarquee() {
  const strip = [...logos, ...logos];

  return (
    <section aria-label="Recognised schemes and frameworks" className="overflow-hidden border-y border-border bg-ink py-6">
      <motion.div
        className="flex w-max gap-10 px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {strip.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap text-sm font-bold tracking-[0.2em] text-paper/55 uppercase"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
