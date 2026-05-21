import { IconAccessible, IconBolt, IconCode, IconTarget, type TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { UI_UX_DESIGN_PAGE, type UiUxPrincipleIconId } from "@/data/site";

const principleIcons: Record<UiUxPrincipleIconId, TablerIcon> = {
  target: IconTarget,
  zap: IconBolt,
  accessible: IconAccessible,
  code: IconCode,
};

const { principles } = UI_UX_DESIGN_PAGE;

export function UiUxPrinciples() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Four principles we <span className="text-[var(--red)]">never compromise.</span>
        </h2>
        <p className="mb-5 max-w-md text-balance text-sm leading-relaxed text-[var(--text-muted)] sm:mb-6 sm:text-sm sm:leading-relaxed">
          {principles.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {principles.items.map(({ num, title, body, icon }) => {
            const Icon = principleIcons[icon];
            return (
              <article
                key={num}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-5"
              >
                <div className="mb-2.5 flex items-start justify-between">
                  <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  <span className="text-sm text-[var(--text-muted)]">{num}</span>
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
