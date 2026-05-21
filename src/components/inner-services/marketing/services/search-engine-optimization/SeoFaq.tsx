"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_OPTIMIZATION_PAGE } from "@/data/site";

const { faq } = SEARCH_ENGINE_OPTIMIZATION_PAGE;

export function SeoFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          The <span className="text-[var(--red)]">SEO client</span> ask before starting
        </h2>

        <div className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)]">
          {faq.items.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            const isLast = i === faq.items.length - 1;

            return (
              <div key={q} className={isLast ? "" : "border-b border-[var(--border-subtle)]"}>
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--bg-elev)]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-sm font-semibold text-text">{q}</span>
                  {isOpen ? (
                    <IconMinus className="size-4 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
                  ) : (
                    <IconPlus className="size-4 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
                  )}
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[var(--border-subtle)] px-5 pb-4 pt-3 text-sm leading-relaxed text-text-muted">
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
