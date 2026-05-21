/** Minimal above-the-fold styles so LCP can paint before the main CSS chunk and webfonts load. */
export const CRITICAL_CSS = `
:root{color-scheme:dark}
body{margin:0;min-height:100dvh;background-color:#030303;color:#f4f4f5;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.hero-lcp{margin:0 0 1rem;font-family:inherit;font-size:2.25rem;font-weight:600;line-height:1.05;letter-spacing:-0.02em;color:#fafafa;text-wrap:balance}
@media(min-width:640px){.hero-lcp{font-size:clamp(2.5rem,5vw,3.5rem)}}
.btn-primary{display:inline-flex;align-items:center;justify-content:center;gap:6px;border-radius:8px;background:#9b1520;color:#fff;font-weight:500;text-decoration:none;box-shadow:0 4px 16px rgba(155,21,32,.35);outline:1px solid rgba(251,44,54,.32);outline-offset:-1px}
.hero-grid-bg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(#080808 1px,transparent 1px),linear-gradient(90deg,#080808 1px,transparent 1px);background-size:40px 40px}
`;
