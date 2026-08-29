import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { termsAndConditions } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: termsAndConditions.title,
  description: termsAndConditions.description,
  path: termsAndConditions.path,
});

export default function TermsAndConditionsPage() {
  return <LegalDocument document={termsAndConditions} />;
}
