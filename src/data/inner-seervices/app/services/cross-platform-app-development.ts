/**
 * Copy and structured content for the Cross-Platform App Development page.
 * Icons are resolved in components via string ids.
 */

export type CrossPlatformAppDevHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type CrossPlatformComparisonTone = "default" | "muted" | "warn";

export type CrossPlatformFrameworkIconId = "brand-react" | "brand-flutter";

export type CrossPlatformDeliverableIconId =
  | "devices"
  | "palette"
  | "bell"
  | "user"
  | "credit-card"
  | "cloud-off"
  | "refresh"
  | "bug"
  | "rocket";

export type CrossPlatformRelatedIconId = "brand-apple" | "brand-android";

export const CROSS_PLATFORM_APP_DEV_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/services" },
      { label: "App Development", href: "/app-development" },
      { label: "Cross-Platform" },
    ] as const,
    heading: {
      before: "One codebase Two stores ",
      emphasis: "Half the cost",
      after: "",
    } satisfies CrossPlatformAppDevHeading,
    description:
      "Ship to iOS and Android from a single React Native or Flutter build. Faster, cheaper, and nearly indistinguishable from native, the way 80% of modern apps are built.",
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "See the comparison", href: "#comparison" },
    stats: [
      { value: "~50%", label: "Less cost" },
      { value: "2×", label: "Faster to ship" },
      { value: "1", label: "Codebase" },
    ] as const,
  },

  whoFor: {
    heading: {
      before: "You probably want ",
      emphasis: "cross-platform",
      after: " if...",
    } satisfies CrossPlatformAppDevHeading,
    reasons: [
      "You need both iOS and Android and want to launch at the same time",
      "You're a startup or SaaS and need to ship an MVP fast",
      "You want one team maintaining one codebase not two teams, two codebases",
      "Your app is standard CRUD, content, or commerce not gaming or heavy AR",
    ] as const,
    callout: {
      title: "When cross-platform is NOT the right choice",
      bodyBefore:
        "Heavy graphics (3D games, AR), Apple Watch / Wear OS / Vision Pro builds, or apps that need deep hardware access. For those, go native: ",
      links: [
        { label: "iOS", href: "/ios-app-development" },
        { label: "Android", href: "/android-app-development" },
      ] as const,
    },
  },

  comparison: {
    sectionId: "comparison",
    heading: {
      before: "The honest ",
      emphasis: "comparison",
      after: "",
    } satisfies CrossPlatformAppDevHeading,
    description: "No spin here's exactly how the two approaches stack up.",
    columnLabels: {
      cross: "Cross-platform",
      native: "Native (iOS + Android)",
    },
    rows: [
      {
        label: "Build cost",
        cross: "~50% cheaper",
        native: "2× higher",
        crossTone: "default" as const,
        nativeTone: "muted" as const,
      },
      {
        label: "Time to launch",
        cross: "~50% faster",
        native: "Slower (two teams)",
        crossTone: "default" as const,
        nativeTone: "muted" as const,
      },
      {
        label: "Codebase",
        cross: "Single codebase",
        native: "Two separate codebases",
        crossTone: "default" as const,
        nativeTone: "muted" as const,
      },
      {
        label: "Performance",
        cross: "Near-native (~95%)",
        native: "Native (100%)",
        crossTone: "default" as const,
        nativeTone: "muted" as const,
      },
      {
        label: "UI feel",
        cross: "Indistinguishable for 80% of apps",
        native: "Pixel-perfect platform-native",
        crossTone: "default" as const,
        nativeTone: "muted" as const,
      },
      {
        label: "Heavy graphics / AR / gaming",
        cross: "Limited",
        native: "Best choice",
        crossTone: "warn" as const,
        nativeTone: "default" as const,
      },
      {
        label: "Watch / TV / Vision Pro",
        cross: "Limited",
        native: "Full support",
        crossTone: "warn" as const,
        nativeTone: "default" as const,
      },
      {
        label: "Maintenance",
        cross: "Update once, deploy twice",
        native: "Update both apps separately",
        crossTone: "default" as const,
        nativeTone: "muted" as const,
      },
    ] as const,
    footnote: {
      leadStrong: "Our take:",
      rest: " For 80% of business apps SaaS, ecommerce, content, social, productivity cross-platform is the smart default. Go native only when you specifically need what native gives you.",
    },
  },

  frameworks: {
    heading: {
      before: "React Native or Flutter, ",
      emphasis: "we pick the right one",
      after: "",
    } satisfies CrossPlatformAppDevHeading,
    description: "Both are excellent. The choice depends on your team, ecosystem, and product needs.",
    iconDefaults: {
      iconBg: "bg-transparent",
      iconClass: "text-[var(--red)]",
    },
    items: [
      {
        name: "React Native",
        icon: "brand-react" as const,
        description:
          "Built by Meta. Massive ecosystem. Best when you have a web/React team or want JS/TS across web and mobile.",
        bestFor: "SaaS apps · Content apps · Ecommerce · MVPs · Teams already using React",
      },
      {
        name: "Flutter",
        icon: "brand-flutter" as const,
        description:
          "Built by Google. Single rendering engine, perfectly identical UI across devices. Best when pixel-perfect UI control matters most.",
        bestFor: "Design-heavy apps · Animation-rich apps · Apps requiring identical UI · Custom UI/branding",
      },
    ] as const,
  },

  deliverables: {
    heading: {
      before: "Every ",
      emphasis: "cross-platform",
      after: " build includes",
    } satisfies CrossPlatformAppDevHeading,
    description: "Production-ready apps on both stores not just an APK and an IPA.",
    items: [
      { title: "iOS + Android builds", body: "Both stores from a single codebase", icon: "devices" as const },
      {
        title: "Platform-adaptive UI",
        body: "Looks native on each platform automatically",
        icon: "palette" as const,
      },
      { title: "Push notifications", body: "APNs + FCM unified setup", icon: "bell" as const },
      { title: "Auth & accounts", body: "Email, Google, Apple, biometric", icon: "user" as const },
      {
        title: "Payments & IAP",
        body: "Stripe, RevenueCat, Apple Pay, Google Pay",
        icon: "credit-card" as const,
      },
      { title: "Offline support", body: "Works without internet, syncs later", icon: "cloud-off" as const },
      {
        title: "OTA updates",
        body: "Push small updates without store review",
        icon: "refresh" as const,
      },
      { title: "Crash & analytics", body: "Sentry + Mixpanel/Amplitude setup", icon: "bug" as const },
      {
        title: "Both store submissions",
        body: "App Store + Play Store handled",
        icon: "rocket" as const,
      },
    ] as const,
  },

  stack: {
    heading: {
      before: "Tools we ",
      emphasis: "ship with",
      after: "",
    } satisfies CrossPlatformAppDevHeading,
    labels: [
      "React Native",
      "Flutter",
      "Expo",
      "TypeScript",
      "Dart",
      "Firebase",
      "Supabase",
      "RevenueCat",
      "EAS Build",
      "Sentry",
      "Reanimated",
      "Maestro QA",
    ] as const,
  },

  process: {
    heading: {
      before: "From kickoff to both stores in ",
      emphasis: "5 steps",
      after: "",
    } satisfies CrossPlatformAppDevHeading,
    description: "Slightly faster than native because one codebase, one team, one delivery.",
    steps: [
      { week: "Week 1", num: "01", title: "Discovery", detail: "Scope, features, framework choice" },
      { week: "Week 2", num: "02", title: "Design", detail: "UI/UX, both-platform mockups" },
      { week: "Week 3–6", num: "03", title: "Build", detail: "Develop, weekly beta on both stores" },
      { week: "Week 7", num: "04", title: "QA & Beta", detail: "Real device testing, both platforms" },
      { week: "Week 8", num: "05", title: "Launch", detail: "Submit to App Store + Play Store" },
    ] as const,
  },

  engagement: {
    sectionId: "engagement",
    heading: {
      before: "Find the ",
      emphasis: "engagement ",
      after: "that fits",
    } satisfies CrossPlatformAppDevHeading,
    description: "Every project includes both iOS and Android. Three engagement models cover most cases.",
    featuredTierBadge: "Most common",
    ctaLabel: "Request a quote →",
    ctaHref: "#quote",
    tiers: [
      {
        featured: false,
        label: "Engagement 01",
        title: "Lite MVP",
        timeline: "4-week delivery",
        items: [
          "Up to 5 screens",
          "iOS + Android",
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
          "iOS + Android + tablet",
          "Custom backend + DB",
          "Social + biometric login",
          "Push + payments",
          "OTA updates",
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
          "Complex logic + real-time",
          "Native modules where needed",
          "Admin dashboard",
          "Analytics + monitoring",
          "Ongoing retainer",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    sectionId: "quote",
    heading: {
      before: "Every project is different. ",
      emphasis: "So is every quote",
      after: "",
    } satisfies CrossPlatformAppDevHeading,
    intro:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days including scope, milestones, framework recommendation, and a fixed all-in price. Apple ($99/year) and Google ($25 one-time) developer fees are separate.",
    steps: [
      { num: "01", title: "Scoping call", body: "Free 30-min on idea, features, framework." },
      { num: "02", title: "Custom proposal", body: "Scope, timeline, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
    ] as const,
  },

  faq: {
    heading: {
      before: "Things cross-platform clients ",
      emphasis: "ask",
      after: "",
    } satisfies CrossPlatformAppDevHeading,
    items: [
      {
        q: "Will users notice it's not native?",
        a: "For most business apps SaaS, ecommerce, content, social no. Modern React Native and Flutter deliver near-native performance and platform-adaptive UI. Users notice when you need heavy 3D, AR, or deep OS integrations; we'll flag that on your scoping call.",
      },
      {
        q: "React Native vs Flutter which one will you pick?",
        a: "React Native when you have a web/React team or want JS/TS everywhere. Flutter when pixel-perfect, identical UI across devices matters most. We recommend one on your scoping call based on your team, timeline, and product not preference.",
      },
      {
        q: "How is performance compared to native?",
        a: "Typically ~95% of native for standard CRUD, lists, and navigation. Animations and complex gestures are very close on modern stacks. Gaming, heavy AR, and intensive real-time graphics are where native still wins.",
      },
      {
        q: "Can I add native features later if I need to?",
        a: "Yes. Both React Native and Flutter support native modules Swift/Kotlin bridges for camera, BLE, payments, or platform-specific SDKs. We architect with extension points so you're not locked in.",
      },
      {
        q: "What are OTA updates and why do they matter?",
        a: "Over-the-air updates (via Expo EAS or similar) let you push JavaScript/asset changes without waiting for App Store or Play Store review ideal for bug fixes and small UI tweaks. Store policy still requires native binary updates for major changes.",
      },
      {
        q: "Who owns both store accounts and the codebase?",
        a: "You do. We build in your Git repos and publish under your Apple Developer and Google Play accounts. You get full source, credentials handoff, and documentation at launch.",
      },
    ] as const,
  },

  related: {
    linkDefaults: {
      iconClass: "text-[var(--red)]",
      ctaClass: "text-[var(--red)]",
    },
    items: [
      {
        title: "iOS App Development",
        description: "Native iOS in Swift & SwiftUI for Apple Watch, Vision Pro, ARKit.",
        href: "/ios-app-development",
        cta: "See iOS page",
        icon: "brand-apple" as const,
      },
      {
        title: "Android App Development",
        description: "Native Android in Kotlin & Jetpack Compose for Wear OS, TV, sensors.",
        href: "/android-app-development",
        cta: "See Android page",
        icon: "brand-android" as const,
      },
    ] as const,
  },

  finalCta: {
    className: "bg-[linear-gradient(180deg,var(--bg),#1B0709)]",
    titleBefore: "Ready to ship on ",
    titleEmphasis: "both stores",
    titleAfter: "?",
    description: "Book a free 30-minute call. We'll scope your cross-platform app and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
