import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_DEVELOPMENT_PAGE } from "@/data/site";

const { process } = WEB_DEVELOPMENT_PAGE;

export function WebDevProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From kickoff to <span className="text-[var(--red)]">launch</span> in 4 steps
        </h1>
        <div className="grid gap-6 md:grid-cols-4">
          {process.steps.map(({ week, num, title, body }) => (
            <div key={num} className="border-l-2 border-[var(--red)] pl-4">
              <div className="text-meta mb-2">{week}</div>
              <div className="step-num mb-2">{num}</div>
              <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
