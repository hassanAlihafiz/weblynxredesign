import { IconBrandAndroid, IconDevices, type TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { IOS_APP_DEV_PAGE } from "@/data/site";

const exploreIcons = {
  "brand-android": IconBrandAndroid,
  devices: IconDevices,
} as const satisfies Record<(typeof IOS_APP_DEV_PAGE.alsoExplore.items)[number]["icon"], TablerIcon>;

const { alsoExplore } = IOS_APP_DEV_PAGE;

export function IosDevAlsoExplore() {
  const { iconClass, linkClass } = alsoExplore.linkDefaults;

  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Also explore <span className="text-[var(--red)]">other services</span>
        </h1>

        <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
          {alsoExplore.items.map(({ title, description, href, linkLabel, icon }) => {
            const Icon = exploreIcons[icon];
            return (
              <Link
                key={title}
                href={href}
                className="group rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4 transition-colors hover:border-[var(--border)]"
              >
                <Icon className={`mb-3 size-5 shrink-0 ${iconClass}`} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-base font-medium text-[var(--text)]">{title}</h3>
                <p className="mb-2.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
                <span className={`text-sm font-medium ${linkClass} group-hover:opacity-90`}>{linkLabel}</span>
              </Link>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
