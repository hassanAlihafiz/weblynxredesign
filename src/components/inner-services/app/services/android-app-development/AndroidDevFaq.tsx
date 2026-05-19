"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
  {
    q: "Should I go native Android or use cross-platform?",
    a: "Choose native Android when you need deep hardware access, Wear OS or TV targets, or Android-first markets. Cross-platform (React Native) saves 40–50% when you need iOS and Android together. We'll recommend the right path on your scoping call.",
  },
  {
    q: "Do I need to test on every Android device?",
    a: "No. We test on a curated matrix of popular devices and OS versions that match your audience typically 8–12 devices covering Samsung, Pixel, and one budget OEM. Firebase Test Lab extends coverage for critical releases.",
  },
  {
    q: "Which Android version should we target as minimum?",
    a: "We usually target API 26 (Android 8.0) or API 28+ for most consumer apps covering 95%+ of active devices. Enterprise or niche apps may go higher; we'll align minimum SDK with your user data and feature needs.",
  },
  {
    q: "Who owns the Play Console account and signing keys?",
    a: "You do. We publish under your Google Play Console org and hand over signing keys, upload certificates, and full account access. We can guide you through account setup if you don't have one yet.",
  },
  {
    q: "What's the Play Store review process like?",
    a: "First review typically takes 3–7 days; updates are often faster. We prepare store listing, screenshots, privacy policy, and content rating. If Google flags an issue, we fix and resubmit as part of the launch window.",
  },
] as const;

export function AndroidDevFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Things Android clients ask <span className="text-[var(--red)]">before starting</span>
        </h2>

        <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-elev)]">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            const isLast = i === faqs.length - 1;

            return (
              <div key={q} className={isLast ? "" : "border-b border-[var(--border)]"}>
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
                    <IconMinus className="size-4 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  ) : (
                    <IconPlus className="size-4 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  )}
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[var(--border)] p-4 text-base leading-relaxed text-[var(--text-muted)]">
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
