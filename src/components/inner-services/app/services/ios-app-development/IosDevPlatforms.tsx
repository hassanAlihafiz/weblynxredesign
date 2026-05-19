import {
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDeviceTablet,
  IconDeviceWatch,
  IconBadgeVr,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const platforms: { title: string; body: string; icon: TablerIcon }[] = [
  {
    title: "iPhone",
    body: "Standard App Store apps for every iPhone.",
    icon: IconDeviceMobile,
  },
  {
    title: "iPad",
    body: "Multi-window, Apple Pencil, Stage Manager.",
    icon: IconDeviceTablet,
  },
  {
    title: "Apple Watch",
    body: "watchOS apps & complications.",
    icon: IconDeviceWatch,
  },
  {
    title: "Vision Pro",
    body: "Spatial computing apps for visionOS.",
    icon: IconBadgeVr,
  },
  {
    title: "macOS",
    body: "Mac Catalyst & native macOS apps.",
    icon: IconDeviceLaptop,
  },
];

export function IosDevPlatforms() {
  return (
    <section id="platforms" className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Apple platforms we <span className="text-[var(--red)]">ship to</span>
        </h2>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Modern Apple frameworks let you target every device with shared code.
        </p>

        <div className="grid gap-2.5 sm:grid-cols-5">
          {platforms.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <Icon className="mb-3 size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
