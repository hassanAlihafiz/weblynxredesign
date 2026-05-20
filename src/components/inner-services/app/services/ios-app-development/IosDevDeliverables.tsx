import {
  IconBell,
  IconBrandApple,
  IconFaceId,
  IconRocket,
  IconShieldCheck,
  IconSparkles,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { IOS_APP_DEV_PAGE } from "@/data/site";
import { IosDevSectionHeading } from "./IosDevSectionHeading";

const deliverableIcons = {
  sparkles: IconSparkles,
  bell: IconBell,
  "face-id": IconFaceId,
  "brand-apple": IconBrandApple,
  rocket: IconRocket,
  "shield-check": IconShieldCheck,
} as const satisfies Record<(typeof IOS_APP_DEV_PAGE.deliverables.items)[number]["icon"], TablerIcon>;

const { deliverables } = IOS_APP_DEV_PAGE;

export function IosDevDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <IosDevSectionHeading heading={deliverables.heading} className="mb-5" />
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{deliverables.description}</p>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.items.map(({ title, body, icon }) => {
            const Icon = deliverableIcons[icon];
            return (
              <article key={title} className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4">
                <Icon className="mb-3 size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
                <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
              </article>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
