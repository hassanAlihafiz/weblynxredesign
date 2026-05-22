/**
 * Copy and structured content for the Cloud Consulting Services page (`/cloud-consulting-services`).
 */

export type CloudConsultingCapabilityIconId =
  | "blueprint"
  | "arrows-shuffle"
  | "currency-dollar"
  | "shield-check"
  | "trending-up"
  | "tools";

export type CloudConsultingProviderIconId = "aws" | "google" | "azure";

export type CloudConsultingDeliverableIconId =
  | "clipboard-search"
  | "blueprint"
  | "route"
  | "code"
  | "git-branch"
  | "chart-dots-3"
  | "currency-dollar"
  | "shield-lock"
  | "book-2";

export type CloudConsultingComplianceIconId = "shield-check" | "stethoscope" | "credit-card" | "world-check";

export type CloudConsultingRelatedIconId = "code" | "brain" | "shield-lock";

export const CLOUD_CONSULTING_SERVICES_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "Cloud Services", href: "/cloud-application-development" },
      { label: "Cloud Consulting Services" },
    ] as const,
    description:
      "Architecture, migration, and optimization for AWS, Google Cloud, and Azure built around your business, not your provider's sales pitch.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See our approach", href: "#approach" },
    stats: [
      { value: "−45%", label: "Avg cloud bill cut" },
      { value: "99.99%", label: "Target uptime" },
      { value: "3", label: "Major clouds" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "Your cloud bill is climbing faster than your business",
      "Your MVP infrastructure is breaking under real-world load",
      "You're migrating from on-prem, Heroku, or a legacy host",
      "You need SOC 2, HIPAA, or PCI compliance and don't know where to start",
    ] as const,
    callout: {
      title: "Cloud isn't always the answer",
      body: "If you're a tiny side project, Vercel + Supabase is probably cheaper and easier than AWS. We'll honestly tell you if cloud consulting is overkill for your stage and recommend simpler alternatives.",
    },
  },

  capabilities: {
    description:
      "Each capability stands alone, or combines into a complete cloud transformation.",
    items: [
      {
        title: "Cloud architecture",
        body: "Design scalable, resilient systems from day one. Right-sized, future-proof.",
        icon: "blueprint" as const,
      },
      {
        title: "Migration strategy",
        body: "Move from on-prem, Heroku, or legacy hosts to AWS, GCP, or Azure zero downtime.",
        icon: "arrows-shuffle" as const,
      },
      {
        title: "Cost optimization",
        body: "Cut cloud spend 30–60% without sacrificing performance. Reserved, spot, right-sizing.",
        icon: "currency-dollar" as const,
      },
      {
        title: "Security & compliance",
        body: "SOC 2, HIPAA, PCI, GDPR architected from day one, audit-ready.",
        icon: "shield-check" as const,
      },
      {
        title: "Performance & scale",
        body: "Load testing, auto-scaling, CDN, caching infrastructure ready for 10× traffic.",
        icon: "trending-up" as const,
      },
      {
        title: "DevOps & CI/CD",
        body: "Pipelines, IaC, monitoring, on-call. Your team ships faster with fewer incidents.",
        icon: "tools" as const,
      },
    ] as const,
  },

  providers: {
    description:
      "We're not partnered with any one provider we recommend what's right for your stage, stack, and budget.",
    items: [
      {
        name: "AWS",
        body: "The most flexible and mature cloud. Best for complex products, enterprise scale, deep integrations.",
        bestFor: ["SaaS", "Enterprise", "AI workloads"] as const,
        icon: "aws" as const,
        accentColor: "#FF9900",
      },
      {
        name: "Google Cloud",
        body: "Best for data, AI/ML, and modern app workloads. Strong on Kubernetes, BigQuery, Firebase.",
        bestFor: ["Data-heavy", "ML/AI", "Startups"] as const,
        icon: "google" as const,
        accentColor: "#4285F4",
      },
      {
        name: "Azure",
        body: "Best for Microsoft-shop teams & regulated industries. Strong on hybrid, enterprise compliance.",
        bestFor: ["Enterprise", "Hybrid", "MS stack"] as const,
        icon: "azure" as const,
        accentColor: "#0078D4",
      },
    ] as const,
  },

  deliverables: {
    description:
      "Documentation, automation, and infrastructure your team can actually own and operate.",
    items: [
      {
        title: "Infrastructure audit",
        body: "Full review of current setup, gaps, & risks",
        icon: "clipboard-search" as const,
      },
      {
        title: "Architecture diagrams",
        body: "Current state + target state, fully documented",
        icon: "blueprint" as const,
      },
      {
        title: "Migration roadmap",
        body: "Step-by-step plan with rollback strategy",
        icon: "route" as const,
      },
      {
        title: "Infrastructure as Code",
        body: "Terraform / Pulumi fully version-controlled",
        icon: "code" as const,
      },
      {
        title: "CI/CD pipelines",
        body: "GitHub Actions, GitLab, or CircleCI setup",
        icon: "git-branch" as const,
      },
      {
        title: "Monitoring & alerts",
        body: "Datadog, Grafana, or CloudWatch dashboards",
        icon: "chart-dots-3" as const,
      },
      {
        title: "Cost optimization plan",
        body: "Reserved, spot, right-sizing itemized savings",
        icon: "currency-dollar" as const,
      },
      {
        title: "Security baseline",
        body: "IAM, secrets, encryption, network policies",
        icon: "shield-lock" as const,
      },
      {
        title: "Runbooks & docs",
        body: "Your team can operate it after we leave",
        icon: "book-2" as const,
      },
    ] as const,
  },

  compliance: {
    description:
      "We architect with compliance in mind from day one saving you months of remediation later.",
    items: [
      {
        title: "SOC 2",
        body: "Audit-ready infrastructure & controls",
        icon: "shield-check" as const,
      },
      {
        title: "HIPAA",
        body: "Healthcare data architecture & BAAs",
        icon: "stethoscope" as const,
      },
      {
        title: "PCI DSS",
        body: "Payment data segregation & controls",
        icon: "credit-card" as const,
      },
      {
        title: "GDPR",
        body: "EU data residency & right-to-erasure",
        icon: "world-check" as const,
      },
    ] as const,
  },

  howItWorks: {
    description:
      "Cloud work is high-stakes we test, document, and roll out incrementally to avoid downtime.",
    steps: [
      { phaseLabel: "Week 1", num: "01", title: "Audit", body: "Current setup, costs, risks, gaps" },
      { phaseLabel: "Week 2", num: "02", title: "Architect", body: "Target architecture, IaC, roadmap" },
      { phaseLabel: "Week 3–5", num: "03", title: "Implement", body: "Build, test, migrate incrementally" },
      { phaseLabel: "Week 6", num: "04", title: "Validate", body: "Load test, security scan, sign-off" },
      { phaseLabel: "Week 7", num: "05", title: "Handoff", body: "Runbooks, training, on-call setup" },
    ] as const,
  },

  engagementModels: {
    description: "Cloud needs depend on your stage three engagement models cover most situations.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "Cloud Audit",
        duration: "2-week diagnostic",
        features: [
          "Full infrastructure audit",
          "Cost optimization report",
          "Security & compliance gaps",
          "Architecture diagrams",
          "Prioritized roadmap",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "Cloud Build",
        duration: "6–8 week implementation",
        badge: "Most common",
        features: [
          "Full architecture build",
          "Migration / new infrastructure",
          "IaC + CI/CD pipelines",
          "Monitoring & alerts",
          "Security baseline",
          "Documentation & handoff",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "Cloud Partnership",
        duration: "Monthly · 6-month minimum",
        features: [
          "Fractional cloud team",
          "Ongoing optimization",
          "On-call & incident response",
          "Continuous compliance",
          "Quarterly architecture review",
          "Slack + weekly calls",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    introBefore:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including audit summary, target architecture, timeline, and a fixed all-in price. ",
    introEmphasis: "Cloud provider costs (AWS, GCP, Azure bills) are paid directly by you",
    introAfter:
      " typical monthly cloud spend ranges $500–$50,000+ depending on scale.",
    steps: [
      { num: "01", title: "Discovery call", body: "Free 30-min on stack, scale, goals." },
      { num: "02", title: "Custom proposal", body: "Architecture, scope, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Audit starts within 1–2 weeks." },
    ] as const,
  },

  toolkit: {
    heading: "Tools we work with",
    tools: [
      "Terraform",
      "Pulumi",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "GitLab CI",
      "Datadog",
      "Grafana",
      "Sentry",
      "PagerDuty",
      "Cloudflare",
      "HashiCorp Vault",
    ] as const,
  },

  faq: {
    items: [
      {
        q: "AWS, GCP, or Azure which should we use?",
        a: "It depends on your stack, team, and compliance needs not marketing hype. We map workloads to the right provider (or multi-cloud) and document trade-offs so you choose consciously. Many SaaS teams start on AWS or GCP; Azure wins for Microsoft-heavy enterprises.",
      },
      {
        q: "How much can we realistically cut from our cloud bill?",
        a: "Most audits find 30–60% savings without hurting performance through right-sizing, reserved capacity, spot where appropriate, and removing zombie resources. We itemize savings in the audit report so you see exactly what changes and expected monthly impact.",
      },
      {
        q: "Will the migration cause downtime?",
        a: "We plan for zero-downtime or minimal windows. Migrations run incrementally with rollback paths, blue-green cutovers, and rehearsed runbooks. High-risk moves happen in maintenance windows you approve never as surprises.",
      },
      {
        q: "Who owns the cloud accounts and infrastructure?",
        a: "You do. We work in your AWS/GCP/Azure orgs, repos, and IaC everything transfers at handoff. No proprietary lock-in, no accounts we control. You keep full ownership of billing, access, and operational control.",
      },
      {
        q: "Can you help us pass a SOC 2 or HIPAA audit?",
        a: "Yes. We architect controls into infrastructure from day one  logging, encryption, access boundaries, and evidence trails auditors expect. We do not replace your compliance team or sign BAAs as your legal entity, but we build the technical foundation audit-ready.",
      },
      {
        q: "Do you offer ongoing management after the build?",
        a: "Yes our Cloud Partnership engagement covers fractional cloud engineering, optimization, on-call, and quarterly reviews. Many clients start with Cloud Build or Audit, then move to partnership once the foundation is stable.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "Web development",
        description: "Build new web apps cloud-native from day one.",
        href: "/web-development",
        cta: "Web development →",
        icon: "code" as const,
        iconColor: "#E63946",
      },
      {
        title: "AI development",
        description: "AI workloads need solid cloud foundations we architect both.",
        href: "/artificial-intelligence",
        cta: "AI development →",
        icon: "brain" as const,
        iconColor: "#3B82F6",
      },
      {
        title: "Web portals",
        description: "Enterprise portals deserve enterprise-grade cloud infrastructure.",
        href: "/web-portal-development",
        cta: "Web portals →",
        icon: "shield-lock" as const,
        iconColor: "#3DDC84",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Ready to fix your cloud, ",
    titleEmphasis: "not just patch it?",
    titleAfter: "",
    description:
      "Book a free 30-minute discovery call. We'll audit your infrastructure and send a custom roadmap within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
