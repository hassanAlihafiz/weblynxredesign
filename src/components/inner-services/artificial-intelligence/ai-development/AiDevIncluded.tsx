import {
  IconChartDots3,
  IconCurrencyDollar,
  IconShieldCheck,
  IconTarget,
  IconVector,
  IconWriting,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_DEVELOPMENT_PAGE } from "@/data/site";
import { AiDevSectionHeading } from "./AiDevSectionHeading";

const includedIcons = {
  target: IconTarget,
  writing: IconWriting,
  "shield-check": IconShieldCheck,
  vector: IconVector,
  "chart-dots": IconChartDots3,
  "currency-dollar": IconCurrencyDollar,
} as const satisfies Record<(typeof AI_DEVELOPMENT_PAGE.included.items)[number]["icon"], TablerIcon>;

type IncItem = (typeof AI_DEVELOPMENT_PAGE.included.items)[number];
type IncWithIcon = Omit<IncItem, "icon"> & { icon: TablerIcon };

const { included } = AI_DEVELOPMENT_PAGE;

const itemsWithIcons: IncWithIcon[] = included.items.map((item) => ({
  ...item,
  icon: includedIcons[item.icon],
}));

export function AiDevIncluded() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <AiDevSectionHeading heading={included.heading} className="mb-3" />
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{included.description}</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {itemsWithIcons.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg)] p-4 shadow-[var(--shadow-xs)] sm:p-5"
            >
              <Icon className="mb-2 size-5 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
              <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
              <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
