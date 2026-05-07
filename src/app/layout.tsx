import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.name} | ${portfolioData.role}`,
  description: portfolioData.hero.description,
  keywords: ["AI Research", "Machine Learning", "Neuroscience", "Thousand Brains Theory", "Deep Learning", "Arash Nikzad", "Research Engineering"],
  authors: [{ name: portfolioData.name }],
  openGraph: {
    title: `${portfolioData.name} | ${portfolioData.role}`,
    description: portfolioData.hero.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-black font-sans text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
