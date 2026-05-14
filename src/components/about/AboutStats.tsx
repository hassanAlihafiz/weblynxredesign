import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const stats = [
  { value: "2024", label: "Founded" },
  { value: "12+", label: "Projects shipped" },
  { value: "4", label: "Countries served" },
  { value: "100%", label: "Client retention" },
] as const;

export function AboutStats() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-10 sm:py-12">
      <SectionEyebrow className="mb-3.5">SECTION 6 — BY THE NUMBERS</SectionEyebrow>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] px-3 py-4 shadow-[var(--shadow-sm)] sm:px-4"
          >
            <div className="text-2xl font-medium tabular-nums text-[var(--color-text-primary)] drop-shadow-[0_0_12px_rgba(251,44,54,0.15)] sm:text-[28px]">
              {value}
            </div>
            <div className="mt-0.5 text-[11px] text-[var(--color-text-secondary)]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
