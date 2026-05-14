import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const members = [
  {
    initials: "YN",
    name: "Your Name",
    role: "Founder & Lead Developer",
    bg: "bg-[#CECBF6] text-[#3C3489]",
  },
  {
    initials: "AK",
    name: "Partner Name",
    role: "Design Lead",
    bg: "bg-[#9FE1CB] text-[#085041]",
  },
  {
    initials: "SR",
    name: "Partner Name",
    role: "Growth Lead",
    bg: "bg-[#F5C4B3] text-[#712B13]",
  },
] as const;

export function AboutTeam() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-12">
      <SectionEyebrow className="mb-3.5">SECTION 5 — TEAM</SectionEyebrow>
      <h2 className="mb-1.5 text-xl font-medium">The people behind Weblynx</h2>
      <p className="mb-5 text-[13px] text-[var(--color-text-secondary)]">Small, senior, and a little obsessed with craft.</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {members.map(({ initials, name, role, bg }) => (
          <article
            key={initials}
            className="rounded-[var(--border-radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-background-primary)] p-4 text-center shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-md)]"
          >
            <div
              className={`mx-auto mb-2.5 flex size-16 items-center justify-center rounded-full text-lg font-medium ${bg}`}
              aria-hidden
            >
              {initials}
            </div>
            <div className="text-[13px] font-medium">{name}</div>
            <div className="mt-0.5 text-[11px] text-[var(--color-text-secondary)]">{role}</div>
            <Link
              href="#"
              className="mt-2 inline-flex items-center justify-center gap-0.5 text-[11px] font-medium text-[var(--color-text-info)] transition-opacity hover:opacity-90"
            >
              LinkedIn
              <IconExternalLink className="size-3" stroke={1.5} aria-hidden />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
