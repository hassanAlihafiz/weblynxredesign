import { ContentContainer } from "@/components/layout/ContentContainer";
import { HOME_PAGE } from "@/data/site";

const { process } = HOME_PAGE;

export function HomeProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>
        <h2 className="text-balance max-w-3xl font-sans text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-[var(--text)] mb-10 md:text-5xl">
          The same <span className="text-[var(--red)]">rhythm</span> every project
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map(({ week, n, title, text }) => (
            <div key={n} className="relative">
              <div className="text-meta mb-2">
                {week}
              </div>
              <div className="mb-3 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
                {n}
              </div>
              <h3 className="mb-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{text}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
