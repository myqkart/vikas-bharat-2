"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpFromLine,
  ArrowUpRight,
  BadgeCheck,
  CircuitBoard,
  Compass,
  Cpu,
  Factory,
  Landmark,
  LayoutGrid,
  Leaf,
  Percent,
  Rocket,
  Search,
  ShieldCheck,
  Sprout,
  Trophy,
  Users,
  Wallet,
  Waves,
  Wheat,
  X,
  type LucideIcon,
} from "lucide-react";
import { schemePage, site } from "@/lib/content";
import { getSchemeDesk } from "@/lib/schemeDesks";
import { dramaticFadeUp, flipIn, popIn, staggerDramatic } from "@/lib/motion";
import FloatingOrbs from "@/components/motion/FloatingOrbs";
import TextReveal from "@/components/motion/TextReveal";
import TiltCard from "@/components/motion/TiltCard";
import {
  highlightMatches,
  indexSchemes,
  searchSchemes,
} from "@/lib/schemeSearch";

type SchemeFilter = (typeof schemePage.catalog.filters)[number];
type SchemeItem = (typeof schemePage.catalog.items)[number];

const iconMap: Record<SchemeItem["icon"], LucideIcon> = {
  agri: Wheat,
  shield: ShieldCheck,
  factory: Factory,
  leaf: Leaf,
  rocket: Rocket,
  wallet: Wallet,
  users: Users,
  sprout: Sprout,
  badge: BadgeCheck,
  percent: Percent,
  compass: Compass,
  elevator: ArrowUpFromLine,
  landmark: Landmark,
  cpu: Cpu,
  waves: Waves,
  grid: LayoutGrid,
  circuit: CircuitBoard,
  trophy: Trophy,
};

const SCHEME_SERVICE_REDIRECTS: Record<string, string> = {
  "msme-certification": "/services/certificate",
  "certs-compliance": "/services/certificate",
  "iso-certification": "/services/certificate",
  "tax-exemption": "/services/certificate",
  "business-registration": "/services/registration",
  "startup-india-cert": "/services/startup",
  "government-grants": "/services/grant",
  "government-grants-guide": "/services/grant",
};

function schemeHref(item: SchemeItem) {
  const serviceHref = SCHEME_SERVICE_REDIRECTS[item.id];
  if (serviceHref) return serviceHref;
  if (getSchemeDesk(item.id)) return `/scheme/${item.id}`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I want to know more about the ${item.title}.`,
  )}`;
}

function isFilterOnly(item: SchemeItem) {
  return "filterOnly" in item && item.filterOnly;
}

