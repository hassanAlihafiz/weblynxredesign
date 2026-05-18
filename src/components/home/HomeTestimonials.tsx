import { ContentContainer } from "@/components/layout/ContentContainer";
const testimonials = [
  {
    quote:
      "Weblynx delivered our MVP in six weeks exactly what we needed to close our seed round.",
    initials: "SC",
    avatarBg: "var(--red)" as const,
    name: "Sara Chen",
    role: "Founder, Acme SaaS",
  },
  {
    quote: "Site speed went from 4 seconds to under one. Conversions doubled within a month.",
    initials: "MK",
    avatarBg: "var(--blue)" as const,
    name: "Marcus King",
    role: "CEO, NorthBrand",
  },
] as const;

const cardClassName =
  "rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-6 sm:p-8";

export function HomeTestimonials() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-20">
      <ContentContainer>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map(({ quote, initials, avatarBg, name, role }) => (
          <figure key={name} className={cardClassName}>
            <div
              className="mb-4 font-serif text-5xl italic leading-none text-[var(--red)]"
              aria-hidden
            >
              &ldquo;
            </div>
            <blockquote className="mb-6 font-serif text-xl leading-relaxed text-[var(--text)]">
              {quote}
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-[var(--text)]"
                style={{ background: avatarBg }}
                aria-hidden
              >
                {initials}
              </div>
              <div>
                <div className="text-sm font-medium text-[var(--text)]">{name}</div>
                <div className="text-xs text-[var(--text-muted)]">{role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
