import {
  IconDeviceMobile,
  IconDeviceTablet,
  IconDeviceTv,
  IconDeviceWatch,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const platforms: { title: string; body: string; icon: TablerIcon }[] = [
  {
    title: "Phone",
    body: "Standard Play Store apps for Android phones.",
    icon: IconDeviceMobile,
  },
  {
    title: "Tablet",
    body: "Larger screen layouts and split-view support.",
    icon: IconDeviceTablet,
  },
  {
    title: "Wear OS",
    body: "Smartwatch companions and standalone apps.",
    icon: IconDeviceWatch,
  },
  {
    title: "Android TV",
    body: "10-foot UI for streaming and media apps.",
    icon: IconDeviceTv,
  },
];

export function AndroidDevPlatforms() {
  return (
    <section
      id="platforms"
      className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]"
    >
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          One Android codebase <span className="text-[var(--red)]">Every screen</span>
        </h2>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Modern Android lets you target every device from one Kotlin codebase.
        </p>

        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
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
