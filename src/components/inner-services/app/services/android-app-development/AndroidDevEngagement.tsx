import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";

const tiers = [
  {
    featured: false,
    label: "Engagement 01",
    title: "Lite MVP",
    timeline: "4-week delivery",
    items: [
      "Up to 5 screens",
      "Single user role",
      "Basic backend (Firebase)",
      "Email auth",
      "Play Store submission",
      "30-day support",
    ],
  },
  {
    featured: true,
    label: "Engagement 02",
    title: "Full MVP",
    timeline: "8-week delivery",
    items: [
      "Up to 15 screens",
      "Multi-user roles",
      "Custom backend + DB",
      "Social & biometric login",
      "Push notifications",
      "Google Pay / Stripe",
      "60-day support",
    ],
  },
  {
    featured: false,
    label: "Engagement 03",
    title: "Production app",
    timeline: "12+ week engagement",
    items: [
      "Unlimited screens",
      "Complex logic + real-time",
      "Wear OS / TV companion",
      "Admin dashboard",
      "Crashlytics + Performance",
      "Ongoing retainer",
    ],
  },
] as const;

export function AndroidDevEngagement() {
  return (
    <section
      id="engagement"
      className="w-full border-t border-[var(--border)] py-11 sm:py-[2.75rem]"
    >
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Find the engagement that <span className="text-[var(--red)]">fits</span>
        </h2>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
          Every Android project is quoted based on scope. Three engagement models cover most cases.
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          {tiers.map(({ featured, label, title, timeline, items }) => (
            <article
              key={label}
              className={`relative flex flex-col rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4 ${
                featured
                  ? "border-2 border-[var(--red)] bg-[linear-gradient(180deg,rgba(230,57,70,0.05),transparent)]"
                  : "border border-[var(--border)] bg-[#141414]"
              }`}
            >
              {featured ? (
                <span className="absolute -top-[11px] left-5 rounded-full bg-[var(--red)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--text)]">
                  Most common
                </span>
              ) : null}
              <p className="mb-1.5 text-sm font-medium uppercase tracking-[0.06em] text-[var(--text-muted)]">{label}</p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="mb-3.5 text-base leading-relaxed text-[var(--text-muted)]">{timeline}</p>
              <ul className="mb-3.5 flex-1 list-none space-y-0 border-t border-[var(--border)] pt-3 text-base leading-relaxed text-[var(--text-muted)]">
                {items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-auto text-sm font-medium text-[var(--red)] transition-opacity hover:opacity-90"
              >
                Request a quote →
              </Link>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
