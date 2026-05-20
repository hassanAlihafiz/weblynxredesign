import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { APP_DEVELOPMENT_PAGE } from "@/data/site";
import { AppDevSectionHeading } from "./AppDevSectionHeading";

const { whoFor } = APP_DEVELOPMENT_PAGE;

export function AppDevWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <AppDevSectionHeading heading={whoFor.heading} />
        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {whoFor.bullets.map((text) => (
            <div key={text} className="flex items-start gap-3">
              <IconCheck className="mt-1 size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base font-medium text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
