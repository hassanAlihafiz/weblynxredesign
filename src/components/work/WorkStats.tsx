import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "8", label: "Happy clients" },
  { value: "4", label: "Countries" },
  { value: "100%", label: "On-time delivery" },
] as const;

export function WorkStats() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] px-6 sm:px-8 lg:px-10 py-9 sm:py-10 md:py-11 shadow-[var(--shadow-inset-soft)]">
      <SectionEyebrow className="mb-3 !text-[var(--color-text-tertiary)] sm:mb-4">
        SECTION 5 — IMPACT NUMBERS
      </SectionEyebrow>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-3">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-[var(--border-radius-lg)] bg-[var(--color-background-primary)] px-3 py-4 text-center shadow-[var(--shadow-card)]"
          >
            <div className="text-xl font-medium tabular-nums">{value}</div>
            <div className="mt-1 text-base text-[var(--color-text-secondary)]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
