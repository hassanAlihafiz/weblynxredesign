"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [shouldEnter, setShouldEnter] = useState(false);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setShouldEnter(true);
  }

  useEffect(() => {
    if (!shouldEnter) return;
    const reduced = prefersReducedMotion();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduced ? "auto" : "smooth",
    });
  }, [pathname, shouldEnter]);

  return (
    <div key={pathname} className={shouldEnter ? "page-transition-enter" : undefined}>
      {children}
    </div>
  );
}
