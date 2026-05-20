import { ContentContainer } from "@/components/layout/ContentContainer";
import { HOME_PAGE } from "@/data/site";
import { HomeSectionHeading } from "./HomeSectionHeading";

const { process } = HOME_PAGE;

export function HomeProcess() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>
        <HomeSectionHeading heading={process.heading} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map(({ week, n, title, text }) => (
            <div key={n} className="relative">
              <div className="mb-2 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-dim)]">
                {week}
              </div>
              <div className="mb-3 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
                {n}
              </div>
              <h4 className="mb-2 font-medium text-[var(--text)]">{title}</h4>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{text}</p>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
