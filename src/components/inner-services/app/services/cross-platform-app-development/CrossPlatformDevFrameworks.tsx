import { IconBrandFlutter, IconBrandReact } from "@tabler/icons-react";
import { ContentContainer } from "@/components/layout/ContentContainer";

const frameworks = [
  {
    name: "React Native",
    icon: IconBrandReact,
    iconClass: "text-[#61DAFB]",
    iconBg: "bg-[rgba(97,218,251,0.12)]",
    description:
      "Built by Meta. Massive ecosystem. Best when you have a web/React team or want JS/TS across web and mobile.",
    bestFor: "SaaS apps · Content apps · Ecommerce · MVPs · Teams already using React",
  },
  {
    name: "Flutter",
    icon: IconBrandFlutter,
    iconClass: "text-[#02B4F7]",
    iconBg: "bg-[rgba(2,180,247,0.12)]",
    description:
      "Built by Google. Single rendering engine, perfectly identical UI across devices. Best when pixel-perfect UI control matters most.",
    bestFor: "Design-heavy apps · Animation-rich apps · Apps requiring identical UI · Custom UI/branding",
  },
] as const;

export function CrossPlatformDevFrameworks() {
  return (
    <section className="w-full border-t border-[var(--border)] bg-[#141414] py-10 sm:py-[2.5rem]">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          React Native or Flutter, <span className="text-[var(--red)]">we pick the right one</span>
        </h2>
        <p className="mb-6 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          Both are excellent. The choice depends on your team, ecosystem, and product needs.
        </p>

        <div className="grid gap-3.5 sm:grid-cols-2">
          {frameworks.map(({ name, icon: Icon, iconClass, iconBg, description, bestFor }) => (
            <article
              key={name}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elev)] p-6"
            >
              <div className="mb-3 flex items-center gap-2.5">
                <div
                  className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
                  aria-hidden
                >
                  <Icon className={`size-6 ${iconClass}`} stroke={1.5} />
                </div>
                <h3 className="text-lg font-medium text-[var(--text)]">{name}</h3>
              </div>
              <p className="mb-3.5 text-base leading-relaxed text-[var(--text-muted)]">{description}</p>
              <p className="mb-1.5 text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]">Best for</p>
              <p className="text-base leading-relaxed text-[var(--text)]">{bestFor}</p>
            </article>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}
