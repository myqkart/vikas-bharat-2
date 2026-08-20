import fs from "node:fs";
import path from "node:path";
import { parseBlogMarkdown } from "../lib/blogParse";
import type { BlogPost } from "../lib/blogTypes";

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, "blogs");
const OUT_FILE = path.join(ROOT, "lib/generated/blog-posts.json");

function loadFromMarkdown(): BlogPost[] {
  if (!fs.existsSync(SOURCE_DIR)) return [];
  return fs
    .readdirSync(SOURCE_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(SOURCE_DIR, file), "utf8");
      return parseBlogMarkdown(file, raw);
    })
    .sort(
      (a, b) => b.dateIso.localeCompare(a.dateIso) || a.title.localeCompare(b.title),
    );
}

const posts = loadFromMarkdown();
if (posts.length === 0) {
  console.log("No markdown in blogs/. Skipping ingest — keeping existing JSON.");
  process.exit(0);
}

if (posts[0]) posts[0].featured = true;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, `${JSON.stringify(posts)}\n`);
console.log(`Wrote ${posts.length} posts to ${path.relative(ROOT, OUT_FILE)}`);
