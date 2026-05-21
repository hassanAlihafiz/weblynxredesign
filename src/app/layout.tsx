import { Bricolage_Grotesque } from "next/font/google";
import { rootMetadata } from "@/data/metadata";
import { CRITICAL_CSS } from "@/lib/critical-css";
import "./globals.css";

/** Single preloaded font — avoids chaining Geist/Instrument behind CSS on the critical path. */
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col font-sans"
        suppressHydrationWarning
      >
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
        {children}
      </body>
    </html>
  );
}
