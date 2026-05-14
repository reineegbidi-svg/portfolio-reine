import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reallygreatsite.com"),
  title: {
    default: "Reine EGBIDI — Développeuse Web & Mobile",
    template: "%s | Reine EGBIDI",
  },
  description:
    "Portfolio de Reine EGBIDI — étudiante en développement d’applications, passionnée par le web, le mobile et les bases de données. Lomé, Togo.",
  keywords: [
    "Reine EGBIDI",
    "développeuse",
    "portfolio",
    "web",
    "mobile",
    "Laravel",
    "React",
    "Flutter",
    "Togo",
  ],
  authors: [{ name: "Reine EGBIDI", url: "https://www.reallygreatsite.com" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Reine EGBIDI — Développeuse Web & Mobile",
    description:
      "Développeuse passionnée par les technologies web, les applications modernes et les bases de données.",
    siteName: "Reine EGBIDI",
    images: [
      {
        url: "/images/Reine-Profile.png",
        width: 800,
        height: 1000,
        alt: "Reine EGBIDI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reine EGBIDI — Développeuse Web & Mobile",
    description:
      "Développeuse passionnée par les technologies web, les applications modernes et les bases de données.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-white font-sans text-zinc-900">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zinc-400"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
