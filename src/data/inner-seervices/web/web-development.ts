/**
 * Copy and structured content for the Web Development service page (`/web-development`).
 * Included-card icons are resolved in `WebDevIncluded` via string ids.
 * Related work tiles use `PROJECT_SHOWCASES.webDevelopment` from `@/data/site` (see `case-studies-page.ts`).
 */

export type WebDevHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type WebDevIncludedIconId =
  | "device-laptop"
  | "bolt"
  | "device-mobile"
  | "search"
  | "file-text"
  | "shield-check";

export const WEB_DEVELOPMENT_PAGE = {
  hero: {
    breadcrumb: {
      parentLabel: "Services",
      parentHref: "/service",
      currentLabel: "Web development",
    },
    description:
      "From landing pages to full-scale web apps built on Next.js, designed to scale, shipped in weeks.",
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "See engagements", href: "#engagements" },
    mockBrowserUrl: "https://yoursite.com",
  },

  whoFor: {
    bullets: [
      "Your current site is slow, outdated, or doesn't convert",
      "You're launching a startup and need an MVP fast",
      "You need a custom web app, not a template",
      "You want a partner who actually cares about your launch",
    ] as const,
  },

  included: {
    heading: {
      before: "Every project ",
      emphasis: "includes",
      after: "",
    } satisfies WebDevHeading,
    description:
      "No surprise add-ons. No vague scope. Here's what you get with every web project.",
    items: [
      {
        title: "Custom design",
        body: "Built for your brand, never a template",
        icon: "device-laptop" as const,
      },
      {
        title: "Sub-1s load times",
        body: "Optimized for Core Web Vitals",
        icon: "bolt" as const,
      },
      {
        title: "Fully responsive",
        body: "Perfect on every device",
        icon: "device-mobile" as const,
      },
      {
        title: "SEO foundation",
        body: "Meta, schema, sitemaps included",
        icon: "search" as const,
      },
      {
        title: "CMS integration",
        body: "Edit content without touching code",
        icon: "file-text" as const,
      },
      {
        title: "30-day support",
        body: "Bug fixes after launch, on us",
        icon: "shield-check" as const,
      },
    ] as const,
  },

  stack: {
    heading: {
      before: "Modern tools we ",
      emphasis: "ship with",
      after: "",
    } satisfies WebDevHeading,
  },

  process: {
    steps: [
      {
        week: "WEEK 1",
        num: "01",
        title: "Discovery",
        body: "Strategy call, audit, scope & brief",
      },
      {
        week: "WEEK 2",
        num: "02",
        title: "Design",
        body: "Wireframes, prototype, sign-off",
      },
      {
        week: "WEEKS 3–5",
        num: "03",
        title: "Build",
        body: "Develop, test, weekly demos",
      },
      {
        week: "WEEK 6",
        num: "04",
        title: "Launch",
        body: "Deploy, QA, handover & support",
      },
    ] as const,
  },

  engagements: {
    sectionId: "engagements",
    heading: {
      before: "Find the engagement that ",
      emphasis: "fits",
      after: "",
    } satisfies WebDevHeading,
    description:
      "Every project is quoted based on scope. Here are the three engagement models we typically work in.",
    featuredTierBadge: "Most common",
    ctaLabel: "Request a quote",
    ctaHref: "#quote",
    tiers: [
      {
        featured: false,
        label: "Engagement 01",
        title: "Landing & Marketing",
        timeline: "1–3 week delivery",
        items: [
          "Landing pages",
          "Marketing sites (up to 8 pages)",
          "Custom design + brand",
          "SEO foundation",
          "CMS integration",
        ],
      },
      {
        featured: true,
        label: "Engagement 02",
        title: "Web App / MVP",
        timeline: "4–8 week delivery",
        items: [
          "Custom web application",
          "User auth + database",
          "Admin dashboard",
          "API integrations",
          "Ongoing support",
        ],
      },
      {
        featured: false,
        label: "Engagement 03",
        title: "Full Platform",
        timeline: "3+ month engagement",
        items: [
          "Complex SaaS platforms",
          "Real-time features",
          "Multi-tenant architecture",
          "Analytics + monitoring",
          "Retainer relationship",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    heading: {
      before: "Every project is different ",
      emphasis: "So is every quote",
      after: "",
    } satisfies WebDevHeading,
    intro:
      "After a 30-minute scoping call, we send you a detailed proposal within 3 business days including scope, timeline, milestones, and a fixed all-in price. No hourly billing. No surprise add-ons.",
    steps: [
      {
        num: "01",
        title: "Scoping call",
        body: "Free 30-min discussion of your idea and goals.",
      },
      {
        num: "02",
        title: "Custom proposal",
        body: "Scope, timeline, milestones, fixed price within 3 days.",
      },
      {
        num: "03",
        title: "Kickoff",
        body: "Sign off and we start within 1–2 weeks.",
      },
    ] as const,
  },

  relatedWork: {
    heading: {
      before: "Web projects we've ",
      emphasis: "shipped",
      after: "",
    } satisfies WebDevHeading,
    viewAllLabel: "View all",
    viewAllHref: "/case-studies",
  },

  faq: {
    heading: {
      before: "Things people ask ",
      emphasis: "before starting",
      after: "",
    } satisfies WebDevHeading,
    items: [
      {
        q: "How long does a typical project take?",
        a: "Marketing and landing sites often ship in 1–3 weeks. Custom web apps and MVPs usually land in 4–8 weeks depending on auth, integrations, and admin needs. Larger platforms are scoped in phases you always get a week-by-week plan in the proposal.",
      },
      {
        q: "Do you provide hosting and ongoing maintenance?",
        a: "Yes. We deploy to Vercel or your stack of choice, wire up DNS and SSL, and can stay on for monitoring, updates, and new features. Post-launch care is optional but most teams keep us on a light retainer or milestone basis.",
      },
      {
        q: "Can you redesign my existing site?",
        a: "Absolutely. We audit what you have, preserve URLs and SEO where it matters, and rebuild on a modern stack usually Next.js so you get speed, better UX, and a codebase you can grow with.",
      },
      {
        q: "What's your payment structure?",
        a: "We work on fixed-price milestones: a deposit to start, a midpoint payment tied to an agreed demo or deliverable, and a final payment before launch. No open-ended hourly billing unless you explicitly want a time-and-materials phase.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes. Share yours before the scoping call or ask for ours we're used to reviewing product and roadmap details under NDA.",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    className: "bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(27,7,9,0.98))]",
    titleLine1: "Ready to build",
    titleLine2Before: "something ",
    titleLine2Emphasis: "great",
    titleLine2After: "?",
    description: "Book a free 30-minute strategy call. We'll review your goals and scope your project.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
