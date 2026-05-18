"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Marketing and landing sites often ship in 1–3 weeks. Custom web apps and MVPs usually land in 4–8 weeks depending on auth, integrations, and admin needs. Larger platforms are scoped in phases you always get a week-by-week plan in the proposal.",
  },
  {
    q: "Do you provide hosting and ongoing maintenance?",
    a: "Yes. We deploy to Vercel or your stack of choice, wire up DNS and SSL, and can stay on for monitoring, updates, and new features. Post-launch care is optional but most teams keep us on a light retainer or milestone basis.",
  },
  {
    q: "Can you redesign my existing site?",
    a: "Absolutely. We audit what you have, preserve URLs and SEO where it matters, and rebuild on a modern stack usually Next.js so you get speed, better UX, and a codebase you can grow with.",
  },
  {
    q: "What's your payment structure?",
    a: "We work on fixed-price milestones: a deposit to start, a midpoint payment tied to an agreed demo or deliverable, and a final payment before launch. No open-ended hourly billing unless you explicitly want a time-and-materials phase.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Share yours before the scoping call or ask for ours we're used to reviewing product and roadmap details under NDA.",
  },
] as const;

export function WebDevFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer className="max-w-3xl">
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Common questions
        </p>
        <h2 className="mb-10 text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
          Things people ask before starting
        </h2>

        <div className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-0">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            return (
              <div key={q} className="border-b border-[var(--border-subtle)] last:border-b-0">
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-[var(--bg-elev)]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-sm font-medium text-[var(--text)]">{q}</span>
                  {isOpen ? (
                    <IconMinus className="size-5 shrink-0 text-[var(--text-muted)]" stroke={1.5} aria-hidden />
                  ) : (
                    <IconPlus className="size-5 shrink-0 text-[var(--text-muted)]" stroke={1.5} aria-hidden />
                  )}
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[var(--border-subtle)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--text-muted)]">
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
