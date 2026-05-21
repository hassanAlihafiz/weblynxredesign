import {
  IconAppWindow,
  IconArrowsShuffle,
  IconComponents,
  IconDeviceMobile,
  IconLayoutDashboard,
  IconRocket,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { UI_UX_DESIGN_PAGE, type UiUxSurfaceIconId } from "@/data/site";

const surfaceIcons: Record<UiUxSurfaceIconId, TablerIcon> = {
  "layout-dashboard": IconLayoutDashboard,
  "app-window": IconAppWindow,
  "device-mobile": IconDeviceMobile,
  rocket: IconRocket,
  "arrows-shuffle": IconArrowsShuffle,
  components: IconComponents,
};

const { surfaces } = UI_UX_DESIGN_PAGE;

export function UiUxSurfaces() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Six product surfaces. <span className="text-[var(--red)]">One design system.</span>
        </h2>
        <p className="mb-5 max-w-md text-balance text-lg leading-relaxed text-[var(--text-muted)] sm:text-sm sm:leading-relaxed">
          {surfaces.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {surfaces.items.map(({ title, body, icon }) => {
            const Icon = surfaceIcons[icon];
            return (
              <article
                key={title}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 mt-2.5 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
