import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  {
    num: "01",
    title: "Scoping call",
    body: "Free 30-min discussion.",
  },
  {
    num: "02",
    title: "Custom proposal",
    body: "Within 3 business days.",
  },
  {
    num: "03",
    title: "Kickoff",
    body: "Start within 1–2 weeks.",
  },
] as const;

export function DesignHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          <div>
            <h2 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
              Every project is different <span className="text-[var(--red)]">So is every quote</span>
            </h2>
          </div>
          <div>
            <p className="mb-6 text-lg leading-relaxed text-[var(--text-muted)]">
              After a 30-minute scoping call, we send a detailed proposal within 3 business days including scope,
              milestones, timeline, and a fixed all-in price. No hourly billing. No surprise add-ons.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-4 shadow-[var(--shadow-xs)]"
                >
                  <div className="mb-2 font-sans text-[2rem] font-bold leading-none text-[var(--red)]">{num}</div>
                  <h3 className="mb-1 text-xl font-medium text-[var(--text)]">{title}</h3>
                  <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
