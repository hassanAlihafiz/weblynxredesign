import { IconArrowRight } from "@tabler/icons-react";
import { SectionEyebrow } from "./SectionEyebrow";

export function HomeHero() {
  return (
    <section className="relative border-b border-[var(--color-border-tertiary)] py-12 text-center shadow-[var(--shadow-inset-soft)] sm:py-14">
      <SectionEyebrow className="mb-3 text-center">SECTION 1 — HERO</SectionEyebrow>
      <h1 className="mx-auto mb-2.5 max-w-[480px] text-balance text-3xl font-medium leading-tight tracking-tight drop-shadow-[0_2px_28px_rgba(251,44,54,0.12)] sm:text-4xl sm:leading-tight">
        We build fast, scalable web apps for SaaS startups
      </h1>
      <p className="mx-auto mb-[18px] max-w-[380px] text-sm leading-relaxed text-[var(--color-text-secondary)]">
        Custom Next.js development that ships in weeks, not months. Trusted by founders from seed to
        Series B.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <a
          href="#"
          className="rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-4 py-2 text-xs font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px"
        >
          Start a project
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-1 rounded-[var(--border-radius-md)] border border-[var(--color-border-secondary)] bg-[var(--color-surface-muted)] px-4 py-2 text-xs text-[var(--color-text-primary)] shadow-[var(--shadow-sm)] ring-1 ring-[var(--color-border-subtle)] transition-all hover:border-[var(--color-primary-border)] hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-md)]"
        >
          See our work
          <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
        </a>
      </div>
    </section>
  );
}
