import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { KonamiProvider } from "@/context/KonamiContext";
import { EasterEgg } from "@/components/EasterEgg";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbit — Michael Roberts",
  description: "Software engineer, builder, and lifelong learner.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>",
  },
  metadataBase: new URL("https://orbitfolio.dev"),
  openGraph: {
    title: "Michael Roberts — Orbit",
    description: "Software engineer, builder, and lifelong learner.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Roberts — Orbit",
    description: "Software engineer, builder, and lifelong learner.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <KonamiProvider>
          <EasterEgg />
          {children}
        </KonamiProvider>
        <Analytics />
      </body>
    </html>
  );
}
