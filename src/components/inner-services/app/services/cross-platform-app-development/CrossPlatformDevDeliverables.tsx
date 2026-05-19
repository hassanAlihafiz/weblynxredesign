import {
  IconBell,
  IconBug,
  IconCloudOff,
  IconCreditCard,
  IconDevices,
  IconPalette,
  IconRefresh,
  IconRocket,
  IconUser,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const deliverables: { title: string; body: string; icon: TablerIcon }[] = [
  { title: "iOS + Android builds", body: "Both stores from a single codebase", icon: IconDevices },
  { title: "Platform-adaptive UI", body: "Looks native on each platform automatically", icon: IconPalette },
  { title: "Push notifications", body: "APNs + FCM unified setup", icon: IconBell },
  { title: "Auth & accounts", body: "Email, Google, Apple, biometric", icon: IconUser },
  { title: "Payments & IAP", body: "Stripe, RevenueCat, Apple Pay, Google Pay", icon: IconCreditCard },
  { title: "Offline support", body: "Works without internet, syncs later", icon: IconCloudOff },
  { title: "OTA updates", body: "Push small updates without store review", icon: IconRefresh },
  { title: "Crash & analytics", body: "Sentry + Mixpanel/Amplitude setup", icon: IconBug },
  { title: "Both store submissions", body: "App Store + Play Store handled", icon: IconRocket },
];

export function CrossPlatformDevDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every <span className="text-[var(--red)]">cross-platform</span> build includes
        </h2>
        <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Production-ready apps on both stores not just an APK and an IPA.
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
            >
              <Icon className="size-5 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-1 mt-2 text-lg font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
