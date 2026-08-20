"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, BookOpen, MessageCircle } from "lucide-react";
import { site } from "@/lib/content";
import type { BlogListPost, BlogPost } from "@/lib/blogTypes";
import { dramaticFadeUp, popIn, staggerDramatic } from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";
import BlogProse from "@/components/BlogProse";

export default function BlogArticlePage({
  post,
  related,
}: {
  post: BlogPost;
  related: readonly BlogListPost[];
}) {
  const reduce = useReducedMotion();
  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I read “${post.title}” and want the next step for my business.`,
  )}`;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-paper via-[#FFF8EE] to-[#EAF1FA] px-5 pt-40 pb-16 sm:px-8 sm:pt-44 lg:pt-48 lg:pb-20">
        {!reduce ? <FloatingOrbs /> : null}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(18,41,77,0.12) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-16 h-[420px] w-[420px] rounded-full bg-marigold/15 blur-[120px]"
          aria-hidden
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerDramatic}
          className="relative z-10 mx-auto max-w-[1200px]"
        >
          <motion.div variants={popIn}>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-indigo"
            >
              <ArrowLeft size={16} strokeWidth={2.4} aria-hidden />
              All guides
            </Link>
          </motion.div>
          <motion.p
            variants={dramaticFadeUp}
            className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-marigold-dark sm:mt-12"
          >
            {post.category}
          </motion.p>
          <TextReveal
            as="h1"
            text={post.title}
            onMount
            className="mt-4 max-w-4xl font-display text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-ink sm:mt-5 sm:text-5xl"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-slate"
          >
            {post.excerpt}
          </motion.p>
          <motion.p
            variants={dramaticFadeUp}
            className="mt-6 text-sm font-semibold text-slate"
          >
            {post.readTime} · {post.date} · Vikas Bharat desk
          </motion.p>
        </motion.div>
      </section>

      <section className="bg-[#FEFCF7] px-5 pt-10 pb-20 sm:px-8 sm:pt-12 lg:pt-14 lg:pb-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14">
          <article className="min-w-0">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] shadow-raised">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 820px) 100vw, 820px"
                className="object-cover"
              />
            </div>

            {post.takeaways.length > 0 ? (
              <aside className="mt-10 rounded-[22px] border border-marigold/35 bg-marigold/10 p-6 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-marigold-dark">
                  Takeaways
                </p>
                <ul className="mt-4 space-y-3">
                  {post.takeaways.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            ) : null}

            <div className="mt-12">
              <BlogProse blocks={post.blocks} />
            </div>

            {post.faqs.length > 0 ? (
              <div className="mt-14">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate">
                  Quick answers
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-ink">FAQs</h2>
                <ul className="mt-6 space-y-3">
                  {post.faqs.map((item) => (
                    <li
                      key={item.question}
                      className="rounded-[20px] border border-border/70 bg-white p-5 shadow-card"
                    >
                      <p className="font-display text-lg font-semibold text-ink">
                        {item.question}
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-slate">
                        {item.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-14 flex flex-col gap-3 rounded-[24px] border border-border/70 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="font-display text-2xl font-semibold text-ink">
                  Ready for the next step?
                </p>
                <p className="mt-1 text-sm text-slate">
                  We will map this guide to your unit on a free WhatsApp call.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-success px-6 py-3 text-sm font-bold text-white"
                >
                  <MessageCircle size={16} strokeWidth={2.4} aria-hidden />
                  WhatsApp the desk
                </a>
                <Link
                  href={post.relatedHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border-2 border-ink/80 bg-white px-6 py-3 text-sm font-bold text-ink hover:bg-ink hover:text-white"
                >
                  {post.relatedLabel}
                  <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden />
                </Link>
              </div>
            </div>
          </article>

          {post.toc.length > 2 ? (
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-[22px] border border-border/60 bg-white/90 p-5 shadow-card">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate">
                  On this page
                </p>
                <nav className="mt-4 space-y-2" aria-label="Article sections">
                  {post.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm leading-snug text-slate transition-colors hover:text-ink"
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          ) : null}
        </div>

        {related.length > 0 ? (
          <div className="mx-auto mt-20 max-w-[1200px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate">
              Keep reading
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Related guides
            </h2>
            <ul
              className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              style={{ perspective: 1200 }}
            >
              {related.map((item) => (
                <li key={item.slug}>
                  <TiltCard
                    intensity={reduce ? 0 : 10}
                    className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border/50 bg-white shadow-card"
                  >
                    <Link href={`/blogs/${item.slug}`} className="flex h-full flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        />
                        <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink">
                          <BookOpen size={18} strokeWidth={2.2} aria-hidden />
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-marigold-dark">
                          {item.category}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold text-ink">
                          {item.title}
                        </h3>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-ink">
                          {item.readTime}
                          <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
    </>
  );
}
