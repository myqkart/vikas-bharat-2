import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { navigation, site } from "@/lib/content";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
const phoneHref = `tel:${site.phoneNumber}`;
const year = new Date().getFullYear();

const instagramHref = site.social.find((s) => s.label === "Instagram")?.href || "#";
const youtubeHref = site.social.find((s) => s.label === "YouTube")?.href || "#";
const linkedinHref = site.social.find((s) => s.label === "LinkedIn")?.href || "#";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-[#25D366]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-none stroke-[#E1306C]"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-[#FF0000] stroke-[#FF0000]"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" className="fill-white stroke-white"></polygon>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-[#0077B5] stroke-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-paper px-4 pb-16 pt-4 md:px-6 md:pb-20">
      <div className="mx-auto max-w-[1200px] flex gap-5 items-start">
        {/* 01 Badge */}
        <div className="hidden md:flex items-start shrink-0">
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl border border-border text-base font-display font-semibold text-slate bg-white shadow-sm mt-1">
            01
          </div>
        </div>

        {/* Main Footer Card */}
        <div className="flex-1 rounded-[24px] md:rounded-[32px] border border-border bg-[#FDFBF7] p-8 md:p-10 shadow-[0_2px_12px_rgba(18,41,77,0.03)]">
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0">
            {/* Column 1: Logo & Info */}
            <div className="lg:w-[32%] lg:pr-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white border border-border/80 shadow-[0_2px_8px_rgba(18,41,77,0.04)] p-2 flex-shrink-0">
                    <Image
                      src={site.logo}
                      alt={site.companyName}
                      fill
                      sizes="64px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-[22px] font-bold text-ink tracking-wider uppercase leading-none">
                      {site.companyName}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate tracking-wide mt-1.5">
                      {site.tagline}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[13px] leading-relaxed text-slate font-semibold">
                  Your trusted partner for startup registration, loans, schemes & business growth.
                </p>
              </div>
            </div>

            {/* Divider 1 */}
            <div className="hidden lg:block w-[1px] bg-border/60 self-stretch" />
            <div className="block lg:hidden h-[1px] w-full bg-border/60" />

            {/* Column 2: Links */}
            <div className="lg:w-[28%] lg:px-8 flex items-center lg:justify-center">
              <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold text-slate hover:text-ink transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider 2 */}
            <div className="hidden lg:block w-[1px] bg-border/60 self-stretch" />
            <div className="block lg:hidden h-[1px] w-full bg-border/60" />

            {/* Column 3: Connect with us */}
            <div className="lg:w-[22%] lg:px-8 flex flex-col justify-center">
              <p className="text-xs font-bold text-ink uppercase tracking-wider mb-4">
                Connect with us
              </p>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-slate hover:text-ink transition-colors group"
                  >
                    <MessageCircle size={18} strokeWidth={2} className="text-indigo group-hover:scale-110 transition-transform" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-3 text-sm font-semibold text-slate hover:text-ink transition-colors group"
                  >
                    <Phone size={18} strokeWidth={2} className="text-indigo group-hover:scale-110 transition-transform" />
                    {site.phoneNumber}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-3 text-sm font-semibold text-slate hover:text-ink transition-colors group"
                  >
                    <Mail size={18} strokeWidth={2} className="text-indigo group-hover:scale-110 transition-transform" />
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Divider 3 */}
            <div className="hidden lg:block w-[1px] bg-border/60 self-stretch" />
            <div className="block lg:hidden h-[1px] w-full bg-border/60" />

            {/* Column 4: Follow us */}
            <div className="lg:w-[18%] lg:pl-8 flex flex-col justify-center">
              <p className="text-xs font-bold text-ink uppercase tracking-wider mb-4">
                Follow us
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {/* WhatsApp */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-white shadow-sm hover:scale-110 hover:shadow-md transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>

                {/* Instagram */}
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-white shadow-sm hover:scale-110 hover:shadow-md transition-all duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>

                {/* YouTube */}
                <a
                  href={youtubeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-white shadow-sm hover:scale-110 hover:shadow-md transition-all duration-200"
                  aria-label="YouTube"
                >
                  <YoutubeIcon />
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-white shadow-sm hover:scale-110 hover:shadow-md transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="w-full h-[1px] bg-border/60 my-6 md:my-8" />

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] md:text-xs font-semibold text-slate">
            <p>© {year} {site.companyName}. All rights reserved.</p>
            <p className="flex flex-wrap items-center justify-center gap-2">
              <span>Private consultancy</span>
              <span className="text-border/80">•</span>
              <span>Payments via official company account only</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
