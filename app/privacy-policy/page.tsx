import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { privacyPolicy } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  path: privacyPolicy.path,
});

export default function PrivacyPolicyPage() {
  return <LegalDocument document={privacyPolicy} />;
}
