import {
  IconChartLine,
  IconClipboardList,
  IconFlask,
  IconMessage,
  IconRoute,
  IconTrendingUp,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { DIGITAL_MARKETING_PAGE } from "@/data/site";
import { DmSectionHeading } from "./DmSectionHeading";

const includedIcons = {
  "clipboard-list": IconClipboardList,
  route: IconRoute,
  "chart-line": IconChartLine,
  flask: IconFlask,
  message: IconMessage,
  "trending-up": IconTrendingUp,
} as const satisfies Record<(typeof DIGITAL_MARKETING_PAGE.included.items)[number]["icon"], TablerIcon>;

type IncRow = (typeof DIGITAL_MARKETING_PAGE.included.items)[number];
type IncWithIcon = Omit<IncRow, "icon"> & { icon: TablerIcon };

const { included } = DIGITAL_MARKETING_PAGE;

const itemsWithIcons: IncWithIcon[] = included.items.map((item) => ({
  ...item,
  icon: includedIcons[item.icon],
}));

export function DmIncluded() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <DmSectionHeading heading={included.heading} className="mb-3" />
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{included.description}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {itemsWithIcons.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5 shadow-[var(--shadow-xs)]"
            >
              <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
