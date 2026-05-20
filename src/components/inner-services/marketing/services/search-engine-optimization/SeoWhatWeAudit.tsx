import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_OPTIMIZATION_PAGE } from "@/data/site";

const { whatWeAudit } = SEARCH_ENGINE_OPTIMIZATION_PAGE;

export function SeoWhatWeAudit() {
  return (
    <section className="w-full bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          {whatWeAudit.heading.before}
          <span className="text-[var(--red)]">{whatWeAudit.heading.emphasis}</span>
          {whatWeAudit.heading.after}
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">{whatWeAudit.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {whatWeAudit.items.map((text) => (
            <div
              key={text}
              className="flex items-start gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] px-4 py-3.5"
            >
              <IconCheck className="mt-px size-6 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base leading-relaxed text-text">{text}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
