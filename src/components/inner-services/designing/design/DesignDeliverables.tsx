import type { TablerIcon } from "@tabler/icons-react";
import {
  IconBook,
  IconBulb,
  IconComponents,
  IconFiles,
  IconPencil,
  IconRocket,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const deliverables: { title: string; body: string; icon: TablerIcon }[] = [
  {
    title: "Discovery & research",
    body: "Brand audit, competitor study, mood boards.",
    icon: IconBulb,
  },
  {
    title: "Concepts & iteration",
    body: "2–3 directions, refined to one.",
    icon: IconPencil,
  },
  {
    title: "Brand guidelines",
    body: "Documented standards your team can use.",
    icon: IconBook,
  },
  {
    title: "Source files",
    body: "Figma + exported assets, fully editable.",
    icon: IconFiles,
  },
  {
    title: "Design system",
    body: "Reusable components, tokens, variants.",
    icon: IconComponents,
  },
  {
    title: "Handoff support",
    body: "Developer-ready specs & assets.",
    icon: IconRocket,
  },
];

export function DesignDeliverables() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Every project includes <span className="text-[var(--red)]">everything</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {deliverables.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)]"
            >
              <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
