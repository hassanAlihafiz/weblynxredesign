import {
  IconBellRinging,
  IconBolt,
  IconBroadcast,
  IconDatabase,
  IconLayoutGrid,
  IconWorld,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_APPLICATION_DEVELOPMENT_PAGE, type CloudAppPatternIconId } from "@/data/site";

const patternIcons: Record<CloudAppPatternIconId, TablerIcon> = {
  bolt: IconBolt,
  "layout-grid": IconLayoutGrid,
  "bell-ringing": IconBellRinging,
  broadcast: IconBroadcast,
  world: IconWorld,
  database: IconDatabase,
};

const { patterns } = CLOUD_APPLICATION_DEVELOPMENT_PAGE;

export function CloudAppDevPatterns() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Six cloud-native app <span className="text-[var(--red)]">patterns.</span>
        </h2>
        <p className="mb-5 max-w-md text-balance text-lg leading-relaxed text-[var(--text-muted)] sm:text-sm sm:leading-relaxed">
          {patterns.description}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {patterns.items.map(({ title, body, icon }) => {
            const Icon = patternIcons[icon];
            return (
              <article
                key={title}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
              >
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1.5 mt-2.5 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
