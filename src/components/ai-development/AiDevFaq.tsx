"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
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
] as const;

export function AiDevFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Things founders ask <span className="text-[var(--red)]"> before starting</span>
        </h2>

        <div className="overflow-hidden rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)]">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            return (
              <div key={q} className="border-b border-[var(--border-subtle)] last:border-b-0">
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-[var(--bg-elev)] sm:p-5"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-base font-medium text-[var(--text)]">{q}</span>
                  {isOpen ? (
                    <IconMinus className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  ) : (
                    <IconPlus className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  )}
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[var(--border-subtle)] px-4 pb-4 pt-3 text-sm leading-relaxed text-[var(--text-muted)] sm:px-5 sm:pb-5 sm:pt-4 sm:text-base">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
