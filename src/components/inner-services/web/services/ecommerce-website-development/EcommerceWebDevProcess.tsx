import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  { week: "Week 1", num: "01", title: "Audit + strategy", detail: "Goals, customers, conversion plan" },
  { week: "Week 2", num: "02", title: "Design", detail: "Storefront + PDP mockups" },
  { week: "Week 3–4", num: "03", title: "Build", detail: "Theme, integrations, checkout" },
  { week: "Week 5", num: "04", title: "Test & QA", detail: "Checkout testing, real orders" },
  { week: "Week 6", num: "05", title: "Launch & grow", detail: "Go live + first month optimization" },
] as const;

export function EcommerceWebDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From kickoff to live store in <span className="text-[var(--red)]">6 weeks</span>
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Built around launching profitably not just launching.
        </p>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map(({ week, num, title, detail }) => (
            <div key={num} className="border-l-2 border-[var(--red)] py-0.5 pl-2.5">
              <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{week}</p>
              <p className="mb-1 text-lg font-bold leading-none text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{detail}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
