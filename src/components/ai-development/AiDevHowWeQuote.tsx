import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  {
    num: "01",
    title: "Scoping call",
    body: "Free 30-min define the use case and viability.",
  },
  {
    num: "02",
    title: "Custom proposal",
    body: "Scope, timeline, fixed price within 3 days.",
  },
  {
    num: "03",
    title: "Kickoff",
    body: "Discovery sprint starts within 1–2 weeks.",
  },
] as const;

export function AiDevHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          <div>
            <h2 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
              Every AI project is different <span className="text-[var(--red)]">So is every quote</span>
            </h2>
          </div>
          <div>
            <p className="mb-6 text-lg leading-relaxed text-[var(--text-muted)]">
              After a 30-minute scoping call, we send a detailed proposal within 3 business days including scope,
              milestones, success metrics, and a fixed all-in price. API costs are estimated separately so you have full
              transparency.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg)] p-4 shadow-[var(--shadow-xs)]"
                >
                  <div className="mb-2 font-sans text-2xl font-bold leading-none text-[var(--red)]">{num}</div>
                  <h3 className="mb-1 text-sm font-medium text-[var(--text)]">{title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
