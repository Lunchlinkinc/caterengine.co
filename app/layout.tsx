import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { AttributionTracker } from "./components/AttributionTracker";
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
  metadataBase: new URL("https://caterengine.co"),
  title: { default: "Restaurant Catering Growth System for Operators | CaterEngine", template: "%s | CaterEngine" },
  description: "CaterEngine helps restaurant owners grow catering revenue with branded ordering technology, B2B demand generation, fulfillment workflows, and hands-on operating support.",
  keywords: ["restaurant catering growth USA", "grow restaurant catering sales", "restaurant catering software", "catering management software for restaurants", "restaurant catering marketing", "corporate catering sales for restaurants", "restaurant catering operations", "catering lead generation for restaurants", "restaurant owner catering program", "multi location restaurant catering", "B2B catering growth", "restaurant catering consulting", "catering growth company for restaurants", "national restaurant catering support"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "CaterEngine — Restaurant Catering Growth for Operators",
    description: "Technology, demand generation, and operating support that help restaurant owners build a repeatable catering revenue channel.",
    type: "website",
    images: [{ url: "/og.png", width: 1792, height: 900, alt: "CaterEngine — turn your restaurant into a catering engine" }],
  },
  twitter: { card: "summary_large_image", title: "CaterEngine — Restaurant Catering Growth for Operators", description: "Technology, demand generation, and operating support for restaurant owners building catering revenue.", images: ["/og.png"] },
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
        <Suspense fallback={null}><AttributionTracker /></Suspense>
        {children}
        <a
          className="whatsapp-contact"
          href="https://wa.me/14374764764"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with CaterEngine on WhatsApp at 437-476-4764"
        >
          <span className="whatsapp-mark" aria-hidden="true">☎</span>
          <span><b>WhatsApp</b><small>437-476-4764</small></span>
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"CaterEngine",url:"https://caterengine.co",email:"getcaterengine@gmail.com",telephone:"+1-437-476-4764",description:"A B2B restaurant catering growth partner providing ordering technology, demand generation, fulfillment workflows, and operating support for restaurant owners and operators across the United States. CaterEngine is not a consumer catering company.",knowsAbout:["restaurant catering growth","restaurant catering software","corporate catering sales","restaurant catering operations"],areaServed:{"@type":"Country",name:"United States"}})}} />
      </body>
    </html>
  );
}
