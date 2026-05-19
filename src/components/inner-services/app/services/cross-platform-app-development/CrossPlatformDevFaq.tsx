"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
  {
    q: "Will users notice it's not native?",
    a: "For most business apps SaaS, ecommerce, content, social no. Modern React Native and Flutter deliver near-native performance and platform-adaptive UI. Users notice when you need heavy 3D, AR, or deep OS integrations; we'll flag that on your scoping call.",
  },
  {
    q: "React Native vs Flutter which one will you pick?",
    a: "React Native when you have a web/React team or want JS/TS everywhere. Flutter when pixel-perfect, identical UI across devices matters most. We recommend one on your scoping call based on your team, timeline, and product not preference.",
  },
  {
    q: "How is performance compared to native?",
    a: "Typically ~95% of native for standard CRUD, lists, and navigation. Animations and complex gestures are very close on modern stacks. Gaming, heavy AR, and intensive real-time graphics are where native still wins.",
  },
  {
    q: "Can I add native features later if I need to?",
    a: "Yes. Both React Native and Flutter support native modules Swift/Kotlin bridges for camera, BLE, payments, or platform-specific SDKs. We architect with extension points so you're not locked in.",
  },
  {
    q: "What are OTA updates and why do they matter?",
    a: "Over-the-air updates (via Expo EAS or similar) let you push JavaScript/asset changes without waiting for App Store or Play Store review ideal for bug fixes and small UI tweaks. Store policy still requires native binary updates for major changes.",
  },
  {
    q: "Who owns both store accounts and the codebase?",
    a: "You do. We build in your Git repos and publish under your Apple Developer and Google Play accounts. You get full source, credentials handoff, and documentation at launch.",
  },
] as const;

export function CrossPlatformDevFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Things cross-platform clients <span className="text-[var(--red)]">ask</span>
        </h2>

        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elev)]">
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
                  className="flex w-full items-center justify-between gap-4 px-[18px] py-4 text-left transition-colors hover:bg-[var(--bg-elev)]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-sm font-medium text-[var(--text)]">{q}</span>
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
                    <p className="border-t border-[var(--border)] px-[18px] pb-4 pt-3 text-base leading-relaxed text-[var(--text-muted)]">
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