export default function SchemePageCatalog() {
  const reduce = useReducedMotion();
  const { catalog } = schemePage;
  const listId = useId();
  const boxRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<SchemeFilter | null>(
    catalog.defaultFilter,
  );
  const [expanded, setExpanded] = useState(false);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [activeSuggest, setActiveSuggest] = useState(0);

  const queryNorm = query.trim();
  const searching = queryNorm.length > 0;
  const filteredView = activeFilter !== null || searching;
  const searchIndex = useMemo(() => indexSchemes(catalog.items), [catalog.items]);

  const matches = useMemo(() => {
    if (searching) {
      return searchSchemes(searchIndex, queryNorm);
    }
    return catalog.items.filter((item) => {
      if (activeFilter && !item.filters.some((filter) => filter === activeFilter)) {
        return false;
      }
      if (!filteredView && isFilterOnly(item)) return false;
      return true;
    });
  }, [activeFilter, catalog.items, filteredView, queryNorm, searchIndex, searching]);

  const suggestions = useMemo(
    () => (searching ? matches.slice(0, 6) : []),
    [matches, searching],
  );

  useEffect(() => {
    setActiveSuggest(0);
  }, [queryNorm]);

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!boxRef.current?.contains(event.target as Node)) {
        setSuggestOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  const previewCount = catalog.previewCount;
  const remaining = searching ? 0 : Math.max(0, matches.length - previewCount);
  const showMoreCard = filteredView && !searching && !expanded && remaining > 0;

  const visible = useMemo(() => {
    if (searching) return matches;
    if (!filteredView) {
      return expanded ? matches : matches.filter((item) => item.featured);
    }
    return expanded ? matches : matches.slice(0, previewCount);
  }, [expanded, filteredView, matches, previewCount, searching]);

  function selectFilter(filter: SchemeFilter) {
    setQuery("");
    setSuggestOpen(false);
    setActiveFilter((current) => (current === filter ? null : filter));
    setExpanded(false);
  }

  function applySuggestion(title: string) {
    setQuery(title);
    setSuggestOpen(false);
    setExpanded(true);
  }

  function onSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!suggestOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      setSuggestOpen(true);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveSuggest((i) => Math.min(i + 1, Math.max(suggestions.length - 1, 0)));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveSuggest((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter" && suggestions[activeSuggest]) {
      event.preventDefault();
      applySuggestion(suggestions[activeSuggest].title);
    } else if (event.key === "Escape") {
      setSuggestOpen(false);
    }
  }

  return (
    <section
      id="top-schemes"
      aria-labelledby="schemes-catalog-heading"
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
            id="scheme-catalog-dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#scheme-catalog-dots)" opacity="0.35" />
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
            {catalog.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            id="schemes-catalog-heading"
            text={catalog.heading}
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          />
          <motion.p
            variants={dramaticFadeUp}
            className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
          >
            {catalog.sub}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerDramatic}
          className="mx-auto mt-10 max-w-3xl"
        >
          <motion.div variants={popIn} ref={boxRef} className="relative">
            <label className="relative block">
              <span className="sr-only">{catalog.searchPlaceholder}</span>
              <Search
                size={18}
                strokeWidth={2.2}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={suggestOpen && suggestions.length > 0}
                aria-controls={listId}
                aria-activedescendant={
                  suggestOpen && suggestions[activeSuggest]
                    ? `${listId}-${suggestions[activeSuggest].id}`
                    : undefined
                }
                onChange={(e) => {
                  setQuery(e.target.value);
                  setExpanded(false);
                  setSuggestOpen(true);
                }}
                onFocus={() => searching && setSuggestOpen(true)}
                onKeyDown={onSearchKeyDown}
                placeholder={catalog.searchPlaceholder}
                autoComplete="off"
                spellCheck={false}
                className="h-14 w-full rounded-[16px] border border-border/70 bg-white/95 pl-12 pr-12 text-base text-ink shadow-card outline-none placeholder:text-slate/70 focus:border-marigold focus:ring-2 focus:ring-marigold/30 [&::-webkit-search-cancel-button]:hidden"
              />
              {searching ? (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => {
                    setQuery("");
                    setSuggestOpen(false);
                    setExpanded(false);
                  }}
                  className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate hover:bg-paper-deep hover:text-ink"
                >
                  <X size={16} strokeWidth={2.4} aria-hidden />
                </button>
              ) : null}
            </label>

            <AnimatePresence>
              {suggestOpen && suggestions.length > 0 ? (
                <motion.ul
                  id={listId}
                  role="listbox"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute z-30 mt-2 w-full overflow-hidden rounded-[16px] border border-border/70 bg-white py-1.5 shadow-raised"
                >
                  {suggestions.map((item, idx) => {
                    const Icon = iconMap[item.icon];
                    const active = idx === activeSuggest;
                    return (
                      <li key={item.id} role="none">
                        <button
                          type="button"
                          id={`${listId}-${item.id}`}
                          role="option"
                          aria-selected={active}
                          onMouseEnter={() => setActiveSuggest(idx)}
                          onClick={() => applySuggestion(item.title)}
                          className={`flex w-full items-start gap-3 px-3.5 py-2.5 text-left ${
                            active ? "bg-marigold/12" : "hover:bg-paper"
                          }`}
                        >
                          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper-deep text-ink">
                            <Icon size={15} strokeWidth={2.2} aria-hidden />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate font-bold text-ink">
                              <Highlighted text={item.title} query={queryNorm} />
                            </span>
                            <span className="mt-0.5 line-clamp-1 text-xs text-slate">
                              <Highlighted text={item.text} query={queryNorm} />
                            </span>
                          </span>
                          {item.filters[0] ? (
                            <span className="mt-0.5 shrink-0 rounded-full bg-paper-deep px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink">
                              {item.filters[0]}
                            </span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              ) : null}
            </AnimatePresence>
          </motion.div>

          <motion.ul
            variants={staggerDramatic}
            className="mt-5 flex flex-wrap justify-center gap-2"
            role="list"
          >
            {catalog.filters.map((filter) => {
              const on = activeFilter === filter;
              return (
                <motion.li key={filter} variants={popIn}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => selectFilter(filter)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      on
                        ? "bg-ink text-paper"
                        : "border border-border/80 bg-white/80 text-ink hover:border-ink/40 hover:bg-white"
                    }`}
                  >
                    {filter}
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
          {searching ? (
            <p className="mt-4 text-center text-sm font-bold text-slate" aria-live="polite">
              {matches.length === 0
                ? `No schemes match “${queryNorm}”`
                : `${matches.length} scheme${matches.length === 1 ? "" : "s"} matched`}
            </p>
          ) : null}
        </motion.div>

        <AnimatePresence mode="wait">
          {visible.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-14 text-center text-base text-slate"
            >
              {catalog.empty}
            </motion.p>
          ) : (
            <motion.ul
              key={searching ? "search" : (activeFilter ?? "all")}
              initial="hidden"
              animate="visible"
              variants={staggerDramatic}
              className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              style={{ perspective: 1200 }}
            >
              {visible.map((item, idx) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.li
                    key={item.id}
                    variants={flipIn}
                    layout
                    style={{ transformStyle: "preserve-3d" }}
                    className={idx % 3 === 1 ? "lg:translate-y-5" : ""}
                  >
                    <SchemeCard
                      item={item}
                      Icon={Icon}
                      reduce={!!reduce}
                      query={searching ? queryNorm : ""}
                    />
                  </motion.li>
                );
              })}

              {showMoreCard ? (
                <motion.li
                  key="show-more"
                  variants={flipIn}
                  layout
                  style={{ transformStyle: "preserve-3d" }}
                  className="lg:translate-y-0"
                >
                  <TiltCard
                    intensity={reduce ? 0 : 12}
                    className="group relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[24px] border border-marigold/40 bg-gradient-to-br from-marigold/20 via-white to-[#FFF8EE] shadow-card"
                  >
                    <button
                      type="button"
                      onClick={() => setExpanded(true)}
                      className="flex h-full min-h-[360px] flex-col items-center justify-center p-8 text-center outline-offset-4"
                    >
                      <span className="font-display text-5xl font-semibold tracking-tight text-ink">
                        +{remaining}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">
                        {catalog.showMoreCta}
                      </h3>
                      <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-slate">
                        {catalog.showMoreSub}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                        {activeFilter
                          ? `See remaining ${activeFilter} schemes`
                          : "See remaining schemes"}
                        <ArrowUpRight
                          size={15}
                          strokeWidth={2.4}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </span>
                    </button>
                  </TiltCard>
                </motion.li>
              ) : null}
            </motion.ul>
          )}
        </AnimatePresence>

        {!filteredView ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popIn}
            className="mt-12 flex justify-center"
          >
            <motion.button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border-2 border-ink/80 bg-white/80 px-7 py-3.5 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {expanded ? catalog.collapseCta : catalog.exploreCta}
              <Landmark size={18} strokeWidth={2.2} aria-hidden />
            </motion.button>
          </motion.div>
        ) : expanded && remaining > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={popIn}
            className="mt-12 flex justify-center"
          >
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="text-sm font-bold text-ink underline-offset-4 hover:underline"
            >
              Show featured in this filter
            </button>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

function Highlighted({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return text;
  return (
    <>
      {highlightMatches(text, query).map((chunk, idx) =>
        chunk.match ? (
          <mark
            key={`${chunk.text}-${idx}`}
            className="rounded-sm bg-marigold/35 px-0.5 text-inherit"
          >
            {chunk.text}
          </mark>
        ) : (
          <span key={`${chunk.text}-${idx}`}>{chunk.text}</span>
        ),
      )}
    </>
  );
}

function SchemeCard({
  item,
  Icon,
  reduce,
  query,
}: {
  item: SchemeItem;
  Icon: LucideIcon;
  reduce: boolean;
  query: string;
}) {
  const href = schemeHref(item);
  const internal = href.startsWith("/");

  return (
    <TiltCard
      intensity={reduce ? 0 : 12}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border/50 bg-white shadow-card"
    >
      <a
        href={href}
        target={internal ? undefined : "_blank"}
        rel={internal ? undefined : "noopener noreferrer"}
        className="flex h-full flex-col outline-offset-4"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow-card">
            <Icon size={18} strokeWidth={2.2} aria-hidden />
          </span>
          {item.filters[0] ? (
            <span className="absolute right-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink">
              {item.filters[0]}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-xl font-bold tracking-tight text-ink">
            <Highlighted text={item.title} query={query} />
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
            <Highlighted text={item.text} query={query} />
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink">
            Know More
            <ArrowUpRight
              size={15}
              strokeWidth={2.4}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </a>
    </TiltCard>
  );
}

