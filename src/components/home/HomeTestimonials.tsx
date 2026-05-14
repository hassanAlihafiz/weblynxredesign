import { IconCircleLetterM, IconCircleLetterS } from "@tabler/icons-react";
import { SectionEyebrow } from "./SectionEyebrow";

const quotes = [
  {
    quote:
      "Weblynx delivered our MVP in 6 weeks — exactly what we needed to close our seed round.",
    AvatarIcon: IconCircleLetterS,
    name: "Sara Chen",
    role: "Founder, Acme SaaS",
  },
  {
    quote: "Site speed went from 4s to 0.8s. Conversions doubled within a month.",
    AvatarIcon: IconCircleLetterM,
    name: "Marcus King",
    role: "CEO, NorthBrand",
  },
] as const;

export function HomeTestimonials() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-9">
      <SectionEyebrow className="mb-3.5">SECTION 6 — TESTIMONIALS</SectionEyebrow>
      <div className="grid gap-3 sm:grid-cols-2">
        {quotes.map(({ quote, AvatarIcon, name, role }) => (
          <figure
            key={name}
            className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--color-primary-border)] hover:shadow-[var(--shadow-card-hover)]"
          >
            <blockquote className="mb-2.5 text-xs italic leading-relaxed text-[var(--color-text-primary)]">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-2">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-soft)] shadow-[var(--shadow-xs)] ring-1 ring-[var(--color-primary-border)] text-[var(--color-text-info)]">
                <AvatarIcon className="size-8" stroke={1.25} aria-hidden />
              </span>
              <div>
                <div className="text-[11px] font-medium">{name}</div>
                <div className="text-[10px] text-[var(--color-text-secondary)]">{role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
