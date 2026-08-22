"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen, Search, X } from "lucide-react";
import { blogsPage, RELATED_BY_CATEGORY } from "@/lib/blogTypes";
import type { BlogListPost } from "@/lib/blogTypes";
import { dramaticFadeUp, flipIn, popIn, staggerDramatic } from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";

const PAGE_SIZE = 9;

type TopicCount = { category: string; count: number };

type BlogPageCatalogProps = {
  posts: readonly BlogListPost[];
  topics: readonly TopicCount[];
  featured?: BlogListPost;
  initialTopic?: string;
};

export default function BlogPageCatalog({
  posts,
  topics,
  featured,
  initialTopic,
}: BlogPageCatalogProps) {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(
    initialTopic && topics.some((topic) => topic.category === initialTopic)
      ? initialTopic
      : null,
  );
  const [visible, setVisible] = useState(PAGE_SIZE);

  const queryNorm = query.trim().toLowerCase();
  const searching = queryNorm.length > 0;

  const matches = useMemo(() => {
    return posts.filter((post) => {
      if (activeFilter && post.category !== activeFilter) return false;
      if (!searching) return true;
      const haystack = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
      return haystack.includes(queryNorm);
    });
  }, [activeFilter, posts, queryNorm, searching]);

  const showFeatured =
    !searching &&
    !activeFilter &&
    featured &&
    matches.some((post) => post.slug === featured.slug);

  const gridPosts = showFeatured
    ? matches.filter((post) => post.slug !== featured.slug)
    : matches;
  const shown = gridPosts.slice(0, visible);

  function selectFilter(filter: string) {
    setQuery("");
    setVisible(PAGE_SIZE);
    setActiveFilter((current) => (current === filter ? null : filter));
  }

  return (
    <section
      id="blog-catalog"
      aria-labelledby="blog-catalog-heading"
      className="relative overflow-hidden bg-[#FEFCF7] px-5 py-20 sm:px-8 lg:py-28"
    >
      {!reduce ? <FloatingOrbs className="opacity-55" /> : null}
      <div
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-marigold/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[320px] w-[320px] rounded-full bg-indigo/10 blur-[90px]"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-border/45"
        aria-hidden
      >
        <defs>
          <pattern
            id="blog-catalog-dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blog-catalog-dots)" opacity="0.35" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerDramatic}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={dramaticFadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
          >
            {blogsPage.topics.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            id="blog-catalog-heading"
            text={blogsPage.topics.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            {blogsPage.topics.sub}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerDramatic}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {topics.map((topic) => {
              const on = activeFilter === topic.category;
              const dest =
                RELATED_BY_CATEGORY[topic.category]?.href ??
                `/blogs?topic=${encodeURIComponent(topic.category)}`;
              return (
                <motion.li key={topic.category} variants={popIn}>
                  <Link
                    href={dest}
                    aria-current={on ? "page" : undefined}
                    className={`flex h-full w-full flex-col items-start rounded-[18px] border px-4 py-4 text-left shadow-card transition-colors ${
                      on
                        ? "border-ink bg-ink text-paper"
                        : "border-border/70 bg-white/90 text-ink hover:border-ink/30"
                    }`}
                  >
                    <span className="font-display text-xl font-semibold">{topic.count}</span>
                    <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] opacity-80">
                      {topic.category}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
        </motion.ul>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerDramatic}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <motion.p
            variants={dramaticFadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-slate"
          >
            {blogsPage.catalog.eyebrow}
          </motion.p>
          <TextReveal
            as="h3"
            text={blogsPage.catalog.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            {blogsPage.catalog.sub}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={popIn}
          className="mx-auto mt-10 max-w-3xl"
        >
          <label className="relative block">
            <span className="sr-only">{blogsPage.catalog.searchPlaceholder}</span>
            <Search
              size={18}
              strokeWidth={2.2}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveFilter(null);
                setVisible(PAGE_SIZE);
              }}
              placeholder={blogsPage.catalog.searchPlaceholder}
              autoComplete="off"
              spellCheck={false}
              className="h-14 w-full rounded-[16px] border border-border/70 bg-white/95 pl-12 pr-12 text-base text-ink shadow-card outline-none placeholder:text-slate/70 focus:border-marigold focus:ring-2 focus:ring-marigold/30 [&::-webkit-search-cancel-button]:hidden"
            />
            {searching ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate hover:bg-paper-deep hover:text-ink"
              >
                <X size={16} strokeWidth={2.4} aria-hidden />
              </button>
            ) : null}
          </label>

          <ul className="mt-5 flex flex-wrap justify-center gap-2" role="list">
            {topics.map((topic) => {
              const on = activeFilter === topic.category;
              return (
                <li key={`chip-${topic.category}`}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => selectFilter(topic.category)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      on
                        ? "bg-ink text-paper"
                        : "border border-border/80 bg-white/80 text-ink hover:border-ink/40 hover:bg-white"
                    }`}
                  >
                    {topic.category}
                  </button>
                </li>
              );
            })}
          </ul>
          {searching || activeFilter ? (
            <p className="mt-4 text-center text-sm font-bold text-slate" aria-live="polite">
              {matches.length === 0
                ? `No guides match “${query || activeFilter}”`
                : `${matches.length} guide${matches.length === 1 ? "" : "s"}`}
            </p>
          ) : null}
        </motion.div>

        {showFeatured && featured ? (
          <FeaturedStory post={featured} reduce={!!reduce} />
        ) : null}

        <AnimatePresence mode="wait">
          {matches.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-14 text-center text-base text-slate"
            >
              {posts.length === 0
                ? "Guides are being published. WhatsApp the desk if you need a scheme or loan mapped now."
                : blogsPage.catalog.empty}
            </motion.p>
          ) : (
            <motion.ul
              key={`${activeFilter ?? "all"}-${queryNorm}`}
              initial="hidden"
              animate="visible"
              variants={staggerDramatic}
              className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              style={{ perspective: 1200 }}
            >
              {shown.map((post, idx) => (
                <motion.li
                  key={post.slug}
                  variants={flipIn}
                  layout
                  style={{ transformStyle: "preserve-3d" }}
                  className={idx % 3 === 1 ? "lg:translate-y-5" : ""}
                >
                  <BlogCard post={post} reduce={!!reduce} />
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {shown.length < gridPosts.length ? (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((count) => count + PAGE_SIZE)}
              className="inline-flex min-h-12 items-center justify-center rounded-[14px] border-2 border-ink/80 bg-white px-7 py-3 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Load more guides
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function FeaturedStory({ post, reduce }: { post: BlogListPost; reduce: boolean }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerDramatic}
      className="mt-14"
    >
      <TiltCard
        intensity={reduce ? 0 : 8}
        className="overflow-hidden rounded-[28px] border border-border/50 bg-white shadow-card"
      >
        <Link
          href={`/blogs/${post.slug}`}
          className="group grid overflow-hidden lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-marigold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
              Featured
            </span>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-marigold-dark">
              {post.category}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.15rem]">
              {post.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate">{post.excerpt}</p>
            <p className="mt-5 text-sm font-semibold text-slate">
              {post.readTime} · {post.date}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-ink">
              Read the guide
              <ArrowUpRight
                size={16}
                strokeWidth={2.4}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </span>
          </div>
        </Link>
      </TiltCard>
    </motion.article>
  );
}

function BlogCard({ post, reduce }: { post: BlogListPost; reduce: boolean }) {
  return (
    <TiltCard
      intensity={reduce ? 0 : 12}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border/50 bg-white shadow-card"
    >
      <Link href={`/blogs/${post.slug}`} className="flex h-full flex-col outline-offset-4">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-card">
            <BookOpen size={18} strokeWidth={2.2} aria-hidden />
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-xl font-bold tracking-tight text-ink">{post.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{post.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
            {post.readTime}
            <span className="font-medium text-slate">· {post.date}</span>
            <ArrowUpRight
              size={15}
              strokeWidth={2.4}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
