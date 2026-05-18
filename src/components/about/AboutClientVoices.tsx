import { ContentContainer } from "@/components/layout/ContentContainer";
const voices = [
  {
    quote:
      "Weblynx delivered our MVP in six weeks. The level of ownership felt like having an in-house team.",
    attribution: "— Sara Chen, Founder, Acme SaaS",
  },
  {
    quote: "Our site went from 4-second loads to under one. Conversions doubled within a month.",
    attribution: "— Marcus King, CEO, NorthBrand",
  },
] as const;

const cardClassName =
  "rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-6 transition-[border-color] duration-200 hover:border-[var(--border)]";

export function AboutClientVoices() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>
      <p className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        What clients say
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {voices.map(({ quote, attribution }) => (
          <figure key={attribution} className={cardClassName}>
            <blockquote className="mb-6 font-serif text-xl italic leading-relaxed text-[var(--text)]">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="text-sm text-[var(--text-muted)]">{attribution}</figcaption>
          </figure>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
