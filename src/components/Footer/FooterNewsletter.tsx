"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

const headingClass = "text-meta mb-4 text-[var(--text-muted)]";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="min-w-0">
      <div className={headingClass}>Subscribe for newsletter</div>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-sm flex-col gap-1 sm:flex-row sm:items-stretch sm:gap-1"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="min-h-[44px] w-full min-w-0 flex-1 rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] focus:outline-none focus:ring-2 focus:ring-[var(--red)] focus:ring-offset-2 focus:ring-offset-[var(--bg-elev)]"
          autoComplete="email"
          aria-label="Email for newsletter"
        />
        <Button type="submit" className="min-h-[44px] shrink-0">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
