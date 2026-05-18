import fs from "node:fs";
import path from "node:path";

const COMPONENTS = path.join(process.cwd(), "src", "components");

const H_PAD = /\s*(?:max-md:px-2(?:\.\d+)?|md:px-6|xl:px-10|lg:px-10|sm:px-8|px-6)\b/g;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(rel, files);
    else if (entry.name.endsWith(".tsx")) files.push(rel);
  }
  return files;
}

function stripClass(cls) {
  return cls.replace(H_PAD, "").replace(/\s+/g, " ").trim();
}

function processFile(filePath) {
  let source = fs.readFileSync(filePath, "utf8");
  const before = source;

  source = source.replace(
    /<(section|footer|header)(\s+[^>]*className=")([^"]*)(")/g,
    (_, tag, pre, cls, post) => `<${tag}${pre}${stripClass(cls)}${post}`,
  );
  source = source.replace(
    /<(section|footer|header)(\s+[^>]*className=\{`)([^`]*)(`\})/g,
    (_, tag, pre, cls, post) => `<${tag}${pre}${stripClass(cls)}${post}`,
  );

  // FAQ: narrow column via ContentContainer
  source = source.replace(
    /<ContentContainer>\s*\n?\s*<div className="mx-auto max-w-3xl">/g,
    '<ContentContainer className="max-w-3xl">',
  );
  source = source.replace(
    /(<ContentContainer className="max-w-3xl">[\s\S]*?)<\/div>\s*\n\s*<\/ContentContainer>/g,
    "$1</ContentContainer>",
  );

  if (source !== before) {
    fs.writeFileSync(filePath, source);
    return true;
  }
  return false;
}

const updated = walk(COMPONENTS).filter(processFile);
console.log(`Cleaned ${updated.length} files`);
