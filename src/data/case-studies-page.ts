/**
 * Case studies: index page data, project grid, filters, marketing showcase tiles (`PROJECT_SHOWCASES`),
 * and helpers. Re-exported from `site.ts` as `@/data/site`.
 */

export type CaseStudiesIndexHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type CaseStudiesFilterId = "all" | "web-apps" | "mobile-apps" | "ecommerce" | "saas" | "marketing";

export type CaseStudyCard = {
  slug: string;
  title: string;
  outcome: string;
  tagLabels: string[];
  thumbBg: string;
  thumbFg: string;
  filters: Exclude<CaseStudiesFilterId, "all">[];
};

export const CASE_STUDIES_STATS = [
  { value: "12+", label: "Projects shipped" },
  { value: "8", label: "Happy clients" },
  { value: "4", label: "Countries" },
  { value: "100%", label: "On-time delivery" },
] as const;

export const CASE_STUDIES_FILTERS: { id: CaseStudiesFilterId; label: string }[] = [
  { id: "all", label: "All (12)" },
  { id: "web-apps", label: "Web apps" },
  { id: "mobile-apps", label: "Mobile apps" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "saas", label: "SaaS" },
  { id: "marketing", label: "Marketing" },
];

export const CASE_STUDIES_FEATURED = {
  slug: "finlytics",
  title: "E-Commerce",
  excerpt:
    "Rebuilt their E-Commerce platform on Next.js, cut load time from 6s to under 1s, and helped close their Series A.",
  tagLabels: ["E-Commerce", "Web app"] as const,
  heroBg: "bg-[#FAC775]",
  wrapBg: "bg-[#EEEDFE]",
  textStrong: "text-[#633806]",
  textMuted: "text-[#3C3489]",
  stats: [
    { k: "+40%", v: "conversion" },
    { k: "6×", v: "faster load" },
    { k: "$3M", v: "raised" },
  ] as const,
  filters: ["ecommerce", "web-apps"],
};

export const CASE_STUDIES_CASE_STUDIES: CaseStudyCard[] = [
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

export function caseStudyMatchesFilter(cs: CaseStudyCard, filter: CaseStudiesFilterId): boolean {
  if (filter === "all") return true;
  return cs.filters.includes(filter);
}

export function featuredMatchesFilter(filter: CaseStudiesFilterId): boolean {
  if (filter === "all") return true;
  return (CASE_STUDIES_FEATURED.filters as readonly string[]).includes(filter);
}

export function getCaseStudyBySlug(slug: string) {
  if (slug === CASE_STUDIES_FEATURED.slug) return { kind: "featured" as const, ...CASE_STUDIES_FEATURED };
  const card = CASE_STUDIES_CASE_STUDIES.find((c) => c.slug === slug);
  if (card) return { kind: "card" as const, ...card };
  return null;
}

export const CASE_STUDIES_PAGE = {
  accessibility: {
    pageSummary:
      "Case studies: page header, filters, featured project, project grid, impact stats, and call to action",
  },

  header: {
    heading: {
      before: "Real projects, ",
      emphasis: " real results",
      after: ", real businesses",
    } satisfies CaseStudiesIndexHeading,
    description:
      "A look inside the projects we've shipped the problems, the process, and the outcomes that mattered.",
  },

  main: {
    pageSize: 6,
    featuredImagePlaceholder: "Large project hero screenshot",
    cardImagePlaceholder: "Project screenshot",
    emptyMessage: "No projects in this category yet.",
    loadMoreLabel: "Load more projects",
  },

  finalCta: {
    titleBefore: "Your project could be ",
    titleEmphasis: "next",
    titleAfter: "",
    description: "Tell us about your idea we'll get back within 24 hours",
    ctaLabel: "Start a project",
    ctaHref: "/contact",
  },
} as const;

/** Featured project cards for marketing sections (home, services, service pages). */
export const PROJECT_SHOWCASES = {
  home: [
    {
      href: "/case-studies/finlytics",
      tileGradient: "linear-gradient(135deg, #2a1b3d, #1a0e2e)",
      mockClassName: "h-16 w-24 rounded-lg bg-[linear-gradient(135deg,var(--red),var(--red-dark))]",
      mockLabel: "finlytics dashboard",
      tags: ["SaaS", "Web app", "E-commerce"] as const,
      title: "E-Commerce",
      description: "Rebuilt on Next.js. Load time 6s → 0.8s. +40% conversion.",
    },
    {
      href: "/case-studies/trekr-fitness",
      tileGradient: "linear-gradient(135deg, #0f3d2e, #082018)",
      mockClassName: "h-28 w-20 rounded-2xl bg-[linear-gradient(135deg,#9FE1CB,#5fb892)]",
      mockLabel: "trekr fitness app",
      tags: ["Applications", "React Native", "Mobile App"] as const,
      title: "Fitness App",
      description: "React Native build. 12k installs in launch month.",
    },
  ],
  services: [
    {
      gradient: "linear-gradient(135deg, #2a1b3d, #1a0e2e)",
      tileLabel: "E-Commerce",
      title: "E-Commerce",
      meta: "Web · +40% conversion",
    },
    {
      gradient: "linear-gradient(135deg, #0f3d2e, #082018)",
      tileLabel: "mobile app",
      title: "Mobile App",
      meta: "App · 12k installs",
    },
    {
      gradient: "linear-gradient(135deg, #4a3617, #2a1f0d)",
      tileLabel: "digital marketing",
      title: "Digital Marketing",
      meta: "Marketing · +320% traffic",
    },
  ],
  webDevelopment: [
    {
      href: "/case-studies/finlytics",
      gradient: "linear-gradient(135deg, #2a1b3d, #1a0e2e)",
      tileLabel: "finlytics dashboard",
      title: "Finlytics SaaS",
      meta: "Web app · +40% conversion",
    },
    {
      href: "/case-studies/northbrand-dtc",
      gradient: "linear-gradient(135deg, #0f3d2e, #082018)",
      tileLabel: "northbrand store",
      title: "NorthBrand Store",
      meta: "Shopify · 2.5× revenue",
    },
  ],
} as const;
