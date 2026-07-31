import {
  BadgeCheck,
  type LucideIcon,
  ShieldCheck,
  User,
  Users,
  Briefcase,
  Landmark,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  user: User,
  users: Users,
  check: BadgeCheck,
  shield: ShieldCheck,
  briefcase: Briefcase,
  landmark: Landmark,
  sparkles: Sparkles,
};

export type EligibilityItem = {
  label: string;
  icon: keyof typeof iconMap;
};

export default function EligibilityList({
  heading = "Who can apply",
  items,
}: {
  heading?: string;
  items: readonly EligibilityItem[];
}) {
  return (
    <section className="px-5 pb-16 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display text-[28px] font-semibold leading-[1.1] text-ink lg:text-[40px]">
          {heading}
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = iconMap[item.icon] ?? BadgeCheck;
            return (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-[14px] border border-border bg-white px-4 py-4 shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-marigold">
                  <Icon size={22} strokeWidth={2.25} aria-hidden />
                </span>
                <p className="text-base font-bold text-ink">{item.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
