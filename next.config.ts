import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Windows (and some Docker/WSL setups) often miss native FS events on certain drives
  // or synced folders; polling makes dev HMR reliably pick up edits.
  ...(process.platform === "win32"
    ? { watchOptions: { pollIntervalMs: 500 } }
    : {}),
  async redirects() {
    return [
      {
        source: "/services/app/services/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/services/case-studies/work",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/services/work",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/services/web/web-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/services/app/app-development",
        destination: "/services/app-development",
        permanent: true,
      },
      {
        source: "/services/designing/design",
        destination: "/services/design",
        permanent: true,
      },
      {
        source: "/services/merkiting/digital-marketing",
        destination: "/services/digital-marketing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
