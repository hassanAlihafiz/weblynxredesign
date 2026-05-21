import {
  IconBook2,
  IconBuildingArch,
  IconChartDots3,
  IconClipboardSearch,
  IconCode,
  IconCurrencyDollar,
  IconGitBranch,
  IconRoute,
  IconShieldLock,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_CONSULTING_SERVICES_PAGE, type CloudConsultingDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<CloudConsultingDeliverableIconId, TablerIcon> = {
  "clipboard-search": IconClipboardSearch,
  blueprint: IconBuildingArch,
  route: IconRoute,
  code: IconCode,
  "git-branch": IconGitBranch,
  "chart-dots-3": IconChartDots3,
  "currency-dollar": IconCurrencyDollar,
  "shield-lock": IconShieldLock,
  "book-2": IconBook2,
};

const { deliverables } = CLOUD_CONSULTING_SERVICES_PAGE;

export function CloudConsultingDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every cloud engagement <span className="text-[var(--red)]">includes</span>
        </h2>
        <p className="mb-5 max-w-md text-balance text-lg leading-relaxed text-[var(--text-muted)] sm:text-sm sm:leading-relaxed">
          {deliverables.description}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article
                key={title}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-lg font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
