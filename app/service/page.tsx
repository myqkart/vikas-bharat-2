import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import ServicePageHero from "@/components/ServicePageHero";
import ServicePageFunding from "@/components/ServicePageFunding";
import ServicePageCatalog from "@/components/ServicePageCatalog";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import ServicePageConnect from "@/components/ServicePageConnect";
import { serviceFaq, servicePage } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  jsonLdGraph,
  webPageJsonLd,
} from "@/lib/seo";

const title = "Business Consulting Services";
const description = servicePage.intro;
const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/service" },
];

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/service",
  image: servicePage.image,
  imageAlt: servicePage.imageAlt,
});

export default function ServicePage() {
  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: "/service",
            title: `${title} | VIKASBHART`,
            description,
            type: "CollectionPage",
          }),
          breadcrumbJsonLd(breadcrumbs),
          faqJsonLd(serviceFaq.items),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
      <ServicePageHero />
      <ServicePageFunding />
      <ServicePageCatalog />
      <FAQ data={serviceFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
