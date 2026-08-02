"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Cog,
  Handshake,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  TrendingUp,
  X,
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

/** Wider arc so labels clear each other on narrow phones */
const RADIAL_ANGLES = [-78, -39, 0, 39, 78] as const;
const RADIAL_RADIUS = 152;

function MagLink({
  href,
  active,
  compact,
  label,
  icon: Icon,
}: {
  href: string;
  active: boolean;
  compact: boolean;
  label: string;
  icon: LucideIcon;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 20, mass: 0.32 });
  const y = useSpring(my, { stiffness: 300, damping: 20, mass: 0.32 });

  const onMove = (e: ReactPointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) * 0.3);
    my.set((e.clientY - r.top - r.height / 2) * 0.3);
  };

  return (
    <motion.div style={{ x, y }} className="relative">
      <Link
        ref={ref}
        href={href}
        onPointerMove={onMove}
        onPointerLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        className={`relative z-10 flex items-center justify-center gap-2 rounded-full outline-offset-2 transition-colors ${
          compact ? "h-10 min-w-10 px-3" : "h-11 px-3.5"
        } ${active ? "text-ink" : "text-slate hover:text-ink"}`}
        aria-current={active ? "page" : undefined}
        aria-label={label}
        title={label}
      >
        {active ? (
          <motion.span
            layoutId="nav-ink"
            className="absolute inset-0 rounded-full bg-white shadow-[0_2px_14px_rgba(18,41,77,0.14)] ring-1 ring-border/50"
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          />
        ) : null}
        <Icon
          size={compact ? 16 : 15}
          strokeWidth={2.35}
          className={`relative z-10 shrink-0 ${active ? "text-marigold" : "text-current"}`}
          aria-hidden
        />
        <span
          className={`relative z-10 font-bold tracking-[0.08em] uppercase whitespace-nowrap ${
            compact ? "text-[11px]" : "text-[12px]"
          }`}
        >
          {label}
        </span>
      </Link>
    </motion.div>
  );
}

function LogoSeal({ size }: { size: number }) {
  return (
    <Link
      href="/"
      className="relative z-10 shrink-0 rounded-[13px] outline-offset-2"
      aria-label={site.companyName}
    >
      <motion.span
        layout
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="relative block overflow-hidden rounded-[13px] bg-white shadow-[0_6px_18px_-8px_rgba(18,41,77,0.4)] ring-1 ring-border/50"
        style={{ width: size, height: size }}
      >
        <Image
          src={site.logo}
          alt={site.companyName}
          fill
          sizes={`${size}px`}
          priority
          className="object-contain p-[2px]"
        />
      </motion.span>
    </Link>
  );
}

function WhatsAppOrb({ compact }: { compact: boolean }) {
  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      layout
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      className="nav-cta btn-shine group relative z-10 inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full text-white outline-offset-2"
      style={{
        height: compact ? 40 : 44,
        paddingLeft: compact ? 14 : 16,
        paddingRight: compact ? 16 : 18,
      }}
      aria-label={hero.primaryCta}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(125deg,#1d8348_0%,#239a56_48%,#f5a623_170%)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.45), transparent 55%)",
        }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-full bg-success/40 blur-md"
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.92, 1.05, 0.92] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <MessageCircle
        size={compact ? 16 : 17}
        strokeWidth={2.4}
        className="relative"
        aria-hidden
      />
      <span className="relative text-[12px] font-bold tracking-wide whitespace-nowrap">
        WhatsApp
      </span>
    </motion.a>
  );
}

