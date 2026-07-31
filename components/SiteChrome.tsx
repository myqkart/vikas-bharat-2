import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageEntrance from "@/components/motion/PageEntrance";
import ScrollProgress from "@/components/motion/ScrollProgress";
import ScrollReset from "@/components/ScrollReset";
import SplashGate from "@/components/SplashScreen";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SplashGate>
      {/* Fixed UI must sit outside PageEntrance — transforms break position:fixed */}
      <ScrollReset />
      <ScrollProgress />
      <Header />
      <PageEntrance>
        <main className="relative flex-1">{children}</main>
        <Footer />
      </PageEntrance>
      <WhatsAppFloat />
    </SplashGate>
  );
}
