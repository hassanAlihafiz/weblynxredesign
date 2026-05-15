import { IconBell, IconCloud, IconCloudOff, IconDeviceMobile, IconRocket, IconUser } from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";

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
    <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10">
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Deliverables
      </p>
      <h2 className="mb-3 max-w-3xl text-balance font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--text)] md:text-5xl">
        Every app project includes
      </h2>
      <p className="mb-10 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
        Everything you need to launch on both stores.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ title, body, icon: Icon }) => (
          <article
            key={title}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-5 shadow-[var(--shadow-xs)]"
          >
            <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
