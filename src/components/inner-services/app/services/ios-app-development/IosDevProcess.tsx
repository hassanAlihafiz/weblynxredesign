import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  { week: "Week 1", num: "01", title: "Discovery", detail: "Scope, features, target devices" },
  { week: "Week 2–3", num: "02", title: "Design", detail: "HIG-compliant mockups, prototype" },
  { week: "Week 4–7", num: "03", title: "Build", detail: "Develop, weekly TestFlight" },
  { week: "Week 8", num: "04", title: "Beta & QA", detail: "External TestFlight, device QA" },
  { week: "Week 9", num: "05", title: "Launch", detail: "Submit + App Store live" },
] as const;

export function IosDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From kickoff to App Store in <span className="text-[var(--red)]">5 steps</span>
        </h2>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          A clear rhythm with TestFlight beta checkpoints built in.
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
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
