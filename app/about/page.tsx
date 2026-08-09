import SiteChrome from "@/components/SiteChrome";
import AboutHero from "@/components/AboutHero";
import CompanyMission from "@/components/CompanyMission";
import CoreValues from "@/components/CoreValues";
import AboutServices from "@/components/AboutServices";
import AboutJourney from "@/components/AboutJourney";
import AboutCertifications from "@/components/AboutCertifications";
import AboutStories from "@/components/AboutStories";
import AboutFAQ from "@/components/AboutFAQ";

export default function AboutPage() {
  return (
    <SiteChrome>
      <AboutHero />
      <CompanyMission />
      <CoreValues />
      <AboutServices />
      <AboutJourney />
      <AboutCertifications />
      <AboutStories />
      <AboutFAQ />
    </SiteChrome>
  );
}



