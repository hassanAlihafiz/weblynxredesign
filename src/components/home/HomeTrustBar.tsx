import { IconBuildingSkyscraper } from "@tabler/icons-react";
import { SectionEyebrow } from "./SectionEyebrow";

const logoSlots = [0, 1, 2, 3, 4] as const;

export function HomeTrustBar() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-5 shadow-[var(--shadow-inset-soft)]">
      <div className="text-center">
        <SectionEyebrow className="mb-2.5">SECTION 2 — TRUST BAR (CLIENT LOGOS)</SectionEyebrow>
      </div>
      <div className="flex flex-wrap items-center justify-around gap-3 sm:gap-4">
        {logoSlots.map((i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-[var(--border-radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] p-2.5 shadow-[var(--shadow-sm)] ring-1 ring-white/[0.03] transition-shadow hover:shadow-[var(--shadow-md)]"
          >
            <IconBuildingSkyscraper
              className="size-6 text-[var(--color-text-secondary)]"
              stroke={1.25}
              aria-hidden
            />
          </div>
        ))}
      </div>
    </section>
  );
}
