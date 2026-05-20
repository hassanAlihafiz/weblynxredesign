import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SEARCH_ENGINE_MARKETING_PAGE } from "@/data/site";

const { whoFor } = SEARCH_ENGINE_MARKETING_PAGE;

export function SemWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          {whoFor.heading.before}
          <span className="text-[var(--red)]">{whoFor.heading.emphasis}</span>
          {whoFor.heading.after}
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {whoFor.bullets.map((text) => (
            <div
              key={text}
              className="flex items-start gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] px-4 py-3.5"
            >
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base leading-relaxed text-text">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[var(--red)]/8 px-5 py-4">
          <IconInfoCircle className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
          <div>
            <p className="mb-1 text-base font-semibold text-text">{whoFor.callout.title}</p>
            <p className="text-sm leading-relaxed text-text-muted">
              {whoFor.callout.bodyBeforeLink}
              <Link
                href={whoFor.callout.webDevelopment.href}
                className="text-[var(--red)] underline underline-offset-2 hover:text-[var(--red)]/90"
              >
                {whoFor.callout.webDevelopment.label}
              </Link>
              {whoFor.callout.bodyAfterLink}
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
