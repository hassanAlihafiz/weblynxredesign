"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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

function BrandMark() {
  return (
    <Image
      src="/Logo.jpg"
      alt="Weblynx"
      width={200}
      height={56}
      className="h-9 w-auto max-w-[120px] object-contain object-left sm:h-10 sm:max-w-[150px] md:h-10 md:max-w-[170px]"
      priority
    />
  );
}

function Brand({ className = "", onNavigate }: { className?: string; onNavigate?: () => void }) {
  return (
    <Link
      href="/"
      className={`flex items-center text-[var(--color-text-primary)] ${className}`}
      onClick={onNavigate}
    >
      <BrandMark />
    </Link>
  );
}

export function HomeNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const close = useCallback(() => setMenuOpen(false), []);
  const open = useCallback(() => setMenuOpen(true), []);

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

  return (
    <header className="sticky top-0 z-30 w-full border-b border-[var(--color-border-tertiary)] bg-[var(--color-header-bg)] shadow-[var(--shadow-header)] backdrop-blur-xl backdrop-saturate-150">
      {/* Mobile: under md breakpoint (768px) — hamburger left, logo center */}
      <div className="relative flex min-h-[64px] w-full items-center justify-center py-3 md:hidden">
        <button
          type="button"
          className="absolute left-1 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-md text-[var(--color-text-primary)] shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-sm)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={panelId}
          onClick={() => (menuOpen ? close() : open())}
        >
          {menuOpen ? <IconX className="size-6" stroke={1.5} /> : <IconMenu2 className="size-6" stroke={1.5} />}
        </button>
        <Brand />
        <div className="pointer-events-none absolute right-1 top-1/2 size-10 -translate-y-1/2" aria-hidden />
      </div>

      {/* Desktop — logo left, nav centered in page column, CTA right */}
      <div className="hidden min-h-[68px] w-full grid-cols-[auto_1fr_auto] items-center gap-3 py-1.5 md:grid lg:gap-5">
        <div className="flex min-w-0 shrink-0 justify-start">
          <Brand />
        </div>
        <nav
          className="flex min-w-0 items-center justify-center gap-3 text-xs leading-normal sm:gap-4 sm:text-[13px] lg:gap-5"
          aria-label="Primary"
        >
          {navItems.map(({ label, href }) => {
            const active = isNavActive(pathname, href);
            return (
              <Link
                key={label}
                href={href}
                aria-current={active ? "page" : undefined}
                className={navLinkClass(active)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex shrink-0 justify-end">
          <a
            href="#"
            className="rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-3 py-2 text-xs font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px"
          >
            Book a call
          </a>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
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
          className={`absolute left-0 top-0 flex h-[100dvh] max-h-[100dvh] w-[min(100%,24rem)] min-w-0 flex-col border-r border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)] shadow-[var(--shadow-drawer)] transition-transform duration-200 ease-out motion-reduce:transition-none sm:max-w-md ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--color-border-tertiary)] px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
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
            className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto overscroll-y-contain px-2 py-3 sm:px-3"
            aria-label="Primary mobile"
          >
            {navItems.map(({ label, href }) => {
              const active = isNavActive(pathname, href);
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-[var(--border-radius-md)] px-3 py-3 text-sm leading-snug shadow-[var(--shadow-xs)] transition-all hover:bg-[var(--color-surface-raised)] hover:shadow-[var(--shadow-sm)] active:bg-[var(--color-surface-overlay)] ${navLinkClass(active)}`}
                  onClick={close}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="shrink-0 border-t border-[var(--color-border-tertiary)] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4 sm:pb-[max(1rem,env(safe-area-inset-bottom))]">
            <a
              href="#"
              className="flex w-full min-h-[44px] items-center justify-center rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-4 py-2.5 text-xs font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px"
              onClick={close}
            >
              Book a call
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
