import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EligibilityList from "@/components/EligibilityList";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import SiteChrome from "@/components/SiteChrome";
import {
  getAllSchemeSlugs,
  getSchemeBySlug,
  site,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSchemeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const scheme = getSchemeBySlug(slug);
  if (!scheme) return { title: site.companyName };
  return {
    title: `${scheme.name} | ${site.companyName}`,
    description: scheme.longDescription,
  };
}

export default async function SchemeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const scheme = getSchemeBySlug(slug);
  if (!scheme) notFound();

  return (
    <SiteChrome>
      <Hero
        eyebrow={scheme.tag}
        headline={scheme.name}
        subhead={scheme.longDescription}
        image={{
          src: scheme.image,
          alt: `${scheme.name} — ${scheme.tag}, ${scheme.amount}`,
        }}
        floatingProof={null}
        showCtas={false}
        aspectClass="aspect-[16/10]"
      />

      <section className="px-5 pb-8 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[13px] font-semibold tracking-wide text-slate">
            Amount
          </p>
          <p className="mt-2 font-display text-5xl font-bold leading-none text-success sm:text-6xl lg:text-7xl">
            {scheme.amount}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal">
            {scheme.longDescription}
          </p>
          <p className="mt-3 text-sm font-bold text-indigo">
            Timeline: {scheme.timeline}
          </p>
        </div>
      </section>

      <EligibilityList items={[...scheme.eligibility]} />

      <section className="px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-3">
          <div className="rounded-[14px] border border-border bg-white p-6 shadow-card lg:col-span-1">
            <h2 className="font-display text-xl font-semibold text-ink">
              Key benefits
            </h2>
            <ul className="mt-4 space-y-2">
              {scheme.benefits.map((b) => (
                <li key={b} className="text-sm text-charcoal">
                  ✓ {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[14px] bg-paper-deep p-6 shadow-card lg:col-span-1">
            <h2 className="font-display text-xl font-semibold text-ink">
              Documents
            </h2>
            <ul className="mt-4 space-y-2">
              {scheme.documents.map((d) => (
                <li key={d} className="text-sm font-semibold text-charcoal">
                  • {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[14px] border border-border bg-white p-6 shadow-card lg:col-span-1">
            <h2 className="font-display text-xl font-semibold text-ink">
              Scheme FAQs
            </h2>
            <dl className="mt-4 space-y-3">
              {scheme.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="text-sm font-bold text-ink">{f.q}</dt>
                  <dd className="mt-1 text-sm text-slate">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteChrome>
  );
}
