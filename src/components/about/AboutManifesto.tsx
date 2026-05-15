export function AboutManifesto() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-14 text-center sm:px-8 md:py-20 lg:px-10">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] max-w-[min(100vw,800px)] -translate-x-1/2 -translate-y-1/2 rounded-full red-glow"
        aria-hidden
      />

      <div className="relative z-10">

        <p className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text)]">
          What we believe
        </p>

        <blockquote className="mx-auto max-w-3xl font-serif text-3xl italic leading-tight text-[var(--text)] md:text-5xl">
          &ldquo;The best digital products aren&apos;t built by big teams or fancy stacks. They&apos;re built by
          people who care deeply about the details — and who ship.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
