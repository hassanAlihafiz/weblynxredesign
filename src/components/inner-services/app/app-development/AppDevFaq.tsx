"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
  {
    q: "React Native vs native which should I choose?",
    a: "React Native is ideal when you need both iOS and Android from one codebase, faster iteration, and lower cost. Fully native makes sense for heavy graphics, niche platform APIs, or when you already maintain separate teams. We recommend RN for most MVPs and scale-ups.",
  },
  {
    q: "Who owns the App Store / Play Store accounts?",
    a: "You own the accounts. We publish under your org and hand over full credentials, certificates, and signing keys. If you prefer, we can walk you through creating accounts first.",
  },
  {
    q: "What if Apple or Google rejects my app?",
    a: "We iterate on feedback, update metadata or binaries as needed, and resubmit until approval included during the agreed launch window for standard scope.",
  },
  {
    q: "Do you offer post-launch maintenance?",
    a: "Yes. Most teams pick a monthly retainer for bug fixes, OS updates, store compliance, and small features. We can quote retainers after launch.",
  },
  {
    q: "Can you redesign or rebuild my existing app?",
    a: "Yes. We audit the current codebase or design, propose a migration or rebuild plan, and ship in phases so you are not stuck without a release channel.",
  },
] as const;

export function AppDevFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-10 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Things founders ask <span className="text-[var(--red)]">before starting</span>
        </h2>

        <div className="overflow-hidden rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-0">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            return (
              <div key={q} className="border-b border-[var(--border-subtle)] last:border-b-0">
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full items-center text-left justify-between gap-4 p-5 transition-colors hover:bg-[var(--bg-elev)]"
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
                    <p className="border-t border-[var(--border-subtle)] px-5 pb-5 pt-4 text-base leading-relaxed text-[var(--text-muted)]">
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
