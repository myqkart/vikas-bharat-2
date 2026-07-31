/** Curated Unsplash photography — premium, bright, business-relevant */
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  heroShopkeeper: u("photo-1556742049-0cfed4f6a45d", 1600), // retail / shop
  heroMeeting: u("photo-1556761175-b413da4baf72", 1200), // consulting meeting
  badgeMsme: u("photo-1450101499163-c8848c66ca85", 400), // documents
  badgeIso: u("photo-1563986768609-322da13575f3", 400), // certificate vibe
  badgeGovt: u("photo-1521791136064-7986c2920216", 400), // handshake
  badgeRating: u("photo-1556745757-8d76bdb6984b", 400), // happy customer
  aboutTeam: u("photo-1522071820081-009f0129c71c", 1400),
  aboutOffice: u("photo-1497366216548-37526070297c", 1200),
  aboutMission: u("photo-1460925895917-afdab827c52f", 1000),
  serviceRegistration: u("photo-1454165804606-c3d57bc86b40", 1000),
  serviceLoan: u("photo-1554224155-6726b3ff858f", 1000),
  serviceGrant: u("photo-1553729459-efe14ef6055d", 1000),
  serviceCertificate: u("photo-1589829545856-d10d557cf95f", 1000),
  serviceGrowth: u("photo-1552664730-d307ca884978", 1000),
  serviceLegal: u("photo-1507679799987-c73779587ccf", 1000),
  processDiagram: u("photo-1553877522-43269d4ea984", 1600),
  stepCall: u("photo-1598257006458-087169a1f08d", 800),
  stepMatch: u("photo-1551836022-d5d88e9218df", 800),
  stepPaperwork: u("photo-1568992687947-868a62a9f521", 800),
  stepMoney: u("photo-1579621970795-87facc2f976d", 800),
  schemeMudra: u("photo-1554224154-26032ffc0d07", 1200),
  schemePmegp: u("photo-1581092160562-40aa08e78837", 1200),
  schemeStandup: u("photo-1573497019940-1c28c88b4f3e", 1200),
  schemeSeed: u("photo-1519389950473-47ba0277781c", 1200),
  caseFood: u("photo-1556910103-1c02745aae4d", 1200),
  caseHardware: u("photo-1581578731548-c64695cc6952", 1200),
  caseTailoring: u("photo-1558171813-4c088753af8f", 1200),
  personRitu: u("photo-1573496359142-b8d87734a5a2", 600),
  personManoj: u("photo-1560250097-0b93528c311a", 600),
  personAsha: u("photo-1580489944761-15a19d654956", 600),
  seoCompany: u("photo-1486406146926-c627a92ad1ab", 1000),
  seoGst: u("photo-1554224155-8d04cb21cd6c", 1000),
  seoUdyam: u("photo-1581091226825-a6a2a5aee158", 1000),
  seoFssai: u("photo-1414235077428-338989a2e8c0", 1000),
  seoIso: u("photo-1454165804606-c3d57bc86b40", 1000),
  seoTrademark: u("photo-1450101499163-c8848c66ca85", 1000),
  footerCity: u("photo-1587474260584-136574528ed5", 1200),
  heroGlow: u("photo-1557804506-669a67965ba0", 1800),
  floatingUi: u("photo-1551288049-bebda4e38f71", 800),
} as const;
