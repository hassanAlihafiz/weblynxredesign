import Link from "next/link";

const gradPrefix = "dm-hero";

export function DmHero() {
  return (
    <>
      <div className="px-6 pb-2 pt-8 sm:px-8 lg:px-10">
        <div className="font-mono text-xs text-[var(--text-dim)]">
          <Link href="/services" className="transition-colors hover:text-[var(--text-muted)]">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--text)]">Digital marketing</span>
        </div>
      </div>

      <section className="relative overflow-hidden px-6 pb-20 pt-10 sm:px-8 lg:px-10">
        <div
          className="pointer-events-none absolute right-0 top-0 size-[min(500px,100vw)] rounded-full red-glow"
          aria-hidden
        />

        <div className="relative z-10">

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Digital marketing
              </p>
              <h1 className="mb-6 max-w-3xl text-balance font-sans text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[var(--text)] md:text-6xl">
                Get found. Get clicks. <span className="text-[var(--red)]">Get customers</span>.
              </h1>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-[var(--text-muted)]">
                SEO, paid ads, content, and social — built around your business goals, measured by what actually moves the
                needle.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#quote" className="btn-primary px-5 py-3 text-sm">
                  Request a quote
                </Link>
                <Link href="#results" className="btn-secondary px-5 py-3 text-sm">
                  See results ↓
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elev-2)] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="font-mono text-xs text-[var(--text-dim)]">ORGANIC GROWTH</div>
                <div className="font-mono text-xs text-[var(--red)]">+320%</div>
              </div>
              <svg viewBox="0 0 280 140" className="w-full" aria-hidden>
                <defs>
                  <linearGradient id={`${gradPrefix}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--red)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--red)" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id={`${gradPrefix}-area`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--red)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--red)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="35" x2="280" y2="35" stroke="#252525" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="0" y1="70" x2="280" y2="70" stroke="#252525" strokeWidth="0.5" strokeDasharray="2 4" />
                <line x1="0" y1="105" x2="280" y2="105" stroke="#252525" strokeWidth="0.5" strokeDasharray="2 4" />
                <path
                  d="M 0 120 L 40 110 L 80 100 L 120 80 L 160 70 L 200 50 L 240 30 L 280 15 L 280 140 L 0 140 Z"
                  fill={`url(#${gradPrefix}-area)`}
                />
                <path
                  d="M 0 120 L 40 110 L 80 100 L 120 80 L 160 70 L 200 50 L 240 30 L 280 15"
                  fill="none"
                  stroke={`url(#${gradPrefix}-line)`}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="0" cy="120" r="3" fill="var(--red)" />
                <circle cx="120" cy="80" r="3" fill="var(--red)" />
                <circle cx="280" cy="15" r="4" fill="var(--red)" />
              </svg>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[var(--border-subtle)] pt-5">
                <div>
                  <div className="text-lg font-semibold text-[var(--red)]">4.2×</div>
                  <div className="font-mono text-[10px] text-[var(--text-dim)]">ROAS</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-[var(--red)]">−47%</div>
                  <div className="font-mono text-[10px] text-[var(--text-dim)]">CPL</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-[var(--red)]">12k</div>
                  <div className="font-mono text-[10px] text-[var(--text-dim)]">SIGNUPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
