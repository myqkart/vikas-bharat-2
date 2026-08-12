"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  GitMerge,
  HandCoins,
  Landmark,
  Megaphone,
  Scale,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { servicesMegaMenu } from "@/lib/content";

const iconMap: Record<
  | (typeof servicesMegaMenu.funding.items)[number]["icon"]
  | (typeof servicesMegaMenu.services.items)[number]["icon"],
  LucideIcon
> = {
  grant: Landmark,
  loan: Wallet,
  nbfc: HandCoins,
  registration: Building2,
  certificate: BadgeCheck,
  growth: TrendingUp,
  ma: GitMerge,
  marketing: Megaphone,
  legal: Scale,
};

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: keyof typeof iconMap;
};

function MenuItemLink({
  item,
  onNavigate,
  accent = "marigold",
}: {
  item: MenuItem;
  onNavigate?: () => void;
  accent?: "marigold" | "success" | "indigo";
}) {
  const Icon = iconMap[item.icon];
  const accentClass =
    accent === "success"
      ? "group-hover:bg-success/12 group-hover:text-success"
      : accent === "indigo"
        ? "group-hover:bg-indigo/12 group-hover:text-indigo"
        : "group-hover:bg-marigold/15 group-hover:text-marigold-dark";

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="group flex items-start gap-3 rounded-xl px-2.5 py-2.5 outline-offset-2 transition-colors hover:bg-white/80"
    >
      <span
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-paper-deep/80 text-ink ring-1 ring-border/40 transition-colors ${accentClass}`}
      >
        <Icon size={16} strokeWidth={2.2} aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-bold tracking-tight text-ink transition-colors group-hover:text-ink">
          {item.title}
        </span>
        <span className="mt-0.5 block text-[12px] leading-snug text-slate">
          {item.description}
        </span>
      </span>
    </Link>
  );
}

export default function ServicesMegaMenu({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  return (
    <div
      role="menu"
      aria-label="Services"
      className="relative overflow-hidden rounded-[22px] border border-border/60 bg-[linear-gradient(165deg,rgba(255,255,255,0.96)_0%,rgba(251,246,236,0.94)_55%,rgba(255,255,255,0.92)_100%)] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_24px_60px_-18px_rgba(18,41,77,0.28)] backdrop-blur-xl"
    >
      {/* Our Services — top */}
      <div className="relative p-4 sm:p-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_0%,rgba(245,166,35,0.1),transparent_45%)]"
        />
        <div className="relative">
          <p className="mb-3 px-2.5 text-[10px] font-bold tracking-[0.16em] text-indigo uppercase">
            {servicesMegaMenu.services.title}
          </p>
          <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesMegaMenu.services.items.map((item) => (
              <MenuItemLink
                key={item.title}
                item={item}
                onNavigate={onNavigate}
                accent="marigold"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Business Funding — below */}
      <div className="relative border-t border-border/50">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(29,131,72,0.08),transparent_55%),radial-gradient(ellipse_at_80%_100%,rgba(30,62,114,0.06),transparent_50%)]"
        />
        <div className="relative p-4 sm:p-5">
          <p className="mb-3 px-2.5 text-[10px] font-bold tracking-[0.16em] text-success uppercase">
            {servicesMegaMenu.funding.title}
          </p>
          <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-3">
            {servicesMegaMenu.funding.items.map((item) => (
              <MenuItemLink
                key={item.title}
                item={item}
                onNavigate={onNavigate}
                accent="success"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border/50 bg-ink/[0.03] px-4 py-3 sm:px-5">
        <p className="hidden text-[12px] text-slate sm:block">
          Registration, funding, licences & growth — one desk.
        </p>
        <Link
          href={servicesMegaMenu.cta.href}
          onClick={onNavigate}
          className="group ml-auto inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[12px] font-bold tracking-wide text-paper transition-colors hover:bg-indigo"
        >
          {servicesMegaMenu.cta.label}
          <ArrowRight
            size={14}
            strokeWidth={2.4}
            className="transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
}
