import { photos } from "@/lib/photos";
import {
  RELATED_BY_CATEGORY,
  type BlogBlock,
  type BlogFaqItem,
  type BlogPost,
} from "@/lib/blogTypes";

const MONTHS: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

const TITLE_OVERRIDES: Record<string, string> = {
  "truth-about-enego-services":
    "Is this consultancy real? How to judge a funding desk before you hire",
};

const EXCERPT_OVERRIDES: Record<string, string> = {
  "truth-about-enego-services":
    "What a genuine MSME desk actually does — and the checks to run before you send documents or pay a consultancy fee.",
};

const CATEGORY_ALIASES: Record<string, string> = {
  "About Enego": "About Us",
  "About Vikas Bharat": "About Us",
};

const LINK_MAP: Record<string, string> = {
  "/contact-us": "/contact",
  "/check-your-eligibility": "/contact",
  "/schemes": "/scheme",
  "/equity-funding": "/services/startup",
  "/tax-calculator": "/contact",
  "/services/business-registration": "/services/registration",
  "/services/startup-india-certification-registration": "/services/startup",
  "/services/business-loan-services": "/services/loan",
  "/services/growth-strategy": "/services/growth",
  "/services/legal-consultancy": "/services/legal",
  "/services/government-grants": "/services/grant",
  "/services/funding-consultancy": "/services/funding",
  "/services/certifications": "/services/certificate",
  "/services/funding-instruments-for-startups-businesses": "/services/startup",
  "/services/fssai-registration": "/services/certificate",
  "/services/zed-certification": "/services/certificate",
  "/services/marketing-branding": "/services/marketing",
  "/services/one-person-company": "/services/opc",
  "/services/funding-consultancy-ahmedabad": "/services/funding",
  "/services/funding-consultancy-gujarat": "/services/funding",
  "/services/business-consultant-ahmedabad": "/contact",
  "/services/ngo-registration": "/services/registration",
  "/schemes/cgtmse-loan-scheme": "/scheme/cgtmse",
  "/schemes/startup-india-seed-fund": "/scheme/seed-fund",
  "/schemes/mudra-loan-scheme": "/scheme/mudra",
  "/schemes/msme-loan-scheme": "/scheme",
  "/schemes/stand-up-india": "/scheme/standup",
  "/schemes/pmegp": "/scheme/pmegp",
  "/schemes/mahila-empowerment-scheme": "/scheme",
  "/schemes/nidhi-prayas-grant": "/services/grant",
  "/schemes/tide-2-0": "/services/grant",
  "/schemes/venture-tech-funding": "/scheme/venture-tech",
  "/schemes/agri-business-grants": "/scheme",
  "/schemes/cold-storage-subsidy-scheme": "/scheme",
  "/schemes/pm-kusum-scheme": "/scheme",
  "/schemes/cgss-scheme": "/scheme/cgss",
  "/schemes/deep-tech-funding": "/scheme",
  "/schemes/mobility-innovation-program-scheme": "/services/grant",
  "/schemes/semiconductor-scheme": "/scheme/semiconductor",
  "/schemes/gvfl-scheme": "/scheme/gvfl",
  "/schemes/startup-india-scheme-eligibility": "/services/startup",
  "/schemes/agri-sure-fund": "/scheme",
  "/schemes/beauty-startup": "/services/startup",
  "/schemes/meity-genesis-eir-2-0": "/services/grant",
  "/schemes/rkvy-raftaar": "/scheme",
  "/schemes/social-impact-innovation-scheme": "/services/grant",
  "/schemes/equity-linked-seed-fund": "/scheme/seed-fund",
  "/schemes/cybersecurity-fund": "/scheme",
  "/schemes/grant-for-textile": "/services/grant",
  "/schemes/fintech-startup-challenge": "/services/startup",
};

const DATE_RE =
  /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/;

export function slugFromFilename(filename: string) {
  return filename
    .replace(/^\d+-/, "")
    .replace(/\.md$/i, "")
    .toLowerCase();
}

