import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aarohan Finance",
  description:
    "Founded in 2016, Aarohan Finance is committed to making MSME loans, business funding, and government subsidies accessible and transparent across India.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
