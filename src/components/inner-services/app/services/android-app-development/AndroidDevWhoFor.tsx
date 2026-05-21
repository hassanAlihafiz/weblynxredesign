import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ANDROID_APP_DEV_PAGE } from "@/data/site";

const { whoFor } = ANDROID_APP_DEV_PAGE;

export function AndroidDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-9 sm:py-10 md:py-[2.25rem]">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably need <span className="text-[var(--red)]">native Android</span> if...
        </h1>

        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {whoFor.reasons.map((text) => (
            <div key={text} className="flex items-start gap-3">
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base font-medium text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-[10px] border border-[var(--border)] bg-[var(--bg-elev)] px-[18px] py-4">
          <IconInfoCircle className="mt-px size-[18px] shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
          <div>
            <p className="mb-1 text-base font-medium text-[var(--text)]">{whoFor.callout.title}</p>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              {whoFor.callout.bodyBefore}
              <Link
                href={whoFor.callout.link.href}
                className="text-[var(--red)] underline underline-offset-2 transition-opacity hover:opacity-90"
              >
                {whoFor.callout.link.label}
              </Link>
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
