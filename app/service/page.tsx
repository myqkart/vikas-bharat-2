import SiteChrome from "@/components/SiteChrome";
import ServicePageHero from "@/components/ServicePageHero";
import ServicePageFunding from "@/components/ServicePageFunding";
import ServicePageCatalog from "@/components/ServicePageCatalog";
import FAQ from "@/components/FAQ";
import ServicePageConnect from "@/components/ServicePageConnect";
import { serviceFaq } from "@/lib/content";

export default function ServicePage() {
  return (
    <SiteChrome>
      <ServicePageHero />
      <ServicePageFunding />
      <ServicePageCatalog />
      <FAQ data={serviceFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
