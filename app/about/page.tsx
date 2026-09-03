import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import AboutHero from "@/components/AboutHero";
import CompanyMission from "@/components/CompanyMission";
import CoreValues from "@/components/CoreValues";
import AboutServicesOverview from "@/components/AboutServicesOverview";
import AboutProcess from "@/components/AboutProcess";
import AboutRecognition from "@/components/AboutRecognition";
import AboutWhyChoose from "@/components/AboutWhyChoose";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { photos } from "@/lib/photos";
import {
  buildMetadata,
  jsonLdGraph,
  webPageJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

const title = "About Us";
const description =
  "Vikas Bharat is a private consultancy helping Indian startups and MSMEs with registrations, loans, government schemes, certifications and business growth — Sapno Se Safalta Tak.";
const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
];

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/about",
  image: photos.aboutTeam,
  imageAlt: "Vikas Bharat team advising founders",
});

export default function AboutPage() {
  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: "/about",
            title: `${title} | VIKASBHARAT`,
            description,
            type: "AboutPage",
          }),
          breadcrumbJsonLd(breadcrumbs),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
      <AboutHero />
      <CompanyMission />
      <CoreValues />
      <AboutServicesOverview />
      <AboutProcess />
      <AboutRecognition />
      <AboutWhyChoose />
      <FAQ />
    </SiteChrome>
  );
}
