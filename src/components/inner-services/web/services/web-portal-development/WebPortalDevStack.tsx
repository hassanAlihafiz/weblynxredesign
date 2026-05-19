import { ContentContainer } from "@/components/layout/ContentContainer";

const stack = [
  "Next.js",
  "TypeScript",
  "Postgres",
  "Supabase",
  "Clerk / Auth.js",
  "Prisma / Drizzle",
  "tRPC",
  "Stripe Billing",
  "Resend",
  "Vercel",
  "Sentry",
  "PostHog",
] as const;

export function WebPortalDevStack() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <h2 className="mb-4 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          Modern tools we <span className="text-[var(--red)]">ship with</span>
        </h2>

        <div className="flex flex-wrap gap-2">
          {stack.map((label) => (
            <span
              key={label}
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
            >
              {label}
            </span>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
