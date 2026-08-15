import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/PageShell";
import { markets } from "../data";

export function generateStaticParams() { return Object.keys(markets).map((city) => ({ city })); }
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> { const slug = (await params).city as keyof typeof markets; const market = markets[slug]; return market ? { title: `Restaurant Catering Growth in ${market.city}, TX`, description: market.description, alternates: { canonical: `/locations/${slug}` } } : {}; }

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const slug = (await params).city as keyof typeof markets; const market = markets[slug]; if (!market) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Service", name: `Restaurant catering growth services in ${market.city}`, provider: { "@type": "Organization", name: "CaterEngine" }, areaServed: { "@type": "City", name: market.city, containedInPlace: { "@type": "State", name: market.state } }, description: market.description };
  return <PageShell><main>
    <section className="page-hero"><p className="overline">Now reviewing restaurant partners</p><h1>Catering growth in <em>{market.city}.</em></h1><p>{market.description}</p></section>
    <section className="container location-grid"><div><p className="section-tag">Built for your local market</p><h2>Reach the group-order buyers around your restaurant.</h2><p>CaterEngine helps qualified restaurant partners connect the ordering experience, local demand generation, and operating workflow. Every launch is planned around your menu, service radius, economics, and capacity.</p><Link className="primary-btn" href="/apply">Apply in {market.city} →</Link></div><div><h3>Potential local buyers</h3>{market.audiences.map((audience, i) => <div className="audience-row" key={audience}><span>0{i + 1}</span><p>{audience}</p></div>)}</div></section>
    <section className="container location-steps"><p className="section-tag">The CaterEngine model</p><h2>One system from discovery to repeat order.</h2><div><article><b>01</b><h3>Position the offer</h3><p>Build a delivery-ready menu and buying experience for group orders.</p></article><article><b>02</b><h3>Generate demand</h3><p>Reach qualified buyers across your profitable local service area.</p></article><article><b>03</b><h3>Operate and improve</h3><p>Manage leads, orders, performance, and repeat-account follow-up.</p></article></div></section>
    <section className="cta-band"><div className="container"><p>Restaurant partners in {market.city}</p><h2>Is your kitchen ready for a serious catering channel?</h2><Link className="white-btn" href="/apply">Start your application →</Link></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main></PageShell>;
}
