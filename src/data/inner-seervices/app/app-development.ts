/**
 * Copy and structured content for the App Development service page.
 * UI components import from here; icons are resolved in components via id maps.
 */

export type AppDevHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export const APP_DEVELOPMENT_PAGE = {
  hero: {
    breadcrumb: {
      parentLabel: "Services",
      parentHref: "/service",
      currentLabel: "App development",
    },
    description:
      "Cross-platform iOS and Android apps built with React Native one codebase, two stores, full native performance.",
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "See our apps", href: "#platforms" },
  },

  whoFor: {
    bullets: [
      "You have a startup idea that needs a mobile-first MVP",
      "Your web product needs a companion iOS & Android app",
      "You want one codebase serving both platforms",
      "You need someone who handles App Store + Play Store submission",
    ] as const,
  },

  platforms: {
    sectionId: "platforms",
    items: [
      {
        title: "iOS",
        body: "iPhone & iPad. App Store submission & review included.",
        icon: "apple" as const,
        iconClass: "text-[var(--red)]",
      },
      {
        title: "Android",
        body: "Phones & tablets. Play Store submission & review included.",
        icon: "android" as const,
        iconClass: "text-[var(--red)]",
      },
      {
        title: "Web companion",
        body: "Optional web version from the same codebase using Expo Web.",
        icon: "laptop" as const,
        iconClass: "text-[var(--red)]",
      },
    ] as const,
  },

  included: {
    description: "Everything you need to launch on both stores.",
    items: [
      {
        title: "Native-feel UX",
        body: "Smooth animations, gestures, platform conventions",
        icon: "device-mobile" as const,
      },
      {
        title: "Push notifications",
        body: "Engagement-ready from day one",
        icon: "bell" as const,
      },
      {
        title: "Auth & accounts",
        body: "Email, Google, Apple sign-in",
        icon: "user" as const,
      },
      {
        title: "Backend & database",
        body: "Firebase or Supabase setup",
        icon: "cloud" as const,
      },
      {
        title: "Offline support",
        body: "Works without internet, syncs later",
        icon: "cloud-off" as const,
      },
      {
        title: "Store submission",
        body: "We handle App Store + Play Store",
        icon: "rocket" as const,
      },
    ] as const,
  },

  tech: {
  },

  process: {
    steps: [
      { week: "WEEK 1", num: "01", title: "Discovery", detail: "Scope, features, user flow" },
      { week: "WEEKS 2–3", num: "02", title: "Design", detail: "UI/UX, prototype, sign-off" },
      { week: "WEEKS 4–7", num: "03", title: "Build", detail: "Develop, weekly TestFlight" },
      { week: "WEEK 8", num: "04", title: "QA & Beta", detail: "Real device testing" },
      { week: "WEEK 9", num: "05", title: "Launch", detail: "Submit + go live" },
    ] as const,
  },

  engagement: {
    sectionId: "engagement",
    description: "All packages include both iOS and Android. Custom quotes available for larger scopes.",
    featuredTierBadge: "Most common",
    ctaLabel: "Request a quote",
    ctaHref: "#quote",
    tiers: [
      {
        featured: false,
        label: "Engagement 01",
        title: "Lite MVP",
        timeline: "4-week delivery",
        items: [
          "Up to 5 screens",
          "Single user role",
          "Basic backend",
          "Email auth",
          "Both stores submitted",
          "30-day support",
        ],
      },
      {
        featured: true,
        label: "Engagement 02",
        title: "Full MVP",
        timeline: "8-week delivery",
        items: [
          "Up to 15 screens",
          "Multi-user roles",
          "Custom backend + DB",
          "Social login",
          "Push notifications",
          "Payments (Stripe)",
          "60-day support",
        ],
      },
      {
        featured: false,
        label: "Engagement 03",
        title: "Production app",
        timeline: "12+ week engagement",
        items: [
          "Unlimited screens",
          "Complex business logic",
          "Real-time features",
          "Admin dashboard",
          "Analytics + Sentry",
          "Ongoing retainer",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    intro:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days scope, milestones, timeline, and a fixed all-in price.",
    steps: [
      { num: "01", title: "Scoping call", body: "Free 30-min of your idea and goals." },
      { num: "02", title: "Custom proposal", body: "Scope, timeline, fixed price." },
      { num: "03", title: "Kickoff", body: "Sign off, start within 1–2 weeks." },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "React Native vs native which should I choose?",
        a: "React Native is ideal when you need both iOS and Android from one codebase, faster iteration, and lower cost. Fully native makes sense for heavy graphics, niche platform APIs, or when you already maintain separate teams. We recommend RN for most MVPs and scale-ups.",
      },
      {
        q: "Who owns the App Store / Play Store accounts?",
        a: "You own the accounts. We publish under your org and hand over full credentials, certificates, and signing keys. If you prefer, we can walk you through creating accounts first.",
      },
      {
        q: "What if Apple or Google rejects my app?",
        a: "We iterate on feedback, update metadata or binaries as needed, and resubmit until approval included during the agreed launch window for standard scope.",
      },
      {
        q: "Do you offer post-launch maintenance?",
        a: "Yes. Most teams pick a monthly retainer for bug fixes, OS updates, store compliance, and small features. We can quote retainers after launch.",
      },
      {
        q: "Can you redesign or rebuild my existing app?",
        a: "Yes. We audit the current codebase or design, propose a migration or rebuild plan, and ship in phases so you are not stuck without a release channel.",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleLine1: "Got an app idea?",
    titleLine2Before: "Let's ",
    titleLine2Emphasis: "scope",
    titleLine2After: " it.",
    description: "Book a free 30-minute call. We'll map your MVP and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
