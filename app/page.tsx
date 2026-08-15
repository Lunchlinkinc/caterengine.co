import Image from "next/image";
import Link from "next/link";
import { PageShell } from "./components/PageShell";

const marketStats = [
  ["75%", "of restaurant traffic now happens off-premises"],
  ["94%", "of consumers say speed is critical"],
  ["57%", "of adults recently used mobile ordering"],
];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero-v2">
          <div className="container hero-v2-grid">
            <div className="hero-v2-copy">
              <p className="overline">A catering growth partner for independent restaurants</p>
              <h1>More catering orders.<br/><em>One system to run them.</em></h1>
              <p className="hero-text">CaterEngine combines a custom ordering experience, demand generation, and hands-on operating support—so your restaurant can build a repeatable corporate catering channel.</p>
              <div className="actions"><Link className="primary-btn" href="/apply">Apply to become a partner <span>→</span></Link><Link className="quiet-link" href="/how-it-works">Explore the model</Link></div>
              <div className="trust-line"><span>✓ No upfront platform cost for qualified partners</span><span>✓ Built around your restaurant</span></div>
            </div>
            <div className="hero-photo gold-hero-art">
              <Image src="/images/caterengine-gold-hero.jpg" alt="CaterEngine catering success brand banner" fill priority sizes="(max-width: 900px) 100vw, 1180px" />
            </div>
          </div>
        </section>

        <section className="market-bar">
          <div className="container stats-row">
            <p><span>THE OPPORTUNITY</span>Off-premises dining is already mainstream.</p>
            {marketStats.map(([number,label])=><div key={number}><strong>{number}</strong><span>{label}</span></div>)}
          </div>
          <div className="container source-note">2025 U.S. industry data · National Restaurant Association</div>
        </section>

        <section className="container section-v2 intro-section">
          <div><p className="section-tag">What CaterEngine does</p><h2>Your restaurant already has the product. <em>We build the engine around it.</em></h2></div>
          <p className="lead">We connect the customer journey—from the first Google search to the repeat office order—with the tools and support your team needs to deliver.</p>
        </section>

        <section className="container system-grid">
          <article><span>01</span><i className="illustration ill-office" aria-hidden="true"/><h3>Get discovered</h3><p>Local campaign strategy and approved Google Ads designed to reach offices, admins, and business buyers in your delivery area.</p><Link href="/how-it-works">Demand generation →</Link></article>
          <article><span>02</span><i className="illustration ill-box" aria-hidden="true"/><h3>Convert demand</h3><p>A custom-branded catering storefront with menus, ordering, lead capture, payments, and an experience buyers can trust.</p><Link href="/how-it-works">Catering technology →</Link></article>
          <article><span>03</span><i className="illustration ill-calendar" aria-hidden="true"/><h3>Grow the channel</h3><p>Lead workflows, performance visibility, and ongoing optimization that help turn first-time buyers into repeat accounts.</p><Link href="/how-it-works">Operating support →</Link></article>
        </section>

        <section className="container platform-showcase">
          <div><p className="section-tag">One connected platform</p><h2>Orders, customers, delivery, and payments—working together.</h2><p>Your custom CaterEngine experience gives buyers a professional path to order and gives your team a clearer system to manage demand.</p><Link className="primary-btn" href="/how-it-works">Explore the platform →</Link></div>
          <div className="platform-image"><Image src="/images/caterengine-gold-platform.jpg" alt="CaterEngine catering management platform" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        </section>

        <section className="split-story">
          <div className="story-image"><Image src="/images/caterengine-gold-food.jpg" alt="CaterEngine catered food presentation" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className="story-copy"><p className="section-tag light">Built for real restaurant operations</p><h2>A growth plan your kitchen can actually fulfill.</h2><p>More orders only help when the menu travels well, the team can execute, and customers receive a consistent experience. That is why we work on the offer and operation—not just the ads.</p><ul><li><span>01</span>Catering menu and packaging readiness</li><li><span>02</span>Delivery area and order economics</li><li><span>03</span>Lead response and fulfillment workflow</li><li><span>04</span>Repeat-order strategy</li></ul><Link className="secondary-btn" href="/partners">See if your restaurant fits →</Link></div>
        </section>

        <section className="container section-v2 model-section">
          <div><p className="section-tag">Commercial model</p><h2>Built to keep our incentives aligned.</h2><span className="illustration section-illustration ill-trays" aria-hidden="true"/></div>
          <div className="model-options"><article className="green-card"><span>PERFORMANCE PARTNERSHIP</span><h3>$0 upfront</h3><p>For qualified restaurants, we invest in the launch and participate through an agreed commission structure.</p><Link href="/apply">Apply for partnership →</Link></article><article><span>FLAT-FEE OPTION</span><h3>$3,000</h3><p>Ask about a straightforward flat-fee path if that structure better matches your operation.</p><Link href="/apply">Discuss the options →</Link></article></div>
        </section>

        <section className="results-proof">
          <div className="container">
            <div className="results-heading"><div><p className="section-tag light">Partner performance proof</p><h2>Real orders.<br/>Visible performance.</h2></div><p>These operational dashboard snapshots show actual catering activity managed through the system. They are presented as historical examples—not a promise of future results.</p></div>
            <div className="results-numbers">
              <div><strong>$106,529.80</strong><span>reported catering revenue</span></div><div><strong>163</strong><span>reported orders</span></div><div><strong>$653.56</strong><span>reported average order value</span></div><div><strong>$3,626.04</strong><span>reported tips</span></div>
            </div>
            <div className="proof-screens">
              <figure><div><Image src="/images/results-dashboard.png" alt="CaterEngine partner dashboard showing revenue, orders, and invoices" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><figcaption>Recent dashboard snapshot · $21,584.92 revenue and 30 orders</figcaption></figure>
              <figure><div><Image src="/images/results-report.png" alt="CaterEngine partner performance report with revenue trend" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><figcaption>Historical report snapshot · December 31, 2025–August 31, 2026</figcaption></figure>
            </div>
            <p className="proof-disclaimer">Results vary by restaurant, market, menu, capacity, service, and execution. Screenshots were supplied by CaterEngine and reflect different reporting periods.</p>
          </div>
        </section>

        <section className="container transformation-section">
          <div className="transformation-heading"><div><p className="section-tag">The transformation</p><h2>From scattered catering tasks to one organized growth channel.</h2></div><p>CaterEngine helps replace manual follow-up and disconnected tools with a clearer customer journey, order workflow, and delivery-ready operation.</p></div>
          <figure className="before-after"><Image src="/images/restaurant-before-after.png" alt="The same restaurant before and after adopting an organized CaterEngine catering workflow" width={1672} height={941} /><figcaption>Conceptual illustration of the operational change—not a guaranteed outcome.</figcaption></figure>
        </section>

        <section className="cta-band"><div className="container"><p>Now reviewing restaurants in Houston, Austin, and Dallas.</p><h2>Could catering become your next serious revenue channel?</h2><Link className="white-btn" href="/apply">Start your application <span>→</span></Link></div></section>
      </main>
    </PageShell>
  );
}
