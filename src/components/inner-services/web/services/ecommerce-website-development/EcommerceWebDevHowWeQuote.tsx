import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  { num: "01", title: "Discovery call", body: "Free 30-min on brand, products, customers." },
  { num: "02", title: "Custom proposal", body: "Platform + scope + price within 3 days." },
  { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
] as const;

export function EcommerceWebDevHowWeQuote() {
  return (
    <section id="quote" className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-6">
          <div>
            <h2 className="mb-1.5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
              Every brand is different <span className="text-[var(--red)]">So is every store</span>
            </h2>
          </div>

          <div>
            <p className="mb-5 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
              After a 30-minute discovery call, we send a detailed proposal within 3 business days including platform
              recommendation, scope, milestones, and a fixed all-in price. Shopify subscription, apps, and shipping
              costs are separate.
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {steps.map(({ num, title, body }) => (
                <article
                  key={num}
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4"
                >
                  <p className="mb-1 text-lg font-bold leading-none text-[var(--red)]">{num}</p>
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
