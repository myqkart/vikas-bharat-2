import SiteChrome from "@/components/SiteChrome";
import AboutHero from "@/components/AboutHero";
import CompanyMission from "@/components/CompanyMission";
import CoreValues from "@/components/CoreValues";
import AboutServices from "@/components/AboutServices";
import AboutJourney from "@/components/AboutJourney";
import AboutCertifications from "@/components/AboutCertifications";

export default function AboutPage() {
  return (
    <SiteChrome>
      <AboutHero />
      <CompanyMission />
      <CoreValues />
      <AboutServices />
      <AboutJourney />
      <AboutCertifications />
    </SiteChrome>
  );
}



