import Image from "next/image";
import {
  FileCheck2,
  Handshake,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Scale,
  TrendingUp,
} from "lucide-react";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import FAQ from "@/components/FAQ";
import SiteChrome from "@/components/SiteChrome";
import { photos } from "@/lib/photos";
import { gmailComposeHref, site } from "@/lib/content";

const services = [
  { title: "Funding & Loans", text: "Schemes, loans and investor readiness", icon: Landmark },
  { title: "Registrations", text: "Company, GST and Udyam support", icon: FileCheck2 },
  { title: "Business Growth", text: "Strategy, scale-up and market access", icon: TrendingUp },
  { title: "Legal & Compliance", text: "Certificates, filings and advisory", icon: Scale },
  { title: "Startup Support", text: "DPIIT and early-stage guidance", icon: Rocket },
  { title: "Partnership Advisory", text: "Expert help for your next move", icon: Handshake },
] as const;

const contactFaq = {
  heading: "Before you contact us",
  sub: "Quick answers on response time, documents, office visits and what to expect.",
  items: [
    {
      question: "How quickly will an advisor contact me?",
      answer: "We aim to respond within one business day after reviewing your enquiry.",
    },
    {
      question: "Can I ask about more than one service?",
      answer: "Yes. Tell us about every requirement in the enquiry form and we will map the appropriate support path.",
    },
    {
      question: "Do I need documents before contacting you?",
      answer: "No. Start with your business idea or current requirement. Our team will share the relevant document checklist.",
    },
    {
      question: "Can I visit an office in person?",
      answer: "Yes. Please call ahead so the right specialist can be available for your visit.",
    },
  ],
} as const;

export default function ContactPage() {
  return (
    <SiteChrome>
      <section className="relative isolate overflow-hidden border-b border-border bg-paper px-5 py-20 sm:px-8 lg:py-28">
        <Image
          src={photos.heroGlow}
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none -z-20 object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(245,166,35,0.17),transparent_29%),radial-gradient(circle_at_85%_10%,rgba(30,62,114,0.14),transparent_33%)]" />
        <div className="mx-auto max-w-[900px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-marigold/35 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-card">
            <span className="h-2 w-2 rounded-full bg-success" />
            Advisor support across India
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Let&apos;s build your{" "}
            <span className="text-marigold-dark">success story</span> together.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            Tell us where your business is headed. From registration and
            compliance to funding and growth, the Vikas Bharat desk will help
            you find a clear next step.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-left shadow-card transition hover:-translate-y-1 hover:shadow-raised"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-success/15 text-success transition group-hover:bg-success group-hover:text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate">WhatsApp</span>
                <span className="block text-sm font-semibold text-ink">{site.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={`tel:${site.phoneNumber}`}
              className="group flex items-center justify-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-left shadow-card transition hover:-translate-y-1 hover:shadow-raised"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-marigold/20 text-marigold-dark transition group-hover:bg-marigold group-hover:text-ink">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate">Call</span>
                <span className="block text-sm font-semibold text-ink">{site.phoneDisplay}</span>
              </span>
            </a>
            {site.emails.map((item) => (
              <a
                key={item.address}
                href={gmailComposeHref(item.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-left shadow-card transition hover:-translate-y-1 hover:shadow-raised"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo/10 text-indigo transition group-hover:bg-indigo group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate">{item.label}</span>
                  <span className="block text-sm font-semibold text-ink">{item.address}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {site.social
              .filter((item) => item.label !== "WhatsApp")
              .map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:shadow-raised"
                >
                  {item.label}
                </a>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ea] px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-marigold-dark">
              One desk, many paths
            </p>
            <h2 className="mt-3 max-w-[520px] font-display text-[36px] font-semibold leading-[1.15] text-ink sm:text-[40px]">
              Everything your business needs to move forward.
            </h2>
            <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-slate">
              We start with your current stage, then make the process clearer:
              the right service, relevant schemes and a practical list of next
              actions.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-[16px] border border-[#ebe4d6] bg-white p-4 shadow-[0_4px_16px_rgba(18,41,77,0.04)]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-[10px] border border-[#e6dfd0] bg-[#f7f3ea] text-ink">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-3 text-[14px] font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-[12px] leading-snug text-slate">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-[18px]">
              <Image
                src={photos.storyConsult}
                alt="Vikas Bharat advisors in a business consultation"
                width={1000}
                height={667}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <ContactInquiryForm />
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-marigold-dark">Meet us nearby</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-ink">Our office desks</h2>
            <p className="mt-3 leading-relaxed text-slate">Walk in for a conversation or connect remotely from anywhere in India.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.offices.map((office) => (
              <article key={office.city} className="rounded-2xl border border-border bg-white p-5 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo/10 text-indigo">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{office.city}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{office.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ data={contactFaq} />
    </SiteChrome>
  );
}
