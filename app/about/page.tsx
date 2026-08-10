import SiteChrome from "@/components/SiteChrome";
import AboutHero from "@/components/AboutHero";
import CompanyMission from "@/components/CompanyMission";
import CoreValues from "@/components/CoreValues";
import AboutServicesOverview from "@/components/AboutServicesOverview";
import AboutProcess from "@/components/AboutProcess";
import AboutRecognition from "@/components/AboutRecognition";
import AboutWhyChoose from "@/components/AboutWhyChoose";
import FAQ from "@/components/FAQ";

export default function AboutPage() {
  return (
    <SiteChrome>
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
