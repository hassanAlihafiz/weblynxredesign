/** Minimal above-the-fold styles so LCP text can paint before the main CSS chunk loads. */
export const CRITICAL_CSS = `
body{background-color:#030303;color:#f4f4f5;font-family:system-ui,sans-serif}
.hero-lcp{margin:0 0 1rem;font-size:2.25rem;font-weight:600;line-height:1.05;letter-spacing:-0.02em;color:#fafafa;text-wrap:balance}
@media(min-width:640px){.hero-lcp{font-size:clamp(2.5rem,5vw,3.5rem)}}
`;
