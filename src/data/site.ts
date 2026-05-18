// ─── Site & contact ───────────────────────────────────────────────────────────

export const SITE = {
  name: "WebLynx",
  tagline: "A digital studio building the web for ambitious founders.",
  locations: {
    footer: "Houston, TX · GMT-6",
    studio: "Houston, TX",
    contact: "Houston, TX",
    contactNote: "Working remotely with clients across the USA · GMT-6",
  },
  email: "info@weblynx.us",
  whatsapp: {
    href: "https://wa.me/12033127541",
    display: "+1 (203) 312-7541",
  },
  linkedin: {
    href: "https://www.linkedin.com/company/weblynxus/",
    handle: "@weblynxus",
  },
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES_SUBMENU = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "AI Development", href: "/services/ai-development" },
  { label: "Design", href: "/services/design" },
] as const;

// ─── Social links (icons resolved in Footer) ──────────────────────────────────

export type SocialLink = {
  label: string;
  href: string;
  hoverClass?: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/weblynxus/",
    hoverClass: "hover:text-[#0A66C2]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582381187561",
    hoverClass: "hover:text-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/weblynx.us/",
    hoverClass: "hover:text-[#E4405F]",
  },
  {
    label: "Trustpilot",
    href: "https://www.trustpilot.com/review/weblynx.us",
    hoverClass: "hover:text-[#00B67A]",
  },
  {
    label: "Clutch",
    href: "https://clutch.co/profile/weblynx",
    hoverClass: "hover:text-[#FF3D2E]",
  },
  {
    label: "Bark",
    href: "https://www.bark.com/en/gb/company/weblynx/O7QZm/",
    hoverClass: "hover:text-[#00A86B]",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

export const WORK_STATS = [
  { value: "12+", label: "Projects shipped" },
  { value: "8", label: "Happy clients" },
  { value: "4", label: "Countries" },
  { value: "100%", label: "On-time delivery" },
] as const;

export const ABOUT_STATS = [
  { value: "2025", label: "Founded" },
  { value: "12+", label: "Projects shipped" },
  { value: "4", label: "Countries served" },
  { value: "100%", label: "On-time delivery" },
] as const;

export const MARKETING_RESULTS_STATS = [
  { value: "+320%", label: "Organic traffic for Lumen Beauty (6 months)" },
  { value: "4.2×", label: "Return on ad spend for NorthBrand" },
  { value: "−47%", label: "Cost per lead for Acme SaaS" },
  { value: "12k", label: "New email subscribers for Stackline (Q1)" },
] as const;

// ─── Tech stacks ──────────────────────────────────────────────────────────────

export const TECH_STACKS = {
  webDevelopment: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Sanity CMS",
    "Vercel",
    "Framer Motion",
    "Shopify",
  ],
  appDevelopment: [
    "React Native",
    "Expo",
    "TypeScript",
    "Firebase",
    "Supabase",
    "Stripe / RevenueCat",
    "EAS Build",
    "Sentry",
  ],
  aiDevelopment: [
    "OpenAI GPT",
    "Anthropic Claude",
    "Gemini",
    "LangChain",
    "LlamaIndex",
    "Vercel AI SDK",
    "Pinecone",
    "Supabase pgvector",
    "Replicate",
    "Hugging Face",
    "LangSmith",
  ],
  design: [
    "Figma",
    "Framer",
    "After Effects",
    "Illustrator",
    "Photoshop",
    "Rive",
    "Notion",
    "Loom",
  ],
} as const;

// ─── Testimonials & trust ─────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    quote:
      "Weblynx delivered our MVP in six weeks exactly what we needed to close our seed round.",
    initials: "SC",
    avatarBg: "var(--red)" as const,
    name: "Sara Chen",
    role: "Founder, Acme SaaS",
  },
  {
    quote: "Site speed went from 4 seconds to under one. Conversions doubled within a month.",
    initials: "MK",
    avatarBg: "var(--blue)" as const,
    name: "Marcus King",
    role: "CEO, NorthBrand",
  },
] as const;

