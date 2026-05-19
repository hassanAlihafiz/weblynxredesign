import { ContentContainer } from "@/components/layout/ContentContainer";
import { TECH_STACKS } from "@/data/site";

export function DesignStack() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Modern <span className="text-[var(--red)]">tools</span> we ship with
        </h2>
        <div className="flex flex-wrap gap-2">
          {TECH_STACKS.design.map((name) => (
            <span key={name} className="chip text-sm">
              {name}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
