/**
 * Copy and structured content for the Digital Marketing page (`/digital-marketing`).
 * Channel and included-card icons are resolved in components via string ids.
 * Results grid uses `MARKETING_RESULTS_STATS` from `site.ts`.
 */

export type DmHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type DmChannelIconId =
  | "search"
  | "target-arrow"
  | "brand-meta"
  | "pencil"
  | "mail"
  | "brand-linkedin";

export type DmIncludedIconId =
  | "clipboard-list"
  | "route"
  | "chart-line"
  | "flask"
  | "message"
  | "trending-up";

export const DIGITAL_MARKETING_PAGE = {
  hero: {
    breadcrumb: {
      parentLabel: "Services",
      parentHref: "/service",
      currentLabel: "Digital marketing",
    },
    heading: {
      before: "Get found, get clicks, ",
      emphasis: "get customers",
      after: "",
    } satisfies DmHeading,
    description:
      "SEO, paid ads, content, and social built around your business goals, measured by what actually moves the needle.",
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "See results", href: "#results" },
    mockChart: {
      topLeft: "ORGANIC GROWTH",
      topRight: "+320%",
      statColumns: [
        { value: "4.2×", label: "ROAS" },
        { value: "−47%", label: "CPL" },
        { value: "12k", label: "SIGNUPS" },
      ] as const,
    },
  },

  whoFor: {
    heading: {
      before: "You probably ",
      emphasis: "need this",
      after: " if...",
    } satisfies DmHeading,
    bullets: [
      "You have a great product but nobody's finding it",
      "You're spending on ads but not seeing returns",
      "You need leads from organic search",
      "You want one team handling growth, not five vendors",
    ] as const,
  },

  channels: {
    sectionId: "channels",
    heading: {
      before: "Six channels, ",
      emphasis: "one growth engine",
      after: "",
    } satisfies DmHeading,
    iconClass: "text-[var(--red)]",
    items: [
      {
        title: "SEO",
        body: "Technical, on-page, content, and link strategy.",
        icon: "search" as const,
      },
      {
        title: "Google Ads",
        body: "Search, display, and shopping campaigns.",
        icon: "target-arrow" as const,
      },
      {
        title: "Meta Ads",
        body: "Facebook & Instagram for awareness and conversion.",
        icon: "brand-meta" as const,
      },
      {
        title: "Content",
        body: "Blog, landing pages, lead magnets.",
        icon: "pencil" as const,
      },
      {
        title: "Email",
        body: "Newsletters, sequences, automation.",
        icon: "mail" as const,
      },
      {
        title: "Social",
        body: "LinkedIn, X, and Instagram content.",
        icon: "brand-linkedin" as const,
      },
    ] as const,
  },

  included: {
    heading: {
      before: "Every engagement includes ",
      emphasis: "everything",
      after: "",
    } satisfies DmHeading,
    description: "No vague reports. No vanity metrics. Just measurable growth.",
    items: [
      { title: "Growth audit", body: "Full review of your channels & gaps", icon: "clipboard-list" as const },
      { title: "Custom strategy", body: "90-day roadmap tied to your goals", icon: "route" as const },
      { title: "Monthly reporting", body: "Live dashboard + written insights", icon: "chart-line" as const },
      { title: "A/B testing", body: "Continuous testing on copy & creative", icon: "flask" as const },
      { title: "Weekly check-ins", body: "Slack access + bi-weekly calls", icon: "message" as const },
      {
        title: "Conversion tracking",
        body: "GA4, Mixpanel, attribution setup",
        icon: "trending-up" as const,
      },
    ] as const,
  },

  process: {
    heading: {
      before: "A growth loop, not a ",
      emphasis: "campaign",
      after: "",
    } satisfies DmHeading,
    description: "Marketing isn't one-and-done. We work in monthly cycles that compound over time.",
    steps: [
      { num: "01", title: "Audit", body: "Channels, gaps, baseline metrics" },
      { num: "02", title: "Strategy", body: "90-day plan, channel priorities" },
      { num: "03", title: "Execute", body: "Launch, optimize, scale winners" },
      { num: "04", title: "Measure & iterate", body: "Monthly review, refine, repeat" },
    ] as const,
  },

  engagement: {
    heading: {
      before: "How we work with you ",
      emphasis: "Engagement models",
      after: "",
    } satisfies DmHeading,
    description: "Marketing is ongoing. We work in monthly retainers choose the level that matches your stage.",
    featuredTierBadge: "Most common",
    ctaLabel: "Request a quote",
    ctaHref: "#quote",
    tiers: [
      {
        featured: false,
        label: "Engagement 01",
        title: "Starter",
        timeline: "Monthly · 3-month minimum",
        items: [
          "1 channel focus",
          "SEO or single ads platform",
          "Monthly content (2 posts)",
          "Monthly reporting",
          "Bi-weekly calls",
        ],
      },
      {
        featured: true,
        label: "Engagement 02",
        title: "Growth",
        timeline: "Monthly · 6-month minimum",
        items: [
          "Multi-channel (SEO + ads)",
          "Weekly content",
          "Email automation",
          "A/B testing",
          "Live dashboard",
          "Weekly calls + Slack",
        ],
      },
      {
        featured: false,
        label: "Engagement 03",
        title: "Scale",
        timeline: "Monthly · 12-month partnership",
        items: [
          "Full-channel strategy",
          "Daily content output",
          "Paid media management",
          "CRO + funnel optimization",
          "Dedicated growth lead",
          "Embedded team feel",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    heading: {
      before: "Every business is different ",
      emphasis: "So is every plan",
      after: "",
    } satisfies DmHeading,
    intro:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days channels, monthly retainer scope, KPIs, and pricing.",
    steps: [
      { num: "01", title: "Discovery call", body: "Free 30-min review of your goals." },
      { num: "02", title: "Custom plan", body: "Channels, scope, KPIs within 3 days." },
      { num: "03", title: "Kickoff", body: "Audit + strategy in first 2 weeks." },
    ] as const,
  },

  results: {
    sectionId: "results",
    heading: "What growth looks like",
  },

  faq: {
    heading: {
      before: "Before you reach out ",
      emphasis: "Common questions",
      after: "",
    } satisfies DmHeading,
    items: [
      {
        q: "How long until I see results from SEO?",
        a: "Most teams see meaningful traction in 3–6 months depending on competition and site health. We set milestones at 30 / 60 / 90 days so progress is visible early.",
      },
      {
        q: "Do I need to commit to a long contract?",
        a: "Each tier has a minimum term (3, 6, or 12 months) so we can invest properly in compounding work. After that, plans renew month-to-month unless you prefer another term.",
      },
      {
        q: "Is ad spend included in the retainer?",
        a: "Retainers cover strategy, management, and reporting. Media spend is billed directly to your ad accounts so you keep ownership and full transparency.",
      },
      {
        q: "Who owns the ad accounts and tracking data?",
        a: "You do. We build and optimize in accounts you own, with shared access. All tracking and dashboards stay in your properties.",
      },
      {
        q: "Can I just hire you for SEO, or just for ads?",
        a: "Yes. Starter is built for a single-channel focus. We can expand scope anytime as priorities change.",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Ready to actually ",
    titleEmphasis: "grow",
    titleAfter: "?",
    description:
      "Book a free 30-minute strategy call. We'll review your current marketing and send a custom growth plan within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
