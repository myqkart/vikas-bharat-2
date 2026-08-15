import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import ImageChecklist from "@/components/ImageChecklist";
import SiteChrome from "@/components/SiteChrome";
import ServiceDeskPage from "@/components/ServiceDeskPage";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  site,
} from "@/lib/content";
import {
  getAllServiceDeskSlugs,
  getServiceDesk,
} from "@/lib/serviceDesks";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const slugs = new Set([
    ...getAllServiceSlugs(),
    ...getAllServiceDeskSlugs(),
  ]);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const desk = getServiceDesk(slug);
  if (desk) {
    return { title: desk.title, description: desk.description };
  }
  const service = getServiceBySlug(slug);
  if (!service) return { title: site.companyName };
  return {
    title: `${service.title} | ${site.companyName}`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const desk = getServiceDesk(slug);
  if (desk) {
    return (
      <SiteChrome>
        <ServiceDeskPage desk={desk} />
      </SiteChrome>
    );
  }

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <SiteChrome>
      <Hero
        eyebrow="Service"
        headline={service.title}
        subhead={service.summary}
        image={{
          src: service.image,
          alt: `${service.title} — ${service.subtitle}`,
        }}
        floatingProof={null}
        showCtas={false}
        aspectClass="aspect-[4/5]"
      />

      <section className="px-5 pb-8 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
          <div className="rounded-[14px] border border-border bg-white p-5 shadow-card md:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Benefits
            </h2>
            <ul className="mt-4 space-y-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-charcoal">
                  <span className="font-bold text-success">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[14px] bg-ink p-5 text-paper shadow-card">
            <p className="text-sm font-bold text-marigold">Typical timeline</p>
            <p className="mt-2 font-display text-xl font-semibold">
              {service.timeline}
            </p>
            <p className="mt-4 text-sm text-paper/75">{service.subtitle}</p>
          </div>
        </div>
      </section>

      <ImageChecklist items={[...service.includes]} />

      <section className="px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
          <div className="rounded-[14px] border border-border bg-paper-deep/80 p-6 shadow-card">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Documents required
            </h2>
            <ul className="mt-4 space-y-2">
              {service.documents.map((d) => (
                <li key={d} className="text-sm font-semibold text-charcoal">
                  • {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[14px] border border-border bg-white p-6 shadow-card">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Service FAQs
            </h2>
            <dl className="mt-4 space-y-4">
              {service.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="text-sm font-bold text-ink">{f.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate">
                    {f.a}
                  </dd>
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
