import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import PageEntrance from "@/components/motion/PageEntrance";
import ScrollProgress from "@/components/motion/ScrollProgress";
import ScrollReset from "@/components/ScrollReset";
import MarketingLeadModal from "@/components/MarketingLeadModal";
import SplashGate from "@/components/SplashScreen";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SplashGate>
      {/* Fixed UI must sit outside PageEntrance — transforms break position:fixed */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-paper"
      >
        Skip to content
      </a>
      <ScrollReset />
      <ScrollProgress />
      <Header />
      <PageEntrance>
        <main id="main-content" className="relative flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </PageEntrance>
      <WhatsAppFloat />
      <MarketingLeadModal />
      <ScrollToTop />
    </SplashGate>
  );
}
