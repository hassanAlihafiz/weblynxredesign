"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { SiteLogo } from "@/components/brand";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

/** Sub-links under Services (Design has no route yet). */
const servicesSubmenu = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Design", href: null },
] as const;

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
  if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
  if (href === "/work") return pathname === "/work" || pathname.startsWith("/work/");
  return pathname === href;
}

function navLinkClass(active: boolean) {
  return active
    ? "font-medium text-[var(--color-text-primary)]"
    : "text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]";
}

function submenuLinkClass(active: boolean) {
  return active
    ? "bg-[var(--color-primary-soft)] font-medium text-[var(--color-text-primary)]"
    : "text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-overlay)] hover:text-[var(--color-text-primary)]";
}

function Brand({
  className = "",
  align = "left",
  onNavigate,
}: {
  className?: string;
  align?: "left" | "center";
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      className={`flex max-w-full items-center text-[var(--color-text-primary)] ${align === "center" ? "min-w-0 justify-center" : ""} ${className}`}
      onClick={onNavigate}
    >
      <SiteLogo align={align} priority />
    </Link>
  );
}

export function HomeNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const panelId = useId();
  const close = useCallback(() => setMenuOpen(false), []);
  const open = useCallback(() => setMenuOpen(true), []);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen, close]);

  const mobileDrawer =
    portalReady &&
    createPortal(
      <div
        className={`fixed inset-0 z-[100] md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-200 ease-out motion-reduce:transition-none ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />
        <aside
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute left-0 top-0 flex h-[100dvh] max-h-[100dvh] w-[min(100%,24rem)] min-w-0 flex-col bg-[var(--color-background-primary)] shadow-[var(--shadow-drawer)] transition-transform duration-200 ease-out motion-reduce:transition-none sm:max-w-md ${
            menuOpen ? "translate-x-0 border-r border-[var(--color-border-tertiary)]" : "-translate-x-full border-r-0"
          }`}
        >
          <div className="flex shrink-0 items-center justify-between gap-2 border-b border-[var(--color-border-tertiary)] px-3 py-1.5 pt-[max(0.5rem,env(safe-area-inset-top))]">
            <Brand onNavigate={close} />
            <button
              type="button"
              className="flex size-10 shrink-0 items-center justify-center rounded-md text-[var(--color-text-secondary)] shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-primary)] hover:shadow-[var(--shadow-sm)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              aria-label="Close menu"
              onClick={close}
            >
              <IconX className="size-6" stroke={1.5} />
            </button>
          </div>

          <nav
            className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto overscroll-y-contain px-2 py-2 pb-4 sm:px-3 sm:pb-5"
            aria-label="Primary mobile"
          >
            {navItems.map(({ label, href }) => {
              if (label === "Services") {
                const active = isNavActive(pathname, href);
                return (
                  <div key={label} className="flex flex-col gap-1">
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-[var(--border-radius-md)] px-3 py-2.5 text-sm leading-snug shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-sm)] active:bg-[var(--color-surface-overlay)] ${navLinkClass(active)}`}
                      onClick={close}
                    >
                      {label}
                    </Link>
                    <div className="mb-0.5 ml-3 flex flex-col gap-0.5 border-l border-[var(--color-border-tertiary)] pl-3">
                      {servicesSubmenu.map((item) => {
                        if (item.href) {
                          const subActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              aria-current={subActive ? "page" : undefined}
                              className={`rounded-[var(--border-radius-md)] px-2 py-2 text-sm leading-snug transition-colors hover:bg-[var(--color-surface-raised)] ${navLinkClass(subActive)}`}
                              onClick={close}
                            >
                              {item.label}
                            </Link>
                          );
                        }
                        return (
                          <span
                            key={item.label}
                            className="rounded-[var(--border-radius-md)] px-2 py-2 text-sm text-[var(--color-text-tertiary)]"
                          >
                            {item.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              const active = isNavActive(pathname, href);
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-[var(--border-radius-md)] px-3 py-2.5 text-sm leading-snug shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-sm)] active:bg-[var(--color-surface-overlay)] ${navLinkClass(active)}`}
                  onClick={close}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="shrink-0 border-t border-[var(--color-border-tertiary)] px-2.5 pb-[max(1.25rem,calc(env(safe-area-inset-bottom,0px)+14px))] pt-2.5 sm:px-3 sm:pb-[max(1.5rem,calc(env(safe-area-inset-bottom,0px)+18px))] sm:pt-3">
            <a
              href="#"
              className="flex w-full min-h-[44px] items-center justify-center rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-4 py-2.5 text-xs font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px"
              onClick={close}
            >
              Book a call
            </a>
          </div>
        </aside>
      </div>,
      document.body,
    );

  return (
    <>
      <header className="sticky top-0 z-30 w-full max-md:px-2 md:px-6 lg:px-8 xl:px-10 bg-[var(--color-header-bg)] shadow-[var(--shadow-header)] backdrop-blur-xl backdrop-saturate-150">
      {/* Mobile — equal side columns so logo is visually centered; tight vertical padding */}
      <div className="grid min-h-0 w-full grid-cols-[2.25rem_1fr_2.25rem] items-center gap-0.5 py-1 sm:grid-cols-[2.5rem_1fr_2.5rem] md:hidden">
        <div className="flex justify-start">
          <button
            type="button"
            className="flex size-9 shrink-0 items-center justify-center rounded-md text-[var(--color-text-primary)] shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-sm)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={panelId}
            onClick={() => (menuOpen ? close() : open())}
          >
            {menuOpen ? <IconX className="size-6" stroke={1.5} /> : <IconMenu2 className="size-6" stroke={1.5} />}
          </button>
        </div>
        <div className="flex min-w-0 justify-center">
          <Brand align="center" />
        </div>
        <div className="flex size-9 shrink-0 justify-self-end" aria-hidden />
      </div>

      {/* Desktop — equal outer columns so nav stays viewport-centered */}
      <div className="hidden min-h-0 w-full grid-cols-[1fr_auto_1fr] items-center gap-2 py-1 md:grid lg:gap-4">
        <div className="flex min-w-0 items-center justify-self-start">
          <Brand />
        </div>
        <nav
          className="flex min-w-0 shrink-0 items-center justify-center gap-0 text-sm leading-snug md:text-base md:leading-relaxed"
          aria-label="Primary"
        >
          <div className="group relative flex shrink-0 py-0.5">
            <Link
              href="/services"
              className={`block px-2 py-1 ${navLinkClass(isNavActive(pathname, "/services"))}`}
              aria-haspopup="true"
            >
              Services
            </Link>
            <div
              role="menu"
              aria-label="Service offerings"
              className="invisible absolute left-1/2 top-full z-50 w-max min-w-[13.5rem] -translate-x-1/2 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 motion-reduce:transition-none"
            >
              <ul className="rounded-[var(--border-radius-md)] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] py-1 shadow-[var(--shadow-md)] ring-1 ring-[var(--color-border-subtle)]">
                {servicesSubmenu.map((item) => {
                  if (item.href) {
                    const subActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          role="menuitem"
                          className={`block px-3 py-2 text-xs sm:text-sm ${submenuLinkClass(subActive)}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={item.label}>
                      <span className="block cursor-default px-3 py-2 text-xs text-[var(--color-text-tertiary)] sm:text-sm">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {navItems
            .filter((item) => item.label !== "Services")
            .map(({ label, href }) => {
              const active = isNavActive(pathname, href);
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`block px-2 py-1 ${navLinkClass(active)}`}
                >
                  {label}
                </Link>
              );
            })}
        </nav>
        <div className="flex shrink-0 items-center justify-self-end">
          <a
            href="#"
            className="rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-3 py-1.5 text-xs font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
    {mobileDrawer}
    </>
  );
}
