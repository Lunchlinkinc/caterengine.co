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
  metadataBase: new URL("https://caterengine.com"),
  title: "CaterEngine | Turn Your Restaurant Into a Catering Engine",
  description: "Custom catering technology, funded demand generation, and operating support for growth-ready restaurants.",
  openGraph: {
    title: "Turn your restaurant into a catering engine.",
    description: "Technology, demand generation, and operations—with $0 upfront for qualified partners.",
    type: "website",
    images: [{ url: "/og.png", width: 1792, height: 900, alt: "CaterEngine — turn your restaurant into a catering engine" }],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
