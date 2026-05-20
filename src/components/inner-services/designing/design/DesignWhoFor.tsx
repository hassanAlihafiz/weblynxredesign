import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { DESIGN_PAGE } from "@/data/site";
import { DesignSectionHeading } from "./DesignSectionHeading";

const { whoFor } = DESIGN_PAGE;

export function DesignWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <DesignSectionHeading heading={whoFor.heading} />
        <div className="grid gap-3 sm:grid-cols-2">
          {whoFor.bullets.map((text) => (
            <div key={text} className="flex items-center gap-3">
              <IconCheck className="mt-1 size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base font-medium text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
