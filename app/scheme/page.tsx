import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import SchemePageHero from "@/components/SchemePageHero";
import SchemePageCatalog from "@/components/SchemePageCatalog";
import SchemePageStats from "@/components/SchemePageStats";
import SchemePageSpecialized from "@/components/SchemePageSpecialized";
import FAQ from "@/components/FAQ";
import ServicePageConnect from "@/components/ServicePageConnect";
import { schemeFaq } from "@/lib/content";

export const metadata: Metadata = {
  title: "Government Schemes | VIKASBHART",
  description:
    "Comprehensive guide to 50+ government funding schemes, subsidies, tax benefits and support programs for startups, MSMEs and entrepreneurs across India.",
};

export default function SchemePage() {
  return (
    <SiteChrome>
      <SchemePageHero />
      <SchemePageCatalog />
      <SchemePageStats />
      <SchemePageSpecialized />
      <FAQ data={schemeFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
