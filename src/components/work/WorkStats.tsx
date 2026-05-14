import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "8", label: "Happy clients" },
  { value: "4", label: "Countries" },
  { value: "100%", label: "On-time delivery" },
] as const;

export function WorkStats() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-9 shadow-[var(--shadow-inset-soft)] sm:py-10 md:py-11">
      <SectionEyebrow className="mb-3.5 !text-[var(--color-text-tertiary)] sm:mb-4">
        SECTION 5 — IMPACT NUMBERS
      </SectionEyebrow>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-4 md:gap-3">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-[var(--border-radius-md)] bg-[var(--color-background-primary)] px-3 py-4 text-center shadow-[var(--shadow-sm)] sm:px-4 sm:py-4"
          >
            <div className="text-xl font-medium tabular-nums sm:text-2xl">{value}</div>
            <div className="mt-1 text-[11px] text-[var(--color-text-secondary)]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
