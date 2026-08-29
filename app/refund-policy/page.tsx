import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { refundPolicy } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: refundPolicy.title,
  description: refundPolicy.description,
  path: refundPolicy.path,
});

export default function RefundPolicyPage() {
  return <LegalDocument document={refundPolicy} />;
}
