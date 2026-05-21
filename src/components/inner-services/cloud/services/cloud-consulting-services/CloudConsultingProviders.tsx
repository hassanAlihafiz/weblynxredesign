import { IconBrandAws, IconBrandAzure, IconBrandGoogle, type TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_CONSULTING_SERVICES_PAGE, type CloudConsultingProviderIconId } from "@/data/site";

const providerIcons: Record<CloudConsultingProviderIconId, TablerIcon> = {
  aws: IconBrandAws,
  google: IconBrandGoogle,
  azure: IconBrandAzure,
};

const { providers } = CLOUD_CONSULTING_SERVICES_PAGE;

export function CloudConsultingProviders() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Three major clouds <span className="text-[var(--red)]">Provider-neutral</span> advice
        </h2>
        <p className="mb-5 max-w-md text-balance text-lg leading-relaxed text-[var(--text-muted)] sm:text-sm sm:leading-relaxed">
          {providers.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {providers.items.map(({ name, body, bestFor, icon, accentColor }) => {
            const Icon = providerIcons[icon];
            return (
              <article
                key={name}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4"
              >
                <div className="mb-2.5 flex items-center gap-2">
                  <Icon className="size-[22px] shrink-0" style={{ color: accentColor }} stroke={1.5} aria-hidden />
                  <h3 className="text-sm font-semibold text-[var(--text)]">{name}</h3>
                </div>
                <p className="mb-2 text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  Best for · {bestFor.join(" · ")}
                </p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
