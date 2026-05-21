import { ContentContainer } from "@/components/layout/ContentContainer";
import { TECH_STACKS, WEB_DEVELOPMENT_PAGE } from "@/data/site";

const { stack } = WEB_DEVELOPMENT_PAGE;

export function WebDevStack() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-8 shadow-[var(--shadow-inset-soft)] sm:py-9 md:py-10">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Modern tools we <span className="text-[var(--red)]">ship with</span>
        </h1>
        <div className="flex flex-wrap gap-2">
          {TECH_STACKS.webDevelopment.map((name) => (
            <span key={name} className="chip">
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
