import { IconBolt, IconPuzzle, IconTarget, type TablerIcon } from "@tabler/icons-react";
import { SectionEyebrow } from "@/components/home/SectionEyebrow";

const items: { title: string; body: string; icon: TablerIcon }[] = [
  {
    title: "Ship in weeks",
    body: "Most projects live within 4–6 weeks.",
    icon: IconBolt,
  },
  {
    title: "All under one roof",
    body: "Design, dev, and growth — no agency stitching.",
    icon: IconPuzzle,
  },
  {
    title: "Outcome-first",
    body: "We track business results, not just deliverables.",
    icon: IconTarget,
  },
];

export function ServicesWhy() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <SectionEyebrow className="mb-4 sm:mb-5">SECTION 3 — WHY WEBLYNX</SectionEyebrow>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        Why us
      </p>
      <h2 className="mb-5 max-w-[480px] text-xl font-medium leading-snug tracking-tight text-balance sm:text-[22px]">
        Four services. One team. Zero handoffs.
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3">
        {items.map(({ title, body, icon: Icon }) => (
          <div
            key={title}
            className="rounded-[var(--border-radius-md)] bg-[var(--color-background-primary)] p-4 shadow-[var(--shadow-card)] sm:p-4 md:p-4"
          >
            <Icon className="size-5 text-[var(--color-text-info)]" stroke={1.5} aria-hidden />
            <h3 className="mt-2.5 text-[13px] font-medium leading-snug">{title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)] sm:text-[12px] sm:leading-[1.6]">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
