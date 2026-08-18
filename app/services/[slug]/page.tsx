import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import ImageChecklist from "@/components/ImageChecklist";
import JsonLd from "@/components/JsonLd";
import RelatedDesks from "@/components/RelatedDesks";
import SiteChrome from "@/components/SiteChrome";
import ServiceDeskPage from "@/components/ServiceDeskPage";
import { getServiceBySlug } from "@/lib/content";
import { getServiceDesk } from "@/lib/serviceDesks";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  getIndexableServiceSlugs,
  getRelatedServiceLinks,
  jsonLdGraph,
  metaDescription,
  serviceJsonLd,
  servicePath,
  shortTitle,
  webPageJsonLd,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getIndexableServiceSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const desk = getServiceDesk(slug);
  if (desk) {
    return buildMetadata({
      title: desk.title,
      description: desk.description,
      path: servicePath(slug),
      image: desk.hero.images.primary,
      imageAlt: desk.hero.data.imageAlt,
    });
  }
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found", robots: { index: false } };
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: servicePath(slug),
    image: service.image,
    imageAlt: `${service.title} — ${service.subtitle}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const desk = getServiceDesk(slug);
  if (desk) {
    const title = shortTitle(desk.title);
    const description = metaDescription(desk.description);
    const breadcrumbs = [
      { name: "Home", path: "/" },
      { name: "Services", path: "/service" },
      { name: title, path: servicePath(slug) },
    ];
    return (
      <SiteChrome>
        <JsonLd
          data={jsonLdGraph([
            webPageJsonLd({
              path: servicePath(slug),
              title: `${title} | VIKASBHART`,
              description,
            }),
            breadcrumbJsonLd(breadcrumbs),
            serviceJsonLd({
              slug,
              name: title,
              description,
              image: desk.hero.images.primary,
            }),
            faqJsonLd(desk.faq.items),
          ])}
        />
        <Breadcrumbs items={breadcrumbs} />
        <ServiceDeskPage
          desk={desk}
          relatedHeading="Related services"
          relatedSub="Other desks founders usually combine with this work."
          relatedItems={getRelatedServiceLinks(slug)}
        />
      </SiteChrome>
    );
  }

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const title = service.title;
  const description = metaDescription(service.summary);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: title, path: servicePath(slug) },
  ];

  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: servicePath(slug),
            title: `${title} | VIKASBHART`,
            description,
          }),
          breadcrumbJsonLd(breadcrumbs),
          serviceJsonLd({
            slug,
            name: title,
            description,
            image: service.image,
          }),
          faqJsonLd(
            service.faqs.map((item) => ({
              question: item.q,
              answer: item.a,
            })),
          ),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
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

      <RelatedDesks
        heading="Related services"
        items={getRelatedServiceLinks(slug)}
      />
      <FinalCTA />
    </SiteChrome>
  );
}
