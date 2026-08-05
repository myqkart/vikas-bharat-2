"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Zap, ShieldCheck, FileText } from "lucide-react";
import { finalCta, site } from "@/lib/content";
import Reveal from "@/components/motion/Reveal";

const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
const phoneHref = `tel:${site.phoneNumber}`;

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FDF6E6] to-[#FFF9F0] px-6 py-16 text-center lg:py-24"
    >
      {/* Background SVGs relative to section bounds */}
      {/* Top-Left Elegant Arc */}
      <svg className="absolute -left-12 -top-12 w-64 h-64 text-[#e58e26]/10 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M-10 10 C 80 20, 120 120, 190 210" stroke="currentColor" strokeWidth="1.5" />
        <path d="M-10 30 C 70 40, 100 100, 170 190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="90" cy="50" r="2.5" fill="#f5a623" />
        <circle cx="40" cy="20" r="1.5" fill="#f5a623" />
      </svg>

      {/* Top-Right Dot Grid */}
      <svg className="absolute right-6 top-8 w-20 h-20 text-[#EADDC5]/70 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <circle key={`tr-${r}-${c}`} cx={10 + c * 16} cy={10 + r * 16} r="2.5" />
          ))
        )}
      </svg>

      {/* Bottom-Left Dot Grid */}
      <svg className="absolute left-6 bottom-8 w-20 h-20 text-[#EADDC5]/70 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <circle key={`bl-${r}-${c}`} cx={10 + c * 16} cy={10 + r * 16} r="2.5" />
          ))
        )}
      </svg>

      {/* Bottom-Right Elegant Arc */}
      <svg className="absolute -right-16 -bottom-16 w-64 h-64 text-[#e58e26]/10 pointer-events-none" viewBox="0 0 200 200" fill="none">
        <path d="M10 210 C 80 120, 120 80, 210 -10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 210 C 100 100, 140 70, 210 10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="110" cy="110" r="2" fill="#f5a623" />
      </svg>

      {/* Badge & Content Container */}
      <Reveal className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
        {/* Top phone/chat badge */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(243,230,210,0.6)] border border-[#F6EAD9]/85 relative">
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Phone receiver */}
            <svg
              className="w-8 h-8 text-[#e58e26]"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1.003 1.003 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 008.59 4c0-.55-.45-1-1-1H4.01c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.59c0-.55-.45-1.03-1-1.03z" />
            </svg>
            {/* Speech bubble */}
            <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Speech bubble background */}
                <path
                  d="M18 6H6C4.9 6 4 6.9 4 8V14C4 15.1 4.9 16 6 16H14L18 20V16H18C19.1 16 20 15.1 20 14V8C20 6.9 19.1 6 18 6Z"
                  fill="#FFF5E6"
                  stroke="#e58e26"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                {/* Three dots */}
                <circle cx="8" cy="11" r="1" fill="#e58e26" />
                <circle cx="12" cy="11" r="1" fill="#e58e26" />
                <circle cx="16" cy="11" r="1" fill="#e58e26" />
              </svg>
            </div>
          </div>
        </div>

        {/* Headline */}
        <motion.h2
          className="font-display text-[32px] sm:text-[44px] lg:text-[48px] font-semibold leading-tight text-ink"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Aaj hi{" "}
          <span className="relative inline-block text-[#e58e26] px-1 font-bold">
            shuru
            <svg
              className="absolute -bottom-2.5 left-0 w-full h-2.5 text-[#e58e26]"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M3 5 Q 50 9, 97 4"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          <span className="relative inline-block">
            karo.
            {/* Radiating Sparkles */}
            <svg
              className="absolute -right-7 -top-2 w-6 h-6 text-[#e58e26]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M4 14l3-2.5M10 9l0.5-5M16 11l3.5 1.5" />
            </svg>
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-center text-sm sm:text-base md:text-lg text-slate leading-relaxed font-sans max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Ek free call. Koi obligation nahi.
          <br />
          Eligibility, scheme fit, aur next documents —
          <br />
          2 minute mein clear.
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full relative z-10">
          <motion.a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-shine inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-3 rounded-[16px] bg-[#0F9D58] px-8 py-4 text-base font-bold text-white shadow-[0_4px_14px_rgba(15,157,88,0.25)] hover:bg-[#0b904d] transition-all"
          >
            {/* Custom WhatsApp Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.49 4.975 1.491 5.274 0 9.56-4.287 9.563-9.563a9.5 9.5 0 00-2.81-6.76 9.49 9.49 0 00-6.769-2.809c-5.28 0-9.565 4.286-9.568 9.566-.001 1.848.49 3.597 1.42 5.169l-.993 3.626 3.731-.978L6.647 19.15zM17.38 14.61c-.307-.154-1.817-.897-2.1-1-.282-.102-.487-.154-.69.154-.204.308-.787.99-.965 1.196-.177.205-.355.23-.662.077-.307-.155-1.298-.478-2.472-1.527-.913-.815-1.53-1.82-1.71-2.129-.177-.308-.019-.475.135-.629.14-.138.307-.359.462-.538.154-.18.205-.308.308-.513.102-.206.051-.385-.026-.54-.077-.154-.69-1.668-.946-2.28-.249-.597-.502-.516-.69-.526-.178-.01-.385-.01-.591-.01-.206 0-.54.077-.822.385-.282.308-1.077 1.051-1.077 2.562 0 1.512 1.099 2.973 1.253 3.178.154.205 2.162 3.299 5.24 4.629.732.316 1.302.505 1.748.647.735.233 1.405.2 1.934.121.59-.089 1.817-.743 2.074-1.462.256-.72.256-1.334.18-1.462-.077-.128-.282-.205-.59-.36z"/>
            </svg>
            WhatsApp Par Baat Karo
          </motion.a>
          <motion.a
            href={phoneHref}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-shine inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-3 rounded-[16px] bg-[#f5a623] px-8 py-4 text-base font-bold text-black shadow-[0_4px_14px_rgba(245,166,35,0.25)] hover:bg-[#d98c0f] transition-all"
          >
            <Phone size={20} strokeWidth={2.5} aria-hidden />
            {finalCta.secondary}
          </motion.a>
        </div>

        {/* Bottom Features Row */}
        <div className="mt-12 pt-8 border-t border-[#F2E5D3]/60 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 w-full">
          {/* Feature 1 */}
          <div className="flex items-center gap-3 flex-1 justify-center md:justify-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF4E5] text-[#e58e26]">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <span className="font-sans text-sm md:text-base font-semibold text-ink text-left">
              2 Minute Mein Clear
            </span>
          </div>
          {/* Divider */}
          <div className="hidden md:block h-8 w-px bg-[#F2E5D3]" />
          {/* Feature 2 */}
          <div className="flex items-center gap-3 flex-1 justify-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF4E5] text-[#e58e26]">
              <ShieldCheck className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className="font-sans text-sm md:text-base font-semibold text-ink text-center">
              100% Guidance
            </span>
          </div>
          {/* Divider */}
          <div className="hidden md:block h-8 w-px bg-[#F2E5D3]" />
          {/* Feature 3 */}
          <div className="flex items-center gap-3 flex-1 justify-center md:justify-end">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF4E5] text-[#e58e26]">
              <FileText className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className="font-sans text-sm md:text-base font-semibold text-ink text-right">
              Next Steps Ready
            </span>
          </div>
        </div>

      </Reveal>
    </section>
  );
}
