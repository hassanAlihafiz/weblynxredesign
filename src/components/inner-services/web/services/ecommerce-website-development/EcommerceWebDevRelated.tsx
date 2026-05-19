import { IconDevices, IconPalette, IconTrendingUp } from "@tabler/icons-react";
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
  ctaClass: string;
}[] = [
  {
    title: "Digital Marketing",
    description: "Drive traffic to your new store with SEO + ads.",
    href: "/digital-marketing",
    cta: "See Marketing →",
    icon: IconTrendingUp,
    iconClass: "text-[var(--red)]",
    ctaClass: "text-[var(--red)]",
  },
  {
    title: "Brand & Design",
    description: "Build a brand identity that sells before the click.",
    href: "/design",
    cta: "See Design →",
    icon: IconPalette,
    iconClass: "text-[var(--red)]",
    ctaClass: "text-[var(--red)]",
  },
  {
    title: "Mobile App",
    description: "Add a companion shopping app for loyal customers.",
    href: "/cross-platform-app-development",
    cta: "See Cross-Platform →",
    icon: IconDevices,
    iconClass: "text-[var(--red)]",
    ctaClass: "text-[var(--red)]",
  },
];

export function EcommerceWebDevRelated() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Also explore <span className="text-[var(--red)]">other services</span>
        </h2>

        <div className="grid gap-3 md:grid-cols-3">
          {links.map(({ title, description, href, cta, icon: Icon, iconClass, ctaClass }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4 transition-colors hover:border-[var(--border)]"
            >
              <Icon className={`size-5 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
              <h3 className="mb-1 mt-2 text-sm font-medium text-[var(--text)]">{title}</h3>
              <p className="mb-2.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
              <span className={`text-sm font-medium ${ctaClass} group-hover:opacity-90`}>{cta}</span>
            </Link>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
