import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import type { ReactNode } from "react";

export type FinalCtaSectionProps = {
  /** Dashed mono label above the headline (centered). */
  sectionMarker?: string;
  title: ReactNode;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
  id?: string;
};

export function FinalCtaSection({
  title,
  description,
  ctaLabel,
  ctaHref,
  className = "",
  id,
}: FinalCtaSectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-t border-[var(--border-subtle)] px-6 sm:px-8 lg:px-10 py-14 text-center md:py-20 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 dot-bg" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[min(700px,140vw)] -translate-x-1/2 -translate-y-1/2 rounded-full red-glow"
        aria-hidden
      />

      <div className="relative z-10">

        <h2 className="mx-auto mb-6 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-7xl">
          {title}
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          {description}
        </p>

        <Link href={ctaHref} className="btn-primary px-8 py-4 text-base">
          {ctaLabel}
          <IconArrowRight className="size-5 shrink-0" stroke={1.5} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
