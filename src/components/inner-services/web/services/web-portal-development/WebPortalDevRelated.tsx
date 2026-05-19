import { IconCloud, IconDevices, IconShoppingBag } from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const links: {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: TablerIcon;
  iconClass: string;
}[] = [
  {
    title: "SaaS Development",
    description: "Building a multi-tenant SaaS product? See our SaaS specialization.",
    href: "/web-development",
    cta: "SaaS development →",
    icon: IconCloud,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Ecommerce",
    description: "B2B store with custom pricing & account-based ordering.",
    href: "/ecommerce-website-development",
    cta: "Ecommerce →",
    icon: IconShoppingBag,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Mobile companion app",
    description: "Add iOS & Android apps that share your portal's backend.",
    href: "/app-development",
    cta: "App development →",
    icon: IconDevices,
    iconClass: "text-[var(--red)]",
  },
];

export function WebPortalDevRelated() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Also explore <span className="text-[var(--red)]">other services</span>
        </h2>

        <ul className="grid list-none gap-3 md:grid-cols-3">
          {links.map(({ title, description, href, cta, icon: Icon, iconClass }) => (
            <li key={title}>
              <Link
                href={href}
                className="group block rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4 transition-colors hover:border-[var(--border)]"
              >
                <Icon className={`size-5 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-base font-medium text-[var(--text)]">{title}</h3>
                <p className="mb-2.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
                <span className="text-sm font-medium text-[var(--red)] group-hover:opacity-90">{cta}</span>
              </Link>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </section>
  );
}
