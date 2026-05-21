import {
  IconCreditCard,
  IconShieldCheck,
  IconStethoscope,
  IconWorldCheck,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_CONSULTING_SERVICES_PAGE, type CloudConsultingComplianceIconId } from "@/data/site";

const complianceIcons: Record<CloudConsultingComplianceIconId, TablerIcon> = {
  "shield-check": IconShieldCheck,
  stethoscope: IconStethoscope,
  "credit-card": IconCreditCard,
  "world-check": IconWorldCheck,
};

const { compliance } = CLOUD_CONSULTING_SERVICES_PAGE;

export function CloudConsultingCompliance() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Built audit-ready <span className="text-[var(--red)]">not bolted-on later</span>
        </h2>
        <p className="mb-5 max-w-md text-balance text-lg leading-relaxed text-[var(--text-muted)] sm:text-sm sm:leading-relaxed">
          {compliance.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {compliance.items.map(({ title, body, icon }) => {
            const Icon = complianceIcons[icon];
            return (
              <article
                key={title}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3.5 py-3.5 text-center"
              >
                <div className="mx-auto mb-2.5 flex size-9 items-center justify-center rounded-full bg-[rgba(230,57,70,0.12)]">
                  <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
