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
      "iOS + Android",
      "Basic backend",
      "Email auth",
      "Both stores submitted",
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
      "iOS + Android + tablet",
      "Custom backend + DB",
      "Social + biometric login",
      "Push + payments",
      "OTA updates",
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
      "Native modules where needed",
      "Admin dashboard",
      "Analytics + monitoring",
      "Ongoing retainer",
    ],
  },
] as const;

export function CrossPlatformDevEngagement() {
  return (
    <section id="engagement" className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Find the <span className="text-[var(--red)]">engagement </span>that fits
        </h2>
        <p className="mb-6 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Every project includes both iOS and Android. Three engagement models cover most cases.
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          {tiers.map(({ featured, label, title, timeline, items }) => (
            <article
              key={label}
              className={`relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-5 ${
                featured
                  ? "border-2 border-[var(--red)] bg-[linear-gradient(180deg,rgba(230,57,70,0.05),transparent)]"
                  : "border border-[var(--border)] bg-[var(--bg-elev)]"
              }`}
            >
              {featured ? (
                <span className="absolute -top-[11px] left-5 rounded-full bg-[var(--red)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--text)]">
                  Most common
                </span>
              ) : null}
              <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">{label}</p>
              <h3 className="mb-1 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="mb-3.5 text-base leading-relaxed text-[var(--text-muted)]">{timeline}</p>
              <ul className="mb-3.5 flex-1 list-none space-y-0 border-t border-[var(--border)] pt-3 text-base leading-relaxed text-[var(--text-muted)]">
                {items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <Link
                href="#quote"
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
