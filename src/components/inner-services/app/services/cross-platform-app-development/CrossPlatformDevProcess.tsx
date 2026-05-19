import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  { week: "Week 1", num: "01", title: "Discovery", detail: "Scope, features, framework choice" },
  { week: "Week 2", num: "02", title: "Design", detail: "UI/UX, both-platform mockups" },
  { week: "Week 3–6", num: "03", title: "Build", detail: "Develop, weekly beta on both stores" },
  { week: "Week 7", num: "04", title: "QA & Beta", detail: "Real device testing, both platforms" },
  { week: "Week 8", num: "05", title: "Launch", detail: "Submit to App Store + Play Store" },
] as const;

export function CrossPlatformDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From kickoff to both stores in <span className="text-[var(--red)]">5 steps</span>
        </h2>
        <p className="mb-6 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Slightly faster than native because one codebase, one team, one delivery.
        </p>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map(({ week, num, title, detail }) => (
            <div key={num} className="border-l-2 border-[var(--red)] p-2.5">
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
