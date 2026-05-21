/**
 * Copy and structured content for the AI Development page (`/artificial-intelligence`).
 * Capability and included-card icons are resolved in components via string ids.
 */

export type AiDevHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type AiDevCapabilitiesIconId =
  | "messages"
  | "search"
  | "robot"
  | "photo-ai"
  | "brain"
  | "bolt";

export type AiDevIncludedIconId =
  | "target"
  | "writing"
  | "shield-check"
  | "vector"
  | "chart-dots"
  | "currency-dollar";

export const AI_DEVELOPMENT_PAGE = {
  hero: {
    breadcrumb: {
      parentLabel: "Services",
      parentHref: "/service",
      currentLabel: "AI Development",
    },
    description:
      "Custom AI features, chatbots, RAG systems, and automation built on the latest LLMs. We ship AI that solves real problems, not demos.",
    primaryCta: { label: "Request a quote", href: "#quote" },
    secondaryCta: { label: "See use cases", href: "#capabilities" },
  },

  whoFor: {
    bullets: [
      "You want to add AI features (chat, search, automation) to your product",
      "You need a custom chatbot trained on your company's data",
      "You're building an AI-first SaaS or want to automate workflows",
      "You've tried no-code AI tools but hit their ceiling",
    ] as const,
  },

  capabilities: {
    sectionId: "capabilities",
    description: "Each capability stands alone or combines with the rest to power a full AI product.",
    items: [
      {
        title: "AI chatbots & copilots",
        body: "Custom chat assistants trained on your data, with memory and tool use.",
        icon: "messages" as const,
      },
      {
        title: "RAG systems",
        body: "AI that searches your docs, files, and databases and answers with sources.",
        icon: "search" as const,
      },
      {
        title: "AI agents",
        body: "Autonomous workflows that handle research, scheduling, follow-ups.",
        icon: "robot" as const,
      },
      {
        title: "Image & video AI",
        body: "Generation, editing, and analysis for content, design, and product use.",
        icon: "photo-ai" as const,
      },
      {
        title: "Fine-tuned models",
        body: "Custom models tuned to your domain, tone, and specific business rules.",
        icon: "brain" as const,
      },
      {
        title: "AI automation",
        body: "Replace manual ops with AI for support, content, sales, and back-office.",
        icon: "bolt" as const,
      },
    ] as const,
  },

  included: {
    description: "Production-grade AI, not just an OpenAI wrapper.",
    items: [
      {
        title: "AI use-case audit",
        body: "What AI can/can't solve for your business",
        icon: "target" as const,
      },
      {
        title: "Prompt engineering",
        body: "Reliable prompts that don't break in production",
        icon: "writing" as const,
      },
      {
        title: "Safety & guardrails",
        body: "Hallucination control, content filtering, fallbacks",
        icon: "shield-check" as const,
      },
      {
        title: "Vector DB setup",
        body: "Pinecone or Supabase pgvector embeddings",
        icon: "vector" as const,
      },
      {
        title: "Eval & monitoring",
        body: "Track quality, cost, latency in production",
        icon: "chart-dots" as const,
      },
      {
        title: "Cost optimization",
        body: "Model selection & caching to lower API spend",
        icon: "currency-dollar" as const,
      },
    ] as const,
  },

  process: {
    description: "AI projects need extra rigor we plan, prototype, and prove before we build.",
    steps: [
      { week: "Week 1", num: "01", title: "Discovery", body: "Map the use case, define success" },
      { week: "Week 2", num: "02", title: "Prototype", body: "Working demo, prove it can work" },
      { week: "Weeks 3–5", num: "03", title: "Build", body: "Production system, integrations" },
      { week: "Week 6", num: "04", title: "Eval", body: "Test quality, safety, edge cases" },
      { week: "Week 7", num: "05", title: "Launch", body: "Deploy + monitoring dashboard" },
    ] as const,
  },

  engagements: {
    sectionId: "engagements",
    description: "Every AI project is quoted based on scope. Three engagement models cover most needs.",
    featuredTierBadge: "Most common",
    ctaLabel: "Request a quote",
    ctaHref: "#quote",
    tiers: [
      {
        featured: false,
        label: "Engagement 01",
        title: "AI Sprint",
        timeline: "2-week proof of concept",
        items: [
          "Single AI feature",
          "Working prototype",
          "OpenAI/Claude integration",
          "Demo + handoff doc",
          "Recommendations for v2",
        ],
      },
      {
        featured: true,
        label: "Engagement 02",
        title: "AI Build",
        timeline: "6–8 week production build",
        items: [
          "Full AI feature in your product",
          "RAG / chatbot / agent",
          "Vector DB + embeddings",
          "Eval & monitoring",
          "Safety guardrails",
          "60-day support",
        ],
      },
      {
        featured: false,
        label: "Engagement 03",
        title: "AI Platform",
        timeline: "3+ month partnership",
        items: [
          "Multiple AI features",
          "Custom fine-tuned models",
          "Multi-agent systems",
          "Self-hosting (optional)",
          "Dedicated AI engineer",
          "Ongoing optimization",
        ],
      },
    ] as const,
  },

  howWeQuote: {
    intro:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days including scope, milestones, success metrics, and a fixed all-in price. API costs are estimated separately so you have full transparency.",
    steps: [
      {
        num: "01",
        title: "Scoping call",
        body: "Free 30-min define the use case and viability.",
      },
      {
        num: "02",
        title: "Custom proposal",
        body: "Scope, timeline, fixed price within 3 days.",
      },
      {
        num: "03",
        title: "Kickoff",
        body: "Discovery sprint starts within 1–2 weeks.",
      },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "Which AI model should I use GPT, Claude, or Gemini?",
        a: "It depends on your use case, latency budget, and data policies. We benchmark models against your real prompts and documents during discovery, then recommend a primary model plus a fallback. Most products ship with one hosted API and the option to swap models without rewriting your app.",
      },
      {
        q: "Will AI hallucinate and give wrong answers to my users?",
        a: "All LLMs can hallucinate we design for it. RAG with citations, confidence thresholds, guardrails, human handoff, and eval suites in production reduce bad answers. We measure accuracy on your data before launch, not after.",
      },
      {
        q: "How much will the AI API costs be on top of your fee?",
        a: "API spend varies with traffic, model choice, and context size. We estimate monthly cost ranges in your proposal and implement caching, routing, and smaller models where it makes sense. You own the API keys and see usage in your provider dashboard.",
      },
      {
        q: "Is my data used to train the models? Is it private?",
        a: "Your data stays yours. We use enterprise API terms where available, keep embeddings in your vector store, and can deploy on VPC or self-hosted stacks when required. We never use client data to train public models.",
      },
      {
        q: "Do I need a custom model, or is a hosted API enough?",
        a: "Most teams start with a hosted API plus RAG it's faster and cheaper. Fine-tuning or custom models make sense when you need consistent tone, domain jargon, or strict offline deployment. We'll tell you honestly if you're not there yet.",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    className: "bg-[linear-gradient(180deg,var(--bg),rgba(27,7,9,0.98))]",
    titleBefore: "Got an AI idea? Let's build it ",
    titleEmphasis: "right",
    titleAfter: ".",
    description: "Book a free 30-minute call. We'll evaluate feasibility and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
