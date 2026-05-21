/**
 * Copy and structured content for the UI/UX Design page (`/ui-ux-design`).
 */

export type UiUxSurfaceIconId =
  | "layout-dashboard"
  | "app-window"
  | "device-mobile"
  | "rocket"
  | "arrows-shuffle"
  | "components";

export type UiUxPrincipleIconId = "target" | "zap" | "accessible" | "code";

export type UiUxRelatedIconId = "asterisk" | "components" | "code";

export type UiUxDeliverableIconId =
  | "search"
  | "route"
  | "pencil"
  | "layout-grid"
  | "click"
  | "components"
  | "accessible"
  | "device-mobile"
  | "arrow-right-circle";

export const UI_UX_DESIGN_PAGE = {
  hero: {
    eyebrow: "UI / UX Design",
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "Design", href: "/design" },
      { label: "UI/UX Design" },
    ] as const,
    description:
      "Product UX, web app UI, and SaaS dashboards designed for clarity, speed, and conversion backed by user research and built to ship.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See our work", href: "/case-studies" },
    stats: [
      { value: "+58%", label: "Avg activation lift" },
      { value: "−40%", label: "Support tickets" },
      { value: "3–6", label: "Week delivery" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "You're building a SaaS, web app, or product MVP and need a real UI",
      "Your existing product feels clunky, confusing, or off-brand",
      "Users churn early, ask the same questions, or can't find core features",
      "You want design that ships Figma files developers actually love to use",
    ] as const,
    callout: {
      title: "UI/UX vs Web Design vs Brand which do you need?",
      bodyBefore: "UI/UX is for ",
      emphasis: "products",
      bodyAfterEmphasis: " apps, dashboards, SaaS. For marketing sites, see ",
      webDesign: { label: "web design", href: "/design" },
      bodyMiddle: ". For logos & identity systems, see ",
      brandIdentity: { label: "brand identity", href: "/brand-identity-design" },
      bodyAfter: ".",
    },
  },

  surfaces: {
    description: "Modern products live across many surfaces. We design them as one connected experience.",
    items: [
      {
        title: "SaaS dashboards",
        body: "Data-rich product UI for analytics, CRMs, admin panels, internal tools.",
        icon: "layout-dashboard" as const,
      },
      {
        title: "Web apps",
        body: "Customer-facing products editors, marketplaces, social apps, learning tools.",
        icon: "app-window" as const,
      },
      {
        title: "Mobile app UI",
        body: "iOS & Android product design that follows platform conventions.",
        icon: "device-mobile" as const,
      },
      {
        title: "Onboarding flows",
        body: "First-run experiences, signups, empty states, in-app guidance.",
        icon: "rocket" as const,
      },
      {
        title: "Product redesigns",
        body: "Audit, restructure, and rebuild legacy product UI without breaking workflows.",
        icon: "arrows-shuffle" as const,
      },
      {
        title: "Component libraries",
        body: "Reusable design system foundations for teams designing at scale.",
        icon: "components" as const,
      },
    ] as const,
  },

  deliverables: {
    description: "Real design files developers can build from not just pretty pictures.",
    items: [
      { title: "User research", body: "Interviews, surveys, competitor study", icon: "search" as const },
      { title: "User flows & journeys", body: "Map the full path from sign-up to value", icon: "route" as const },
      { title: "Wireframes", body: "Low-fi structure & layout sign-off", icon: "pencil" as const },
      { title: "High-fidelity UI", body: "Pixel-perfect screens, light + dark", icon: "layout-grid" as const },
      { title: "Interactive prototype", body: "Clickable Figma prototype for testing", icon: "click" as const },
      { title: "Component library", body: "Reusable, variant-based components", icon: "components" as const },
      { title: "Accessibility (WCAG AA)", body: "Color contrast, focus states, alt text", icon: "accessible" as const },
      { title: "Responsive design", body: "Desktop, tablet, mobile every screen", icon: "device-mobile" as const },
      { title: "Developer handoff", body: "Specs, tokens, Loom walkthrough", icon: "arrow-right-circle" as const },
    ] as const,
  },

  principles: {
    description:
      "Beautiful is easy. Usable, accessible, and shippable is the harder bar and the one we hold.",
    items: [
      {
        num: "01",
        title: "Clarity over cleverness",
        body: "Users shouldn't have to think. We design for the obvious next step, every time.",
        icon: "target" as const,
      },
      {
        num: "02",
        title: "Speed to value",
        body: "Time-to-first-value is the single most important metric. We design to shorten it.",
        icon: "zap" as const,
      },
      {
        num: "03",
        title: "Accessible by default",
        body: "WCAG AA contrast, keyboard navigation, screen reader support never bolted on.",
        icon: "accessible" as const,
      },
      {
        num: "04",
        title: "Designed to be built",
        body: "Every screen has tokens, variants, & spec developers thank us, not curse us.",
        icon: "code" as const,
      },
    ] as const,
  },

  howItWorks: {
    description:
      "A real process with real artifacts no skipping straight from idea to high-fi screens.",
    steps: [
      { phaseLabel: "Week 1", num: "01", title: "Research", body: "Users, audit, competitors, goals" },
      { phaseLabel: "Week 2", num: "02", title: "Wireframe", body: "Flows, structure, sign-off" },
      { phaseLabel: "Week 3–4", num: "03", title: "Design", body: "High-fi UI, components, variants" },
      { phaseLabel: "Week 5", num: "04", title: "Prototype", body: "Clickable Figma, user testing" },
      { phaseLabel: "Week 6", num: "05", title: "Handoff", body: "Specs, tokens, Loom walkthrough" },
    ] as const,
  },

  toolkit: {
    heading: "Tools we design in",
    tools: [
      "Figma",
      "Framer",
      "Tokens Studio",
      "Maze (testing)",
      "Lyssna",
      "Notion",
      "Loom",
      "Linear",
      "Storybook",
      "Rive (motion)",
    ] as const,
  },

  engagementModels: {
    description: "Every product is different three engagement models cover most use cases.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "MVP Design",
        duration: "2–3 week delivery",
        features: [
          "Up to 10 core screens",
          "Single user role",
          "Light wireframes + high-fi",
          "Basic component library",
          "Developer handoff",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "Full Product",
        duration: "5–6 week delivery",
        badge: "Most common",
        features: [
          "Up to 30 screens",
          "Multi-role flows",
          "User research + testing",
          "Full component library",
          "Prototype + handoff",
          "Light + dark themes",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "Embedded Design",
        duration: "Monthly · 3-month minimum",
        features: [
          "Designer on your team",
          "Continuous feature design",
          "Design system maintained",
          "User research ongoing",
          "Slack & weekly calls",
          "Dedicated lead",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    intro:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including scope, screens, timeline, and a fixed all-in price. Figma seat costs (if your team needs access) are estimated separately so you have full transparency.",
    steps: [
      { num: "01", title: "Discovery call", body: "Free 30-min on product, users, goals." },
      { num: "02", title: "Custom proposal", body: "Scope, screens, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "Do you do user research, or design from a brief?",
        a: "Both and we recommend at least light research on Full Product and Embedded engagements. For MVP Design we can work from a solid brief, stakeholder interviews, and competitor audits. When research is in scope we run interviews, usability tests, or surveys and bake findings into flows before high-fi UI.",
      },
      {
        q: "How many revisions are included?",
        a: "MVP Design includes two focused revision rounds after wireframe and high-fi milestones. Full Product includes three rounds across wireframes, UI, and prototype. Embedded Design scopes feedback per sprint. We define what counts as a round in your proposal so feedback stays actionable.",
      },
      {
        q: "Can we use our existing brand and design system?",
        a: "Yes. We extend your brand tokens, components, and patterns into product UI or help you evolve a thin system into something dev-ready. If you only have marketing brand guidelines, we translate them into product typography, spacing, and component specs.",
      },
      {
        q: "Do you do mobile app design, or just web?",
        a: "Both. We design responsive web apps, native iOS and Android product UI, and cross-platform patterns that stay consistent. Platform conventions (navigation, gestures, density) are part of the deliverable, not an afterthought.",
      },
      {
        q: "Can your team build what you design?",
        a: "Yes. Our web and app development teams build from the Figma files we hand off same studio, same communication rhythm. Many clients design with us and ship with us so there is no translation loss between design and code.",
      },
      {
        q: "Do you sign NDAs and how do you handle confidential products?",
        a: "We sign NDAs before sensitive discovery calls and keep pre-launch work in private Figma projects with access controls. We do not use your product UI in our portfolio without written approval. Confidentiality terms are standard in our master services agreement.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "Brand identity",
        description: "Build the brand first, then extend it into your product UI.",
        href: "/brand-identity-design",
        cta: "Brand identity",
        icon: "asterisk" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Design systems",
        description: "Scaling to a team? Get a real design system, not just files.",
        href: "/design",
        cta: "Design systems",
        icon: "components" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Web development",
        description: "Need to build it too? Our dev team picks up where design ends.",
        href: "/web-development",
        cta: "Web development",
        icon: "code" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Ready for a product ",
    titleEmphasis: "users actually",
    titleAfter: " love?",
    description:
      "Book a free 30-minute discovery call. We'll audit your product and send a tailored proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
