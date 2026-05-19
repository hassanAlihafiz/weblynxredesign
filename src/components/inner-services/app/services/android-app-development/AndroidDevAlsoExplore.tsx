import { IconBrandApple, IconDevices } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const links = [
  {
    title: "iOS App Development",
    description: "Native iOS builds in Swift & SwiftUI.",
    href: "/ios-app-development",
    linkLabel: "See iOS page →",
    linkClass: "text-[var(--red)]",
    icon: IconBrandApple,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Cross-Platform Development",
    description: "One codebase. Both iOS and Android. Half the cost.",
    href: "/cross-platform-app-development",
    linkLabel: "See Cross-Platform →",
    linkClass: "text-[var(--red)]",
    icon: IconDevices,
    iconClass: "text-[var(--red)]",
  },
] as const;

export function AndroidDevAlsoExplore() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Also explore <span className="text-[var(--red)]">other services</span>
        </h2>

        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {links.map(({ title, description, href, linkLabel, linkClass, icon: Icon, iconClass }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4 transition-colors hover:border-[var(--border)]"
            >
              <Icon className={`mb-3 size-5 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
              <h3 className="mb-1 mt-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="mb-2.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
              <span className={`text-sm font-medium ${linkClass} group-hover:opacity-90`}>
                {linkLabel}
              </span>
            </Link>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
