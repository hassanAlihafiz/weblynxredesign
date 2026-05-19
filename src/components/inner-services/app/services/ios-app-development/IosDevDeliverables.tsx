import {
  IconBell,
  IconBrandApple,
  IconFaceId,
  IconRocket,
  IconShieldCheck,
  IconSparkles,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const deliverables: { title: string; body: string; icon: TablerIcon }[] = [
  {
    title: "Human Interface Guidelines",
    body: "Native iOS feel gestures, animations, conventions",
    icon: IconSparkles,
  },
  {
    title: "APNs push notifications",
    body: "Apple Push Notification service setup",
    icon: IconBell,
  },
  {
    title: "Face ID & Touch ID",
    body: "Secure biometric authentication",
    icon: IconFaceId,
  },
  {
    title: "In-App Purchases & Apple Pay",
    body: "StoreKit, subscriptions, one-time payments",
    icon: IconBrandApple,
  },
  {
    title: "App Store submission",
    body: "We handle review, screenshots, listing copy",
    icon: IconRocket,
  },
  {
    title: "Privacy & ATT compliance",
    body: "Privacy manifest, App Tracking Transparency",
    icon: IconShieldCheck,
  },
];

export function IosDevDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every iOS project includes <span className="text-[var(--red)]">everything</span>
        </h2>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Production-ready iOS apps designed to pass Apple review on the first try.
        </p>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map(({ title, body, icon: Icon }) => (
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
