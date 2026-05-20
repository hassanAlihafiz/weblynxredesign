"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ECOMMERCE_WEB_DEV_PAGE } from "@/data/site";
import { EcommerceWebDevSectionHeading } from "./EcommerceWebDevSectionHeading";

const { faq } = ECOMMERCE_WEB_DEV_PAGE;

export function EcommerceWebDevFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);
  const items = faq.items;
  const lastIndex = items.length - 1;

  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <EcommerceWebDevSectionHeading heading={faq.heading} />

        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--color-background-primary)]">
          {items.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            const isLast = i === lastIndex;

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
