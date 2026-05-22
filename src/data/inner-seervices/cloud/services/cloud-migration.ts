/**
 * Copy and structured content for the Cloud Migration page (`/cloud-migration`).
 */

export type CloudMigrationWorkloadIconId =
  | "server-2"
  | "database"
  | "files"
  | "network"
  | "git-branch"
  | "shield-lock";

export type CloudMigrationStrategyIconId =
  | "arrow-bar-to-right"
  | "adjustments"
  | "refresh"
  | "layers-subtract";

export type CloudMigrationDeliverableIconId =
  | "clipboard-search"
  | "route"
  | "arrow-back-up"
  | "blueprint"
  | "stack-2"
  | "test-pipe"
  | "checklist"
  | "chart-dots-3"
  | "book-2";

export type CloudMigrationSafeguardIconId =
  | "copy"
  | "database-import"
  | "arrows-split"
  | "arrow-back-up";

export type CloudMigrationRelatedIconId = "cloud-network" | "cloud-cog" | "currency-dollar";

export const CLOUD_MIGRATION_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "Cloud Services", href: "/cloud-application-development" },
      { label: "Cloud Migration" },
    ] as const,
    description:
      "Migrate from on-prem, Heroku, or a legacy host to AWS, GCP, or Azure with a tested rollback plan, zero data loss, and minimal disruption.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See our approach", href: "#approach" },
    stats: [
      { value: "0", label: "Data loss target" },
      { value: "−40%", label: "Avg cost after move" },
      { value: "4–10", label: "Week migration" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "You're running on aging on-prem servers or a data center you want to leave",
      "Heroku or your current PaaS has gotten too expensive at your scale",
      "You're switching cloud providers AWS to GCP, Azure to AWS, etc.",
      "You need to migrate but can't afford downtime or data loss",
    ] as const,
    callout: {
      title: "Migration isn't always the right first move",
      bodyBefore:
        "Sometimes the smarter play is optimizing where you are. We'll start with an honest audit if a migration won't pay off, our ",
      consultingLink: { label: "cloud consulting", href: "/cloud-consulting-services" },
      bodyAfter: " team will tell you straight.",
    },
  },

  whatWeMigrate: {
    description:
      'A migration is never "just the app." We handle every layer that has to move with it.',
    items: [
      {
        title: "Applications",
        body: "Web apps, APIs, background workers repackaged for the new environment.",
        icon: "server-2" as const,
      },
      {
        title: "Databases",
        body: "Postgres, MySQL, Mongo migrated with replication & zero data loss.",
        icon: "database" as const,
      },
      {
        title: "Files & storage",
        body: "User uploads, media, backups transferred to S3, GCS, or Blob storage.",
        icon: "files" as const,
      },
      {
        title: "Networking & DNS",
        body: "VPCs, load balancers, domains, SSL re-created and cut over carefully.",
        icon: "network" as const,
      },
      {
        title: "CI/CD & pipelines",
        body: "Deployment pipelines rebuilt so your team ships the day after cutover.",
        icon: "git-branch" as const,
      },
      {
        title: "Secrets & config",
        body: "Environment variables, API keys, certs moved into a proper secret manager.",
        icon: "shield-lock" as const,
      },
    ] as const,
  },

  migrationStrategies: {
    description:
      "Not everything should move the same way. We pick the strategy that balances speed, cost, and risk for each piece.",
    items: [
      {
        num: "01",
        title: 'Rehost ("lift & shift")',
        body: "Move as-is to the cloud. Fastest path, minimal changes optimize later.",
        bestFor: "Best for · Speed · Tight deadlines · Legacy apps",
        icon: "arrow-bar-to-right" as const,
      },
      {
        num: "02",
        title: 'Replatform ("lift & reshape")',
        body: "Move with targeted upgrades managed databases, containers, autoscaling.",
        bestFor: "Best for · Balance of speed & gains · Most clients",
        icon: "adjustments" as const,
      },
      {
        num: "03",
        title: 'Refactor ("re-architect")',
        body: "Rebuild cloud-native serverless, microservices for max scale & savings.",
        bestFor: "Best for · Long-term value · Scaling products",
        icon: "refresh" as const,
      },
      {
        num: "04",
        title: "Hybrid & phased",
        body: "Move in stages some workloads now, some later to de-risk big migrations.",
        bestFor: "Best for · Large systems · Risk-averse teams",
        icon: "layers-subtract" as const,
      },
    ] as const,
  },

  deliverables: {
    description: "A documented, tested, reversible migration not a risky weekend cutover.",
    items: [
      {
        title: "Migration assessment",
        body: "Full inventory of what moves, in what order",
        icon: "clipboard-search" as const,
      },
      {
        title: "Migration runbook",
        body: "Step-by-step plan with timing & owners",
        icon: "route" as const,
      },
      {
        title: "Rollback plan",
        body: "Tested fallback if anything goes wrong",
        icon: "arrow-back-up" as const,
      },
      {
        title: "Target architecture",
        body: "Diagrams of the new cloud environment",
        icon: "blueprint" as const,
      },
      {
        title: "Infrastructure as Code",
        body: "New environment fully in Terraform",
        icon: "stack-2" as const,
      },
      {
        title: "Staging dry-run",
        body: "Full rehearsal before the real cutover",
        icon: "test-pipe" as const,
      },
      {
        title: "Data validation",
        body: "Row-counts & integrity checks post-move",
        icon: "checklist" as const,
      },
      {
        title: "Monitoring setup",
        body: "Alerts & dashboards live before cutover",
        icon: "chart-dots-3" as const,
      },
      {
        title: "Handoff & training",
        body: "Your team can operate the new setup",
        icon: "book-2" as const,
      },
    ] as const,
  },

  zeroDowntimeApproach: {
    id: "approach",
    description:
      "Migrations fail when teams rush the cutover. Our four safeguards make it boring which is exactly what you want.",
    items: [
      {
        num: "01",
        title: "Parallel running",
        body: "Old and new environments run side-by-side until the new one is proven.",
        icon: "copy" as const,
      },
      {
        num: "02",
        title: "Live data replication",
        body: "Your database syncs in real time, so the new environment is always current.",
        icon: "database-import" as const,
      },
      {
        num: "03",
        title: "Gradual traffic shift",
        body: "We route 1% → 10% → 50% → 100% of traffic, watching metrics at each step.",
        icon: "arrows-split" as const,
      },
      {
        num: "04",
        title: "Instant rollback",
        body: "If anything looks wrong, we shift traffic back in seconds no harm done.",
        icon: "arrow-back-up" as const,
      },
    ] as const,
  },

  toolkit: {
    tools: [
      "AWS DMS",
      "AWS MGN",
      "GCP Migrate",
      "Azure Migrate",
      "Terraform",
      "Docker",
      "Kubernetes",
      "pgloader",
      "Cloudflare",
      "Datadog",
      "Velero",
    ] as const,
  },

  howItWorks: {
    description:
      "We rehearse the whole migration in staging before touching production so cutover day is uneventful.",
    steps: [
      { phaseLabel: "Week 1", num: "01", title: "Assess", body: "Inventory, dependencies, strategy" },
      { phaseLabel: "Week 2", num: "02", title: "Plan", body: "Runbook, rollback, target architecture" },
      {
        phaseLabel: "Week 3–5",
        num: "03",
        title: "Build & rehearse",
        body: "New env, staging dry-run",
      },
      { phaseLabel: "Week 6", num: "04", title: "Cutover", body: "Gradual traffic shift, monitor" },
      { phaseLabel: "Week 7", num: "05", title: "Stabilize", body: "Optimize, decommission old, handoff" },
    ] as const,
  },

  engagementModels: {
    description:
      "Migrations range from a single app to a full data center three engagement models cover most.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "Migration Assessment",
        duration: "2-week diagnostic",
        features: [
          "Full infrastructure inventory",
          "Recommended strategy",
          "Target architecture",
          "Cost & timeline estimate",
          "Risk & rollback plan",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "Full Migration",
        duration: "4–10 week project",
        badge: "Most common",
        features: [
          "End-to-end migration",
          "App + database + storage",
          "Staging dry-run rehearsal",
          "Zero-downtime cutover",
          "Monitoring + IaC",
          "60-day post-migration support",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "Enterprise Migration",
        duration: "3+ month phased program",
        features: [
          "Multi-system phased move",
          "Data center exit",
          "Refactor where it pays off",
          "Compliance preserved",
          "Dedicated migration team",
          "Ongoing optimization",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    introBefore:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including assessment summary, recommended strategy, timeline, and a fixed all-in price. ",
    introEmphasis: "Cloud provider costs are paid directly by you",
    introAfter:
      ", and during parallel-running you'll briefly pay for both environments we keep that overlap as short as safely possible.",
    steps: [
      { num: "01", title: "Discovery call", body: "Free 30-min on current setup & goals." },
      { num: "02", title: "Custom proposal", body: "Strategy, timeline, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Assessment starts within 1–2 weeks." },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "Will our app really have zero downtime?",
        a: "We design for zero user-facing downtime: parallel environments, live database replication, and gradual traffic shift (1% → 100%). Some cutover steps may need a brief maintenance window for DNS or certificates we call those out upfront and schedule them off-peak.",
      },
      {
        q: "What happens if something goes wrong mid-migration?",
        a: "Every project ships with a tested rollback plan. If metrics slip during cutover, we shift traffic back in seconds. Staging dry-runs and rehearsal cutovers catch most issues before production is touched.",
      },
      {
        q: "Can you migrate without our app's original developers?",
        a: "Yes. We inventory what's running, read your codebase and infrastructure config, and document as we go. Original authors speed things up when available, but they aren't required for a safe migration.",
      },
      {
        q: "How long will we pay for two environments at once?",
        a: "Typically one to three weeks while old and new run in parallel. We shorten that overlap as much as safety allows and estimate dual-environment cost in your proposal so there are no surprises.",
      },
      {
        q: "Should we lift-and-shift or refactor while we migrate?",
        a: "It depends on timeline and goals. Many teams rehost first to exit a bad host quickly, then refactor high-value workloads in a second phase. Your assessment recommends the right split we won't push a big-bang rewrite when lift-and-shift is the smarter play.",
      },
      {
        q: "Do you handle compliance-sensitive migrations (HIPAA, PCI)?",
        a: "Yes. We architect for encryption, access control, audit logging, and data residency, and work with your compliance team on BAAs, PCI scope, and evidence. Migrations preserve controls we don't treat compliance as an afterthought.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "Cloud consulting",
        description:
          "Architecture & cost strategy start here if you're not sure migration is right.",
        href: "/cloud-consulting-services",
        cta: "Cloud consulting",
        icon: "cloud-network" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Cloud app development",
        description: "Refactoring during migration? We rebuild cloud-native the right way.",
        href: "/cloud-application-development",
        cta: "Cloud app development",
        icon: "cloud-cog" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Cost optimization",
        description: "Just moved? Tighten the new environment and cut the bill further.",
        href: "/cloud-consulting-services",
        cta: "Cost optimization",
        icon: "currency-dollar" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  finalCta: {
    titleBefore: "Ready to move ",
    titleEmphasis: "safely?",
    titleAfter: "",
    description:
      "Book a free 30-minute discovery call. We'll assess your setup and send a migration plan within 3 days.",
    ctaLabel: "Book a call",
    ctaHref: "/contact",
  },
} as const;
