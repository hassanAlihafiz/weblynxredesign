import {
  IconBell,
  IconBug,
  IconCreditCard,
  IconFingerprint,
  IconPalette,
  IconShieldCheck,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ANDROID_APP_DEV_PAGE } from "@/data/site";
import { AndroidDevSectionHeading } from "./AndroidDevSectionHeading";

const deliverableIcons = {
  palette: IconPalette,
  bell: IconBell,
  fingerprint: IconFingerprint,
  "credit-card": IconCreditCard,
  "shield-check": IconShieldCheck,
  bug: IconBug,
} as const satisfies Record<(typeof ANDROID_APP_DEV_PAGE.deliverables.items)[number]["icon"], TablerIcon>;

const { deliverables } = ANDROID_APP_DEV_PAGE;

export function AndroidDevDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <AndroidDevSectionHeading heading={deliverables.heading} className="mb-5" />
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{deliverables.description}</p>

        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
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
