import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  MapPin,
} from "lucide-react";
import { CareerApplyButton } from "@/components/CareerApplyModal";
import CareerRoleCard from "@/components/CareerRoleCard";
import {
  careersOffice,
  careersPage,
  getRelatedCareerRoles,
  type CareerRole,
} from "@/lib/careers";

function BulletSection({
  heading,
  items,
  accent = "marigold",
}: {
  heading: string;
  items: readonly string[];
  accent?: "marigold" | "indigo";
}) {
  if (items.length === 0) return null;
  const dot = accent === "indigo" ? "bg-indigo" : "bg-marigold";

  return (
    <section className="mt-8">
      <h2 className="text-sm font-bold text-ink">{heading}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2 text-[15px] leading-relaxed text-slate"
          >
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CareerJobPage({ job }: { job: CareerRole }) {
  const related = getRelatedCareerRoles(job.slug);

  return (
    <>
      <article>
        <section className="relative isolate overflow-hidden border-b border-border bg-paper px-5 py-12 sm:px-8 sm:py-16 lg:py-24">
          <Image
            src={careersPage.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none -z-20 object-cover opacity-[0.12]"
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(245,166,35,0.17),transparent_29%),radial-gradient(circle_at_85%_10%,rgba(30,62,114,0.14),transparent_33%)]" />
          <div className="mx-auto max-w-[820px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-marigold-dark">
              {job.department}
            </p>
            <h1 className="mt-3 font-display text-[1.85rem] font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {job.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
              {job.summary}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink">
                <MapPin size={13} aria-hidden />
                {careersOffice.shortLabel}
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink">
                <BriefcaseBusiness size={13} aria-hidden />
                {job.type}
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink">
                <Clock3 size={13} aria-hidden />
                {job.experience}
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink">
                {job.workMode}
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink">
                {job.jobType}
              </li>
            </ul>
            <a
              href={careersOffice.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex max-w-xl items-start gap-2 text-sm leading-relaxed text-slate hover:text-indigo"
            >
              <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
              {job.location}
            </a>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CareerApplyButton job={job}>
                Apply for this role
                <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
              </CareerApplyButton>
              <Link
                href="/careers#openings"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] border-2 border-ink/80 bg-white/80 px-6 py-3 text-sm font-bold text-ink sm:w-auto"
              >
                All openings
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3ea] px-5 py-12 sm:px-8 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[820px] rounded-[24px] border border-[#ebe4d6] bg-white p-5 shadow-card sm:p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-marigold-dark">
              Role overview
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate sm:text-base">
              {job.overview}
            </p>
            <BulletSection
              heading="Responsibilities"
              items={job.responsibilities}
            />
            <BulletSection
              heading="Requirements"
              items={job.requirements}
              accent="indigo"
            />
            {job.preferred ? (
              <BulletSection
                heading="Preferred qualifications"
                items={job.preferred}
              />
            ) : null}
            {job.youWillDoWell ? (
              <BulletSection
                heading="What you'll do well"
                items={job.youWillDoWell}
              />
            ) : null}
            <section className="mt-8 border-t border-[#ebe4d6] pt-6">
              <h2 className="text-sm font-bold text-ink">Compensation</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate">
                {job.compensation}
              </p>
            </section>
            <CareerApplyButton job={job} className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-ink px-6 py-3 text-sm font-bold text-paper sm:w-auto">
              Apply with resume
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
            </CareerApplyButton>
          </div>
        </section>
      </article>

      {related.length > 0 ? (
        <section className="bg-paper px-5 py-12 sm:px-8 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-marigold-dark">
              Open roles
            </p>
            <h2 className="mt-3 text-center font-display text-[1.75rem] font-semibold text-ink sm:text-4xl">
              Other openings
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-slate sm:text-base">
              More full-time desks in Noida if this role is not the right
              fit.
            </p>
            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <CareerRoleCard key={item.slug} job={item} />
              ))}
            </ul>
            <p className="mt-8 text-center">
              <Link
                href="/careers#openings"
                className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-indigo"
              >
                View all openings
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
              </Link>
            </p>
          </div>
        </section>
      ) : null}
    </>
  );
}
