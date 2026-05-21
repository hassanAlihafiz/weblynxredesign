import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_CONSULTING_SERVICES_PAGE } from "@/data/site";

const { whoFor } = CLOUD_CONSULTING_SERVICES_PAGE;

export function CloudConsultingWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-9 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-md text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably need <span className="text-[var(--red)]">cloud consulting</span> if...
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

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-[var(--red-glow)] bg-[var(--bg-elev)] px-4 py-4">
          <IconInfoCircle className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
          <div>
            <p className="mb-1 text-sm font-semibold text-[var(--text)]">{whoFor.callout.title}</p>
            <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-sm sm:leading-relaxed">
              {whoFor.callout.body}
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
