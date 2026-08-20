import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogBlock } from "@/lib/blogTypes";

export default function BlogProse({ blocks }: { blocks: readonly BlogBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => (
        <Block key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: BlogBlock }) {
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
        <Inline text={block.text} />
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
              <Inline text={item} />
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
              <Inline text={item} />
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
                <Inline text={item.body} />
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
                    <Inline text={cell} />
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
                    <Inline text={item[label] ?? ""} />
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
          <Inline text={block.text} />
        </p>
      </aside>
    );
  }

  return null;
}

function Inline({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1]) {
      nodes.push(
        <strong key={key} className="font-semibold text-ink">
          {match[1]}
        </strong>,
      );
    } else if (match[2] && match[3]) {
      nodes.push(
        <SmartLink key={key} href={match[3]}>
          {match[2]}
        </SmartLink>,
      );
    }
    key += 1;
    last = match.index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function SmartLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    "font-semibold text-indigo underline decoration-marigold/70 decoration-2 underline-offset-4 transition-colors hover:text-ink";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
