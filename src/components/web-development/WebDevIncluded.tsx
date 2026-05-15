import type { TablerIcon } from "@tabler/icons-react";
import {
  IconBolt,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconFileText,
  IconSearch,
  IconShieldCheck,
} from "@tabler/icons-react";

const items: { title: string; body: string; icon: TablerIcon }[] = [
  { title: "Custom design", body: "Built for your brand, never a template", icon: IconDeviceLaptop },
  { title: "Sub-1s load times", body: "Optimized for Core Web Vitals", icon: IconBolt },
  { title: "Fully responsive", body: "Perfect on every device", icon: IconDeviceMobile },
  { title: "SEO foundation", body: "Meta, schema, sitemaps included", icon: IconSearch },
  { title: "CMS integration", body: "Edit content without touching code", icon: IconFileText },
  { title: "30-day support", body: "Bug fixes after launch, on us", icon: IconShieldCheck },
];

export function WebDevIncluded() {
  return (
    <section className="border-t border-[var(--border-subtle)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10">
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Deliverables
      </p>
      <h2 className="mb-3 max-w-2xl text-balance font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--text)] md:text-5xl">
        Every project includes
      </h2>
      <p className="mb-10 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
        No surprise add-ons. No vague scope. Here&apos;s what you get with every web project.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ title, body, icon: Icon }) => (
          <article
            key={title}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
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
