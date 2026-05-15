const capabilities = [
  {
    title: "Web development",
    stack: "Next.js · React · TypeScript",
    description: "Marketing sites, web apps, dashboards.",
    cellClass:
      "border-b border-[var(--border-subtle)] p-6 md:border-r",
  },
  {
    title: "App development",
    stack: "React Native · Expo",
    description: "iOS and Android apps from MVP to scale.",
    cellClass: "border-b border-[var(--border-subtle)] p-6",
  },
  {
    title: "Digital marketing",
    stack: "SEO · Ads · Content",
    description: "Get found, get clicks, get customers.",
    cellClass:
      "border-b border-[var(--border-subtle)] p-6 md:border-b-0 md:border-r",
  },
  {
    title: "Design",
    stack: "Brand · UI/UX · Identity",
    description: "Brand systems, product UI, full identity.",
    cellClass: "p-6",
  },
] as const;

export function AboutCapabilities() {
  return (
    <section className="border-t border-[var(--border-subtle)] px-6 py-14 sm:px-8 md:py-20 lg:px-10">

      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        What we do best
      </p>

      <h2 className="mb-3 max-w-3xl font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
        Our core capabilities
      </h2>

      <p className="mb-12 max-w-md text-[var(--text-muted)]">
        A focused range of services we&apos;ve shipped enough times to do well.
      </p>

      <div className="grid border-t border-[var(--border-subtle)] md:grid-cols-2">
        {capabilities.map(({ title, stack, description, cellClass }) => (
          <div key={title} className={cellClass}>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <h4 className="font-medium text-[var(--text)]">{title}</h4>
              <span className="shrink-0 text-right font-mono text-xs text-[var(--text-dim)]">{stack}</span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
