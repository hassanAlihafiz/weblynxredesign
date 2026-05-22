import {
  IconArrowRight,
  IconBrain,
  IconCloud,
  IconCode,
  IconDeviceMobile,
  IconPalette,
  IconTrendingUp,
  type TablerIcon,
} from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SERVICES_PAGE } from "@/data/site";

const gridIcons = {
  code: IconCode,
  "device-mobile": IconDeviceMobile,
  "trending-up": IconTrendingUp,
  cloud: IconCloud,
  brain: IconBrain,
  palette: IconPalette,
} as const satisfies Record<(typeof SERVICES_PAGE.grid.cards)[number]["icon"], TablerIcon>;

type GridCardData = (typeof SERVICES_PAGE.grid.cards)[number];
type GridCardWithIcon = Omit<GridCardData, "icon"> & { icon: TablerIcon };

const cardClassName =
  "group/card block rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-6 transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[var(--border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]";

const { grid } = SERVICES_PAGE;

const cardsWithIcons: GridCardWithIcon[] = grid.cards.map((card) => ({
  ...card,
  icon: gridIcons[card.icon],
}));

export function ServicesGrid() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>
        <div className="grid gap-5 md:grid-cols-2">
          {cardsWithIcons.map(({ n, title, body, stack, delivery, href, icon: Icon }) => (
            <Link key={n} href={href} className={cardClassName}>
              <div
                className="mb-5 flex size-12 shrink-0 items-center justify-center rounded-lg bg-[rgba(230,57,70,0.1)]"
                aria-hidden
              >
                <Icon className="size-8 text-[var(--red-bright)]" stroke={1.35} />
              </div>
              <div className="mb-3 flex items-baseline justify-between gap-2">
                <h3 className="text-xl font-medium leading-snug text-[var(--text)]">{title}</h3>
                <span className="text-meta shrink-0">{n}</span>
              </div>
              <p className="mb-5 leading-relaxed text-[var(--text-muted)]">{body}</p>
              <div className="mb-5 font-mono text-sm text-[var(--text-dim)]">{stack}</div>
              <div className="flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
                <span className="text-sm text-[var(--text-muted)]">{delivery}</span>
                <span className="text-accent text-sm font-semibold transition-colors group-hover/card:text-[var(--text)]">
                  <span className="inline-flex items-center gap-0.5">
                    {grid.learnMoreLabel}
                    <IconArrowRight className="size-3 shrink-0" stroke={1.5} aria-hidden />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
