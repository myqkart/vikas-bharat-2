import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/seo";

export default function Breadcrumbs({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="pointer-events-none absolute inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-30 px-5 md:top-[5.5rem] lg:px-8"
    >
      <ol className="pointer-events-auto mx-auto flex max-w-[1200px] flex-wrap items-center gap-1.5 text-[12px] font-semibold text-slate">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.path}-${item.name}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight
                  size={12}
                  strokeWidth={2.4}
                  className="text-slate/70"
                  aria-hidden
                />
              ) : null}
              {last ? (
                <span className="max-w-[14rem] truncate text-ink sm:max-w-[28rem]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-indigo"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
