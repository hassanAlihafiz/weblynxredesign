/**
 * Copy and structured content for the Cloud Application Development page (`/cloud-application-development`).
 */

export type CloudAppPatternIconId =
  | "bolt"
  | "layout-grid"
  | "bell-ringing"
  | "broadcast"
  | "world"
  | "database";

export type CloudAppArchitectureIconId = "bolt" | "box" | "arrows-cross" | "circuit";

export type CloudAppDeliverableIconId =
  | "blueprint"
  | "code"
  | "api"
  | "database"
  | "stack-2"
  | "git-branch"
  | "chart-dots-3"
  | "shield-check"
  | "book-2";

export type CloudAppProviderIconId = "aws" | "google" | "azure";

export type CloudAppRelatedIconId = "cloud-network" | "code" | "brain";

export const CLOUD_APPLICATION_DEVELOPMENT_PAGE = {
  hero: {
    eyebrow: "Cloud Application Development",
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "Cloud Application Development" },
    ] as const,
    description:
      "Serverless, microservices, and event-driven applications engineered for AWS, GCP, and Azure fast to ship, cheap to run, ready for any load.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See our work", href: "/case-studies" },
    stats: [
      { value: "0→∞", label: "Auto-scaling" },
      { value: "−60%", label: "Infra cost vs servers" },
      { value: "6–12", label: "Week build" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "You're building a SaaS or platform that needs to scale unpredictably",
      "Your app has spiky traffic busy mornings, viral moments, batch jobs",
      "You're tired of managing servers and want pay-per-use infrastructure",
      "You need multi-region, real-time, or event-driven architecture",
    ] as const,
    callout: {
      title: "Just need a marketing site or simple SaaS MVP?",
      bodyBefore: "Standard ",
      webDevelopment: { label: "web development", href: "/web-development" },
      bodyAfter:
        " on Vercel + Supabase is usually faster and cheaper. Cloud-native shines when scale, regions, or events are core to your product.",
    },
  },

  patterns: {
    description:
      "From single serverless APIs to multi-region platforms each pattern fits a different scale and product shape.",
    items: [
      {
        title: "Serverless APIs",
        body: "Lambda / Cloud Functions / Azure Functions pay only for what you use.",
        icon: "bolt" as const,
      },
      {
        title: "Microservices",
        body: "Independent services that scale, deploy, and fail separately. ECS, GKE, AKS.",
        icon: "layout-grid" as const,
      },
      {
        title: "Event-driven systems",
        body: "SQS, EventBridge, Pub/Sub async workflows that scale to millions.",
        icon: "bell-ringing" as const,
      },
      {
        title: "Real-time apps",
        body: "WebSockets, AppSync, presence, live data chat, dashboards, collab.",
        icon: "broadcast" as const,
      },
      {
        title: "Multi-region apps",
        body: "Global apps with edge compute, regional databases, low-latency everywhere.",
        icon: "world" as const,
      },
      {
        title: "Data & pipelines",
        body: "ETL, streaming, lakes, warehouses BigQuery, Snowflake, Redshift, Glue.",
        icon: "database" as const,
      },
    ] as const,
  },

  architecture: {
    description:
      "We're pattern-pragmatic choosing serverless vs containers vs hybrid based on your needs, not trend cycles.",
    items: [
      {
        num: "01",
        title: "Pure serverless",
        body: "Lambda + DynamoDB + S3 + API Gateway. Zero servers to manage, pay-per-request.",
        bestFor: ["MVPs", "Spiky workloads", "Low-ops teams"] as const,
        icon: "bolt" as const,
      },
      {
        num: "02",
        title: "Container-based",
        body: "ECS, GKE, AKS predictable performance, mature ecosystems, full control.",
        bestFor: ["Established products", "Complex logic", "Teams with DevOps"] as const,
        icon: "box" as const,
      },
      {
        num: "03",
        title: "Hybrid (containers + serverless)",
        body: "Containers for steady workloads, serverless for spiky events & jobs.",
        bestFor: ["Growing SaaS", "Mixed workloads", "Cost optimization"] as const,
        icon: "arrows-cross" as const,
      },
      {
        num: "04",
        title: "Edge-native",
        body: "Cloudflare Workers, Vercel Edge global low-latency from day one.",
        bestFor: ["Global apps", "Personalization", "API gateways"] as const,
        icon: "circuit" as const,
      },
    ] as const,
  },

  deliverables: {
    description:
      "Production code, infrastructure as code, observability everything to run a real cloud app.",
    items: [
      { title: "Architecture design", body: "Diagrams, pattern decisions, trade-offs", icon: "blueprint" as const },
      { title: "Backend code", body: "TypeScript, Python, Go modern, typed, tested", icon: "code" as const },
      { title: "API design", body: "REST or GraphQL versioned, documented", icon: "api" as const },
      { title: "Data layer", body: "Schema, indexes, migrations, backup strategy", icon: "database" as const },
      {
        title: "Infrastructure as Code",
        body: "Terraform / CDK / Pulumi reproducible setup",
        icon: "stack-2" as const,
      },
      {
        title: "CI/CD pipelines",
        body: "Auto deploy, blue-green, preview environments",
        icon: "git-branch" as const,
      },
      { title: "Observability", body: "Logs, metrics, traces, alerts wired up", icon: "chart-dots-3" as const },
      { title: "Security baseline", body: "IAM, secrets, encryption, scanning", icon: "shield-check" as const },
      { title: "Documentation", body: "Architecture, ops runbooks, onboarding", icon: "book-2" as const },
    ] as const,
  },

  providers: {
    description:
      "We design for portability your app shouldn't be locked into one provider unless you choose it.",
    items: [
      {
        name: "AWS",
        body: "Lambda, ECS, DynamoDB, S3, EventBridge the most mature serverless & container ecosystem.",
        icon: "aws" as const,
        accentColor: "#FF9900",
      },
      {
        name: "Google Cloud",
        body: "Cloud Run, Functions, Firestore, Pub/Sub best for modern, data-heavy, ML-driven apps.",
        icon: "google" as const,
        accentColor: "#4285F4",
      },
      {
        name: "Azure",
        body: "Functions, AKS, Cosmos DB, Service Bus strongest for enterprise & regulated industries.",
        icon: "azure" as const,
        accentColor: "#0078D4",
      },
    ] as const,
  },

  howItWorks: {
    description:
      "Cloud apps need rigor on architecture we design & validate before writing production code.",
    steps: [
      { phaseLabel: "Week 1", num: "01", title: "Discover", body: "Scope, scale, constraints, success metrics" },
      { phaseLabel: "Week 2", num: "02", title: "Architect", body: "Pattern, diagrams, ADRs, cost model" },
      { phaseLabel: "Week 3–8", num: "03", title: "Build", body: "Code, IaC, CI/CD, observability" },
      { phaseLabel: "Week 9", num: "04", title: "Validate", body: "Load tests, security scan, cost check" },
      { phaseLabel: "Week 10", num: "05", title: "Launch", body: "Go live, monitor, handoff to team" },
    ] as const,
  },

  engagementModels: {
    description:
      "Cloud apps range from focused APIs to multi-region platforms three engagement models cover most.",
    ctaLabel: "Request a quote →",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "Serverless API",
        duration: "4–6 week build",
        features: [
          "Single serverless backend",
          "REST or GraphQL API",
          "Database + auth",
          "CI/CD + monitoring",
          "IaC + documentation",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "Cloud SaaS Build",
        duration: "8–12 week build",
        badge: "Most common",
        features: [
          "Full cloud-native SaaS",
          "Microservices or hybrid",
          "Real-time + event-driven",
          "Multi-tenancy",
          "Observability + security",
          "60-day post-launch support",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "Cloud Platform",
        duration: "3+ month partnership",
        features: [
          "Multi-region platform",
          "Multi-cloud or hybrid",
          "Custom data pipelines",
          "SOC 2 / HIPAA ready",
          "Dedicated cloud team",
          "Ongoing optimization",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    introBefore:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including architecture, scope, timeline, and a fixed all-in price. ",
    introEmphasis: "Cloud provider costs (AWS, GCP, Azure) are paid directly by you",
    introAfter:
      " typical monthly spend for serverless apps starts around $50/mo and scales with usage.",
    steps: [
      { num: "01", title: "Discovery call", body: "Free 30-min on scope, scale, constraints." },
      { num: "02", title: "Custom proposal", body: "Architecture, scope, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "Serverless vs containers which should I use?",
        a: "It depends on workload shape. Serverless fits spiky, event-driven, or low-ops APIs you pay per request and scale automatically. Containers fit steady traffic, long-running processes, or teams that need full runtime control. We often recommend serverless for MVPs and hybrid patterns as products grow. Architecture decisions are documented in ADRs before build starts.",
      },
      {
        q: "How do you avoid vendor lock-in?",
        a: "We design for portability where it matters: standard runtimes (Node, Python, Go), open APIs, infrastructure as code, and abstractions over provider-specific services when trade-offs allow. When a managed service is the right call (e.g. DynamoDB, Pub/Sub), we document exit paths and cost implications so you choose lock-in consciously, not by accident.",
      },
      {
        q: "What about cold starts in serverless apps?",
        a: "Cold starts affect latency-sensitive paths we mitigate with provisioned concurrency, smaller bundles, runtimes tuned for your stack, and keeping hot paths on always-warm services or containers when needed. For most SaaS APIs and async jobs, cold starts are negligible; we load-test critical endpoints before launch so you know real-world numbers.",
      },
      {
        q: "Can you also build the frontend, or just backend?",
        a: "Both. Our web development team ships Next.js and React frontends that connect to the cloud backends we build same studio, one handoff. If you already have a frontend team, we deliver documented APIs, auth flows, and deployment guides so integration is straightforward.",
      },
      {
        q: "How much will the monthly cloud bill be?",
        a: "Provider costs are paid directly by you and scale with usage. A lean serverless MVP often starts around $50–200/mo; production SaaS with databases, queues, and multi-region can run higher. We model estimated monthly spend in the architecture phase and set budgets, alerts, and right-sizing so costs stay predictable as you grow.",
      },
      {
        q: "Do we own all the code and infrastructure?",
        a: "Yes. You own repositories, IaC, cloud accounts, and all artifacts we produce. We work in your org (or transfer everything at handoff), with no proprietary runtime lock-in. Ongoing support and optimization are optional you are never dependent on us to operate what we built.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "Cloud consulting",
        description: "Need strategy first? Architecture, migration & optimization advice.",
        href: "/cloud-consulting-services",
        cta: "Cloud consulting",
        icon: "cloud-network" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Web development",
        description: "Need a website or simpler MVP? Vercel + Supabase may be faster.",
        href: "/web-development",
        cta: "Web development",
        icon: "code" as const,
        iconColor: "var(--red)",
      },
      {
        title: "AI development",
        description: "AI features that run on solid cloud-native infrastructure.",
        href: "/artificial-intelligence",
        cta: "AI development",
        icon: "brain" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  toolkit: {
    heading: "Tools we build with",
    tools: [
      "TypeScript",
      "Node.js",
      "Python",
      "Go",
      "AWS CDK",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Postgres",
      "DynamoDB",
      "Redis",
      "Cloudflare Workers",
      "Datadog",
      "Sentry",
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Ready to build a ",
    titleEmphasis: "cloud app",
    titleAfter: " that scales itself?",
    description:
      "Book a free 30-minute architecture call. We'll review your stack, scaling needs, and send a tailored proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
