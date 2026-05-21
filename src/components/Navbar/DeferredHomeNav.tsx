"use client";

import dynamic from "next/dynamic";
import { HomeHeaderShell } from "@/components/Navbar/HomeHeaderShell";

/** Client nav loads after first paint so hero LCP is not blocked by navbar JS. */
export const DeferredHomeNav = dynamic(
  () => import("@/components/Navbar/Navbar").then((m) => ({ default: m.HomeNav })),
  { ssr: false, loading: () => <HomeHeaderShell /> },
);
