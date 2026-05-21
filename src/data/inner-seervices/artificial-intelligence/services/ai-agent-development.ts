/**
 * Copy and structured content for the AI Agent Development page (`/ai-agent-development`).
 */

export type AiAgentHeading = {
  before: string;
  emphasis: string;
  after: string;
};

export type AiAgentTypeIconId =
  | "search"
  | "mail-forward"
  | "headset"
  | "clipboard-text"
  | "code"
  | "users-group";

export type AiAgentDeliverableIconId =
  | "route"
  | "brain"
  | "tools"
  | "database"
  | "user-check"
  | "shield-check"
  | "chart-dots-3"
  | "history"
  | "layout-dashboard";

export type AiAgentSafetyIconId = "lock-square" | "hand-stop" | "gauge" | "eye";

export type AiAgentRelatedIconId = "bolt" | "database-search" | "messages";

export const AI_AGENT_DEVELOPMENT_PAGE = {
  hero: {
    breadcrumb: [
      { label: "Services", href: "/service" },
      { label: "AI Development", href: "/artificial-intelligence" },
      { label: "AI Agents" },
    ] as const,
    description:
      "Custom AI agents that plan, decide, and execute multi-step workflows across your tools autonomously, reliably, and with humans in the loop where it matters.",
    primaryCta: { label: "Request a quote", href: "/contact" },
    secondaryCta: { label: "See agent types", href: "#agent-types" },
    stats: [
      { value: "−80%", label: "Manual work cut" },
      { value: "24/7", label: "Autonomous run" },
      { value: "4–8", label: "Week build" },
    ] as const,
  },

  whoFor: {
    bullets: [
      "Your team does repetitive multi-step workflows across tools every day",
      {
        textBefore: "You want AI to actually ",
        emphasis: "do",
        textAfter: " things research, write, send, schedule",
      },
      "You've tried Zapier or n8n and hit limits where the work needs judgment",
      "You need a 24/7 digital worker that scales without hiring",
    ] as const,
    callout: {
      title: "Agents are powerful and require careful guardrails",
      bodyBefore:
        "For deterministic, single-step tasks, plain ",
      automation: { label: "automation", href: "/artificial-intelligence" },
      bodyAfter:
        " is cheaper and safer. Agents make sense when the work needs reasoning, decisions, or adapts to context.",
    },
  },

  agentTypes: {
    sectionId: "agent-types",
    description: "Each agent solves a different shape of problem. Most production systems use 2–3 patterns together.",
    items: [
      {
        title: "Research agents",
        body: "Browse web, read docs, gather data, write reports. For market intel, lead enrichment, due diligence.",
        icon: "search" as const,
      },
      {
        title: "Sales & outreach",
        body: "Identify leads, personalize emails, follow up, log to CRM, book meetings.",
        icon: "mail-forward" as const,
      },
      {
        title: "Support agents",
        body: "Triage tickets, look up data, draft responses, escalate when needed.",
        icon: "headset" as const,
      },
      {
        title: "Ops agents",
        body: "Process invoices, onboard customers, sync data between tools, run reports.",
        icon: "clipboard-text" as const,
      },
      {
        title: "Coding agents",
        body: "Write code, run tests, open PRs, review changes. Internal dev acceleration.",
        icon: "code" as const,
      },
      {
        title: "Multi-agent systems",
        body: "Multiple agents coordinating planner, researcher, writer, reviewer for complex tasks.",
        icon: "users-group" as const,
      },
    ] as const,
  },

  tools: {
    descriptionBefore: "Agents become useful when they can ",
    descriptionEmphasis: "act",
    descriptionAfter: " in real tools, not just chat. We wire them into your existing stack.",
    categories: [
      { label: "Communication", tools: "Gmail · Outlook · Slack · Discord · WhatsApp · SMS" },
      { label: "Calendar & meetings", tools: "Google Cal · Outlook · Calendly · Zoom · Meet" },
      { label: "CRM & sales", tools: "HubSpot · Salesforce · Pipedrive · Apollo · Clay" },
      { label: "Docs & storage", tools: "Notion · Google Drive · Dropbox · Airtable" },
      { label: "Data & analytics", tools: "Postgres · BigQuery · Snowflake · Mixpanel" },
      { label: "Web & search", tools: "Web browsing · SerpAPI · Tavily · Exa search" },
      { label: "Support & ticketing", tools: "Zendesk · Intercom · Freshdesk · Linear · Jira" },
      { label: "Custom APIs", tools: "Your internal systems · Webhooks · OpenAPI · MCP" },
    ] as const,
  },

  deliverables: {
    description: "Production-grade agents with guardrails, evals, and observability not a demo that breaks in week 2.",
    items: [
      { title: "Workflow mapping", body: "Define decisions, steps, tools, edge cases", icon: "route" as const },
      { title: "Reasoning engine", body: "ReAct, plan-and-execute, or graph-based", icon: "brain" as const },
      { title: "Tool integrations", body: "Connections to your existing stack", icon: "tools" as const },
      { title: "Memory & context", body: "Short-term + long-term memory layers", icon: "database" as const },
      { title: "Human-in-the-loop", body: "Approval gates for high-stakes actions", icon: "user-check" as const },
      { title: "Guardrails & safety", body: "Rate limits, scopes, action filters", icon: "shield-check" as const },
      { title: "Eval & monitoring", body: "Track success rate, cost, latency in production", icon: "chart-dots-3" as const },
      { title: "Audit trail", body: "Every action logged for review & compliance", icon: "history" as const },
      { title: "Control dashboard", body: "Start, stop, configure, and review your agent", icon: "layout-dashboard" as const },
    ] as const,
  },

  safety: {
    description: "Autonomous agents only work in production with layered guardrails. Every system we build has all four.",
    items: [
      {
        num: "01",
        title: "Scoped permissions",
        body: "Agents can only access tools and data you explicitly grant. No surprises.",
        icon: "lock-square" as const,
      },
      {
        num: "02",
        title: "Approval gates",
        body: "High-stakes actions (sending external email, payments, deletions) require human approval.",
        icon: "hand-stop" as const,
      },
      {
        num: "03",
        title: "Rate limits & budgets",
        body: "Hard caps on actions per hour and API spend per day no runaway agents.",
        icon: "gauge" as const,
      },
      {
        num: "04",
        title: "Full observability",
        body: "Every decision, tool call, and outcome logged with full traces. You can audit anything.",
        icon: "eye" as const,
      },
    ] as const,
  },

  howItWorks: {
    description: "Agents need extra rigor we prove the workflow works before turning autonomy up.",
    steps: [
      { phaseLabel: "Week 1", num: "01", title: "Discovery", body: "Map workflow, tools, success metrics" },
      { phaseLabel: "Week 2", num: "02", title: "Prototype", body: "Working agent on 1–2 tools, dry run" },
      { phaseLabel: "Week 3–5", num: "03", title: "Build", body: "Full tools, memory, guardrails" },
      { phaseLabel: "Week 6", num: "04", title: "Eval & supervise", body: "Shadow mode with human approval" },
      { phaseLabel: "Week 7–8", num: "05", title: "Deploy", body: "Live agent + monitoring dashboard" },
    ] as const,
  },

  engagementModels: {
    description: "Every agent project is quoted based on complexity, tools, and autonomy required.",
    ctaLabel: "Request a quote →",
    ctaHref: "/contact",
    tiers: [
      {
        code: "Engagement 01",
        name: "Agent Sprint",
        duration: "2-week proof of concept",
        features: [
          "Single-purpose agent",
          "1–2 tool integrations",
          "Working prototype",
          "Demo + ROI analysis",
          "Recommendations for v2",
        ] as const,
        highlighted: false,
      },
      {
        code: "Engagement 02",
        name: "Agent Build",
        duration: "6–8 week production build",
        badge: "Most common",
        features: [
          "Full production agent",
          "5–10 tool integrations",
          "Memory + guardrails",
          "Human-in-the-loop UI",
          "Eval & monitoring",
          "60-day support",
        ] as const,
        highlighted: true,
      },
      {
        code: "Engagement 03",
        name: "Agent Platform",
        duration: "3+ month partnership",
        features: [
          "Multi-agent system",
          "Unlimited integrations",
          "Customer-facing agents",
          "Self-hosted (optional)",
          "Continuous improvement",
          "Dedicated AI engineer",
        ] as const,
        highlighted: false,
      },
    ] as const,
  },

  howWeQuote: {
    introBefore:
      "After a 30-minute scoping call, we send a detailed proposal within 3 business days including workflow map, autonomy boundaries, and a fixed all-in price. ",
    introEmphasis: "Model API costs (Claude, GPT, etc.) are estimated and paid separately",
    introAfter:
      "agents typically run $100–$2,000/month depending on volume.",
    steps: [
      { num: "01", title: "Scoping call", body: "Free 30-min on workflow, tools, autonomy." },
      { num: "02", title: "Custom proposal", body: "Scope, timeline, fixed price within 3 days." },
      { num: "03", title: "Kickoff", body: "Discovery sprint within 1–2 weeks." },
    ] as const,
  },

  stack: {
    tools: [
      "Claude Agent SDK",
      "OpenAI Agents SDK",
      "LangGraph",
      "LangChain",
      "MCP (Model Context Protocol)",
      "Vercel AI SDK",
      "Inngest",
      "Temporal",
      "LangSmith",
      "Pinecone",
      "Supabase",
      "Modal",
    ] as const,
  },

  faq: {
    items: [
      {
        q: "What's the difference between an AI agent and a chatbot?",
        a: "A chatbot answers questions in a conversation. An agent plans multi-step work, uses your tools (email, CRM, calendar, APIs), and completes tasks end-to-end. Many production systems combine both users chat, the agent acts.",
      },
      {
        q: "Why not just use Zapier or Make?",
        a: "Zapier and Make excel at deterministic, single-path automation. Agents make sense when steps need judgment, branching, unstructured input, or adapting to context like triaging support tickets, researching leads, or deciding which follow-up to send.",
      },
      {
        q: "What happens if the agent makes a mistake?",
        a: "We design for safe failure: scoped permissions, approval gates on high-stakes actions, rate limits, full audit trails, and shadow mode before full autonomy. You can pause, roll back, or require human sign-off on anything sensitive.",
      },
      {
        q: "Can the agent access my private data and customer info?",
        a: "Only what you explicitly grant. We scope tool access per workflow, support VPC and self-hosted deployment for regulated data, and never train on your customer data without contract clarity. PII handling and retention policies are defined in scoping.",
      },
      {
        q: "How autonomous should an agent really be?",
        a: "Start with human-in-the-loop or shadow mode, then increase autonomy as accuracy proves out. We map autonomy boundaries in week one which actions run automatically vs. need approval so you control risk while still cutting manual work.",
      },
      {
        q: "Can the agent improve over time?",
        a: "Yes. Production agents include eval suites, feedback loops, and prompt or policy updates from real runs. Platform engagements add continuous improvement we monitor success rate, cost, and edge cases and refine the agent on a regular cadence.",
      },
    ] as const,
  },

  related: {
    items: [
      {
        title: "AI automation",
        description: "For deterministic, no-judgment workflows. Cheaper and simpler than agents.",
        href: "/artificial-intelligence",
        icon: "bolt" as const,
        iconColor: "var(--red)",
      },
      {
        title: "RAG systems",
        description: "Give your agent grounded knowledge from your docs & data.",
        href: "/artificial-intelligence#capabilities",
        icon: "database-search" as const,
        iconColor: "var(--red)",
      },
      {
        title: "AI chatbots",
        description: "Conversational front-end for your agents users chat, agents act.",
        href: "/artificial-intelligence#capabilities",
        icon: "messages" as const,
        iconColor: "var(--red)",
      },
    ] as const,
  },

  finalCta: {
    id: "quote",
    titleBefore: "Got a workflow",
    titleEmphasis: "worth automating",
    titleAfter: "?",
    description:
      "Book a free 30-minute call. We'll map your workflows, recommend the right architecture, and send a proposal within 3 days.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
} as const;
