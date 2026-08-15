import Link from "next/link";
import { PageShell } from "../components/PageShell";

export default function HowItWorks(){return <PageShell><main><section className="page-hero container"><p className="overline">How it works</p><h1>A practical path from <em>idea to orders.</em></h1><p>Every partnership is shaped around the restaurant, but the operating sequence stays clear.</p></section><section className="container process-list">{[
["01","Qualify the opportunity","We review your concept, catering menu, average order economics, kitchen capacity, service radius, and growth goals."],
["02","Design the offer","Together we shape a catering menu and buyer experience that are easy to understand, order, transport, and repeat."],
["03","Build the system","CaterEngine creates your branded catering storefront, lead capture, payments, and management workflow."],
["04","Launch demand","Once the operation is ready, approved campaigns begin reaching nearby workplace and business buyers."],
["05","Improve the numbers","We review lead quality, conversion, order value, repeat behavior, and operational friction to improve the channel."],
].map(([n,t,p])=><article key={n}><span>{n}</span><h2>{t}</h2><p>{p}</p></article>)}</section><section className="mini-cta"><div className="container"><h2>Ready to see if the model fits?</h2><Link className="white-btn" href="/apply">Apply to partner →</Link></div></section></main></PageShell>}
