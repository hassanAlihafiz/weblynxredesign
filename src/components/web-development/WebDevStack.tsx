import { ContentContainer } from "@/components/layout/ContentContainer";
import { TECH_STACKS } from "@/data/site";

export function WebDevStack() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-8 shadow-[var(--shadow-inset-soft)] sm:py-9 md:py-10">
      <ContentContainer>
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Our stack
      </p>
      <h2 className="mb-6 max-w-2xl font-sans text-2xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-3xl">
        Modern tools we ship with
      </h2>
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
