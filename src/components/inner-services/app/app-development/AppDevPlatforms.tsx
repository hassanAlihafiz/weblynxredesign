import { IconBrandAndroid, IconBrandApple, IconDeviceLaptop } from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const platforms: { title: string; body: string; icon: TablerIcon; iconClass: string }[] = [
  {
    title: "iOS",
    body: "iPhone & iPad. App Store submission & review included.",
    icon: IconBrandApple,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Android",
    body: "Phones & tablets. Play Store submission & review included.",
    icon: IconBrandAndroid,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Web companion",
    body: "Optional web version from the same codebase using Expo Web.",
    icon: IconDeviceLaptop,
    iconClass: "text-[var(--red)]",
  },
];

export function AppDevPlatforms() {
  return (
    <section
      id="platforms"
      className="border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12"
    >
      <ContentContainer>
      <h2 className="mb-10 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
        One build <span className="text-[var(--red)]">Three stores</span>
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {platforms.map(({ title, body, icon: Icon, iconClass }) => (
          <article
            key={title}
            className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
          >
            <Icon className={`mb-4 size-6 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
