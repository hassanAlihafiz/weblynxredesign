"use client";

import { useState } from "react";
import { SectionEyebrow } from "@/components/home/SectionEyebrow";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <SectionEyebrow className="mb-3.5 text-center !text-[var(--color-text-tertiary)] sm:mb-4">
        SECTION 5 — NEWSLETTER SIGNUP
      </SectionEyebrow>
      <div className="mx-auto max-w-[440px] px-0 text-center">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
          Stay in the loop
        </p>
        <h2 className="mb-2.5 text-lg font-medium sm:text-xl">One email a month. No spam, just useful.</h2>
        <p className="mb-4 text-xs leading-relaxed text-[var(--color-text-secondary)] sm:mb-4 sm:text-[12px] sm:leading-[1.6]">
          New articles, behind-the-scenes work, and free resources for founders and devs.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-[340px] flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-1.5"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="min-h-[44px] w-full min-w-0 flex-1 rounded-[var(--border-radius-md)] border border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)] px-3 py-2 text-left text-xs text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-border)] sm:text-[12px]"
            autoComplete="email"
            aria-label="Email for newsletter"
          />
          <button
            type="submit"
            className="min-h-[44px] shrink-0 rounded-[var(--border-radius-md)] bg-[var(--color-text-primary)] px-3.5 py-2 text-xs font-medium text-[var(--color-background-primary)] transition-opacity hover:opacity-90 sm:px-3.5"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