export const CLIENT_LOGOS = [
  { label: "ACME", className: "font-sans text-xl font-bold tracking-wider text-[var(--text)]" },
  { label: "NORTHBRAND", className: "font-sans text-xl font-bold tracking-wider text-[var(--text)]" },
  { label: "finlytics", className: "font-serif text-2xl italic text-[var(--text)]" },
  { label: "LUMEN", className: "font-sans text-xl font-bold tracking-wider text-[var(--text)]" },
  { label: "orbit/studio", className: "font-mono text-xl text-[var(--text)]" },
  { label: "STACKLINE", className: "font-sans text-xl font-bold tracking-wider text-[var(--text)]" },
] as const;

// ─── Contact FAQ ──────────────────────────────────────────────────────────────

export const CONTACT_FAQS = [
  {
    q: "What's your minimum project size?",
    a: "Most projects start at $1,500 but we'll talk if budget is flexible.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Most of our clients are in the US, EU, and UK. We bill in USD.",
  },
  {
    q: "How fast can you start?",
    a: "Usually within 1–2 weeks of sign-off. We book 1 quarter ahead.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes before any project details are shared. Just ask.",
  },
] as const;

// ─── Work / projects ──────────────────────────────────────────────────────────

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
  filters: Exclude<WorkFilterId, "all">[];
};

