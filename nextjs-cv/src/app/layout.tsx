import type { Metadata } from "next";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

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
    "Engineering leader with 15+ years spanning software development, DevSecOps, and startup co-founding.",
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
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
