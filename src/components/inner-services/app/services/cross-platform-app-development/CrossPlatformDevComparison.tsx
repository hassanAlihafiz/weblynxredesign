import { ContentContainer } from "@/components/layout/ContentContainer";

type CellTone = "default" | "muted" | "warn";

const rows: {
  label: string;
  cross: string;
  native: string;
  crossTone: CellTone;
  nativeTone: CellTone;
}[] = [
  { label: "Build cost", cross: "~50% cheaper", native: "2× higher", crossTone: "default", nativeTone: "muted" },
  {
    label: "Time to launch",
    cross: "~50% faster",
    native: "Slower (two teams)",
    crossTone: "default",
    nativeTone: "muted",
  },
  {
    label: "Codebase",
    cross: "Single codebase",
    native: "Two separate codebases",
    crossTone: "default",
    nativeTone: "muted",
  },
  {
    label: "Performance",
    cross: "Near-native (~95%)",
    native: "Native (100%)",
    crossTone: "default",
    nativeTone: "muted",
  },
  {
    label: "UI feel",
    cross: "Indistinguishable for 80% of apps",
    native: "Pixel-perfect platform-native",
    crossTone: "default",
    nativeTone: "muted",
  },
  {
    label: "Heavy graphics / AR / gaming",
    cross: "Limited",
    native: "Best choice",
    crossTone: "warn",
    nativeTone: "default",
  },
  {
    label: "Watch / TV / Vision Pro",
    cross: "Limited",
    native: "Full support",
    crossTone: "warn",
    nativeTone: "default",
  },
  {
    label: "Maintenance",
    cross: "Update once, deploy twice",
    native: "Update both apps separately",
    crossTone: "default",
    nativeTone: "muted",
  },
];

function cellClass(tone: CellTone) {
  if (tone === "warn") return "text-[#F5C518]";
  if (tone === "muted") return "text-[var(--text-muted)]";
  return "text-[var(--text)]";
}

export function CrossPlatformDevComparison() {
  return (
    <section id="comparison" className="w-full border-t border-[var(--border)] py-10 sm:py-11">
      <ContentContainer>
        <h2 className="mb-1.5 text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
          The honest <span className="text-[var(--red)]">comparison</span>
        </h2>
        <p className="mb-6 max-w-3xl text-balance text-lg leading-relaxed text-[var(--text-muted)]">
          No spin here&apos;s exactly how the two approaches stack up.
        </p>

        <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elev)]">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-[var(--border)] bg-[var(--color-background-primary)]">
            <div className="px-[18px] py-3.5" aria-hidden />
            <p className="border-l border-[var(--border)] px-[18px] py-3.5 text-center text-sm font-semibold uppercase tracking-[0.06em] text-[var(--red)]">
              Cross-platform
            </p>
            <p className="border-l border-[var(--border)] px-[18px] py-3.5 text-center text-sm font-semibold uppercase tracking-[0.06em] text-[var(--text-muted)]">
              Native (iOS + Android)
            </p>
          </div>

          {rows.map(({ label, cross, native, crossTone, nativeTone }, i) => {
            const isLast = i === rows.length - 1;
            return (
              <div
                key={label}
                className={`grid grid-cols-[1.6fr_1fr_1fr] ${isLast ? "" : "border-b border-[var(--border)]"} ${
                  i % 2 === 1 ? "bg-[#0E0E0E]" : ""
                }`}
              >
                <p className="px-[18px] py-3.5 text-[13px] font-semibold text-[var(--text)]">{label}</p>
                <p
                  className={`border-l border-[var(--border)] px-[18px] py-3.5 text-center text-[13px] ${cellClass(crossTone)}`}
                >
                  {cross}
                </p>
                <p
                  className={`border-l border-[var(--border)] px-[18px] py-3.5 text-center text-[13px] ${cellClass(nativeTone)}`}
                >
                  {native}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-[18px] rounded-r-lg border-l-[3px] border-[var(--red)] bg-[linear-gradient(90deg,rgba(230,57,70,0.08),transparent)] px-[18px] py-3.5">
          <p className="text-xs leading-[1.6] text-[var(--text)]">
            <strong className="text-[var(--red)]">Our take:</strong> For 80% of business apps SaaS, ecommerce,
            content, social, productivity cross-platform is the smart default. Go native only when you specifically need
            what native gives you.
          </p>
        </div>
      </ContentContainer>
    </section>
  );
}
