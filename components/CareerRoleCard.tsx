import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  Clock3,
  Handshake,
  MapPin,
  Scale,
  Share2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { CareerApplyButton } from "@/components/CareerApplyModal";
import { careerPath, careersOffice, type CareerRole } from "@/lib/careers";

const departmentIcon: Record<string, LucideIcon> = {
  Sales: Handshake,
  "Business Development": Building2,
  Relationships: Users,
  "Sales Operations": BriefcaseBusiness,
  Credit: Scale,
  Partnerships: Share2,
  Projects: ClipboardList,
};

export default function CareerRoleCard({
  job,
}: {
  job: CareerRole;
}) {
  const Icon = departmentIcon[job.department] ?? BriefcaseBusiness;

  return (
    <li className="flex h-full flex-col rounded-[24px] border border-[#ebe4d6] bg-white p-5 shadow-card sm:p-8">
      <span className="grid h-11 w-11 place-items-center rounded-[12px] border border-[#e6dfd0] bg-[#f7f3ea] text-ink">
        <Icon size={18} strokeWidth={2} aria-hidden />
      </span>
      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-marigold-dark">
        {job.department}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
        <Link
          href={careerPath(job.slug)}
          className="outline-offset-4 hover:text-indigo"
        >
          {job.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate sm:text-[15px]">
        {job.summary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[#f7f3ea] px-3 py-1.5 text-xs font-semibold text-ink">
          <MapPin size={13} aria-hidden />
          {careersOffice.shortLabel}
        </li>
        <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[#f7f3ea] px-3 py-1.5 text-xs font-semibold text-ink">
          <BriefcaseBusiness size={13} aria-hidden />
          {job.type}
        </li>
        <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[#f7f3ea] px-3 py-1.5 text-xs font-semibold text-ink">
          <Clock3 size={13} aria-hidden />
          {job.experience}
        </li>
        <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[#f7f3ea] px-3 py-1.5 text-xs font-semibold text-ink">
          {job.workMode}
        </li>
      </ul>
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
        <CareerApplyButton
          job={job}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-[14px] bg-ink px-5 py-3 text-sm font-bold text-paper sm:w-auto"
        >
          Apply
        </CareerApplyButton>
        <Link
          href={careerPath(job.slug)}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] border-2 border-ink/80 text-sm font-bold text-ink hover:text-indigo sm:w-auto sm:justify-start sm:border-0 sm:min-h-11"
        >
          View Position
          <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
        </Link>
      </div>
    </li>
  );
}
