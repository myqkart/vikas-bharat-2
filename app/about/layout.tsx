import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | VIKASBHART",
  description:
    "Vikas Bharat helps Indian startups and MSMEs with registrations, loans, government schemes, and business growth — Sapno Se Safalta Tak.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
