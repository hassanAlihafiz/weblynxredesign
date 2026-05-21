"use client";

import dynamic from "next/dynamic";

export const DeferredFooter = dynamic(
  () => import("@/components/Footer/Footer").then((m) => ({ default: m.HomeFooter })),
  {
    ssr: false,
    loading: () => <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-6" aria-hidden />,
  },
);
