import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { RelatedLink } from "@/lib/seo";

export default function RelatedDesks({
  heading,
  sub,
  items,
}: {
  heading: string;
  sub?: string;
  items: RelatedLink[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="bg-[#FEFCF7] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-marigold-dark">
          Keep exploring
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
          {heading}
        </h2>
        {sub ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">{sub}</p>
        ) : null}
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border/60 bg-white shadow-card outline-offset-4 transition hover:-translate-y-0.5 hover:shadow-raised"
              >
                {item.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate">
                    {item.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-ink">
                    Open {item.title}
                    <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
