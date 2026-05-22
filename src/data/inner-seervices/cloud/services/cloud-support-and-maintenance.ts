/**
 * Copy and structured content for the Cloud Support & Maintenance page (`/cloud-support-and-maintenance`).
 */

export type CloudSupportCoverageIconId =
  | "activity-heartbeat"
  | "alert-triangle"
  | "refresh-dot"
  | "shield-lock"
  | "currency-dollar"
  | "trending-up";

export type CloudSupportSlaSeverityId = "critical" | "high" | "medium" | "low";

export type CloudSupportRelatedIconId = "cloud-network" | "transfer" | "currency-dollar";

export type CloudSupportIncludedIconId =
  | "eye"
  | "bell-ringing"
  | "tool"
  | "report"
  | "database-export"
  | "shield-check"
  | "chart-bar"
  | "message-2"
  | "user-star";

export const CLOUD_SUPPORT_AND_MAINTENANCE_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "Cloud Services", href: "/cloud-application-development" },
      { label: "Cloud Support & Maintenance" },
    ] as const,
    description:
      "Monitoring, patching, incident response, and optimization for your AWS, GCP, or Azure infrastructure so your team can build instead of firefight.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See support plans", href: "#support-plans" },
    stats: [
      { value: "24/7", label: "Monitoring & on-call" },
      { value: "99.99%", label: "Uptime target" },
      { value: "<15m", label: "Critical response" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "You have a live app but no dedicated DevOps or infrastructure team",
      "Your developers are stuck firefighting instead of building features",
      "You can't afford downtime but no one's watching at 3am",
      "A full-time DevOps hire ($150k+/yr) is overkill for your stage",
    ] as const,
    callout: {
      title: "Need to fix or rebuild first?",
      bodyBefore:
        "If your infrastructure has deeper architectural problems, support alone won't solve them. Our ",
      consultingLink: { label: "cloud consulting", href: "/cloud-consulting-services" },
      bodyAfter: " team can fix the foundation first then we keep it running.",
    },
  },

  whatWeCover: {
    description:
      'Cloud maintenance is more than "is it up?" we look after every layer that keeps your product reliable.',
    items: [
      {
        title: "24/7 monitoring",
        body: "Uptime, performance, errors watched continuously, alerts triaged for you.",
        icon: "activity-heartbeat" as const,
      },
      {
        title: "Incident response",
        body: "When something breaks, we're on it diagnosis, fix, and a post-mortem.",
        icon: "alert-triangle" as const,
      },
      {
        title: "Patching & updates",
        body: "OS, runtime, and dependency updates applied safely and on schedule.",
        icon: "refresh-dot" as const,
      },
      {
        title: "Security & backups",
        body: "Vulnerability scans, secret rotation, tested backups & disaster recovery.",
        icon: "shield-lock" as const,
      },
      {
        title: "Cost monitoring",
        body: "We watch your cloud bill, flag spikes, and trim waste every month.",
        icon: "currency-dollar" as const,
      },
      {
        title: "Scaling & tuning",
        body: "Autoscaling, capacity planning, and performance tuning as you grow.",
        icon: "trending-up" as const,
      },
    ] as const,
  },

  whatsIncluded: {
    description: "A real operations partner not a ticket queue that takes days to answer.",
    items: [
      {
        title: "Proactive monitoring",
        body: "We catch issues before your users do",
        icon: "eye" as const,
      },
      {
        title: "Alert triage",
        body: "No alert fatigue we filter the noise",
        icon: "bell-ringing" as const,
      },
      {
        title: "Incident handling",
        body: "Diagnose, fix, document within SLA",
        icon: "tool" as const,
      },
      {
        title: "Post-mortems",
        body: "Root-cause analysis after every incident",
        icon: "report" as const,
      },
      {
        title: "Backup verification",
        body: "Backups tested, not just scheduled",
        icon: "database-export" as const,
      },
      {
        title: "Security patching",
        body: "CVEs patched on a managed schedule",
        icon: "shield-check" as const,
      },
      {
        title: "Monthly reports",
        body: "Uptime, incidents, cost, recommendations",
        icon: "chart-bar" as const,
      },
      {
        title: "Slack access",
        body: "Talk to real engineers, not a bot",
        icon: "message-2" as const,
      },
      {
        title: "Dedicated engineer",
        body: "Someone who knows your stack well",
        icon: "user-star" as const,
      },
    ] as const,
  },

  responseSlas: {
    description:
      "Clear, written response targets by severity so you always know what to expect.",
    rows: [
      {
        severity: "Critical",
        severityId: "critical" as const,
        example: "Site down, data loss risk, security breach",
        response: "< 15 min",
      },
      {
        severity: "High",
        severityId: "high" as const,
        example: "Degraded performance, partial outage",
        response: "< 1 hour",
      },
      {
        severity: "Medium",
        severityId: "medium" as const,
        example: "Non-urgent bug, minor degradation",
        response: "< 4 hours",
      },
      {
        severity: "Low",
        severityId: "low" as const,
        example: "Questions, requests, planned changes",
        response: "< 1 business day",
      },
    ] as const,
    footnote:
      "Response times shown reflect the Growth plan. Critical 24/7 coverage applies to Growth & Scale plans.",
  },

  monitoringStack: {
    tools: [
      "Datadog",
      "Grafana",
      "Prometheus",
      "Sentry",
      "PagerDuty",
      "CloudWatch",
      "Better Stack",
      "Terraform",
      "AWS Cost Explorer",
      "Snyk",
    ] as const,
  },

  onboarding: {
    description:
      "We learn your infrastructure properly before we take the on-call page no blind support.",
    steps: [
      {
        week: "Week 1",
        num: "01",
        title: "Discovery audit",
        body: "Review your stack, risks, gaps",
      },
      {
        week: "Week 1–2",
        num: "02",
        title: "Instrument",
        body: "Set up monitoring, alerts, dashboards",
      },
      {
        week: "Week 2",
        num: "03",
        title: "Runbooks",
        body: "Document systems & response plans",
      },
      {
        week: "Week 3",
        num: "04",
        title: "Go live",
        body: "We take the pager you're covered",
      },
    ] as const,
  },

  supportPlans: {
    id: "support-plans",
    description:
      "All plans are monthly retainers. Coverage scales with your stage and uptime needs.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Plan 01",
        name: "Essential",
        duration: "Monthly · business hours",
        features: [
          "24/7 automated monitoring",
          "Business-hours response",
          "Patching & updates",
          "Monthly health report",
          "Email & Slack support",
        ] as const,
        highlighted: false,
      },
      {
        code: "Plan 02",
        name: "Growth",
        duration: "Monthly · 24/7 on-call",
        badge: "Most common",
        features: [
          "Everything in Essential",
          "24/7 on-call incident response",
          "<15-min critical SLA",
          "Post-mortems & cost reviews",
          "Dedicated engineer",
          "Quarterly optimization",
        ] as const,
        highlighted: true,
      },
      {
        code: "Plan 03",
        name: "Scale",
        duration: "Monthly · enterprise SLA",
        features: [
          "Everything in Growth",
          "Custom enterprise SLAs",
          "Multi-cloud / multi-region",
          "Compliance maintenance",
          "Fractional cloud team",
          "Architecture roadmap reviews",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    introBefore:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including a recommended plan, SLA tier, and a fixed monthly retainer. ",
    introEmphasis:
      "Cloud provider costs and monitoring tool subscriptions are billed separately",
    introAfter:
      " or we can include them and pass them through transparently. Your call.",
    steps: [
      { num: "01", title: "Discovery call", body: "Free 30-min on stack, scale, uptime needs." },
      { num: "02", title: "Custom proposal", body: "Plan, SLA, monthly retainer within 3 days." },
      { num: "03", title: "Onboarding", body: "3-week onboarding, then you're covered." },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "Do we need you to have built our infrastructure first?",
        a: "No. We support stacks built by your team, another agency, or us. During onboarding we audit what's running, close monitoring gaps, and document runbooks we don't require a greenfield Weblynx build.",
      },
      {
        q: "Is there a minimum contract length?",
        a: "Growth and Scale plans usually start with a 3-month initial term so onboarding and value land properly. Essential can move to month-to-month after onboarding. Exact terms are in your proposal.",
      },
      {
        q: 'What counts as an "incident" vs. a feature request?',
        a: "Incidents are unplanned outages, severe degradation, or security events covered by your SLA. Feature work, new services, and planned changes are scoped separately often as consulting hours or a change request outside the retainer.",
      },
      {
        q: "Do you replace our developers or work alongside them?",
        a: "We work alongside your team. Your developers keep shipping product; we own monitoring, incident response, patching, and infrastructure hygiene. We plug into your Slack and ticketing we don't replace your engineers.",
      },
      {
        q: "What happens if you miss an SLA?",
        a: "SLA credits are defined in your contract typically service credits on the following month's retainer for verified misses. We report response times transparently in monthly reviews.",
      },
      {
        q: "Can you also handle new feature work and infrastructure changes?",
        a: "Yes, as separately scoped work. Support keeps production healthy; net-new features, migrations, and major architecture changes are quoted as cloud consulting or project work so scope stays clear.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "Cloud consulting",
        description: "Architecture problems? Fix the foundation before maintaining it.",
        href: "/cloud-consulting-services",
        cta: "Cloud consulting →",
        icon: "cloud-network" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Cloud migration",
        description: "Just migrated with us? Support keeps the new environment healthy.",
        href: "/cloud-migration",
        cta: "Cloud migration →",
        icon: "transfer" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Cost optimization",
        description: "Want a deeper one-off bill audit beyond monthly monitoring?",
        href: "/cloud-consulting-services",
        cta: "Cost optimization →",
        icon: "currency-dollar" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  finalCta: {
    titleBefore: "Sleep easy. ",
    titleEmphasis: "We've got the pager.",
    titleAfter: "",
    description:
      "Book a free 30-minute discovery call. We'll review your infrastructure and recommend a support plan within 3 days.",
    ctaLabel: "Book a call",
    ctaHref: "/contact",
  },
} as const;

export const CLOUD_SUPPORT_SLA_SEVERITY_COLORS: Record<CloudSupportSlaSeverityId, string> = {
  critical: "#E24B4A",
  high: "#EF9F27",
  medium: "#F5C518",
  low: "#3DDC84",
};
