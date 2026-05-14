import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const steps = [
  { week: "Week 1", n: "01", title: "Discover", detail: "Strategy call & scope" },
  { week: "Week 2", n: "02", title: "Design", detail: "Concepts & prototype" },
  { week: "Weeks 3–5", n: "03", title: "Build", detail: "Develop & iterate" },
  { week: "Week 6", n: "04", title: "Launch", detail: "Ship & support" },
] as const;

export function ServicesProcess() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <SectionEyebrow className="mb-4 sm:mb-5">SECTION 4 — HOW WE WORK</SectionEyebrow>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        Our process
      </p>
      <h2 className="mb-5 text-xl font-medium leading-snug tracking-tight sm:text-[22px]">
        The same rhythm, every project
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:gap-4 lg:grid-cols-4">
        {steps.map(({ week, n, title, detail }) => (
          <div key={n} className="min-w-0">
            <p className="mb-1 text-[11px] text-[var(--color-text-tertiary)]">{week}</p>
            <p className="text-xl font-medium text-[var(--color-text-info)]">{n}</p>
            <h3 className="mt-1 text-[13px] font-medium leading-snug">{title}</h3>
            <p className="mt-0.5 text-[11px] leading-relaxed text-[var(--color-text-secondary)]">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
