import {
  IconCalendar,
  IconChartLine,
  IconMessageCircle2,
  IconPencil,
  IconPhoto,
  IconRoute,
  IconSend,
  IconTrendingUp,
  IconVideo,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { SOCIAL_MEDIA_MARKETING_PAGE, type SmmDeliverableIconId } from "@/data/site";

const deliverableIcons: Record<SmmDeliverableIconId, TablerIcon> = {
  route: IconRoute,
  calendar: IconCalendar,
  pencil: IconPencil,
  photo: IconPhoto,
  video: IconVideo,
  send: IconSend,
  "message-circle-2": IconMessageCircle2,
  "trending-up": IconTrendingUp,
  "chart-line": IconChartLine,
};

const { deliverables } = SOCIAL_MEDIA_MARKETING_PAGE;

export function SmmDeliverables() {
  return (
    <section className="w-full bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-xl text-balance font-sans text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-text sm:text-4xl md:text-5xl md:font-bold">
          Every <span className="text-[var(--red)]">social engagement</span> includes
        </h2>
        <p className="mb-5 max-w-md text-lg leading-relaxed text-text-muted">{deliverables.description}</p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article
                key={title}
                className="rounded-md bg-[var(--bg-elev-2)] p-4"
              >
                <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-semibold text-text">{title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
