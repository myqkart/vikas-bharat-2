import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page is not available. Return to Vikas Bharat for services, government schemes and MSME guides.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: { index: false, follow: true, noimageindex: true },
  },
};

export default function NotFound() {
  return (
    <SiteChrome>
      <section className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-marigold-dark">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
          This page is not on the desk
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
          The link may be old or typed incorrectly. Start from a public page
          below.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          <li>
            <Link
              href="/"
              className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-paper"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/service"
              className="inline-flex rounded-full border border-ink/20 bg-white px-5 py-2.5 text-sm font-bold text-ink"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/scheme"
              className="inline-flex rounded-full border border-ink/20 bg-white px-5 py-2.5 text-sm font-bold text-ink"
            >
              Government schemes
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-ink/20 bg-white px-5 py-2.5 text-sm font-bold text-ink"
            >
              Contact
            </Link>
          </li>
        </ul>
      </section>
    </SiteChrome>
  );
}
