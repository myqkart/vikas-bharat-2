import SiteChrome from "@/components/SiteChrome";
import DummyPage from "@/components/DummyPage";
import { photos } from "@/lib/photos";

export default function ContactPage() {
  return (
    <SiteChrome>
      <DummyPage
        eyebrow="04 / Contact"
        title="Talk to the Vikas Bharat desk."
        description="WhatsApp, phone, and walk-in offices — full contact page coming soon."
        image={photos.heroMeeting}
        imageAlt="Advisor speaking with a business owner"
      />
    </SiteChrome>
  );
}
