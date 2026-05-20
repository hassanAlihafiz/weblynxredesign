import { IconBolt, IconPuzzle, IconTarget, type TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SERVICES_PAGE } from "@/data/site";

const whyIcons = {
  bolt: IconBolt,
  puzzle: IconPuzzle,
  target: IconTarget,
} as const satisfies Record<(typeof SERVICES_PAGE.why.items)[number]["icon"], TablerIcon>;

type WhyItemData = (typeof SERVICES_PAGE.why.items)[number];
type WhyItemWithIcon = Omit<WhyItemData, "icon"> & { icon: TablerIcon };

const cardClassName =
  "rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-6 transition-[border-color] duration-200 hover:border-[var(--border)]";

const { why } = SERVICES_PAGE;

const itemsWithIcons: WhyItemWithIcon[] = why.items.map((item) => ({
  ...item,
  icon: whyIcons[item.icon],
}));

export function ServicesWhy() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-20">
      <ContentContainer>
        <h2 className="mb-12 max-w-2xl font-sans text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
          {why.heading}
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {itemsWithIcons.map(({ title, body, icon: Icon }) => (
            <article key={title} className={cardClassName}>
              <Icon className="mb-4 size-9 text-[var(--red-bright)]" stroke={1.35} aria-hidden />
              <h3 className="mb-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
