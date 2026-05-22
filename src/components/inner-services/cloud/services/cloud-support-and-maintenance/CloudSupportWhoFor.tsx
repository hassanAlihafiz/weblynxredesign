import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_SUPPORT_AND_MAINTENANCE_PAGE } from "@/data/site";

const { whoFor } = CLOUD_SUPPORT_AND_MAINTENANCE_PAGE;

export function CloudSupportWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-9 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          You probably want <span className="text-[var(--red)]">cloud support</span> if...
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {whoFor.bullets.map((text) => (
            <div
              key={text}
              className="flex items-start gap-2.5 p-4"
            >
              <IconCheck className="mt-px size-6 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base leading-relaxed text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[var(--red-glow)] bg-[var(--bg-elev)] p-4">
          <IconInfoCircle className="mt-px size-6 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
          <div>
            <p className="mb-1 text-base font-medium text-[var(--text)]">{whoFor.callout.title}</p>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              {whoFor.callout.bodyBefore}
              <Link
                href={whoFor.callout.consultingLink.href}
                className="text-[var(--red)] underline underline-offset-2 hover:opacity-90"
              >
                {whoFor.callout.consultingLink.label}
              </Link>
              {whoFor.callout.bodyAfter}
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
