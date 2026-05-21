import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { ANDROID_APP_DEV_PAGE } from "@/data/site";

const { engagement } = ANDROID_APP_DEV_PAGE;

export function AndroidDevEngagement() {
  return (
    <section id={engagement.sectionId} className="w-full border-t border-[var(--border)] py-11 sm:py-[2.75rem]">
      <ContentContainer>
        <h1 className="mb-3 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Find the <span className="text-[var(--red)]">engagement</span> that fits
        </h1>
        <p className="mb-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">{engagement.description}</p>

        <div className="grid gap-3 md:grid-cols-3">
          {engagement.tiers.map(({ featured, label, title, timeline, items }) => (
            <article
              key={label}
              className={`relative flex flex-col rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] p-4 ${
                featured
                  ? "border-2 border-[var(--red)] bg-[linear-gradient(180deg,rgba(230,57,70,0.05),transparent)]"
                  : "border border-[var(--border)] bg-[#141414]"
              }`}
            >
              {featured ? (
                <span className="absolute -top-[11px] left-5 rounded-full bg-[var(--surface-red)] px-2.5 py-0.5 text-xs font-semibold text-[var(--text)]">
                  {engagement.featuredTierBadge}
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
                href={engagement.ctaHref}
                className="mt-auto text-sm font-medium text-[var(--red)] transition-opacity hover:opacity-90"
              >
                {engagement.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
