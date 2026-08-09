import SiteChrome from "@/components/SiteChrome";
import AboutHero from "@/components/AboutHero";
import CompanyMission from "@/components/CompanyMission";
import CoreValues from "@/components/CoreValues";
import AboutMilestones from "@/components/AboutMilestones";
import FinalCTA from "@/components/FinalCTA";

export default function AboutPage() {
  return (
    <SiteChrome>
      <AboutHero />
      <CompanyMission />
      <CoreValues />
      <AboutMilestones />
      <FinalCTA />
    </SiteChrome>
  );
}
