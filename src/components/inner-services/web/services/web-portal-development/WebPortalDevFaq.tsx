"use client";

import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useId, useState } from "react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const faqs = [
  {
    q: "Should I build a portal or just use an off-the-shelf SaaS?",
    a: "Off-the-shelf works when your workflows match the product out of the box. Custom portals win when you need role-specific views, deep integrations, or workflows no SaaS supports without expensive workarounds. We help you decide on the scoping call sometimes a hybrid (custom front-end on existing APIs) is the right middle ground.",
  },
  {
    q: "How do you handle security, GDPR, and SOC 2?",
    a: "We build with least-privilege auth, encrypted data in transit and at rest, audit logs, and privacy-by-design defaults. GDPR-ready consent, data export, and deletion flows can be included. SOC 2-ready architecture (separate environments, access controls, logging) is standard on full portal and enterprise engagements formal certification is your process with your auditor, not ours alone.",
  },
  {
    q: "Can the portal integrate with our existing CRM and tools?",
    a: "Yes. We integrate with Salesforce, HubSpot, Stripe, Slack, Zapier, and custom APIs via webhooks or direct connections. Integrations are scoped in the proposal so you know what's included vs. phase two.",
  },
  {
    q: "Who owns the code, data, and infrastructure?",
    a: "You do. Code lives in your Git repos, data in your database (Supabase, Postgres, etc.), and hosting under your Vercel or cloud accounts. We hand off credentials, documentation, and runbooks at launch no lock-in.",
  },
  {
    q: "Can the portal scale to thousands of concurrent users?",
    a: "Yes. We use serverless/edge-friendly Next.js, connection pooling, caching, and load testing before launch. Architecture choices (read replicas, queues, CDN) are sized to your expected traffic in the proposal.",
  },
  {
    q: "Do you offer maintenance and feature work after launch?",
    a: "Yes. Every project includes post-launch support (30–60 days depending on tier). After that, most clients stay on a light retainer or milestone basis for new features, security updates, and monitoring.",
  },
] as const;

export function WebPortalDevFaq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-5 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Things businesses ask before starting <span className="text-[var(--red)]">Common questions</span>
        </h2>

        <ul className="list-none overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--color-background-primary)]">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            const isLast = i === faqs.length - 1;

            return (
              <li key={q} className={isLast ? "" : "border-b border-[var(--border)]"}>
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-[var(--bg-elev)]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="text-sm font-medium text-[var(--text)]">{q}</span>
                  {isOpen ? (
                    <IconMinus className="size-4 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  ) : (
                    <IconPlus className="size-4 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
                  )}
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[var(--border)] px-4 pb-4 pt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                      {a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </ContentContainer>
    </section>
  );
}
