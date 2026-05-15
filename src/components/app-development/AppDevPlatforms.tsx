import { IconBrandAndroid, IconBrandApple, IconDeviceLaptop } from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";

const platforms: { title: string; body: string; icon: TablerIcon; iconClass: string }[] = [
  {
    title: "iOS",
    body: "iPhone & iPad. App Store submission & review included.",
    icon: IconBrandApple,
    iconClass: "text-[var(--text)]",
  },
  {
    title: "Android",
    body: "Phones & tablets. Play Store submission & review included.",
    icon: IconBrandAndroid,
    iconClass: "text-[#3DDC84]",
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
      className="border-t border-[var(--border-subtle)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10"
    >
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Platforms we ship to
      </p>
      <h2 className="mb-10 max-w-2xl text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
        One build. Three stores.
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {platforms.map(({ title, body, icon: Icon, iconClass }) => (
          <article
            key={title}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
          >
            <Icon className={`mb-4 size-9 ${iconClass}`} stroke={1.5} aria-hidden />
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
