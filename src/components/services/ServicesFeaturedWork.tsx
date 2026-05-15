import Link from "next/link";

const projects = [
  {
    href: "/work/finlytics",
    gradient: "linear-gradient(135deg, #2a1b3d, #1a0e2e)",
    tileLabel: "finlytics saas",
    title: "Finlytics SaaS",
    meta: "Web · +40% conversion",
  },
  {
    href: "/work/trekr-fitness",
    gradient: "linear-gradient(135deg, #0f3d2e, #082018)",
    tileLabel: "trekr app",
    title: "Trekr App",
    meta: "App · 12k installs",
  },
  {
    href: "/work/lumen-beauty",
    gradient: "linear-gradient(135deg, #4a3617, #2a1f0d)",
    tileLabel: "lumen beauty",
    title: "Lumen Beauty",
    meta: "Marketing · +320% traffic",
  },
] as const;

export function ServicesFeaturedWork() {
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-14 sm:px-8 md:py-20 lg:px-10">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            Recent results
          </p>
          <h2 className="max-w-2xl font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-4xl">
            Work across all four services
          </h2>
        </div>
        <Link
          href="/work"
          className="shrink-0 text-sm font-medium text-[var(--red)] transition-colors hover:text-[var(--red-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
        >
          View all →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map(({ href, gradient, tileLabel, title, meta }) => (
          <Link key={href} href={href} className="block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]">
            <div className="overflow-hidden rounded-xl" style={{ background: gradient }}>
              <div className="flex aspect-[4/3] items-center justify-center">
                <span className="font-mono text-xs text-white/60">{tileLabel}</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium text-[var(--text)]">{title}</div>
              <div className="text-xs text-[var(--text-muted)]">{meta}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
