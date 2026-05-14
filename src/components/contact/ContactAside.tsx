import Link from "next/link";
import {
  IconArrowRight,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconCalendar,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

export function ContactAside() {
  return (
    <aside className="flex min-w-0 flex-col gap-3.5 sm:gap-4 lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-[var(--border-radius-lg)] bg-[var(--color-primary)] p-4 text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] sm:p-5">
        <IconCalendar className="size-5 opacity-80 sm:size-5" stroke={1.5} aria-hidden />
        <h2 className="my-2 text-sm font-medium sm:text-base">Prefer to talk?</h2>
        <p className="mb-3 text-[11px] leading-relaxed opacity-85 sm:text-xs">
          Skip the form. Book a 30-min strategy call directly.
        </p>
        <Link
          href="#"
          className="flex w-full items-center justify-center gap-1 rounded-[var(--border-radius-md)] bg-[var(--color-background-primary)] px-3 py-2 text-center text-[11px] font-medium text-[var(--color-text-primary)] transition-opacity hover:opacity-90"
        >
          Pick a time
          <IconArrowRight className="size-3 shrink-0" stroke={1.5} aria-hidden />
        </Link>
      </div>

      <div className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-card)] sm:p-4">
        <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
          Or reach us directly
        </p>
        <a
          href="mailto:hello@weblynx.com"
          className="flex items-start gap-2.5 border-b border-[var(--color-border-tertiary)] py-2.5 transition-colors hover:text-[var(--color-primary)]"
        >
          <IconMail className="mt-0.5 size-4 shrink-0 text-[var(--color-text-info)]" stroke={1.5} aria-hidden />
          <div className="min-w-0">
            <div className="text-[11px] text-[var(--color-text-tertiary)]">Email</div>
            <div className="truncate text-xs font-medium">hello@weblynx.com</div>
          </div>
        </a>
        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-2.5 border-b border-[var(--color-border-tertiary)] py-2.5 transition-opacity hover:opacity-90"
        >
          <IconBrandWhatsapp className="mt-0.5 size-4 shrink-0 text-[#25D366]" stroke={1.5} aria-hidden />
          <div className="min-w-0">
            <div className="text-[11px] text-[var(--color-text-tertiary)]">WhatsApp</div>
            <div className="text-xs font-medium">+92 300 1234567</div>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start gap-2.5 py-2.5 transition-opacity hover:opacity-90"
        >
          <IconBrandLinkedin className="mt-0.5 size-4 shrink-0 text-[#0A66C2]" stroke={1.5} aria-hidden />
          <div className="min-w-0">
            <div className="text-[11px] text-[var(--color-text-tertiary)]">LinkedIn</div>
            <div className="text-xs font-medium">@weblynx</div>
          </div>
        </a>
      </div>

      <div className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-sm)] sm:p-4">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
          Where we are
        </p>
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <IconMapPin className="size-3.5 shrink-0 text-[var(--color-text-info)]" stroke={1.5} aria-hidden />
          <span className="text-xs font-medium">Karachi, Pakistan</span>
        </div>
        <p className="text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
          Working remotely with clients across 4 countries · GMT+5
        </p>
      </div>
    </aside>
  );
}