export function parseBlogMarkdown(filename: string, raw: string): BlogPost {
  const slug = slugFromFilename(filename);
  const cleanedRaw = rebrand(remapLinks(raw));
  const lines = cleanedRaw.split(/\r?\n/);

  const title = TITLE_OVERRIDES[slug] ?? extractTitle(lines, slug);
  const category = extractCategory(lines);
  const date = extractDate(lines) ?? "1 January 2026";
  const excerpt = EXCERPT_OVERRIDES[slug] ?? extractExcerpt(lines, title);
  const bodyLines = extractBodyLines(lines);
  const { faqs, contentLines } = splitFaqs(bodyLines);
  const blocks = parseBlocks(contentLines);
  const toc = blocks
    .filter((block): block is Extract<BlogBlock, { type: "h2" }> => block.type === "h2")
    .map((block) => ({ id: block.id, text: block.text }));
  const takeaways = extractTakeaways(blocks);
  const related = RELATED_BY_CATEGORY[category] ?? {
    href: "/contact",
    label: "Talk to the desk",
  };
  const image = imageForPost(slug, category, title);
  const words = countWords(blocks);
  const minutes = Math.max(4, Math.round(words / 180));

  return {
    slug,
    title,
    excerpt,
    category,
    date,
    dateIso: toIsoDate(date),
    readTime: `${minutes} min read`,
    image,
    imageAlt: title,
    takeaways,
    relatedHref: related.href,
    relatedLabel: related.label,
    blocks,
    toc,
    faqs,
  };
}

