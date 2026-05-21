/**
 * Copy and structured content for the Brand Identity Design page (`/brand-identity-design`).
 */

export type BrandIdentityHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type BrandIdentityLayerIconId =
  | "asterisk"
  | "palette"
  | "typography"
  | "message-2"
  | "photo"
  | "book-2";

export type BrandIdentityDeliverableIconId =
  | "search"
  | "mood-search"
  | "bulb"
  | "letter-case"
  | "palette"
  | "mockup"
  | "book-2"
  | "files"
  | "arrow-right-circle";

export type BrandIdentityRelatedIconId = "layout" | "layout-grid" | "code";

export const BRAND_IDENTITY_DESIGN_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "Design", href: "/design" },
      { label: "Brand Identity" },
    ] as const,
    description:
      "Complete brand identity systems logo, color, type, voice, and guidelines built for ambitious founders who want their brand to actually move the needle.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See our work", href: "/case-studies" },
    stats: [
      { value: "3", label: "Concept directions" },
      { value: "20+", label: "Page brand book" },
      { value: "4–6", label: "Week delivery" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "You're launching a new company and need to look established from day one",
      "Your current brand feels outdated, off-target, or generic",
      "You're scaling, raising, or rebranding and need a system that holds up",
      "You want a brand built to ship not just sit pretty in a PDF",
    ] as const,
    callout: {
      title: "Just need a logo?",
      bodyBefore: "If you're a side project or just want a mark, our ",
      logoDesign: { label: "logo design", href: "/design" },
      bodyAfter:
        " service might be a better fit. Brand identity is the full system for businesses ready to invest in something that scales.",
    },
  },

  layers: {
    description: "A real brand identity is more than a logo. We build all six layers as one connected system.",
    items: [
      {
        num: "01",
        title: "Logo & wordmark",
        body: "Primary logo, monogram, lockups, favicon works at every size and context.",
        icon: "asterisk" as const,
      },
      {
        num: "02",
        title: "Color system",
        body: "Primary, secondary, & functional colors with accessibility & light/dark variants.",
        icon: "palette" as const,
      },
      {
        num: "03",
        title: "Typography",
        body: "Display, body, & accent fonts with a full type scale for every use case.",
        icon: "typography" as const,
      },
      {
        num: "04",
        title: "Voice & messaging",
        body: "Tone of voice, taglines, do's/don'ts how your brand sounds on every channel.",
        icon: "message-2" as const,
      },
      {
        num: "05",
        title: "Visual language",
        body: "Photography style, iconography, illustration direction, motion principles.",
        icon: "photo" as const,
      },
      {
        num: "06",
        title: "Brand guidelines",
        body: "A 20+ page brand book your team and partners can actually use day one.",
        icon: "book-2" as const,
      },
    ] as const,
  },

  deliverables: {
    description: "A complete, file-ready brand system usable across web, print, social, and product.",
    items: [
      { title: "Brand discovery", body: "Audit, audience, competitor study, positioning", icon: "search" as const },
      { title: "Mood boards", body: "Visual direction options before pixel-pushing", icon: "mood-search" as const },
      { title: "3 concept directions", body: "Distinct options, not safe variations", icon: "bulb" as const },
      { title: "Logo system", body: "Primary, mark, monogram, favicon variants", icon: "letter-case" as const },
      { title: "Color & type system", body: "Full palettes, scales, accessibility tested", icon: "palette" as const },
      { title: "Brand mockups", body: "See your brand on web, social, packaging, decks", icon: "mockup" as const },
      { title: "Brand guidelines PDF", body: "20+ page brand book your team can use", icon: "book-2" as const },
      { title: "Source files", body: "Figma + SVG / PNG / PDF fully editable", icon: "files" as const },
      { title: "Handoff support", body: "Loom walkthrough + 30-day Q&A access", icon: "arrow-right-circle" as const },
    ] as const,
  },

  howItWorks: {
    description: "Every phase has a clear deliverable and sign-off no surprises, no drift.",
    steps: [
      { phaseLabel: "Week 1", num: "01", title: "Discover", body: "Brief, audit, audience, mood boards" },
      { phaseLabel: "Week 2", num: "02", title: "Explore", body: "3 concept directions, real applications" },
      { phaseLabel: "Week 3", num: "03", title: "Refine", body: "Pick a direction, polish every detail" },
      { phaseLabel: "Week 4", num: "04", title: "Systemize", body: "Build out the full identity system" },
      { phaseLabel: "Week 5", num: "05", title: "Handoff", body: "Brand book, files, walkthrough" },
    ] as const,
  },

  toolkit: {
    tools: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "After Effects",
      "Rive",
      "Notion",
      "Loom",
      "Cavalry",
      "Framer",
    ] as const,
  },

  engagementModels: {
    description: "Every brand is different three engagement models cover most needs.",
    ctaLabel: "Request a quote →",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "Brand Essentials",
        duration: "2–3 week delivery",
        features: [
          "Logo + wordmark",
          "Color palette (5)",
          "Type system",
          "Basic 10-page guidelines",
          "2 rounds of revisions",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "Brand System",
        duration: "4–5 week delivery",
        badge: "Most common",
        features: [
          "Full logo system",
          "Color, type, voice, visual lang.",
          "20+ page brand book",
          "Marketing & social templates",
          "Custom iconography",
          "3 rounds of revisions",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "Brand Platform",
        duration: "8+ week engagement",
        features: [
          "Brand + product design",
          "Motion system + illustration",
          "Naming & messaging strategy",
          "Marketing site design",
          "Ongoing design retainer",
          "Dedicated brand lead",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    intro:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including scope, timeline, deliverables, and a fixed all-in price. Font licensing (if premium type required) is estimated separately so you have full transparency.",
    steps: [
      { num: "01", title: "Discovery call", body: "Free 30-min on brand, audience, goals." },
      { num: "02", title: "Custom proposal", body: "Scope, timeline, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "How many concept directions do you show?",
        a: "Three distinct directions in the Explore phase each with real applications (web, social, deck) so you can judge how the brand actually feels, not just a logo on white. We refine the direction you choose in Refine and Systemize.",
      },
      {
        q: "What happens if we don't like any of the concepts?",
        a: "We dig into feedback on a structured review call and either evolve the strongest direction or explore a fourth round within scope. If we're genuinely off-brief, we pause and realign on positioning before more design time that's rare when discovery is done right.",
      },
      {
        q: "How many rounds of revisions are included?",
        a: "Brand Essentials includes 2 revision rounds; Brand System includes 3; Brand Platform scopes revisions per milestone. We define what counts as a round in your proposal so feedback stays focused and timelines stay predictable.",
      },
      {
        q: "Do we own the brand and source files?",
        a: "Yes. On final payment you own the identity we created for you Figma source files, exported SVG/PNG/PDF assets, and the brand guidelines. Font licenses for premium typefaces are yours to purchase or renew; we document exactly what you need.",
      },
      {
        q: "Can you refresh our existing brand instead of starting over?",
        a: "Absolutely. We audit what you have, keep equity that still works, and evolve the rest. Many clients come for a refresh rather than a full rebrand we scope accordingly so you don't lose recognition you've already built.",
      },
      {
        q: "Do you build the website & product UI too?",
        a: "Yes. Brand identity is often the first layer our design team handles marketing sites and product UI/UX, and our dev team can build what we design. See Web design, UI/UX design, and Web development below, or ask on your discovery call.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "Web design",
        description: "Turn your new brand into a marketing site that converts.",
        href: "/design",
        cta: "Web design →",
        icon: "layout" as const,
        iconColor: "#E63946",
      },
      {
        title: "UI/UX design",
        description: "Extend your brand into your product, app, or dashboard.",
        href: "/design",
        cta: "UI/UX design →",
        icon: "layout-grid" as const,
        iconColor: "#3B82F6",
      },
      {
        title: "Web development",
        description: "Need to build it too? Our dev team picks up where design ends.",
        href: "/web-development",
        cta: "Web development →",
        icon: "code" as const,
        iconColor: "#3DDC84",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Ready to ",
    titleEmphasis: "build a brand",
    titleAfter: " that lasts?",
    description:
      "Book a free 30-minute call. We'll learn your positioning, share direction options, and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
