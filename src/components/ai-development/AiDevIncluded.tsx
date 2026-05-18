import type { TablerIcon } from "@tabler/icons-react";
import {
  IconChartDots3,
  IconCurrencyDollar,
  IconShieldCheck,
  IconTarget,
  IconVector,
  IconWriting,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const items: { title: string; body: string; icon: TablerIcon }[] = [
  {
    title: "AI use-case audit",
    body: "What AI can/can't solve for your business",
    icon: IconTarget,
  },
  {
    title: "Prompt engineering",
    body: "Reliable prompts that don't break in production",
    icon: IconWriting,
  },
  {
    title: "Safety & guardrails",
    body: "Hallucination control, content filtering, fallbacks",
    icon: IconShieldCheck,
  },
  {
    title: "Vector DB setup",
    body: "Pinecone or Supabase pgvector embeddings",
    icon: IconVector,
  },
  {
    title: "Eval & monitoring",
    body: "Track quality, cost, latency in production",
    icon: IconChartDots3,
  },
  {
    title: "Cost optimization",
    body: "Model selection & caching to lower API spend",
    icon: IconCurrencyDollar,
  },
];

export function AiDevIncluded() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every AI project <span className="text-[var(--red)]">includes</span>
        </h2>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Production-grade AI, not just an OpenAI wrapper.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg)] p-4 shadow-[var(--shadow-xs)] sm:p-5"
            >
              <Icon className="mb-2 size-5 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
              <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
