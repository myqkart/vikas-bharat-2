import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import GrantPageHero from "@/components/GrantPageHero";
import GrantPageUnlock from "@/components/GrantPageUnlock";
import GrantPageCategories from "@/components/GrantPageCategories";
import GrantPageServices from "@/components/GrantPageServices";
import GrantPageProcess from "@/components/GrantPageProcess";
import GrantPageDocuments from "@/components/GrantPageDocuments";
import FAQ from "@/components/FAQ";
import ServicePageConnect from "@/components/ServicePageConnect";
import { loanFaq, loanPage, site } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: `Business Loans | ${site.companyName}`,
  description:
    "Get access to government-backed loans, bank and NBFC financing, and expert financial guidance to grow your MSME or startup.",
};

export default function LoanPage() {
  return (
    <SiteChrome>
      <GrantPageHero
        data={loanPage}
        images={{
          primary: photos.serviceLoan,
          secondary: photos.schemeMudra,
          circle: photos.schemeGuarantee,
          secondaryAlt: "MUDRA and working-capital documentation",
          circleAlt: "Collateral-free CGTMSE credit support",
        }}
        whatsappText="Hi, I want to start my business loan funding journey."
      />
      <GrantPageUnlock
        data={loanPage.unlock}
        image={{
          src: photos.aboutServiceLoans,
          alt: "Advisor matching a founder to business loan options",
        }}
      />
      <GrantPageCategories
        data={loanPage.categories}
        sectionId="loan-products"
      />
      <GrantPageServices
        data={loanPage.services}
        sectionId="loan-why-choose"
      />
      <GrantPageProcess data={loanPage.process} sectionId="loan-process" />
      <GrantPageDocuments
        data={loanPage.documents}
        sectionId="loan-documents"
        whatsappText="Hi, please send me the business loan documents checklist."
      />
      <GrantPageCategories data={loanPage.schemes} sectionId="loan-schemes" />
      <FAQ data={loanFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
