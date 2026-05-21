import {
  IconBrandLinkedin,
  IconBrandMeta,
  IconMail,
  IconPencil,
  IconSearch,
  IconTargetArrow,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { DIGITAL_MARKETING_PAGE } from "@/data/site";

const channelIcons = {
  search: IconSearch,
  "target-arrow": IconTargetArrow,
  "brand-meta": IconBrandMeta,
  pencil: IconPencil,
  mail: IconMail,
  "brand-linkedin": IconBrandLinkedin,
} as const satisfies Record<(typeof DIGITAL_MARKETING_PAGE.channels.items)[number]["icon"], TablerIcon>;

type ChannelRow = (typeof DIGITAL_MARKETING_PAGE.channels.items)[number];
type ChannelWithIcon = Omit<ChannelRow, "icon"> & { icon: TablerIcon; iconClass: string };

const { channels } = DIGITAL_MARKETING_PAGE;

const rowsWithIcons: ChannelWithIcon[] = channels.items.map((item) => ({
  ...item,
  icon: channelIcons[item.icon],
  iconClass: channels.iconClass,
}));

export function DmChannels() {
  return (
    <section
      className="scroll-mt-24 border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Six Channels, <span className="text-[var(--red)]">one growth engine</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {rowsWithIcons.map(({ title, body, icon: Icon, iconClass }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
            >
              <Icon className={`mb-3 size-6 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
              <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
