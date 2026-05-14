import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const stats = [
  { num: "120+", label: "Projects Delivered" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "5yr", label: "Industry Experience" },
] as const;

export function WebDevHero() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] pb-12 pt-10 shadow-[var(--shadow-inset-soft)] sm:pb-16 sm:pt-14 md:pb-16 md:pt-20">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary-border)] bg-[var(--color-primary-soft)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-primary)] sm:mb-7">
        <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-[var(--color-primary)] motion-reduce:animate-none" aria-hidden />
        Now accepting new projects
      </div>
      <h1 className="mb-5 max-w-[min(100%,36rem)] text-[clamp(2rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:mb-6">
        We Build Websites
        <br />
        <span className="text-[var(--color-primary)]">That Actually Work.</span>
      </h1>
      <p className="mb-8 max-w-[540px] text-[15px] leading-relaxed text-[var(--color-text-secondary)] sm:mb-10 sm:text-base sm:leading-[1.75]">
        From sleek landing pages to full-stack web applications — WebLynx delivers fast, scalable, and beautifully crafted
        digital experiences for modern businesses.
      </p>
      <div className="mb-10 flex flex-wrap gap-3 sm:mb-14 sm:gap-3.5">
        <Link
          href="#quote"
          className="inline-flex min-h-[44px] items-center justify-center gap-1 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary-lg)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px sm:px-6 sm:py-3"
        >
          Request a Quote
          <IconArrowRight className="size-4 shrink-0" stroke={1.5} aria-hidden />
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-border-secondary)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-text-tertiary)] sm:px-6 sm:py-3"
        >
          View Our Work
        </Link>
      </div>
      <div className="grid grid-cols-1 divide-y divide-[var(--color-border-tertiary)] border-t border-[var(--color-border-tertiary)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map(({ num, label }, i) => (
          <div
            key={label}
            className={`py-5 sm:py-5 ${i === 0 ? "sm:pl-0" : ""} ${i === stats.length - 1 ? "sm:pr-0" : ""} sm:px-6`}
          >
            <div className="text-2xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-[32px] sm:leading-none">
              {num}
            </div>
            <div className="mt-0.5 text-[12px] text-[var(--color-text-tertiary)]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
