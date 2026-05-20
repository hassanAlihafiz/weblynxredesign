import { IconArrowRight, IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { IOS_APP_DEV_PAGE } from "@/data/site";
import { IosDevSectionHeading } from "./IosDevSectionHeading";

const { whoFor } = IOS_APP_DEV_PAGE;

export function IosDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-9 sm:py-10 md:py-[2.25rem]">
      <ContentContainer>
        <IosDevSectionHeading heading={whoFor.heading} className="mb-5" />

        <div className="grid gap-2.5 sm:grid-cols-2">
          {whoFor.reasons.map((text) => (
            <div key={text} className="flex items-start gap-3">
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base font-medium text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4">
          <IconInfoCircle className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
          <div>
            <p className="mb-1 text-base font-medium text-[var(--text)]">{whoFor.callout.title}</p>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              {whoFor.callout.bodyBefore}
              <Link
                href={whoFor.callout.link.href}
                className="inline-flex items-center gap-1 text-[var(--red)] underline underline-offset-2 transition-opacity hover:opacity-90"
              >
                {whoFor.callout.link.label}
                <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
              </Link>
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
