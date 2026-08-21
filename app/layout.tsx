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
  metadataBase: new URL("https://caterengine-growth.info211179.chatgpt.site"),
  title: { default: "CaterEngine | Restaurant Catering Growth", template: "%s | CaterEngine" },
  description: "Make $15K every month through catering—or you don’t pay. CaterEngine combines catering technology, demand generation, and operating support for qualified restaurant partners.",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"CaterEngine",url:"https://caterengine-growth.info211179.chatgpt.site",email:"getcaterengine@gmail.com",telephone:"+1-437-476-4764",description:"Restaurant catering technology, demand generation, and operating support.",areaServed:[{"@type":"City",name:"Houston"},{"@type":"City",name:"Austin"},{"@type":"City",name:"Dallas"}]})}} />
      </body>
    </html>
  );
}
