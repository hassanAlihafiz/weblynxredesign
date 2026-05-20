/**
 * Copy and structured content for the iOS App Development page.
 * Icons are resolved in components via string ids.
 */

export type IosAppDevHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type IosAppPlatformIconId =
  | "device-mobile"
  | "device-tablet"
  | "device-watch"
  | "badge-vr"
  | "device-laptop";

export type IosAppDeliverableIconId =
  | "sparkles"
  | "bell"
  | "face-id"
  | "brand-apple"
  | "rocket"
  | "shield-check";

export type IosAppExploreIconId = "brand-android" | "devices";

export const IOS_APP_DEV_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/services" },
      { label: "App Development", href: "/app-development" },
      { label: "iOS" },
    ] as const,
    heading: {
      before: "Native ",
      emphasis: "iOS apps",
      after: " built for premium experiences",
    } satisfies IosAppDevHeading,
    description:
      "From Swift and SwiftUI to ARKit and Vision Pro we build iOS apps that feel native, run fast, and ship straight to the App Store.",
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "See our apps", href: "#platforms" },
  },

  whoFor: {
    heading: {
      before: "You probably need ",
      emphasis: "native iOS",
      after: " if...",
    } satisfies IosAppDevHeading,
    reasons: [
      "Your audience is high-income, US/UK-based, and primarily on iPhone",
      "You're building for Apple Watch, Vision Pro, or deep iPad workflows",
      "You need ARKit, CoreML, HealthKit, or other Apple-only frameworks",
      "Performance, polish, and premium feel are non-negotiable",
    ] as const,
    callout: {
      title: "Need both iOS and Android?",
      bodyBefore:
        "Most founders save 40–50% with cross-platform and on modern frameworks the iOS experience is nearly identical to native. ",
      link: { label: "See cross-platform development", href: "/cross-platform-app-development" },
    },
  },

  platforms: {
    sectionId: "platforms",
    heading: {
      before: "Apple platforms we ",
      emphasis: "ship to",
      after: "",
    } satisfies IosAppDevHeading,
    description: "Modern Apple frameworks let you target every device with shared code.",
    iconDefaults: {
      iconClass: "text-[var(--red)]",
    },
    items: [
      {
        title: "iPhone",
        body: "Standard App Store apps for every iPhone.",
        icon: "device-mobile" as const,
      },
      {
        title: "iPad",
        body: "Multi-window, Apple Pencil, Stage Manager.",
        icon: "device-tablet" as const,
      },
      {
        title: "Apple Watch",
        body: "watchOS apps & complications.",
        icon: "device-watch" as const,
      },
      {
        title: "Vision Pro",
        body: "Spatial computing apps for visionOS.",
        icon: "badge-vr" as const,
      },
      {
        title: "macOS",
        body: "Mac Catalyst & native macOS apps.",
        icon: "device-laptop" as const,
      },
    ] as const,
  },

  deliverables: {
    heading: {
      before: "Every iOS project includes ",
      emphasis: "everything",
      after: "",
    } satisfies IosAppDevHeading,
    description: "Production-ready iOS apps designed to pass Apple review on the first try.",
    items: [
      {
        title: "Human Interface Guidelines",
        body: "Native iOS feel gestures, animations, conventions",
        icon: "sparkles" as const,
      },
      {
        title: "APNs push notifications",
        body: "Apple Push Notification service setup",
        icon: "bell" as const,
      },
      {
        title: "Face ID & Touch ID",
        body: "Secure biometric authentication",
        icon: "face-id" as const,
      },
      {
        title: "In-App Purchases & Apple Pay",
        body: "StoreKit, subscriptions, one-time payments",
        icon: "brand-apple" as const,
      },
      {
        title: "App Store submission",
        body: "We handle review, screenshots, listing copy",
        icon: "rocket" as const,
      },
      {
        title: "Privacy & ATT compliance",
        body: "Privacy manifest, App Tracking Transparency",
        icon: "shield-check" as const,
      },
    ] as const,
  },

  stack: {
    heading: {
      before: "Modern iOS tools we ",
      emphasis: "ship with",
      after: "",
    } satisfies IosAppDevHeading,
    labels: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Combine",
      "Async/Await",
      "Core Data",
      "SwiftData",
      "CloudKit",
      "ARKit",
      "CoreML",
      "Xcode",
      "TestFlight",
    ] as const,
  },

  process: {
    heading: {
      before: "From kickoff to App Store in ",
      emphasis: "5 steps",
      after: "",
    } satisfies IosAppDevHeading,
    description: "A clear rhythm with TestFlight beta checkpoints built in.",
    steps: [
      { week: "Week 1", num: "01", title: "Discovery", detail: "Scope, features, target devices" },
      { week: "Week 2–3", num: "02", title: "Design", detail: "HIG-compliant mockups, prototype" },
      { week: "Week 4–7", num: "03", title: "Build", detail: "Develop, weekly TestFlight" },
      { week: "Week 8", num: "04", title: "Beta & QA", detail: "External TestFlight, device QA" },
      { week: "Week 9", num: "05", title: "Launch", detail: "Submit + App Store live" },
    ] as const,
  },

  engagement: {
    sectionId: "engagement",
    /** Plain title (no red split) — matches original layout */
    title: "Find the engagement that fits",
    description: "Every iOS project is quoted based on scope. Three engagement models cover most cases.",
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
          "iPhone only",
          "Basic backend",
          "Sign in with Apple",
          "App Store submission",
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
          "iPhone + iPad",
          "Custom backend + DB",
          "Face ID + Sign in with Apple",
          "Push notifications",
          "In-App Purchases",
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
          "Apple Watch companion",
          "ARKit / CoreML / Vision Pro",
          "Admin dashboard",
          "Crash analytics",
          "Ongoing retainer",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    heading: {
      before: "Every iOS project is different ",
      emphasis: "So is every quote",
      after: "",
    } satisfies IosAppDevHeading,
    intro:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days including scope, milestones, target devices, and a fixed all-in price. Apple Developer Program fee ($99/year) is separate.",
    steps: [
      { num: "01", title: "Scoping call", body: "Free 30-min on your idea, features, devices." },
      { num: "02", title: "Custom proposal", body: "Scope, timeline, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
    ] as const,
  },

  alsoExplore: {
    heading: {
      before: "Also explore ",
      emphasis: "other services",
      after: "",
    } satisfies IosAppDevHeading,
    linkDefaults: {
      iconClass: "text-[var(--red)]",
      linkClass: "text-[var(--red)]",
    },
    items: [
      {
        title: "Android App Development",
        description: "Native Android builds in Kotlin & Jetpack Compose.",
        href: "/android-app-development",
        linkLabel: "See Android page →",
        icon: "brand-android" as const,
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
    heading: {
      before: "Things iOS clients ask ",
      emphasis: "before starting",
      after: "",
    } satisfies IosAppDevHeading,
    items: [
      {
        q: "Should I go native iOS or use cross-platform?",
        a: "Choose native iOS when you need Apple-only frameworks, premium polish, or Vision Pro / Watch targets. Cross-platform (React Native) saves 40–50% when you need iOS and Android together and on modern stacks the iOS experience is very close to native. We'll recommend the right path on your scoping call.",
      },
      {
        q: "Who owns the Apple Developer account?",
        a: "You do. We publish under your Apple Developer Program account and hand over certificates, provisioning profiles, and App Store Connect access. We can walk you through enrollment if you don't have an account yet.",
      },
      {
        q: "What if Apple rejects my app during review?",
        a: "We iterate on Apple's feedback, update metadata or binaries as needed, and resubmit until approval included during the agreed launch window for standard scope.",
      },
      {
        q: "Which iOS version should we target as minimum?",
        a: "We typically target iOS 16 or 17+ for most consumer apps, covering the vast majority of active devices. We'll align minimum deployment with your analytics and feature requirements.",
      },
      {
        q: "SwiftUI or UIKit which should you use?",
        a: "SwiftUI for new apps and most greenfield MVPs faster iteration and Apple's direction. UIKit when you need deep legacy integrations, complex custom UI, or are extending an existing codebase. We pick per project, not dogma.",
      },
    ] as const,
  },

  finalCta: {
    sectionId: "quote",
    className: "bg-[linear-gradient(180deg,var(--bg),rgba(27,7,9,0.98))]",
    titleBefore: "Ready to ship on the ",
    titleEmphasis: "App Store",
    titleAfter: "?",
    description: "Book a free 30-minute call. We'll scope your iOS app and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
