import { IconBrain, IconCode, IconShieldLock, type TablerIcon } from "@tabler/icons-react";
import Link from "next/link";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { CLOUD_CONSULTING_SERVICES_PAGE, type CloudConsultingRelatedIconId } from "@/data/site";

const relatedIcons: Record<CloudConsultingRelatedIconId, TablerIcon> = {
  code: IconCode,
  brain: IconBrain,
  "shield-lock": IconShieldLock,
};

const { related } = CLOUD_CONSULTING_SERVICES_PAGE;

export function CloudConsultingRelated() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--bg-elev)] py-10 sm:py-11">
      <ContentContainer>
        <div className="grid gap-3 md:grid-cols-3">
          {related.items.map(({ title, description, href, cta, icon, iconColor }) => {
            const Icon = relatedIcons[icon];
            return (
              <Link
                key={title}
                href={href}
                className="group rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 transition-colors hover:border-[var(--red)]/40"
              >
                <Icon className="size-5 shrink-0" style={{ color: iconColor }} stroke={1.5} aria-hidden />
                <h3 className="mb-1 mt-2 text-sm font-semibold text-[var(--text)]">{title}</h3>
                <p className="mb-2.5 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
                <span className="text-sm font-semibold text-[var(--red)] group-hover:opacity-90">{cta}</span>
              </Link>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
