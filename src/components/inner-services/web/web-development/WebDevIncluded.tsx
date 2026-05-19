import type { TablerIcon } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
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
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <h2 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
        Every project <span className="text-[var(--red)]">includes</span>
      </h2>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
        No surprise add-ons. No vague scope. Here&apos;s what you get with every web project.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ title, body, icon: Icon }) => (
          <article
            key={title}
            className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
          >
            <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
            <h3 className="mb-2 font-medium text-[var(--text)]">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
