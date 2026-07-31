import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { footer, navigation, site } from "@/lib/content";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
const phoneHref = `tel:${site.phoneNumber}`;
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border bg-paper-deep">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <p className="font-display text-xl font-semibold text-ink">
            {footer.companyName}
          </p>
          <p className="mt-2 text-sm font-semibold text-slate">{footer.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            {footer.overview}
          </p>
          <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-[14px] shadow-card">
            <Image
              src={footer.map.src}
              alt={footer.map.alt}
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-bold text-ink">Navigate</p>
          <ul className="mt-3 flex flex-col gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-charcoal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-bold text-ink">Offices</p>
          <ul className="mt-3 flex flex-col gap-3">
            {footer.offices.map((office) => (
              <li key={office.city} className="text-sm text-charcoal">
                <span className="font-bold text-ink">{office.city}</span>
                <br />
                <span className="text-slate">{office.address}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-bold text-ink">Contact & resources</p>
          <ul className="mt-3 flex flex-col gap-3">
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-success"
              >
                <MessageCircle size={18} strokeWidth={2.25} aria-hidden />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                <Phone size={18} strokeWidth={2.25} aria-hidden />
                {site.phoneNumber}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                <Mail size={18} strokeWidth={2.25} aria-hidden />
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm font-bold text-ink">Guides</p>
          <ul className="mt-2 flex flex-col gap-2">
            {site.resources.map((r) => (
              <li key={r.label}>
                <Link href={r.href} className="text-sm text-slate hover:text-ink">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-bold text-ink">Social</p>
          <ul className="mt-2 flex flex-wrap gap-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-sm font-semibold text-indigo">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] border-t border-border px-5 py-6 lg:px-8">
        <p className="text-xs text-slate">{footer.disclaimer}</p>
        <p className="mt-2 text-xs text-slate">
          © {year} {footer.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
