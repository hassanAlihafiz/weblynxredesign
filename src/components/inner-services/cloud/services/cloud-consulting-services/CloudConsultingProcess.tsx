import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_CONSULTING_SERVICES_PAGE } from "@/data/site";

const { howItWorks } = CLOUD_CONSULTING_SERVICES_PAGE;

export function CloudConsultingProcess() {
  return (
    <section
      id="approach"
      className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11"
    >
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          From audit to <span className="text-[var(--red)]">optimized cloud</span> in 5 phases
        </h2>
        <p className="mb-5 max-w-md text-balance text-lg leading-relaxed text-[var(--text-muted)] sm:mb-6 sm:text-sm sm:leading-relaxed">
          {howItWorks.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {howItWorks.steps.map(({ phaseLabel, num, title, body }) => (
            <article key={num} className="border-l-2 border-[var(--red)] py-0.5 pl-2.5">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">{phaseLabel}</p>
              <p className="mb-1 font-sans text-4xl font-bold leading-none text-[var(--red)]">{num}</p>
              <h3 className="mb-1 text-sm font-semibold text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
