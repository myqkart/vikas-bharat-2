import { schemePage } from "@/lib/content";

export type SchemeSearchItem = (typeof schemePage.catalog.items)[number];

const SYNONYMS: Record<string, readonly string[]> = {
  mudra: ["pmmy", "pradhan", "mantri"],
  pmmy: ["mudra"],
  msme: ["udyam", "sme"],
  udyam: ["msme"],
  iso: ["quality", "certification"],
  loan: ["debt", "credit", "financing"],
  debt: ["loan", "credit"],
  grant: ["subsidy", "funding"],
  subsidy: ["grant", "funding"],
  startup: ["dpiit", "seed"],
  seed: ["startup", "early"],
  agri: ["agriculture", "farm", "kisan", "naif", "ahidf"],
  agriculture: ["agri", "farm"],
  women: ["mahila", "twees", "standup"],
  mahila: ["women"],
  solar: ["kusum"],
  kusum: ["solar"],
  nbfc: ["nonbanking"],
  collateral: ["unsecured", "cgtmse"],
  unsecured: ["collateral", "cgtmse"],
  defence: ["defense", "aditi", "aerospace"],
  defense: ["defence"],
  tax: ["exemption", "80iac", "gst"],
  exemption: ["tax", "80iac"],
  equity: ["vc", "venture", "share"],
  venture: ["equity", "vc"],
  certificate: ["certification", "iso", "compliance"],
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[₹$€,]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokens(value: string) {
  return normalize(value).split(" ").filter((part) => part.length > 0);
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  if (Math.abs(a.length - b.length) > 2) return 99;

  const prev = new Array(b.length + 1);
  const next = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;

  for (let i = 1; i <= a.length; i++) {
    next[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      next[j] = Math.min(next[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j++) prev[j] = next[j];
  }
  return prev[b.length];
}

function fuzzyAllowed(query: string) {
  if (query.length <= 2) return 0;
  if (query.length <= 4) return 1;
  return 2;
}

function tokenScore(query: string, candidate: string, weight: number) {
  if (candidate === query) return 8 * weight;
  if (candidate.startsWith(query)) return 5 * weight;
  if (query.length >= 3 && query.startsWith(candidate) && candidate.length >= 3) {
    return 3 * weight;
  }
  if (candidate.includes(query) && query.length >= 3) return 2.4 * weight;
  const dist = levenshtein(query, candidate);
  const allowed = fuzzyAllowed(query);
  if (dist > 0 && dist <= allowed) {
    return (1.8 - dist * 0.45) * weight;
  }
  return 0;
}

function expandQuery(query: string) {
  const parts = tokens(query);
  const extra: string[] = [];
  for (const part of parts) {
    const mapped = SYNONYMS[part];
    if (mapped) extra.push(...mapped);
  }
  return [...parts, ...extra];
}

type IndexedScheme = {
  item: SchemeSearchItem;
  titleTokens: string[];
  bodyTokens: string[];
  filterTokens: string[];
  haystack: string;
};

export function indexSchemes(items: readonly SchemeSearchItem[]): IndexedScheme[] {
  return items.map((item) => ({
    item,
    titleTokens: tokens(item.title),
    bodyTokens: tokens(item.text),
    filterTokens: item.filters.flatMap((filter) => tokens(filter)),
    haystack: normalize(`${item.title} ${item.text} ${item.filters.join(" ")} ${item.id}`),
  }));
}

export function searchSchemes(
  index: IndexedScheme[],
  query: string,
): SchemeSearchItem[] {
  const trimmed = query.trim();
  if (!trimmed) return index.map((entry) => entry.item);

  const rawTokens = tokens(trimmed);
  const queryTokens = expandQuery(trimmed);
  const phrase = normalize(trimmed);
  const scored: { item: SchemeSearchItem; score: number }[] = [];

  for (const entry of index) {
    let score = 0;

    if (entry.haystack.includes(phrase) && phrase.length >= 2) {
      score += phrase.length >= 6 ? 40 : 22;
    }
    if (normalize(entry.item.title).includes(phrase)) {
      score += 55;
    }

    for (const q of queryTokens) {
      let bestTitle = 0;
      for (const token of entry.titleTokens) {
        bestTitle = Math.max(bestTitle, tokenScore(q, token, 6));
      }
      let bestFilter = 0;
      for (const token of entry.filterTokens) {
        bestFilter = Math.max(bestFilter, tokenScore(q, token, 3.2));
      }
      let bestBody = 0;
      for (const token of entry.bodyTokens) {
        bestBody = Math.max(bestBody, tokenScore(q, token, 1.4));
      }
      const idScore = tokenScore(q, normalize(entry.item.id).replace(/-/g, ""), 4);
      score += Math.max(bestTitle, bestFilter, bestBody, idScore);
    }

    if (rawTokens.length > 1) {
      const hitCount = rawTokens.filter((q) => entry.haystack.includes(q)).length;
      score += hitCount * 6;
    }

    if (score > 0) scored.push({ item: entry.item, score });
  }

  scored.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
  return scored.map((row) => row.item);
}

export function highlightMatches(text: string, query: string) {
  const parts = tokens(query);
  if (!parts.length) return [{ text, match: false }];

  const unique = [...new Set(parts)].sort((a, b) => b.length - a.length);
  const pattern = unique
    .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  if (!pattern) return [{ text, match: false }];

  const regex = new RegExp(`(${pattern})`, "gi");
  const chunks: { text: string; match: boolean }[] = [];
  let last = 0;
  for (const hit of text.matchAll(regex)) {
    const start = hit.index ?? 0;
    if (start > last) chunks.push({ text: text.slice(last, start), match: false });
    chunks.push({ text: hit[0], match: true });
    last = start + hit[0].length;
  }
  if (last < text.length) chunks.push({ text: text.slice(last), match: false });
  return chunks.length ? chunks : [{ text, match: false }];
}
