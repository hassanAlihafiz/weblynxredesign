import { IconBolt, IconBox, IconCpu, IconSwitchHorizontal, type TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_APPLICATION_DEVELOPMENT_PAGE, type CloudAppArchitectureIconId } from "@/data/site";

const architectureIcons: Record<CloudAppArchitectureIconId, TablerIcon> = {
  bolt: IconBolt,
  box: IconBox,
  "arrows-cross": IconSwitchHorizontal,
  circuit: IconCpu,
};

const { architecture } = CLOUD_APPLICATION_DEVELOPMENT_PAGE;

export function CloudAppDevArchitecture() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          The right pattern for the <span className="text-[var(--red)]">right product.</span>
        </h2>
        <p className="mb-5 max-w-md text-balance text-lg leading-relaxed text-[var(--text-muted)] sm:text-sm sm:leading-relaxed">
          {architecture.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {architecture.items.map(({ num, title, body, bestFor, icon }) => {
            const Icon = architectureIcons[icon];
            return (
              <article
                key={num}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-5"
              >
                <div className="mb-2.5 flex items-start justify-between">
                  <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  <span className="text-xs text-[var(--text-muted)]">{num}</span>
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="mb-2 text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
                <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
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
