"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { about } from "@/lib/content";
import { photos } from "@/lib/photos";
import { fadeUp, staggerContainer } from "@/lib/motion";

const imageMap = {
  aboutServiceGrants: photos.aboutServiceGrants,
  aboutServiceRegistration: photos.aboutServiceRegistration,
  aboutServiceCerts: photos.aboutServiceCerts,
  aboutServiceLoans: photos.aboutServiceLoans,
  aboutServiceMarketing: photos.aboutServiceMarketing,
  aboutServiceLegal: photos.aboutServiceLegal,
  aboutServiceNbf: photos.aboutServiceNbf,
} as const;

export default function AboutServicesOverview() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const count = about.servicesOverview.length;
    const idx = Math.min(count - 1, Math.floor(latest * count));
    setActive(idx);
  });

  const current = about.servicesOverview[active];

  return (
    <div
      ref={containerRef}
      id="services-overview"
      className="relative bg-gradient-to-br from-paper via-[#FFF9F0] to-[#EAF3FA]"
      style={{ height: isDesktop ? `${about.servicesOverview.length * 70}vh` : "auto" }}
    >
      {isDesktop ? (
        <div className="sticky top-0 flex h-screen overflow-hidden">
          <div
            className="pointer-events-none absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-marigold/15 blur-[110px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-10 h-[360px] w-[360px] rounded-full bg-indigo/10 blur-[100px]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto grid h-full w-full max-w-[1200px] grid-cols-[0.95fr_1.05fr] items-center gap-10 px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate">
                05 / Services Overview
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink lg:text-5xl">
                Seven desks.
                <br />
                One outcome path.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
                Scroll to move through each service we deliver for startups and
                MSMEs.
              </p>

              <ol className="mt-10 space-y-2">
                {about.servicesOverview.map((item, idx) => (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => {
                        const el = containerRef.current;
                        if (!el) return;
                        const top =
                          el.offsetTop +
                          (idx / about.servicesOverview.length) * el.offsetHeight;
                        window.scrollTo({ top, behavior: "smooth" });
                      }}
                      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                        active === idx
                          ? "bg-white text-ink shadow-card"
                          : "text-slate hover:bg-white/60 hover:text-ink"
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-marigold-dark">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg font-semibold tracking-tight">
                        {item.title}
                      </span>
                      {active === idx ? (
                        <ArrowUpRight
                          size={16}
                          className="ml-auto text-marigold-dark"
                          aria-hidden
                        />
                      ) : null}
                    </button>
                  </li>
                ))}
              </ol>

              <Link
                href="/service"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-indigo transition-colors hover:text-ink"
              >
                Full service page
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-raised">
                <motion.div
                  key={current.title}
                  initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={imageMap[current.imageKey]}
                    alt={current.title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority={active === 0}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-paper">
                  <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-marigold">
                    SERVICE / {String(active + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                    {current.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/85">
                    {current.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-5 py-20 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mx-auto max-w-[720px]"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
            >
              05 / Services Overview
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink"
            >
              Seven desks. One outcome path.
            </motion.h2>
            <ul className="mt-10 space-y-6">
              {about.servicesOverview.map((item, idx) => (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  className="overflow-hidden rounded-[22px] bg-white shadow-card"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={imageMap[item.imageKey]}
                      alt={item.title}
                      fill
                      sizes="90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-paper">
                      <p className="font-mono text-[10px] font-bold tracking-[0.18em] text-marigold">
                        {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-paper/85">{item.text}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
}
