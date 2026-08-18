import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { gmailComposeHref, navigation, site } from "@/lib/content";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
const phoneHref = `tel:${site.phoneNumber}`;
const year = new Date().getFullYear();

const instagramHref =
  site.social.find((s) => s.label === "Instagram")?.href || "#";
const facebookHref =
  site.social.find((s) => s.label === "Facebook")?.href || "#";

const popularDesks = [
  { href: "/services/registration", label: "Business registration" },
  { href: "/services/loan", label: "Business loans" },
  { href: "/services/grant", label: "Government grants" },
  { href: "/scheme/mudra", label: "Mudra loans" },
] as const;

const headingClass =
  "text-[11px] font-bold uppercase tracking-[0.16em] text-ink";

const linkClass =
  "inline-flex items-center text-sm font-semibold text-slate transition-colors hover:text-indigo";

function FooterLink({
  href,
  children,
  accent = "marigold",
}: {
  href: string;
  children: ReactNode;
  accent?: "marigold" | "indigo";
}) {
  const dot =
    accent === "indigo" ? "bg-indigo/45" : "bg-marigold";

  return (
    <Link href={href} className={linkClass}>
      <span className={`mr-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
      {children}
    </Link>
  );
}

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 fill-[#25D366]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 fill-none stroke-[#E1306C]"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 fill-[#1877F2]"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.492 0-1.956.93-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-paper px-4 pb-10 pt-6 sm:px-6 sm:pb-14 lg:px-8">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[24px] border border-border/80 bg-white px-6 py-8 shadow-card sm:px-8 sm:py-10 lg:rounded-[28px] lg:px-10 lg:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[14px] border border-border/80 bg-paper p-1.5">
                <Image
                  src={site.logoMark}
                  alt={site.companyName}
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <p className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                  {site.companyName}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-slate">
                  {site.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">
              Your trusted partner for startup registration, loans, schemes and
              business growth.
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex max-w-sm items-start gap-2 text-sm leading-relaxed text-slate transition-colors hover:text-indigo"
            >
              <MapPin
                size={16}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-indigo"
              />
              <span>{site.offices[0].address}</span>
            </a>
          </div>

          <nav className="lg:col-span-2" aria-label="Explore">
            <p className={headingClass}>Explore</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              {navigation.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Popular desks">
            <p className={headingClass}>Popular desks</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {popularDesks.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} accent="indigo">
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className={headingClass}>Connect</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate transition-colors hover:text-indigo"
                >
                  <MessageCircle size={16} strokeWidth={2} className="text-indigo" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate transition-colors hover:text-indigo"
                >
                  <Phone size={16} strokeWidth={2} className="text-indigo" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={gmailComposeHref(site.email)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate transition-colors hover:text-indigo"
                >
                  <Mail size={16} strokeWidth={2} className="text-indigo" />
                  {site.email}
                </a>
              </li>
            </ul>

            <p className={`${headingClass} mt-8`}>Follow us</p>
            <div className="mt-4 flex items-center gap-2.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-paper transition hover:border-[#25D366]/40 hover:bg-[#25D366]/8"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-paper transition hover:border-[#E1306C]/40 hover:bg-[#E1306C]/8"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-paper transition hover:border-[#1877F2]/40 hover:bg-[#1877F2]/8"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-6 text-xs font-semibold text-slate sm:flex-row sm:items-center">
          <p>
            © {year} {site.companyName}. All rights reserved.
          </p>
          <p>Private consultancy · Payments via official company account only</p>
        </div>
      </div>
    </footer>
  );
}
