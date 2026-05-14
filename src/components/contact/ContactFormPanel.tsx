"use client";

import { IconArrowRight } from "@tabler/icons-react";
import { useId, useState } from "react";

const NEEDS = ["Web dev", "App dev", "Marketing", "Design", "Not sure yet"] as const;
const BUDGETS = ["Under $2k", "$2k–$5k", "$5k–$15k", "$15k+", "Flexible"] as const;
const TIMELINES = ["ASAP", "1–2 months", "3–6 months", "Just exploring"] as const;

const inputClass =
  "w-full min-h-[40px] rounded-[var(--border-radius-md)] border border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)] px-2.5 py-2 text-xs text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-primary-border)] focus:ring-1 focus:ring-[var(--color-primary)] sm:px-3";

function Chip({
  selected,
  children,
  onClick,
}: {
  selected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-2.5 py-1.5 text-[11px] font-medium transition-all sm:px-3 ${
        selected
          ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[var(--shadow-xs)] ring-1 ring-[var(--color-primary-border)]"
          : "border border-[var(--color-border-secondary)] bg-[var(--color-background-primary)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary-border)] hover:text-[var(--color-text-primary)]"
      }`}
    >
      {children}
    </button>
  );
}

export function ContactFormPanel() {
  const formId = useId();
  const [need, setNeed] = useState<string>("Web dev");
  const [budget, setBudget] = useState<string>("$2k–$5k");
  const [timeline, setTimeline] = useState<string>("");

  return (
    <div className="min-w-0 rounded-[var(--border-radius-lg)] bg-[var(--color-background-secondary)] p-4 shadow-[var(--shadow-card)] ring-1 ring-[var(--color-border-subtle)] sm:p-5 md:p-6">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        Project inquiry
      </p>
      <h2 className="mb-4 text-base font-medium sm:text-lg">Send us a message</h2>

      <form
        className="space-y-3 sm:space-y-3.5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2.5">
          <div>
            <label htmlFor={`${formId}-name`} className="mb-1 block text-[11px] text-[var(--color-text-secondary)]">
              Your name
            </label>
            <input id={`${formId}-name`} name="name" type="text" placeholder="Jane Doe" className={inputClass} autoComplete="name" />
          </div>
          <div>
            <label htmlFor={`${formId}-email`} className="mb-1 block text-[11px] text-[var(--color-text-secondary)]">
              Email
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              placeholder="jane@company.com"
              className={inputClass}
              autoComplete="email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2.5">
          <div>
            <label htmlFor={`${formId}-company`} className="mb-1 block text-[11px] text-[var(--color-text-secondary)]">
              Company
            </label>
            <input id={`${formId}-company`} name="company" type="text" placeholder="Acme Inc." className={inputClass} />
          </div>
          <div>
            <label htmlFor={`${formId}-website`} className="mb-1 block text-[11px] text-[var(--color-text-secondary)]">
              Website (optional)
            </label>
            <input id={`${formId}-website`} name="website" type="url" placeholder="acme.com" className={inputClass} />
          </div>
        </div>

        <fieldset className="min-w-0">
          <legend className="mb-1.5 text-[11px] text-[var(--color-text-secondary)]">What do you need?</legend>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {NEEDS.map((n) => (
              <Chip key={n} selected={need === n} onClick={() => setNeed(n)}>
                {n}
              </Chip>
            ))}
          </div>
        </fieldset>

        <fieldset className="min-w-0">
          <legend className="mb-1.5 text-[11px] text-[var(--color-text-secondary)]">Project budget</legend>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {BUDGETS.map((b) => (
              <Chip key={b} selected={budget === b} onClick={() => setBudget(b)}>
                {b}
              </Chip>
            ))}
          </div>
        </fieldset>

        <fieldset className="min-w-0">
          <legend className="mb-1.5 text-[11px] text-[var(--color-text-secondary)]">Timeline</legend>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {TIMELINES.map((t) => (
              <Chip key={t} selected={timeline === t} onClick={() => setTimeline(t === timeline ? "" : t)}>
                {t}
              </Chip>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={`${formId}-message`} className="mb-1 block text-[11px] text-[var(--color-text-secondary)]">
            Tell us about your project
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            placeholder={`A few sentences about what you're building, your goals, and any links that might help us understand the project...`}
            className={`${inputClass} min-h-[100px] resize-y py-2.5 sm:min-h-[120px]`}
          />
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="text-[11px] text-[var(--color-text-tertiary)]">We reply within 24 hours</p>
          <button
            type="submit"
            className="inline-flex w-full shrink-0 items-center justify-center gap-1 rounded-[var(--border-radius-md)] bg-[var(--color-primary)] px-4 py-2.5 text-xs font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px sm:w-auto sm:px-5"
          >
            Send message
            <IconArrowRight className="size-3.5 shrink-0" stroke={1.5} aria-hidden />
          </button>
        </div>
      </form>
    </div>
  );
}
