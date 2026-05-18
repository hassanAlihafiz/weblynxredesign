import { ContactAside } from "./ContactAside";
import { ContactFormPanel } from "./ContactFormPanel";
import { ContentContainer } from "@/components/layout/ContentContainer";

export function ContactFormSection() {
  return (
    <section className="w-full border-b border-[var(--color-border-tertiary)] py-9 sm:py-10 md:py-12">
      <ContentContainer>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start lg:gap-6">
        <ContactFormPanel />
        <ContactAside />
      </div>
    </ContentContainer>
    </section>
  );
}
