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
    className="w-5 h-5 fill-[#25D366] transition-transform duration-300 group-hover/social:scale-110"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 fill-none stroke-[#E1306C] transition-transform duration-300 group-hover/social:scale-110"
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
    className="w-5 h-5 fill-[#FF0000] stroke-[#FF0000] transition-transform duration-300 group-hover/social:scale-110"
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
    className="w-5 h-5 fill-[#0077B5] stroke-none transition-transform duration-300 group-hover/social:scale-110"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-paper px-4 pb-16 pt-4 md:px-6 md:pb-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Main Footer Card */}
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] border border-border/85 bg-gradient-to-br from-[#FFFDF9] to-[#FDFBF7] p-8 md:p-10 lg:p-12 shadow-[0_4px_20px_rgba(18,41,77,0.02)] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(18,41,77,0.05)] hover:border-border group/card">
          
          {/* Subtle Radial Glows */}
          <div className="absolute right-[-10%] top-[-10%] -z-10 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.07)_0%,transparent_70%)] blur-2xl pointer-events-none" />
          <div className="absolute left-[-10%] bottom-[-10%] -z-10 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(30,62,114,0.05)_0%,transparent_70%)] blur-2xl pointer-events-none" />

          {/* Dotted Grid Pattern */}
          <svg
            className="absolute top-6 left-6 -z-10 w-32 h-32 opacity-15 text-slate/40 pointer-events-none select-none"
            fill="currentColor"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="footer-dot-grid"
                x="0"
                y="0"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-dot-grid)" />
          </svg>

          {/* Concentric Circle Orbits (Growth waves) */}
          <svg
            className="absolute -right-24 bottom-[-10%] -z-10 w-96 h-96 opacity-25 text-border/40 pointer-events-none select-none transition-transform duration-700 group-hover/card:scale-105"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <circle cx="100" cy="150" r="50" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="150" r="85" strokeWidth="1" />
            <circle cx="100" cy="150" r="120" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="150" r="155" strokeWidth="1.5" />
          </svg>

          {/* Abstract Wave Path */}
          <svg
            className="absolute left-[30%] top-[-20%] -z-10 w-[400px] h-[200px] opacity-15 text-border/30 pointer-events-none select-none"
            viewBox="0 0 400 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            aria-hidden="true"
          >
            <path d="M 0,100 C 120,180 200,20 400,80" />
          </svg>

          {/* Decorative Sparkle SVGs */}
          <svg
            className="absolute left-[28%] bottom-16 w-5 h-5 opacity-25 text-marigold animate-pulse pointer-events-none select-none"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12,0 L14.5,9.5 L24,12 L14.5,14.5 L12,24 L9.5,14.5 L0,12 L9.5,9.5 Z" />
          </svg>

          <svg
            className="absolute right-[40%] top-12 w-4 h-4 opacity-20 text-marigold pointer-events-none select-none"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12,0 L14.5,9.5 L24,12 L14.5,14.5 L12,24 L9.5,14.5 L0,12 L9.5,9.5 Z" />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0">
            {/* Column 1: Logo & Info */}
            <div className="lg:w-[32%] lg:pr-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white border border-border/80 shadow-[0_2px_8px_rgba(18,41,77,0.04)] p-2 flex-shrink-0 transition-transform duration-300 hover:scale-105">
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
            <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-border/50 to-transparent self-stretch" />
            <div className="block lg:hidden h-[1px] w-full bg-gradient-to-r from-transparent via-border/50 to-transparent" />

            {/* Column 2: Links */}
            <div className="lg:w-[28%] lg:px-8 flex flex-col justify-center">
              <p className="text-xs font-bold text-ink uppercase tracking-wider mb-4">
                Explore
              </p>
              <ul className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-sm font-semibold text-slate hover:text-indigo transition-colors duration-200 group/link relative"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-marigold mr-2.5 transition-transform duration-200 group-hover/link:scale-125 group-hover/link:bg-marigold-dark" />
                      <span className="relative">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-indigo transition-all duration-300 group-hover/link:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider 2 */}
            <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-border/50 to-transparent self-stretch" />
            <div className="block lg:hidden h-[1px] w-full bg-gradient-to-r from-transparent via-border/50 to-transparent" />

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
                    className="inline-flex items-center gap-3 text-sm font-semibold text-slate hover:text-[#25D366] transition-colors group"
                  >
                    <MessageCircle size={18} strokeWidth={2} className="text-indigo group-hover:text-[#25D366] group-hover:scale-110 transition-all duration-200" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-3 text-sm font-semibold text-slate hover:text-indigo transition-colors group"
                  >
                    <Phone size={18} strokeWidth={2} className="text-indigo group-hover:scale-110 transition-all duration-200" />
                    {site.phoneNumber}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-3 text-sm font-semibold text-slate hover:text-marigold-dark transition-colors group"
                  >
                    <Mail size={18} strokeWidth={2} className="text-indigo group-hover:text-marigold-dark group-hover:scale-110 transition-all duration-200" />
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Divider 3 */}
            <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-border/50 to-transparent self-stretch" />
            <div className="block lg:hidden h-[1px] w-full bg-gradient-to-r from-transparent via-border/50 to-transparent" />

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
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-white shadow-sm hover:scale-110 hover:shadow-md hover:bg-[#25D366]/8 hover:border-[#25D366]/40 transition-all duration-300 group/social"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>

                {/* Instagram */}
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-white shadow-sm hover:scale-110 hover:shadow-md hover:bg-[#E1306C]/8 hover:border-[#E1306C]/40 transition-all duration-300 group/social"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>

                {/* YouTube */}
                <a
                  href={youtubeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-white shadow-sm hover:scale-110 hover:shadow-md hover:bg-[#FF0000]/8 hover:border-[#FF0000]/40 transition-all duration-300 group/social"
                  aria-label="YouTube"
                >
                  <YoutubeIcon />
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-white shadow-sm hover:scale-110 hover:shadow-md hover:bg-[#0077B5]/8 hover:border-[#0077B5]/40 transition-all duration-300 group/social"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent my-6 md:my-8" />

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
