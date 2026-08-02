"use client";

import { motion } from "framer-motion";
import { missionTrees } from "@/lib/content";
import TreeBranch from "@/components/TreeBranch";
import Reveal from "@/components/motion/Reveal";

export default function MissionTrees() {
  return (
    <section
      id={missionTrees.id}
      aria-labelledby="mission-trees-heading"
      className="relative overflow-hidden px-5 py-16 lg:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-px w-[min(70%,40rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,166,35,0.1),transparent_42%)]" />
      </div>

      <div className="relative mx-auto max-w-[980px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-semibold tracking-[0.18em] text-slate uppercase lg:text-sm">
            {missionTrees.eyebrow}
          </p>
          <h2
            id="mission-trees-heading"
            className="mt-3 font-display text-[28px] font-semibold leading-[1.12] text-ink lg:text-[42px]"
          >
            {missionTrees.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate lg:text-lg">
            {missionTrees.sub}
          </p>
        </Reveal>

        <div className="mt-14 space-y-12 lg:mt-20 lg:space-y-16">
          {missionTrees.trees.map((tree, i) => (
            <motion.div
              key={tree.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              {i > 0 ? (
                <div
                  aria-hidden
                  className="mb-12 h-px bg-gradient-to-r from-transparent via-border to-transparent lg:mb-16"
                />
              ) : null}
              <TreeBranch
                root={tree.root}
                leaves={tree.children}
                accent={tree.accent}
                index={i}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
