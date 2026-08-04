import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

import MissionTrees from "@/components/MissionTrees";
import Network from "@/components/Network";
import Passbook from "@/components/Passbook";
import Resources from "@/components/Resources";
import Schemes from "@/components/Schemes";
import Services from "@/components/Services";
import SiteChrome from "@/components/SiteChrome";
import StartupStats from "@/components/StartupStats";
import Testimonials from "@/components/Testimonials";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <SiteChrome>
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
      <Schemes />
      <CaseStudies />
      <Testimonials />
      <Resources />
      <FAQ />
      <FinalCTA />
    </SiteChrome>
  );
}
