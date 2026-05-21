import { IconCheck } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { DIGITAL_MARKETING_PAGE } from "@/data/site";

const { whoFor } = DIGITAL_MARKETING_PAGE;

export function DmWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably <span className="text-[var(--red)]">need SEO</span> if...
        </h2>
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
