import { IconBolt, IconPuzzle, IconTarget, type TablerIcon } from "@tabler/icons-react";

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

const cardClassName =
  "rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-6 transition-[border-color] duration-200 hover:border-[var(--border)]";

export function ServicesWhy() {
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-14 sm:px-8 md:py-20 lg:px-10">

      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Why Weblynx
      </p>

      <h2 className="mb-12 max-w-2xl font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-[var(--text)] md:text-5xl">
        Four services. One team. Zero handoffs.
      </h2>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map(({ title, body, icon: Icon }) => (
          <article key={title} className={cardClassName}>
            <Icon className="mb-4 size-9 text-[var(--red)]" stroke={1.35} aria-hidden />
            <h4 className="mb-2 font-medium text-[var(--text)]">{title}</h4>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
