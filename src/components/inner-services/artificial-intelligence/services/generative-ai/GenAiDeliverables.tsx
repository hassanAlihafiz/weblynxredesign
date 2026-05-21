import {
  IconCertificate,
  IconChartDots3,
  IconCurrencyDollar,
  IconLayoutDashboard,
  IconPalette,
  IconPlugConnected,
  IconShieldCheck,
  IconTarget,
  IconWriting,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { GENERATIVE_AI_PAGE, type GenAiDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<GenAiDeliverableIconId, TablerIcon> = {
  target: IconTarget,
  writing: IconWriting,
  palette: IconPalette,
  "layout-dashboard": IconLayoutDashboard,
  "shield-check": IconShieldCheck,
  "plug-connected": IconPlugConnected,
  "currency-dollar": IconCurrencyDollar,
  "chart-dots-3": IconChartDots3,
  certificate: IconCertificate,
};

const { deliverables } = GENERATIVE_AI_PAGE;

export function GenAiDeliverables() {
  return (
    <section className="w-full border-t border-[#252525] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every <span className="text-[var(--red)]">GenAI project</span> includes
        </h2>
        <p className="mb-5 max-w-lg text-lg leading-tight text-[var(--text-muted)]">{deliverables.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article
                key={title}
                className="rounded-xl bg-[var(--bg-elev)] p-[18px]"
              >
                <Icon className="size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 mt-2.5 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-base leading-tight text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
