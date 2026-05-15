import { IconCheck } from "@tabler/icons-react";

const bullets = [
  "You have a great product but nobody's finding it",
  "You're spending on ads but not seeing returns",
  "You need leads from organic search",
  "You want one team handling growth, not five vendors",
] as const;

export function DmWhoFor() {
  return (
    <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-elev)] px-6 py-10 shadow-[var(--shadow-inset-soft)] sm:px-8 sm:py-11 md:py-12 lg:px-10">
      <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
        Is this for you?
      </p>
      <h2 className="mb-10 max-w-md text-balance font-sans text-3xl font-semibold leading-snug tracking-[-0.02em] text-[var(--text)] md:text-4xl">
        You probably need this if...
      </h2>
      <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
        {bullets.map((text) => (
          <div key={text} className="flex items-start gap-3">
            <IconCheck className="mt-1 size-[18px] shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
            <span className="text-base leading-relaxed text-[var(--text)]">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
