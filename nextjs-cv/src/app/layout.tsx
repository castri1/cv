import type { Metadata } from "next";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import PrintButton from "@/components/PrintButton";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Castrillon Cuartas — CV",
  description:
    "Engineering leader with 13+ years of experience architecting, building, and scaling cloud-native platforms across startups and consulting environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className={`${ibmPlexMono.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}>
        <div className="mobile-topbar" />
        <div
          className="toolbar-buttons"
          style={{
            position: "fixed",
            top: 12,
            right: 12,
            display: "flex",
            gap: 8,
            zIndex: 1000,
          }}
        >
          <PrintButton />
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
