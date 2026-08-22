"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Briefcase,
  ChevronDown,
  Landmark,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { hero, navigation, site } from "@/lib/content";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
const phoneHref = `tel:${site.phoneNumber}`;
const SERVICES_HREF = "/service";

const navIcons: Record<(typeof navigation)[number]["icon"], LucideIcon> = {
  users: Users,
  briefcase: Briefcase,
  landmark: Landmark,
  book: BookOpen,
  sparkles: Sparkles,
  mail: Mail,
};

function NavLink({
  href,
  active,
  compact,
  label,
  icon: Icon,
  hasMenu,
  menuOpen,
  onMenuEnter,
  onMenuLeave,
}: {
  href: string;
  active: boolean;
  compact: boolean;
  label: string;
  icon: LucideIcon;
  hasMenu?: boolean;
  menuOpen?: boolean;
  onMenuEnter?: () => void;
  onMenuLeave?: () => void;
}) {
  const highlighted = active || Boolean(menuOpen);

  return (
    <div
      className="relative"
      onMouseEnter={hasMenu ? onMenuEnter : undefined}
      onMouseLeave={hasMenu ? onMenuLeave : undefined}
    >
      <Link
        href={href}
        className={`relative z-10 flex items-center justify-center gap-1.5 rounded-full outline-offset-2 transition-colors ${
          compact ? "h-10 min-w-10 px-3" : "h-11 px-3.5"
        } ${highlighted ? "text-ink" : "text-slate hover:text-ink"}`}
        aria-current={active ? "page" : undefined}
        aria-label={label}
        aria-expanded={hasMenu ? menuOpen : undefined}
        aria-haspopup={hasMenu ? "menu" : undefined}
        onFocus={hasMenu ? onMenuEnter : undefined}
      >
        {highlighted ? (
          <motion.span
            layoutId="nav-ink"
            className="absolute inset-0 rounded-full bg-white shadow-[0_2px_14px_rgba(18,41,77,0.14)] ring-1 ring-border/50"
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          />
        ) : null}
        <Icon
          size={compact ? 16 : 15}
          strokeWidth={2.35}
          className={`relative z-10 shrink-0 ${highlighted ? "text-marigold" : "text-current"}`}
          aria-hidden
        />
        <span
          className={`relative z-10 font-bold tracking-[0.08em] uppercase whitespace-nowrap ${
            compact ? "text-[11px]" : "text-[12px]"
          }`}
        >
          {label}
        </span>
        {hasMenu ? (
          <ChevronDown
            size={compact ? 12 : 13}
            strokeWidth={2.6}
            aria-hidden
            className={`relative z-10 shrink-0 transition-transform duration-200 ${
              menuOpen ? "rotate-180 text-marigold" : "text-current opacity-70"
            }`}
          />
        ) : null}
      </Link>
    </div>
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
          src={site.logoMark}
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const active =
    navigation.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))
      ?.href ?? "";
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const openRef = useRef(open);
  openRef.current = open;
  const servicesOpenRef = useRef(servicesOpen);
  servicesOpenRef.current = servicesOpen;
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const progress = useSpring(0, { stiffness: 140, damping: 28 });
  const shellBlur = useTransform(progress, [0, 1], [12, 28]);
  const shellSat = useTransform(progress, [0, 1], [1.2, 1.45]);
  const shellFilter = useMotionTemplate`blur(${shellBlur}px) saturate(${shellSat})`;
  const shellRadius = useTransform(progress, [0, 1], [18, 24]);
  const shellPadY = useTransform(progress, [0, 1], [6, 5]);
  const shellPadX = useTransform(progress, [0, 1], [8, 6]);

  const openServicesMenu = useCallback(() => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
    setServicesOpen(true);
    setHidden(false);
  }, []);

  const scheduleCloseServicesMenu = useCallback(() => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    servicesCloseTimer.current = setTimeout(() => {
      setServicesOpen(false);
      servicesCloseTimer.current = null;
    }, 200);
  }, []);

  const closeServicesMenu = useCallback(() => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
    setServicesOpen(false);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCompact(latest > 48);
    progress.set(Math.min(1, latest / 140));

    const prev = lastY.current;
    const delta = latest - prev;
    lastY.current = latest;

    if (openRef.current || servicesOpenRef.current || latest < 64) {
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
    closeServicesMenu();
  }, [pathname, closeServicesMenu]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        closeServicesMenu();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeServicesMenu]);

  useEffect(() => {
    return () => {
      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    };
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  const renderNavLinks = (isCompact: boolean) =>
    navigation.map((item) => {
      const isServices = item.href === SERVICES_HREF;
      return (
        <NavLink
          key={item.href}
          href={item.href}
          active={active === item.href || (isServices && pathname.startsWith("/services/"))}
          compact={isCompact}
          label={item.label}
          icon={navIcons[item.icon]}
          hasMenu={isServices}
          menuOpen={isServices ? servicesOpen : false}
          onMenuEnter={isServices ? openServicesMenu : undefined}
          onMenuLeave={isServices ? scheduleCloseServicesMenu : undefined}
        />
      );
    });

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
          className={`pointer-events-auto relative mx-auto flex max-w-[1200px] px-5 pt-[max(0.65rem,env(safe-area-inset-top))] sm:px-8 ${
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
                    {renderNavLinks(true)}
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
                    {renderNavLinks(false)}
                  </motion.nav>

                  <div className="flex shrink-0 items-center gap-2.5">
                    <motion.a
                      href={phoneHref}
                      whileHover={{ scale: 1.06, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-white/75 text-ink shadow-[0_4px_14px_-6px_rgba(18,41,77,0.25)] backdrop-blur-md"
                      aria-label={`Call ${site.phoneDisplay}`}
                    >
                      <Phone size={17} strokeWidth={2.25} aria-hidden />
                    </motion.a>
                    <WhatsAppOrb compact={false} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>

          <AnimatePresence>
            {servicesOpen ? (
              <motion.div
                key="services-mega"
                initial={reduce ? false : { opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-[calc(100%-0.65rem)] left-1/2 z-[60] w-[min(920px,calc(100vw-2.5rem))] -translate-x-1/2 pt-5"
                onMouseEnter={openServicesMenu}
                onMouseLeave={scheduleCloseServicesMenu}
              >
                <ServicesMegaMenu onNavigate={closeServicesMenu} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile — dock + sheet */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper via-paper/80 to-transparent"
          aria-hidden
        />

        <AnimatePresence>
          {open ? (
            <motion.button
              type="button"
              aria-label="Close navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-auto fixed inset-0 z-0 bg-ink/45 backdrop-blur-[10px]"
              onClick={closeMenu}
            />
          ) : null}
        </AnimatePresence>

        <div className="relative mx-auto w-full max-w-lg px-3 pb-[max(0.7rem,env(safe-area-inset-bottom))]">
          <AnimatePresence>
            {open ? (
              <motion.nav
                id="mobile-nav-sheet"
                aria-label="Site"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto relative z-10 mb-3 overflow-hidden rounded-[28px] border border-border/70 bg-paper/95 shadow-[0_24px_60px_-24px_rgba(18,41,77,0.45)] backdrop-blur-xl"
              >
                <div className="flex justify-center pt-3">
                  <span className="h-1 w-10 rounded-full bg-ink/15" aria-hidden />
                </div>
                <div className="flex items-center justify-between px-5 pt-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-marigold-dark">
                    Explore
                  </p>
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                      pathname === "/"
                        ? "bg-ink text-paper"
                        : "bg-white text-ink ring-1 ring-border/60"
                    }`}
                  >
                    Home
                  </Link>
                </div>
                <ul className="grid grid-cols-2 gap-2 p-3 pb-4">
                  {navigation.map((item) => {
                    const Icon = navIcons[item.icon];
                    const isActive =
                      active === item.href ||
                      (item.href === SERVICES_HREF &&
                        pathname.startsWith("/services/"));
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex min-h-16 items-center gap-3 rounded-[18px] px-3.5 py-3 ${
                            isActive
                              ? "bg-ink text-paper"
                              : "bg-white text-ink ring-1 ring-border/60"
                          }`}
                        >
                          <span
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-[12px] ${
                              isActive
                                ? "bg-marigold text-ink"
                                : "bg-[#f7f3ea] text-ink"
                            }`}
                          >
                            <Icon size={18} strokeWidth={2.2} aria-hidden />
                          </span>
                          <span className="text-sm font-bold leading-tight">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </motion.nav>
            ) : null}
          </AnimatePresence>

          <div className="pointer-events-auto relative z-20">
            <div
              className="beacon-shell flex items-center justify-between gap-2 rounded-[28px] px-2 py-2"
              style={{
                backdropFilter: "blur(22px) saturate(1.4)",
                WebkitBackdropFilter: "blur(22px) saturate(1.4)",
              }}
            >
              <BeaconAura dense />
              <a
                href={phoneHref}
                className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-ink shadow-[0_6px_16px_-8px_rgba(18,41,77,0.35)] ring-1 ring-border/50"
                aria-label={`Call ${site.phoneDisplay}`}
              >
                <Phone size={18} strokeWidth={2.25} aria-hidden />
              </a>

              <motion.button
                type="button"
                aria-expanded={open}
                aria-controls="mobile-nav-sheet"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                whileTap={{ scale: 0.94 }}
                className="relative z-10 flex h-14 min-w-[4.25rem] shrink-0 flex-col items-center justify-center gap-0.5 overflow-hidden rounded-[18px] bg-white px-2 ring-1 ring-border/50"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -50, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 40, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center justify-center"
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-paper">
                        <X size={16} strokeWidth={2.4} aria-hidden />
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink">
                        Close
                      </span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="logo"
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.85, opacity: 0 }}
                      className="flex flex-col items-center justify-center"
                    >
                      <span className="relative h-7 w-7 overflow-hidden rounded-[8px]">
                        <Image
                          src={site.logoMark}
                          alt=""
                          fill
                          sizes="28px"
                          className="object-contain"
                        />
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink">
                        Menu
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta btn-shine relative z-10 grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full text-white"
                aria-label={hero.primaryCta}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(125deg,#1d8348,#239a56_55%,#1d8348)]"
                />
                <MessageCircle
                  size={20}
                  strokeWidth={2.3}
                  className="relative"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
