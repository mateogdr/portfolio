import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: personalInfo.subtitle,
  keywords: [
    "software engineer",
    "data engineering",
    "AI",
    "portfolio",
    "Next.js",
    "Python",
    "full-stack",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: personalInfo.name,
    description: personalInfo.subtitle,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: personalInfo.name,
    description: personalInfo.subtitle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
