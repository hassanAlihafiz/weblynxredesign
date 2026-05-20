/**
 * Copy and structured content for the Ecommerce Website Development page.
 * Icons are resolved in components via string ids.
 */

export type EcommerceWebHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type EcommerceWebPlatformIconId =
  | "shopping-bag"
  | "brand-wordpress"
  | "brand-react"
  | "shopping-cart";

export type EcommerceWebFeatureIconId =
  | "bolt"
  | "credit-card"
  | "shopping-cart-plus"
  | "mail-forward"
  | "star"
  | "search"
  | "package"
  | "chart-line"
  | "world";

export type EcommerceWebRelatedIconId = "trending-up" | "palette" | "devices";

export const ECOMMERCE_WEB_DEV_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/services" },
      { label: "Web Development", href: "/web-development" },
      { label: "Ecommerce" },
    ] as const,
    heading: {
      before: "Online stores that load fast and ",
      emphasis: "actually convert",
      after: "",
    } satisfies EcommerceWebHeading,
    description:
      "From Shopify storefronts to fully custom Next.js commerce we build stores that win on speed, design, and revenue per visitor.",
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "See store examples", href: "#examples" },
    stats: [
      { value: "2.5×", label: "Avg. revenue lift" },
      { value: "<1s", label: "Page load" },
      { value: "+40%", label: "Conversion lift" },
    ] as const,
  },

  whoFor: {
    heading: {
      before: "You probably ",
      emphasis: "need this",
      after: " if...",
    } satisfies EcommerceWebHeading,
    reasons: [
      "You're launching a DTC brand and need a high-converting storefront",
      "Your current store is slow, dated, or losing visitors at checkout",
      "You need a custom Shopify theme not a $200 template every brand uses",
      "You're scaling beyond Shopify limits and need headless commerce",
    ] as const,
  },

  platforms: {
    heading: {
      before: "We pick the ",
      emphasis: "right tool",
      after: " for your stage",
    } satisfies EcommerceWebHeading,
    description:
      "From quick-launch Shopify themes to fully custom headless stacks we'll recommend what fits your business.",
    iconDefaults: {
      iconClass: "text-[var(--red)]",
    },
    items: [
      {
        name: "Shopify",
        description: "Custom themes, apps, and Shopify Plus builds. Best for most DTC brands.",
        icon: "shopping-bag" as const,
      },
      {
        name: "WooCommerce",
        description: "WordPress-based stores. Full control, lower platform fees.",
        icon: "brand-wordpress" as const,
      },
      {
        name: "Headless (Next.js)",
        description: "Custom storefronts on Shopify Hydrogen or Medusa.js. For brands scaling fast.",
        icon: "brand-react" as const,
      },
      {
        name: "BigCommerce",
        description: "Enterprise-grade for B2B and high-volume merchants.",
        icon: "shopping-cart" as const,
      },
    ] as const,
  },

  conversionFeatures: {
    heading: {
      before: "Built ",
      emphasis: "to sell",
      after: ", not just to show ",
    } satisfies EcommerceWebHeading,
    description: "Every store ships with the conversion patterns that actually move the needle.",
    items: [
      { title: "Sub-1s page loads", body: "Every 100ms of speed = ~1% more sales", icon: "bolt" as const },
      { title: "One-page checkout", body: "Shop Pay, Apple Pay, Google Pay, COD", icon: "credit-card" as const },
      {
        title: "Upsells & bundles",
        body: "Cart upsells, bundle builders, post-purchase",
        icon: "shopping-cart-plus" as const,
      },
      { title: "Abandoned cart flows", body: "Klaviyo email + SMS recovery setup", icon: "mail-forward" as const },
      { title: "Reviews & UGC", body: "Judge.me, Loox, or Okendo integration", icon: "star" as const },
      { title: "SEO + product schema", body: "Product, price, review rich snippets", icon: "search" as const },
      { title: "Inventory & shipping", body: "3PL, Shipstation, real-time rates", icon: "package" as const },
      { title: "Analytics & tracking", body: "GA4, Meta CAPI, server-side tracking", icon: "chart-line" as const },
      {
        title: "Multi-currency & market",
        body: "International selling ready out of the box",
        icon: "world" as const,
      },
    ] as const,
  },

  stack: {
    heading: {
      before: "Tools we ",
      emphasis: "ship with",
      after: "",
    } satisfies EcommerceWebHeading,
    labels: [
      "Shopify Liquid",
      "Shopify Hydrogen",
      "Next.js",
      "React",
      "TypeScript",
      "Medusa.js",
      "Klaviyo",
      "Stripe",
      "Algolia",
      "Vercel",
      "Sanity",
    ] as const,
  },

  process: {
    heading: {
      before: "From kickoff to live store in ",
      emphasis: "6 weeks",
      after: "",
    } satisfies EcommerceWebHeading,
    description: "Built around launching profitably not just launching.",
    steps: [
      { week: "Week 1", num: "01", title: "Audit + strategy", detail: "Goals, customers, conversion plan" },
      { week: "Week 2", num: "02", title: "Design", detail: "Storefront + PDP mockups" },
      { week: "Week 3–4", num: "03", title: "Build", detail: "Theme, integrations, checkout" },
      { week: "Week 5", num: "04", title: "Test & QA", detail: "Checkout testing, real orders" },
      { week: "Week 6", num: "05", title: "Launch & grow", detail: "Go live + first month optimization" },
    ] as const,
  },

  engagement: {
    heading: {
      before: "Find the build that ",
      emphasis: "fits",
      after: "",
    } satisfies EcommerceWebHeading,
    description: "Every store is quoted based on scope. Three engagement models cover most brands.",
    featuredTierBadge: "Most common",
    ctaLabel: "Request a quote →",
    ctaHref: "#quote",
    tiers: [
      {
        featured: false,
        label: "Engagement 01",
        title: "Launch store",
        timeline: "3-week delivery",
        items: [
          "Shopify with custom theme",
          "Up to 50 products",
          "One-page checkout",
          "Klaviyo setup",
          "Basic analytics",
          "30-day support",
        ],
      },
      {
        featured: true,
        label: "Engagement 02",
        title: "Brand store",
        timeline: "6-week delivery",
        items: [
          "Fully custom Shopify build",
          "Unlimited products",
          "Bundles & upsells",
          "Email/SMS automation",
          "Reviews & UGC",
          "Server-side tracking",
          "60-day support",
        ],
      },
      {
        featured: false,
        label: "Engagement 03",
        title: "Headless commerce",
        timeline: "10+ week engagement",
        items: [
          "Next.js + Shopify Hydrogen",
          "Custom checkout flows",
          "Multi-store/multi-market",
          "B2B/wholesale support",
          "Custom backend logic",
          "Ongoing retainer",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    sectionId: "quote",
    heading: {
      before: "Every brand is different ",
      emphasis: "So is every store",
      after: "",
    } satisfies EcommerceWebHeading,
    intro:
      "After a 30-minute discovery call, we send a detailed proposal within 3 business days including platform recommendation, scope, milestones, and a fixed all-in price. Shopify subscription, apps, and shipping costs are separate.",
    steps: [
      { num: "01", title: "Discovery call", body: "Free 30-min on brand, products, customers." },
      { num: "02", title: "Custom proposal", body: "Platform + scope + price within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
    ] as const,
  },

  caseStudy: {
    sectionId: "examples",
    cardHref: "/case-studies",
    thumbPlaceholder: "NorthBrand store screenshot",
    tags: ["DTC", "Shopify"] as const,
    title: "NorthBrand 2.5x revenue in 90 days",
    excerpt:
      "Rebuilt their Shopify store with a custom theme, redesigned checkout, and Klaviyo flows. Cut load time 4×, lifted conversion 40%, and boosted AOV 22%.",
    stats: [
      { value: "2.5×", label: "Revenue" },
      { value: "+40%", label: "Conversion" },
      { value: "+22%", label: "AOV" },
    ] as const,
  },

  related: {
    heading: {
      before: "Also explore ",
      emphasis: "other services",
      after: "",
    } satisfies EcommerceWebHeading,
    linkDefaults: {
      iconClass: "text-[var(--red)]",
      ctaClass: "text-[var(--red)]",
    },
    items: [
      {
        title: "Digital Marketing",
        description: "Drive traffic to your new store with SEO + ads.",
        href: "/digital-marketing",
        cta: "See Marketing →",
        icon: "trending-up" as const,
      },
      {
        title: "Brand & Design",
        description: "Build a brand identity that sells before the click.",
        href: "/design",
        cta: "See Design →",
        icon: "palette" as const,
      },
      {
        title: "Mobile App",
        description: "Add a companion shopping app for loyal customers.",
        href: "/cross-platform-app-development",
        cta: "See Cross-Platform →",
        icon: "devices" as const,
      },
    ] as const,
  },

  faq: {
    heading: {
      before: "Things ecom founders ask ",
      emphasis: "before starting",
      after: "",
    } satisfies EcommerceWebHeading,
    items: [
      {
        q: "Shopify or custom which should I pick?",
        a: "Shopify is the right default for most DTC brands: faster launch, proven checkout, and a huge app ecosystem. Custom or headless makes sense when you outgrow theme limits, need complex B2B logic, or want a fully owned storefront on Next.js. We recommend one on your discovery call based on revenue stage, catalog size, and team not hype.",
      },
      {
        q: "Can you migrate my existing store from WooCommerce or Magento?",
        a: "Yes. We migrate products, collections, customers, order history where possible, and URL redirects for SEO. Downtime is minimized with a staged cutover often a weekend launch after parallel testing on the new theme or stack.",
      },
      {
        q: 'What\'s "headless" commerce and do I need it?',
        a: "Headless means the storefront (what shoppers see) is separate from the commerce backend (Shopify, Medusa, etc.), usually built in Next.js. You need it when you want maximum speed, custom UX, or multi-channel selling beyond a standard theme. Most brands under ~$5M ARR don't need it yet Shopify with a custom theme is enough.",
      },
      {
        q: "Will my store be ready for Black Friday traffic spikes?",
        a: "Yes. We optimize images, scripts, and checkout flows for peak traffic, use Shopify's CDN and infrastructure (or Vercel for headless), and load-test critical paths before launch. For headless builds we configure caching and rate limits so product pages stay fast under surge traffic.",
      },
      {
        q: "Do you handle product photography or content writing?",
        a: "We focus on store build, conversion UX, and integrations. Photography and copywriting aren't included, but we can recommend partners or work from your brand guidelines and existing assets. PDP templates and collection layouts are part of the build.",
      },
      {
        q: "Who owns the store, theme code, and customer data?",
        a: "You do. The store lives in your Shopify (or platform) account, theme and custom code ship in your Git repos, and customer data stays in your platform. We hand off credentials, documentation, and admin training at launch no lock-in.",
      },
    ] as const,
  },

  finalCta: {
    className: "bg-[linear-gradient(180deg,var(--bg),rgba(27,7,9,0.98))]",
    titleBefore: "Ready to sell better ",
    titleEmphasis: "online",
    titleAfter: "?",
    description:
      "Book a free 30-minute call. We'll audit your current store (or your idea) and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
