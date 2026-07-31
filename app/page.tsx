import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LogoMarquee from "@/components/LogoMarquee";
import Passbook from "@/components/Passbook";
import Resources from "@/components/Resources";
import Schemes from "@/components/Schemes";
import Services from "@/components/Services";
import SiteChrome from "@/components/SiteChrome";
import Testimonials from "@/components/Testimonials";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <SiteChrome>
      <div id="home">
        <Hero />
      </div>
      <LogoMarquee />
      <TrustStrip />
      <Passbook />
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
