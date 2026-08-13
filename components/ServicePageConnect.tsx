"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, UserPlus, Users, Zap } from "lucide-react";
import { servicePage, site } from "@/lib/content";
import {
  dramaticFadeUp,
  flipIn,
  popIn,
  staggerDramatic,
} from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hi, please call me back about your services.",
)}`;

export default function ServicePageConnect() {
  const reduce = useReducedMotion();
  const { connect } = servicePage;

  return (
    <section
      id="service-connect"
      aria-labelledby="service-connect-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FDF6E6] to-[#FFF9F0] px-5 py-20 text-center sm:px-8 lg:py-28"
    >
      {!reduce ? <FloatingOrbs className="opacity-40" /> : null}

      <svg
        className="pointer-events-none absolute -left-12 -top-12 h-64 w-64 text-marigold/10"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M-10 10 C 80 20, 120 120, 190 210"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M-10 30 C 70 40, 100 100, 170 190"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="90" cy="50" r="2.5" fill="#f5a623" />
      </svg>
      <svg
        className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 text-marigold/10"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M10 210 C 80 120, 120 80, 210 -10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="110" cy="110" r="2" fill="#f5a623" />
      </svg>
      <svg
        className="pointer-events-none absolute right-6 top-8 h-20 w-20 text-[#EADDC5]/70"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden
      >
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <circle key={`tr-${r}-${c}`} cx={10 + c * 16} cy={10 + r * 16} r="2.5" />
          )),
        )}
      </svg>

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerDramatic}
          className="mx-auto flex max-w-2xl flex-col items-center"
        >
          <motion.div
            variants={popIn}
            className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#F6EAD9]/85 bg-white shadow-[0_10px_30px_rgba(243,230,210,0.6)]"
          >
            <Phone className="h-8 w-8 text-marigold-dark" strokeWidth={2.2} aria-hidden />
          </motion.div>

          <motion.p
            variants={dramaticFadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
          >
            {connect.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            id="service-connect-heading"
            text={connect.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.85rem]"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 font-display text-xl font-semibold text-marigold-dark sm:text-2xl"
          >
            {connect.sub}
          </motion.p>
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 max-w-xl text-base leading-relaxed text-slate sm:text-lg"
          >
            {connect.body}
          </motion.p>

          <motion.div
            variants={popIn}
            className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shine inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-[16px] bg-[#0F9D58] px-8 py-4 text-base font-bold text-white shadow-[0_4px_14px_rgba(15,157,88,0.25)] transition-all hover:bg-[#0b904d] sm:w-auto"
            >
              <MessageCircle size={20} strokeWidth={2.4} aria-hidden />
              Request Call Back
            </motion.a>
            <motion.a
              href={connect.tollFree.href}
              whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shine inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-[16px] bg-marigold px-8 py-4 text-base font-bold text-ink shadow-[0_4px_14px_rgba(245,166,35,0.25)] transition-all hover:bg-marigold-dark sm:w-auto"
            >
              <Phone size={20} strokeWidth={2.5} aria-hidden />
              {connect.tollFree.number}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerDramatic}
          className="mt-14 grid gap-5 sm:grid-cols-3"
          style={{ perspective: 1000 }}
        >
          <motion.li variants={flipIn}>
            <TiltCard
              intensity={reduce ? 0 : 8}
              className="h-full rounded-[22px] border border-border/50 bg-white/90 p-6 text-left shadow-card"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-marigold/12 text-marigold-dark ring-1 ring-marigold/25">
                <UserPlus size={20} strokeWidth={2.2} aria-hidden />
              </span>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-dark">
                {connect.newCustomer.label}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink">
                {connect.newCustomer.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {connect.newCustomer.text}
              </p>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-bold text-ink underline-offset-4 hover:underline"
              >
                {connect.newCustomer.cta}
              </Link>
            </TiltCard>
          </motion.li>

          <motion.li variants={flipIn}>
            <TiltCard
              intensity={reduce ? 0 : 8}
              className="h-full rounded-[22px] border border-border/50 bg-white/90 p-6 text-left shadow-card"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success-bg text-success ring-1 ring-success/25">
                <Users size={20} strokeWidth={2.2} aria-hidden />
              </span>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-success">
                {connect.existingCustomer.label}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink">
                {connect.existingCustomer.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {connect.existingCustomer.text}
              </p>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-bold text-ink underline-offset-4 hover:underline"
              >
                {connect.existingCustomer.cta}
              </Link>
            </TiltCard>
          </motion.li>

          <motion.li variants={popIn}>
            <TiltCard
              intensity={reduce ? 0 : 8}
              className="h-full rounded-[22px] border border-marigold/30 bg-gradient-to-br from-marigold/15 to-white p-6 text-left shadow-card"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-marigold text-ink">
                <Zap size={20} strokeWidth={2.2} aria-hidden />
              </span>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-marigold-dark">
                {connect.tollFree.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {connect.tollFree.text}
              </p>
              <a
                href={connect.tollFree.href}
                className="mt-5 block font-display text-2xl font-bold tracking-tight text-ink"
              >
                {connect.tollFree.number}
              </a>
            </TiltCard>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}
