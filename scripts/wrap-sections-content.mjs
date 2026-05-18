import fs from "node:fs";
import path from "node:path";

const COMPONENTS = path.join(process.cwd(), "src", "components");

const SKIP_FILES = new Set([
  "layout/ContentContainer.tsx",
  "layout/PageContainer.tsx",
  "layout/PageTransition.tsx",
  "home/HomeHero.tsx",
  "web-development/WebDevHero.tsx",
  "app-development/AppDevHero.tsx",
  "digital-marketing/DmHero.tsx",
  "Navbar/Navbar.tsx",
  "Footer/Footer.tsx",
  "CTA/FinalCtaSection.tsx",
]);

const H_PAD =
  /\s*(?:max-md:px-2\s+)?(?:sm:px-8\s+)?(?:lg:px-10\s+)?(?:xl:px-10\s+)?(?:md:px-6\s+)?px-6(?:\s+sm:px-8)?(?:\s+lg:px-10)?(?:\s+xl:px-10)?/g;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(rel, files);
    else if (entry.name.endsWith(".tsx")) files.push(rel);
  }
  return files;
}

function stripPad(className) {
  const next = className.replace(H_PAD, " ").replace(/\s+/g, " ").trim();
  return next.includes("w-full") ? next : `w-full ${next}`.trim();
}

function addImport(source) {
  if (source.includes("ContentContainer")) return source;
  const importLine = 'import { ContentContainer } from "@/components/layout/ContentContainer";\n';
  const matches = [...source.matchAll(/^import .+;\r?\n/gm)];
  if (matches.length === 0) return importLine + source;
  const last = matches[matches.length - 1];
  const idx = last.index + last[0].length;
  return source.slice(0, idx) + importLine + source.slice(idx);
}

function wrapTag(source, tag) {
  const re = new RegExp(`<${tag}([^>]*)>([\\s\\S]*?)<\\/${tag}>`, "g");
  return source.replace(re, (match, attrs, inner) => {
    if (inner.trimStart().startsWith("<ContentContainer")) return match;
    return `<${tag}${attrs}>\n      <ContentContainer>${inner}</ContentContainer>\n    </${tag}>`;
  });
}

function processFile(filePath) {
  const rel = path.relative(COMPONENTS, filePath).replace(/\\/g, "/");
  if (SKIP_FILES.has(rel)) return false;

  let source = fs.readFileSync(filePath, "utf8");
  if (!source.includes("<section") && !source.includes("<footer")) return false;
  if (!source.includes("px-6") && !source.includes("lg:px-10")) return false;

  const before = source;
  source = addImport(source);
  source = source.replace(
    new RegExp(`<section(\\s+className=")([^"]*)(")`, "g"),
    (_, a, cls, c) => `<section${a}${stripPad(cls)}${c}`,
  );
  source = source.replace(
    new RegExp(`<footer(\\s+className=")([^"]*)(")`, "g"),
    (_, a, cls, c) => `<footer${a}${stripPad(cls)}${c}`,
  );
  source = wrapTag(source, "section");
  source = wrapTag(source, "footer");

  if (source !== before) {
    fs.writeFileSync(filePath, source);
    return true;
  }
  return false;
}

const updated = walk(COMPONENTS).filter(processFile);
console.log(`Updated ${updated.length} files`);
