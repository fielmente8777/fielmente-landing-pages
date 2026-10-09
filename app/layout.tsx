import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/content/site";
import "./globals.css";

// Self-hosted Poppins (SIL OFL, see app/fonts/OFL.txt). No automatic fallback
// metrics, so characters Poppins lacks (★) render in system-ui as before.
const poppins = localFont({
  src: [
    { path: "./fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Landing pages add a "js" class to <html> before React hydrates.
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="m-0 overflow-x-hidden">{children}</body>
    </html>
  );
}
