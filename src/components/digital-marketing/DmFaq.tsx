"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";

const faqs = [
  {
    q: "How long until I see results from SEO?",
    a: "Most teams see meaningful traction in 3–6 months depending on competition and site health. We set milestones at 30 / 60 / 90 days so progress is visible early.",
  },
  {
    q: "Do I need to commit to a long contract?",
    a: "Each tier has a minimum term (3, 6, or 12 months) so we can invest properly in compounding work. After that, plans renew month-to-month unless you prefer another term.",
  },
  {
    q: "Is ad spend included in the retainer?",
    a: "Retainers cover strategy, management, and reporting. Media spend is billed directly to your ad accounts so you keep ownership and full transparency.",
  },
  {
    q: "Who owns the ad accounts and tracking data?",
    a: "You do. We build and optimize in accounts you own, with shared access. All tracking and dashboards stay in your properties.",
  },
  {
    q: "Can I just hire you for SEO, or just for ads?",
    a: "Yes. Starter is built for a single-channel focus. We can expand scope anytime as priorities change.",
  },
] as const;

export function DmFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-t border-[var(--border-subtle)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
          Common questions
        </p>
        <h2 className="mb-10 text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
          Before you reach out
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
      </div>
    </section>
  );
}
