import { ContentContainer } from "@/components/layout/ContentContainer";
import { DESIGN_PAGE } from "@/data/site";

const { process } = DESIGN_PAGE;

export function DesignProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From blank page to <span className="text-[var(--red)]">brand book</span> in 5 steps
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {process.steps.map(({ week, num, title, body }) => (
            <div key={num} className="border-l-2 border-[var(--red)] pl-4">
              <div className="text-meta mb-1">{week}</div>
              <div className="step-num mb-2">{num}</div>
              <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">{title}</h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">{body}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
