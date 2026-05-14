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
    "A behind-the-scenes look at our migration — the wins, the bugs, and the surprising performance gains.",
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
    title: "Server vs client components — when to use what",
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
    excerpt: "Layouts, modals, and deep links — distilled from recent client apps.",
    readMin: 7,
    dateLabel: "Mar 8",
    coverClass: "bg-[#F5C4B3]",
    coverFg: "text-[#712B13]",
  },
];
