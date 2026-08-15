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
import { grantFaq, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Government Grants | ${site.companyName}`,
  description:
    "Access non-repayable government funding with specialised grants consultancy — scheme identification, eligibility, proposals, documentation and follow-up for MSMEs and startups.",
};

export default function GrantPage() {
  return (
    <SiteChrome>
      <GrantPageHero />
      <GrantPageUnlock />
      <GrantPageCategories />
      <GrantPageServices />
      <GrantPageProcess />
      <GrantPageDocuments />
      <FAQ data={grantFaq} />
      <ServicePageConnect />
    </SiteChrome>
  );
}
