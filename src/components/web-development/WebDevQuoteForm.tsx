"use client";

import { IconArrowRight, IconCircleCheck } from "@tabler/icons-react";
import { useId, useState } from "react";

const inputClass =
  "w-full min-h-[44px] rounded-[10px] border border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)] px-3.5 py-2.5 text-sm text-[var(--color-text-primary)] outline-none transition-colors placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-primary-border)] focus:ring-1 focus:ring-[var(--color-primary)]";

const selectClass = `${inputClass} appearance-none bg-[var(--color-background-primary)]`;

const FEATURE_OPTIONS = [
  "Custom UI/UX Design",
  "Frontend Development",
  "Backend & Database",
  "E-Commerce / Payments",
  "CMS Integration",
  "SEO & Performance",
  "API / Third-party Integration",
  "Ongoing Maintenance",
] as const;

const PROJECT_TYPES = [
  "",
  "Business Website",
  "Landing Page",
  "E-Commerce Store",
  "Web Application / SaaS",
  "Portfolio / Personal Site",
  "Other",
] as const;

const TIMELINES = ["", "ASAP (1–2 weeks)", "1 Month", "2–3 Months", "3–6 Months", "Flexible"] as const;

const HEAR = ["", "Google Search", "Social Media", "Referral / Word of Mouth", "LinkedIn", "Other"] as const;

export function WebDevQuoteForm() {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [timeline, setTimeline] = useState("");
  const [hear, setHear] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  function toggleFeature(f: string) {
    setSelectedFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    if (!name.trim() || !email.trim()) {
      setFormError("Please fill in at least your name and email.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <section id="quote" className="py-12 shadow-[var(--shadow-inset-soft)] sm:py-14 md:py-[4.5rem]">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">Get a Quote</p>
      <h2 className="mb-8 text-2xl font-semibold leading-tight tracking-tight text-[var(--color-text-primary)] sm:mb-10 sm:text-[clamp(1.5rem,4vw,2.25rem)] md:mb-12">
        Tell Us About Your Project
      </h2>
      <div className="relative overflow-hidden rounded-[20px] border border-[var(--color-border-tertiary)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-card)] sm:p-8 md:p-12">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,var(--color-primary-soft),transparent)] opacity-90"
          aria-hidden
        />
        <div className="relative">
          {!submitted ? (
            <>
              <div className="mb-8 sm:mb-10 md:mb-9">
                <h3 className="mb-2.5 text-xl font-semibold leading-snug tracking-tight sm:text-2xl sm:leading-tight">
                  Every project is unique — so is our pricing.
                </h3>
                <p className="max-w-[500px] text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-[14px] sm:leading-[1.7]">
                  Fill in the form below and we&apos;ll review your requirements and send you a tailored quote within 24 hours.
                  No commitment required.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-name`} className="text-[12px] text-[var(--color-text-secondary)]">
                    Full Name
                  </label>
                  <input
                    id={`${id}-name`}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    className={inputClass}
                    autoComplete="name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-email`} className="text-[12px] text-[var(--color-text-secondary)]">
                    Email Address
                  </label>
                  <input
                    id={`${id}-email`}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className={inputClass}
                    autoComplete="email"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-company`} className="text-[12px] text-[var(--color-text-secondary)]">
                    Company / Brand Name
                  </label>
                  <input
                    id={`${id}-company`}
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Inc."
                    className={inputClass}
                    autoComplete="organization"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-type`} className="text-[12px] text-[var(--color-text-secondary)]">
                    Project Type
                  </label>
                  <select
                    id={`${id}-type`}
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select a type...</option>
                    {PROJECT_TYPES.filter(Boolean).map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-[12px] text-[var(--color-text-secondary)]">What features or services do you need?</span>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {FEATURE_OPTIONS.map((f) => (
                      <label
                        key={f}
                        className="flex cursor-pointer items-center gap-2.5 rounded-[10px] border border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)] px-3.5 py-2.5 transition-colors hover:border-[var(--color-primary-border)] has-[:focus-visible]:ring-1 has-[:focus-visible]:ring-[var(--color-primary)]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(f)}
                          onChange={() => toggleFeature(f)}
                          className="size-4 shrink-0 cursor-pointer accent-[var(--color-primary)]"
                        />
                        <span className="text-[13px] text-[var(--color-text-secondary)]">{f}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor={`${id}-desc`} className="text-[12px] text-[var(--color-text-secondary)]">
                    Describe your project
                  </label>
                  <textarea
                    id={`${id}-desc`}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder="Tell us what you're building, who it's for, any inspiration or references, and any other details that help us understand your vision..."
                    className={`${inputClass} min-h-[120px] resize-y`}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-timeline`} className="text-[12px] text-[var(--color-text-secondary)]">
                    Expected Timeline
                  </label>
                  <select
                    id={`${id}-timeline`}
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className={selectClass}
                  >
                    <option value="">Select a timeline...</option>
                    {TIMELINES.filter(Boolean).map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor={`${id}-hear`} className="text-[12px] text-[var(--color-text-secondary)]">
                    How did you hear about us?
                  </label>
                  <select id={`${id}-hear`} value={hear} onChange={(e) => setHear(e.target.value)} className={selectClass}>
                    <option value="">Select an option...</option>
                    {HEAR.filter(Boolean).map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-1 flex flex-col gap-3 sm:col-span-2 sm:mt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-1 rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-medium text-[var(--color-on-primary)] shadow-[var(--shadow-primary-lg)] ring-1 ring-[var(--color-primary-border)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-primary-hover)] active:translate-y-px sm:w-auto"
                  >
                    Send My Request
                    <IconArrowRight className="size-4 shrink-0" stroke={1.5} aria-hidden />
                  </button>
                  <p className="text-center text-[12px] text-[var(--color-text-tertiary)] sm:text-left">
                    We&apos;ll reply within 24 hours with a custom quote.
                  </p>
                  {formError ? (
                    <p className="w-full text-center text-[12px] text-[var(--color-primary)] sm:text-left" role="alert">
                      {formError}
                    </p>
                  ) : null}
                </div>
              </form>
            </>
          ) : (
            <div className="py-6 text-center sm:py-8">
              <IconCircleCheck
                className="mx-auto mb-3 size-10 text-[var(--color-primary)] sm:size-11"
                stroke={1.25}
                aria-hidden
              />
              <h3 className="mb-2 text-xl font-semibold">Request received!</h3>
              <p className="mx-auto max-w-md text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                Thanks for reaching out. We&apos;ll review your project details and send you a custom quote within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
