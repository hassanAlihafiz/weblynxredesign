import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  type TablerIcon,
} from "@tabler/icons-react";

const social: { label: string; href: string; Icon: TablerIcon }[] = [
  { label: "LinkedIn", href: "#", Icon: IconBrandLinkedin },
  { label: "Instagram", href: "#", Icon: IconBrandInstagram },
  { label: "X", href: "#", Icon: IconBrandX },
];

export function HomeFooter() {
  return (
    <footer className="flex w-full flex-col gap-3 border-t border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)] py-5 shadow-[0_-8px_32px_rgba(0,0,0,0.45)] sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[11px] text-[var(--color-text-tertiary)]">© 2026 Weblynx · Karachi, PK</p>
      <div className="flex items-center gap-3.5 text-[var(--color-text-tertiary)]">
        {social.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            className="rounded-full p-2 text-[var(--color-text-tertiary)] shadow-[var(--shadow-xs)] ring-1 ring-transparent transition-all hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-primary)] hover:shadow-[var(--shadow-sm)] hover:ring-[var(--color-border-subtle)]"
            aria-label={label}
          >
            <Icon className="size-4" stroke={1.25} />
          </a>
        ))}
      </div>
    </footer>
  );
}
