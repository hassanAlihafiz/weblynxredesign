/**
 * Copy and structured content for the Social Media Marketing page (`/social-media-marketing`).
 */

export type SmmHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type SmmPlatformIconId =
  | "instagram"
  | "tiktok"
  | "linkedin"
  | "x"
  | "youtube"
  | "facebook";

export type SmmDeliverableIconId =
  | "route"
  | "calendar"
  | "pencil"
  | "photo"
  | "video"
  | "send"
  | "message-circle-2"
  | "trending-up"
  | "chart-line";

export type SmmContentTypeIconId =
  | "movie"
  | "photo-edit"
  | "quote"
  | "microphone"
  | "bolt"
  | "users";

export type SmmRelatedIconId = "target-arrow" | "search" | "palette";

export const SOCIAL_MEDIA_MARKETING_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "Social Media Marketing" },
    ] as const,
    heading: {
      before: "Social that builds a brand, ",
      emphasis: "not just followers",
      after: ".",
    } satisfies SmmHeading,
    description:
      "Strategy, content, community, and reporting across Instagram, TikTok, LinkedIn, and X engineered to drive real business outcomes, not vanity metrics.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See platforms", href: "#platforms" },
    stats: [
      { value: "+320%", label: "Avg engagement lift" },
      { value: "5×", label: "Content output" },
      { value: "90", label: "Day roadmap" },
    ] as const,
  },

  whoFor: {
    heading: {
      before: "You probably need ",
      emphasis: "social if",
      after: "...",
    },
    bullets: [
      "Your brand has no consistent social presence or one that's gone stale",
      "You're posting but getting no real engagement or sales",
      "You want to build a real audience around your founder or brand",
      "You need one team handling strategy, content, and community not three vendors",
    ] as const,
    callout: {
      title: "Social media is a long game",
      bodyBeforeLinks:
        "Most clients see noticeable engagement growth in 30–60 days, audience-level results in 3–6 months. If you need fast leads, pair it with ",
      paidAds: { label: "paid ads", href: "/digital-marketing#channels" },
      seo: { label: "SEO", href: "/digital-marketing#channels" },
    },
  },

  platforms: {
    sectionId: "platforms",
    heading: {
      before: "Six platforms ",
      emphasis: "we focus where",
      after: " your audience lives",
    },
    description:
      'No "post everywhere" spray. We pick 2–3 platforms that match your business model and audience.',
    items: [
      {
        name: "Instagram",
        body: "Reels, carousels, stories, and shoppable posts. Strongest for DTC, fashion, beauty, lifestyle.",
        bestFor: "Best for · DTC · Lifestyle · Visual brands",
        icon: "instagram" as const,
        iconColor: "#E1306C",
      },
      {
        name: "TikTok",
        body: "Short-form video at scale. The fastest discovery engine on the internet right now.",
        bestFor: "Best for · Discovery · Gen Z · Mass reach",
        icon: "tiktok" as const,
        iconColor: "#FAFAFA",
      },
      {
        name: "LinkedIn",
        body: "Founder-led content, B2B thought leadership, and company-page presence that drives real deals.",
        bestFor: "Best for · B2B · SaaS · Agency · Services",
        icon: "linkedin" as const,
        iconColor: "#0A66C2",
      },
      {
        name: "X (Twitter)",
        body: "Short, sharp opinion content. Best for tech, startups, AI, and thought leaders building authority fast.",
        bestFor: "Best for · Tech · Startups · Founders",
        icon: "x" as const,
        iconColor: "#FAFAFA",
      },
      {
        name: "YouTube & Shorts",
        body: "Long-form and short-form video. The most evergreen platform content keeps earning for years.",
        bestFor: "Best for · Education · SaaS · Coaches",
        icon: "youtube" as const,
        iconColor: "#FF0000",
      },
      {
        name: "Facebook",
        body: "Groups, community, and reach for 35+ audiences. Strong for local services, fitness, real estate.",
        bestFor: "Best for · Local · Community · 35+ audiences",
        icon: "facebook" as const,
        iconColor: "#1877F2",
      },
    ] as const,
  },

  deliverables: {
    heading: {
      before: "Every ",
      emphasis: "social engagement",
      after: " includes",
    },
    description: 'A complete operation not just "we\'ll post stuff for you."',
    items: [
      { title: "Social strategy", body: "90-day roadmap, pillars, voice, KPIs", icon: "route" as const },
      { title: "Content calendar", body: "Monthly approval cycles in Notion", icon: "calendar" as const },
      { title: "Caption & copy", body: "Written in your brand voice, hook-led", icon: "pencil" as const },
      { title: "Graphic design", body: "Carousels, quote cards, branded visuals", icon: "photo" as const },
      { title: "Short-form video editing", body: "Reels, TikToks, Shorts cut for hooks", icon: "video" as const },
      { title: "Posting & scheduling", body: "Buffer or Later, optimal time slots", icon: "send" as const },
      { title: "Community management", body: "DMs, comments, mentions handled", icon: "message-circle-2" as const },
      { title: "Growth tactics", body: "Hashtag strategy, collabs, trends", icon: "trending-up" as const },
      { title: "Monthly reporting", body: "Real metrics that tie to business", icon: "chart-line" as const },
    ] as const,
  },

  contentTypes: {
    heading: {
      before: "A content mix",
      emphasis: "not just one ",
      after: "format",
    },
    description:
      "Algorithms reward variety. We mix formats based on what's working for your audience.",
    items: [
      { label: "Short-form video (Reels, TikToks, Shorts)", icon: "movie" as const },
      { label: "Carousel posts & educational slides", icon: "photo-edit" as const },
      { label: "Text posts & thought-leadership threads", icon: "quote" as const },
      { label: "Podcast / interview clips repurposed", icon: "microphone" as const },
      { label: "Stories, polls, & behind-the-scenes", icon: "bolt" as const },
      { label: "User-generated content (UGC) curation", icon: "users" as const },
    ] as const,
  },

  toolkit: {
    heading: {
      before: "Tools we work with ",
      emphasis: "tools",
      after: " we use",
    },
    tools: [
      "Figma",
      "CapCut",
      "Adobe Premiere",
      "Canva Pro",
      "Later / Buffer",
      "Metricool",
      "Notion",
      "Loom",
      "Meta Suite",
      "Shield (LinkedIn)",
    ] as const,
  },

  howItWorks: {
    heading: {
      before: "A ",
      emphasis: "monthly content",
      after: " rhythm",
    },
    description: "Social is ongoing we work in repeating monthly cycles, not one-off campaigns.",
    steps: [
      {
        phaseLabel: "Month 1",
        num: "01",
        title: "Audit & strategy",
        body: "Brand voice, competitor study, 90-day roadmap.",
      },
      {
        phaseLabel: "Each month",
        num: "02",
        title: "Plan & produce",
        body: "Calendar drafted, content created, approved in Notion.",
      },
      {
        phaseLabel: "Each week",
        num: "03",
        title: "Publish & engage",
        body: "Scheduled posts, real-time community management.",
      },
      {
        phaseLabel: "Each month",
        num: "04",
        title: "Report & iterate",
        body: "What's working, what's not, what to double down on.",
      },
    ] as const,
  },

  engagementModels: {
    heading: {
      before: "Find the engagement that ",
      emphasis: "fits",
      after: "",
    },
    description: "Social is monthly retainer work. Pick the level that matches your stage and ambition.",
    ctaLabel: "Request a quote →",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "Foundation",
        duration: "Monthly · 3-month minimum",
        features: [
          "1 platform focus",
          "8–10 posts / month",
          "Basic graphics & copy",
          "Scheduling included",
          "Monthly report",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "Growth",
        duration: "Monthly · 6-month minimum",
        badge: "Most common",
        features: [
          "2–3 platforms",
          "16–20 posts / month",
          "Short-form video included",
          "Community management",
          "Stories & engagement",
          "Bi-weekly calls",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "Scale",
        duration: "Monthly · 12-month partnership",
        features: [
          "Full-channel coverage",
          "Daily output (30+ pieces)",
          "Heavy short-form video",
          "Founder-led content",
          "UGC & influencer collabs",
          "Dedicated lead",
          "Weekly calls + Slack",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    heading: {
      before: "Every brand is different So is every quote ",
      emphasis: "every quote",
      after: "",
    },
    intro:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including platforms, content volume, KPIs, and pricing. Boosted post budgets and influencer fees (if any) are separate and paid by you directly.",
    steps: [
      {
        num: "01",
        title: "Discovery call",
        body: "Free 30-min on brand, audience, goals.",
      },
      {
        num: "02",
        title: "Custom proposal",
        body: "Scope, platforms, fixed retainer within 3 days.",
      },
      {
        num: "03",
        title: "Kickoff",
        body: "First content live within 2 weeks.",
      },
    ] as const,
  },

  faq: {
    heading: {
      before: "Things founders ",
      emphasis: "ask before",
      after: " starting",
    },
    items: [
      {
        q: "How fast will I see results?",
        a: "Most clients see noticeable engagement lift in 30–60 days. Audience-level growth and pipeline impact usually compound over 3–6 months as we refine formats and posting cadence.",
      },
      {
        q: "Do you guarantee follower growth?",
        a: "No vanity guarantees. We set KPIs tied to engagement, reach, and business outcomes leads, site traffic, or sales and report against those monthly.",
      },
      {
        q: "Do I need to be on camera?",
        a: "Not always. We can run founder-led, team-led, or faceless formats depending on your brand. Many clients mix talking-head Reels with carousels, B-roll, and UGC.",
      },
      {
        q: "Who owns the accounts & content?",
        a: "You do. We work in accounts you own with shared access. All creative files, calendars, and performance data stay in your tools and drive.",
      },
      {
        q: "Do you handle DMs and comments too?",
        a: "Yes on Growth and Scale tiers. We monitor mentions, reply to comments, and route DMs using your brand voice and escalation rules.",
      },
      {
        q: "Can we add paid ads later?",
        a: "Yes. Many clients start organic, then boost top posts or run dedicated Meta and TikTok campaigns once we know what content converts.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "Paid social ads",
        description: "Pour fuel on top-performing posts with Meta & TikTok ads.",
        href: "/digital-marketing#channels",
        cta: "Paid ads →",
        icon: "target-arrow" as const,
        iconColor: "var(--red)",
      },
      {
        title: "SEO & content",
        description: "Repurpose social content into blog posts that rank for years.",
        href: "/digital-marketing#channels",
        cta: "SEO services →",
        icon: "search" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Brand design",
        description: "A consistent visual system across every post and platform.",
        href: "/design",
        cta: "Design services →",
        icon: "palette" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Ready to actually ",
    titleEmphasis: "build",
    titleAfter: " an audience?",
    description:
      "Book a free 30-minute call. We'll audit your social presence and send a custom plan within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
