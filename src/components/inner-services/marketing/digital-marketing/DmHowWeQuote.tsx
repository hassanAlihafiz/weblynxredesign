import { ContentContainer } from "@/components/layout/ContentContainer";
const steps = [
  { num: "01", title: "Discovery call", body: "Free 30-min review of your goals." },
  { num: "02", title: "Custom plan", body: "Channels, scope, KPIs within 3 days." },
  { num: "03", title: "Kickoff", body: "Audit + strategy in first 2 weeks." },
] as const;

export function DmHowWeQuote() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
            Every business is different <span className="text-[var(--red)]">So is every plan</span>
          </h2>
        </div>
        <div>
          <p className="mb-8 text-lg max-w-xl leading-relaxed text-[var(--text-muted)]">
            After a 30-minute discovery call, we send a detailed proposal within 3 business days channels, monthly
            retainer scope, KPIs, and pricing.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {steps.map(({ num, title, body }) => (
              <article
                key={num}
                className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-4 shadow-[var(--shadow-xs)]"
              >
                <div className="mb-2 font-sans text-[2rem] font-bold leading-none text-[var(--red)] sm:text-[2.125rem]">{num}</div>
                <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
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
