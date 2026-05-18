import type { TablerIcon } from "@tabler/icons-react";
import {
  IconAsterisk,
  IconDeviceMobile,
  IconLayoutGrid,
  IconPalette,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const disciplines: { title: string; body: string; icon: TablerIcon }[] = [
  {
    title: "Brand identity",
    body: "Logo, type system, color palette, brand guidelines.",
    icon: IconAsterisk,
  },
  {
    title: "UI / UX design",
    body: "Web and product interfaces designed for clarity.",
    icon: IconLayoutGrid,
  },
  {
    title: "Mobile app design",
    body: "iOS and Android with native feel and motion.",
    icon: IconDeviceMobile,
  },
  {
    title: "Marketing & illustration",
    body: "Landing pages, decks, social assets.",
    icon: IconPalette,
  },
];

export function DesignDisciplines() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-8 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          What we design <span className="text-[var(--red)]">One studio</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {disciplines.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)] sm:p-6"
            >
              <Icon className="mb-3 size-6 shrink-0 text-[var(--text)]" stroke={1.5} aria-hidden />
              <h3 className="mb-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
