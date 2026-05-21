import {
  IconBolt,
  IconBrain,
  IconMessages,
  IconPhotoAi,
  IconRobot,
  IconSearch,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_DEVELOPMENT_PAGE } from "@/data/site";

const capabilityIcons = {
  messages: IconMessages,
  search: IconSearch,
  robot: IconRobot,
  "photo-ai": IconPhotoAi,
  brain: IconBrain,
  bolt: IconBolt,
} as const satisfies Record<(typeof AI_DEVELOPMENT_PAGE.capabilities.items)[number]["icon"], TablerIcon>;

type CapItem = (typeof AI_DEVELOPMENT_PAGE.capabilities.items)[number];
type CapWithIcon = Omit<CapItem, "icon"> & { icon: TablerIcon };

const { capabilities } = AI_DEVELOPMENT_PAGE;

const itemsWithIcons: CapWithIcon[] = capabilities.items.map((item) => ({
  ...item,
  icon: capabilityIcons[item.icon],
}));

export function AiDevCapabilities() {
  return (
    <section
      id={capabilities.sectionId}
      className="scroll-mt-24 w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Six AI capabilities <span className="text-[var(--red)]">One integrated stack</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{capabilities.description}</p>
        <div className="grid gap-x-12 gap-y-4 md:grid-cols-3">
          {itemsWithIcons.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
            >
              <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
