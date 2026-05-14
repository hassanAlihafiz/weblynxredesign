import { IconCode, IconPalette, IconTrendingUp } from "@tabler/icons-react";
import { SectionEyebrow } from "./SectionEyebrow";

const services = [
  {
    title: "Web & App Dev",
    description: "Next.js, React Native, custom builds",
    icon: IconCode,
  },
  {
    title: "Digital marketing",
    description: "SEO, ads, content that converts",
    icon: IconTrendingUp,
  },
  {
    title: "Design",
    description: "Brand, UI/UX, identity systems",
    icon: IconPalette,
  },
] as const;

export function HomeServices() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-9">
      <SectionEyebrow className="mb-3.5">SECTION 3 — SERVICES</SectionEyebrow>
      <h2 className="mb-1.5 text-xl font-medium">What we do</h2>
      <p className="mb-5 max-w-lg text-[13px] text-[var(--color-text-secondary)]">
        Three services. One goal: ship products that grow your business.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="group rounded-[var(--border-radius-lg)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-4 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--color-primary-border)] hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="flex size-10 items-center justify-center rounded-[var(--border-radius-md)] bg-[var(--color-primary-soft)] shadow-[var(--shadow-xs)] ring-1 ring-[var(--color-primary-border)]">
              <Icon className="size-5 text-[var(--color-text-info)]" stroke={1.5} aria-hidden />
            </div>
            <h3 className="my-3 text-[13px] font-medium">{title}</h3>
            <p className="text-[11px] leading-snug text-[var(--color-text-secondary)]">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
