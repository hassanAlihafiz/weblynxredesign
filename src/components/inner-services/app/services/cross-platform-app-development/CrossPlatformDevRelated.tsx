import { IconBrandAndroid, IconBrandApple } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const links = [
  {
    title: "iOS App Development",
    description: "Native iOS in Swift & SwiftUI for Apple Watch, Vision Pro, ARKit.",
    href: "/ios-app-development",
    icon: IconBrandApple,
    iconClass: "text-[var(--red)]",
  },
  {
    title: "Android App Development",
    description: "Native Android in Kotlin & Jetpack Compose for Wear OS, TV, sensors.",
    href: "/android-app-development",
    icon: IconBrandAndroid,
    iconClass: "text-[var(--red)]",
  },
] as const;

export function CrossPlatformDevRelated() {
  return (
    <section className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map(({ title, description, href, icon: Icon, iconClass }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4 transition-colors hover:border-[var(--border)]"
            >
              <Icon className={`size-5 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
              <h3 className="mb-1 mt-2 text-sm font-medium text-[var(--text)]">{title}</h3>
              <p className="mb-2.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
              <span className="text-sm font-medium text-[var(--red)] group-hover:opacity-90">
                {title.includes("iOS") ? "See iOS page" : "See Android page"}
              </span>
            </Link>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
