import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const outlets = ["Awwwards", "CSS Design", "Product Hunt", "Clutch.co", "Behance"] as const;

export function AboutRecognition() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-8 shadow-[var(--shadow-inset-soft)] sm:py-10">
      <div className="text-center">
        <SectionEyebrow className="mb-2.5">SECTION 7 — FEATURED IN / RECOGNITION</SectionEyebrow>
      </div>
      <div className="flex flex-wrap items-center justify-around gap-3 opacity-60 sm:gap-3.5">
        {outlets.map((name) => (
          <span
            key={name}
            className="rounded-[var(--border-radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-raised)] px-3 py-2 text-xs font-medium text-[var(--color-text-secondary)] shadow-[var(--shadow-xs)]"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