function BeaconAura({ dense = false }: { dense?: boolean }) {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-white/60"
        style={{
          boxShadow: dense
            ? "0 1px 0 rgba(255,255,255,0.75) inset, 0 14px 40px -14px rgba(18,41,77,0.3)"
            : "0 1px 0 rgba(255,255,255,0.65) inset, 0 8px 28px -12px rgba(18,41,77,0.18)",
        }}
      />
      <span
        aria-hidden
        className="beacon-rim pointer-events-none absolute -inset-px rounded-[inherit] opacity-80"
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -left-6 top-1/2 h-10 w-16 -translate-y-1/2 rounded-full bg-marigold/35 blur-2xl"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-5 top-1/2 h-9 w-14 -translate-y-1/2 rounded-full bg-success/28 blur-2xl"
        animate={{ opacity: [0.22, 0.48, 0.22] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </>
  );
}

export default function Header() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string>(navigation[0].href);
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const openRef = useRef(open);
  openRef.current = open;

  const progress = useSpring(0, { stiffness: 140, damping: 28 });
  const shellBlur = useTransform(progress, [0, 1], [12, 28]);
  const shellSat = useTransform(progress, [0, 1], [1.2, 1.45]);
  const shellFilter = useMotionTemplate`blur(${shellBlur}px) saturate(${shellSat})`;
  const shellRadius = useTransform(progress, [0, 1], [18, 24]);
  const shellPadY = useTransform(progress, [0, 1], [6, 5]);
  const shellPadX = useTransform(progress, [0, 1], [8, 6]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCompact(latest > 48);
    progress.set(Math.min(1, latest / 140));

    const prev = lastY.current;
    const delta = latest - prev;
    lastY.current = latest;

    if (openRef.current || latest < 64) {
      setHidden(false);
      return;
    }
    if (delta > 6) setHidden(true);
    else if (delta < -6) setHidden(false);
  });

  useEffect(() => {
    const y = window.scrollY;
    lastY.current = y;
    setCompact(y > 48);
    progress.set(Math.min(1, y / 140));
  }, [progress]);

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

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

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* Desktop / tablet — split beacon → fused island */}
      <motion.header
        initial={reduce ? false : { y: -10, opacity: 0 }}
        animate={{
          y: hidden ? "-130%" : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden md:block"
        style={{ pointerEvents: hidden ? "none" : undefined }}
      >
        <div
          className={`pointer-events-auto mx-auto flex max-w-[1200px] px-5 pt-[max(0.65rem,env(safe-area-inset-top))] sm:px-8 ${
            compact ? "justify-center" : "justify-between"
          }`}
        >
          <LayoutGroup id="desk-beacon">
            <AnimatePresence mode="popLayout" initial={false}>
              {compact ? (
                <motion.div
                  key="island"
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  className="beacon-shell relative flex items-center gap-1.5 overflow-hidden"
                  style={{
                    borderRadius: shellRadius,
                    paddingTop: shellPadY,
                    paddingBottom: shellPadY,
                    paddingLeft: shellPadX,
                    paddingRight: shellPadX,
                    backdropFilter: shellFilter,
                    WebkitBackdropFilter: shellFilter,
                  }}
                >
                  <BeaconAura dense />
                  <LogoSeal size={40} />
                  <nav
                    className="relative z-10 flex items-center gap-0.5"
                    aria-label="Primary"
                  >
                    {navigation.map((item) => (
                      <MagLink
                        key={item.href}
                        href={item.href}
                        active={active === item.href}
                        compact
                        label={item.label}
                        icon={navIcons[item.icon]}
                      />
                    ))}
                  </nav>
                  <WhatsAppOrb compact />
                </motion.div>
              ) : (
                <motion.div
                  key="split"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="flex w-full items-center justify-between gap-4"
                >
                  <LogoSeal size={48} />

                  <motion.nav
                    layout
                    className="beacon-shell relative z-10 flex items-center gap-1 overflow-hidden px-2 py-1.5"
                    style={{
                      borderRadius: 18,
                      backdropFilter: shellFilter,
                      WebkitBackdropFilter: shellFilter,
                    }}
                    aria-label="Primary"
                  >
                    <BeaconAura />
                    {navigation.map((item) => (
                      <MagLink
                        key={item.href}
                        href={item.href}
                        active={active === item.href}
                        compact={false}
                        label={item.label}
                        icon={navIcons[item.icon]}
                      />
                    ))}
                  </motion.nav>

                  <div className="flex shrink-0 items-center gap-2.5">
                    <motion.a
                      href={phoneHref}
                      whileHover={{ scale: 1.06, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-white/75 text-ink shadow-[0_4px_14px_-6px_rgba(18,41,77,0.25)] backdrop-blur-md"
                      aria-label={`Call ${site.phoneNumber}`}
                    >
                      <Phone size={17} strokeWidth={2.25} aria-hidden />
                    </motion.a>
                    <WhatsAppOrb compact={false} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </motion.header>

      {/* Mobile — bottom seal constellation (not a hamburger) */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-paper via-paper/70 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto flex w-full max-w-lg items-end justify-center px-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <AnimatePresence>
            {open ? (
              <motion.button
                type="button"
                aria-label="Close navigation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-auto fixed inset-0 z-0 bg-ink/40 backdrop-blur-[8px]"
                onClick={closeMenu}
              />
            ) : null}
          </AnimatePresence>

          <div className="pointer-events-auto relative z-10 flex w-full items-end justify-center gap-4">
            {/* Radial stage — tall enough for the bloom */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: open ? 300 : 72,
                height: open ? 210 : 72,
                transition: "width 0.35s ease, height 0.35s ease",
              }}
            >
              <AnimatePresence>
                {open
                  ? navigation.map((item, i) => {
                      const angle = RADIAL_ANGLES[i] ?? 0;
                      const rad = ((angle - 90) * Math.PI) / 180;
                      const tx = Math.cos(rad) * RADIAL_RADIUS;
                      const ty = Math.sin(rad) * RADIAL_RADIUS;
                      // Push labels further out along the same ray so they don't collide
                      const labelR = 34;
                      const Icon = navIcons[item.icon];
                      const isActive = active === item.href;
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 0, y: 18, scale: 0.35 }}
                          animate={{ opacity: 1, x: tx, y: ty, scale: 1 }}
                          exit={{ opacity: 0, x: 0, y: 18, scale: 0.35 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 26,
                            delay: i * 0.04,
                          }}
                          className="absolute bottom-[28px] left-1/2 -ml-7"
                        >
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="relative flex h-14 w-14 items-center justify-center"
                          >
                            <span
                              className={`flex h-14 w-14 items-center justify-center rounded-full shadow-[0_12px_32px_-10px_rgba(18,41,77,0.5)] ring-1 ${
                                isActive
                                  ? "bg-ink text-marigold ring-ink"
                                  : "bg-white text-ink ring-border/70"
                              }`}
                            >
                              <Icon size={22} strokeWidth={2.2} aria-hidden />
                            </span>
                            <span
                              className="pointer-events-none absolute whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[10px] font-bold tracking-[0.06em] text-ink uppercase shadow-[0_6px_16px_-6px_rgba(18,41,77,0.35)] ring-1 ring-border/50"
                              style={{
                                left: "50%",
                                top: "50%",
                                transform: `translate(-50%, -50%) translate(${Math.cos(rad) * labelR}px, ${Math.sin(rad) * labelR}px)`,
                              }}
                            >
                              {item.label}
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })
                  : null}
              </AnimatePresence>

              <motion.button
                type="button"
                aria-expanded={open}
                aria-controls="mobile-radial-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                whileTap={{ scale: 0.94 }}
                className="beacon-shell absolute bottom-0 left-1/2 z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center overflow-hidden rounded-[22px]"
                style={{ backdropFilter: "blur(18px) saturate(1.35)" }}
              >
                <BeaconAura dense />
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -50, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 40, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.22 }}
                      className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper"
                    >
                      <X size={20} strokeWidth={2.4} aria-hidden />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="logo"
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.85, opacity: 0 }}
                      className="relative z-10 h-13 w-13 overflow-hidden rounded-[16px] bg-white"
                      style={{ width: 52, height: 52 }}
                    >
                      <Image
                        src={site.logo}
                        alt=""
                        fill
                        sizes="52px"
                        className="object-contain p-[2px]"
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="nav-cta btn-shine absolute right-3 bottom-1 z-20 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full text-white sm:right-5"
              aria-label={hero.primaryCta}
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(125deg,#1d8348,#239a56_55%,#1d8348)]"
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -inset-2 rounded-full bg-success/50 blur-md"
                animate={{ opacity: [0.3, 0.65, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
              <MessageCircle size={26} strokeWidth={2.3} className="relative" />
            </motion.a>
          </div>

          <span id="mobile-radial-nav" className="sr-only">
            Radial navigation
          </span>
        </div>
      </div>
    </>
  );
}
