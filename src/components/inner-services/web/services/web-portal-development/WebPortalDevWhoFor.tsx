import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_PORTAL_DEV_PAGE } from "@/data/site";
import { WebPortalDevSectionHeading } from "./WebPortalDevSectionHeading";

const { whoFor } = WEB_PORTAL_DEV_PAGE;

export function WebPortalDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <WebPortalDevSectionHeading heading={whoFor.heading} className="mb-5" />

        <div className="grid gap-2.5 sm:grid-cols-2">
          {whoFor.reasons.map((text) => (
            <div
              key={text}
              className="flex items-start gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] px-4 py-3.5"
            >
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base leading-relaxed text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
