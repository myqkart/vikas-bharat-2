import SiteChrome from "@/components/SiteChrome";
import DummyPage from "@/components/DummyPage";
import { photos } from "@/lib/photos";

export default function BlogsPage() {
  return (
    <SiteChrome>
      <DummyPage
        eyebrow="03 / Blogs"
        title="Guides for founders & MSMEs."
        description="Practical articles on registration, loans, and compliance — blog index coming soon."
        image={photos.aboutOffice}
        imageAlt="Workspace with guides and planning notes"
      />
    </SiteChrome>
  );
}
