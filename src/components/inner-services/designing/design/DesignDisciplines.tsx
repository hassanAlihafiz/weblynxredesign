import {
  IconAsterisk,
  IconDeviceMobile,
  IconLayoutGrid,
  IconPalette,
  type TablerIcon,
} from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";
import { DESIGN_PAGE } from "@/data/site";
import { DesignSectionHeading } from "./DesignSectionHeading";

const disciplineIcons = {
  asterisk: IconAsterisk,
  "layout-grid": IconLayoutGrid,
  "device-mobile": IconDeviceMobile,
  palette: IconPalette,
} as const satisfies Record<(typeof DESIGN_PAGE.disciplines.items)[number]["icon"], TablerIcon>;

type DiscRow = (typeof DESIGN_PAGE.disciplines.items)[number];
type DiscWithIcon = Omit<DiscRow, "icon"> & { icon: TablerIcon };

const { disciplines } = DESIGN_PAGE;

const rowsWithIcons: DiscWithIcon[] = disciplines.items.map((item) => ({
  ...item,
  icon: disciplineIcons[item.icon],
}));

export function DesignDisciplines() {
  return (
    <section className="w-full border-t border-[var(--border-subtle)] py-10 shadow-[var(--shadow-inset-soft)] sm:py-11 md:py-12">
      <ContentContainer>
        <DesignSectionHeading heading={disciplines.heading} />
        <div className="grid gap-4 md:grid-cols-3">
          {rowsWithIcons.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[var(--border-radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elev)] p-5 shadow-[var(--shadow-xs)] sm:p-6"
            >
              <Icon className="mb-3 size-6 shrink-0 text-[var(--red)]" stroke={1.5} aria-hidden />
              <h3 className="mb-2 text-base font-medium text-[var(--text)]">{title}</h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
