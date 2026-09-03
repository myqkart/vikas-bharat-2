import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import SiteChrome from "@/components/SiteChrome";
import ServiceDeskPage from "@/components/ServiceDeskPage";
import {
  getIndexableSchemeSlugs,
  getSchemeDesk,
} from "@/lib/schemeDesks";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  getRelatedSchemeLinks,
  getRelatedServiceLinksForScheme,
  jsonLdGraph,
  metaDescription,
  schemePath,
  schemeServiceJsonLd,
  shortTitle,
  webPageJsonLd,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getIndexableSchemeSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const desk = getSchemeDesk(slug);
  if (!desk) return { title: "Scheme not found", robots: { index: false } };
  return buildMetadata({
    title: desk.title,
    description: desk.description,
    path: schemePath(slug),
    image: desk.hero.images.primary,
    imageAlt: desk.hero.data.imageAlt,
  });
}

export default async function SchemeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const desk = getSchemeDesk(slug);
  if (!desk) notFound();

  const title = shortTitle(desk.title);
  const description = metaDescription(desk.description);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Government Schemes", path: "/scheme" },
    { name: title, path: schemePath(slug) },
  ];
  const related = [
    ...getRelatedSchemeLinks(slug, 4),
    ...getRelatedServiceLinksForScheme(slug),
  ];

  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: schemePath(slug),
            title: `${title} | VIKASBHARAT`,
            description,
          }),
          breadcrumbJsonLd(breadcrumbs),
          schemeServiceJsonLd({
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
        relatedHeading="Related schemes and services"
        relatedSub="Other government programs and desks that often sit next to this one."
        relatedItems={related.slice(0, 4)}
      />
    </SiteChrome>
  );
}
