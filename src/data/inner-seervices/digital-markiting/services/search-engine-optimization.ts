/**
 * Copy and structured content for the Search Engine Optimization page (`/search-engine-optimization`).
 */

export type SeoHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type SeoPillarIconId = "tools" | "file-text" | "pencil" | "link";

export type SeoSpecializationIconId =
  | "world"
  | "map-pin"
  | "shopping-bag"
  | "cloud"
  | "arrows-shuffle"
  | "bandage";

export type SeoDeliverableIconId =
  | "clipboard-search"
  | "key"
  | "stack-2"
  | "pencil"
  | "tools"
  | "link"
  | "chart-line"
  | "radar"
  | "message-circle-2";

export type SeoRelatedIconId = "target-arrow" | "pencil" | "code";

export const SEARCH_ENGINE_OPTIMIZATION_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/services" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "Search Engine Optimization" },
    ] as const,
    heading: {
      before: "Get found by buyers ",
      emphasis: "already searching",
      after: " for you.",
    } satisfies SeoHeading,
    description:
      "Technical SEO, on-page optimization, and content strategy that compounds month over month. The traffic you don't have to keep paying for.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See our approach", href: "#approach" },
    stats: [
      { value: "+320%", label: "Avg traffic lift (6 mo)" },
      { value: "10×", label: "ROI vs paid (12 mo)" },
      { value: "100%", label: "White-hat tactics" },
    ] as const,
  },

  whoFor: {
    heading: {
      before: "You probably need ",
      emphasis: "SEO if",
      after: "...",
    },
    bullets: [
      "Your business gets little or no traffic from Google today",
      "You're tired of paying for every click and want compounding traffic",
      "Your site has hidden technical issues hurting rankings",
      "You want to build a content moat your competitors can't easily copy",
    ] as const,
    callout: {
      title: "SEO is a long game but the moat is permanent",
      bodyBeforeLink:
        "Expect early wins in 3 months, real traffic momentum in 6, and compounding ROI from month 9 onward. If you need leads now, pair SEO with ",
      paidSearch: { label: "paid search", href: "/search-engine-marketing" },
      bodyAfterLink: " for the short term.",
    },
  },

  pillars: {
    sectionId: "approach",
    heading: {
      before: "Modern ",
      emphasis: "SEO",
      after: " more than keywords",
    },
    description:
      "We work across all four pillars in parallel the only approach that actually moves rankings in 2026.",
    items: [
      {
        num: "01",
        title: "Technical SEO",
        body: "Site speed, crawlability, indexing, Core Web Vitals, schema markup, mobile UX.",
        footer: "Fixes > 80% of ranking issues alone",
        icon: "tools" as const,
      },
      {
        num: "02",
        title: "On-page SEO",
        body: "Titles, meta, headings, internal linking, content structure, search intent matching.",
        footer: "The fastest ranking lever you can pull",
        icon: "file-text" as const,
      },
      {
        num: "03",
        title: "Content & topical authority",
        body: "Pillar pages, cluster content, lead-magnet articles. Long-form writing that earns rankings.",
        footer: "The compounding asset over time",
        icon: "pencil" as const,
      },
      {
        num: "04",
        title: "Off-page & authority",
        body: "High-quality backlinks via outreach, guest posts, digital PR, and unlinked-mention cleanup.",
        footer: "100% white-hat no PBNs or spam",
        icon: "link" as const,
      },
    ] as const,
  },

  specializations: {
    heading: {
      before: "",
      emphasis: "SEO",
      after: " isn't one-size-fits-all",
    },
    description: "Different businesses need different SEO strategies. Pick what fits, or combine them.",
    items: [
      {
        title: "National SEO",
        body: "Rank nationally for high-volume terms across the US, UK, EU, etc.",
        icon: "world" as const,
      },
      {
        title: "Local SEO",
        body: 'Google Business Profile, local citations, "near me" rankings.',
        icon: "map-pin" as const,
      },
      {
        title: "Ecommerce SEO",
        body: "Product schema, category pages, faceted search, Shopify SEO.",
        icon: "shopping-bag" as const,
      },
      {
        title: "SaaS SEO",
        body: "Programmatic pages, comparison pages, bottom-funnel content.",
        icon: "cloud" as const,
      },
      {
        title: "Migration SEO",
        body: "Site moves, replatforming, redirect maps without losing rankings.",
        icon: "arrows-shuffle" as const,
      },
      {
        title: "Recovery SEO",
        body: "Penalty recovery, algorithm hit diagnosis, lost-traffic audits.",
        icon: "bandage" as const,
      },
    ] as const,
  },

  deliverables: {
    heading: {
      before: "Every ",
      emphasis: "SEO",
      after: " engagement includes",
    },
    description: "A full operation audit, strategy, execution, content, and reporting.",
    items: [
      { title: "Full SEO audit", body: "Technical, on-page, content, backlink review", icon: "clipboard-search" as const },
      { title: "Keyword research", body: "Topical map by intent, difficulty, value", icon: "key" as const },
      { title: "Content strategy", body: "Pillar & cluster plan, 90-day roadmap", icon: "stack-2" as const },
      { title: "SEO content writing", body: "Long-form articles, briefs & editorial", icon: "pencil" as const },
      { title: "Technical fixes", body: "Schema, speed, redirects, indexing", icon: "tools" as const },
      { title: "Link building", body: "Outreach, digital PR, guest posts", icon: "link" as const },
      { title: "Monthly reporting", body: "Rankings, traffic, conversions tracked", icon: "chart-line" as const },
      { title: "Competitor monitoring", body: "Track who's outranking you and why", icon: "radar" as const },
      { title: "Weekly check-ins", body: "Slack access + bi-weekly strategy calls", icon: "message-circle-2" as const },
    ] as const,
  },

  whatWeAudit: {
    heading: {
      before: "A ",
      emphasis: "60-point baseline",
      after: " before we touch anything.",
    },
    description: "SEO without an audit is guessing. Every engagement starts with a complete diagnostic.",
    items: [
      "Core Web Vitals + page speed audit",
      "Crawl & index analysis (Screaming Frog + GSC)",
      "On-page review of top 50 pages",
      "Backlink profile health & toxicity",
      "Content gap vs top 3 competitors",
      "Schema & structured data review",
      "Internal link & site architecture",
      "Mobile UX & usability scoring",
    ] as const,
  },

  toolkit: {
    heading: {
      before: "Tools we ",
      emphasis: "work with",
      after: "",
    },
    tools: [
      "Ahrefs",
      "Semrush",
      "Google Search Console",
      "Google Analytics 4",
      "Screaming Frog",
      "Surfer SEO",
      "Clearscope",
      "PageSpeed Insights",
      "Looker Studio",
      "Google Trends",
    ] as const,
  },

  howItWorks: {
    heading: {
      before: "From ",
      emphasis: "audit",
      after: " to compounding traffic",
    },
    description: "SEO is ongoing. We work in monthly cycles but the first 90 days set the foundation.",
    steps: [
      { phaseLabel: "Weeks 1–2", num: "01", title: "Audit", body: "Technical, content, links, competitors" },
      { phaseLabel: "Weeks 3–4", num: "02", title: "Strategy", body: "Keyword map, content plan, fixes" },
      { phaseLabel: "Month 2", num: "03", title: "Foundation", body: "Technical fixes, on-page rewrites" },
      { phaseLabel: "Month 3+", num: "04", title: "Content & links", body: "Publish, outreach, optimize" },
      { phaseLabel: "Ongoing", num: "05", title: "Iterate", body: "Monitor, refine, scale winners" },
    ] as const,
  },

  engagementModels: {
    heading: {
      before: "Find the ",
      emphasis: "engagement",
      after: " that fits",
    },
    description: "SEO is monthly retainer work. Pick the level that matches your competition and ambition.",
    ctaLabel: "Request a quote →",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "Foundation",
        duration: "Monthly · 6-month minimum",
        features: [
          "Technical SEO + on-page",
          "2 articles / month",
          "Basic link building",
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
          "All four SEO pillars",
          "4–6 articles / month",
          "Active outreach + link building",
          "Schema & CRO tweaks",
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
          "Enterprise-level SEO",
          "10+ articles / month",
          "Programmatic SEO if needed",
          "Digital PR & HARO outreach",
          "Dedicated SEO lead",
          "Custom dashboards",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    heading: {
      before: "Every ",
      emphasis: "business is different",
      after: " so is every quote",
    },
    intro:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including audit summary, target keywords, content roadmap, and pricing. Tooling costs (Ahrefs, Semrush, etc.) are included in our retainer no surprise bills.",
    steps: [
      {
        num: "01",
        title: "Discovery call",
        body: "Free 30-min on goals, niche, competitors.",
      },
      {
        num: "02",
        title: "Custom proposal",
        body: "Strategy & fixed monthly fee within 3 days.",
      },
      {
        num: "03",
        title: "Kickoff",
        body: "Audit delivered in first 2 weeks.",
      },
    ] as const,
  },

  faq: {
    heading: {
      before: "Things ",
      emphasis: "SEO clients",
      after: " ask before starting",
    },
    items: [
      {
        q: "How long until I rank on page 1?",
        a: "It depends on competition, domain authority, and keyword difficulty. Low-competition terms can move in 3–4 months; competitive head terms often take 6–12+ months. We set realistic milestones at kickoff and report rankings, traffic, and conversions monthly not vanity metrics.",
      },
      {
        q: "Do you guarantee #1 rankings or specific keywords?",
        a: "No ethical agency can guarantee #1 or fixed positions Google's algorithm isn't controllable. We guarantee a rigorous process: full audit, white-hat tactics, transparent reporting, and KPIs we agree on together (traffic, leads, revenue).",
      },
      {
        q: "Is SEO still worth it in the age of AI search and ChatGPT?",
        a: "Yes search demand is shifting, not disappearing. Organic still drives high-intent traffic with better unit economics than paid over time. We optimize for traditional SERPs and emerging surfaces (AI Overviews, featured snippets) so you're visible wherever buyers look.",
      },
      {
        q: "Do you use AI to write SEO content?",
        a: "We use AI as a research and outline assistant, not a publish button. Every piece is human-edited for accuracy, voice, and E-E-A-T. Google rewards helpful, original content thin AI output hurts more than it helps.",
      },
      {
        q: "Will you build backlinks the right way?",
        a: "100% white-hat. No PBNs, link farms, or paid spam directories. We earn links through outreach, digital PR, guest posts, and reclaiming unlinked mentions approaches that hold up through algorithm updates.",
      },
      {
        q: "SEO or SEM which should I invest in first?",
        a: "If you need leads now, start with SEM while SEO ramps we offer both. If you have runway, SEO builds a compounding asset with lower marginal cost per visit. Most mature brands run both: SEM for demand capture, SEO for margin and authority.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "Search engine marketing",
        description: "SEM for instant traffic while SEO compounds. Best results come from both.",
        href: "/search-engine-marketing",
        cta: "SEM services →",
        icon: "target-arrow" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Content marketing",
        description: "SEO and content are inseparable we offer both as a unified retainer.",
        href: "/digital-marketing#channels",
        cta: "Content marketing →",
        icon: "pencil" as const,
        iconColor: "var(--blue)",
      },
      {
        title: "Web development",
        description: "A fast, SEO-ready site is non-negotiable. We build both.",
        href: "/web-development",
        cta: "Web development →",
        icon: "code" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Ready to ",
    titleEmphasis: "own organic",
    titleAfter: " search?",
    description:
      "Book a free 30-minute call. We'll audit your current SEO and send a custom roadmap within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
