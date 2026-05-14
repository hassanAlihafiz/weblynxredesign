import type { TablerIcon } from "@tabler/icons-react";
import {
  IconApps,
  IconBolt,
  IconRocket,
  IconServer,
  IconShoppingCart,
  IconPalette,
} from "@tabler/icons-react";

const services: {
  title: string;
  desc: string;
  tags: string[];
  icon: TablerIcon;
}[] = [
  {
    title: "Custom Website Design",
    desc: "Fully custom, pixel-perfect designs tailored to your brand identity. No templates, no compromises — just your vision, built right.",
    tags: ["UI/UX", "Figma", "Responsive"],
    icon: IconPalette,
  },
  {
    title: "Frontend Development",
    desc: "Lightning-fast interfaces built with React, Next.js, and modern CSS. Optimized for performance, accessibility, and SEO from the ground up.",
    tags: ["React", "Next.js", "TailwindCSS"],
    icon: IconBolt,
  },
  {
    title: "Backend & APIs",
    desc: "Robust server-side logic, RESTful APIs, and database architecture that powers your product — built to scale with your growth.",
    tags: ["Node.js", "PostgreSQL", "REST API"],
    icon: IconServer,
  },
  {
    title: "E-Commerce Solutions",
    desc: "From Shopify customizations to fully bespoke storefronts — we build online stores that convert visitors into loyal customers.",
    tags: ["Shopify", "WooCommerce", "Stripe"],
    icon: IconShoppingCart,
  },
  {
    title: "Web App Development",
    desc: "Complex SaaS products, dashboards, and internal tools — we architect and build full-stack web applications that users love.",
    tags: ["SaaS", "Dashboards", "Auth"],
    icon: IconApps,
  },
  {
    title: "SEO & Performance",
    desc: "Core Web Vitals optimization, structured data, and technical SEO audits. We make sure search engines — and users — love your site.",
    tags: ["Core Web Vitals", "Lighthouse", "Schema"],
    icon: IconRocket,
  },
];

export function WebDevServices() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-12 shadow-[var(--shadow-inset-soft)] sm:py-14 md:py-[4.5rem]">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">What We Do</p>
      <h2 className="mb-10 text-2xl font-semibold leading-tight tracking-tight text-[var(--color-text-primary)] sm:mb-12 sm:text-[clamp(1.5rem,4vw,2.25rem)] md:mb-12">
        Our Web Development Services
      </h2>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--color-border-tertiary)] bg-[var(--color-border-tertiary)] sm:grid-cols-2">
        {services.map(({ title, desc, tags, icon: Icon }) => (
          <article
            key={title}
            className="bg-[var(--color-surface-raised)] p-6 transition-colors hover:bg-[var(--color-surface-overlay)] sm:p-7 md:p-8"
          >
            <div className="mb-4 flex size-10 items-center justify-center rounded-[10px] border border-[var(--color-primary-border)] bg-[var(--color-primary-soft)] sm:mb-[18px] sm:size-11">
              <Icon className="size-[18px] text-[var(--color-primary)]" stroke={1.5} aria-hidden />
            </div>
            <h3 className="mb-2 text-[17px] font-semibold leading-snug">{title}</h3>
            <p className="text-[13px] leading-relaxed text-[var(--color-text-secondary)] sm:leading-[1.7]">{desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--color-primary-border)] bg-[var(--color-primary-soft)] px-2.5 py-0.5 text-[11px] text-[var(--color-primary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
