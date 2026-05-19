import { ContentContainer } from "@/components/layout/ContentContainer";

const steps = [
  { num: "01", title: "Scoping call", body: "Free 30-min on workflows and roles." },
  { num: "02", title: "Custom proposal", body: "Architecture, scope, fixed price within 3 days." },
  { num: "03", title: "Kickoff", body: "Discovery starts within 1–2 weeks." },
] as const;

export function WebPortalDevHowWeQuote() {
  return (
    <section id="quote" className="w-full border-t border-[var(--border)] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-6">
          <header>
            <h2 className="max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
              Every portal is different <span className="text-[var(--red)]">so is every quote</span>
            </h2>
          </header>

          <div>
            <p className="mb-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
              After a 30-minute scoping call, we send a detailed proposal within 3 business days including roles,
              workflows, integrations, security requirements, timeline, and a fixed all-in price. Hosting and
              third-party service costs (Supabase, Vercel, Clerk, etc.) are billed separately and transparently.
            </p>
            <ul className="grid list-none gap-2.5 sm:grid-cols-3">
              {steps.map(({ num, title, body }) => (
                <li
                  key={num}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-4"
                >
                  <p className="mb-1 text-lg font-bold leading-none text-[var(--red)]">{num}</p>
                  <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
