export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "cards"; items: Record<string, string>[] }
  | { type: "callout"; heading: string; text: string };

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateIso: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  takeaways: string[];
  relatedHref: string;
  relatedLabel: string;
  blocks: BlogBlock[];
  toc: { id: string; text: string }[];
  faqs: BlogFaqItem[];
};

export type BlogListPost = Omit<BlogPost, "blocks" | "toc" | "faqs">;

export const blogsPage = {
  eyebrow: "Knowledge Desk",
  heading: "Guides for founders & MSMEs",
  intro:
    "Practical articles on registration, loans, GST, schemes and compliance — written the way we explain it on a call. Padho, phir poochho.",
  cta: "Browse articles",
  catalogCta: "Talk on WhatsApp",
  imageAlt: "Advisor reviewing business guides with a founder",
  catalog: {
    eyebrow: "Latest from the desk",
    heading: "Read what founders actually ask",
    sub: "Search a scheme, licence or loan type. Every guide ends with a clear next step — not a maze of links.",
    searchPlaceholder: "Search GST, Mudra, Udyam, FSSAI…",
    empty: "No guides match that search. Try a category, or WhatsApp the desk.",
  },
  topics: {
    eyebrow: "What we write about",
    heading: "Pick a desk. Start reading.",
    sub: "Same topics we handle on WhatsApp — explained before you send a document.",
  },
} as const;

export const blogFaq = {
  heading: "Before you open a guide",
  sub: "Short answers on how we write, what to do after you read, and when to call the desk.",
  items: [
    {
      question: "Are these official government articles?",
      answer:
        "No. Vikas Bharat is a private consultancy. Guides explain how schemes, loans and licences usually work in practice. Always confirm current portal rules before you file — we help you do that on the desk.",
    },
    {
      question: "Can I apply from the blog itself?",
      answer:
        "The article gives you the map. Application still happens on official portals or with a lender. Use WhatsApp or the enquiry form when you want us to run the file with you.",
    },
    {
      question: "How often are guides updated?",
      answer:
        "We refresh when scheme rules, documents or our desk process change. Dates sit on every card. If something looks old, message us — live eligibility beats a screenshot.",
    },
    {
      question: "Do I need documents before reading?",
      answer:
        "No. Read first. When you are ready, we send a checklist for that exact product so you do not collect the wrong papers.",
    },
    {
      question: "Will you write about my industry?",
      answer:
        "Tell us the sector on WhatsApp. If it is a common MSME path — food, retail, manufacturing, services — we already have a desk. If not, we still map the closest scheme and licence route.",
    },
  ],
} as const;
