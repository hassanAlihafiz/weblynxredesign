import { ContentContainer } from "@/components/layout/ContentContainer";
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
    <section className="w-full border-t border-[var(--border-subtle)] py-14 md:py-20">
      <ContentContainer>

      <h2 className="mb-3 max-w-2xl font-sans text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
        Our <span className="text-[var(--red)]">core capabilities</span>
      </h2>

      <p className="mb-12 max-w-md text-[var(--text-muted)]">
        A focused range of services we&apos;ve shipped enough times to do well.
      </p>

      <div className="grid border-t border-[var(--border-subtle)] md:grid-cols-2">
        {capabilities.map(({ title, stack, description, cellClass }) => (
          <article key={title} className={cellClass}>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <h4 className="font-medium text-[var(--text)]">{title}</h4>
              <span className="shrink-0 text-right font-mono text-xs text-[var(--text-dim)]">{stack}</span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
