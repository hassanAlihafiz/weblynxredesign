"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
  {
    q: "How many design concepts will I see?",
    a: "Typically 2–3 distinct directions in the Explore phase. We present mood boards and initial concepts, then refine the direction you choose. Essentials includes 2 rounds; Brand system and Full studio include 3.",
  },
  {
    q: "How many rounds of revisions are included?",
    a: "It depends on the engagement: Essentials includes 2 revision rounds, Brand system includes 3, and Full studio scopes revisions per milestone. We define what counts as a round in your proposal so there are no surprises.",
  },
  {
    q: "Do I get the source files (Figma, Illustrator)?",
    a: "Yes. Every project includes editable Figma files and exported assets in the formats you need. Brand guidelines document how to use everything. You own the work we create for you once final payment is complete.",
  },
  {
    q: "Can you redesign my existing brand instead of starting fresh?",
    a: "Absolutely. We audit what you have, keep what works, and evolve the rest. Many clients come to us for a refresh rather than a full rebrand — we scope accordingly so you do not lose equity you have already built.",
  },
  {
    q: "Will the design work across web, mobile, and print?",
    a: "Yes. We design with application in mind — responsive web, native mobile patterns, and print-ready exports where needed. Brand system and Full studio engagements explicitly include cross-channel templates and specs.",
  },
] as const;

export function DesignFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Things people ask <span className="text-[var(--red)]">before starting</span>
        </h2>

        <div className="overflow-hidden rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)]">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            return (
              <div key={q} className="border-b border-[var(--border-subtle)] last:border-b-0">
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-[var(--bg-elev)]"
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
                    <p className="border-t border-[var(--border-subtle)] px-4 pb-4 pt-3 text-base leading-relaxed text-[var(--text-muted)]">
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
