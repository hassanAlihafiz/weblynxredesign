"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
  {
    q: "Should I go native iOS or use cross-platform?",
    a: "Choose native iOS when you need Apple-only frameworks, premium polish, or Vision Pro / Watch targets. Cross-platform (React Native) saves 40–50% when you need iOS and Android together and on modern stacks the iOS experience is very close to native. We'll recommend the right path on your scoping call.",
  },
  {
    q: "Who owns the Apple Developer account?",
    a: "You do. We publish under your Apple Developer Program account and hand over certificates, provisioning profiles, and App Store Connect access. We can walk you through enrollment if you don't have an account yet.",
  },
  {
    q: "What if Apple rejects my app during review?",
    a: "We iterate on Apple's feedback, update metadata or binaries as needed, and resubmit until approval included during the agreed launch window for standard scope.",
  },
  {
    q: "Which iOS version should we target as minimum?",
    a: "We typically target iOS 16 or 17+ for most consumer apps, covering the vast majority of active devices. We'll align minimum deployment with your analytics and feature requirements.",
  },
  {
    q: "SwiftUI or UIKit which should you use?",
    a: "SwiftUI for new apps and most greenfield MVPs faster iteration and Apple's direction. UIKit when you need deep legacy integrations, complex custom UI, or are extending an existing codebase. We pick per project, not dogma.",
  },
] as const;

export function IosDevFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Things iOS clients ask <span className="text-[var(--red)]">before starting</span>
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
