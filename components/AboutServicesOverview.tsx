"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { about } from "@/lib/content";
import { photos } from "@/lib/photos";
import {
  dramaticFadeLeft,
  dramaticFadeUp,
  fadeUp,
  flipIn,
  popIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";

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
  const [entered, setEntered] = useState(false);

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
      style={{
        height: isDesktop
          ? `${about.servicesOverview.length * 70}vh`
          : "auto",
      }}
    >
      {isDesktop ? (
        <div className="sticky top-0 flex h-screen overflow-hidden">
          {!reduce ? <FloatingOrbs className="opacity-50" /> : null}
          <div
            className="pointer-events-none absolute -left-24 top-20 h-[420px] w-[420px] rounded-full bg-marigold/15 blur-[110px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-10 h-[360px] w-[360px] rounded-full bg-indigo/10 blur-[100px]"
            aria-hidden
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            onViewportEnter={() => setEntered(true)}
            variants={staggerDramatic}
            className="relative z-10 mx-auto grid h-full w-full max-w-[1200px] grid-cols-[0.95fr_1.05fr] items-center gap-10 px-8"
          >
            <div>
              <motion.p
                variants={dramaticFadeLeft}
                className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
              >
                05 / Services Overview
              </motion.p>
              <TextReveal
                as="h2"
                text="Seven desks. One outcome path."
                className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink lg:text-5xl"
              />
              <motion.p
                variants={dramaticFadeUp}
                className="mt-4 max-w-md text-base leading-relaxed text-slate"
              >
                Scroll to move through each service we deliver for startups and
                MSMEs.
              </motion.p>

              <ol className="mt-10 space-y-2">
                {about.servicesOverview.map((item, idx) => (
                  <motion.li
                    key={item.title}
                    variants={flipIn}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.button
                      type="button"
                      onClick={() => {
                        const el = containerRef.current;
                        if (!el) return;
                        const top =
                          el.offsetTop +
                          (idx / about.servicesOverview.length) *
                            el.offsetHeight;
                        window.scrollTo({ top, behavior: "smooth" });
                      }}
                      whileHover={reduce ? undefined : { x: 6 }}
                      className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-3 py-2.5 text-left transition-colors ${
                        active === idx
                          ? "bg-white text-ink shadow-card"
                          : "text-slate hover:bg-white/60 hover:text-ink"
                      }`}
                    >
                      {active === idx ? (
                        <motion.span
                          layoutId="service-active-glow"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-marigold/10 via-transparent to-indigo/5"
                          transition={{ type: "spring", stiffness: 280, damping: 28 }}
                        />
                      ) : null}
                      <span className="relative font-mono text-[10px] font-bold tracking-[0.16em] text-marigold-dark">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="relative font-display text-lg font-semibold tracking-tight">
                        {item.title}
                      </span>
                      <AnimatePresence>
                        {active === idx ? (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.6, x: -6 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            className="relative ml-auto text-marigold-dark"
                          >
                            <ArrowUpRight size={16} aria-hidden />
                          </motion.span>
                        ) : null}
                      </AnimatePresence>
                    </motion.button>
                  </motion.li>
                ))}
              </ol>

              <motion.div variants={popIn}>
                <Link
                  href="/service"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-indigo transition-colors hover:text-ink"
                >
                  Full service page
                  <ArrowUpRight size={16} aria-hidden />
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={popIn}
              className="relative"
              animate={
                entered && !reduce
                  ? {
                      y: [0, -8, 0],
                      transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
                  : undefined
              }
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-raised">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={
                      reduce
                        ? false
                        : {
                            opacity: 0,
                            scale: 1.12,
                            rotateY: -12,
                            filter: "blur(10px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      filter: "blur(0px)",
                    }}
                    exit={
                      reduce
                        ? undefined
                        : {
                            opacity: 0,
                            scale: 0.94,
                            rotateY: 10,
                            filter: "blur(8px)",
                          }
                    }
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                    style={{ transformStyle: "preserve-3d" }}
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
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`copy-${current.title}`}
                    initial={
                      reduce
                        ? false
                        : { opacity: 0, y: 28, filter: "blur(8px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={
                      reduce
                        ? undefined
                        : { opacity: 0, y: -16, filter: "blur(6px)" }
                    }
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-x-0 bottom-0 p-7 text-paper"
                  >
                    <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-marigold">
                      SERVICE / {String(active + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                      {current.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/85">
                      {current.text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <div className="relative px-5 py-20 sm:px-8">
          {!reduce ? <FloatingOrbs className="opacity-40" /> : null}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerDramatic}
            className="relative z-10 mx-auto max-w-[720px]"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
            >
              05 / Services Overview
            </motion.p>
            <TextReveal
              as="h2"
              text="Seven desks. One outcome path."
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink"
            />
            <ul className="mt-10 space-y-6">
              {about.servicesOverview.map((item, idx) => (
                <motion.li
                  key={item.title}
                  variants={flipIn}
                  whileHover={reduce ? undefined : { scale: 1.02, y: -4 }}
                  style={{ transformStyle: "preserve-3d" }}
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
