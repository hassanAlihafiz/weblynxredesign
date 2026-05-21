/**
 * Copy and structured content for the Natural Language Processing page (`/natural-language-processing`).
 */

export type NlpHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type NlpCapabilityIconId =
  | "mood-smile"
  | "tags"
  | "category"
  | "file-summary"
  | "language"
  | "microphone"
  | "search"
  | "target";

export type NlpIndustryIconId =
  | "headset"
  | "scale"
  | "stethoscope"
  | "currency-dollar"
  | "briefcase"
  | "shopping-bag"
  | "news"
  | "message-circle-search";

export type NlpDeliverableIconId =
  | "target"
  | "database"
  | "brain"
  | "adjustments"
  | "api"
  | "test-pipe"
  | "bolt"
  | "chart-dots-3"
  | "currency-dollar";

export type NlpRelatedIconId = "database-search" | "messages" | "sparkles";

export const NATURAL_LANGUAGE_PROCESSING_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "AI Development", href: "/artificial-intelligence" },
      { label: "Natural Language Processing" },
    ] as const,
    description:
      "Custom NLP systems that read, classify, extract, translate, and analyze text turning unstructured language into structured business value.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See capabilities", href: "#capabilities" },
    stats: [
      { value: "95%+", label: "Avg accuracy" },
      { value: "100+", label: "Languages supported" },
      { value: "M+", label: "Docs per pipeline" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "You have thousands or millions of documents, tickets, or messages to analyze",
      "You need to extract structured data from unstructured text at scale",
      "You want to automate text-heavy operations (support, legal, research)",
      "You need consistent text analysis across multiple languages",
    ] as const,
    callout: {
      title: "NLP needs the right scale to be worth it",
      bodyBeforeRag:
        "If you have less than ~1,000 documents to process, a simple LLM prompt or ",
      rag: { label: "RAG system", href: "/artificial-intelligence#capabilities" },
      bodyAfter:
        " may be cheaper. NLP shines when you're processing thousands or millions of texts repeatedly.",
    },
  },

  capabilities: {
    sectionId: "capabilities",
    description: "Each capability stands alone or combines with the rest into a complete text intelligence system.",
    items: [
      {
        title: "Sentiment analysis",
        body: "Detect emotion, tone, and satisfaction across reviews, tickets, chats.",
        icon: "mood-smile" as const,
      },
      {
        title: "Entity extraction",
        body: "Pull people, companies, places, dates, amounts from any document.",
        icon: "tags" as const,
      },
      {
        title: "Classification",
        body: "Auto-route, tag, or label text by topic, intent, urgency, or category.",
        icon: "category" as const,
      },
      {
        title: "Summarization",
        body: "Turn long documents, calls, or threads into concise summaries.",
        icon: "file-summary" as const,
      },
      {
        title: "Translation",
        body: "High-quality translation across 100+ languages, with brand voice intact.",
        icon: "language" as const,
      },
      {
        title: "Speech-to-text",
        body: "Transcribe audio & video with speaker labels and timestamps.",
        icon: "microphone" as const,
      },
      {
        title: "Semantic search",
        bodyBefore: "Find what users ",
        bodyEmphasis: "mean",
        bodyAfter: ", not just what they typed. Vector-based search.",
        icon: "search" as const,
      },
      {
        title: "Intent detection",
        body: "Understand what users want request, complaint, lead, churn risk.",
        icon: "target" as const,
      },
    ] as const,
  },

  industries: {
    description: "NLP isn't theoretical these are the production systems we ship for real businesses.",
    items: [
      {
        title: "Support & CX",
        body: "Auto-tag tickets, detect sentiment, route by urgency",
        icon: "headset" as const,
      },
      {
        title: "Legal & contracts",
        body: "Extract clauses, dates, parties, risk flags from contracts",
        icon: "scale" as const,
      },
      {
        title: "Healthcare",
        body: "Process clinical notes, extract diagnoses, codify reports",
        icon: "stethoscope" as const,
      },
      {
        title: "Finance",
        body: "Parse earnings calls, sentiment of news, KYC documents",
        icon: "currency-dollar" as const,
      },
      {
        title: "HR & recruitment",
        body: "Parse resumes, match to JDs, screen at scale",
        icon: "briefcase" as const,
      },
      {
        title: "Ecommerce & retail",
        body: "Review analysis, product tagging, voice-of-customer",
        icon: "shopping-bag" as const,
      },
      {
        title: "Media & publishing",
        body: "Auto-summarize articles, tag content, detect topics",
        icon: "news" as const,
      },
      {
        title: "Social listening",
        body: "Track brand mentions, detect crises, find trends",
        icon: "message-circle-search" as const,
      },
    ] as const,
  },

  deliverables: {
    description: "Production-grade NLP infrastructure not a Jupyter notebook prototype.",
    items: [
      { title: "Use-case mapping", body: "Define what to extract, classify, or analyze", icon: "target" as const },
      { title: "Data prep & cleaning", body: "Tokenization, normalization, deduplication", icon: "database" as const },
      { title: "Model selection", body: "LLM vs. specialized NLP vs. fine-tuned", icon: "brain" as const },
      { title: "Fine-tuning if needed", body: "Custom training on your domain data", icon: "adjustments" as const },
      { title: "Pipeline API", body: "REST endpoint your apps can call", icon: "api" as const },
      { title: "Accuracy testing", body: "Benchmarks, precision, recall, F1 scores", icon: "test-pipe" as const },
      { title: "Throughput & scaling", body: "Built to process millions of docs reliably", icon: "bolt" as const },
      { title: "Quality monitoring", body: "Track drift, errors, accuracy over time", icon: "chart-dots-3" as const },
      { title: "Cost optimization", body: "Smart batching to keep API spend low", icon: "currency-dollar" as const },
    ] as const,
  },

  languages: {
    description:
      "Modern NLP models handle most major languages well we benchmark accuracy per language during scoping.",
    tiers: [
      {
        label: "Tier 1 · Near-perfect",
        languages: "English · Spanish · French · German · Portuguese · Italian · Dutch",
      },
      {
        label: "Tier 2 · Excellent",
        languages: "Chinese · Japanese · Arabic · Hindi · Korean · Russian · Turkish · Urdu",
      },
      {
        label: "Tier 3 · Strong",
        languages: "Vietnamese · Thai · Indonesian · Swahili · Polish · Greek · Hebrew · 80+ more",
      },
    ] as const,
  },

  stack: {
    tools: [
      "OpenAI GPT",
      "Anthropic Claude",
      "Hugging Face",
      "spaCy",
      "NLTK",
      "Sentence-Transformers",
      "Pinecone",
      "pgvector",
      "Whisper",
      "FastAPI",
      "Modal",
      "LangSmith",
    ] as const,
  },

  howItWorks: {
    description: "NLP needs rigor on data quality and accuracy testing we get it right before scaling.",
    steps: [
      { phaseLabel: "Week 1", num: "01", title: "Discovery", body: "Use case, data audit, target metrics" },
      { phaseLabel: "Week 2", num: "02", title: "Prototype", body: "Pipeline on sample, baseline accuracy" },
      { phaseLabel: "Week 3–5", num: "03", title: "Build", body: "Production pipeline, API, scale" },
      { phaseLabel: "Week 6", num: "04", title: "Evaluate", body: "Precision, recall, F1 on test set" },
      { phaseLabel: "Week 7", num: "05", title: "Deploy", body: "Live API + monitoring dashboard" },
    ] as const,
  },

  engagementModels: {
    description: "Every NLP project is quoted by scope, data size, and accuracy requirements.",
    ctaLabel: "Request a quote →",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "NLP Sprint",
        duration: "2-week proof of concept",
        features: [
          "Single capability",
          "LLM-based prototype",
          "Up to 10k documents",
          "Accuracy benchmark report",
          "Recommendations for v2",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "NLP Pipeline",
        duration: "6–8 week production build",
        badge: "Most common",
        features: [
          "Multi-capability pipeline",
          "Production API endpoint",
          "Up to 1M documents",
          "Quality monitoring",
          "Multilingual if needed",
          "60-day support",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "NLP Platform",
        duration: "3+ month partnership",
        features: [
          "Custom fine-tuned models",
          "Enterprise SLAs",
          "10M+ documents / month",
          "Self-hosted (optional)",
          "Continuous re-training",
          "Dedicated NLP engineer",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    introBefore:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days including pipeline architecture, accuracy targets, and a fixed all-in price. ",
    introEmphasis: "Model API costs (OpenAI, Anthropic, etc.) are estimated and paid separately",
    introAfter: " typically $50–$2,000/month depending on volume.",
    steps: [
      { num: "01", title: "Scoping call", body: "Free 30-min on data, goals, accuracy." },
      { num: "02", title: "Custom proposal", body: "Scope, accuracy targets within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery sprint within 1–2 weeks." },
    ] as const,
  },

  faq: {
    items: [
      {
        q: "What's the difference between NLP and an LLM API?",
        a: "An LLM API is a general-purpose model you prompt per request great for one-off tasks. NLP is a production pipeline tuned for your data: consistent labels, batch throughput, accuracy benchmarks, and cost controls at scale. We use LLMs inside NLP when they fit; we add specialized models, fine-tuning, and orchestration when you need repeatable results on millions of documents.",
      },
      {
        q: "How accurate will the system be?",
        a: "It depends on the task, data quality, and language. During scoping we set target metrics (precision, recall, F1, or human-eval agreement) and validate on a held-out test set before launch. Most production pipelines land in the 90–97% range for well-defined tasks; we document tradeoffs when perfect accuracy isn't realistic.",
      },
      {
        q: "Do you need labeled training data?",
        a: "Not always. Many projects start with few-shot LLM classification or zero-shot extraction, then add labels only where accuracy or cost demands it. When fine-tuning pays off, we help you label efficiently (active learning, weak supervision) and use the smallest labeled set that hits your target.",
      },
      {
        q: "How do you handle data privacy and PII?",
        a: "We design pipelines with your compliance requirements in mind: PII detection and redaction, regional data residency, VPC or self-hosted deployment, and contracts that keep your text out of model training. Sensitive workloads can run entirely on your infrastructure with no data sent to third-party APIs.",
      },
      {
        q: "Can the pipeline run on our own infrastructure?",
        a: "Yes common for regulated industries. We deploy to your cloud (AWS, GCP, Azure) or on-prem with Docker/Kubernetes, optional GPU nodes, and private model endpoints. The same REST API contract works whether we host or you do.",
      },
      {
        q: "What if my domain language is highly specialized?",
        a: "Legal, medical, engineering, and internal jargon are where fine-tuning and domain-specific embeddings shine. We evaluate baseline accuracy on your sample corpus in week one, then recommend fine-tuning, custom vocab, or hybrid rules + ML when off-the-shelf models fall short.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "RAG systems",
        description: "Question-answering grounded in your own knowledge base.",
        href: "/artificial-intelligence#capabilities",
        cta: "RAG systems →",
        icon: "database-search" as const,
        iconColor: "var(--red)",
      },
      {
        title: "AI chatbots",
        description: "Conversational interfaces that use NLP for intent & understanding.",
        href: "/artificial-intelligence#capabilities",
        cta: "Chatbots →",
        icon: "messages" as const,
        iconColor: "var(--red)",
      },
      {
        title: "Generative AI",
        description: "From text understanding to text generation, image, and video.",
        href: "/generative-ai",
        cta: "Generative AI →",
        icon: "sparkles" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Got ",
    titleEmphasis: "mountains",
    titleAfter: " of text to make sense of?",
    description:
      "Book a free 30-minute call. We'll evaluate your data and use case, and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
