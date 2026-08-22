import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogBlock } from "@/lib/blogTypes";

const LINK_CLASS =
  "font-semibold text-indigo underline decoration-marigold/70 decoration-2 underline-offset-4 transition-colors hover:text-ink";

const AUTO_LINKS = [
  { re: /\babout us\b/i, href: "/about" },
  { re: /\bVikas Bharat\b/, href: "/about" },
  { re: /\bcontact us\b/i, href: "/contact" },
  { re: /\benquiry form\b/i, href: "/contact" },
  { re: /\bMudra(?: loans?)?\b/i, href: "/scheme/mudra" },
  { re: /\bUdyam(?: registration)?\b/i, href: "/services/registration" },
  { re: /\bStartup India\b/, href: "/services/startup" },
  { re: /\bFSSAI\b/, href: "/services/certificate" },
  { re: /\bGST registration\b/i, href: "/services/registration" },
  { re: /\bbusiness loans?\b/i, href: "/services/loan" },
  { re: /\bgovernment schemes?\b/i, href: "/scheme" },
] as const;

export default function BlogProse({ blocks }: { blocks: readonly BlogBlock[] }) {
  const used = new Set<string>();
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => (
        <Block key={`${block.type}-${index}`} block={block} used={used} />
      ))}
    </div>
  );
}

function Block({
  block,
  used,
}: {
  block: BlogBlock;
  used: Set<string>;
}) {
  if (block.type === "h2") {
    return (
      <h2
        id={block.id}
        className="scroll-mt-28 font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.85rem]"
      >
        <span className="mr-3 inline-block h-[0.85em] w-1.5 translate-y-0.5 rounded-full bg-marigold align-baseline" />
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3
        id={block.id}
        className="scroll-mt-28 font-display text-xl font-semibold tracking-tight text-ink"
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "p") {
    return (
      <p className="text-[16.5px] leading-[1.8] text-slate">
        <Inline text={block.text} used={used} />
      </p>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="space-y-2.5">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[16px] leading-[1.75] text-slate">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
            <span>
              <Inline text={item} used={used} />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "ol") {
    return (
      <ol className="space-y-3">
        {block.items.map((item, index) => (
          <li key={item} className="flex gap-3 text-[16px] leading-[1.75] text-slate">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-bold text-paper">
              {index + 1}
            </span>
            <span>
              <Inline text={item} used={used} />
            </span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="space-y-4">
        {block.items.map((item, index) => (
          <li
            key={item.title}
            className="rounded-[20px] border border-border/70 bg-white p-5 shadow-card sm:p-6"
          >
            <p className="flex items-center gap-3 font-display text-lg font-semibold text-ink">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-marigold text-sm font-bold text-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.title}
            </p>
            {item.body ? (
              <p className="mt-3 text-[15.5px] leading-[1.75] text-slate">
                <Inline text={item.body} used={used} />
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-[20px] border border-border/70 bg-white shadow-card">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-paper-deep/80 text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
            <tr>
              {block.headers.map((header) => (
                <th key={header} className="px-4 py-3 sm:px-5">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr
                key={row.join("-")}
                className={rowIndex % 2 ? "bg-paper/50" : "bg-white"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className="px-4 py-3 align-top leading-relaxed text-slate sm:px-5"
                  >
                    <Inline text={cell} used={used} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === "cards") {
    const labels = Object.keys(block.items[0] ?? {});
    const titleKey = labels[0] ?? "";
    return (
      <ul className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <li
            key={`${item[titleKey]}-${Object.values(item).join("-")}`}
            className="rounded-[20px] border border-border/70 bg-white p-5 shadow-card"
          >
            {titleKey ? (
              <p className="font-display text-lg font-semibold text-ink">{item[titleKey]}</p>
            ) : null}
            <dl className="mt-3 space-y-2">
              {labels.slice(1).map((label) => (
                <div key={label}>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate">
                    {label}
                  </dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-ink">
                    <Inline text={item[label] ?? ""} used={used} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <aside className="rounded-[22px] border border-marigold/35 bg-gradient-to-br from-marigold/15 to-white p-6 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-marigold-dark">
          {block.heading}
        </p>
        <p className="mt-3 text-[15.5px] leading-[1.75] text-ink">
          <Inline text={block.text} used={used} />
        </p>
      </aside>
    );
  }

  return null;
}

function Inline({ text, used }: { text: string; used: Set<string> }) {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) {
      nodes.push(...linkifyPlain(text.slice(last, match.index), used, `p-${key}`));
    }
    if (match[1]) {
      nodes.push(
        <strong key={key} className="font-semibold text-ink">
          {match[1]}
        </strong>,
      );
    } else if (match[2] && match[3]) {
      used.add(normalizeHref(match[3]));
      nodes.push(
        <SmartLink key={key} href={match[3]}>
          {match[2]}
        </SmartLink>,
      );
    }
    key += 1;
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(...linkifyPlain(text.slice(last), used, `t-${key}`));
  }
  return <>{nodes}</>;
}

function normalizeHref(href: string) {
  return href.split("#")[0] ?? href;
}

function linkifyPlain(text: string, used: Set<string>, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length) {
    let chosen: { href: string; match: string; index: number } | null = null;
    for (const { re, href } of AUTO_LINKS) {
      if (used.has(href)) continue;
      const finder = new RegExp(re.source, re.flags.includes("g") ? re.flags : `${re.flags}g`);
      const found = finder.exec(remaining);
      if (!found || found.index < 0) continue;
      if (!chosen || found.index < chosen.index) {
        chosen = { href, match: found[0], index: found.index };
      }
    }

    if (!chosen) {
      nodes.push(remaining);
      break;
    }

    if (chosen.index > 0) nodes.push(remaining.slice(0, chosen.index));
    used.add(chosen.href);
    nodes.push(
      <SmartLink key={`${keyPrefix}-${key}`} href={chosen.href}>
        {chosen.match}
      </SmartLink>,
    );
    key += 1;
    remaining = remaining.slice(chosen.index + chosen.match.length);
  }

  return nodes;
}

function SmartLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={LINK_CLASS}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
      {children}
    </a>
  );
}
