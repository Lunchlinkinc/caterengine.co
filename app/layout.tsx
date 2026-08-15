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
  title: { default: "CaterEngine | Restaurant Catering Growth", template: "%s | CaterEngine" },
  description: "Catering technology, demand generation, and operating support for growth-ready restaurants in Houston, Austin, and Dallas.",
  keywords: ["restaurant catering software", "catering management software", "corporate catering marketing", "grow catering sales", "restaurant catering Houston", "restaurant catering Austin", "restaurant catering Dallas"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "CaterEngine — Catering Success Starts Here.",
    description: "A complete catering growth system for ambitious restaurant operators.",
    type: "website",
    images: [{ url: "/og.png", width: 1792, height: 900, alt: "CaterEngine — turn your restaurant into a catering engine" }],
  },
  twitter: { card: "summary_large_image", title: "CaterEngine — Catering Success Starts Here.", description: "A complete catering growth system for ambitious restaurant operators.", images: ["/og.png"] },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"CaterEngine",url:"https://caterengine.com",email:"getcaterengine@gmail.com",description:"Restaurant catering technology, demand generation, and operating support.",areaServed:[{"@type":"City",name:"Houston"},{"@type":"City",name:"Austin"},{"@type":"City",name:"Dallas"}]})}} />
      </body>
    </html>
  );
}
