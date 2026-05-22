import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_SUPPORT_AND_MAINTENANCE_PAGE } from "@/data/site";

const { onboarding } = CLOUD_SUPPORT_AND_MAINTENANCE_PAGE;

export function CloudSupportOnboarding() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance text-6xl font-bold leading-tight tracking-[-0.02em] text-[var(--text)]">
          From handover to full covered in <span className="text-[var(--red)]">4 weeks</span>
        </h2>
        <p className="mb-5 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
          {onboarding.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {onboarding.steps.map(({ week, num, title, body }) => (
            <article key={num} className="border-l-3 border-[var(--red)] pl-2.5">
              <p className="mb-1 text-sm font-medium uppercase tracking-wide text-[var(--text-dim)]">
                {week}
              </p>
              <p className="mb-1.5 text-4xl font-semibold text-[var(--red)]">
                {num}
              </p>
              <h3 className="mb-1.5 text-xl font-semibold text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
