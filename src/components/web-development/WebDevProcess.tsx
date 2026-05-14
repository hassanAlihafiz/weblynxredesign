const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    body: "We dig deep into your goals, audience, and competitors. This phase produces a clear project roadmap, sitemap, and wireframe strategy before a single line of code is written.",
  },
  {
    num: "02",
    title: "Design & Prototyping",
    body: "Our designers craft high-fidelity mockups in Figma, covering all key pages and user flows. You get to review, give feedback, and approve before we move forward.",
  },
  {
    num: "03",
    title: "Development & QA",
    body: "Approved designs become clean, maintainable code. Every feature is tested across browsers and devices, with performance benchmarks hit before handoff.",
  },
  {
    num: "04",
    title: "Launch & Support",
    body: "We handle deployment, domain config, and monitoring. Post-launch, we offer ongoing maintenance and feature development so your site never falls behind.",
  },
] as const;

export function WebDevProcess() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-12 shadow-[var(--shadow-inset-soft)] sm:py-14 md:py-[4.5rem]">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">How We Work</p>
      <h2 className="mb-0 text-2xl font-semibold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-[clamp(1.5rem,4vw,2.25rem)]">
        Our Process
      </h2>
      <div className="mt-10 flex flex-col sm:mt-12">
        {steps.map(({ num, title, body }) => (
          <div
            key={num}
            className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 border-b border-[var(--color-border-tertiary)] py-6 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6 sm:py-7"
          >
            <div className="pt-0.5 text-[13px] font-bold tabular-nums text-[var(--color-text-tertiary)]">{num}</div>
            <div className="min-w-0">
              <h3 className="mb-1.5 text-[17px] font-semibold leading-snug">{title}</h3>
              <p className="text-[13px] leading-relaxed text-[var(--color-text-secondary)] sm:leading-[1.7]">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
