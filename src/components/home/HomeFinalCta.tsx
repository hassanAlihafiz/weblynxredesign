import { IconArrowRight } from "@tabler/icons-react";

export function HomeFinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-background-secondary)] via-[var(--color-surface-muted)] to-[var(--color-background-primary)] py-12 text-center text-[var(--color-text-primary)] shadow-[0_-12px_40px_rgba(0,0,0,0.35)] sm:py-14">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-border)] to-transparent opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--color-primary)] opacity-[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-[var(--color-primary)] opacity-[0.05] blur-3xl"
        aria-hidden
      />
      <div className="relative z-10">
        <p className="mb-3 text-[11px] tracking-[0.5px] text-[var(--color-text-tertiary)]">
          SECTION 7 — FINAL CTA
        </p>
        <h2 className="mb-2 text-[22px] font-medium tracking-tight drop-shadow-[0_2px_24px_rgba(251,44,54,0.08)]">
          Ready to build something great?
        </h2>
        <p className="mb-4 text-[13px] text-[var(--color-text-secondary)]">
          Book a free 30-minute strategy call
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-1 rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-5 py-2.5 text-xs font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary-lg)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px"
        >
          Schedule a call
          <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
        </a>
      </div>
    </section>
  );
}
