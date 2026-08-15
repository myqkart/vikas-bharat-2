import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import GrantPageHero from "@/components/GrantPageHero";
import GrantPageUnlock from "@/components/GrantPageUnlock";
import GrantPageCategories from "@/components/GrantPageCategories";
import GrantPageServices from "@/components/GrantPageServices";
import GrantPageProcess from "@/components/GrantPageProcess";
import FAQ from "@/components/FAQ";
import ServicePageConnect from "@/components/ServicePageConnect";
import { nbfcFaq, nbfcPage, site } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: `NBFC Financing Solutions | ${site.companyName}`,
  description:
    "Banks said no — or just too slow? Faster NBFC approvals, flexible eligibility, and specialised products from a 25+ partner network — working capital, machinery, LAP and invoice discounting.",
};

export default function NbfcPage() {
  return (
    <SiteChrome>
      <GrantPageHero
        data={nbfcPage}
        images={{
          primary: photos.aboutServiceNbf,
          secondary: photos.serviceLoan,
          circle: photos.schemeMudra,
          secondaryAlt: "Working-capital and NBFC documentation",
          circleAlt: "Faster disbursement for MSME financing",
        }}
        whatsappText="Hi, I want NBFC loan options for my business."
      />
      <GrantPageUnlock
        data={nbfcPage.unlock}
        image={{
          src: photos.aboutServiceLoans,
          alt: "Advisor matching a founder to NBFC partners",
        }}
      />
      <GrantPageCategories
        data={nbfcPage.categories}
        sectionId="nbfc-products"
      />
      <GrantPageCategories
        data={nbfcPage.audience}
        sectionId="nbfc-audience"
      />
      <GrantPageProcess data={nbfcPage.process} sectionId="nbfc-process" />
      <GrantPageServices
        data={nbfcPage.services}
        sectionId="nbfc-why-choose"
      />
      <GrantPageServices
        data={nbfcPage.ecosystem}
        sectionId="nbfc-ecosystem"
      />
      <FAQ data={nbfcFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
