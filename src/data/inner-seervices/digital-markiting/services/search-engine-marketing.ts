/**
 * Copy and structured content for the Search Engine Marketing page (`/search-engine-marketing`).
 */

export type SemHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type SemNetworkIconId = "google" | "bing" | "shopping";

export type SemCampaignTypeIconId =
  | "search"
  | "shopping-cart"
  | "rocket"
  | "photo"
  | "arrow-back"
  | "youtube";

export type SemDeliverableIconId =
  | "clipboard-list"
  | "key"
  | "pencil"
  | "layout"
  | "target"
  | "flask"
  | "adjustments"
  | "chart-line"
  | "message-circle-2";

export type SemRelatedIconId = "search" | "message-2-share" | "layout";

export const SEARCH_ENGINE_MARKETING_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "Search Engine Marketing" },
    ] as const,
    description:
      "Google Ads, Bing Ads, and shopping campaigns engineered for one thing return on ad spend. Every keyword, every dollar, fully accountable.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See results", href: "/digital-marketing#results" },
    stats: [
      { value: "4.2×", label: "Avg ROAS" },
      { value: "−47%", label: "Avg cost per lead" },
      { value: "14", label: "Days to launch" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "You need leads or sales now not 6 months from now",
      "You're spending on ads but the ROI is unclear or negative",
      "Your buyers actively search for what you offer on Google",
      "You want full transparency on every keyword, click, and conversion",
    ] as const,
    callout: {
      title: "SEM works best with a strong landing page",
      bodyBeforeLink:
        "Even the best ads fail with a poor landing page. We audit yours first and if it needs work, we'll loop in ",
      webDevelopment: { label: "web development", href: "/web-development" },
      bodyAfterLink: " before launching campaigns.",
    },
  },

  networks: {
    description:
      "We focus on the networks where your buyers actually search and skip the ones that don't move the needle.",
    items: [
      {
        name: "Google Ads",
        body: "Search, Display, Shopping, Performance Max, and YouTube. The largest ad network on Earth.",
        footer: "Coverage · 90%+ of US search",
        icon: "google" as const,
        iconColor: "#4285F4",
      },
      {
        name: "Microsoft (Bing) Ads",
        body: "Cheaper CPCs, older & higher-income audience. Perfect for B2B and enterprise targeting.",
        footer: "Coverage · Bing, Yahoo, AOL, LinkedIn signals",
        icon: "bing" as const,
        iconColor: "#008373",
      },
      {
        name: "Shopping & Marketplaces",
        body: "Google Shopping, Amazon Sponsored Products, and product feeds for DTC and ecommerce.",
        footer: "Best for · Ecommerce · DTC · Retail",
        icon: "shopping" as const,
        iconColor: "#FFC439",
      },
    ] as const,
  },

  campaignTypes: {
    description:
      "We pick campaign types based on where your buyer is in the journey not what's trendy.",
    items: [
      {
        title: "Search campaigns",
        body: "High-intent buyers searching for what you sell",
        icon: "search" as const,
      },
      {
        title: "Shopping campaigns",
        body: "Product listings with images, prices, ratings",
        icon: "shopping-cart" as const,
      },
      {
        title: "Performance Max",
        body: "Google's AI-driven cross-channel campaigns",
        icon: "rocket" as const,
      },
      {
        title: "Display & banner ads",
        body: "Visual ads across 2M+ websites & apps",
        icon: "photo" as const,
      },
      {
        title: "Remarketing",
        body: "Re-engage visitors who didn't convert",
        icon: "arrow-back" as const,
      },
      {
        title: "YouTube video ads",
        body: "In-stream & discovery video campaigns",
        icon: "youtube" as const,
      },
    ] as const,
  },

  deliverables: {
    description:
      'A full operation strategy, build, optimization, and reporting. Not just "set it and forget it."',
    items: [
      { title: "Account audit", body: "Full review of past spend & performance", icon: "clipboard-list" as const },
      { title: "Keyword research", body: "Intent-based, negative keyword lists", icon: "key" as const },
      { title: "Ad copy & creative", body: "RSAs, headlines, descriptions, sitelinks", icon: "pencil" as const },
      { title: "Landing page audit", body: "CRO recommendations for higher conversion", icon: "layout" as const },
      { title: "Conversion tracking", body: "GA4, GTM, server-side events, offline conversions", icon: "target" as const },
      { title: "A/B testing", body: "Continuous testing on copy & bids", icon: "flask" as const },
      { title: "Bid & budget management", body: "Smart bidding strategies, weekly tuning", icon: "adjustments" as const },
      { title: "Live dashboard", body: "Looker Studio reporting, anytime access", icon: "chart-line" as const },
      { title: "Weekly check-ins", body: "Slack access + bi-weekly strategy calls", icon: "message-circle-2" as const },
    ] as const,
  },

  toolkit: {
    tools: [
      "Google Ads",
      "Microsoft Ads",
      "Google Analytics 4",
      "Google Tag Manager",
      "Looker Studio",
      "Search Console",
      "Semrush",
      "Ahrefs",
      "Hotjar",
      "Zapier",
      "CallRail",
    ] as const,
  },

  howItWorks: {
    description: "We move fast most SEM accounts launch within 2 weeks, then optimize continuously.",
    steps: [
      { phaseLabel: "Days 1–3", num: "01", title: "Audit", body: "Account review & goal setting" },
      { phaseLabel: "Days 4–7", num: "02", title: "Strategy", body: "Keywords, structure, budget" },
      { phaseLabel: "Days 8–12", num: "03", title: "Build", body: "Campaigns, ads, tracking" },
      { phaseLabel: "Day 14", num: "04", title: "Launch", body: "Go live, monitor closely" },
      { phaseLabel: "Ongoing", num: "05", title: "Optimize", body: "Weekly tuning, test, scale" },
    ] as const,
  },

  engagementModels: {
    description: "SEM is a monthly retainer. Pick the level based on your spend, networks, and ambition.",
    ctaLabel: "Request a quote →",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "Launchpad",
        duration: "Monthly · 3-month minimum",
        features: [
          "Google Ads only",
          "Up to 3 campaigns",
          "$2k–$10k ad spend / month",
          "Monthly reporting",
          "Bi-weekly calls",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "Growth",
        duration: "Monthly · 6-month minimum",
        badge: "Most common",
        features: [
          "Google + Microsoft + Shopping",
          "Up to 10 campaigns",
          "$10k–$50k ad spend / month",
          "A/B testing & remarketing",
          "Live dashboard",
          "Weekly calls + Slack",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "Scale",
        duration: "Monthly · 12-month partnership",
        features: [
          "All networks & campaign types",
          "Unlimited campaigns",
          "$50k+ ad spend / month",
          "CRO & landing page work",
          "Custom attribution",
          "Dedicated lead",
          "Daily monitoring",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    introBefore:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including scope, networks, KPIs, and management fee. ",
    introEmphasis: "Ad spend is paid by you directly to Google / Microsoft",
    introAfter: " so you own the budget and accounts, with full transparency.",
    steps: [
      {
        num: "01",
        title: "Discovery call",
        body: "Free 30-min on goals, audience, spend.",
      },
      {
        num: "02",
        title: "Custom proposal",
        body: "Strategy, networks, fixed fee within 3 days.",
      },
      {
        num: "03",
        title: "Kickoff",
        body: "Campaigns live within 14 days.",
      },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "What's the difference between SEM and SEO?",
        a: "SEM is paid search you buy clicks on Google and Microsoft and see results within days. SEO is organic rankings that compound over months. Most growth-focused brands run both: SEM for immediate demand capture, SEO for long-term margin.",
      },
      {
        q: "How much ad spend do I need to start?",
        a: "Launchpad clients typically start at $2k–$10k/month in media spend. Growth and Scale tiers support higher budgets. Management fees are separate and quoted after discovery based on scope and networks.",
      },
      {
        q: "How fast will I see results?",
        a: "Most accounts go live within 14 days. You'll see click and conversion data within the first week of launch. Meaningful ROAS optimization usually takes 4–8 weeks as we gather enough data to tune bids and creative.",
      },
      {
        q: "Do you guarantee a specific ROAS?",
        a: "We don't guarantee a fixed ROAS markets, offers, and landing pages vary too much. We do set clear KPI targets, report weekly, and optimize toward your break-even and growth goals with full transparency.",
      },
      {
        q: "Who owns the Google Ads & tracking accounts?",
        a: "You do. We build and manage in accounts you own with shared access. All conversion tracking, GA4, and GTM stay in your properties so you keep full control when you scale or switch agencies.",
      },
      {
        q: "Can you fix an existing account that's underperforming?",
        a: "Yes. We start with a full audit structure, keywords, negatives, tracking, and landing pages then rebuild or refine campaigns based on what's salvageable. Many underperforming accounts improve within the first optimization cycle.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "SEO services",
        description: "Long-term organic growth that compounds while ads drive immediate sales.",
        href: "/digital-marketing#channels",
        cta: "SEO services →",
        icon: "search" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Social marketing",
        description: "Build brand while SEM captures intent both layers working together.",
        href: "/social-media-marketing",
        cta: "Social marketing →",
        icon: "message-2-share" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Landing page builds",
        description: "High-converting pages built specifically for your top SEM campaigns.",
        href: "/web-development",
        cta: "Web development →",
        icon: "layout" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Ready to make ",
    titleEmphasis: "every ad",
    titleAfter: " dollar count?",
    description:
      "Book a free 30-minute call. We'll audit your current ad performance and send a custom plan within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