function extractTitle(lines: string[], slug: string) {
  for (const line of lines) {
    const image = line.match(/^!\[([^\]]{16,})\]\(/);
    if (image?.[1] && !/funding guide/i.test(image[1])) {
      return rebrand(image[1]).replace(/\s+/g, " ").trim();
    }
  }
  for (const line of lines) {
    const heading = line.match(/^#\s+(.+)/);
    if (heading?.[1]) return tidyTitle(rebrand(heading[1]));
  }
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function tidyTitle(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([0-9])([A-Z][a-z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}

function extractCategory(lines: string[]) {
  for (let i = 0; i < Math.min(lines.length, 24); i++) {
    const line = lines[i]?.trim() ?? "";
    if (!line) continue;
    if (line.startsWith("#") || /^source:/i.test(line)) continue;
    if (/^\d+\.\s+/.test(line) || line.includes("›")) continue;
    if (DATE_RE.test(line) || line.startsWith("![")) continue;
    const mapped = CATEGORY_ALIASES[line] ?? line;
    if (mapped.length < 48 && !mapped.includes("http")) return mapped;
  }
  return "Guides";
}

function extractDate(lines: string[]) {
  for (const line of lines.slice(0, 40)) {
    const trimmed = line.trim();
    if (DATE_RE.test(trimmed)) return trimmed;
  }
  return null;
}

function extractExcerpt(lines: string[], title: string) {
  for (const line of lines.slice(0, 90)) {
    const text = rebrand(line.trim());
    if (text.length < 70) continue;
    if (text.startsWith("#") || text.startsWith("!") || text.startsWith("[")) continue;
    if (/^source:/i.test(text)) continue;
    if (/on this page|table of contents|need help with funding|check your eligibility|talk to an expert/i.test(text)) {
      continue;
    }
    if (text === title) continue;
    return trimExcerpt(stripMarkdown(text));
  }
  return title;
}

function trimExcerpt(text: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= 220) return clean;
  const cut = clean.slice(0, 217);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 140 ? lastSpace : 217).trim()}…`;
}

function extractBodyLines(lines: string[]) {
  let start = -1;
  const scanTo = Math.min(lines.length, 90);
  for (let i = 0; i < scanTo; i++) {
    if (/Need Help with Funding|Get Expert Help/i.test(lines[i] ?? "")) {
      start = i;
    }
  }
  if (start >= 0) {
    start += 1;
    while (start < lines.length) {
      const trimmed = lines[start]?.trim() ?? "";
      if (
        !trimmed ||
        trimmed === "[" ||
        trimmed === "]" ||
        /^\]\(/.test(trimmed) ||
        /get expert help|get access/i.test(trimmed)
      ) {
        start += 1;
        continue;
      }
      break;
    }
  } else {
    start = lines.findIndex(
      (line, index) =>
        index > 8 &&
        /^##\s+/.test(line.trim()) &&
        !/table of contents/i.test(line),
    );
    if (start < 0) start = 0;
  }

  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    if (/^##\s+(Related Articles|Connect With Us)\b/i.test(lines[i]?.trim() ?? "")) {
      end = i;
      break;
    }
  }

  return lines.slice(start, end).map((line) => line.replace(/^\s{4}/, ""));
}

function splitFaqs(lines: string[]) {
  const faqIndex = lines.findIndex((line) => /^##\s+FAQs?/i.test(line.trim()));
  if (faqIndex < 0) return { faqs: [] as BlogFaqItem[], contentLines: lines };

  const contentLines = lines.slice(0, faqIndex);
  const faqLines = lines.slice(faqIndex + 1).filter((line) => line.trim());
  const faqs: BlogFaqItem[] = [];
  for (let i = 0; i < faqLines.length; i++) {
    const question = faqLines[i]?.replace(/^\d{1,2}\s*/, "").trim() ?? "";
    const answer = faqLines[i + 1]?.trim() ?? "";
    if (!question || question.startsWith("#")) continue;
    if (answer && answer.length > 40 && !/^\d{1,2}/.test(answer) && !answer.startsWith("#")) {
      faqs.push({ question, answer: stripMarkdown(rebrand(answer)) });
      i += 1;
    }
  }
  return { faqs, contentLines };
}

function parseBlocks(rawLines: string[]): BlogBlock[] {
  const lines = rawLines.map((line) => line.trimEnd());
  const blocks: BlogBlock[] = [];
  const ids = new Set<string>();
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i]?.trim() ?? "";
    if (!trimmed) {
      i += 1;
      continue;
    }
    if (shouldDropLine(trimmed)) {
      i += 1;
      continue;
    }

    const h2 = trimmed.match(/^##\s+(.+)/);
    if (h2?.[1]) {
      const text = tidyTitle(h2[1]);
      if (/table of contents/i.test(text)) {
        i += 1;
        continue;
      }
      if (/how vikas bharat/i.test(text)) {
        const collected: string[] = [];
        i += 1;
        while (i < lines.length) {
          const next = lines[i]?.trim() ?? "";
          if (!next) {
            if (collected.length) break;
            i += 1;
            continue;
          }
          if (next.startsWith("#") || next.startsWith("-") || /^\d+\.\s+/.test(next)) break;
          if (shouldDropLine(next)) {
            i += 1;
            continue;
          }
          collected.push(next);
          i += 1;
        }
        if (collected.length) {
          blocks.push({
            type: "callout",
            heading: text,
            text: collected.map(cleanInline).join(" "),
          });
        } else {
          blocks.push({ type: "h2", id: uniqueId(text, ids), text });
        }
        continue;
      }
      blocks.push({ type: "h2", id: uniqueId(text, ids), text });
      i += 1;
      continue;
    }

    const h3 = trimmed.match(/^###\s+(.+)/);
    if (h3?.[1]) {
      const text = tidyTitle(h3[1]);
      blocks.push({ type: "h3", id: uniqueId(text, ids), text });
      i += 1;
      continue;
    }

    const stepMatch = trimmed.match(/^\d+\.\s+(\d{2})$/);
    if (stepMatch) {
      const items: { title: string; body: string }[] = [];
      while (i < lines.length) {
        const marker = lines[i]?.trim().match(/^\d+\.\s+(\d{2})$/);
        if (!marker) break;
        i += 1;
        while (i < lines.length && !lines[i]?.trim()) i += 1;
        const titleLine = lines[i]?.trim().match(/^###\s+(.+)/);
        const title = titleLine?.[1] ? tidyTitle(titleLine[1]) : `Step ${marker[1]}`;
        if (titleLine) i += 1;
        const bodyParts: string[] = [];
        while (i < lines.length) {
          const next = lines[i]?.trim() ?? "";
          if (!next) {
            i += 1;
            if (lines[i]?.trim().match(/^\d+\.\s+\d{2}$/) || lines[i]?.trim().startsWith("##")) break;
            continue;
          }
          if (/^\d+\.\s+\d{2}$/.test(next) || next.startsWith("##")) break;
          if (next.startsWith("###")) break;
          if (shouldDropLine(next)) {
            i += 1;
            continue;
          }
          bodyParts.push(next);
          i += 1;
        }
        items.push({ title, body: bodyParts.map(cleanInline).join(" ") });
      }
      if (items.length) blocks.push({ type: "steps", items });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i]?.trim() ?? "")) {
        items.push(cleanInline(lines[i]!.trim().replace(/^[-*]\s+/, "")));
        i += 1;
      }
      if (items.length) blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+\S/.test(trimmed) && !/^\d+\.\s+\d{2}$/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+\S/.test(lines[i]?.trim() ?? "")) {
        items.push(cleanInline(lines[i]!.trim().replace(/^\d+\.\s+/, "")));
        i += 1;
      }
      if (items.length) blocks.push({ type: "ol", items });
      continue;
    }

    if (looksLikeCell(trimmed)) {
      const cells: string[] = [];
      while (i < lines.length) {
        const next = lines[i]?.trim() ?? "";
        if (!next) {
          i += 1;
          if (cells.length >= 4 && !looksLikeCell(lines[i]?.trim() ?? "")) break;
          continue;
        }
        if (next.startsWith("#") || /^[-*]\s+/.test(next) || /^\d+\.\s+/.test(next)) break;
        if (!looksLikeCell(next) && cells.length >= 4) break;
        if (shouldDropLine(next)) {
          i += 1;
          continue;
        }
        cells.push(cleanInline(next));
        i += 1;
      }
      const structured = structureCells(cells);
      if (structured) {
        blocks.push(structured);
        continue;
      }
      for (const cell of cells) {
        if (cell.length > 40) blocks.push({ type: "p", text: cell });
      }
      continue;
    }

    const paraParts = [cleanInline(trimmed)];
    i += 1;
    while (i < lines.length) {
      const next = lines[i]?.trim() ?? "";
      if (!next) break;
      if (next.startsWith("#") || /^[-*]\s+/.test(next) || /^\d+\.\s+/.test(next)) break;
      if (shouldDropLine(next) || looksLikeCell(next)) break;
      paraParts.push(cleanInline(next));
      i += 1;
    }
    const text = paraParts.join(" ").replace(/\s+/g, " ").trim();
    if (text) blocks.push({ type: "p", text });
  }

  return mergeAdjacent(blocks);
}

function shouldDropLine(line: string) {
  if (!line) return true;
  if (line === "[" || line === "]") return true;
  if (/^!\[/.test(line)) return true;
  if (/^\]\(/.test(line)) return true;
  if (/on this page/i.test(line)) return true;
  if (/\]\(#[\w-]+\)\[/.test(line)) return true;
  if (/आपके Business|FUNDING GUIDE|Get Access|Check Your Eligibility|Talk to an Expert/i.test(line)) {
    return true;
  }
  if (/^New To Us\?/i.test(line)) return true;
  if (/^1800\s/.test(line)) return true;
  return false;
}

function looksLikeCell(line: string) {
  if (!line || line.length > 90) return false;
  if (/[.?!]$/.test(line) && line.length > 55) return false;
  if (line.startsWith("#") || line.startsWith("[")) return false;
  const words = line.split(/\s+/).length;
  return words <= 14;
}

function structureCells(cells: string[]): BlogBlock | null {
  if (cells.length < 4) return null;

  const firstRepeat = cells.indexOf(cells[0]!, 1);
  if (firstRepeat >= 2 && cells.length % firstRepeat === 0) {
    const stride = firstRepeat;
    const keys = cells.slice(0, stride);
    const keyValue = keys.length % 2 === 0;
    if (keyValue) {
      const fieldCount = keys.length / 2;
      const labels = Array.from({ length: fieldCount }, (_, index) => keys[index * 2]!);
      const labelsMatch = Array.from({ length: cells.length / stride }, (_, record) =>
        labels.every((label, field) => cells[record * stride + field * 2] === label),
      ).every(Boolean);
      if (labelsMatch) {
        const items = Array.from({ length: cells.length / stride }, (_, record) => {
          const item: Record<string, string> = {};
          labels.forEach((label, field) => {
            item[label] = cells[record * stride + field * 2 + 1] ?? "";
          });
          return item;
        });
        return { type: "cards", items };
      }
    }
  }

  for (const cols of [4, 3, 2]) {
    if (cells.length >= cols * 2 && cells.length % cols === 0) {
      const headers = cells.slice(0, cols);
      const rows: string[][] = [];
      for (let i = cols; i < cells.length; i += cols) {
        rows.push(cells.slice(i, i + cols));
      }
      if (rows.length >= 1) return { type: "table", headers, rows };
    }
  }
  return null;
}

function extractTakeaways(blocks: BlogBlock[]) {
  const fromList = blocks.find((block) => block.type === "ul" && block.items.length >= 3);
  if (fromList && fromList.type === "ul") {
    return fromList.items.slice(0, 3).map(stripMarkdown);
  }
  return blocks
    .filter((block): block is Extract<BlogBlock, { type: "h2" }> => block.type === "h2")
    .slice(0, 3)
    .map((block) => block.text);
}

function uniqueId(text: string, used: Set<string>) {
  const base = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "section";
  let id = base;
  let n = 2;
  while (used.has(id)) {
    id = `${base}-${n}`;
    n += 1;
  }
  used.add(id);
  return id;
}

function mergeAdjacent(blocks: BlogBlock[]) {
  const out: BlogBlock[] = [];
  for (const block of blocks) {
    const prev = out[out.length - 1];
    if (block.type === "ul" && prev?.type === "ul") {
      prev.items.push(...block.items);
      continue;
    }
    out.push(block);
  }
  return out;
}

function countWords(blocks: BlogBlock[]) {
  const parts: string[] = [];
  for (const block of blocks) {
    if (block.type === "p" || block.type === "h2" || block.type === "h3") parts.push(block.text);
    if (block.type === "ul" || block.type === "ol") parts.push(...block.items);
    if (block.type === "steps") {
      for (const item of block.items) parts.push(item.title, item.body);
    }
    if (block.type === "callout") parts.push(block.heading, block.text);
    if (block.type === "table") {
      parts.push(...block.headers, ...block.rows.flat());
    }
    if (block.type === "cards") {
      for (const item of block.items) parts.push(...Object.values(item));
    }
  }
  return stripMarkdown(parts.join(" ")).split(/\s+/).filter(Boolean).length;
}

function toIsoDate(value: string) {
  const match = value.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (!match) return new Date(value).toISOString();
  const month = MONTHS[match[1]!.toLowerCase()];
  const day = Number(match[2]);
  const year = Number(match[3]);
  if (month == null) return new Date(value).toISOString();
  return new Date(Date.UTC(year, month, day)).toISOString();
}

function rebrand(text: string) {
  return text
    .replace(/https?:\/\/(?:www\.)?enego\.co\.in/gi, "https://vikas-bharat.com")
    .replace(/enego\.co\.in/gi, "vikas-bharat.com")
    .replace(/Enego Services Private Limited/gi, "Vikas Bharat")
    .replace(/Enego Services/gi, "Vikas Bharat")
    .replace(/\bEnego\b/gi, "Vikas Bharat")
    .replace(/Contact Vikas Bharat/gi, "WhatsApp the desk")
    .replace(/How Vikas Bharat Fits Into Your Journey/gi, "How Vikas Bharat fits into your journey")
    .replace(/How Vikas Bharat Helps/gi, "How Vikas Bharat helps");
}

function remapLinks(text: string) {
  return text.replace(/\]\(([^)]+)\)/g, (full, href: string) => {
    const [path, hash] = href.split("#");
    if (!path) return full;
    if (path.startsWith("http")) {
      if (/enego\.co\.in/i.test(path)) return "](/contact)";
      return full;
    }
    const mapped = LINK_MAP[path] ?? path.replace(/^\/schemes(?:\/|$)/, "/scheme$1");
    const next = hash ? `${mapped}#${hash}` : mapped;
    return `](${next})`;
  });
}

