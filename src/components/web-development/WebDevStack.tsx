const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Sanity CMS",
  "Vercel",
  "Framer Motion",
  "Shopify",
] as const;

export function WebDevStack() {
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-8 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-9 md:py-10 lg:px-10">
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Our stack
      </p>
      <h2 className="mb-6 max-w-2xl font-sans text-2xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-3xl">
        Modern tools we ship with
      </h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((name) => (
          <span key={name} className="chip">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
