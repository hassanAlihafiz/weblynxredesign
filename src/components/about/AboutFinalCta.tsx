import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export function AboutFinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-background-secondary)] via-[var(--color-surface-muted)] to-[var(--color-background-primary)] py-12 text-center text-[var(--color-text-primary)] shadow-[0_-12px_40px_rgba(0,0,0,0.35)] sm:py-14">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-border)] to-transparent opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-[0.06] blur-3xl"
        aria-hidden
      />
      <div className="relative z-10">
        <p className="mb-3 text-[11px] tracking-[0.5px] text-[var(--color-text-tertiary)]">SECTION 8 — CTA</p>
        <h2 className="mb-2 text-[22px] font-medium tracking-tight">Like the way we think?</h2>
        <p className="mb-4 text-[13px] text-[var(--color-text-secondary)]">Let&apos;s build something together.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-1 rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-5 py-2.5 text-xs font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary-lg)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px"
        >
          Start a project
          <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
