/**
 * Copy and structured content for the Web Portal Development page.
 * Icons are resolved in components via string ids.
 */

export type WebPortalHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type WebPortalPortalTypeIconId =
  | "users"
  | "shield-lock"
  | "building"
  | "school"
  | "heart-handshake"
  | "tool";

export type WebPortalRoleIconId = "crown" | "user-cog" | "user" | "eye";

export type WebPortalDeliverableIconId =
  | "key"
  | "user-shield"
  | "layout-dashboard"
  | "database"
  | "clipboard-list"
  | "mail"
  | "file-export"
  | "plug-connected"
  | "shield-check";

export type WebPortalRelatedIconId = "cloud" | "shopping-bag" | "devices";

export const WEB_PORTAL_DEV_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/services" },
      { label: "Web Development", href: "/web-development" },
      { label: "Web Portal Development" },
    ] as const,
    heading: {
      before: "Custom portals that ",
      emphasis: "work how your business works",
      after: "",
    } satisfies WebPortalHeading,
    description:
      "Client portals, admin dashboards, internal tools, and B2B platforms, built on Next.js, secure by design, and made to scale with your team.",
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "See portal types", href: "#portal-types" },
    stats: [
      { value: "100k+", label: "Users supported" },
      { value: "SOC 2", label: "Ready architecture" },
      { value: "6–12", label: "Week build" },
    ] as const,
  },

  whoFor: {
    heading: {
      before: "You probably ",
      emphasis: "need this",
      after: " if...",
    } satisfies WebPortalHeading,
    reasons: [
      "Your clients need a secure place to log in, view data, and self-serve",
      "Your team runs operations in spreadsheets that can't scale anymore",
      "You need different user roles seeing different data and tools",
      "You're paying 5+ SaaS tools and want a unified custom platform",
    ] as const,
  },

  portalTypes: {
    sectionId: "portal-types",
    heading: {
      before: "Six portal types ",
      emphasis: "One technical foundation",
      after: "",
    } satisfies WebPortalHeading,
    description: "Different audiences, different workflows, same secure, scalable architecture.",
    iconDefaults: {
      iconClass: "text-[var(--red)]",
    },
    items: [
      {
        name: "Client portals",
        description: "Self-service hubs for clients, invoices, files, project status, support.",
        icon: "users" as const,
      },
      {
        name: "Admin dashboards",
        description: "Internal control centers for your team to manage users, content, and operations.",
        icon: "shield-lock" as const,
      },
      {
        name: "B2B portals",
        description: "Partner, vendor, and reseller platforms with custom workflows and pricing.",
        icon: "building" as const,
      },
      {
        name: "Learning portals",
        description: "Course platforms, training hubs, and member-only content libraries.",
        icon: "school" as const,
      },
      {
        name: "Membership platforms",
        description: "Subscription-based access to gated content, communities, or services.",
        icon: "heart-handshake" as const,
      },
      {
        name: "Internal tools",
        description: "Custom apps replacing spreadsheets, ops, inventory, HR, anything bespoke.",
        icon: "tool" as const,
      },
    ] as const,
  },

  deliverables: {
    heading: {
      before: "Every portal project ",
      emphasis: "includes",
      after: "",
    } satisfies WebPortalHeading,
    description: "Enterprise-grade foundations security, scale, and auditability built in.",
    items: [
      { title: "Secure authentication", body: "SSO, MFA, magic links, password policies", icon: "key" as const },
      { title: "Role-based access", body: "Granular permissions per user type", icon: "user-shield" as const },
      {
        title: "Custom dashboards",
        body: "Tailored views per role, real-time data",
        icon: "layout-dashboard" as const,
      },
      { title: "Database & API", body: "Postgres, REST or tRPC, fully typed", icon: "database" as const },
      { title: "Audit logs", body: "Every action tracked for compliance", icon: "clipboard-list" as const },
      { title: "Notifications", body: "Email, in-app, optional Slack/SMS", icon: "mail" as const },
      { title: "Reporting & exports", body: "CSV, PDF, scheduled reports", icon: "file-export" as const },
      {
        title: "Third-party integrations",
        body: "Stripe, Zapier, CRMs, Slack, more",
        icon: "plug-connected" as const,
      },
      {
        title: "SOC 2-ready architecture",
        body: "Built for enterprise compliance from day one",
        icon: "shield-check" as const,
      },
    ] as const,
  },

  userRoles: {
    heading: {
      before: "One portal ",
      emphasis: "many users",
      after: ", different views",
    } satisfies WebPortalHeading,
    description:
      "We design role-aware portals where every user sees exactly what they should, nothing more, nothing less.",
    iconCardDefaults: {
      iconClass: "text-[var(--red)]",
      iconBg: "bg-transparent",
    },
    roles: [
      {
        title: "Super admin",
        body: "Full system control, billing, settings",
        icon: "crown" as const,
      },
      {
        title: "Team manager",
        body: "Manage their team, content, reports",
        icon: "user-cog" as const,
      },
      {
        title: "Standard user",
        body: "Day-to-day workflows & tasks",
        icon: "user" as const,
      },
      {
        title: "Client / guest",
        body: "Self-service, limited read access",
        icon: "eye" as const,
      },
    ] as const,
  },

  stack: {
    heading: {
      before: "Modern tools we ",
      emphasis: "ship with",
      after: "",
    } satisfies WebPortalHeading,
    labels: [
      "Next.js",
      "TypeScript",
      "Postgres",
      "Supabase",
      "Clerk / Auth.js",
      "Prisma / Drizzle",
      "tRPC",
      "Stripe Billing",
      "Resend",
      "Vercel",
      "Sentry",
      "PostHog",
    ] as const,
  },

  process: {
    heading: {
      before: "From kickoff to launch in ",
      emphasis: "6 phases",
      after: "",
    } satisfies WebPortalHeading,
    description:
      "Portals are bigger than typical sites, extra time on planning, security, and testing pays off.",
    steps: [
      { week: "Week 1", num: "01", title: "Discovery", detail: "Roles, workflows, data" },
      { week: "Week 2", num: "02", title: "Architecture", detail: "DB schema, auth, security" },
      { week: "Week 3", num: "03", title: "Design", detail: "UI, flows per role" },
      { week: "Week 4–8", num: "04", title: "Build", detail: "Auth, dashboards, APIs" },
      { week: "Week 9", num: "05", title: "QA & security", detail: "Pen testing, load tests" },
      { week: "Week 10", num: "06", title: "Launch", detail: "Deploy, training, monitoring" },
    ] as const,
  },

  engagement: {
    heading: {
      before: "Find the ",
      emphasis: "engagement model",
      after: " that fits",
    } satisfies WebPortalHeading,
    description: "Portals scale from focused tools to multi-role platforms. Three engagement models cover most.",
    featuredTierBadge: "Most common",
    ctaLabel: "Request a quote →",
    ctaHref: "#quote",
    tiers: [
      {
        featured: false,
        label: "Engagement 01",
        title: "Focused tool",
        timeline: "4–6 week delivery",
        items: [
          "Single-purpose portal",
          "1–2 user roles",
          "Up to 10 screens",
          "Auth + dashboard",
          "Standard integrations",
          "30-day support",
        ],
      },
      {
        featured: true,
        label: "Engagement 02",
        title: "Full portal",
        timeline: "8–10 week delivery",
        items: [
          "Multi-role architecture",
          "3–5 user roles",
          "Custom dashboards per role",
          "Audit logs & reporting",
          "Stripe billing if needed",
          "60-day support",
        ],
      },
      {
        featured: false,
        label: "Engagement 03",
        title: "Enterprise platform",
        timeline: "3+ month engagement",
        items: [
          "Multi-tenant architecture",
          "SSO & SOC 2 readiness",
          "Advanced integrations",
          "Real-time data",
          "Dedicated team",
          "Ongoing retainer",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    sectionId: "quote",
    heading: {
      before: "Every portal is different ",
      emphasis: "so is every quote",
      after: "",
    } satisfies WebPortalHeading,
    intro:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days including roles, workflows, integrations, security requirements, timeline, and a fixed all-in price. Hosting and third-party service costs (Supabase, Vercel, Clerk, etc.) are billed separately and transparently.",
    steps: [
      { num: "01", title: "Scoping call", body: "Free 30-min on workflows and roles." },
      { num: "02", title: "Custom proposal", body: "Architecture, scope, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
    ] as const,
  },

  related: {
    heading: {
      before: "Also explore ",
      emphasis: "other services",
      after: "",
    } satisfies WebPortalHeading,
    linkDefaults: {
      iconClass: "text-[var(--red)]",
      ctaClass: "text-[var(--red)]",
    },
    items: [
      {
        title: "SaaS Development",
        description: "Building a multi-tenant SaaS product? See our SaaS specialization.",
        href: "/web-development",
        cta: "SaaS development →",
        icon: "cloud" as const,
      },
      {
        title: "Ecommerce",
        description: "B2B store with custom pricing & account-based ordering.",
        href: "/ecommerce-website-development",
        cta: "Ecommerce →",
        icon: "shopping-bag" as const,
      },
      {
        title: "Mobile companion app",
        description: "Add iOS & Android apps that share your portal's backend.",
        href: "/app-development",
        cta: "App development →",
        icon: "devices" as const,
      },
    ] as const,
  },

  faq: {
    heading: {
      before: "Things businesses ask before starting ",
      emphasis: "Common questions",
      after: "",
    } satisfies WebPortalHeading,
    items: [
      {
        q: "Should I build a portal or just use an off-the-shelf SaaS?",
        a: "Off-the-shelf works when your workflows match the product out of the box. Custom portals win when you need role-specific views, deep integrations, or workflows no SaaS supports without expensive workarounds. We help you decide on the scoping call sometimes a hybrid (custom front-end on existing APIs) is the right middle ground.",
      },
      {
        q: "How do you handle security, GDPR, and SOC 2?",
        a: "We build with least-privilege auth, encrypted data in transit and at rest, audit logs, and privacy-by-design defaults. GDPR-ready consent, data export, and deletion flows can be included. SOC 2-ready architecture (separate environments, access controls, logging) is standard on full portal and enterprise engagements formal certification is your process with your auditor, not ours alone.",
      },
      {
        q: "Can the portal integrate with our existing CRM and tools?",
        a: "Yes. We integrate with Salesforce, HubSpot, Stripe, Slack, Zapier, and custom APIs via webhooks or direct connections. Integrations are scoped in the proposal so you know what's included vs. phase two.",
      },
      {
        q: "Who owns the code, data, and infrastructure?",
        a: "You do. Code lives in your Git repos, data in your database (Supabase, Postgres, etc.), and hosting under your Vercel or cloud accounts. We hand off credentials, documentation, and runbooks at launch no lock-in.",
      },
      {
        q: "Can the portal scale to thousands of concurrent users?",
        a: "Yes. We use serverless/edge-friendly Next.js, connection pooling, caching, and load testing before launch. Architecture choices (read replicas, queues, CDN) are sized to your expected traffic in the proposal.",
      },
      {
        q: "Do you offer maintenance and feature work after launch?",
        a: "Yes. Every project includes post-launch support (30–60 days depending on tier). After that, most clients stay on a light retainer or milestone basis for new features, security updates, and monitoring.",
      },
    ] as const,
  },

  finalCta: {
    className: "bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(27,7,9,0.98))]",
    titleBefore: "Got a workflow that needs a ",
    titleEmphasis: "portal",
    titleAfter: "?",
    description:
      "Book a free 30-minute call. We'll map your roles, data, and integrations, and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
