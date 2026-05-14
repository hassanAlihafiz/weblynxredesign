import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Windows (and some Docker/WSL setups) often miss native FS events on certain drives
  // or synced folders; polling makes dev HMR reliably pick up edits.
  ...(process.platform === "win32"
    ? { watchOptions: { pollIntervalMs: 500 } }
    : {}),
};

export default nextConfig;