export const WORK_FEATURED = {
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

/** Featured project cards for marketing sections (home, services, service pages). */
export const PROJECT_SHOWCASES = {
  home: [
    {
      href: "/work/finlytics",
      tileGradient: "linear-gradient(135deg, #2a1b3d, #1a0e2e)",
      mockClassName: "h-16 w-24 rounded-lg bg-[linear-gradient(135deg,var(--red),var(--red-dark))]",
      mockLabel: "finlytics dashboard",
      tags: ["SaaS", "Web app" , "E-commerce"] as const,
      title: "E-Commerce",
      description: "Rebuilt on Next.js. Load time 6s → 0.8s. +40% conversion.",
    },
    {
      href: "/work/trekr-fitness",
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
      href: "/work/finlytics",
      gradient: "linear-gradient(135deg, #2a1b3d, #1a0e2e)",
      tileLabel: "finlytics dashboard",
      title: "Finlytics SaaS",
      meta: "Web app · +40% conversion",
    },
    {
      href: "/work/northbrand-dtc",
      gradient: "linear-gradient(135deg, #0f3d2e, #082018)",
      tileLabel: "northbrand store",
      title: "NorthBrand Store",
      meta: "Shopify · 2.5× revenue",
    },
  ],
} as const;

// ─── Blog ─────────────────────────────────────────────────────────────────────

export type BlogCategoryId =
  | "all"
  | "web"
  | "app"
  | "design"
  | "marketing"
  | "case-studies"
  | "tutorials";

export type BlogPost = {
  slug: string;
  categoryId: BlogCategoryId;
  categoryLabel: string;
  title: string;
  excerpt: string;
  readMin: number;
  dateLabel: string;
  coverClass: string;
  coverFg: string;
};

export const BLOG_CATEGORIES: { id: BlogCategoryId; label: string }[] = [
  { id: "all", label: "All posts" },
  { id: "web", label: "Web development" },
  { id: "app", label: "App development" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
  { id: "case-studies", label: "Case studies" },
  { id: "tutorials", label: "Tutorials" },
];

export const BLOG_FEATURED = {
  slug: "next-js-15-rebuild",
  categoryId: "web" as const,
  categoryLabel: "Web development",
  title: "Why we rebuilt our entire site on Next.js 15 (and what we learned)",
  excerpt:
    "A behind the scenes look at our migration the wins, the bugs, and the surprising performance gains.",
  readMin: 8,
  dateLabel: "May 10, 2026",
  coverClass: "bg-[#CECBF6]",
  coverFg: "text-[#3C3489]",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "server-vs-client-components",
    categoryId: "web",
    categoryLabel: "Web development",
    title: "Server vs client components when to use what",
    excerpt: "A practical guide to choosing the right component type in Next.js App Router.",
    readMin: 6,
    dateLabel: "May 5",
    coverClass: "bg-[#9FE1CB]",
    coverFg: "text-[#085041]",
  },
  {
    slug: "seo-mistakes-agency-site",
    categoryId: "marketing",
    categoryLabel: "Marketing",
    title: "5 SEO mistakes killing your agency site",
    excerpt:
      "If you're getting zero organic traffic, you're probably making at least one of these.",
    readMin: 5,
    dateLabel: "Apr 28",
    coverClass: "bg-[#FAC775]",
    coverFg: "text-[#633806]",
  },
  {
    slug: "react-native-mvp-5-weeks",
    categoryId: "app",
    categoryLabel: "App development",
    title: "Shipping a React Native MVP in 5 weeks",
    excerpt: "How we structured our timeline, stack, and scope to launch on time.",
    readMin: 7,
    dateLabel: "Apr 22",
    coverClass: "bg-[#F5C4B3]",
    coverFg: "text-[#712B13]",
  },
  {
    slug: "brand-system-from-scratch",
    categoryId: "design",
    categoryLabel: "Design",
    title: "Building a brand system from scratch",
    excerpt: "Tokens, components, and decisions that scale beyond your first launch.",
    readMin: 9,
    dateLabel: "Apr 14",
    coverClass: "bg-[#F4C0D1]",
    coverFg: "text-[#72243E]",
  },
  {
    slug: "finlytics-doubled-signups",
    categoryId: "case-studies",
    categoryLabel: "Case study",
    title: "How Finlytics doubled signups in 6 weeks",
    excerpt: "A deep-dive into the redesign, tests, and metrics behind their relaunch.",
    readMin: 10,
    dateLabel: "Apr 8",
    coverClass: "bg-[#B5D4F4]",
    coverFg: "text-[#0C447C]",
  },
  {
    slug: "contact-form-resend",
    categoryId: "tutorials",
    categoryLabel: "Tutorial",
    title: "Build a contact form with Resend in 10 minutes",
    excerpt: "Step-by-step guide to setting up a working contact form on Next.js.",
    readMin: 4,
    dateLabel: "Apr 1",
    coverClass: "bg-[#D3D1C7]",
    coverFg: "text-[#444441]",
  },
  {
    slug: "tailwind-v4-migration",
    categoryId: "web",
    categoryLabel: "Web development",
    title: "Migrating a production UI to Tailwind v4",
    excerpt: "What broke, what got simpler, and how we rolled it out without downtime.",
    readMin: 8,
    dateLabel: "Mar 22",
    coverClass: "bg-[#CECBF6]",
    coverFg: "text-[#3C3489]",
  },
  {
    slug: "meta-ads-creative-testing",
    categoryId: "marketing",
    categoryLabel: "Marketing",
    title: "Creative testing frameworks that actually scale",
    excerpt: "A lightweight process we use to learn fast without burning budget.",
    readMin: 6,
    dateLabel: "Mar 15",
    coverClass: "bg-[#FAC775]",
    coverFg: "text-[#633806]",
  },
  {
    slug: "expo-router-navigation",
    categoryId: "app",
    categoryLabel: "App development",
    title: "Expo Router patterns we reach for every week",
    excerpt: "Layouts, modals, and deep links distilled from recent client apps.",
    readMin: 7,
    dateLabel: "Mar 8",
    coverClass: "bg-[#F5C4B3]",
    coverFg: "text-[#712B13]",
  },
];

export function getBlogPostBySlug(slug: string) {
  if (slug === BLOG_FEATURED.slug) return { ...BLOG_FEATURED, kind: "featured" as const };
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (post) return { ...post, kind: "post" as const };
  return null;
}
