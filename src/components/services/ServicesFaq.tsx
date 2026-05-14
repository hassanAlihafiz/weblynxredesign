"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const faqs = [
  {
    q: "Can I hire you for just one service?",
    a: "Yes. Many clients start with web development or design only. We scope each engagement independently and can expand later.",
  },
  {
    q: "Do you offer bundles across services?",
    a: "We often package design + build, or build + growth, with one timeline and one point of contact. Ask on your intro call and we will tailor a bundle.",
  },
  {
    q: "What's your typical timeline?",
    a: "Most marketing sites ship in 4–6 weeks. Apps and larger SaaS builds vary; we will give a week-by-week plan after discovery.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. We work with teams in the US, UK, EU, and MENA. Calls are async-friendly and we bill in USD.",
  },
] as const;

export function ServicesFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <SectionEyebrow className="mb-4 sm:mb-5">SECTION 7 — FAQ</SectionEyebrow>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        Common questions
      </p>
      <h2 className="mb-5 text-xl font-medium leading-snug tracking-tight sm:text-[22px]">Before you book a call</h2>
      <div className="overflow-hidden rounded-[var(--border-radius-md)] border border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)] shadow-[var(--shadow-card)]">
        {faqs.map(({ q, a }, i) => {
          const isOpen = open === i;
          const panelId = `${baseId}-panel-${i}`;
          const buttonId = `${baseId}-btn-${i}`;
          return (
            <div key={q} className="border-b border-[var(--color-border-tertiary)] last:border-b-0">
              <button
                type="button"
                id={buttonId}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-4"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="text-[13px] font-medium leading-snug">{q}</span>
                {isOpen ? (
                  <IconMinus className="size-3.5 shrink-0 text-[var(--color-text-secondary)]" stroke={1.5} aria-hidden />
                ) : (
                  <IconPlus className="size-3.5 shrink-0 text-[var(--color-text-secondary)]" stroke={1.5} aria-hidden />
                )}
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="px-4 pb-3.5 text-xs leading-relaxed text-[var(--color-text-secondary)] sm:text-[12px] sm:leading-relaxed">
                    {a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
