import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CareerRoleCard from "@/components/CareerRoleCard";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import SiteChrome from "@/components/SiteChrome";
import {
  careerFaq,
  careerPath,
  careerRoles,
  careersOffice,
  careersPage,
} from "@/lib/careers";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  itemListJsonLd,
  jsonLdGraph,
  webPageJsonLd,
} from "@/lib/seo";

const title = "Careers";
const description =
  "MSME loan sales, business development and operations openings at the Vikas Bharat Noida desk — apply with your resume for full-time, on-site roles.";
const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
];

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/careers",
  image: careersPage.image,
  imageAlt: careersPage.imageAlt,
  keywords: [
    "Vikas Bharat careers",
    "MSME loan jobs Noida",
    "NBFC sales jobs Sector 63",
    "loan processing jobs Noida",
  ],
});

export default function CareersPage() {
  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: "/careers",
            title: `${title} | VIKASBHART`,
            description,
            type: "CollectionPage",
          }),
          breadcrumbJsonLd(breadcrumbs),
          faqJsonLd(careerFaq.items),
          itemListJsonLd(
            careerRoles.map((job) => ({
              name: job.title,
              path: careerPath(job.slug),
            })),
          ),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="relative isolate overflow-hidden border-b border-border bg-paper px-5 py-12 sm:px-8 sm:py-20 lg:py-28">
        <Image
          src={careersPage.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none -z-20 object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(245,166,35,0.17),transparent_29%),radial-gradient(circle_at_85%_10%,rgba(30,62,114,0.14),transparent_33%)]" />
        <div className="mx-auto max-w-[900px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-marigold/35 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-card">
            <span className="h-2 w-2 rounded-full bg-success" />
            {careersPage.locationLabel}
          </span>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-marigold-dark">
            {careersPage.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-[2rem] font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {careersPage.heading}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            {careersPage.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#openings"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-ink px-6 py-3 text-sm font-bold text-paper"
            >
              View openings
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
            </a>
          </div>
          <a
            href={careersPage.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex max-w-xl items-center justify-center gap-2 text-sm font-semibold text-slate hover:text-indigo"
          >
            <MapPin size={16} aria-hidden />
            {careersOffice.address}
          </a>
        </div>
      </section>

      <section
        id="openings"
        className="bg-[#f7f3ea] px-5 py-12 sm:px-8 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1100px]">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-marigold-dark">
            Open roles
          </p>
          <h2 className="mt-3 text-center font-display text-[1.75rem] font-semibold text-ink sm:text-4xl">
            MSME loan roles in Noida
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-slate sm:text-base">
            Three full-time, on-site openings. Apply on a role to send your
            resume, or open the position for the full brief.
          </p>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerRoles.map((job) => (
              <CareerRoleCard key={job.slug} job={job} />
            ))}
          </ul>
        </div>
      </section>

      <FAQ data={careerFaq} />
    </SiteChrome>
  );
}
