import { ContentContainer } from "@/components/layout/ContentContainer";
import { APP_DEVELOPMENT_PAGE } from "@/data/site";

const { process } = APP_DEVELOPMENT_PAGE;

export function AppDevProcessSteps() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h1 className="mb-10 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From idea to <span className="text-[var(--red)]">App Store</span> in 5 steps
        </h1>
        <div className="grid gap-4 md:grid-cols-5">
          {process.steps.map(({ week, num, title, detail }) => (
            <div key={num} className="border-l-2 border-[var(--red)] pl-3">
              <div className="text-meta mb-1">{week}</div>
              <div className="mb-2 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
                {num}
              </div>
              <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{detail}</p>  
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
