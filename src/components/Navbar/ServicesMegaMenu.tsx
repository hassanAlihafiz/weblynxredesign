import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import {
  SERVICES_MEGA_MENU_COLUMNS,
  SERVICES_MEGA_MENU_GROUPS,
  SERVICES_MEGA_MENU_INTRO,
  type ServiceMegaMenuGroup,
} from "@/data/site";

function isLinkActive(pathname: string, href: string) {
  const base = href.split("#")[0];
  return pathname === base || pathname.startsWith(`${base}/`);
}

/** Sub-items that share the parent group URL should not all appear active on that page. */
function isSubItemActive(pathname: string, itemHref: string, groupHref: string) {
  const itemBase = itemHref.split("#")[0];
  const groupBase = groupHref.split("#")[0];
  if (itemBase === groupBase) return false;
  return isLinkActive(pathname, itemHref);
}

function serviceGroupHeadingClass(active: boolean) {
  return active
    ? "font-semibold text-[var(--color-primary)]"
    : "font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-primary)]";
}

function subLinkClass(active: boolean) {
  return active
    ? "text-[var(--color-primary)]"
    : "text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]";
}

function ServiceGroup({
  group,
  pathname,
  onNavigate,
}: {
  group: ServiceMegaMenuGroup;
  pathname: string;
  onNavigate?: () => void;
}) {
  const groupActive = isLinkActive(pathname, group.href);

  return (
    <div className="flex flex-col">
      <Link
        href={group.href}
        className={`mb-3 text-sm sm:text-base ${serviceGroupHeadingClass(groupActive)}`}
        onClick={onNavigate}
      >
        {group.label}
      </Link>
      <ul className="flex flex-col gap-2">
        {group.items.map((item) => {
          const itemActive = isSubItemActive(pathname, item.href, group.href);
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`group/link flex items-center gap-2 text-sm leading-snug ${subLinkClass(itemActive)}`}
                onClick={onNavigate}
              >
                <IconChevronRight
                  className="size-3.5 shrink-0 text-[var(--color-text-tertiary)] transition-colors group-hover/link:text-[var(--color-primary)]"
                  stroke={1.5}
                  aria-hidden
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ServiceColumn({
  groups,
  pathname,
  onNavigate,
}: {
  groups: readonly ServiceMegaMenuGroup[];
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      {groups.map((group, index) => (
        <div key={group.label}>
          {index > 0 ? <div className="mb-6 border-t border-[var(--color-border-tertiary)]" aria-hidden /> : null}
          <ServiceGroup group={group} pathname={pathname} onNavigate={onNavigate} />
        </div>
      ))}
    </div>
  );
}

type ServicesMegaMenuPanelProps = {
  pathname: string;
  onNavigate?: () => void;
};

export function ServicesMegaMenuPanel({ pathname, onNavigate }: ServicesMegaMenuPanelProps) {
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(200px,260px)_1fr_1fr_1fr] md:gap-10 lg:gap-12">
      <div className="border-[var(--color-border-tertiary)] md:border-r md:pr-8 lg:pr-10">
        <p className="mb-3 font-sans text-xl font-semibold leading-tight tracking-[-0.02em] text-[var(--color-text-primary)] sm:text-2xl">
          {SERVICES_MEGA_MENU_INTRO.title}
        </p>
        <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
          {SERVICES_MEGA_MENU_INTRO.description}
        </p>
        <Link
          href={SERVICES_MEGA_MENU_INTRO.href}
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] transition-colors hover:opacity-90"
          onClick={onNavigate}
        >
          View all services
          <IconChevronRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
        </Link>
      </div>

      {SERVICES_MEGA_MENU_COLUMNS.map((column, columnIndex) => (
        <ServiceColumn
          key={`mega-col-${columnIndex}`}
          groups={column}
          pathname={pathname}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

type ServicesMegaMenuMobileProps = {
  pathname: string;
  onNavigate: () => void;
};

export function ServicesMegaMenuMobile({ pathname, onNavigate }: ServicesMegaMenuMobileProps) {
  return (
    <div className="mb-0.5 ml-3 flex flex-col gap-4 border-l border-[var(--color-border-tertiary)] pl-3">
      {SERVICES_MEGA_MENU_GROUPS.map((group) => {
        const groupActive = isLinkActive(pathname, group.href);
        return (
          <div key={group.label} className="flex flex-col gap-1">
            <Link
              href={group.href}
              aria-current={groupActive ? "page" : undefined}
              className={`rounded-[var(--border-radius-md)] px-2 py-2 text-base font-semibold leading-snug transition-colors hover:bg-[var(--color-surface-raised)] ${
                groupActive ? "text-[var(--color-primary)]" : "text-[var(--color-text-primary)]"
              }`}
              onClick={onNavigate}
            >
              {group.label}
            </Link>
            <ul className="ml-2 flex flex-col gap-0.5 border-l border-[var(--color-border-tertiary)] pl-3">
              {group.items.map((item) => {
                const itemActive = isSubItemActive(pathname, item.href, group.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={itemActive ? "page" : undefined}
                      className={`flex items-center gap-1.5 rounded-[var(--border-radius-md)] px-2 py-2 text-sm leading-snug transition-colors hover:bg-[var(--color-surface-raised)] ${
                        itemActive ? "text-[var(--color-primary)]" : "text-[var(--color-text-secondary)]"
                      }`}
                      onClick={onNavigate}
                    >
                      <IconChevronRight className="size-3 shrink-0 opacity-70" stroke={1.5} aria-hidden />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
