import { photos } from "./photos";

export const blogCategories = [
  "Loans",
  "GST & Tax",
  "Business Setup",
  "MSME Schemes",
  "Registration",
  "Compliance",
  "Funding",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  takeaways: readonly string[];
  sections: readonly { heading: string; body: string }[];
  relatedHref: string;
  relatedLabel: string;
};

export const blogsPage = {
  eyebrow: "Knowledge Desk",
  heading: "Guides for founders & MSMEs",
  intro:
    "Practical articles on registration, loans, GST, schemes and compliance — written the way we explain it on a call. Padho, phir poochho.",
  cta: "Browse articles",
  catalogCta: "Talk on WhatsApp",
  imageAlt: "Advisor reviewing business guides with a founder",
  stats: [
    { value: "12+", label: "Guides on the desk" },
    { value: "7", label: "Topics covered" },
    { value: "5 min", label: "Average read" },
    { value: "Free", label: "First consultation" },
  ] as const,
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

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "loan-options-every-msme-should-know",
    title: "Loan options every MSME should know",
    excerpt:
      "Mudra, CGTMSE, bank working capital and NBFC products — which path fits a dukaan, workshop or early startup.",
    category: "Loans",
    date: "12 Aug 2026",
    readTime: "6 min read",
    image: photos.serviceLoan,
    imageAlt: "Advisor reviewing MSME loan paperwork",
    featured: true,
    takeaways: [
      "Match the product to cash cycle, not just the headline interest rate.",
      "Udyam and GST often unlock better bank and scheme options.",
      "Collateral-free is possible — eligibility still depends on vintage and documents.",
    ],
    sections: [
      {
        heading: "Start with the use of funds",
        body: "Working capital, machinery, shop renovation and invoice cycles are different products. Banks price them differently, and government schemes have their own purpose codes. Tell the desk what the money will do in 90 days — stock, machine, or payroll — before you pick a scheme name.",
      },
      {
        heading: "The four paths we map most often",
        body: "Mudra covers smaller ticket sizes for first-time and micro borrowers. CGTMSE can support collateral-free bank credit when the unit qualifies. Term loans and overdrafts from banks suit businesses with 2–3 years of statements. NBFCs help when speed or a specialised product (machinery, LAP, invoice discounting) matters more than the lowest rate.",
      },
      {
        heading: "What to keep ready",
        body: "KYC, Udyam, GST returns, 6–12 months of bank statements and a simple use-of-funds note. Missing any of these is the usual reason a ‘sure loan’ stalls. We send a checklist on WhatsApp before you collect files from a CA.",
      },
    ],
    relatedHref: "/services/loan",
    relatedLabel: "Business loan desk",
  },
  {
    slug: "gst-compliance-made-simple",
    title: "GST compliance made simple",
    excerpt:
      "Thresholds, returns, and why GST is often the first document a lender or marketplace asks for.",
    category: "GST & Tax",
    date: "8 Aug 2026",
    readTime: "4 min read",
    image: photos.seoGst,
    imageAlt: "GST filing and tax documents on a desk",
    takeaways: [
      "GST is not only a tax filing — it is proof of business for loans and marketplaces.",
      "Returns must match bank credits. Mismatches delay funding.",
      "Registration timing depends on turnover, interstate supply and e-commerce.",
    ],
    sections: [
      {
        heading: "When GST becomes non-negotiable",
        body: "Once you cross the threshold, sell interstate, or list on a marketplace, GST is the onboarding key. Even below threshold, many buyers and NBFCs still ask for it because it shows the business is on record.",
      },
      {
        heading: "What ‘simple compliance’ actually means",
        body: "File on time, keep invoices matching GSTR-1 and GSTR-3B, and do not mix personal and business accounts. Most GST pain we see is not a complex law issue — it is late filing and messy books.",
      },
      {
        heading: "How we help",
        body: "We map whether you need registration now, which documents the portal will ask, and how GST links to your loan or scheme file. The filing itself can stay with your CA — we make sure the story lenders see is consistent.",
      },
    ],
    relatedHref: "/services/registration",
    relatedLabel: "Registration desk",
  },
  {
    slug: "choosing-the-right-business-structure",
    title: "Choosing the right business structure",
    excerpt:
      "Proprietorship, OPC, LLP or private limited — pick for liability, funding and the next 3 years, not just the cheapest form.",
    category: "Business Setup",
    date: "2 Aug 2026",
    readTime: "5 min read",
    image: photos.serviceRegistration,
    imageAlt: "Founder reviewing company registration options",
    takeaways: [
      "Proprietorship is fast. It is weak if you want investors or limited liability.",
      "Private limited is the default if you plan DPIIT, equity or institutional credit.",
      "You can migrate later — but migration costs time. Start closer to the destination.",
    ],
    sections: [
      {
        heading: "Ask where the business will be in three years",
        body: "If it stays a solo dukaan with family capital, a proprietorship or OPC may be enough. If you want partners, ESOP, or a seed round, a private limited company saves a painful conversion later.",
      },
      {
        heading: "Liability is not a theoretical word",
        body: "In a proprietorship, business risk sits on the owner. LLP and company structures ring-fence personal assets when filings are clean. That matters the day a supplier dispute or loan guarantee appears.",
      },
      {
        heading: "What we do on the desk",
        body: "We map owners, capital, and the first funding path, then file the structure that matches — not the one that is trending on YouTube. Name check, DSC, DIN, MOA/AOA and first GST/Udyam sit in one sequence.",
      },
    ],
    relatedHref: "/services/registration",
    relatedLabel: "Company registration",
  },
  {
    slug: "govt-schemes-for-your-growth",
    title: "Govt schemes for your growth",
    excerpt:
      "How we shortlist 2–3 realistic schemes instead of sending you a PDF of fifty programmes.",
    category: "MSME Schemes",
    date: "28 Jul 2026",
    readTime: "5 min read",
    image: photos.serviceGrant,
    imageAlt: "Government scheme documents and funding discussion",
    takeaways: [
      "Most businesses qualify for a handful of schemes — not all of them.",
      "Sector, state, turnover and promoter category decide the shortlist.",
      "A scheme without documents and a portal path is only a headline.",
    ],
    sections: [
      {
        heading: "Schemes are filters, not a catalogue",
        body: "PMEGP, CGTMSE, state subsidies, sector grants and startup programmes all have different doors. We start from your unit — manufacturing vs service, women/SC/ST/minority, rural vs urban — then name the schemes that actually open.",
      },
      {
        heading: "Subsidy is not instant cash",
        body: "Many programmes reimburse after investment, bank appraisal or commissioning. Plan working capital around that lag. We say this on the first call so nobody budgets a subsidy as next month’s rent.",
      },
      {
        heading: "The useful output",
        body: "You leave with 2–3 options, a document list, and a WhatsApp summary of who files what. That is more valuable than a 40-page scheme booklet.",
      },
    ],
    relatedHref: "/scheme",
    relatedLabel: "All government schemes",
  },
  {
    slug: "smart-financial-habits-for-msmes",
    title: "Smart financial habits for MSMEs",
    excerpt:
      "Bank statements, GST and a simple cash habit beat a fancy pitch when a lender reads your file.",
    category: "Funding",
    date: "21 Jul 2026",
    readTime: "5 min read",
    image: photos.aboutMission,
    imageAlt: "Business owner reviewing financial records",
    takeaways: [
      "Separate personal and business accounts before you apply for credit.",
      "Lenders read 6–12 months of statements more than they read a pitch deck.",
      "A weekly cash glance prevents the ‘sudden’ working-capital crisis.",
    ],
    sections: [
      {
        heading: "Your statement is your story",
        body: "Cash deposits without invoices, EMI bounces and related-party transfers all show up. Cleaning this for 90 days before a loan file is cheaper than explaining it later.",
      },
      {
        heading: "Three habits that change approvals",
        body: "Pay GST on time. Keep one business current account. Write a one-page note of monthly sales, purchases and surplus. That note becomes the backbone of a bankable file.",
      },
      {
        heading: "We do not replace your CA",
        body: "We read the file the way a credit officer will, then tell you what to fix before we approach a bank or NBFC. That is the habit: prepare, then apply.",
      },
    ],
    relatedHref: "/services/loan",
    relatedLabel: "Loan desk",
  },
  {
    slug: "udyam-registration-unlocks-loans",
    title: "Why Udyam still matters if you already have GST",
    excerpt:
      "Udyam is the MSME identity lenders and schemes look for — GST alone does not replace it.",
    category: "Registration",
    date: "14 Jul 2026",
    readTime: "4 min read",
    image: photos.seoUdyam,
    imageAlt: "MSME Udyam registration on a laptop",
    takeaways: [
      "Udyam is free, portal-based, and expected on most MSME credit files.",
      "Investment and turnover bands decide micro, small or medium.",
      "Keep the certificate updated when plant, turnover or activity changes.",
    ],
    sections: [
      {
        heading: "GST proves tax. Udyam proves MSME.",
        body: "Schemes, priority-sector lending and many tenders still ask for Udyam. Having GST without Udyam is a common reason a ‘simple’ Mudra or CGTMSE file gets a query.",
      },
      {
        heading: "Classification is not decoration",
        body: "Micro vs small vs medium changes which products and subsidies you can claim. We check that the activity code and investment figures match reality — overstating plant to look bigger can lock you out of micro benefits.",
      },
      {
        heading: "What we file with you",
        body: "Aadhaar, PAN, GSTIN if any, bank details and NIC code. The certificate is usually quick when inputs are clean. We then attach it to the loan or scheme packet.",
      },
    ],
    relatedHref: "/services/registration",
    relatedLabel: "Udyam & registration",
  },
  {
    slug: "fssai-licence-path-for-food-businesses",
    title: "FSSAI licence path for food businesses",
    excerpt:
      "Basic, state or central — mapped to tiffin, cloud kitchen, manufacturing and retail, without the portal panic.",
    category: "Compliance",
    date: "7 Jul 2026",
    readTime: "5 min read",
    image: photos.seoFssai,
    imageAlt: "Food business kitchen ready for FSSAI compliance",
    takeaways: [
      "Turnover and whether you manufacture, trade or serve decides the licence type.",
      "Label, kitchen photos and layout matter as much as the form.",
      "Marketplaces and malls will not wait for a ‘we applied’ screenshot.",
    ],
    sections: [
      {
        heading: "Pick the right licence, not the highest one",
        body: "A home tiffin and a 20-worker manufacturing unit do not need the same paper. Over-applying wastes money; under-applying gets rejected when you list on Swiggy or supply a hotel.",
      },
      {
        heading: "Documents that stall files",
        body: "Unclear kitchen photos, missing water test, incomplete layout and a brand name that does not match PAN. We checklist these before you sit on the FoSCoS portal.",
      },
      {
        heading: "After the licence",
        body: "Display it, keep hygiene logs if you manufacture, and renew on time. Buyers audit this. The certificate is the start of the food desk, not the end.",
      },
    ],
    relatedHref: "/services/certificate",
    relatedLabel: "Certifications desk",
  },
  {
    slug: "mudra-vs-bank-loan",
    title: "Mudra vs a regular bank loan",
    excerpt:
      "When Shishu, Kishore or Tarun is the right first step — and when a normal MSME term loan is cleaner.",
    category: "Loans",
    date: "30 Jun 2026",
    readTime: "5 min read",
    image: photos.schemeMudra,
    imageAlt: "Small business owner discussing a Mudra loan",
    takeaways: [
      "Mudra is a scheme layer on bank/NBFC products, not a separate government cash transfer.",
      "Ticket size and business vintage decide Shishu, Kishore or Tarun.",
      "If you already have GST, Udyam and statements, a standard MSME loan may be faster.",
    ],
    sections: [
      {
        heading: "Mudra is a doorway, not a wallet",
        body: "You still apply through a bank or NBFC. Mudra’s value is the product design for smaller, often first-time borrowers. It is not an instant subsidy into your account.",
      },
      {
        heading: "When we recommend Mudra",
        body: "New or micro units, modest ticket size, thin but honest banking, and a clear use of funds. We also flag cases where Mudra will not stretch — machinery of a higher ticket, or a unit that already outgrew micro.",
      },
      {
        heading: "When a bank MSME loan is better",
        body: "Established turnover, existing limits, or a need for OD/CC rather than a small term loan. We compare both on the same WhatsApp note so you do not apply twice blindly.",
      },
    ],
    relatedHref: "/scheme/mudra",
    relatedLabel: "Mudra scheme desk",
  },
  {
    slug: "documents-checklist-before-funding",
    title: "Documents to keep ready before a funding call",
    excerpt:
      "The short list we send on WhatsApp — so the first call is about eligibility, not ‘please resend PAN’.",
    category: "Funding",
    date: "22 Jun 2026",
    readTime: "4 min read",
    image: photos.stepPaperwork,
    imageAlt: "Funding documents stacked for a loan file",
    takeaways: [
      "KYC, Udyam, GST, bank statements and a use-of-funds note cover 80% of first files.",
      "Photos of the unit help more than a long email.",
      "Originals stay with you until a bank or department asks.",
    ],
    sections: [
      {
        heading: "The core packet",
        body: "PAN and Aadhaar of promoters, passport photos, business proof (Udyam/GST/registration), 6–12 months bank statements, and latest ITR if you file. For machinery, add quotations. For property-backed loans, add papers only when we say the product needs them.",
      },
      {
        heading: "Quality beats volume",
        body: "Blurred PDFs and WhatsApp forwards of someone else’s GST return waste a week. Clear scans, one folder, filenames that match the document. That is enough.",
      },
      {
        heading: "We send the list first",
        body: "Do not collect a CA’s entire archive on day one. Tell us the requirement — loan, grant or licence — and we send the relevant checklist. That is how the desk stays fast.",
      },
    ],
    relatedHref: "/services/loan",
    relatedLabel: "Start a funding file",
  },
  {
    slug: "startup-india-recognition-what-changes",
    title: "Startup India recognition: what actually changes",
    excerpt:
      "DPIIT is not a grant by itself. It is a key that opens tax, tender and scheme doors if the business qualifies.",
    category: "Registration",
    date: "16 Jun 2026",
    readTime: "5 min read",
    image: photos.schemeStartup,
    imageAlt: "Startup founders preparing a DPIIT recognition file",
    takeaways: [
      "You need an eligible incorporated entity and an innovation story DPIIT will accept.",
      "Recognition helps with 80-IAC, tenders and some funds — it is not automatic money.",
      "The write-up matters as much as the certificate number.",
    ],
    sections: [
      {
        heading: "Who it is for",
        body: "Private limited, LLP or eligible registered entities working on a scalable product or process — not a generic trading firm dressed as a ‘startup’. We say no when the fit is weak, because a rejected portal file wastes months.",
      },
      {
        heading: "What you gain",
        body: "Easier conversations with some schemes, possible tax benefits if you also clear the 80-IAC path, and credibility with incubators. None of this replaces a real customer or a clean cap table.",
      },
      {
        heading: "How we file",
        body: "Eligibility review, pitch write-up in portal language, and document pack. You stay honest about what the product does. We stay precise about how DPIIT reads it.",
      },
    ],
    relatedHref: "/services/startup",
    relatedLabel: "Startup India desk",
  },
  {
    slug: "cgtmse-collateral-free-loans",
    title: "CGTMSE: collateral-free loans, explained plainly",
    excerpt:
      "The guarantee is for the bank — you still need a viable unit, documents and a lender who will underwrite.",
    category: "Loans",
    date: "9 Jun 2026",
    readTime: "5 min read",
    image: photos.schemeGuarantee,
    imageAlt: "Banker and founder discussing a collateral-free loan",
    takeaways: [
      "CGTMSE reduces the bank’s risk. It does not delete credit appraisal.",
      "Eligible MSMEs can access credit without mortgaging a house in many cases.",
      "Fees, coverage and ticket size have rules — we check them before you visit a branch.",
    ],
    sections: [
      {
        heading: "What the guarantee actually does",
        body: "The bank gets a cover if the account goes bad, within scheme limits. That is why some files that would have asked for property can proceed on hypothecation of assets and cash flows instead.",
      },
      {
        heading: "You still need a business",
        body: "No Udyam, no statements, no use of funds — no file. CGTMSE is not a workaround for a weak unit. It is a tool for a real MSME that lacks collateral.",
      },
      {
        heading: "Our role",
        body: "We check eligibility, prepare the pack, and place it with lenders who actually run CGTMSE. Then we stay on the query loop until sanction or a clear no.",
      },
    ],
    relatedHref: "/scheme/cgtmse",
    relatedLabel: "CGTMSE scheme",
  },
  {
    slug: "how-to-prepare-a-bankable-dpr",
    title: "How to prepare a bankable DPR",
    excerpt:
      "A DPR is not a college project. Banks want costs, means of finance, and a repayment story that survives a site visit.",
    category: "Funding",
    date: "1 Jun 2026",
    readTime: "6 min read",
    image: photos.schemePitch,
    imageAlt: "Founder presenting a detailed project report",
    takeaways: [
      "Plant cost, working capital and promoter contribution must add up.",
      "Projections should match GST and bank history — not a hockey-stick slide.",
      "Photos, quotations and land/lease papers make the DPR believable.",
    ],
    sections: [
      {
        heading: "What a credit officer skims first",
        body: "Total project cost, means of finance, security, and whether sales assumptions look like the last year’s bank credits. If those four are fuzzy, the rest of the PDF does not get read.",
      },
      {
        heading: "Build it from quotations, not from hope",
        body: "Machinery quotes, civil estimates, and a working-capital cycle (stock + receivables − payables) are the spine. We help you assemble this so the number you request is the number the project needs.",
      },
      {
        heading: "Where we stay involved",
        body: "Draft, lender comments, and revisions. A DPR that cannot answer ‘what if sales drop 20%’ will bounce. We pressure-test that on the desk before you pay a typing vendor for 80 pages of filler.",
      },
    ],
    relatedHref: "/services/grant",
    relatedLabel: "Grants & project desk",
  },
  {
    slug: "iso-certification-for-buyer-readiness",
    title: "ISO certification for buyer and tender readiness",
    excerpt:
      "ISO 9001 is a process story. Buyers and tenders ask for it; a certificate without a working system does not survive an audit.",
    category: "Compliance",
    date: "24 May 2026",
    readTime: "4 min read",
    image: photos.seoIso,
    imageAlt: "Quality certification documents for an MSME",
    takeaways: [
      "Scope the standard to the processes you actually run.",
      "Documentation and a short internal audit matter more than the plaque.",
      "We coach the file so the certification body sees a real unit, not a template.",
    ],
    sections: [
      {
        heading: "Why buyers ask",
        body: "ISO is shorthand for ‘this unit has a way of working’. Export buyers, OEMs and some tenders will not issue a PO without it. It is not a loan product — it is a door-opener.",
      },
      {
        heading: "What we prepare",
        body: "Gap review, process write-ups, and liaison with a certification path that matches your activity. You still have to run the process. We make sure the paperwork matches the shop floor.",
      },
    ],
    relatedHref: "/services/certificate",
    relatedLabel: "ISO & certificates",
  },
  {
    slug: "trademark-before-you-scale",
    title: "Trademark your name before you scale",
    excerpt:
      "A logo on Instagram is not protection. Search and file early — especially before marketplaces and franchise talks.",
    category: "Compliance",
    date: "18 May 2026",
    readTime: "4 min read",
    image: photos.seoTrademark,
    imageAlt: "Brand name and trademark filing documents",
    takeaways: [
      "Search similar marks before you print packaging.",
      "Class of goods/services must match how you actually sell.",
      "Filing is the start; examination and opposition can follow.",
    ],
    sections: [
      {
        heading: "File before the printer",
        body: "Once packaging, domain and ads are live, a conflict is expensive. A search plus application is cheaper than a rebrand after a festival campaign.",
      },
      {
        heading: "What the desk handles",
        body: "Name/logo search, class selection, application and status follow-up. Legal strategy on opposition stays with counsel when needed — we keep the filing moving and the documents in one place.",
      },
    ],
    relatedHref: "/services/legal",
    relatedLabel: "Legal consultancy",
  },
];

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

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}

export function getFeaturedBlog() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0];
}

export function getRelatedBlogs(slug: string, limit = 3) {
  const current = getBlogBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);
  const same = blogPosts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const rest = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );
  return [...same, ...rest].slice(0, limit);
}

export function countByCategory() {
  return blogCategories.map((category) => ({
    category,
    count: blogPosts.filter((post) => post.category === category).length,
  }));
}
