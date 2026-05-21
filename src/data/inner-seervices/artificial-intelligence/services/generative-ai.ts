/**
 * Copy and structured content for the Generative AI page (`/generative-ai`).
 */

export type GenAiHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type GenAiModalityIconId = "file-text" | "photo" | "video" | "microphone" | "code" | "shapes";

export type GenAiUseCaseIconId =
  | "photo-edit"
  | "article"
  | "clipboard-text"
  | "mail"
  | "movie"
  | "user-circle";

export type GenAiRelatedIconId = "database-search" | "robot" | "messages";

export type GenAiDeliverableIconId =
  | "target"
  | "writing"
  | "palette"
  | "layout-dashboard"
  | "shield-check"
  | "plug-connected"
  | "currency-dollar"
  | "chart-dots-3"
  | "certificate";

export const GENERATIVE_AI_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "AI Development", href: "/artificial-intelligence" },
      { label: "Generative AI" },
    ] as const,
    description:
      "Custom AI tools that generate text, images, videos, audio, and code built on the latest foundation models and wired into your real workflows.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See capabilities", href: "#capabilities" },
    stats: [
      { value: "10×", label: "Content output" },
      { value: "−70%", label: "Production cost" },
      { value: "2–6", label: "Week build" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "You produce content at scale and the cost or time is killing you",
      'You want to add "AI-powered" features that actually deliver value',
      "You've used ChatGPT or Midjourney and want to build something custom",
      "You need creative output tuned to your brand voice and style",
    ] as const,
    callout: {
      title: "GenAI is not magic and not for every use case",
      bodyBeforeRag:
        "If you need precise, fact-grounded answers (medical, legal, financial), see ",
      rag: { label: "RAG systems", href: "/artificial-intelligence#capabilities" },
      bodyBetween:
        ". If you need automated workflows, see ",
      agents: { label: "AI agents", href: "/artificial-intelligence#capabilities" },
      bodyAfter: ". GenAI is best for creative production and content scale.",
    },
  },

  whatWeGenerate: {
    sectionId: "capabilities",
    description: "Whatever you create today by hand, GenAI can produce 10× faster and often better.",
    items: [
      {
        title: "Text & copywriting",
        body: "Blog posts, ad copy, product descriptions, emails tuned to your brand voice.",
        icon: "file-text" as const,
      },
      {
        title: "Image generation",
        body: "Product visuals, ads, social posts, mockups, illustrations in any style.",
        icon: "photo" as const,
      },
      {
        title: "Video generation",
        body: "Short-form video, product demos, animations, voiceover-ready footage.",
        icon: "video" as const,
      },
      {
        title: "Audio & voice",
        body: "Custom voices, voiceovers, podcast scripts, music, sound design.",
        icon: "microphone" as const,
      },
      {
        title: "Code generation",
        body: "AI dev tools, code completion, internal code assistants for your stack.",
        icon: "code" as const,
      },
      {
        title: "3D & design assets",
        body: "Logos, icons, 3D models, UI mockups, design system variants.",
        icon: "shapes" as const,
      },
    ] as const,
  },

  useCases: {
    description: "Not theoretical these are the GenAI products we ship for real businesses.",
    items: [
      {
        title: "Branded image generation tool",
        body: "For agencies and DTC brands creating visual assets at scale",
        icon: "photo-edit" as const,
      },
      {
        title: "Content factory for SEO",
        body: "Bulk-generate blog drafts & product descriptions, then human-edit",
        icon: "article" as const,
      },
      {
        title: "AI proposal & doc generator",
        body: "For sales teams creating personalized proposals in minutes",
        icon: "clipboard-text" as const,
      },
      {
        title: "Personalized email campaigns",
        body: "Unique email per recipient based on their data & behavior",
        icon: "mail" as const,
      },
      {
        title: "Short-form video at scale",
        body: "Auto-cut TikToks, Reels, Shorts from long-form footage",
        icon: "movie" as const,
      },
      {
        title: "Avatar & voice clones",
        body: "Spokesperson videos in any language without re-shooting",
        icon: "user-circle" as const,
      },
    ] as const,
  },

  deliverables: {
    description: "Production-ready GenAI not just a fancy ChatGPT wrapper.",
    items: [
      { title: "Use-case workshop", body: "Define the right output, the right model, the right pipeline", icon: "target" as const },
      { title: "Prompt engineering", body: "Tuned, tested prompts that produce consistent quality", icon: "writing" as const },
      { title: "Brand style training", body: "Fine-tune outputs to match your voice, look, & tone", icon: "palette" as const },
      { title: "Custom UI / dashboard", body: "A real interface your team will actually use", icon: "layout-dashboard" as const },
      { title: "Safety guardrails", body: "Content filters, watermarking, output review flows", icon: "shield-check" as const },
      { title: "Workflow integrations", body: "Connect to your CMS, Slack, Notion, Shopify, Figma", icon: "plug-connected" as const },
      { title: "Cost optimization", body: "Model selection + caching to keep API spend low", icon: "currency-dollar" as const },
      { title: "Quality monitoring", body: "Track output quality, drift, & user satisfaction", icon: "chart-dots-3" as const },
      { title: "Licensing & compliance", body: "Clarity on what you can commercially use", icon: "certificate" as const },
    ] as const,
  },

  models: {
    description: "We pick the right model for each job no allegiance to one provider.",
    categories: [
      { label: "Text", models: ["GPT-5", "Claude Opus 4.7", "Gemini 2.5", "Llama 4"] as const },
      { label: "Image", models: ["Midjourney", "FLUX", "Stable Diffusion", "DALL·E 3"] as const },
      { label: "Video", models: ["Sora", "Runway Gen-3", "Pika", "Kling"] as const },
      { label: "Audio", models: ["ElevenLabs", "Suno", "Whisper", "Cartesia"] as const },
    ] as const,
  },

  stack: {
    tools: [
      "Next.js",
      "Vercel AI SDK",
      "LangChain",
      "Replicate",
      "Hugging Face",
      "Fal.ai",
      "Modal",
      "Supabase",
      "Cloudflare R2",
      "Stripe Usage Billing",
      "PostHog",
    ] as const,
  },

  howItWorks: {
    description: "GenAI needs extra rigor we prototype before we build, so you see results before committing big.",
    steps: [
      { phaseLabel: "Week 1", num: "01", title: "Discovery", body: "Use case, outputs, success metrics" },
      { phaseLabel: "Week 2", num: "02", title: "Prototype", body: "Working demo, real outputs" },
      { phaseLabel: "Week 3–4", num: "03", title: "Build", body: "UI, integrations, scaling" },
      { phaseLabel: "Week 5", num: "04", title: "Eval", body: "Quality testing, safety, edge cases" },
      { phaseLabel: "Week 6", num: "05", title: "Launch", body: "Deploy + monitoring dashboard" },
    ] as const,
  },

  engagementModels: {
    description: "Every GenAI project is quoted by scope. Three engagement models cover most needs.",
    ctaLabel: "Request a quote →",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "GenAI Sprint",
        duration: "2-week proof of concept",
        features: [
          "Single modality (text / image / video)",
          "Working prototype",
          "5–10 prompt variations",
          "Demo + ROI analysis",
          "Recommendations for v2",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "GenAI Build",
        duration: "4–6 week production build",
        badge: "Most common",
        features: [
          "Full GenAI tool",
          "Brand style training",
          "Custom UI / dashboard",
          "Workflow integrations",
          "Safety & cost monitoring",
          "60-day support",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "GenAI Platform",
        duration: "3+ month partnership",
        features: [
          "Multi-modal product",
          "Fine-tuned models",
          "Self-hosted (optional)",
          "Customer-facing UI",
          "Usage billing & analytics",
          "Dedicated AI engineer",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    introBefore:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days including scope, success metrics, and a fixed all-in price. ",
    introEmphasis: "API costs (OpenAI, Midjourney, Runway, etc.) are estimated and paid separately",
    introAfter: " typically $50–$500/month for early stage, scaling with usage.",
    steps: [
      {
        num: "01",
        title: "Scoping call",
        body: "Free 30-min viability & use case fit.",
      },
      {
        num: "02",
        title: "Custom proposal",
        body: "Scope, timeline, fixed price within 3 days.",
      },
      {
        num: "03",
        title: "Kickoff",
        body: "Discovery sprint within 1–2 weeks.",
      },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "Can I commercially use AI-generated content?",
        a: "In most cases, yes when you use licensed models, follow provider terms, and implement the guardrails we build (watermarking, disclosure, review flows). We document what you can sell, publish, and white-label for your specific outputs and jurisdictions before launch.",
      },
      {
        q: "How much will the API costs be on top of your fee?",
        a: "It depends on modality, volume, and model choice. Early-stage tools often run $50–$500/month; high-volume image or video pipelines scale higher. We estimate ranges in your proposal and optimize with caching, smaller models, and batching so spend stays predictable.",
      },
      {
        q: "Will the output match our brand voice and style?",
        a: "That's a core deliverable not an afterthought. We use brand style guides, few-shot examples, fine-tuning when needed, and human-in-the-loop review so outputs sound and look like you, not generic AI slop.",
      },
      {
        q: "What about copyright, hallucinations, and biased outputs?",
        a: "We address each in the build: licensing clarity for training data and outputs, safety filters and human review for bad generations, and eval suites to catch bias and drift. GenAI is creative we design systems that fail safely when the model is wrong.",
      },
      {
        q: "Do you fine-tune custom models or just use APIs?",
        a: "Most projects start with hosted APIs (OpenAI, Anthropic, Replicate, etc.) for speed and cost. We add fine-tuning, LoRA, or self-hosted models when brand consistency or scale demands it. We'll recommend the leanest path that hits your quality bar.",
      },
      {
        q: "Can I sell the tool you build as a SaaS product?",
        a: "Yes many clients do. We build multi-tenant-ready architectures with usage billing, auth, and admin dashboards when that's the goal. Ownership, licensing, and API pass-through terms are spelled out in your contract up front.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "RAG systems",
        description: "AI grounded in your docs & data perfect when accuracy matters.",
        href: "/artificial-intelligence#capabilities",
        cta: "RAG systems →",
        icon: "database-search" as const,
        iconColor: "var(--red)",
      },
      {
        title: "AI agents",
        description: "Multi-step autonomous workflows that take action, not just generate text.",
        href: "/artificial-intelligence#capabilities",
        cta: "AI agents →",
        icon: "robot" as const,
        iconColor: "var(--red)",
      },
      {
        title: "AI chatbots",
        description: "Conversational AI for customer support, sales, and onboarding.",
        href: "/artificial-intelligence#capabilities",
        cta: "Chatbots →",
        icon: "messages" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Got a ",
    titleEmphasis: "GenAI",
    titleAfter: " idea? Let's build it",
    description:
      "Book a free 30-minute call. We'll evaluate feasibility, recommend the right models, and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
