/**
 * Copy and structured content for the marketing home page.
 * Icons in service cards are resolved in `HomeServices` via string ids.
 */

export type HomeProcessHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type HomeServiceIconId = "code" | "device-mobile" | "trending-up" | "brain" | "palette";

export const HOME_PAGE = {
  hero: {
    badge: "Now accepting Q3 projects",
    description:
      "From custom web apps and mobile builds to design and growth one team that links it all together.",
    primaryCta: { label: "Start a project", href: "/contact" },
    secondaryCta: { label: "See our work", href: "/case-studies" },
    avatars: [
      { initials: "SC", className: "bg-[var(--surface-red)] text-[var(--color-on-primary)]", textClass: "text-xs" },
      { initials: "MK", className: "bg-[var(--surface-blue)] text-[var(--color-on-primary)]", textClass: "text-xs" },
      { initials: "AK", className: "bg-[#F5C518] text-[#0A0A0A]", textClass: "text-xs" },
      { initials: "+8", className: "bg-[#1F1F1F] text-[#C4C4C4]", textClass: "text-xs" },
    ] as const,
    trustCaption: {
      line1: "Trusted by founders",
      line2: "across 4 countries",
    },
  },

  process: {
    steps: [
      {
        week: "WEEK 1",
        n: "01",
        title: "Discover",
        text: "Strategy call, audit, and scope. We learn your business inside out.",
      },
      {
        week: "WEEK 2",
        n: "02",
        title: "Design",
        text: "Wireframes, prototype, sign-off. Aligned before we build.",
      },
      {
        week: "WEEKS 3–5",
        n: "03",
        title: "Build",
        text: "Develop, test, weekly demos. You see progress every Friday.",
      },
      {
        week: "WEEK 6",
        n: "04",
        title: "Launch",
        text: "Deploy, QA, handover. We stick around for 30 days.",
      },
    ] as const,
  },

  services: {
    sectionAriaLabel: "Services",
    carouselAriaLabel: "Service offerings",
    description:
      "Each service stands alone but together they form a connected system designed to help your business launch, grow, and scale.",
    learnMoreLabel: "Learn more",
    prevAriaLabel: "Previous services",
    nextAriaLabel: "Next services",
    items: [
      {
        href: "/web-development",
        n: "01",
        title: "Web development",
        description: "Marketing sites, web apps, SaaS platforms built on Next.js.",
        stack: "Next.js · React · TypeScript",
        duration: "4–8 weeks",
        icon: "code" as const,
      },
      {
        href: "/app-development",
        n: "02",
        title: "App development",
        description: "iOS and Android apps with React Native. One codebase, two stores.",
        stack: "React Native · Expo · Firebase",
        duration: "8–12 weeks",
        icon: "device-mobile" as const,
      },
      {
        href: "/digital-marketing",
        n: "03",
        title: "Digital marketing",
        description: "SEO, paid ads, content, and social full-funnel growth.",
        stack: "SEO · Ads · Content · Email",
        duration: "Monthly retainer",
        icon: "trending-up" as const,
      },
      {
        href: "/artificial-intelligence",
        n: "04",
        title: "AI development",
        description: "Chatbots, RAG, agents, and workflow automation on modern LLMs.",
        stack: "GPT · Claude · LangChain",
        duration: "2–8 weeks",
        icon: "brain" as const,
      },
      {
        href: "/design",
        n: "05",
        title: "Design",
        description: "Brand identity, UI/UX, and product design that actually ships.",
        stack: "Brand · UI/UX · Identity",
        duration: "2–5 weeks",
        icon: "palette" as const,
      },
    ] as const,
  },

  caseStudies: {
    viewAllLabel: "View all work",
    viewAllHref: "/case-studies",
  },

  finalCta: {
    titleLine1: "Ready to build",
    titleLine2Before: "something ",
    titleLine2Emphasis: "great",
    titleLine2After: "?",
    description:
      "Book a free 30-minute scoping call. We'll review your project and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
