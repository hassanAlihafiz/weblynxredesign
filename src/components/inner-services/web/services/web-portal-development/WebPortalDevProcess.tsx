import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  { week: "Week 1", num: "01", title: "Discovery", detail: "Roles, workflows, data" },
  { week: "Week 2", num: "02", title: "Architecture", detail: "DB schema, auth, security" },
  { week: "Week 3", num: "03", title: "Design", detail: "UI, flows per role" },
  { week: "Week 4–8", num: "04", title: "Build", detail: "Auth, dashboards, APIs" },
  { week: "Week 9", num: "05", title: "QA & security", detail: "Pen testing, load tests" },
  { week: "Week 10", num: "06", title: "Launch", detail: "Deploy, training, monitoring" },
] as const;

export function WebPortalDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From kickoff to launch in <span className="text-[var(--red)]">6 phases</span>
        </h2>
        <p className="mb-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Portals are bigger than typical sites, extra time on planning, security, and testing pays off.
        </p>

        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 list-none">
          {steps.map(({ week, num, title, detail }) => (
            <li key={num} className="border-l-2 border-[var(--red)] py-0.5 pl-2">
              <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{week}</p>
              <p className="mb-1 text-lg font-bold leading-none text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{detail}</p>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </section>
  );
}
