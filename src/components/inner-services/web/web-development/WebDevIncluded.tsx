import {
  IconBolt,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconFileText,
  IconSearch,
  IconShieldCheck,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { WEB_DEVELOPMENT_PAGE } from "@/data/site";

const includedIcons = {
  "device-laptop": IconDeviceLaptop,
  bolt: IconBolt,
  "device-mobile": IconDeviceMobile,
  search: IconSearch,
  "file-text": IconFileText,
  "shield-check": IconShieldCheck,
} as const satisfies Record<(typeof WEB_DEVELOPMENT_PAGE.included.items)[number]["icon"], TablerIcon>;

type IncludedItemData = (typeof WEB_DEVELOPMENT_PAGE.included.items)[number];
type IncludedItemWithIcon = Omit<IncludedItemData, "icon"> & { icon: TablerIcon };

const { included } = WEB_DEVELOPMENT_PAGE;

const itemsWithIcons: IncludedItemWithIcon[] = included.items.map((item) => ({
  ...item,
  icon: includedIcons[item.icon],
}));

export function WebDevIncluded() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every project <span className="text-[var(--red)]">includes</span>
        </h1>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{included.description}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {itemsWithIcons.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
            >
              <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
              <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
