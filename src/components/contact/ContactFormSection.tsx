import { SectionEyebrow } from "@/components/home/SectionEyebrow";
import { ContactAside } from "./ContactAside";
import { ContactFormPanel } from "./ContactFormPanel";

export function ContactFormSection() {
  return (
    <section className="border-b border-[var(--color-border-tertiary)] px-6 sm:px-8 lg:px-10 py-9 sm:py-10 md:py-12">
      <SectionEyebrow className="mb-3.5 !text-[var(--color-text-tertiary)] sm:mb-4">SECTION 2 — FORM + INFO SIDEBAR</SectionEyebrow>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start lg:gap-6">
        <ContactFormPanel />
        <ContactAside />
      </div>
    </section>
  );
}
