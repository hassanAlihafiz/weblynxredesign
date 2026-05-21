import { IconCheck, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { GENERATIVE_AI_PAGE } from "@/data/site";

const { whoFor } = GENERATIVE_AI_PAGE;

export function GenAiWhoFor() {
  return (
    <section className="w-full border-t border-[#252525] bg-[#141414] py-9 sm:py-11">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          You probably <span className="text-[var(--red)]">need GenAI</span> if...
        </h2>

        <div className="grid gap-2.5 sm:grid-cols-2"> 
          {whoFor.bullets.map((text) => (
            <div
              key={text}
              className="flex items-start gap-2.5 rounded-lg bg-[var(--bg-elev)] px-4 py-3.5"
            >
              <IconCheck className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={2} aria-hidden />
              <span className="text-base font-medium text-[var(--text)]">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elev)] px-4 py-3.5">
          <IconInfoCircle className="mt-px size-5 shrink-0 text-[var(--red)]" stroke={1.75} aria-hidden />
          <div>
            <p className="mb-1 text-base font-medium text-[var(--text)]">{whoFor.callout.title}</p>
            <p className="text-base leading-tight text-[var(--text-muted)]">
              {whoFor.callout.bodyBeforeRag}
              <Link href={whoFor.callout.rag.href} className="text-[var(--red)] underline underline-offset-2 hover:opacity-90">
                {whoFor.callout.rag.label}
              </Link>
              {whoFor.callout.bodyBetween}
              <Link href={whoFor.callout.agents.href} className="text-[var(--red)] underline underline-offset-2 hover:opacity-90">
                {whoFor.callout.agents.label}
              </Link>
              {whoFor.callout.bodyAfter}
            </p>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
