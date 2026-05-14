import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { SectionEyebrow } from "./SectionEyebrow";

const cases = [
  {
    title: "FinTech Dashboard",
    meta: "Web app · 3 months · +40% conversion",
    placeholder: "Project screenshot",
    bg: "bg-[#CECBF6] text-[#3C3489]",
  },
  {
    title: "DTC Brand Site",
    meta: "Shopify · 6 weeks · 2.5x revenue",
    placeholder: "Project screenshot",
    bg: "bg-[#9FE1CB] text-[#085041]",
  },
] as const;

export function HomeCaseStudies() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-9">
      <SectionEyebrow className="mb-3.5">SECTION 4 — FEATURED WORK</SectionEyebrow>
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-medium">Selected work</h2>
        <Link
          href="/work"
          className="inline-flex items-center gap-0.5 rounded-[var(--border-radius-md)] px-2 py-1 text-xs text-[var(--color-text-secondary)] shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-primary)] hover:shadow-[var(--shadow-sm)]"
        >
          View all
          <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
        </Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {cases.map(({ title, meta, placeholder, bg }) => (
          <article key={title}>
            <div
              className={`flex h-[120px] items-center justify-center rounded-[var(--border-radius-lg)] text-[11px] shadow-[var(--shadow-card)] ring-1 ring-black/20 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)] ${bg}`}
            >
              {placeholder}
            </div>
            <h3 className="mt-2 text-xs font-medium">{title}</h3>
            <p className="text-[11px] text-[var(--color-text-secondary)]">{meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
