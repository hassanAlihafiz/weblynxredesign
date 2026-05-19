"use client";

import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { SiteLogo } from "@/components/brand";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ServicesMegaMenuMobile, ServicesMegaMenuPanel } from "@/components/Navbar/ServicesMegaMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { NAV_ITEMS } from "@/data/site";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
  if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
  if (href === "/case-studies")
    return pathname === "/case-studies" || pathname.startsWith("/case-studies/");
  return pathname === href;
}

function navLinkClass(active: boolean) {
  return active
    ? "font-bold text-[var(--color-primary)]"
    : "text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]";
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
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const portalReady = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const panelId = useId();
  const close = useCallback(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }, []);
  const open = useCallback(() => setMenuOpen(true), []);
  const closeServicesMenu = useCallback(() => setServicesMenuOpen(false), []);
  const handleServicesNavigate = useCallback(() => {
    closeServicesMenu();
    close();
  }, [close, closeServicesMenu]);

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

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setServicesMenuOpen(false);
    setMobileServicesOpen(false);
  }

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
            {NAV_ITEMS.map(({ label, href }) => {
              if (label === "Services") {
                const active = isNavActive(pathname, href);
                return (
                  <div key={label} className="flex flex-col gap-1">
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      className={`flex w-full items-center justify-between gap-2 rounded-[var(--border-radius-md)] px-3 py-3 text-left text-base leading-snug shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-sm)] active:bg-[var(--color-surface-overlay)] ${navLinkClass(active)}`}
                      onClick={() => setMobileServicesOpen((open) => !open)}
                    >
                      {label}
                      <IconChevronDown
                        className={`size-4 shrink-0 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        stroke={1.5}
                        aria-hidden
                      />
                    </button>
                    {mobileServicesOpen ? (
                      <ServicesMegaMenuMobile pathname={pathname} onNavigate={handleServicesNavigate} />
                    ) : null}
                  </div>
                );
              }
              const active = isNavActive(pathname, href);
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-[var(--border-radius-md)] px-3 py-3 text-base leading-snug shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-sm)] active:bg-[var(--color-surface-overlay)] ${navLinkClass(active)}`}
                  onClick={close}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="shrink-0 border-t border-[var(--color-border-tertiary)] px-2.5 pb-[max(1.25rem,calc(env(safe-area-inset-bottom,0px)+14px))] pt-2.5 sm:px-3 sm:pb-[max(1.5rem,calc(env(safe-area-inset-bottom,0px)+18px))] sm:pt-3">
            <a
              href="https://calendly.com/weblynxagency/30min"
              className="flex w-full min-h-[48px] items-center justify-center rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px"
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
      <header
        className="relative sticky top-0 z-30 w-full bg-[var(--color-header-bg)] shadow-[var(--shadow-header)] backdrop-blur-xl backdrop-saturate-150"
        onMouseLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            closeServicesMenu();
          }
        }}
      >
        <ContentContainer>
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
          <div className="hidden min-h-0 w-full grid-cols-[1fr_auto_1fr] items-center gap-2 py-1.5 md:grid lg:gap-4 lg:py-2">
            <div className="flex min-w-0 items-center justify-self-start">
              <Brand />
            </div>
            <nav
              className="flex min-w-0 shrink-0 items-center justify-center gap-2 text-base leading-snug md:gap-4 md:text-lg md:leading-relaxed"
              aria-label="Primary"
            >
              <div
                className="relative flex shrink-0 py-0.5"
                onMouseEnter={() => setServicesMenuOpen(true)}
                onFocusCapture={() => setServicesMenuOpen(true)}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    closeServicesMenu();
                  }
                }}
              >
                <Link
                  href="/services"
                  className={`block px-3 py-1.5 ${navLinkClass(isNavActive(pathname, "/services"))}`}
                  aria-haspopup="true"
                  aria-expanded={servicesMenuOpen}
                  onClick={closeServicesMenu}
                >
                  Services
                </Link>
              </div>
              {NAV_ITEMS.filter((item) => item.label !== "Services").map(({ label, href }) => {
                const active = isNavActive(pathname, href);
                return (
                  <Link
                    key={label}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3 py-1.5 ${navLinkClass(active)}`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex shrink-0 items-center justify-self-end">
              <a
                href="https://calendly.com/weblynxagency/30min"
                className="rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </div>
          </div>
        </ContentContainer>

        <div
          role="menu"
          aria-label="Service offerings"
          className={`absolute left-0 right-0 top-full z-40 hidden w-full pt-2 transition-[opacity,visibility] duration-150 motion-reduce:transition-none md:block ${
            servicesMenuOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
          }`}
          onMouseEnter={() => setServicesMenuOpen(true)}
        >
          <div className="border-t border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] shadow-[var(--shadow-md)] ring-1 ring-inset ring-[var(--color-border-subtle)]">
            <div className="mx-auto w-full max-w-[1260px] px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
              <ServicesMegaMenuPanel pathname={pathname} onNavigate={closeServicesMenu} />
            </div>
          </div>
        </div>
      </header>
      {mobileDrawer}
    </>
  );
}
