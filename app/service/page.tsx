import SiteChrome from "@/components/SiteChrome";
import DummyPage from "@/components/DummyPage";
import { photos } from "@/lib/photos";

export default function ServicePage() {
  return (
    <SiteChrome>
      <DummyPage
        eyebrow="01 / Service"
        title="Business services, one desk."
        description="Registration, funding, certifications, marketing, and legal support — full page coming soon."
        image={photos.serviceRegistration}
        imageAlt="Consultant reviewing business registration documents"
      />
    </SiteChrome>
  );
}
