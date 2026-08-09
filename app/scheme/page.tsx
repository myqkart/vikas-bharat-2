import SiteChrome from "@/components/SiteChrome";
import DummyPage from "@/components/DummyPage";
import { photos } from "@/lib/photos";

export default function SchemePage() {
  return (
    <SiteChrome>
      <DummyPage
        eyebrow="02 / Scheme"
        title="Government schemes, matched to you."
        description="Mudra, PMEGP, Startup India, and more — scheme desk page coming soon."
        image={photos.schemeMudra}
        imageAlt="Documents and scheme paperwork on a desk"
      />
    </SiteChrome>
  );
}
