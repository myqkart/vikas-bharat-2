import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import JsonLd from "@/components/JsonLd";
import MissionTrees from "@/components/MissionTrees";
import Network from "@/components/Network";
import Passbook from "@/components/Passbook";
import Resources from "@/components/Resources";
import Services from "@/components/Services";
import SiteChrome from "@/components/SiteChrome";
import StartupStats from "@/components/StartupStats";
import Testimonials from "@/components/Testimonials";
import TrustStrip from "@/components/TrustStrip";
import { faq } from "@/lib/content";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  buildMetadata,
  faqJsonLd,
  jsonLdGraph,
  webPageJsonLd,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
  image: DEFAULT_OG_IMAGE,
  absoluteTitle: true,
});

export default function Home() {
  return (
    <SiteChrome>
      <JsonLd
        data={jsonLdGraph([
          webPageJsonLd({
            path: "/",
            title: DEFAULT_TITLE,
            description: DEFAULT_DESCRIPTION,
          }),
          faqJsonLd(faq.items),
        ])}
      />
      <div id="home">
        <Hero />
      </div>

      <TrustStrip />
      <Passbook />
      <StartupStats />
      <Network />
      <MissionTrees />
      <About />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <Resources />
      <FAQ />
      <FinalCTA />
    </SiteChrome>
  );
}
