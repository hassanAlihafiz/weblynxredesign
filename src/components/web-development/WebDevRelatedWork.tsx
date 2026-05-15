import Link from "next/link";

const projects = [
  {
    href: "/work/finlytics",
    gradient: "linear-gradient(135deg, #2a1b3d, #1a0e2e)",
    tileLabel: "finlytics dashboard",
    title: "Finlytics SaaS",
    meta: "Web app · +40% conversion",
  },
  {
    href: "/work/northbrand-dtc",
    gradient: "linear-gradient(135deg, #0f3d2e, #082018)",
    tileLabel: "northbrand store",
    title: "NorthBrand Store",
    meta: "Shopify · 2.5× revenue",
  },
] as const;

export function WebDevRelatedWork() {
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            Recent work
          </p>
          <h2 className="max-w-xl font-sans text-2xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-3xl">
            Web projects we&apos;ve shipped
          </h2>
        </div>
        <Link
          href="/work"
          className="shrink-0 text-sm font-medium text-[var(--red)] transition-colors hover:text-[var(--red-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
        >
          View all →
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(({ href, gradient, tileLabel, title, meta }) => (
          <Link
            key={href}
            href={href}
            className="block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
          >
            <div className="overflow-hidden rounded-xl" style={{ background: gradient }}>
              <div className="flex aspect-[4/3] items-center justify-center">
                <span className="font-mono text-xs text-white/60">{tileLabel}</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-sm font-medium text-[var(--text)]">{title}</div>
              <div className="text-xs text-[var(--text-muted)]">{meta}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
