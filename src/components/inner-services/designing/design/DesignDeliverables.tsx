import {
  IconBook,
  IconBulb,
  IconComponents,
  IconFiles,
  IconPencil,
  IconRocket,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { DESIGN_PAGE } from "@/data/site";

const deliverableIcons = {
  bulb: IconBulb,
  pencil: IconPencil,
  book: IconBook,
  files: IconFiles,
  components: IconComponents,
  rocket: IconRocket,
} as const satisfies Record<(typeof DESIGN_PAGE.deliverables.items)[number]["icon"], TablerIcon>;

type DelRow = (typeof DESIGN_PAGE.deliverables.items)[number];
type DelWithIcon = Omit<DelRow, "icon"> & { icon: TablerIcon };

const { deliverables } = DESIGN_PAGE;

const rowsWithIcons: DelWithIcon[] = deliverables.items.map((item) => ({
  ...item,
  icon: deliverableIcons[item.icon],
}));

export function DesignDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every project includes <span className="text-[var(--red)]">everything</span>
        </h1>
        <div className="grid gap-4 md:grid-cols-3">
          {rowsWithIcons.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
            >
              <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
