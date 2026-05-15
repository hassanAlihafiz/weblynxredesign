import Link from "next/link";

const tiers = [
  {
    featured: false,
    label: "Engagement 01",
    title: "Lite MVP",
    timeline: "4-week delivery",
    items: [
      "Up to 5 screens",
      "Single user role",
      "Basic backend",
      "Email auth",
      "Both stores submitted",
      "30-day support",
    ],
  },
  {
    featured: true,
    label: "Engagement 02",
    title: "Full MVP",
    timeline: "8-week delivery",
    items: [
      "Up to 15 screens",
      "Multi-user roles",
      "Custom backend + DB",
      "Social login",
      "Push notifications",
      "Payments (Stripe)",
      "60-day support",
    ],
  },
  {
    featured: false,
    label: "Engagement 03",
    title: "Production app",
    timeline: "12+ week engagement",
    items: [
      "Unlimited screens",
      "Complex business logic",
      "Real-time features",
      "Admin dashboard",
      "Analytics + Sentry",
      "Ongoing retainer",
    ],
  },
] as const;

export function AppDevEngagement() {
  return (
    <section
      id="engagement"
      className="border-t border-[var(--border-subtle)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10"
    >
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Project scopes
      </p>
      <h2 className="mb-3 max-w-3xl text-balance font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--text)] md:text-5xl">
        Find the engagement that fits
      </h2>
      <p className="mb-10 max-w-md text-base leading-relaxed text-[var(--text-muted)]">
        All packages include both iOS and Android. Custom quotes available for larger scopes.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map(({ featured, label, title, timeline, items }) => (
          <article
            key={label}
            className={`relative flex flex-col rounded-xl bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)] ${
              featured
                ? "border-2 border-[var(--red)] pt-6"
                : "border border-[var(--border-subtle)]"
            }`}
          >
            {featured ? (
              <span className="absolute -top-3 left-5 rounded-md bg-[var(--red)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--text)]">
                Most common
              </span>
            ) : null}
            <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
              {label}
            </p>
            <h3 className="mb-2 text-xl font-semibold text-[var(--text)]">{title}</h3>
            <p className="mb-5 text-xs text-[var(--text-muted)]">{timeline}</p>
            <ul className="mb-6 list-none space-y-2 border-t border-[var(--border-subtle)] pt-4 text-sm leading-relaxed text-[var(--text-muted)]">
              {items.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link
              href="#quote"
              className="mt-auto text-sm font-medium text-[var(--red)] transition-colors hover:text-[var(--red-bright)]"
            >
              Request a quote →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
