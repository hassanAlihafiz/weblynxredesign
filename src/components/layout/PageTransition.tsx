"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lastHandledPath = useRef<string | null>(null);

  const shouldEnter =
    lastHandledPath.current !== null && lastHandledPath.current !== pathname;

  useEffect(() => {
    if (lastHandledPath.current === pathname) return;
    if (lastHandledPath.current === null) {
      lastHandledPath.current = pathname;
      return;
    }
    const reduced = prefersReducedMotion();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduced ? "auto" : "smooth",
    });
    lastHandledPath.current = pathname;
  }, [pathname]);

  return (
    <div key={pathname} className={shouldEnter ? "page-transition-enter" : undefined}>
      {children}
    </div>
  );
}
