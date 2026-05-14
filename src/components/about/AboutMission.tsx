import { SectionEyebrow } from "@/components/home/SectionEyebrow";

export function AboutMission() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-12">
      <SectionEyebrow className="mb-3.5">SECTION 3 — MISSION</SectionEyebrow>
      <blockquote className="max-w-[560px] font-serif text-[22px] font-medium italic leading-snug text-[var(--color-text-primary)] sm:text-[22px]">
        &ldquo;We exist to help founders ship the products they wish existed — without the agency runaround or the
        freelancer chaos.&rdquo;
      </blockquote>
    </section>
  );
}
