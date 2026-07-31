import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  FileText,
  Handshake,
  IndianRupee,
  type LucideIcon,
  Scale,
  Store,
  TrendingUp,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  store: Store,
  rupee: IndianRupee,
  file: FileText,
  check: BadgeCheck,
  clipboard: ClipboardCheck,
  handshake: Handshake,
  scale: Scale,
  growth: TrendingUp,
};

export type ChecklistItem = {
  label: string;
  icon: keyof typeof iconMap;
};

export default function ImageChecklist({
  heading = "What you get",
  items,
}: {
  heading?: string;
  items: readonly ChecklistItem[];
}) {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
          {heading}
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => {
            const Icon = iconMap[item.icon] ?? BadgeCheck;
            return (
              <li
                key={item.label}
                className="flex items-center gap-4 rounded-[14px] bg-paper-deep p-4 shadow-card sm:p-5"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[14px] bg-ink shadow-card">
                  <span className="absolute inset-0 flex items-center justify-center text-marigold">
                    <Icon size={28} strokeWidth={2.25} aria-hidden />
                  </span>
                </div>
                <p className="min-w-0 text-base font-bold text-ink">
                  {item.label}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
