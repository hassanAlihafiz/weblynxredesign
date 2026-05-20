import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SOCIAL_MEDIA_MARKETING_PAGE } from "@/data/site";

const { whoFor } = SOCIAL_MEDIA_MARKETING_PAGE;

export function SmmWhoFor() {
  return (
    <section className="w-full bg-[var(--bg-elev)] py-9 sm:py-10">
      <ContentContainer>
        <h2 className="mb-5 max-w-xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          {whoFor.heading.before}
          <span className="text-[var(--red)]">{whoFor.heading.emphasis}</span>
          {whoFor.heading.after}
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {whoFor.bullets.map((text) => (
            <div
              key={text}
              className="flex items-start gap-3"
            >
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-sm leading-relaxed text-text">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-[10px] border border-[var(--red)] px-[18px] py-4">
          <IconInfoCircle className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
          <div>
            <p className="mb-1 text-sm font-semibold text-text">{whoFor.callout.title}</p>
            <p className="text-sm leading-relaxed text-text-muted">
              {whoFor.callout.bodyBeforeLinks}
              <Link href={whoFor.callout.paidAds.href} className="text-[var(--red)] underline underline-offset-2 hover:text-[var(--red)]/90">
                {whoFor.callout.paidAds.label}
              </Link>
              {" or "}
              <Link href={whoFor.callout.seo.href} className="text-[var(--red)] underline underline-offset-2 hover:text-[var(--red)]/90">
                {whoFor.callout.seo.label}
              </Link>
              .
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
