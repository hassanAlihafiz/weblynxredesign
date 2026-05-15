import type { TablerIcon } from "@tabler/icons-react";
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
    iconClass: "text-[#FF6B35]",
  },
  {
    title: "Meta Ads",
    body: "Facebook & Instagram for awareness and conversion.",
    icon: IconBrandMeta,
    iconClass: "text-[var(--blue)]",
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
    iconClass: "text-[#0A66C2]",
  },
];

export function DmChannels() {
  return (
    <section
      id="channels"
      className="scroll-mt-24 border-t border-[var(--border-subtle)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10"
    >
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Channels we run
      </p>
      <h2 className="mb-10 max-w-2xl text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
        Six channels. One growth engine.
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {channels.map(({ title, body, icon: Icon, iconClass }) => (
          <article
            key={title}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
          >
            <Icon className={`mb-3 size-6 shrink-0 ${iconClass}`} stroke={1.75} aria-hidden />
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
