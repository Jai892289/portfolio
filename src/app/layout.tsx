import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Jaideep Gupta Developer - Full Stack Developer & Blockchain Expert",
  description:
    "Portfolio of John Developer - Full Stack Developer with 6+ years experience in React, Next.js, Node.js, React Native, and Blockchain development.",
  keywords: "Full Stack Developer, React, Next.js, Node.js, React Native, Blockchain, Solidity, Web3, Portfolio",
  authors: [{ name: "John Developer" }],
  creator: "John Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndeveloper.com",
    title: "John Developer - Full Stack Developer & Blockchain Expert",
    description:
      "Portfolio of John Developer - Full Stack Developer with 6+ years experience in React, Next.js, Node.js, React Native, and Blockchain development.",
    siteName: "John Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Developer - Full Stack Developer & Blockchain Expert",
    description:
      "Portfolio of John Developer - Full Stack Developer with 6+ years experience in React, Next.js, Node.js, React Native, and Blockchain development.",
    creator: "@johndeveloper",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
