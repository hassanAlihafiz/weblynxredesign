import {
  IconBell,
  IconBug,
  IconCreditCard,
  IconFingerprint,
  IconPalette,
  IconShieldCheck,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const deliverables: { title: string; body: string; icon: TablerIcon }[] = [
  {
    title: "Material Design 3",
    body: "Modern Google design language with dynamic theming",
    icon: IconPalette,
  },
  {
    title: "FCM push notifications",
    body: "Firebase Cloud Messaging setup & targeting",
    icon: IconBell,
  },
  {
    title: "Biometric auth",
    body: "Fingerprint & face unlock integration",
    icon: IconFingerprint,
  },
  {
    title: "Google Pay & billing",
    body: "In-app purchases & subscription support",
    icon: IconCreditCard,
  },
  {
    title: "Play Store submission",
    body: "We handle review, screenshots, listing",
    icon: IconShieldCheck,
  },
  {
    title: "Crash & performance monitoring",
    body: "Firebase Crashlytics & Performance",
    icon: IconBug,
  },
];

export function AndroidDevDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every Android project includes <span className="text-[var(--red)]">everything</span>
        </h2>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Production-ready Android apps, not just APK files.
        </p>

        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
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
