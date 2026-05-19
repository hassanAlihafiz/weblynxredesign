import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import {
  IconBrandLinkedin,
  IconBrandMeta,
  IconMail,
  IconPencil,
  IconSearch,
  IconTargetArrow,
} from "@tabler/icons-react";

const channels: {
  title: string;
  body: string;
  icon: TablerIcon;
  iconClass: string;
}[] = [
  {
    title: "SEO",
    body: "Technical, on-page, content, and link strategy.",
    icon: IconSearch,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Google Ads",
    body: "Search, display, and shopping campaigns.",
    icon: IconTargetArrow,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Meta Ads",
    body: "Facebook & Instagram for awareness and conversion.",
    icon: IconBrandMeta,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Content",
    body: "Blog, landing pages, lead magnets.",
    icon: IconPencil,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Email",
    body: "Newsletters, sequences, automation.",
    icon: IconMail,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Social",
    body: "LinkedIn, X, and Instagram content.",
    icon: IconBrandLinkedin,
    iconClass: "text-[var(--red)]",
  },
];

export function DmChannels() {
  return (
    <section
      id="channels"
      className="scroll-mt-24 border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
      <h2 className="mb-10 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
        Six channels, <span className="text-[var(--red)]">one growth engine</span>
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {channels.map(({ title, body, icon: Icon, iconClass }) => (
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
