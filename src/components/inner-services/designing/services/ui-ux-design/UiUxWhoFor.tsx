import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { UI_UX_DESIGN_PAGE } from "@/data/site";

const { whoFor } = UI_UX_DESIGN_PAGE;

export function UiUxWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-9 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably need <span className="text-[var(--red)]">UI/UX design</span> if...
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {whoFor.bullets.map((text) => (
            <div
              key={text}
              className="flex items-start gap-2.5 px-4 py-3.5"
            >
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-sm leading-relaxed text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-[var(--red)] bg-[var(--bg-elev)] px-4 py-4">
          <IconInfoCircle className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
          <div>
            <p className="mb-1 text-base font-semibold text-[var(--text)]">{whoFor.callout.title}</p>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {whoFor.callout.bodyBefore}
              <em>{whoFor.callout.emphasis}</em>
              {whoFor.callout.bodyAfterEmphasis}
              <Link
                href={whoFor.callout.webDesign.href}
                className="text-[var(--red)] underline underline-offset-2 hover:opacity-90"
              >
                {whoFor.callout.webDesign.label}
              </Link>
              {whoFor.callout.bodyMiddle}
              <Link
                href={whoFor.callout.brandIdentity.href}
                className="text-[var(--red)] underline underline-offset-2 hover:opacity-90"
              >
                {whoFor.callout.brandIdentity.label}
              </Link>
              {whoFor.callout.bodyAfter}
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
