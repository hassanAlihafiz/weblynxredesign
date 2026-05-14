import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const tiles = [
  {
    title: "Finlytics SaaS",
    meta: "Web · +40% conversion",
    bg: "bg-[#CECBF6]",
    fg: "text-[#3C3489]",
  },
  {
    title: "Trekr App",
    meta: "App · 12k installs",
    bg: "bg-[#9FE1CB]",
    fg: "text-[#085041]",
  },
  {
    title: "Lumen Beauty",
    meta: "Marketing · +320% traffic",
    bg: "bg-[#FAC775]",
    fg: "text-[#633806]",
  },
] as const;

export function ServicesFeaturedWork() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <SectionEyebrow className="mb-4 sm:mb-5">SECTION 5 — FEATURED WORK</SectionEyebrow>
      <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
            Recent results
          </p>
          <h2 className="text-lg font-medium leading-snug tracking-tight sm:text-xl">Work across all four services</h2>
        </div>
        <Link
          href="/work"
          className="inline-flex shrink-0 items-center gap-0.5 self-start text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] sm:self-auto"
        >
          View all
          <IconArrowRight className="size-3.5" stroke={1.5} aria-hidden />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-3 lg:gap-2.5">
        {tiles.map(({ title, meta, bg, fg }) => (
          <article key={title} className="min-w-0">
            <div
              className={`flex h-[100px] items-center justify-center rounded-[var(--border-radius-md)] text-[10px] font-medium ${bg} ${fg}`}
            >
              Screenshot
            </div>
            <p className="mt-1.5 text-[11px] font-medium leading-snug">{title}</p>
            <p className="text-[10px] text-[var(--color-text-secondary)]">{meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
