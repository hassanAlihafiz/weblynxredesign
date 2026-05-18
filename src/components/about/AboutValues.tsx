import { ContentContainer } from "@/components/layout/ContentContainer";
const principles = [
  {
    n: "01",
    title: "Speed without shortcuts",
    body: "We ship in weeks, not quarters but never at the cost of quality or maintainability.",
  },
  {
    n: "02",
    title: "Honest communication",
    body: "No buzzwords, no ghosting. You'll always know exactly where your project stands.",
  },
  {
    n: "03",
    title: "Outcomes over output",
    body: "Pretty screens are easy. We care whether your business actually grows.",
  },
  {
    n: "04",
    title: "Partners, not vendors",
    body: "We turn down projects we can't fully commit to. The ones we take, we own.",
  },
] as const;

const cardClassName =
  "rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-6 transition-[border-color] duration-200 hover:border-[var(--border)]";

export function AboutValues() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-14 md:py-20">
      <ContentContainer>

      <h2 className="mb-3 max-w-2xl font-sans text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
        Four <span className="text-[var(--red)]">things</span> we never compromise on
      </h2>

      <p className="mb-12 max-w-md text-[var(--text-muted)]">
        These aren&apos;t marketing words. They&apos;re how every Weblynx project actually runs.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {principles.map(({ n, title, body }) => (
          <article key={n} className={cardClassName}>
            <div className="mb-4 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">
              {n}
            </div>
            <h4 className="mb-2 text-lg font-medium text-[var(--text)]">{title}</h4>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </ContentContainer>
    </section>
  );
}
