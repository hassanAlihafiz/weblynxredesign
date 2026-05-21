import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { AI_AGENT_DEVELOPMENT_PAGE } from "@/data/site";

const { whoFor } = AI_AGENT_DEVELOPMENT_PAGE;

function bulletKey(bullet: (typeof whoFor.bullets)[number]) {
  return typeof bullet === "string" ? bullet : bullet.textBefore;
}

function BulletContent({ bullet }: { bullet: (typeof whoFor.bullets)[number] }) {
  if (typeof bullet === "string") {
    return <span className="text-base leading-relaxed text-[var(--text)]">{bullet}</span>;
  }
  return (
    <span className="text-base leading-relaxed text-[var(--text)]">
      {bullet.textBefore}
      <em className="not-italic">{bullet.emphasis}</em>
      {bullet.textAfter}
    </span>
  );
}

export function AiAgentWhoFor() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-9 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably need <span className="text-[var(--red)]">AI agents</span> if...
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {whoFor.bullets.map((bullet) => (
            <div
              key={bulletKey(bullet)}
              className="flex items-start gap-2.5 rounded-[var(--border-radius-md)] border border-[var(--border)] bg-[var(--bg-elev)] px-4 py-3.5"
            >
              <IconCheck className="mt-px size-4 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <BulletContent bullet={bullet} />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-[var(--border-radius-md)] border border-[var(--red-glow)] bg-[var(--bg-elev)] px-4 py-4">
          <IconInfoCircle className="mt-px size-4 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
          <div>
            <p className="mb-1 text-sm font-semibold text-[var(--text)]">{whoFor.callout.title}</p>
            <p className="text-base leading-relaxed text-[var(--text-muted)]">
              {whoFor.callout.bodyBefore}
              <Link
                href={whoFor.callout.automation.href}
                className="text-[var(--red)] underline underline-offset-2 hover:opacity-90"
              >
                {whoFor.callout.automation.label}
              </Link>
              {whoFor.callout.bodyAfter}
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
