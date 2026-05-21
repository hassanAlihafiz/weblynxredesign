import { ContentContainer } from "@/components/layout/ContentContainer";
import { APP_DEVELOPMENT_PAGE, TECH_STACKS } from "@/data/site";

const { tech } = APP_DEVELOPMENT_PAGE;

export function AppDevTechChips() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-8 shadow-[var(--shadow-inset-soft)] sm:py-9 md:py-10">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Modern tools we <span className="text-[var(--red)]">ship with</span>
        </h1>
        <div className="flex flex-wrap gap-2">
          {TECH_STACKS.appDevelopment.map((label) => (
            <span key={label} className="chip">
              {label}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
