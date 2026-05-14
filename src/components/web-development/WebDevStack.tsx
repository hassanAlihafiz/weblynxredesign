import type { TablerIcon } from "@tabler/icons-react";
import {
  IconBrandAws,
  IconBrandFirebase,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
} from "@tabler/icons-react";

const stack: { label: string; icon: TablerIcon }[] = [
  { label: "React", icon: IconBrandReact },
  { label: "Next.js", icon: IconBrandNextjs },
  { label: "JavaScript", icon: IconBrandJavascript },
  { label: "TypeScript", icon: IconBrandTypescript },
  { label: "TailwindCSS", icon: IconBrandTailwind },
  { label: "Node.js", icon: IconBrandNodejs },
  { label: "PostgreSQL", icon: IconDatabase },
  { label: "Firebase", icon: IconBrandFirebase },
  { label: "AWS", icon: IconBrandAws },
  { label: "GitHub", icon: IconBrandGithub },
];

export function WebDevStack() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] py-12 shadow-[var(--shadow-inset-soft)] sm:py-14 md:py-[4.5rem]">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">Tech Stack</p>
      <h2 className="mb-8 text-2xl font-semibold leading-tight tracking-tight text-[var(--color-text-primary)] sm:mb-10 sm:text-[clamp(1.5rem,4vw,2.25rem)] md:mb-12">
        Built With the Best Tools
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
        {stack.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center rounded-xl border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] px-3 py-4 text-center text-[12px] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary-border)] hover:text-[var(--color-text-primary)] sm:py-[18px]"
          >
            <Icon className="mb-2 size-[22px] text-[var(--color-text-primary)]" stroke={1.25} aria-hidden />
            <span className="leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
