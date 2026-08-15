import { photos } from "./photos";

export const site = {
  companyName: "VIKASBHART",
  tagline: "Sapno Se Safalta Tak",
  logo: "/brand/vikas-bharat-logo.png",
  whatsappNumber: "91XXXXXXXXXX",
  phoneNumber: "1800-XXX-XXXX",
  email: "hello@vikasbhart.in",
  offices: [
    {
      city: "Ahmedabad",
      address: "CG Road, Navrangpura — Business desk & walk-ins",
    },
    {
      city: "Jaipur",
      address: "C-Scheme — Loans, MSME & scheme desk",
    },
    {
      city: "Delhi NCR",
      address: "Gurugram Sector 44 — Startup & compliance desk",
    },
    {
      city: "Hyderabad",
      address: "Banjara Hills — South India operations",
    },
  ] as const,
  social: [
    { label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
  ] as const,
  resources: [
    { label: "MSME / Udyam guide", href: "/services/registration" },
    { label: "GST registration help", href: "/services/registration" },
    { label: "FSSAI licence path", href: "/services/certificate" },
  ] as const,
  disclaimer:
    "We are a private consultancy and are not affiliated with any Government department or agency. All payments must be made only to our official company account.",
} as const;

export const navigation = [
  { label: "About Us", href: "/about", icon: "users" },
  { label: "Service", href: "/service", icon: "briefcase" },
  { label: "Scheme", href: "/scheme", icon: "landmark" },
  { label: "Blogs", href: "/blogs", icon: "book" },
  { label: "Contact us", href: "/contact", icon: "mail" },
] as const;

export const servicesMegaMenu = {
  funding: {
    title: "Business Funding",
    items: [
      {
        title: "Grants",
        description: "Government Schemes",
        href: "/services/grant",
        icon: "grant" as const,
      },
      {
        title: "Loans",
        description: "Bank Financing",
        href: "/services/loan",
        icon: "loan" as const,
      },
      {
        title: "NBFC",
        description: "Alternative Funding",
        href: "/services/nbfc",
        icon: "nbfc" as const,
      },
    ],
  },
  services: {
    title: "Our Services",
    items: [
      {
        title: "Business Registration",
        description: "Company & OPC formation",
        href: "/services/registration",
        icon: "registration" as const,
      },
      {
        title: "Certifications & Compliance",
        description: "ISO, BIS CRS & FSSAI",
        href: "/services/certificate",
        icon: "certificate" as const,
      },
      {
        title: "Growth Strategy",
        description: "Business expansion planning",
        href: "/services/growth",
        icon: "growth" as const,
      },
      {
        title: "M&A Advisory",
        description: "Merger & acquisition support",
        href: "/service",
        icon: "ma" as const,
      },
      {
        title: "Marketing & Branding",
        description: "Digital marketing solutions",
        href: "/services/growth",
        icon: "marketing" as const,
      },
      {
        title: "Legal Consultancy",
        description: "Legal advice & documentation",
        href: "/services/legal",
        icon: "legal" as const,
      },
    ],
  },
  cta: {
    label: "View All Services",
    href: "/service",
  },
} as const;

export const servicePage = {
  eyebrow: "Services",
  brand: "VIKASBHART",
  heading: "Our Services",
  intro:
    "We are a business consulting and growth advisory firm dedicated to empowering MSMEs and startups in India. We provide end-to-end support across compliance, strategy, finance, legal, and growth—helping businesses build strong foundations, stay compliant, and scale sustainably.",
  cta: "Check Your Eligibility",
  image: photos.serviceRegistration,
  imageAlt: "Advisor reviewing business registration and funding options with a founder",
  stats: [
    { value: "95%+", label: "Success Rate" },
    { value: "20,000+", label: "Businesses Helped" },
    { value: "₹500CR+", label: "Funding Secured" },
    { value: "500+", label: "Funding Schemes" },
  ] as const,
  funding: {
    eyebrow: "Capital Pathways",
    heading: "Grow With Vikas Bharat",
    sub: "Access Grants, Loans And NBFC Solutions",
    items: [
      {
        title: "Government Grants",
        text: "We identify which government grants and subsidies your business qualifies for, prepare the application, file on official portals, and follow through until the money reaches you — with full documentation support.",
        href: "/services/grant",
        image: photos.serviceGrant,
        icon: "grant" as const,
      },
      {
        title: "Business Loan Services",
        text: "We compare 25+ lenders — banks, NBFCs, and government schemes — to find the right loan for your business, handle the paperwork, and stay with your application through to approval and disbursement.",
        href: "/services/loan",
        image: photos.serviceLoan,
        icon: "loan" as const,
      },
      {
        title: "NBFC Financing Solutions",
        text: "When you need faster approval or a loan product banks do not offer, we match you to the right NBFC from our network of 25+ partners — working capital, machinery, LAP, or invoice discounting.",
        href: "/services/nbfc",
        image: photos.aboutServiceNbf,
        icon: "nbfc" as const,
      },
    ],
  },
  catalog: {
    eyebrow: "Full Desk",
    heading: "Our Services",
    sub: "Everything your business needs under one roof — from first filing to scale.",
    items: [
      {
        title: "Business Registration Services",
        text: "Business Registration Services for fast, easy and compliant company setup.",
        href: "/services/registration",
        icon: "registration" as const,
        image: photos.serviceRegistration,
      },
      {
        title: "One Person Company Registration",
        text: "Start a One Person Company with limited liability, nominee handling and end-to-end MCA filings.",
        href: "/services/registration",
        icon: "opc" as const,
        image: photos.aboutServiceRegistration,
      },
      {
        title: "Startup India Certification",
        text: "DPIIT Startup India recognition — eligibility review, pitch writeup and portal filing support.",
        href: "/services/registration",
        icon: "startup" as const,
        image: photos.schemeSeed,
      },
      {
        title: "Certifications & Compliance",
        text: "Certifications & Compliance services to ensure legal & regulatory business readiness.",
        href: "/services/certificate",
        icon: "certificate" as const,
        image: photos.serviceCertificate,
      },
      {
        title: "Growth Strategy Services",
        text: "Growth Strategy to scale revenue, market reach, & profitability fast.",
        href: "/services/growth",
        icon: "growth" as const,
        image: photos.serviceGrowth,
      },
      {
        title: "Mergers & Acquisitions",
        text: "Expert Mergers & Acquisitions support for seamless business expansion & deals.",
        href: "/services/growth",
        icon: "ma" as const,
        image: photos.credentialGrowth,
      },
      {
        title: "Marketing & Branding Services",
        text: "Marketing & Branding Services to boost visibility, trust and customer growth fast.",
        href: "/services/growth",
        icon: "marketing" as const,
        image: photos.aboutServiceMarketing,
      },
      {
        title: "Legal Consultancy",
        text: "Legal Consultancy for reliable compliance & business protection.",
        href: "/services/legal",
        icon: "legal" as const,
        image: photos.serviceLegal,
      },
      {
        title: "Funding Instruments",
        text: "Match the right funding instrument — equity, debt, grants or hybrids — to your stage and goals.",
        href: "/services/loan",
        icon: "funding" as const,
        image: photos.serviceLoan,
      },
    ],
  },
  connect: {
    eyebrow: "Talk To Us",
    heading: "Connect With Us",
    sub: "Starting Or Expanding Your Business?",
    body: "Contact us for expert consultancy on company registration or migration and access India's top MSME funding schemes. We offer personalized services to help you secure the resources needed for growth.",
    newCustomer: {
      label: "New To Us?",
      title: "Request Call Back",
      text: "We will be happy to address your queries over a call.",
      cta: "Click Here",
    },
    existingCustomer: {
      label: "Existing Customer?",
      title: "Request Call Back",
      text: "We will be happy to address your queries over a call.",
      cta: "Click Here",
    },
    tollFree: {
      label: "Connect Toll-Free",
      text: "Connect with us toll-free for expert guidance and support",
      number: "1800 296 1424",
      href: "tel:18002961424",
    },
  },
} as const;

export const schemePage = {
  eyebrow: "Government Schemes",
  heading: "All Government Schemes & Programs",
  intro:
    "Comprehensive guide to 50+ government funding schemes, subsidies, tax benefits and support programs for startups, MSMEs and entrepreneurs across India.",
  cta: "Check Your Eligibility",
  imageAlt: "Advisor matching a founder to government funding schemes",
  stats: [
    { value: "50+", label: "Schemes Covered" },
    { value: "95%", label: "Success Rate" },
    { value: "20K+", label: "Businesses Helped" },
  ] as const,
  catalog: {
    eyebrow: "Scheme Desk",
    heading: "Top Government Schemes",
    sub: "Direct government-backed programs with dedicated portals and implementation frameworks",
    searchPlaceholder: "What are you looking for?",
    filters: ["Debt", "Equity", "Grant", "Certificate", "Loan", "Subsidy"] as const,
    defaultFilter: "Debt" as const,
    exploreCta: "Explore More Opportunities",
    collapseCta: "Show Featured Schemes",
    showMoreCta: "Show More",
    showMoreSub: "View remaining schemes in this filter",
    previewCount: 5,
    empty: "No schemes match that search. Try another keyword or filter.",
    items: [
      {
        id: "naif",
        title: "NAIF Scheme",
        text: "National Agriculture Infra Financing Facility for agri infrastructure projects",
        filters: ["Debt", "Subsidy"] as const,
        featured: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "cgtmse",
        title: "CGTMSE",
        text: "Credit Guarantee Fund Trust for Micro and Small Enterprises - Collateral-free credit",
        filters: ["Debt"] as const,
        featured: true,
        image: photos.schemeGuarantee,
        icon: "shield" as const,
      },
      {
        id: "pmegp",
        title: "PMEGP",
        text: "Prime Minister's Employment Generation Programme - Up to 35% subsidy for new ventures",
        filters: ["Debt"] as const,
        featured: true,
        image: photos.schemePmegp,
        icon: "factory" as const,
      },
      {
        id: "ahidf",
        title: "AHIDF Scheme",
        text: "Agricultural and Horticultural Infrastructure Development Fund to support infrastructure projects in agriculture, boosting food production, storage, and distribution.",
        filters: ["Debt"] as const,
        featured: true,
        image: photos.schemeHorticulture,
        icon: "leaf" as const,
      },
      {
        id: "cgss",
        title: "CGSS Scheme",
        text: "Credit Guarantee Scheme for Startups, offering collateral-free loans to startups, enabling them to access the capital needed for growth and expansion.",
        filters: ["Debt"] as const,
        featured: true,
        image: photos.schemeSeed,
        icon: "rocket" as const,
      },
      {
        id: "mudra",
        title: "Mudra Loans (PMMY)",
        text: "Pradhan Mantri Mudra Yojana - Loans up to ₹20 lakh for micro enterprises",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeMudra,
        icon: "wallet" as const,
      },
      {
        id: "msme-loan",
        title: "MSME Loan",
        text: "Collateral-free loans for micro, small and medium enterprises with government backing",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.serviceLoan,
        icon: "landmark" as const,
      },
      {
        id: "nbfc",
        title: "NBFC",
        text: "Non-Banking Financial Company loans for quick business financing solutions",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceNbf,
        icon: "wallet" as const,
      },
      {
        id: "business-loan-services",
        title: "Business Loan Services",
        text: "Access to a variety of business loans designed to help startups, MSMEs, and established companies with funding for expansion, working capital, and equipment purchase.",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceLoans,
        icon: "factory" as const,
      },
      {
        id: "standup",
        title: "Stand-Up India",
        text: "Explore Stand-Up India scheme eligibility, benefits, required documents and application process. Learn how to apply for bank loans for women and SC/ST entrepreneurs.",
        filters: ["Loan"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "seed-fund",
        title: "Seed Fund",
        text: "Startup India Seed Fund - Grants up to ₹20L for proof of concept and prototype",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "sprout" as const,
      },
      {
        id: "zed",
        title: "ZED Certification",
        text: "Zero Defect Zero Effect certification with subsidy support — quality, process and export readiness for MSMEs.",
        filters: [] as const,
        featured: false,
        image: photos.aboutCertZed,
        icon: "badge" as const,
      },
      {
        id: "clcss",
        title: "CLCSS Subsidy",
        text: "Credit Linked Capital Subsidy Scheme — capital support for technology upgradation of micro and small units.",
        filters: [] as const,
        featured: false,
        image: photos.serviceGrant,
        icon: "percent" as const,
      },
      {
        id: "sss",
        title: "SSS Scheme",
        text: "Startup Support Scheme providing equity investment for early-stage startups",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "rocket" as const,
      },
      {
        id: "equity-linked-seed",
        title: "Equity Linked Seed Fund",
        text: "Seed funding through equity participation for innovative startups",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "sprout" as const,
      },
      {
        id: "horizon-fund",
        title: "Horizon Fund",
        text: "Long-term equity investment fund for high-growth potential ventures",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeVc,
        icon: "compass" as const,
      },
      {
        id: "equity-elevator",
        title: "Equity Elevator",
        text: "Progressive equity funding program to elevate startup growth — international equity-based funding up to ₹4 Crore for tech startups with mentorship, networking, and expert guidance.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemePitch,
        icon: "elevator" as const,
      },
      {
        id: "gvfl",
        title: "GVFL",
        text: "Gujarat Venture Finance Limited - Equity and quasi-equity investments",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.credentialGrowth,
        icon: "landmark" as const,
      },
      {
        id: "evolve-tech",
        title: "Evolve-Tech Funding 2.0",
        text: "Learn how Evolve-Tech Funding supports startups with up to ₹25L for equity, key eligibility criteria, and documents required to get funded.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "cpu" as const,
      },
      {
        id: "marine-venture",
        title: "Marine Venture",
        text: "Apply for Marine Venture 2026 to get equity funding, mentorship, and incubation support for innovative maritime startups in AI, automation, decarbonization, and blockchain solutions.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeMarine,
        icon: "waves" as const,
      },
      {
        id: "matrix-capital",
        title: "Matrix Capital Fellowship",
        text: "Discover the Matrix Capital Fellowship Scheme 2026. Learn about eligibility, funding up to ₹4.52 Crore, mentorship, focus areas including AI, FinTech, MedTech, and required documents.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutTeam,
        icon: "grid" as const,
      },
      {
        id: "tech-equity",
        title: "Tech Equity Program",
        text: "Discover the Tech Equity Program Scheme, an elite global startup accelerator for blockchain, Web3 & AI companies offering funding up to ₹4.15 Cr, mentorship, and access to global investors.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "circuit" as const,
      },
      {
        id: "udyog-funding",
        title: "Udyog Funding",
        text: "Master Udyog Funding (Pitch by Deel). Learn about eligibility, $1 Million SAFE investment, global focus areas, required documents, and expert application tips.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.serviceGrowth,
        icon: "factory" as const,
      },
      {
        id: "vc-fund-st",
        title: "VC Fund for ST",
        text: "Explore the VC Fund for ST scheme details. Secure equity and debt funding up to ₹5 Crore with elite incubation support for Scheduled Tribe entrepreneurs.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "venture-fund",
        title: "Venture Fund",
        text: "Secure up to ₹5 Crore in equity funding with Venture Fund (MH). Learn about eligibility, focus sectors, required documents, and expert application tips.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeVc,
        icon: "wallet" as const,
      },
      {
        id: "venture-challenge",
        title: "Venture Funding Challenge",
        text: "Master the Venture Funding Challenge by Shiv Nadar AIC. Learn about eligibility, funding up to ₹1 Crore, focus areas, required documents, and expert tips.",
        filters: ["Equity"] as const,
        featured: false,
        filterOnly: true,
        image: photos.credentialGrowth,
        icon: "trophy" as const,
      },
      {
        id: "act-grant",
        title: "Act Grant",
        text: "Atal Community Innovation Center grants for social innovation projects",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutTeam,
        icon: "users" as const,
      },
      {
        id: "mahila-empowerment",
        title: "Mahila Empowerment Scheme",
        text: "Grants up to ₹15 Lakhs for women-led startups and entrepreneurs",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "spark-grant",
        title: "Spark Grant",
        text: "Innovation grants for technology-driven startup ideas and prototypes",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "rocket" as const,
      },
      {
        id: "tide-2",
        title: "TIDE 2.0 Scheme",
        text: "Technology Incubation and Development of Entrepreneurs program",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "cpu" as const,
      },
      {
        id: "rkvy-raftaar",
        title: "RKVY Raftaar",
        text: "Rashtriya Krishi Vikas Yojana for agri-startups and innovation",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "nidhi-prayas",
        title: "Nidhi Prayas",
        text: "Grant support for students and faculty to convert ideas into prototypes",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "sprout" as const,
      },
      {
        id: "government-grants",
        title: "Government Grants",
        text: "Financial support programs by the government to help startups, MSMEs, and innovators scale their business without repayment obligations.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceGrants,
        icon: "landmark" as const,
      },
      {
        id: "meity-genesis-eir",
        title: "MeitY GENESIS EIR",
        text: "Entrepreneur-in-Residence support under MeitY GENESIS to help technology innovators build and launch deep-tech startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "cpu" as const,
      },
      {
        id: "agri-business-grants",
        title: "Agri Business Grants",
        text: "Funding support for agriculture-based startups, agri-processing units, and rural enterprises to strengthen the agri value chain.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeHorticulture,
        icon: "leaf" as const,
      },
      {
        id: "social-impact",
        title: "Social Impact Innovation Scheme",
        text: "Grants supporting startups and organizations creating innovative solutions that improve social welfare and community development.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutIntroCrowd,
        icon: "users" as const,
      },
      {
        id: "mobility-innovation",
        title: "Mobility Innovation Program",
        text: "Funding initiative for startups developing smart mobility, EV technologies, and next-generation transportation solutions.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemePitch,
        icon: "compass" as const,
      },
      {
        id: "great-scheme",
        title: "GREAT Scheme",
        text: "Global Research and Entrepreneurship Assistance Technology scheme supporting research-driven startups and innovative technology projects.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "circuit" as const,
      },
      {
        id: "uyegp",
        title: "UYEGP Scheme",
        text: "Unemployed Youth Employment Generation Programme providing financial assistance for youth to start new businesses.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeMudra,
        icon: "wallet" as const,
      },
      {
        id: "venture-tech-funding",
        title: "Venture Tech Funding",
        text: "Technology-focused funding program supporting innovative startups working in AI, software, hardware, and emerging technologies.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "cpu" as const,
      },
      {
        id: "cybersecurity-fund",
        title: "Cybersecurity Fund",
        text: "Funding initiative supporting cybersecurity startups and innovations to strengthen digital infrastructure and data protection.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeGuarantee,
        icon: "shield" as const,
      },
      {
        id: "art-program",
        title: "ART Program",
        text: "Accelerator program supporting research, technology development, and innovative startup solutions across multiple industries.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemePitch,
        icon: "trophy" as const,
      },
      {
        id: "agri-sure-fund",
        title: "Agri Sure Fund",
        text: "Investment support program focused on strengthening agricultural startups and sustainable farming innovations.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "grant-for-ventures",
        title: "Grant for Ventures",
        text: "Government grants designed to support early-stage startups and entrepreneurs developing innovative business ideas.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "rocket" as const,
      },
      {
        id: "growth-grant",
        title: "Growth Grant",
        text: "Financial assistance aimed at helping startups and MSMEs scale operations, expand markets, and accelerate growth.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.serviceGrowth,
        icon: "elevator" as const,
      },
      {
        id: "brightpath-ventures",
        title: "Brightpath Ventures",
        text: "Startup support program offering mentorship, funding access, and strategic guidance for high-potential entrepreneurs.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeVc,
        icon: "compass" as const,
      },
      {
        id: "health-accelerator",
        title: "Health Accelerator Scheme",
        text: "Program supporting healthcare startups working on medical technology, digital health, and innovative healthcare services.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertFssai,
        icon: "badge" as const,
      },
      {
        id: "startup-accelerator",
        title: "Startup Accelerator Scheme",
        text: "Acceleration program designed to support startups with funding access, mentorship, and market expansion opportunities.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "rocket" as const,
      },
      {
        id: "startup-spark",
        title: "Startup Spark Scheme",
        text: "Early-stage startup support initiative helping innovators transform ideas into viable businesses.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "sprout" as const,
      },
      {
        id: "horizon-fund-scheme",
        title: "Horizon Fund Scheme",
        text: "Funding program supporting research-driven startups and advanced technology innovations with global impact potential.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeVc,
        icon: "compass" as const,
      },
      {
        id: "leap-fund-scheme",
        title: "Leap Fund Scheme",
        text: "Investment support for startups aiming to scale rapidly through innovation, technology development, and market expansion.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemePitch,
        icon: "elevator" as const,
      },
      {
        id: "hp-udgam",
        title: "HP Udgam Scheme",
        text: "Startup support initiative by Himachal Pradesh government encouraging entrepreneurship and business growth in the state.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.footerCity,
        icon: "landmark" as const,
      },
      {
        id: "defence-scheme",
        title: "Defence Scheme",
        text: "Funding and support program for startups developing technologies for defence, aerospace, and national security sectors.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertZed,
        icon: "shield" as const,
      },
      {
        id: "government-grants-guide",
        title: "Government Grants Guide",
        text: "An overview of how government grants work for startups and MSMEs — eligibility, application process and expert support.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.faqDocuments,
        icon: "percent" as const,
      },
      {
        id: "aditi-defence",
        title: "Aditi Defence 4.0 Challenge",
        text: "Aditi Defence 4.0 by DIO & Ministry of Defence offers grant funding up to ₹25 Crore for Indian startups and MSMEs developing advanced defence and dual-use technologies.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertZed,
        icon: "trophy" as const,
      },
      {
        id: "aerospace-defence",
        title: "Aerospace Defence Fund",
        text: "Explore the Aerospace Defence Fund 2026, offering up to ₹25 Cr funding, mentorship, and incubation support for innovative Indian defence startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "compass" as const,
      },
      {
        id: "agri-startup-shitij",
        title: "Agri Startup Fund (SHITIJ 2.0)",
        text: "Discover how the Agri Startup Fund (SHITIJ 2.0) supports innovative agri-tech startups with incubation, mentoring, market access, and funding opportunities.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "agri-tech-fund",
        title: "Agri-Tech Fund Assistance",
        text: "Learn everything about the Agri-Tech Fund Assistance Scheme, including eligibility, benefits, funding up to ₹35 lakh, and incubation support through SmartAgri CoE.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeHorticulture,
        icon: "leaf" as const,
      },
      {
        id: "agrinext",
        title: "AgriNext",
        text: "Learn how AgriNext supports agri-tech startups in Kerala with up to ₹25 Lakhs in grants, incubation support, pilot opportunities, and strategic scaling.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeAgri,
        icon: "agri" as const,
      },
      {
        id: "loreal-green",
        title: "L'Oréal Green Sciences Incubator",
        text: "Get equity-free funding up to €100,000 (~₹90 Lakhs) through L'Oréal Green Sciences Incubator for sustainable beauty, green chemistry, and biotech innovations.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "leaf" as const,
      },
      {
        id: "csr-fund",
        title: "CSR Fund",
        text: "Discover the CSR Fund 2026 by Draper Richards Kaplan Foundation. Learn about eligibility, funding up to ₹2.63 Cr, mentorship, and document requirements for NGOs and mission-driven startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.credentialGrowth,
        icon: "users" as const,
      },
      {
        id: "cybersecurity-karnataka",
        title: "Cybersecurity Incentive Policy Karnataka",
        text: "Learn about internship incentives, R&D funding, and eligibility criteria for Karnataka-based cybersecurity startups under the Cybersecurity Incentive Policy.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "shield" as const,
      },
      {
        id: "early-stage-grant",
        title: "Early-Stage Startup Grant",
        text: "Discover details, eligibility, and application process for the Early-Stage Startup Grant to grow your startup with funding, mentoring, and incubation.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "sprout" as const,
      },
      {
        id: "elevate-nxt",
        title: "ELEVATE NxT",
        text: "Learn everything about the ELEVATE NxT 2026 scheme in Karnataka – eligibility, benefits, funding support, mentorship, and documents required for startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "elevator" as const,
      },
      {
        id: "empowersphere",
        title: "EmpowerSphere Skilling & Livelihood Futures",
        text: "Apply for EmpowerSphere Skilling & Livelihood Futures 2026 to receive grants up to ₹12.5 Lakh, mentorship, and ecosystem support for social impact startups in India.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutTeam,
        icon: "users" as const,
      },
      {
        id: "fintech-challenge",
        title: "Fintech Startup Challenge Scheme",
        text: "Discover everything about the Fintech Startup Challenge 2025, including eligibility, funding benefits, focus areas, and required documents. Apply now to scale your fintech solutions with expert mentorship and funding support.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTax,
        icon: "wallet" as const,
      },
      {
        id: "fund-sc-youth",
        title: "Fund for SC Youth 2.0",
        text: "Learn about the Fund for SC Youth 2.0, a government-backed initiative providing grants up to ₹30 Lakhs, mentorship, and incubation to empower SC entrepreneurs across India.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "fund-for-up",
        title: "Fund for UP",
        text: "Explore the Fund for UP Scheme details. Get insights into the seed grant, marketing capital top-ups, and milestone-linked funding for Uttar Pradesh startups.",
        filters: ["Grant"] as const,
        featured: false,
        filterOnly: true,
        image: photos.footerCity,
        icon: "landmark" as const,
      },
      {
        id: "msme-certification",
        title: "MSME Certification",
        text: "Get your Micro, Small, and Medium Enterprise (MSME) certified to access government schemes, funding opportunities, and other benefits designed for business growth.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceCerts,
        icon: "badge" as const,
      },
      {
        id: "business-registration",
        title: "Business Registration",
        text: "Easily register your business with the government, ensuring legal compliance and access to essential services, funding, and tax benefits.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutServiceRegistration,
        icon: "factory" as const,
      },
      {
        id: "certs-compliance",
        title: "Certifications and Compliance",
        text: "Comprehensive services to help your business meet regulatory requirements, obtain necessary certifications, and ensure compliance with industry standards.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertIso,
        icon: "badge" as const,
      },
      {
        id: "iso-certification",
        title: "ISO Certification",
        text: "Achieve ISO certification for your business, demonstrating commitment to quality, safety, and environmental standards that boost credibility and global competitiveness.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertIso,
        icon: "badge" as const,
      },
      {
        id: "startup-india-cert",
        title: "Startup India Certification & Registration",
        text: "Register your startup under the Startup India initiative to unlock government benefits, funding opportunities, and tax exemptions designed for new ventures.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "rocket" as const,
      },
      {
        id: "tax-exemption",
        title: "Tax Exemption",
        text: "Explore tax exemption schemes for startups and MSMEs to reduce financial burden and maximize profits while complying with government regulations.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTax,
        icon: "percent" as const,
      },
      {
        id: "startup-india-eligibility",
        title: "Startup India Scheme Eligibility",
        text: "Understand Startup India scheme eligibility, new turnover limits, deep tech startup benefits, cooperative inclusion, and updated DPIIT recognition rules — plus how to apply for funding, tax benefits, and other support programs.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStartup,
        icon: "rocket" as const,
      },
      {
        id: "tax-exemption-certificate",
        title: "Tax Exemption Certificate",
        text: "Complete guide to obtaining a tax exemption certificate under Section 80IAC. Eligibility, documents and application process for DPIIT-recognized startups and businesses.",
        filters: ["Certificate"] as const,
        featured: false,
        filterOnly: true,
        image: photos.aboutCertTax,
        icon: "percent" as const,
      },
      {
        id: "semiconductor",
        title: "Semiconductor Scheme",
        text: "Government initiative to support the semiconductor industry with funding, infrastructure, and research grants to promote growth and technological advancements in India.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeTech,
        icon: "circuit" as const,
      },
      {
        id: "twees",
        title: "TWEES Scheme",
        text: "Technology-driven Women Entrepreneurs Empowerment Scheme designed to support women-led startups with financial assistance, mentorship, and business growth resources.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeStandup,
        icon: "users" as const,
      },
      {
        id: "maharashtra-govt",
        title: "Maharashtra Government Scheme",
        text: "Various funding and support schemes by the Maharashtra Government to encourage local businesses, startups, and MSMEs to expand and innovate within the state.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.footerCity,
        icon: "landmark" as const,
      },
      {
        id: "cold-storage-subsidy",
        title: "Cold Storage Subsidy Scheme",
        text: "Explore the Cold Storage Subsidy Scheme details. Get insights into capital subsidies, interest subvention, and the step-by-step process for agro-entrepreneurs.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeHorticulture,
        icon: "leaf" as const,
      },
      {
        id: "pm-kusum",
        title: "PM KUSUM Scheme",
        text: "Complete guide on PM KUSUM Scheme covering eligibility, components A, B & C, subsidy details, documents required, and how farmers can benefit from solar irrigation.",
        filters: ["Subsidy"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSolar,
        icon: "agri" as const,
      },
      {
        id: "startup-india-seed-debt",
        title: "Startup India Seed Fund",
        text: "Seed funding initiative under Startup India to provide financial support to early-stage startups, helping them bring their ideas to market and scale up operations.",
        filters: ["Debt"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeSeed,
        icon: "sprout" as const,
      },
      {
        id: "unsecured-business-loan",
        title: "Unsecured Business Loan",
        text: "Access business loans without the need for collateral, allowing startups and small businesses to secure funding based on their financial performance and business potential.",
        filters: ["Debt"] as const,
        featured: false,
        filterOnly: true,
        image: photos.serviceLoan,
        icon: "wallet" as const,
      },
      {
        id: "rdif",
        title: "RDIF Scheme",
        text: "Explore the Research Development and Innovation Fund (RDIF) Scheme 2026, including eligibility, funding options, focus sectors, and expert guidance.",
        filters: ["Debt"] as const,
        featured: false,
        filterOnly: true,
        image: photos.schemeLab,
        icon: "cpu" as const,
      },
    ],
  },
  strip: [
    { value: "₹50Cr+", label: "Total Funding Disbursed Annually" },
    { value: "50L+", label: "Entrepreneurs Supported" },
    { value: "500+", label: "Schemes & Programs Available" },
  ] as const,
  specialized: {
    eyebrow: "Beyond Portals",
    heading: "Specialized Funding Schemes",
    sub: "Expert-assisted programs and funding mechanisms to help you access government benefits",
    items: [
      {
        title: "NAIFF Funding",
        text: "Government-backed funding support to scale MSMEs and startups",
        href: "/services/loan",
        image: photos.schemeAgri,
        icon: "naiff" as const,
      },
      {
        title: "Tax Exemption Benefits",
        text: "Income tax, GST & compliance exemptions for eligible businesses",
        href: "/services/legal",
        image: photos.schemeTax,
        icon: "tax" as const,
      },
      {
        title: "Seed Funding",
        text: "Early-stage capital support for innovative startups",
        href: "/services/grant",
        image: photos.schemeSeed,
        icon: "seed" as const,
      },
      {
        title: "Venture Capital Support",
        text: "Equity & VC access for high-growth potential ventures",
        href: "/services/growth",
        image: photos.schemeVc,
        icon: "vc" as const,
      },
    ],
  },
} as const;

export const schemeFaq = {
  heading: "Scheme questions, answered",
  sub: "Eligibility, documents, and how we match you to the right government program.",
  items: [
    {
      question: "How do I know which scheme I am eligible for?",
      answer:
        "Share your business type, city, turnover band and existing registrations on WhatsApp. We screen 50+ central and state schemes and shortlist 2–3 realistic options with timelines — usually within 48 hours.",
    },
    {
      question: "Do I need Udyam / MSME registration first?",
      answer:
        "Yes for most MSME schemes and many bank products — Udyam is the key eligibility proof. If you do not have it yet, we file Udyam first and then map the right loan, subsidy or guarantee scheme.",
    },
    {
      question: "How long does a scheme application take?",
      answer:
        "Most funding cases take 4–12 weeks depending on the scheme queue, bank processing and portal queries. Certification schemes are often faster. We send a weekly status so you always know where the file stands.",
    },
    {
      question: "Is Vikas Bharat a government office?",
      answer:
        "No. We are a private consultancy. We prepare documentation, file on official portals and coordinate with banks and agencies — we are not affiliated with any government department.",
    },
    {
      question: "What documents do I need to start?",
      answer:
        "Typically PAN, Aadhaar, Udyam, GST (if registered), bank statements and a brief project note. We send a scheme-specific checklist after the eligibility call so you only collect what is actually required.",
    },
  ],
} as const;

export const grantPage = {
  eyebrow: "Government Schemes • Non-Repayable Funding",
  heading: "Government Grants",
  kicker: "MSME • Startup India • DPIIT • Sector-Specific Schemes",
  intro:
    "Access non-repayable government funding with Vikas Bharat’s specialized grants consultancy — scheme identification, eligibility assessment, application development, documentation support and follow-up to maximise your chances of securing government financial assistance.",
  cta: "Start Funding Journey",
  imageAlt: "Advisor preparing a government grant application with a founder",
  stats: [
    { value: "₹500Cr+", label: "Grants Secured" },
    { value: "50+", label: "Schemes Covered" },
    { value: "85%", label: "Success Rate" },
    { value: "100%", label: "Documentation Support" },
  ] as const,
  unlock: {
    eyebrow: "Non-Repayable Capital",
    heading: "Unlock Government Funding for Your Business",
    paragraphs: [
      "Government grants are an excellent source of non-repayable funding that can help businesses grow without incurring debt. These grants cover a wide range of areas, including research and development, manufacturing and export promotion, providing crucial support to startups and MSMEs.",
      "Vikas Bharat specialises in connecting businesses with suitable government funding programs, streamlining the complex application process and developing proposals that align with the goals of each scheme. Our expertise boosts your chances of approval while ensuring full compliance with grant requirements.",
    ],
    benefitsHeading: "Key Benefits",
    benefits: [
      "Non-repayable funding",
      "Targeted sector support",
      "Subsidies for capital expenditure and tech upgrades",
      "Focus on job creation and export promotion",
    ],
  },
  categories: {
    eyebrow: "Grant Map",
    heading: "Major Grant Categories We Cover",
    sub: "Central and sector programs we screen against your business model, location and stage.",
    leftHeading: "Who Can Apply?",
    rightHeading: "What Makes Us Different",
    items: [
      {
        title: "Startup India Seed Fund",
        text: "Financial assistance for early-stage startups for proof of concept, prototype development, product trials.",
        icon: "seed" as const,
      },
      {
        title: "MSME Technology Upgradation Schemes",
        text: "Capital subsidies for modernization and technology enhancement of manufacturing units.",
        icon: "tech" as const,
      },
      {
        title: "PMEGP (Prime Minister's Employment Generation Programme)",
        text: "Subsidies for new manufacturing, services, or trading micro-enterprises.",
        icon: "factory" as const,
      },
      {
        title: "Export Promotion Capital Goods (EPCG)",
        text: "Duty exemptions for capital goods imports for export-oriented businesses.",
        icon: "export" as const,
      },
      {
        title: "Biotechnology Industry Research Assistance Council (BIRAC) Grants",
        text: "Funding for biotech startups and innovation projects.",
        icon: "lab" as const,
      },
      {
        title: "Design-Led Manufacturing Scheme",
        text: "Support for domestic manufacturing of telecom and networking products.",
        icon: "chip" as const,
      },
      {
        title: "SIDBI Funds",
        text: "Special focus on MSMEs in priority sectors including manufacturing and service enterprises.",
        icon: "landmark" as const,
      },
      {
        title: "National Initiative for Developing and Harnessing Innovations (NIDHI)",
        text: "Support for tech-based startups and innovation.",
        icon: "rocket" as const,
      },
      {
        title: "Agriculture Processing and Rural Development Grants",
        text: "Funding for food processing and agribusiness ventures.",
        icon: "agri" as const,
      },
      {
        title: "Textile Sector Schemes",
        text: "Support for technical textiles, apparel manufacturing and textile park development.",
        icon: "textile" as const,
      },
    ],
  },
  services: {
    eyebrow: "Grants Desk",
    heading: "Our Grants Consultancy Services",
    sub: "End-to-end support from first scheme match to post-approval reporting.",
    items: [
      {
        title: "Scheme Identification",
        text: "Research and identify relevant grant programs aligned with your business model, industry, location and growth objectives.",
        icon: "search" as const,
      },
      {
        title: "Eligibility Assessment",
        text: "Conduct thorough evaluation of your business against scheme criteria to determine qualification and prepare a compliance roadmap.",
        icon: "clipboard" as const,
      },
      {
        title: "Strategic Application Planning",
        text: "Develop application strategies that highlight alignment between your business objectives and scheme priorities.",
        icon: "map" as const,
      },
      {
        title: "Proposal Development",
        text: "Create compelling proposals including project plans, impact assessments and implementation roadmaps tailored to scheme requirements.",
        icon: "file" as const,
      },
      {
        title: "Documentation Support",
        text: "Prepare comprehensive documentation packages including business plans, financial projections and supporting evidence.",
        icon: "folder" as const,
      },
      {
        title: "Application Submission",
        text: "Handle timely submission with proper formatting, organisation and adherence to all procedural requirements.",
        icon: "send" as const,
      },
      {
        title: "Interview & Presentation Support",
        text: "Prepare for and participate in evaluation interviews, presentations and clarification sessions with funding authorities.",
        icon: "mic" as const,
      },
      {
        title: "Post-Approval Compliance",
        text: "Ensure adherence to grant terms, reporting requirements and utilisation guidelines to prevent complications.",
        icon: "shield" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We File",
    heading: "Our Grant Application Process",
    sub: "A structured approach to maximise your grant approval chances.",
    steps: [
      {
        title: "Initial Consultation",
        text: "Understand your business model, objectives and funding requirements through comprehensive discussion.",
      },
      {
        title: "Scheme Research",
        text: "Identify all relevant government schemes and grants matching your business profile and requirements.",
      },
      {
        title: "Eligibility Analysis",
        text: "Assess qualification potential for identified schemes and determine documentation needs.",
      },
      {
        title: "Application Strategy",
        text: "Develop compelling narratives that align your business with scheme objectives and highlight potential impact.",
      },
      {
        title: "Documentation Preparation",
        text: "Create comprehensive application packages with all required forms, business plans and supporting documents.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Required Documents",
    note: "Documentation requirements vary significantly between grant schemes. Our team provides customised checklists specific to your target schemes after initial assessment.",
    items: [
      "Business registration certificates (Incorporation Certificate, MSME Registration, etc.)",
      "Financial statements for the past 2–3 years (as applicable)",
      "Cost estimates and quotations for proposed expenditures",
      "Industry-specific certifications and licenses",
      "Bank statements and existing financing documentation",
      "PAN, GST registration and other tax-related documents",
      "Detailed project report with implementation plan and timelines",
      "Land and building ownership/lease documents (where applicable)",
      "Promoter profiles with identification and address proofs",
      "Employment and skill development plans (for relevant schemes)",
    ],
    cta: "Download For More",
  },
} as const;

export const grantFaq = {
  heading: "Grant questions, answered",
  sub: "Eligibility, timelines, coverage and what happens after a grant is sanctioned.",
  items: [
    {
      question: "Which businesses qualify for government grants in India?",
      answer:
        "Grant eligibility varies by scheme, but generally focuses on registered entities including MSMEs, startups recognised by DPIIT, manufacturing units, export-oriented businesses and innovative enterprises.",
    },
    {
      question: "How long does the government grant application process take?",
      answer:
        "The total process from initiation to fund receipt generally spans 4–9 months, with smaller grants having faster processing times than larger funding programs.",
    },
    {
      question: "What costs are typically covered by government grants?",
      answer:
        "Grant coverage typically includes capital expenditure, infrastructure development, R&D activities, technology acquisition, quality certification, marketing and export promotion, and skill development.",
    },
    {
      question: "What are the common reasons for grant application rejection?",
      answer:
        "Common rejection factors include incomplete documentation, misalignment between project and scheme objectives, unrealistic financial projections, insufficient innovation, and lack of promoter experience.",
    },
    {
      question: "Are there any obligations after receiving a government grant?",
      answer:
        "Yes. Post-approval obligations typically include maintaining specific business operations for a minimum period, implementing the project according to the approved plan, and submitting periodic progress and financial reports.",
    },
    {
      question: "Can Vikas Bharat guarantee grant approval?",
      answer:
        "We cannot guarantee approval — final decisions rest with government authorities. Our specialised desk is built to improve success probability. The grants practice cites an 85% success rate on files we prepare and follow through.",
    },
  ],
} as const;

export const loanPage = {
  eyebrow: "Business Loans • Bank & NBFC Financing",
  heading: "Business Loans",
  kicker: "MSME • Startup • Working Capital • Equipment Financing",
  intro:
    "Get access to government-backed loans, funding options, and expert financial guidance to grow your business.",
  cta: "Start Your Funding Journey",
  imageAlt: "Advisor reviewing business loan options with a founder",
  stats: [
    { value: "₹500Cr+", label: "Funding Facilitated" },
    { value: "20,000+", label: "Businesses Supported" },
    { value: "25+", label: "Banks & NBFCs" },
    { value: "100%", label: "Expert Guidance" },
  ] as const,
  unlock: {
    eyebrow: "Funding Highlights",
    heading: "MSME financing, under one desk",
    paragraphs: [
      "Vikas Bharat is built around funding experience and MSME financing — government-backed loans, bank products and NBFC options matched to your stage and cash-flow need.",
      "We evaluate your profile, shortlist lenders, prepare the file, and stay with the application through verification until disbursement.",
    ],
    benefitsHeading: "What you get",
    benefits: [
      "Access to multiple financing options",
      "Expert funding guidance",
      "Government-backed schemes",
      "Bank and NBFC financing",
    ],
  },
  categories: {
    eyebrow: "Loan Map",
    heading: "Business Financing Solutions",
    sub: "Multiple forms of business financing for MSMEs and growing businesses.",
    leftHeading: "Core Loan Products",
    rightHeading: "Government-Backed Products",
    items: [
      {
        title: "Term Loans",
        text: "Business loans designed for long-term investments, expansion, infrastructure and other major business requirements.",
        icon: "landmark" as const,
      },
      {
        title: "Working Capital Loans",
        text: "Financing to manage day-to-day business expenses, inventory, salaries, supplier payments and cash-flow requirements.",
        icon: "wallet" as const,
      },
      {
        title: "Equipment Financing",
        text: "Funding for purchasing machinery, equipment and technology required for business expansion or modernization.",
        icon: "tech" as const,
      },
      {
        title: "Government Scheme Loans",
        text: "Access financing through government-supported programs designed specifically for MSMEs, startups and entrepreneurs.",
        icon: "factory" as const,
      },
      {
        title: "MUDRA Loans",
        text: "Government-backed financing for micro and small businesses, with loans available up to ₹10 lakh.",
        icon: "seed" as const,
      },
      {
        title: "CGTMSE Loans",
        text: "Collateral-free financing under the Credit Guarantee Fund Trust for Micro and Small Enterprises, with funding available up to ₹2 crore.",
        icon: "shield" as const,
      },
      {
        title: "Sector-Specific Loans",
        text: "Specialized financing options designed around specific industries, business models and government priorities.",
        icon: "rocket" as const,
      },
    ],
  },
  services: {
    eyebrow: "Why This Desk",
    heading: "Why Choose Vikas Bharat for Business Loans?",
    sub: "From eligibility to disbursement — a file that is matched, prepared and followed.",
    items: [
      {
        title: "Multiple Funding Options",
        text: "Access financing from banks, NBFCs and government-backed schemes based on your business requirements.",
        icon: "wallet" as const,
      },
      {
        title: "Better Loan Matching",
        text: "We evaluate your business profile and identify financing options that match your eligibility and funding needs.",
        icon: "search" as const,
      },
      {
        title: "Documentation Support",
        text: "Assistance with preparing financial statements, business documents, applications and other lender requirements.",
        icon: "folder" as const,
      },
      {
        title: "Faster Processing",
        text: "Structured documentation and application support helps reduce unnecessary delays during the loan process.",
        icon: "zap" as const,
      },
      {
        title: "Expert Financial Guidance",
        text: "Professional guidance throughout the funding journey, from eligibility assessment to loan disbursement.",
        icon: "users" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We File",
    heading: "Our Business Loan Process",
    sub: "A structured path from first assessment to money in the account.",
    steps: [
      {
        title: "Business Assessment",
        text: "Understand your business, financial position, funding requirement and growth objectives.",
      },
      {
        title: "Eligibility Analysis",
        text: "Evaluate your business against available loan programs, lender requirements and government schemes.",
      },
      {
        title: "Loan Selection",
        text: "Identify suitable banks, NBFCs and government financing options based on your profile.",
      },
      {
        title: "Documentation",
        text: "Prepare and organize the required financial, business and compliance documentation.",
      },
      {
        title: "Application Submission",
        text: "Submit the loan application to the appropriate lender with the required supporting information.",
      },
      {
        title: "Verification & Approval",
        text: "Coordinate with lenders during verification, clarification and approval stages.",
      },
      {
        title: "Loan Disbursement",
        text: "Complete the final formalities and facilitate disbursement of the approved funding.",
      },
    ],
  },
  documents: {
    eyebrow: "Paperwork",
    heading: "Documents Required",
    note: "Typical documentation is listed below. Our team sends a lender-specific checklist after the eligibility assessment so you only collect what is actually required.",
    items: [
      "Business registration documents",
      "PAN and GST registration",
      "Udyam/MSME registration",
      "Bank statements",
      "Income tax returns",
      "Audited financial statements",
      "Profit & loss statements",
      "Balance sheets",
      "Business plan/project report",
      "KYC documents",
      "Address proof",
      "Details of existing loans",
      "Collateral documents where applicable",
    ],
    cta: "Download For More",
  },
  schemes: {
    eyebrow: "Scheme Desk",
    heading: "Government-Backed Loan Schemes",
    sub: "Financing programs available to Indian MSMEs and businesses.",
    leftHeading: "Micro & MSME",
    rightHeading: "Startup & Sector",
    items: [
      {
        title: "MUDRA / PMMY",
        text: "Loans for micro enterprises and small businesses, with financing available up to ₹10 lakh.",
        icon: "seed" as const,
      },
      {
        title: "CGTMSE",
        text: "Collateral-free credit support for eligible MSMEs, with coverage for loans up to ₹2 crore.",
        icon: "shield" as const,
      },
      {
        title: "Startup India Schemes",
        text: "Funding assistance and financing opportunities designed for eligible startups.",
        icon: "rocket" as const,
      },
      {
        title: "SIDBI Financing",
        text: "Specialized financial assistance for MSMEs and businesses through SIDBI programs.",
        icon: "landmark" as const,
      },
      {
        title: "Sector-Specific Government Schemes",
        text: "Financing programs designed for businesses operating in priority sectors.",
        icon: "factory" as const,
      },
    ],
  },
} as const;

export const loanFaq = {
  heading: "Loan questions, answered",
  sub: "Product types, timelines, rates, collateral and eligibility for MSME financing.",
  items: [
    {
      question: "What types of business loans are available for MSMEs in India?",
      answer:
        "MSMEs in India can access multiple financing options including term loans, working capital loans, equipment financing, MUDRA loans up to ₹10 lakhs, collateral-free financing under CGTMSE schemes up to ₹2 crores and specialized sector-specific loan schemes.",
    },
    {
      question: "How long does the business loan approval process take?",
      answer:
        "Small-ticket working capital loans through NBFCs can be approved within 2–3 days. Standard bank term loans typically require 2–4 weeks. Government scheme loans such as PMMY may require 3–5 weeks because of additional verification processes.",
    },
    {
      question: "What interest rates can I expect for business loans?",
      answer:
        "Current business loan interest rates typically range from 9–18%. Banks: approximately 9–14% for secured loans. NBFCs: approximately 12–18%. Government schemes such as PMMY: approximately 8–11% for eligible businesses.",
    },
    {
      question: "What collateral is required for business loans?",
      answer:
        "Small working-capital loans under ₹10 lakhs are often available without collateral. Loans under CGTMSE can be availed up to ₹2 crores without collateral. For standard term loans, lenders typically require collateral coverage of approximately 100–125% of the loan value.",
    },
    {
      question: "How can I improve my business loan eligibility?",
      answer:
        "Maintain a credit score above 700, keep business documentation and registrations up to date, demonstrate steady revenue growth, maintain audited financial statements, keep a clean banking history, and prepare a detailed business plan.",
    },
    {
      question: "Can startups and new businesses get loans without significant operating history?",
      answer:
        "Yes, although options are more limited. New businesses can explore Startup India programs, SIDBI startup assistance, and specialized NBFC startup lending. Depending on the lender, collateral, higher equity contribution and personal guarantees may be required.",
    },
  ],
} as const;

export const nbfcPage = {
  eyebrow: "Alternative Financing • Flexible Funding",
  heading: "NBFC Financing Solutions",
  kicker: "Quick Disbursement • Flexible Eligibility • Specialized Products",
  intro:
    "Banks said no — or just too slow? NBFCs offer faster approvals, flexible eligibility, and loan products that banks don’t provide. Vikas Bharat finds the right NBFC for your business and handles everything from application to disbursement.",
  cta: "Get NBFC Loan Options",
  imageAlt: "Advisor matching a founder to NBFC financing partners",
  stats: [
    { value: "24–72hrs", label: "Disbursement Time" },
    { value: "₹1Cr+", label: "Funding Available" },
    { value: "25+", label: "NBFC Partners" },
    { value: "Flexible", label: "Eligibility Criteria" },
  ] as const,
  unlock: {
    eyebrow: "Faster Capital",
    heading: "NBFC Financing Solutions",
    paragraphs: [
      "When you need faster approval or a loan product banks do not offer, we match you to the right NBFC from our network of 25+ partners — working capital, machinery, LAP, or invoice discounting.",
      "Vikas Bharat helps businesses identify suitable financing based on their business model, financial profile and funding requirements — across banks, NBFCs, government schemes and specialised products.",
    ],
    benefitsHeading: "Why Choose NBFC Financing?",
    benefits: [
      "Faster approval compared with traditional banks",
      "Flexible eligibility criteria",
      "Specialized loan products",
      "Customized financing solutions",
      "Faster disbursement",
      "Financing for businesses that may not fit traditional bank criteria",
    ],
  },
  categories: {
    eyebrow: "Product Desk",
    heading: "NBFC Loan Products",
    sub: "Specialised financing products that banks often do not offer — matched to your purpose and cash flow.",
    leftHeading: "Working Capital & Growth",
    rightHeading: "Asset & Invoice Finance",
    items: [
      {
        title: "Working Capital Loans",
        text: "Short-term financing to manage operational expenses, inventory, payroll, supplier payments and cash-flow requirements.",
        icon: "wallet" as const,
      },
      {
        title: "Business Term Loans",
        text: "Structured financing for business expansion, equipment purchases, infrastructure and long-term investments.",
        icon: "landmark" as const,
      },
      {
        title: "Loan Against Property",
        text: "Financing against residential or commercial property for businesses requiring larger-ticket funding.",
        icon: "factory" as const,
      },
      {
        title: "Invoice Discounting",
        text: "Convert outstanding invoices into immediate working capital instead of waiting for customers to make payments.",
        icon: "file" as const,
      },
      {
        title: "Machinery Finance",
        text: "Funding specifically designed for purchasing machinery, equipment and business assets.",
        icon: "tech" as const,
      },
    ],
  },
  audience: {
    eyebrow: "Fit Check",
    heading: "Who Can Benefit From NBFC Financing?",
    sub: "NBFC financing is positioned for businesses that need speed, flexibility, or a product banks do not underwrite.",
    leftHeading: "When banks are too slow",
    rightHeading: "When the product must fit",
    items: [
      {
        title: "Faster loan approval",
        text: "Need a sanction without the typical bank queue and committee cycle.",
        icon: "rocket" as const,
      },
      {
        title: "Urgent working capital",
        text: "Inventory, payroll or supplier payments that cannot wait on a 2–4 week bank file.",
        icon: "wallet" as const,
      },
      {
        title: "Bank eligibility gaps",
        text: "Difficulty meeting traditional bank criteria — vintage, collateral or CIBIL band.",
        icon: "shield" as const,
      },
      {
        title: "Unconventional cash flows",
        text: "Inconsistent or seasonal revenue that cash-flow underwriting can still support.",
        icon: "seed" as const,
      },
      {
        title: "Specialized products",
        text: "Invoice discounting, machinery finance or LAP structured around the actual use of funds.",
        icon: "tech" as const,
      },
      {
        title: "Larger-ticket financing",
        text: "Bigger tickets where property-backed or specialised NBFC products are a better match.",
        icon: "landmark" as const,
      },
      {
        title: "Invoice-based financing",
        text: "Unlock cash against receivables instead of waiting on customer payment cycles.",
        icon: "file" as const,
      },
      {
        title: "Flexible repayment",
        text: "Structures that can flex with seasonality, collections and growth plans.",
        icon: "factory" as const,
      },
    ],
  },
  services: {
    eyebrow: "Why This Desk",
    heading: "Benefits of Choosing Vikas Bharat",
    sub: "A 25+ NBFC network, product matching, and a file that is prepared and followed to disbursement.",
    items: [
      {
        title: "25+ NBFC Network",
        text: "Access a network of more than 25 NBFC partners to find a suitable financing option.",
        icon: "wallet" as const,
      },
      {
        title: "Faster Processing",
        text: "NBFCs can provide faster approvals and disbursement compared with traditional bank financing.",
        icon: "zap" as const,
      },
      {
        title: "Product Matching",
        text: "We match businesses with appropriate products such as working capital, machinery finance, LAP and invoice discounting.",
        icon: "search" as const,
      },
      {
        title: "Documentation Support",
        text: "Assistance throughout the documentation and application process.",
        icon: "folder" as const,
      },
      {
        title: "Better Financing Structure",
        text: "Support in selecting and structuring financing according to the business requirement.",
        icon: "map" as const,
      },
    ],
  },
  ecosystem: {
    eyebrow: "Financing Desk",
    heading: "Business Financing Support",
    sub: "We help you identify suitable financing based on your business model, financial profile and funding requirements.",
    items: [
      {
        title: "Banks",
        text: "Term loans, working capital and scheme-linked bank products when the file fits a branch underwriting path.",
        icon: "landmark" as const,
      },
      {
        title: "NBFCs",
        text: "Faster, more flexible partners for cash-flow, invoice, machinery and property-backed tickets.",
        icon: "wallet" as const,
      },
      {
        title: "Government schemes",
        text: "MUDRA, CGTMSE and other backed programs where eligibility and documentation can unlock cheaper capital.",
        icon: "clipboard" as const,
      },
      {
        title: "Specialized products",
        text: "Invoice discounting, LAP and machinery finance structured around the actual use of funds.",
        icon: "zap" as const,
      },
    ],
  },
  process: {
    eyebrow: "How We File",
    heading: "Our NBFC Financing Process",
    sub: "From first assessment to funds in the account — matched, documented and followed.",
    steps: [
      {
        title: "Business Assessment",
        text: "Understand your business profile, financial position, funding requirement and purpose of the loan.",
      },
      {
        title: "Eligibility Evaluation",
        text: "Assess your financials, credit profile, revenue, business vintage and funding requirements.",
      },
      {
        title: "NBFC Matching",
        text: "Match your business with suitable NBFC partners and financing products.",
      },
      {
        title: "Documentation",
        text: "Collect and organize financial, business, KYC and supporting documents.",
      },
      {
        title: "Application & Verification",
        text: "Submit the application and coordinate with the NBFC during verification and underwriting.",
      },
      {
        title: "Approval",
        text: "Complete lender requirements and obtain the final sanction.",
      },
      {
        title: "Disbursement",
        text: "Complete the final formalities and receive the approved funds.",
      },
    ],
  },
} as const;

export const nbfcFaq = {
  heading: "NBFC questions, answered",
  sub: "How NBFC loans differ from banks, what happens after a rejection, products and disbursement speed.",
  items: [
    {
      question: "What is the difference between an NBFC loan and a bank loan?",
      answer:
        "Both are business loans, but NBFCs are faster to approve, more flexible on eligibility, and offer products like invoice discounting that most banks don't. The trade-off is interest rates that are typically 1–4% higher than PSU bank rates.",
    },
    {
      question: "Can I get an NBFC loan if my bank loan application was rejected?",
      answer:
        "Yes, in many cases. NBFCs use different credit models. Some focus more on your cash flows than your CIBIL score, while others accept lower scores such as 650+ that banks would reject.",
    },
    {
      question: "What NBFC loan products are available for MSMEs?",
      answer:
        "Common NBFC products for MSMEs include working capital loans, term loans, Loan Against Property (LAP), invoice discounting and machinery finance. Vikas Bharat matches businesses with the appropriate product based on their funding purpose.",
    },
    {
      question: "How long does it take to get an NBFC loan disbursed?",
      answer:
        "Most NBFC loans disburse within 24–72 hours after complete documentation. Some fintechs in our network can disburse working-capital loans the same day for pre-approved profiles.",
    },
  ],
} as const;

export const hero = {
  eyebrow: "VIKASBHART",
  headline: "Sapno Se Safalta Tak",
  subhead:
    "We help Indian startups and MSMEs grow, succeed, and contribute to an Atmanirbhar Bharat.",
  primaryCta: "Free Check on WhatsApp",
  secondaryCta: "Call an Expert",
  image: {
    src: photos.heroShopkeeper,
    alt: "Small shop owner smiling in front of their store",
  },
  secondaryImage: {
    src: photos.heroMeeting,
    alt: "Consultant reviewing loan and scheme documents with a business owner",
  },
  floatingProof: "3,000+ businesses helped",
  microcopy: [
    "No fees for the first call",
    "Hindi & English support",
    "Pan-India desk",
  ] as const,
  benefits: [
    {
      title: "Money pathways",
      text: "Bank loans, NBFC credit, and government subsidies matched to your business type.",
    },
    {
      title: "Licences done right",
      text: "FSSAI, ISO, BIS, GST, trademark — filed with clear timelines and status updates.",
    },
    {
      title: "One desk for everything",
      text: "Registration, funding, compliance, and growth advice without juggling five agencies.",
    },
  ],
  highlights: [
    { value: "2.45L+", label: "DPIIT startups" },
    { value: "4,567", label: "80 IAC Tax Exemption" },
    { value: "₹200 Cr", label: "Startup turnover cap" },
    { value: "4 cities", label: "Office presence" },
  ],
} as const;

export const trustBadges = [
  {
    label: "MSME Registered",
    image: photos.badgeMsme,
    alt: "MSME registration certificate badge",
  },
  {
    label: "ISO 9001:2015",
    image: photos.badgeIso,
    alt: "ISO 9001:2015 quality certification badge",
  },
  {
    label: "Govt. Scheme Partner",
    image: photos.badgeGovt,
    alt: "Government scheme partner badge",
  },
  {
    label: "5.0 Google Rating",
    image: photos.badgeRating,
    alt: "5.0 star Google rating badge",
  },
] as const;

export const passbook = {
  title: "Our Ledger",
  subtitle:
    "Real outcomes from registrations, loans, and scheme filings — stamped in plain numbers so you can trust the desk before you dial.",
  body: "We track every rupee sanctioned, every licence issued, and every first reply. These figures update from live case work across Ahmedabad, Jaipur, Delhi NCR, and Hyderabad.",
  stats: [
    { value: "₹480Cr+", label: "Money Delivered", stamp: "PAID" },
    { value: "12,000+", label: "Businesses Helped", stamp: "DONE" },
    { value: "48 hrs", label: "First Reply Time", stamp: "FAST" },
    { value: "95%", label: "Applications Approved", stamp: "OK" },
  ],
  extras: [
    { label: "DPIT-recognised startups", value: "2,45,430" },
    { label: "PAN India 80 IAC tax exemption", value: "4,567" },
    { label: "Startup turnover threshold", value: "₹200 Cr" },
  ],
} as const;

/** Official Startup India / DPIIT snapshot (static public figures) */
export const startupIndia = {
  id: "startup-india",
  eyebrow: "Startup India · DPIIT",
  heading: "Recognition numbers that matter.",
  sub: "Live snapshot founders ask about first — recognition scale, tax relief, and the revised turnover ceiling.",
  notice:
    "Pursuant to DPIIT Gazette Notification 108(E) dated 4 February 2026, the turnover threshold for Startup recognition has been revised from ₹100 crore to ₹200 crore. DPIIT-recognised startups should log in to the Startup India portal and download their updated Startup Recognition certificate.",
  stats: [
    {
      value: "2,45,430",
      label: "DPIIT Recognised Startups",
      stamp: "DPIIT",
    },
    {
      value: "4,567",
      label: "80 IAC Tax Exemption",
      stamp: "TAX",
    },
    {
      value: "₹200 Cr",
      label: "Startup turnover threshold",
      stamp: "NEW",
    },
  ],
} as const;

/** MSME counts by state / UT — mapped to @svg-maps/india location ids */
export const network = {
  id: "network",
  headingLead: "We have the",
  headingStrong: "Strongest network of",
  headingAccent: "MSME guidance",
  headingEnd: "in India",
  sub: "Providing support across the nation — hover any state for MSME counts.",
  cta: "Share Your Business Plan Today",
  ctaHref: `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Hi, I want to share my business plan.")}`,
  moreLabel: "and 100+ more",
  totalLabel: "Total MSMEs across India",
  totalCount: 78_302_882,
  /** SVG coords on @svg-maps/india viewBox (0 0 612 696) */
  metros: [
    { id: "delhi", name: "Delhi NCR", x: 187, y: 205, office: true, label: "right" },
    { id: "jaipur", name: "Jaipur", x: 155, y: 235, office: true, label: "right" },
    { id: "ahmedabad", name: "Ahmedabad", x: 88, y: 300, office: true, label: "right" },
    { id: "mumbai", name: "Mumbai", x: 118, y: 405, office: false, label: "right" },
    { id: "hyderabad", name: "Hyderabad", x: 228, y: 455, office: true, label: "right" },
    { id: "bengaluru", name: "Bengaluru", x: 185, y: 555, office: false, label: "right" },
    { id: "chennai", name: "Chennai", x: 248, y: 585, office: false, label: "left" },
    { id: "kolkata", name: "Kolkata", x: 415, y: 320, office: false, label: "left" },
  ] as const,
  partners: [
    "MSME India",
    "Udyam",
    "Mudra",
    "PMEGP",
    "Startup India",
    "Stand-Up India",
    "GST Network",
    "FSSAI",
    "ISO",
    "BIS",
  ] as const,
  states: [
    { rank: 1, id: "mh", name: "Maharashtra", count: 10_144_478 },
    { rank: 2, id: "up", name: "Uttar Pradesh", count: 8_603_272 },
    { rank: 3, id: "tn", name: "Tamil Nadu", count: 6_227_609 },
    { rank: 4, id: "wb", name: "West Bengal", count: 5_310_326 },
    { rank: 5, id: "ka", name: "Karnataka", count: 4_991_314 },
    { rank: 6, id: "mp", name: "Madhya Pradesh", count: 4_827_725 },
    { rank: 7, id: "rj", name: "Rajasthan", count: 4_446_338 },
    { rank: 8, id: "gj", name: "Gujarat", count: 4_369_973 },
    { rank: 9, id: "br", name: "Bihar", count: 4_273_285 },
    { rank: 10, id: "ap", name: "Andhra Pradesh", count: 3_928_602 },
    { rank: 11, id: "tg", name: "Telangana", count: 3_833_083 },
    { rank: 12, id: "or", name: "Odisha", count: 2_437_145 },
    { rank: 13, id: "pb", name: "Punjab", count: 2_137_630 },
    { rank: 14, id: "hr", name: "Haryana", count: 2_018_439 },
    { rank: 15, id: "kl", name: "Kerala", count: 1_842_567 },
    { rank: 16, id: "jh", name: "Jharkhand", count: 1_558_451 },
    { rank: 17, id: "as", name: "Assam", count: 1_512_853 },
    { rank: 18, id: "dl", name: "Delhi", count: 1_468_297 },
    { rank: 19, id: "ct", name: "Chhattisgarh", count: 1_348_345 },
    { rank: 20, id: "jk", name: "Jammu & Kashmir", count: 851_815 },
    { rank: 21, id: "ut", name: "Uttarakhand", count: 649_476 },
    { rank: 22, id: "hp", name: "Himachal Pradesh", count: 343_104 },
    { rank: 23, id: "tr", name: "Tripura", count: 314_007 },
    { rank: 24, id: "mn", name: "Manipur", count: 178_102 },
    { rank: 25, id: "ga", name: "Goa", count: 130_080 },
    { rank: 26, id: "py", name: "Puducherry", count: 108_206 },
    { rank: 27, id: "ch", name: "Chandigarh", count: 81_054 },
    { rank: 28, id: "nl", name: "Nagaland", count: 74_746 },
    { rank: 29, id: "ml", name: "Meghalaya", count: 74_087 },
    { rank: 30, id: "mz", name: "Mizoram", count: 52_518 },
    { rank: 31, id: "ar", name: "Arunachal Pradesh", count: 48_870 },
    { rank: 32, id: "sk", name: "Sikkim", count: 36_269 },
    {
      rank: 33,
      id: "dn",
      name: "Dadra & Nagar Haveli and Daman & Diu",
      count: 35_889,
      aliasIds: ["dd"] as const,
    },
    { rank: 34, id: "an", name: "Andaman & Nicobar Islands", count: 22_212 },
    { rank: 35, id: "la", name: "Ladakh", count: 20_264 },
    { rank: 36, id: "ld", name: "Lakshadweep", count: 2_451 },
  ],
} as const;

export const missionTrees = {
  id: "vision",
  eyebrow: "The Ink Compass",
  heading: "Spin the seal. Lock a mandate.",
  sub: "Four living mandates orbit the VIKASBHART seal. When a ring locks at the meridian, support blooms outward from the center.",
  hubLabel: "VIKASBHART",
  hubTagline: "Sapno Se Safalta Tak",
  trees: [
    {
      id: "core-mission",
      root: "Core Mission",
      blurb: "Why we exist — Bharat-first growth for startups & MSMEs.",
      accent: "marigold" as const,
      children: [
        "Atmanirbhar Bharat",
        "MSME Empowerment",
        "Nation Building",
        "Viksit Bharat Vision",
      ],
    },
    {
      id: "funding",
      root: "Funding Assistance",
      blurb: "Money pathways we open — grants, loans, subsidies, reports.",
      accent: "success" as const,
      children: [
        "Government Grants",
        "Seed Fund Support",
        "Business Loan Assistance",
        "Subsidy Consulting",
        "Project Report Preparation",
        "Scheme Eligibility Assessment",
      ],
    },
    {
      id: "process",
      root: "Our Process",
      blurb: "How your file moves — guided, documented, on time.",
      accent: "indigo" as const,
      children: [
        "Expert Guidance",
        "End-to-End Support",
        "Documentation Assistance",
        "Dedicated Consultants",
        "Transparent Workflow",
        "Timely Execution",
      ],
    },
    {
      id: "benefits",
      root: "Key Benefits",
      blurb: "What you walk away with — credibility and sustainable growth.",
      accent: "ink" as const,
      children: [
        "Professional Credibility",
        "Economic Growth Partner",
        "Modern Corporate Tone",
        "Sustainable Business Building",
      ],
    },
  ],
} as const;

export const about = {
  id: "about",
  eyebrow: "01 / Company Introduction",
  heading: "Who we are. What we do. Who we help.",
  body: "Vikas Bharat is a pan-India business help desk for startups and MSMEs — registration, funding, certifications, and growth support explained in clear Hindi and English.",
  whoWeAre: {
    title: "Who We Are",
    text: "A walk-in consultancy built for founders and shop owners who need capital, licences, and compliance without portal jargon.",
  },
  whatWeDo: {
    title: "What We Do",
    text: "We map the right grant, loan, registration, or certification path — then handle documentation, filing, and follow-up until the outcome is stamped.",
  },
  whoWeHelp: {
    title: "Who We Help",
    text: "First-time entrepreneurs, MSMEs, retailers, manufacturers, and growing startups across India who want one accountable desk.",
  },
  mission:
    "Make capital, compliance, and licences reachable for every serious small business in India.",
  vision:
    "A Bharat where opening a shop or startup never fails because of paperwork confusion.",
  values: [
    {
      title: "Trust",
      text: "Clear advice before any document is collected — eligibility first, paperwork second.",
    },
    {
      title: "Transparency",
      text: "Fees, timelines, and next steps shared in writing on WhatsApp so nothing stays hidden.",
    },
    {
      title: "Customer First",
      text: "Your business type and city drive the plan — not a one-size template.",
    },
    {
      title: "Integrity",
      text: "Private consultancy honesty: we never claim to be a government office.",
    },
    {
      title: "Excellence",
      text: "Filings screened for compliance so you do not file twice or miss a query.",
    },
    {
      title: "Growth",
      text: "Every case aims at the next stage — sanction, licence live, or expansion-ready.",
    },
  ],
  servicesOverview: [
    {
      title: "Grants",
      text: "Central and state subsidy pathways matched to your profile.",
      imageKey: "aboutServiceGrants" as const,
    },
    {
      title: "Business Registration",
      text: "Company, LLP, proprietorship, MSME/Udyam, and GST setup.",
      imageKey: "aboutServiceRegistration" as const,
    },
    {
      title: "Certification & Compliance",
      text: "ISO, BIS/CRS, FSSAI, ZED, and related compliance filings.",
      imageKey: "aboutServiceCerts" as const,
    },
    {
      title: "Loans & Funding",
      text: "Bank and NBFC credit products with document-ready files.",
      imageKey: "aboutServiceLoans" as const,
    },
    {
      title: "Marketing & Branding",
      text: "Brand basics and go-to-market support for growing desks.",
      imageKey: "aboutServiceMarketing" as const,
    },
    {
      title: "Legal Consultancy",
      text: "Agreements, compliance reviews, and founder legal guidance.",
      imageKey: "aboutServiceLegal" as const,
    },
    {
      title: "NBF / Financial Solutions",
      text: "NBFC pathways and structured financial solutions for MSMEs.",
      imageKey: "aboutServiceNbf" as const,
    },
  ],
  process: [
    {
      title: "Consultation",
      text: "Share your business need on a free discovery call.",
    },
    {
      title: "Solution Mapping",
      text: "We shortlist realistic grants, loans, or licences for you.",
    },
    {
      title: "Documentation",
      text: "WhatsApp checklist — only the papers that matter.",
    },
    {
      title: "Application / Execution",
      text: "We prepare and file; you review and sign.",
    },
    {
      title: "Follow-Up",
      text: "Portal and bank queries tracked until progress is clear.",
    },
    {
      title: "Results",
      text: "Sanction, licence, or registration — outcome in your hands.",
    },
  ],
  certifications: [
    {
      title: "ISO Certifications",
      text: "Quality and process certifications for business credibility.",
      imageKey: "aboutCertIso" as const,
    },
    {
      title: "BIS / CRS",
      text: "Bureau of Indian Standards and CRS compliance support.",
      imageKey: "aboutCertBis" as const,
    },
    {
      title: "FSSAI",
      text: "Food business licences with clear document paths.",
      imageKey: "aboutCertFssai" as const,
    },
    {
      title: "Tax Exemption – Section 80-IAC",
      text: "Startup tax exemption pathway guidance where eligible.",
      imageKey: "aboutCertTax" as const,
    },
    {
      title: "ZED Certification",
      text: "Zero Defect Zero Effect certification support for MSMEs.",
      imageKey: "aboutCertZed" as const,
    },
    {
      title: "Other Certifications",
      text: "Additional trade and industry certifications as needed.",
      imageKey: "aboutCertOther" as const,
    },
  ],
  whyChoose: [
    {
      title: "Expert Guidance",
      text: "Scheme and funding advisors who explain options in plain language.",
    },
    {
      title: "End-to-End Support",
      text: "From first call to stamped outcome — one accountable team.",
    },
    {
      title: "Transparent Process",
      text: "Clear steps, written fee summaries, and weekly status updates.",
    },
    {
      title: "Multiple Business Solutions",
      text: "Grants, loans, registration, certifications, legal, and more — one desk.",
    },
    {
      title: "Dedicated Support",
      text: "WhatsApp-first follow-ups so you always know what happens next.",
    },
    {
      title: "Growth-Focused Approach",
      text: "Every filing is aimed at unlocking the next stage of your business.",
    },
  ],
  faqCategories: [
    {
      id: "general",
      title: "General Questions",
      items: [
        {
          q: "What does Vikas Bharat do?",
          a: "We help startups and MSMEs with registration, funding, certifications, compliance, and growth support under one desk.",
        },
        {
          q: "Are you a government office?",
          a: "No. We are a private consultancy. We work with you on forms, banks, and portals — we are not a government department.",
        },
      ],
    },
    {
      id: "funding",
      title: "Funding Questions",
      items: [
        {
          q: "Can I get a loan without collateral?",
          a: "Often yes under Mudra and select NBFC products — eligibility depends on business vintage and cash flows.",
        },
        {
          q: "How long does funding usually take?",
          a: "Most funding cases take about 4–8 weeks depending on the product, bank queries, and document readiness.",
        },
      ],
    },
    {
      id: "registration",
      title: "Registration Questions",
      items: [
        {
          q: "Do I need Udyam if I already have GST?",
          a: "Yes for most MSME schemes and many bank products — Udyam is key eligibility proof.",
        },
        {
          q: "Which structure should I choose?",
          a: "Proprietorship is often faster for a single-owner shop. Private limited suits fundraising and larger contracts.",
        },
      ],
    },
    {
      id: "certification",
      title: "Certification Questions",
      items: [
        {
          q: "Which certifications do you support?",
          a: "ISO, BIS/CRS, FSSAI, ZED, Section 80-IAC pathways, and other trade certifications as needed.",
        },
        {
          q: "How do I know which certificate I need?",
          a: "A short consultation maps your industry and sales channel to the right licence set — no guesswork filing.",
        },
      ],
    },
    {
      id: "digital",
      title: "Digital Solution Questions",
      items: [
        {
          q: "Do you help with digital / branding needs?",
          a: "Yes — marketing and branding support sits alongside registration and funding so growth is not left for later.",
        },
        {
          q: "Can updates happen on WhatsApp?",
          a: "Yes. Checklists, fee summaries, and status updates are shared on WhatsApp by default.",
        },
      ],
    },
    {
      id: "process",
      title: "Process Questions",
      items: [
        {
          q: "What are the steps after I contact you?",
          a: "Consultation → solution mapping → documentation → application/execution → follow-up → results.",
        },
        {
          q: "Is the first consultation free?",
          a: "Yes. The first call is free with no obligation — we clarify fit before any paid work begins.",
        },
      ],
    },
  ],
  images: {
    team: {
      src: photos.aboutTeam,
      alt: "Vikas Bharat consultants with small business clients",
    },
    office: {
      src: photos.aboutOffice,
      alt: "Walk-in business help desk office",
    },
    mission: {
      src: photos.aboutMission,
      alt: "Mission visual — growth for Indian MSMEs",
    },
  },
} as const;

/** About page — Certifications & Recognition (real credentials only) */
export const aboutCredentials = {
  id: "credentials",
  section: "06",
  eyebrow: "CREDENTIALS",
  headingLead: "Proof that travels",
  headingAccent: "with every file.",
  hindi: "मान्यता एवं प्रमाण",
  sub: "The same stamps, registries, and partner desks we cite when a founder asks why our filings hold — ISO process quality, MSME registration, bank liaison, and scheme documentation.",
  founded: "2016",
  certifications: [
    {
      id: "iso",
      num: "01",
      name: "ISO 9001:2015",
      authority: "Process quality systems",
      detail: "ISO 9001:2015 process quality — documented workflows for filings, follow-ups, and client status.",
      status: "VERIFIED",
      tag: "CERTIFIED",
      image: photos.serviceCertificate,
      detailImage: photos.badgeIso,
    },
    {
      id: "msme",
      num: "02",
      name: "MSME Registered",
      authority: "MSME / Udyam consultancy",
      detail: "MSME registered consultancy — Udyam-ready guidance for scheme eligibility and bank desks.",
      status: "ACTIVE",
      tag: "REGISTERED",
      image: photos.badgeMsme,
      detailImage: photos.seoUdyam,
    },
    {
      id: "bank",
      num: "03",
      name: "Bank & NBFC Partner Desk",
      authority: "Partner bank recognition",
      detail: "Bank & NBFC partner desk — liaison with branch managers for Mudra, CGTMSE, and collateral-light products.",
      status: "LIAISON",
      tag: "PARTNER",
      image: photos.serviceLoan,
      detailImage: photos.badgeGovt,
    },
    {
      id: "schemes",
      num: "04",
      name: "Scheme Documentation",
      authority: "Central & state scheme portals",
      detail: "Scheme documentation specialists — checklists and DPRs matched to Mudra, PMEGP, Startup India, and Stand-Up India pathways.",
      status: "SPECIALIST",
      tag: "SCHEMES",
      image: photos.stepMatch,
      detailImage: photos.schemeMudra,
    },
  ],
  recognition: [
    {
      id: "govt",
      label: "Government Scheme Partner",
      text: "Direct pathway guidance for official subsidy and credit programmes.",
      image: photos.badgeGovt,
    },
    {
      id: "rating",
      label: "5.0 Google Rating",
      text: "Client-reviewed desk presence across our walk-in cities.",
      image: photos.badgeRating,
    },
    {
      id: "cities",
      label: "Four-City Help Desk",
      text: "Ahmedabad, Jaipur, Delhi NCR, and Hyderabad — real rooms, not call centres only.",
      image: photos.aboutOffice,
    },
    {
      id: "msme-reg",
      label: "MSME Registration",
      text: "Udyam registration support so founders carry formal eligibility proof.",
      image: photos.seoUdyam,
    },
  ],
  affiliations: [
    "MSME India",
    "Udyam",
    "Mudra",
    "PMEGP",
    "Startup India",
    "Stand-Up India",
    "GST Network",
    "FSSAI",
    "ISO",
    "BIS",
  ],
} as const;

export const services = {
  eyebrow: "What We Do",
  heading: "Ek jagah, har madad.",
  sub: "Everything your business needs under one roof — registration, funding, licences, growth, and legal — with bilingual guidance and WhatsApp-first updates.",
  overview:
    "Whether you are registering a private limited company, applying for a Mudra loan, claiming a PMEGP subsidy, or renewing FSSAI, our desk maps the path, collects the right papers, and follows up with banks and portals until the outcome is real.",
  categories: [
    {
      title: "Registration & tax",
      text: "Company, LLP, proprietorship, MSME/Udyam, GST, and basic compliance calendars.",
    },
    {
      title: "Capital & schemes",
      text: "Bank/NBFC loans, collateral-light products, and central/state subsidies matched to your profile.",
    },
    {
      title: "Licences & marks",
      text: "FSSAI, ISO, BIS, trade licences, and trademark filing with clear document checklists.",
    },
  ],
  comparison: [
    {
      feature: "Document checklist in Hindi + English",
      us: true,
      diy: false,
      generic: "Sometimes",
    },
    {
      feature: "Scheme + loan match in one desk",
      us: true,
      diy: false,
      generic: false,
    },
    {
      feature: "WhatsApp status until money/licence lands",
      us: true,
      diy: false,
      generic: "Rare",
    },
    {
      feature: "Walk-in offices in 4 cities",
      us: true,
      diy: false,
      generic: false,
    },
  ],
  items: [
    {
      title: "Start a Business",
      subtitle: "Company / Dukaan register karo",
      image: photos.serviceRegistration,
      slug: "registration",
      aspectRatio: "4 / 5",
      summary:
        "Incorporate a company or LLP, register a proprietorship dukaan, get MSME/Udyam, and activate GST with a single coordinated filing plan.",
      benefits: [
        "Name approval & incorporation filing",
        "Udyam / MSME certificate for scheme eligibility",
        "GST registration with return calendar basics",
        "Bank KYC pack prepared for account opening",
      ],
      documents: [
        "PAN & Aadhaar of promoters",
        "Address proof of business premises",
        "Passport photos & specimen signatures",
        "Partnership deed / MoA-AoA drafts (as applicable)",
      ],
      timeline: "7–21 working days depending on structure",
      faqs: [
        {
          q: "Private limited vs proprietorship — which is faster?",
          a: "Proprietorship + GST is usually faster for a single-owner dukaan. Private limited suits fundraising and larger contracts.",
        },
        {
          q: "Do I need Udyam if I already have GST?",
          a: "Yes for most MSME schemes and many bank products — Udyam is the key eligibility proof.",
        },
      ],
      includes: [
        { label: "Company / dukaan register", icon: "building" as const },
        { label: "MSME / Udyam", icon: "store" as const },
        { label: "GST setup", icon: "file" as const },
      ],
    },
    {
      title: "Get a Loan",
      subtitle: "Bank se paisa dilwao",
      image: photos.serviceLoan,
      slug: "loan",
      aspectRatio: "4 / 5",
      summary:
        "We match you to Mudra, Stand-Up India, working-capital, and NBFC products — then prepare the file banks actually accept.",
      benefits: [
        "Lender shortlist based on turnover & collateral",
        "CMA / basic projections where required",
        "Application follow-up until sanction",
        "Disbursement checklist for account credit",
      ],
      documents: [
        "KYC + business registration proofs",
        "Bank statements (6–12 months)",
        "ITR / GST returns where available",
        "Quotations / project cost sheet",
      ],
      timeline: "3–8 weeks typical for MSME tickets",
      faqs: [
        {
          q: "Can I get a loan without collateral?",
          a: "Often yes under Mudra and select NBFC products — eligibility depends on business vintage and cash flows.",
        },
      ],
      includes: [
        { label: "Bank / NBFC match", icon: "rupee" as const },
        { label: "Paperwork handled", icon: "file" as const },
        { label: "Follow-up till money lands", icon: "check" as const },
      ],
    },
    {
      title: "Government Grant",
      subtitle: "Sarkar se muft paisa",
      image: photos.serviceGrant,
      slug: "grant",
      aspectRatio: "4 / 5",
      summary:
        "PMEGP, seed funds, and state subsidies — we check fit, prepare DPR-style packs, and track portal status.",
      benefits: [
        "Eligibility screen across 120+ schemes",
        "Project report support",
        "Portal filing & query handling",
        "Subsidy claim follow-up",
      ],
      documents: [
        "Udyam / business proof",
        "Project cost & quotations",
        "Own contribution proof",
        "Category certificates (if claiming reserved benefits)",
      ],
      timeline: "4–12 weeks depending on scheme queue",
      faqs: [
        {
          q: "Is subsidy free money?",
          a: "Subsidy reduces your project cost or loan burden when approved — it is not instant cash without a viable project.",
        },
      ],
      includes: [
        { label: "Scheme match", icon: "clipboard" as const },
        { label: "Application filing", icon: "file" as const },
        { label: "Subsidy follow-up", icon: "rupee" as const },
      ],
    },
    {
      title: "Licence & Certificate",
      subtitle: "FSSAI, ISO, GST wagera",
      image: photos.serviceCertificate,
      slug: "certificate",
      aspectRatio: "4 / 5",
      summary:
        "Food, quality, and trade licences that unlock marketplaces, tenders, and buyer trust.",
      benefits: [
        "FSSAI basic / state / central guidance",
        "ISO documentation coaching",
        "BIS pathway overview",
        "Trademark search & filing support",
      ],
      documents: [
        "Business identity & address proofs",
        "Product / process list",
        "Label / packaging samples (FSSAI)",
        "Quality manual inputs (ISO)",
      ],
      timeline: "1–6 weeks by licence type",
      faqs: [
        {
          q: "Do online sellers need FSSAI?",
          a: "Most food sellers do — we map the correct category before you pay any portal fee.",
        },
      ],
      includes: [
        { label: "FSSAI", icon: "check" as const },
        { label: "ISO / BIS", icon: "clipboard" as const },
        { label: "GST & trade licences", icon: "file" as const },
      ],
    },
    {
      title: "Grow Your Business",
      subtitle: "Naye customer, naya branch",
      image: photos.serviceGrowth,
      slug: "growth",
      aspectRatio: "4 / 5",
      summary:
        "Local marketing plans, branch feasibility, and funding for expansion once your core licence and GST are stable.",
      benefits: [
        "Customer acquisition playbooks for local trade",
        "Second-unit / franchise readiness check",
        "Working-capital sizing",
        "Digital listing hygiene (maps, catalogues)",
      ],
      documents: [
        "Current sales snapshot",
        "Rent / property options for expansion",
        "Staff & inventory estimates",
      ],
      timeline: "Advisory sprints of 2–4 weeks",
      faqs: [
        {
          q: "Do you run ads for me?",
          a: "We set strategy and checklists; media buying can be coordinated with your preferred vendor.",
        },
      ],
      includes: [
        { label: "Naye customers", icon: "growth" as const },
        { label: "Marketing help", icon: "handshake" as const },
        { label: "Naya branch planning", icon: "store" as const },
      ],
    },
    {
      title: "Legal Help",
      subtitle: "Kaagaz aur kanoon ki madad",
      image: photos.serviceLegal,
      slug: "legal",
      aspectRatio: "4 / 5",
      summary:
        "Agreements, compliance calendars, and notices — practical legal support so small teams do not miss deadlines.",
      benefits: [
        "Vendor & partner agreement templates reviewed",
        "Basic labour & shop act orientation",
        "Notice & reply coordination",
        "Annual compliance reminders",
      ],
      documents: [
        "Existing contracts",
        "Company / firm papers",
        "Notice copies (if any)",
      ],
      timeline: "Depends on matter — first review in 48–72 hrs",
      faqs: [
        {
          q: "Is this a law firm?",
          a: "We are a consultancy desk that coordinates with qualified professionals where courtroom or complex counsel is needed.",
        },
      ],
      includes: [
        { label: "Contracts & kaagaz", icon: "file" as const },
        { label: "Compliance checks", icon: "clipboard" as const },
        { label: "Legal guidance", icon: "scale" as const },
      ],
    },
  ],
} as const;

export function getServiceBySlug(slug: string) {
  return services.items.find((item) => item.slug === slug);
}

export function getAllServiceSlugs() {
  return services.items
    .map((item) => item.slug)
    .filter((slug) => slug !== "grant" && slug !== "loan");
}

export const howItWorks = {
  eyebrow: "The Process",
  heading: "4 kadam, poora kaam.",
  sub: "You just show up. We handle the rest — from a 2-minute discovery call to money or licence in hand.",
  diagram: {
    src: photos.processDiagram,
    alt: "Four-step process diagram from call to disbursement",
  },
  steps: [
    {
      title: "Tell Us About You",
      caption: "2-minute call. No forms.",
      detail:
        "Share business type, city, turnover band, and what you need — loan, licence, registration, or subsidy. We reply on WhatsApp with a simple checklist.",
      image: photos.stepCall,
    },
    {
      title: "We Find Your Match",
      caption: "We check 120+ schemes for you.",
      detail:
        "Our desk screens loans and government schemes against your eligibility, then ranks the top 2–3 realistic options with timelines.",
      image: photos.stepMatch,
    },
    {
      title: "We Do the Paperwork",
      caption: "You just sign. We handle the rest.",
      detail:
        "We assemble KYC, statements, quotations, and portal forms. You review and sign — we file and track queries.",
      image: photos.stepPaperwork,
    },
    {
      title: "Money in Your Account",
      caption: "We follow up until it's done.",
      detail:
        "Sanction, disbursement, licence download, or GST live — we stay on the case until the outcome is in your hands.",
      image: photos.stepMoney,
    },
  ],
} as const;

export const caseStudies = {
  eyebrow: "Case Studies",
  heading: "Challenge → solution → paisa.",
  sub: "Short stories from food, hardware, and tailoring businesses — what blocked them, what we filed, and what landed.",
  items: [
    {
      name: "Ritu Sharma",
      business: "Saanvi Food Works",
      image: photos.caseFood,
      challenge: "Needed working capital + FSSAI clarity for marketplace listing.",
      solution: "Mudra file + FSSAI state licence + GST hygiene check.",
      process: "Call → document pack → bank file → licence parallel track.",
      outcome: "₹22L sanctioned in 6 weeks; listings unblocked.",
      metrics: ["₹22L loan", "FSSAI live", "6 weeks"],
      quote:
        "I only signed papers. They did everything else. ₹22 lakh in 6 weeks.",
    },
    {
      name: "Manoj Verma",
      business: "Verma Hardware",
      image: photos.caseHardware,
      challenge: "Did not know a subsidy existed for expansion machinery.",
      solution: "PMEGP eligibility screen + project cost sheet + bank liaison.",
      process: "Scheme match → DPR lite → agency & bank coordination.",
      outcome: "₹8L subsidy component approved alongside term loan.",
      metrics: ["₹8L subsidy", "Machine upgrade", "New SKUs"],
      quote:
        "I didn't know I could get a govt. subsidy. They found it for me.",
    },
    {
      name: "Asha Devi",
      business: "Asha Tailoring",
      image: photos.caseTailoring,
      challenge: "First-time borrower scared of English forms and hidden fees.",
      solution: "Hindi walkthrough + Mudra Kishor path + Udyam fresh filing.",
      process: "Udyam → checklist on WhatsApp → branch visit with us.",
      outcome: "₹5L loan for machines and festival inventory.",
      metrics: ["₹5L loan", "Udyam done", "Hindi-first"],
      quote: "Sab kuch Hindi mein samjhaya. Bahut aasan tha.",
    },
  ],
} as const;

/** About page — Customer Success Stories (editorial human impact) */
export const aboutStories = {
  id: "customer-stories",
  section: "07",
  eyebrow: "HUMAN IMPACT",
  headingLead: "Real people.",
  headingAccent: "Real transform.",
  hindi: "Unki kahani, unki zubaani.",
  sub: "Short stories from food, hardware, and tailoring businesses — what blocked them, what we filed, and what landed.",
  continuity: "FROM PROOF → PEOPLE",
  exitLabel: "TRUST · HUMAN IMPACT · MOMENTUM",
  exitLead: "Every file has a face.",
  exitAccent: "Every outcome has a name.",
  items: [
    {
      id: "ritu",
      num: "01",
      name: "Ritu Sharma",
      business: "Saanvi Food Works",
      businessType: "Food manufacturing",
      loanType: "Mudra Finance",
      challenge: "Needed working capital + FSSAI clarity for marketplace listing.",
      solution: "Mudra file + FSSAI state licence + GST hygiene check.",
      process: "Call → document pack → bank file → licence parallel track.",
      outcome: "₹22L sanctioned in 6 weeks; listings unblocked.",
      metrics: ["₹22L loan", "FSSAI live", "6 weeks"],
      quote:
        "I only signed papers. They did everything else. ₹22 lakh in 6 weeks.",
      portrait: photos.personRitu,
      businessImage: photos.caseFood,
      challengeImage: photos.storyFoodPrep,
      outcomeImage: photos.storyFoodMarket,
      layout: "portrait-lead" as const,
    },
    {
      id: "manoj",
      num: "02",
      name: "Manoj Verma",
      business: "Verma Hardware",
      businessType: "Retail / hardware",
      loanType: "PMEGP Subsidy",
      challenge: "Did not know a subsidy existed for expansion machinery.",
      solution: "PMEGP eligibility screen + project cost sheet + bank liaison.",
      process: "Scheme match → DPR lite → agency & bank coordination.",
      outcome: "₹8L subsidy component approved alongside term loan.",
      metrics: ["₹8L subsidy", "Machine upgrade", "New SKUs"],
      quote:
        "I didn't know I could get a govt. subsidy. They found it for me.",
      portrait: photos.personManoj,
      businessImage: photos.caseHardware,
      challengeImage: photos.storyHardwareShop,
      outcomeImage: photos.storyHardwareMachine,
      layout: "business-canvas" as const,
    },
    {
      id: "asha",
      num: "03",
      name: "Asha Devi",
      business: "Asha Tailoring",
      businessType: "Services / garments",
      loanType: "Mudra Kishor",
      challenge: "First-time borrower scared of English forms and hidden fees.",
      solution: "Hindi walkthrough + Mudra Kishor path + Udyam fresh filing.",
      process: "Udyam → checklist on WhatsApp → branch visit with us.",
      outcome: "₹5L loan for machines and festival inventory.",
      metrics: ["₹5L loan", "Udyam done", "Hindi-first"],
      quote: "Sab kuch Hindi mein samjhaya. Bahut aasan tha.",
      portrait: photos.personAsha,
      businessImage: photos.caseTailoring,
      challengeImage: photos.storyTailorWork,
      outcomeImage: photos.storyTailorDetail,
      layout: "voice-first" as const,
    },
  ],
} as const;

export const testimonials = {
  eyebrow: "Real People",
  heading: "Unki kahani, unki zubaani.",
  sub: "Ratings, business types, and rupee outcomes from founders who look like our visitors — not stock models.",
  items: [
    {
      name: "Ritu Sharma",
      role: "Founder, Saanvi Food Works",
      businessType: "Food manufacturing",
      rating: 5,
      quote:
        "I only signed papers. They did everything else. ₹22 lakh in 6 weeks.",
      badge: "₹22L sanctioned",
      image: photos.personRitu,
    },
    {
      name: "Manoj Verma",
      role: "Owner, Verma Hardware",
      businessType: "Retail / hardware",
      rating: 5,
      quote:
        "I didn't know I could get a govt. subsidy. They found it for me.",
      badge: "₹8L subsidy",
      image: photos.personManoj,
    },
    {
      name: "Asha Devi",
      role: "Founder, Asha Tailoring",
      businessType: "Services / garments",
      rating: 5,
      quote: "Sab kuch Hindi mein samjhaya. Bahut aasan tha.",
      badge: "₹5L loan",
      image: photos.personAsha,
    },
  ],
} as const;

export const resources = {
  id: "resources",
  eyebrow: "Guides & SEO desk",
  heading: "Topics founders search for — explained clearly.",
  sub: "Deep dives on registration, GST, MSME/Udyam, loans, schemes, and licences so you can learn before you call.",
  topics: [
    {
      title: "Business & company registration",
      text: "Private limited, LLP, and proprietorship paths — when each makes sense for a dukaan or startup.",
      image: photos.seoCompany,
      href: "/services/registration",
    },
    {
      title: "GST registration",
      text: "Thresholds, document list, and how GST links to loans and marketplace onboarding.",
      image: photos.seoGst,
      href: "/services/registration",
    },
    {
      title: "MSME / Udyam registration",
      text: "Why Udyam unlocks schemes, priority sector lending, and tender preferences.",
      image: photos.seoUdyam,
      href: "/services/registration",
    },
    {
      title: "FSSAI licence",
      text: "Basic vs state vs central — mapped to your food business model.",
      image: photos.seoFssai,
      href: "/services/certificate",
    },
    {
      title: "ISO certification",
      text: "ISO 9001 documentation coaching for buyer and tender readiness.",
      image: photos.seoIso,
      href: "/services/certificate",
    },
    {
      title: "Trademark registration",
      text: "Name/logo search and filing support so your brand is protected early.",
      image: photos.seoTrademark,
      href: "/services/legal",
    },
  ],
} as const;

export const faq = {
  heading: "Sawal jo har founder poochta hai",
  sub: "Eligibility, fees, timelines, and small-business fit — answered without legal fog.",
  items: [
    {
      question: "Kya main eligible hoon?",
      answer:
        "Bas 2 minute ka call karo, hum free mein bata denge. Hum business type, city, turnover band, aur documents dekh kar 2–3 realistic options shortlist karte hain — loan, subsidy, ya licence.",
    },
    {
      question: "Kitna paisa lagega hume?",
      answer:
        "Pehli baat-cheet bilkul free hai. Koi hidden charge nahi. Agar aap case proceed karte ho to fees clear WhatsApp summary mein likh kar bhejte hain — pehle kaam, phir paisa clarity.",
    },
    {
      question: "Kitna time lagega?",
      answer:
        "Zyadatar funding case mein 4–8 hafte, scheme ke hisaab se. Registration aur FSSAI aksar 1–3 hafte. Portal queries aur bank holidays timeline badha sakte hain — hum weekly status dete hain.",
    },
    {
      question: "Kya mera business chhota hai to bhi help milegi?",
      answer:
        "Haan! Chhoti dukaan se lekar badi company tak, sabko madad milti hai. Kirana, tailoring, hardware, tiffin, and first-time founders hamare common clients hain.",
    },
    {
      question: "Kya aap government office ho?",
      answer:
        "Nahi. Hum private consultancy hain. Hum forms, banks, aur portals par aapke saath kaam karte hain — kisi bhi sarkari department ka hissa nahi.",
    },
    {
      question: "Documents kaise bheju?",
      answer:
        "WhatsApp par checklist milti hai. Clear photos / PDFs kaafi hain. Originals sirf bank ya department ke demand par.",
    },
  ],
} as const;

export const serviceFaq = {
  heading: "Sawal jo har founder poochta hai",
  sub: "Common questions about registration, funding, compliance and how Vikas Bharat works.",
  items: [
    {
      question: "Which business structure is best for my startup?",
      answer:
        "The ideal business structure depends on factors such as the number of owners, liability protection needs, funding sources and scalability. A Private Limited Company suits startups seeking investment, an LLP works well for professional partnerships and a Proprietorship is ideal for solo consultants.",
    },
    {
      question: "How long does business registration take in India?",
      answer:
        "Registration timelines vary by structure — a Private Limited Company typically takes 7–15 working days, an LLP 10–20 days and a One Person Company 5–10 days. With Vikas Bharat's expert guidance, documentation is streamlined for faster, first-time approvals.",
    },
    {
      question: "What are the costs involved in business registration?",
      answer:
        "Costs depend on the business structure, state and company type. Government fees range from ₹1,000 to ₹7,000. Vikas Bharat offers transparent, budget-aligned pricing with professional support to minimise errors and ensure smooth approval.",
    },
    {
      question: "Can foreign nationals register a business in India?",
      answer:
        "Yes, foreign nationals can register a company in India. At least one Indian resident director is required for a Private Limited Company. Our team handles FDI compliance, RBI regulations and all documentation for seamless foreign-owned business setup.",
    },
    {
      question: "What compliance requirements follow after registration?",
      answer:
        "Post-registration businesses must file GST returns, annual ROC filings, income tax returns and maintain statutory books. Vikas Bharat provides ongoing compliance support to ensure your business meets all regulatory obligations without missing deadlines.",
    },
    {
      question: "Can I convert from one business structure to another later?",
      answer:
        "Yes — common conversions include Proprietorship to Pvt Ltd, LLP to Pvt Ltd and Pvt Ltd to Public Ltd. Vikas Bharat manages the full conversion process, including legal documentation, ROC filings and regulatory compliance, with minimal disruption to your operations.",
    },
    {
      question: "How do I start the registration or funding process with Vikas Bharat?",
      answer:
        "Submit your basic business details through our website for a free eligibility assessment. Our advisors craft a custom action plan — whether for registration, compliance or funding — within 48 hours.",
    },
    {
      question: "Is Vikas Bharat a reliable partner for business advisory?",
      answer:
        "DPIIT-recognised since 2023, with a proven track record of ₹500Cr*+ in facilitated funding, 20,000+ businesses supported and transparent client testimonials — Vikas Bharat is India's trusted MSME growth partner.",
    },
  ],
} as const;

/** About page — FAQ (editorial clarity index) */
export const aboutFaq = {
  id: "faq",
  section: "08",
  eyebrow: "CLARITY",
  headingLead: "Questions",
  headingAccent: "before you begin.",
  hindi: "Sawal jo har founder poochta hai.",
  sub: "Eligibility, fees, timelines, and small-business fit — answered without legal fog.",
  continuity: "FROM PEOPLE → CLARITY",
  indexLabel: "CLARITY INDEX",
  answerLabel: "ANSWER",
  questionLabel: "QUESTION",
  exitLabel: "CLARITY · CONFIDENCE · NEXT STEP",
  exitLead: "Still unsure?",
  exitAccent: "Ek free call.",
  exitSub:
    "Eligibility, scheme fit, aur next documents — 2 minute mein clear. Koi obligation nahi.",
  ctaPrimary: "WhatsApp Par Baat Karo",
  ctaSecondary: "Call an Expert",
  items: [
    {
      id: "eligible",
      num: "01",
      tag: "Eligibility",
      question: "Kya main eligible hoon?",
      display: ["Kya main", "eligible hoon?"],
      answer:
        "Bas 2 minute ka call karo, hum free mein bata denge. Hum business type, city, turnover band, aur documents dekh kar 2–3 realistic options shortlist karte hain — loan, subsidy, ya licence.",
      note: "FREE CHECK · 2 MIN",
      image: photos.faqConsult,
      imageAlt: "Advisor reviewing eligibility with a founder",
    },
    {
      id: "fees",
      num: "02",
      tag: "Fees",
      question: "Kitna paisa lagega hume?",
      display: ["Kitna paisa", "lagega hume?"],
      answer:
        "Pehli baat-cheet bilkul free hai. Koi hidden charge nahi. Agar aap case proceed karte ho to fees clear WhatsApp summary mein likh kar bhejte hain — pehle kaam, phir paisa clarity.",
      note: "FIRST CALL FREE",
      image: photos.faqFounder,
      imageAlt: "Founder reviewing a clear fee summary",
    },
    {
      id: "timeline",
      num: "03",
      tag: "Timeline",
      question: "Kitna time lagega?",
      display: ["Kitna time", "lagega?"],
      answer:
        "Zyadatar funding case mein 4–8 hafte, scheme ke hisaab se. Registration aur FSSAI aksar 1–3 hafte. Portal queries aur bank holidays timeline badha sakte hain — hum weekly status dete hain.",
      note: "WEEKLY STATUS",
      image: photos.stepMatch,
      imageAlt: "Team tracking application timelines",
    },
    {
      id: "small-biz",
      num: "04",
      tag: "Fit",
      question: "Kya mera business chhota hai to bhi help milegi?",
      display: ["Chhota business", "bhi chalega?"],
      answer:
        "Haan! Chhoti dukaan se lekar badi company tak, sabko madad milti hai. Kirana, tailoring, hardware, tiffin, and first-time founders hamare common clients hain.",
      note: "DUKAAN → COMPANY",
      image: photos.faqShop,
      imageAlt: "Small shop owner at their counter",
    },
    {
      id: "govt",
      num: "05",
      tag: "Who we are",
      question: "Kya aap government office ho?",
      display: ["Kya aap", "government office ho?"],
      answer:
        "Nahi. Hum private consultancy hain. Hum forms, banks, aur portals par aapke saath kaam karte hain — kisi bhi sarkari department ka hissa nahi.",
      note: "PRIVATE CONSULTANCY",
      image: photos.credentialTeam,
      imageAlt: "Private consultancy desk at work",
    },
    {
      id: "documents",
      num: "06",
      tag: "Documents",
      question: "Documents kaise bheju?",
      display: ["Documents", "kaise bheju?"],
      answer:
        "WhatsApp par checklist milti hai. Clear photos / PDFs kaafi hain. Originals sirf bank ya department ke demand par.",
      note: "WHATSAPP CHECKLIST",
      image: photos.faqDocuments,
      imageAlt: "Documents and checklist ready to share",
    },
    {
      id: "collateral",
      num: "07",
      tag: "Loans",
      question: "Collateral ke bina loan mil sakta hai?",
      display: ["Collateral ke bina", "loan mil sakta hai?"],
      answer:
        "Often yes under Mudra and select NBFC products — eligibility depends on business vintage and cash flows.",
      note: "MUDRA · NBFC PATHS",
      image: photos.serviceLoan,
      imageAlt: "Loan paperwork review for MSME funding",
    },
    {
      id: "udyam",
      num: "08",
      tag: "Registration",
      question: "GST hai to bhi Udyam chahiye?",
      display: ["GST hai to bhi", "Udyam chahiye?"],
      answer:
        "Yes for most MSME schemes and many bank products — Udyam is the key eligibility proof.",
      note: "UDYAM UNLOCKS SCHEMES",
      image: photos.seoUdyam,
      imageAlt: "MSME Udyam registration desk",
    },
  ],
} as const;

export const finalCta = {
  heading: "Aaj hi shuru karo.",
  sub: "Ek free call. Koi obligation nahi. Eligibility, scheme fit, aur next documents — 2 minute mein clear.",
  primary: "WhatsApp Par Baat Karo",
  secondary: "1800-XXX-XXXX",
} as const;

export const footer = {
  companyName: site.companyName,
  tagline: site.tagline,
  overview:
    "Pan-India business help desk for registration, GST, MSME/Udyam, loans, government schemes, FSSAI, ISO, and growth advisory — bilingual and WhatsApp-first.",
  offices: site.offices,
  disclaimer: site.disclaimer,
  map: { src: photos.footerCity, alt: "Map of Bharosa office cities" },
} as const;
