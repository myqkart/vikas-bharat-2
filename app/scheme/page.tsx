import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import SchemePageHero from "@/components/SchemePageHero";
import SchemePageCatalog from "@/components/SchemePageCatalog";
import SchemePageStats from "@/components/SchemePageStats";
import SchemePageSpecialized from "@/components/SchemePageSpecialized";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import ServicePageConnect from "@/components/ServicePageConnect";
import { schemeFaq, schemePage } from "@/lib/content";
import { getIndexableSchemeSlugs, getSchemeDesk } from "@/lib/schemeDesks";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  itemListJsonLd,
  jsonLdGraph,
  schemePath,
  shortTitle,
  webPageJsonLd,
} from "@/lib/seo";

const title = "Government Schemes";
const description = schemePage.intro;
const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Government Schemes", path: "/scheme" },
];

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/scheme",
  image: schemePage.catalog.items[0]?.image,
  imageAlt: schemePage.imageAlt,
});

export default function SchemePage() {
  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: "/scheme",
            title: `${title} | VIKASBHARAT`,
            description,
            type: "CollectionPage",
          }),
          breadcrumbJsonLd(breadcrumbs),
          faqJsonLd(schemeFaq.items),
          itemListJsonLd(
            getIndexableSchemeSlugs()
              .map((slug) => {
                const desk = getSchemeDesk(slug);
                if (!desk) return null;
                return { name: shortTitle(desk.title), path: schemePath(slug) };
              })
              .filter((item): item is { name: string; path: string } => Boolean(item)),
          ),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
      <SchemePageHero />
      <SchemePageCatalog />
      <SchemePageStats />
      <SchemePageSpecialized />
      <FAQ data={schemeFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
