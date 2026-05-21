/**
 * Copy and structured content for the main `/service` marketing page.
 * Service grid icons are resolved in `ServicesGrid` via string ids.
 * Featured tiles use `PROJECT_SHOWCASES.services` from `@/data/site` (see `case-studies-page.ts`).
 */

export type ServicesGridIconId = "code" | "device-mobile" | "trending-up" | "brain" | "palette";

export type ServicesWhyIconId = "bolt" | "puzzle" | "target";

export const SERVICES_PAGE = {
  hero: {
    description:
      "We build the web for ambitious founders. From your first landing page to a full product launch, we have you covered.",
  },

  grid: {
    learnMoreLabel: "Learn more",
    cards: [
      {
        n: "01",
        title: "Web development",
        body: "Marketing sites, web apps, and SaaS platforms built on Next.js. Fast, SEO-ready, made to scale.",
        stack: "Next.js · React · TypeScript · Shopify",
        delivery: "4–8 week delivery",
        href: "/web-development",
        icon: "code" as const,
      },
      {
        n: "02",
        title: "App development",
        body: "Cross-platform iOS and Android apps with React Native. From MVP to App Store launch.",
        stack: "React Native · Expo · Firebase · TypeScript",
        delivery: "8–12 week delivery",
        href: "/app-development",
        icon: "device-mobile" as const,
      },
      {
        n: "03",
        title: "Digital marketing",
        body: "SEO, paid ads, content, and social everything to get your brand found and chosen.",
        stack: "SEO · Google Ads · Meta Ads · Content",
        delivery: "Monthly retainer",
        href: "/digital-marketing",
        icon: "trending-up" as const,
      },
      {
        n: "04",
        title: "AI development",
        body: "Chatbots, RAG, agents, and automation on the latest LLMs production AI, not demos.",
        stack: "GPT · Claude · LangChain · Pinecone",
        delivery: "2–8 week delivery",
        href: "/artificial-intelligence",
        icon: "brain" as const,
      },
      {
        n: "05",
        title: "Design",
        body: "Brand identity, UI/UX, and product design. Beautiful work that's still functional and on-brand.",
        stack: "Figma · Brand systems · UI/UX",
        delivery: "2–5 week delivery",
        href: "/design",
        icon: "palette" as const,
      },
    ] as const,
  },

  why: {
    items: [
      {
        title: "Ship in weeks",
        body: "Most projects live within 4–6 weeks.",
        icon: "bolt" as const,
      },
      {
        title: "All under one roof",
        body: "Design, dev, and growth no agency stitching.",
        icon: "puzzle" as const,
      },
      {
        title: "Outcome-first",
        body: "We track business results, not just deliverables.",
        icon: "target" as const,
      },
    ] as const,
  },

  process: {
    steps: [
      { week: "WEEK 1", n: "01", title: "Discover", detail: "Strategy call & scope" },
      { week: "WEEK 2", n: "02", title: "Design", detail: "Concepts & prototype" },
      { week: "WEEKS 3–5", n: "03", title: "Build", detail: "Develop & iterate" },
      { week: "WEEK 6", n: "04", title: "Launch", detail: "Ship & support" },
    ] as const,
  },

  featuredWork: {
    viewAllLabel: "View all",
    viewAllHref: "/case-studies",
  },

  faq: {
    items: [
      {
        q: "Can I hire you for just one service?",
        a: "Yes. Many clients start with web development or design only. We scope each engagement independently and can expand later.",
      },
      {
        q: "Do you offer bundles across services?",
        a: "We often package design + build, or build + growth, with one timeline and one point of contact. Ask on your intro call and we will tailor a bundle.",
      },
      {
        q: "What's your typical timeline?",
        a: "Most marketing sites ship in 4–6 weeks. Apps and larger SaaS builds vary; we will give a week-by-week plan after discovery.",
      },
      {
        q: "Do you work with clients outside Pakistan?",
        a: "Yes. We work with teams in the US, UK, EU, and MENA. Calls are async-friendly and we bill in USD.",
      },
    ] as const,
  },

  finalCta: {
    titleBefore: "Not sure which ",
    titleEmphasis: "service",
    titleAfter: " you need?",
    description: "Book a free 30-minute call. We'll help you figure it out.",
    ctaLabel: "Book a call",
    ctaHref: "/contact",
  },
} as const;