function cleanInline(text: string) {
  return rebrand(text)
    .replace(/\\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function stripMarkdown(text: string) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function imageForPost(slug: string, category: string, title: string) {
  const hay = `${slug} ${category} ${title}`.toLowerCase();
  if (/enego|about us|consultancy firm|what we actually/.test(hay)) return photos.credentialTeam;
  if (/ev|solar|charging/.test(hay)) return photos.schemeSolar;
  if (/cold.?storage|dairy|agri|farm/.test(hay)) return photos.schemeAgri;
  if (/export|trade|eu|brazil|france|nigeria|factoring/.test(hay)) return photos.aboutHeroCity;
  if (/gst|tax|tds|budget/.test(hay)) return photos.schemeTax;
  if (/mudra|loan|cgtmse|cibil|10-lakh|50-lakh|without-security/.test(hay)) {
    return photos.serviceLoan;
  }
  if (/seed|startup india|accelerator|dpiit/.test(hay)) return photos.schemeStartup;
  if (/grant|scheme|msme act|amendment|udyam/.test(hay)) return photos.serviceGrant;
  if (/llp|registration|company|franchise|accounting/.test(hay)) {
    return photos.serviceRegistration;
  }
  if (/trademark|legal document|drug manufacturing|license/.test(hay)) {
    return photos.serviceLegal;
  }
  if (/iso|certificate|fssai/.test(hay)) return photos.serviceCertificate;
  if (/ai tools|tech|advertising/.test(hay)) return photos.schemeTech;
  if (/car rental/.test(hay)) return photos.heroShopkeeper;
  if (category.includes("Loan") || category.includes("Funding")) return photos.serviceLoan;
  if (category.includes("Scheme")) return photos.serviceGrant;
  if (category.includes("Registration")) return photos.serviceRegistration;
  if (category.includes("Growth")) return photos.serviceGrowth;
  if (category.includes("Compliance") || category.includes("Tax")) return photos.seoGst;
  return photos.aboutMission;
}
