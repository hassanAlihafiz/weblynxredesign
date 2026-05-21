/**
 * Copy and structured content for the Android App Development page.
 * Icons are resolved in components via string ids.
 */

export type AndroidAppDevHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type AndroidAppPlatformIconId = "device-mobile" | "device-tablet" | "device-watch" | "device-tv";

export type AndroidAppDeliverableIconId =
  | "palette"
  | "bell"
  | "fingerprint"
  | "credit-card"
  | "shield-check"
  | "bug";

export type AndroidAppExploreIconId = "brand-apple" | "devices";

export const ANDROID_APP_DEV_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "App Development", href: "/app-development" },
      { label: "Android" },
    ] as const,
    description:
      "From Kotlin and Jetpack Compose to Material Design 3 we build Android apps that feel native, perform fast, and ship straight to the Play Store.",
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "See our apps", href: "#platforms" },
  },

  whoFor: {
    reasons: [
      "Your audience is primarily on Android (emerging markets, Asia, EU)",
      "You need deep hardware access Bluetooth, NFC, fingerprint, sensors",
      "You're building for Wear OS, Android TV, or Auto integrations",
      "Performance is mission-critical and cross-platform won't cut it",
    ] as const,
    callout: {
      title: "Not sure if you need native Android?",
      bodyBefore:
        "Most founders building for both iOS and Android save 40–50% with cross-platform and the user experience is nearly identical. ",
      link: { label: "See cross-platform development →", href: "/cross-platform-app-development" },
    },
  },

  platforms: {
    sectionId: "platforms",
    description: "Modern Android lets you target every device from one Kotlin codebase.",
    iconDefaults: {
      iconClass: "text-[var(--red)]",
    },
    items: [
      {
        title: "Phone",
        body: "Standard Play Store apps for Android phones.",
        icon: "device-mobile" as const,
      },
      {
        title: "Tablet",
        body: "Larger screen layouts and split-view support.",
        icon: "device-tablet" as const,
      },
      {
        title: "Wear OS",
        body: "Smartwatch companions and standalone apps.",
        icon: "device-watch" as const,
      },
      {
        title: "Android TV",
        body: "10-foot UI for streaming and media apps.",
        icon: "device-tv" as const,
      },
    ] as const,
  },

  deliverables: {
    description: "Production-ready Android apps, not just APK files.",
    items: [
      {
        title: "Material Design 3",
        body: "Modern Google design language with dynamic theming",
        icon: "palette" as const,
      },
      {
        title: "FCM push notifications",
        body: "Firebase Cloud Messaging setup & targeting",
        icon: "bell" as const,
      },
      {
        title: "Biometric auth",
        body: "Fingerprint & face unlock integration",
        icon: "fingerprint" as const,
      },
      {
        title: "Google Pay & billing",
        body: "In-app purchases & subscription support",
        icon: "credit-card" as const,
      },
      {
        title: "Play Store submission",
        body: "We handle review, screenshots, listing",
        icon: "shield-check" as const,
      },
      {
        title: "Crash & performance monitoring",
        body: "Firebase Crashlytics & Performance",
        icon: "bug" as const,
      },
    ] as const,
  },

  stack: {
    labels: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines & Flow",
      "Room DB",
      "Retrofit",
      "Hilt DI",
      "Firebase",
      "Android Studio",
      "Gradle",
      "Material 3",
    ] as const,
  },

  process: {
    description: "A clear rhythm with internal testing checkpoints built in.",
    steps: [
      { week: "Week 1", num: "01", title: "Discovery", detail: "Scope, features, target devices" },
      { week: "Week 2–3", num: "02", title: "Design", detail: "Material 3 mockups, prototype" },
      { week: "Week 4–7", num: "03", title: "Build", detail: "Develop, internal testing" },
      { week: "Week 8", num: "04", title: "Beta & QA", detail: "Closed testing, multi-device QA" },
      { week: "Week 9", num: "05", title: "Launch", detail: "Submit + Play Store live" },
    ] as const,
  },

  engagement: {
    sectionId: "engagement",
    description: "Every Android project is quoted based on scope. Three engagement models cover most cases.",
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
          "Single user role",
          "Basic backend (Firebase)",
          "Email auth",
          "Play Store submission",
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
          "Social & biometric login",
          "Push notifications",
          "Google Pay / Stripe",
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
          "Wear OS / TV companion",
          "Admin dashboard",
          "Crashlytics + Performance",
          "Ongoing retainer",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    intro:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days including scope, milestones, target devices, and a fixed all-in price. Google Play developer fee ($25 one-time) is separate.",
    steps: [
      { num: "01", title: "Scoping call", body: "Free 30-min on your idea, features, devices." },
      { num: "02", title: "Custom proposal", body: "Scope, timeline, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
    ] as const,
  },

  alsoExplore: {
    linkDefaults: {
      iconClass: "text-[var(--red)]",
      linkClass: "text-[var(--red)]",
    },
    items: [
      {
        title: "iOS App Development",
        description: "Native iOS builds in Swift & SwiftUI.",
        href: "/ios-app-development",
        linkLabel: "See iOS page →",
        icon: "brand-apple" as const,
      },
      {
        title: "Cross-Platform Development",
        description: "One codebase. Both iOS and Android. Half the cost.",
        href: "/cross-platform-app-development",
        linkLabel: "See Cross-Platform →",
        icon: "devices" as const,
      },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "Should I go native Android or use cross-platform?",
        a: "Choose native Android when you need deep hardware access, Wear OS or TV targets, or Android-first markets. Cross-platform (React Native) saves 40–50% when you need iOS and Android together. We'll recommend the right path on your scoping call.",
      },
      {
        q: "Do I need to test on every Android device?",
        a: "No. We test on a curated matrix of popular devices and OS versions that match your audience typically 8–12 devices covering Samsung, Pixel, and one budget OEM. Firebase Test Lab extends coverage for critical releases.",
      },
      {
        q: "Which Android version should we target as minimum?",
        a: "We usually target API 26 (Android 8.0) or API 28+ for most consumer apps covering 95%+ of active devices. Enterprise or niche apps may go higher; we'll align minimum SDK with your user data and feature needs.",
      },
      {
        q: "Who owns the Play Console account and signing keys?",
        a: "You do. We publish under your Google Play Console org and hand over signing keys, upload certificates, and full account access. We can guide you through account setup if you don't have one yet.",
      },
      {
        q: "What's the Play Store review process like?",
        a: "First review typically takes 3–7 days; updates are often faster. We prepare store listing, screenshots, privacy policy, and content rating. If Google flags an issue, we fix and resubmit as part of the launch window.",
      },
    ] as const,
  },

  finalCta: {
    sectionId: "quote",
    className: "bg-[linear-gradient(180deg,var(--bg),#1B0709)]",
    titleBefore: "Ready to ship on the ",
    titleEmphasis: "Play Store",
    titleAfter: "?",
    description: "Book a free 30-minute call. We'll scope your Android app and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
