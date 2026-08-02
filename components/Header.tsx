"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  ArrowUpRight,
  Cog,
  Handshake,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { hero, navigation, site } from "@/lib/content";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
const phoneHref = `tel:${site.phoneNumber}`;

const navIcons: Record<(typeof navigation)[number]["icon"], LucideIcon> = {
  rocket: Rocket,
  cog: Cog,
  handshake: Handshake,
  trending: TrendingUp,
  shield: ShieldCheck,
};

const sectionIds = navigation.map((item) => item.section);

const socialMarks: Record<string, string> = {
  WhatsApp: "Wa",
  Instagram: "Ig",
  YouTube: "Yt",
  LinkedIn: "In",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(navigation[0].href);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (!top?.target.id) return;
        const match = navigation.find((n) => n.section === top.target.id);
        if (match) setActive(match.href);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.2, 0.45, 0.7] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper via-paper/85 to-transparent"
        />
        <div className="pointer-events-auto relative mx-auto max-w-[1180px] px-3 pt-3 sm:px-5 sm:pt-4 lg:px-6">
          <motion.div
            layout
            animate={{
              paddingTop: scrolled ? 8 : 10,
              paddingBottom: scrolled ? 8 : 10,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`nav-glass relative flex items-center gap-2 rounded-full px-2.5 sm:gap-3 sm:px-3 ${
              scrolled ? "nav-glass--solid shadow-raised" : "shadow-card"
            }`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-full opacity-80"
              style={{
                background:
                  "linear-gradient(120deg, rgba(245,166,35,0.55), rgba(255,255,255,0.15) 35%, rgba(30,62,114,0.35) 70%, rgba(29,131,72,0.4))",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: 1,
              }}
            />
            <motion.span
              aria-hidden
              animate={{ opacity: scrolled ? 0.35 : 0.55 }}
              className="pointer-events-none absolute -left-8 top-1/2 h-16 w-28 -translate-y-1/2 rounded-full bg-marigold/40 blur-2xl"
            />
            <motion.span
              aria-hidden
              animate={{ opacity: scrolled ? 0.2 : 0.4 }}
              className="pointer-events-none absolute -right-6 top-1/2 h-14 w-24 -translate-y-1/2 rounded-full bg-success/30 blur-2xl"
            />

            {/* Brand — VIKASBHART lockup */}
            <Link
              href="/"
              className="group relative z-10 flex min-w-0 shrink-0 items-center gap-2.5 rounded-full py-1 pr-2 pl-1 focus-visible:outline-offset-4"
              onClick={() => setOpen(false)}
            >
              <motion.span
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative h-10 w-10 overflow-hidden rounded-full bg-white shadow-[0_8px_20px_-6px_rgba(18,41,77,0.45)] ring-1 ring-border/70 sm:h-11 sm:w-11"
              >
                <Image
                  src={site.logo}
                  alt=""
                  fill
                  sizes="44px"
                  priority
                  className="object-cover object-[50%_32%]"
                />
              </motion.span>
              <span className="min-w-0">
                <span className="block font-sans text-[15px] font-bold tracking-[0.06em] text-ink uppercase sm:text-base">
                  <span className="text-ink">VIKAS</span>
                  <span className="bg-gradient-to-r from-marigold via-[#e8a01a] to-success bg-clip-text text-transparent">
                    BHART
                  </span>
                </span>
                <span className="mt-0.5 hidden truncate text-[9px] font-bold tracking-[0.08em] text-slate sm:block">
                  {site.tagline}
                </span>
              </span>
            </Link>

            {/* Desktop nav — Startup · MSME · Support · Growth · Sustain */}
            <LayoutGroup id="primary-nav">
              <nav
                className="relative z-10 mx-auto hidden min-w-0 items-center lg:flex"
                aria-label="Primary"
              >
                <div className="flex items-center gap-0.5 rounded-full bg-ink/[0.04] p-1">
                  {navigation.map((item, i) => {
                    const isActive = active === item.href;
                    const Icon = navIcons[item.icon];
                    return (
                      <div key={item.href} className="flex items-center">
                        {i > 0 ? (
                          <span
                            aria-hidden
                            className="mx-0.5 hidden h-4 w-px bg-border/80 xl:block"
                          />
                        ) : null}
                        <Link
                          href={item.href}
                          className={`relative flex items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-bold tracking-[0.08em] uppercase transition-colors duration-300 xl:px-3.5 ${
                            isActive
                              ? "text-ink"
                              : "text-slate hover:text-ink"
                          }`}
                        >
                          {isActive ? (
                            <motion.span
                              layoutId="nav-active-pill"
                              className="absolute inset-0 rounded-full bg-white shadow-[0_2px_10px_rgba(18,41,77,0.1)] ring-1 ring-border/60"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 32,
                              }}
                            />
                          ) : null}
                          <Icon
                            size={14}
                            strokeWidth={2.4}
                            className={`relative z-10 ${
                              isActive ? "text-marigold" : "text-ink/70"
                            }`}
                            aria-hidden
                          />
                          <span className="relative z-10">{item.label}</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </nav>
            </LayoutGroup>

            {/* Desktop actions */}
            <div className="relative z-10 ml-auto hidden items-center gap-2 lg:flex">
              <motion.a
                href={phoneHref}
                whileHover={{ y: -1, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-white/70 text-ink shadow-card backdrop-blur-md transition-colors hover:border-ink/20 hover:bg-white"
                aria-label={`Call ${site.phoneNumber}`}
              >
                <Phone size={16} strokeWidth={2.25} aria-hidden />
              </motion.a>

              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.045, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="nav-cta btn-shine group relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold text-white"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(120deg,#1d8348_0%,#239a56_45%,#f5a623_160%)]"
                />
                <span
                  aria-hidden
                  className="absolute -inset-6 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(29,131,72,0.7), transparent 65%)",
                  }}
                />
                <MessageCircle
                  size={16}
                  strokeWidth={2.4}
                  className="relative"
                  aria-hidden
                />
                <span className="relative">
                  {scrolled ? "WhatsApp" : hero.primaryCta}
                </span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.94 }}
              className="relative z-10 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/75 text-ink shadow-card backdrop-blur-md lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close" : "Menu"}</span>
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <motion.span
                  animate={
                    open
                      ? { rotate: 45, y: 7, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                  }
                  className="block h-[2px] origin-center rounded-full bg-ink"
                />
                <motion.span
                  animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                  className="block h-[2px] w-[70%] self-end rounded-full bg-ink"
                />
                <motion.span
                  animate={
                    open
                      ? { rotate: -45, y: -7, width: "100%" }
                      : { rotate: 0, y: 0, width: "100%" }
                  }
                  className="block h-[2px] origin-center rounded-full bg-ink"
                />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[55] lg:hidden"
          >
            <motion.div
              aria-hidden
              className="absolute inset-0 bg-ink/40 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-3 top-[4.75rem] bottom-3 overflow-hidden rounded-[28px] border border-white/50 bg-paper/90 shadow-raised backdrop-blur-2xl sm:inset-x-5"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden"
              >
                <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-marigold/25 blur-3xl" />
                <div className="absolute bottom-10 -left-20 h-64 w-64 rounded-full bg-indigo/20 blur-3xl" />
                <div className="mesh-gradient absolute inset-0 opacity-40" />
              </div>

              <div className="relative flex h-full flex-col px-6 pt-6 pb-7 sm:px-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white ring-1 ring-border">
                      <Image
                        src={site.logo}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover object-[50%_32%]"
                      />
                    </span>
                    <div>
                      <p className="font-sans text-lg font-bold tracking-wide text-ink uppercase">
                        <span className="text-ink">VIKAS</span>
                        <span className="bg-gradient-to-r from-marigold to-success bg-clip-text text-transparent">
                          BHART
                        </span>
                      </p>
                      <p className="mt-0.5 max-w-[14rem] text-xs font-semibold text-slate">
                        {site.tagline}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 text-sm font-bold text-ink"
                    aria-label="Close menu"
                  >
                    Esc
                  </button>
                </div>

                <nav
                  className="flex flex-1 flex-col gap-1 overflow-y-auto"
                  aria-label="Mobile"
                >
                  {navigation.map((item, i) => {
                    const isActive = active === item.href;
                    const Icon = navIcons[item.icon];
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -28, filter: "blur(6px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{
                          delay: 0.05 + i * 0.05,
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-colors ${
                            isActive
                              ? "bg-ink text-paper"
                              : "text-ink hover:bg-white/70"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
                                isActive
                                  ? "bg-marigold text-ink"
                                  : "bg-white text-ink shadow-card"
                              }`}
                            >
                              <Icon size={18} strokeWidth={2.25} aria-hidden />
                            </span>
                            <span className="font-sans text-xl font-bold tracking-[0.08em] uppercase sm:text-2xl">
                              {item.label}
                            </span>
                          </span>
                          <ArrowUpRight
                            size={20}
                            className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                              isActive ? "text-marigold" : "text-slate"
                            }`}
                            aria-hidden
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.45 }}
                  className="mt-6 space-y-4 border-t border-border/70 pt-5"
                >
                  <p className="text-center text-[10px] font-bold tracking-[0.18em] text-slate uppercase">
                    Together · Growing · Building · Bharat
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={phoneHref}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-white/80 px-4 text-sm font-bold text-ink shadow-card"
                    >
                      <Phone size={16} aria-hidden />
                      Call
                    </a>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-white/80 px-4 text-sm font-bold text-ink shadow-card"
                    >
                      Email
                    </a>
                  </div>

                  <motion.a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setOpen(false)}
                    className="nav-cta btn-shine relative flex min-h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 text-base font-bold text-white shadow-raised"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(120deg,#1d8348,#239a56_50%,#1d8348)]"
                    />
                    <MessageCircle size={20} className="relative" aria-hidden />
                    <span className="relative">{hero.primaryCta}</span>
                  </motion.a>

                  <div className="flex items-center justify-between gap-3 pt-1">
                    <p className="text-xs font-semibold tracking-wide text-slate uppercase">
                      Follow
                    </p>
                    <div className="flex gap-2">
                      {site.social.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          aria-label={item.label}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/70 text-[11px] font-bold tracking-tight text-ink"
                        >
                          {socialMarks[item.label] ?? item.label.slice(0, 2)}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
