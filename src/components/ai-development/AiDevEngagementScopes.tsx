import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const tiers = [
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
] as const;

export function AiDevEngagementScopes() {
  return (
    <section
      id="engagements"
      className="scroll-mt-24 w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
        <h2 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Find the engagement <span className="text-[var(--red)]">that fits</span>
        </h2>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Every AI project is quoted based on scope. Three engagement models cover most needs.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map(({ featured, label, title, timeline, items }) => (
            <article
              key={label}
              className={`relative flex flex-col rounded-[var(--border-radius-md)] p-5 shadow-[var(--shadow-xs)] ${
                featured
                  ? "border-2 border-[var(--red)] bg-[linear-gradient(180deg,rgba(230,57,70,0.05),transparent)] pt-6"
                  : "border border-[var(--border-subtle)] bg-[var(--bg-elev)]"
              }`}
            >
              {featured ? (
                <span className="absolute -top-3 left-5 rounded-full bg-[var(--red)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[var(--text)]">
                  Most common
                </span>
              ) : null}
              <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-dim)]">
                {label}
              </p>
              <h3 className="mb-1 text-lg font-semibold text-[var(--text)]">{title}</h3>
              <p className="mb-4 text-xs text-[var(--text-muted)]">{timeline}</p>
              <ul className="mb-6 list-none space-y-1.5 border-t border-[var(--border-subtle)] pt-4 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
                {items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                href="#quote"
                className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-[var(--red)] transition-colors hover:opacity-90 sm:text-sm"
              >
                Request a quote
                <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
