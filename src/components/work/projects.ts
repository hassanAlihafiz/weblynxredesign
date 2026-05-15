export type WorkFilterId = "all" | "web-apps" | "mobile-apps" | "ecommerce" | "saas" | "marketing";

export const WORK_FILTERS: { id: WorkFilterId; label: string }[] = [
  { id: "all", label: "All (12)" },
  { id: "web-apps", label: "Web apps" },
  { id: "mobile-apps", label: "Mobile apps" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "saas", label: "SaaS" },
  { id: "marketing", label: "Marketing" },
];

export type CaseStudyCard = {
  slug: string;
  title: string;
  outcome: string;
  tagLabels: string[];
  thumbBg: string;
  thumbFg: string;
  /** Shown when this filter is selected (and always in "all" grid except featured duplicate handling). */
  filters: Exclude<WorkFilterId, "all">[];
};

export const WORK_FEATURED = {
  slug: "finlytics",
  title: "Finlytics — FinTech Dashboard",
  excerpt:
    "Rebuilt their analytics platform on Next.js, cut load time from 6s to under 1s, and helped close their Series A.",
  tagLabels: ["SaaS", "Web app"] as const,
  heroBg: "bg-[#CECBF6]",
  wrapBg: "bg-[#EEEDFE]",
  textStrong: "text-[#26215C]",
  textMuted: "text-[#3C3489]",
  stats: [
    { k: "+40%", v: "conversion" },
    { k: "6×", v: "faster load" },
    { k: "$3M", v: "raised" },
  ] as const,
  filters: ["saas", "web-apps"],
};

/** Grid items (featured Finlytics is separate). */
export const WORK_CASE_STUDIES: CaseStudyCard[] = [
  {
    slug: "northbrand-dtc",
    title: "NorthBrand DTC Store",
    outcome: "2.5× revenue in 90 days",
    tagLabels: ["Ecommerce", "Shopify"],
    thumbBg: "bg-[#9FE1CB]",
    thumbFg: "text-[#085041]",
    filters: ["ecommerce"],
  },
  {
    slug: "trekr-fitness",
    title: "Trekr Fitness App",
    outcome: "12k installs in launch month",
    tagLabels: ["Mobile", "React Native"],
    thumbBg: "bg-[#F5C4B3]",
    thumbFg: "text-[#712B13]",
    filters: ["mobile-apps"],
  },
  {
    slug: "lumen-beauty",
    title: "Lumen Beauty",
    outcome: "+320% organic traffic in 6 months",
    tagLabels: ["Marketing", "SEO"],
    thumbBg: "bg-[#F4C0D1]",
    thumbFg: "text-[#72243E]",
    filters: ["marketing"],
  },
  {
    slug: "stackline-crm",
    title: "Stackline CRM",
    outcome: "MVP shipped in 5 weeks",
    tagLabels: ["SaaS", "Next.js"],
    thumbBg: "bg-[#FAC775]",
    thumbFg: "text-[#633806]",
    filters: ["saas", "web-apps"],
  },
  {
    slug: "orbit-studio",
    title: "Orbit Studio Identity",
    outcome: "Full brand system + site",
    tagLabels: ["Branding", "Design"],
    thumbBg: "bg-[#B5D4F4]",
    thumbFg: "text-[#0C447C]",
    filters: ["marketing", "web-apps"],
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    outcome: "From 0 to 800 paid users",
    tagLabels: ["Web app", "SaaS"],
    thumbBg: "bg-[#D3D1C7]",
    thumbFg: "text-[#444441]",
    filters: ["saas", "web-apps"],
  },
  {
    slug: "velvet-commerce",
    title: "Velvet Commerce",
    outcome: "Checkout conversion up 28%",
    tagLabels: ["Ecommerce", "Web app"],
    thumbBg: "bg-[#CECBF6]",
    thumbFg: "text-[#3C3489]",
    filters: ["ecommerce", "web-apps"],
  },
  {
    slug: "stride-coach",
    title: "Stride Coach",
    outcome: "4.8 / 5 average session rating",
    tagLabels: ["Mobile", "SaaS"],
    thumbBg: "bg-[#9FE1CB]",
    thumbFg: "text-[#085041]",
    filters: ["mobile-apps", "saas"],
  },
  {
    slug: "clearway-docs",
    title: "Clearway Docs Portal",
    outcome: "Support tickets down 35%",
    tagLabels: ["Web app", "SaaS"],
    thumbBg: "bg-[#CECBF6]",
    thumbFg: "text-[#3C3489]",
    filters: ["saas", "web-apps"],
  },
  {
    slug: "marquee-growth",
    title: "Marquee Growth Site",
    outcome: "Leads up 3× in one quarter",
    tagLabels: ["Marketing", "Web app"],
    thumbBg: "bg-[#FAC775]",
    thumbFg: "text-[#633806]",
    filters: ["marketing", "web-apps"],
  },
  {
    slug: "bolt-checkout",
    title: "Bolt Mobile Checkout",
    outcome: "AOV +22% on mobile",
    tagLabels: ["Mobile", "Ecommerce"],
    thumbBg: "bg-[#F5C4B3]",
    thumbFg: "text-[#712B13]",
    filters: ["mobile-apps", "ecommerce"],
  },
];

export function caseStudyMatchesFilter(cs: CaseStudyCard, filter: WorkFilterId): boolean {
  if (filter === "all") return true;
  return cs.filters.includes(filter);
}

export function featuredMatchesFilter(filter: WorkFilterId): boolean {
  if (filter === "all") return true;
  return (WORK_FEATURED.filters as readonly string[]).includes(filter);
}

export function getCaseStudyBySlug(slug: string) {
  if (slug === WORK_FEATURED.slug) return { kind: "featured" as const, ...WORK_FEATURED };
  const card = WORK_CASE_STUDIES.find((c) => c.slug === slug);
  if (card) return { kind: "card" as const, ...card };
  return null;
}
