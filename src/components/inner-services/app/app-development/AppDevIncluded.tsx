import { IconBell, IconCloud, IconCloudOff, IconDeviceMobile, IconRocket, IconUser } from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const items: { title: string; body: string; icon: TablerIcon }[] = [
  { title: "Native-feel UX", body: "Smooth animations, gestures, platform conventions", icon: IconDeviceMobile },
  { title: "Push notifications", body: "Engagement-ready from day one", icon: IconBell },
  { title: "Auth & accounts", body: "Email, Google, Apple sign-in", icon: IconUser },
  { title: "Backend & database", body: "Firebase or Supabase setup", icon: IconCloud },
  { title: "Offline support", body: "Works without internet, syncs later", icon: IconCloudOff },
  { title: "Store submission", body: "We handle App Store + Play Store", icon: IconRocket },
];

export function AppDevIncluded() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <h2 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
        Every app project includes <span className="text-[var(--red)]">everything</span>
      </h2>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
        Everything you need to launch on both stores.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ title, body, icon: Icon }) => (
          <article
            key={title}
            className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5 shadow-[var(--shadow-xs)]"
          >
            <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
