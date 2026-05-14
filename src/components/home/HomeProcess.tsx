import { SectionEyebrow } from "./SectionEyebrow";

const steps = [
  { n: "01", title: "Discovery", text: "Audit + strategy call" },
  { n: "02", title: "Design", text: "Wireframe to prototype" },
  { n: "03", title: "Build", text: "Develop, test, refine" },
  { n: "04", title: "Launch", text: "Ship + grow" },
] as const;

export function HomeProcess() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-9 shadow-[var(--shadow-inset-soft)]">
      <SectionEyebrow className="mb-3.5">SECTION 5 — PROCESS</SectionEyebrow>
      <h2 className="mb-4 text-xl font-medium">How we work</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ n, title, text }) => (
          <div
            key={n}
            className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--color-primary-border)] hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="text-lg font-semibold tabular-nums text-[var(--color-text-info)] drop-shadow-[0_0_12px_rgba(251,44,54,0.35)]">
              {n}
            </div>
            <div className="mt-2 text-xs font-medium">{title}</div>
            <p className="text-[11px] leading-snug text-[var(--color-text-secondary)]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
