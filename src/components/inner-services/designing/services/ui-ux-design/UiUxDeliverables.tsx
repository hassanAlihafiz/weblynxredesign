import {
  IconAccessible,
  IconArrowRightCircle,
  IconClick,
  IconComponents,
  IconDeviceMobile,
  IconLayoutGrid,
  IconPencil,
  IconRoute,
  IconSearch,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { UI_UX_DESIGN_PAGE, type UiUxDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<UiUxDeliverableIconId, TablerIcon> = {
  search: IconSearch,
  route: IconRoute,
  pencil: IconPencil,
  "layout-grid": IconLayoutGrid,
  click: IconClick,
  components: IconComponents,
  accessible: IconAccessible,
  "device-mobile": IconDeviceMobile,
  "arrow-right-circle": IconArrowRightCircle,
};

const { deliverables } = UI_UX_DESIGN_PAGE;

export function UiUxDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every UI/UX project <span className="text-[var(--red)]">includes</span>
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
                className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4"
              >
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-base font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
