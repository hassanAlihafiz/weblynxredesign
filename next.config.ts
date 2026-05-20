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
        source: "/work",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/work/:path*",
        destination: "/case-studies/:path*",
        permanent: true,
      },
      {
        source: "/services/case-studies/work",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/services/work",
        destination: "/case-studies",
        permanent: true,
      },
      // Plural / legacy paths → canonical URLs
      {
        source: "/services",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/blogs/:path*",
        permanent: true,
      },
      // Old inner-services folder structure
      {
        source: "/inner-services/web/web-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/inner-services/app/app-development",
        destination: "/app-development",
        permanent: true,
      },
      {
        source: "/inner-services/markiting/digital-marketing",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/inner-services/designing/design",
        destination: "/design",
        permanent: true,
      },
      {
        source: "/inner-services/artificial-intellignece/artificial-intelligence",
        destination: "/artificial-intelligence",
        permanent: true,
      },
      {
        source: "/inner-services/app/app-development/services/android-app-development",
        destination: "/android-app-development",
        permanent: true,
      },
      {
        source: "/inner-services/app/app-development/services/ios-app-development",
        destination: "/ios-app-development",
        permanent: true,
      },
      {
        source: "/inner-services/app/app-development/services/cross-platform-app-development",
        destination: "/cross-platform-app-development",
        permanent: true,
      },
      {
        source: "/inner-services/web/services/ecommerce-website-development",
        destination: "/ecommerce-website-development",
        permanent: true,
      },
      {
        source: "/inner-services/web/services/web-portal-development",
        destination: "/web-portal-development",
        permanent: true,
      },
      {
        source: "/inner-services/markiting/services/social-media-marketing",
        destination: "/social-media-marketing",
        permanent: true,
      },
      {
        source: "/inner-services/markiting/services/search-engine-marketing",
        destination: "/search-engine-marketing",
        permanent: true,
      },
      {
        source: "/inner-services/markiting/services/search-engine-optimization",
        destination: "/search-engine-optimization",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/app-development",
        destination: "/app-development",
        permanent: true,
      },
      {
        source: "/services/digital-marketing",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/services/social-media-marketing",
        destination: "/social-media-marketing",
        permanent: true,
      },
      {
        source: "/services/search-engine-marketing",
        destination: "/search-engine-marketing",
        permanent: true,
      },
      {
        source: "/services/search-engine-optimization",
        destination: "/search-engine-optimization",
        permanent: true,
      },
      {
        source: "/services/design",
        destination: "/design",
        permanent: true,
      },
      {
        source: "/services/ai-development",
        destination: "/artificial-intelligence",
        permanent: true,
      },
      {
        source: "/ai-development",
        destination: "/artificial-intelligence",
        permanent: true,
      },
      {
        source: "/ai-development/:path*",
        destination: "/artificial-intelligence/:path*",
        permanent: true,
      },
      {
        source: "/services/web/web-development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/services/app/app-development",
        destination: "/app-development",
        permanent: true,
      },
      {
        source: "/services/designing/design",
        destination: "/design",
        permanent: true,
      },
      {
        source: "/services/merkiting/digital-marketing",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/services/markiting/digital-marketing",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/services/merkiting/services/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/services/markiting/services/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
