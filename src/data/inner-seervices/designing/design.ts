/**
 * Copy and structured content for the Design service page (`/design`).
 * Discipline and deliverable icons are resolved in components via string ids.
 */

export type DesignHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type DesignDisciplineIconId = "asterisk" | "layout-grid" | "device-mobile" | "palette";

export type DesignDeliverableIconId =
  | "bulb"
  | "pencil"
  | "book"
  | "files"
  | "components"
  | "rocket";

export const DESIGN_PAGE = {
  hero: {
    breadcrumb: {
      parentLabel: "Services",
      parentHref: "/services",
      currentLabel: "Design",
    },
    heading: {
      before: "Brand, product, and identity ",
      emphasis: "designed to stand out",
      after: "",
    } satisfies DesignHeading,
    description:
      "From a single logo to a full identity system, we craft design that's beautiful, on-brand, and built to work not just to win awards.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See our work", href: "/case-studies" },
  },

  whoFor: {
    heading: {
      before: "You probably ",
      emphasis: "need this",
      after: " if...",
    } satisfies DesignHeading,
    bullets: [
      "You're launching a new brand and need a full identity",
      "Your existing brand feels outdated or off-target",
      "You need UI/UX for a web or mobile product",
      "You want design that ships not just sits in a PDF",
    ] as const,
  },

  disciplines: {
    heading: {
      before: "What we design ",
      emphasis: "One studio",
      after: "",
    } satisfies DesignHeading,
    items: [
      {
        title: "Brand identity",
        body: "Logo, type system, color palette, brand guidelines.",
        icon: "asterisk" as const,
      },
      {
        title: "UI / UX design",
        body: "Web and product interfaces designed for clarity.",
        icon: "layout-grid" as const,
      },
      {
        title: "Mobile app design",
        body: "iOS and Android with native feel and motion.",
        icon: "device-mobile" as const,
      },
      {
        title: "Marketing & illustration",
        body: "Landing pages, decks, social assets.",
        icon: "palette" as const,
      },
    ] as const,
  },

  deliverables: {
    heading: {
      before: "Every project includes ",
      emphasis: "everything",
      after: "",
    } satisfies DesignHeading,
    items: [
      {
        title: "Discovery & research",
        body: "Brand audit, competitor study, mood boards.",
        icon: "bulb" as const,
      },
      {
        title: "Concepts & iteration",
        body: "2–3 directions, refined to one.",
        icon: "pencil" as const,
      },
      {
        title: "Brand guidelines",
        body: "Documented standards your team can use.",
        icon: "book" as const,
      },
      {
        title: "Source files",
        body: "Figma + exported assets, fully editable.",
        icon: "files" as const,
      },
      {
        title: "Design system",
        body: "Reusable components, tokens, variants.",
        icon: "components" as const,
      },
      {
        title: "Handoff support",
        body: "Developer-ready specs & assets.",
        icon: "rocket" as const,
      },
    ] as const,
  },

  stack: {
    heading: {
      before: "Modern ",
      emphasis: "tools",
      after: " we ship with",
    } satisfies DesignHeading,
  },

  process: {
    heading: {
      before: "From blank page to ",
      emphasis: "brand book",
      after: " in 5 steps",
    } satisfies DesignHeading,
    steps: [
      { week: "Week 1", num: "01", title: "Discover", body: "Research, audit, mood boards." },
      { week: "Week 2", num: "02", title: "Explore", body: "2–3 directions, present concepts." },
      { week: "Week 3", num: "03", title: "Refine", body: "Pick a direction, polish details." },
      { week: "Week 4", num: "04", title: "System", body: "Build out guidelines, components." },
      { week: "Week 5", num: "05", title: "Handoff", body: "Deliver files, brand book, support." },
    ] as const,
  },

  engagements: {
    sectionId: "engagements",
    heading: {
      before: "Find the ",
      emphasis: "engagement",
      after: " that fits",
    } satisfies DesignHeading,
    description: "Every brand is different. Here are the three engagement models we typically work in.",
    featuredTierBadge: "Most common",
    ctaLabel: "Request a quote",
    ctaHref: "#quote",
    tiers: [
      {
        featured: false,
        label: "Engagement 01",
        title: "Essentials",
        timeline: "2-week delivery",
        items: [
          "Logo + wordmark",
          "Color palette",
          "Type system",
          "Basic guidelines",
          "2 rounds of revisions",
        ],
      },
      {
        featured: true,
        label: "Engagement 02",
        title: "Brand system",
        timeline: "4–5 week delivery",
        items: [
          "Full identity system",
          "Brand guidelines (20+ pages)",
          "Marketing assets",
          "Social templates",
          "Custom iconography",
          "3 rounds of revisions",
        ],
      },
      {
        featured: false,
        label: "Engagement 03",
        title: "Full studio",
        timeline: "8+ week engagement",
        items: [
          "Brand + product design",
          "Full design system",
          "Web + mobile UI",
          "Motion + illustration",
          "Ongoing design retainer",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    heading: {
      before: "Every project is different ",
      emphasis: "So is every quote",
      after: "",
    } satisfies DesignHeading,
    intro:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days including scope, milestones, timeline, and a fixed all-in price. No hourly billing. No surprise add-ons.",
    steps: [
      { num: "01", title: "Scoping call", body: "Free 30-min discussion." },
      { num: "02", title: "Custom proposal", body: "Within 3 business days." },
      { num: "03", title: "Kickoff", body: "Start within 1–2 weeks." },
    ] as const,
  },

  faq: {
    heading: {
      before: "Things people ask ",
      emphasis: "before starting",
      after: "",
    } satisfies DesignHeading,
    items: [
      {
        q: "How many design concepts will I see?",
        a: "Typically 2–3 distinct directions in the Explore phase. We present mood boards and initial concepts, then refine the direction you choose. Essentials includes 2 rounds; Brand system and Full studio include 3.",
      },
      {
        q: "How many rounds of revisions are included?",
        a: "It depends on the engagement: Essentials includes 2 revision rounds, Brand system includes 3, and Full studio scopes revisions per milestone. We define what counts as a round in your proposal so there are no surprises.",
      },
      {
        q: "Do I get the source files (Figma, Illustrator)?",
        a: "Yes. Every project includes editable Figma files and exported assets in the formats you need. Brand guidelines document how to use everything. You own the work we create for you once final payment is complete.",
      },
      {
        q: "Can you redesign my existing brand instead of starting fresh?",
        a: "Absolutely. We audit what you have, keep what works, and evolve the rest. Many clients come to us for a refresh rather than a full rebrand we scope accordingly so you do not lose equity you have already built.",
      },
      {
        q: "Will the design work across web, mobile, and print?",
        a: "Yes. We design with application in mind responsive web, native mobile patterns, and print-ready exports where needed. Brand system and Full studio engagements explicitly include cross-channel templates and specs.",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    className: "bg-[linear-gradient(180deg,var(--bg),rgba(27,7,9,0.98))]",
    titleBefore: "Ready to design something ",
    titleEmphasis: "memorable",
    titleAfter: "?",
    description: "Book a free 30-minute discovery call. We'll review your brand and send a tailored proposal.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
