import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "./components/PageShell";
import { blogPosts } from "./blog/posts";
import { ApplicationForm } from "./apply/ApplicationForm";

export const metadata: Metadata = { title: "Restaurant Catering Growth System for Owners", description: "CaterEngine helps restaurant owners increase catering sales with ordering software, corporate catering lead generation, and hands-on fulfillment support.", alternates: { canonical: "/" } };

const marketStats = [
  ["75%", "of restaurant traffic now happens off-premises"],
  ["94%", "of consumers say speed is critical"],
  ["57%", "of adults recently used mobile ordering"],
];

const partnerBrands = [
  { name: "La Rio’s Fresh Mexican Grill", logo: "/partners/larios.webp", url: "https://www.larios.ca/" },
  { name: "Shawarma Moose", logo: "/partners/shawarma-moose.png", url: "https://www.shawarmamoose.ca/" },
  { name: "LunchLink", logo: "/partners/lunchlink.png", url: "https://lunchlink.ca/" },
  { name: "Mehfill Indian Cuisine", logo: "/partners/mehfill.png", url: "https://www.mehfill.ca/" },
  { name: "Gyro City", logo: "/partners/gyro-city.png", url: "https://gyrocity.ca/" },
];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero-v2">
          <div className="container hero-v2-grid">
            <div className="hero-v2-copy">
              <p className="overline">The $250K restaurant catering guarantee</p>
              <h1>We add $250,000 in catering revenue to your restaurant—<br/><em>or you pay us nothing.</em></h1>
              <p className="hero-text">You already make the food. We build and operate the growth system around it—your catering offer, ordering experience, corporate demand generation, lead follow-up, fulfillment workflow, and repeat-order engine.</p>
              <div className="actions"><Link className="primary-btn" href="#restaurant-application">See if my restaurant qualifies <span>→</span></Link><a className="quiet-link" href="https://calendar.app.google/WmCbFXkcxR2xq81U7" target="_blank" rel="noreferrer">Book a 30-minute call</a></div>
              <div className="trust-line"><span>✓ One measurable $250K revenue target</span><span>✓ CaterEngine carries the performance risk</span><span>✓ Built for restaurant operators</span></div>
              <p className="guarantee-note">For qualified restaurant partners under an agreed measurement period and operating plan. Eligibility, participation requirements, attribution rules, and guarantee terms apply. Individual results vary.</p>
            </div>
          </div>
        </section>

        <section className="container offer-stack">
          <div className="offer-stack-heading"><div><p className="section-tag">The CaterEngine offer</p><h2>One outcome.<br/><em>One complete growth system.</em></h2></div><div className="offer-promise"><span>THE TARGET</span><strong>+$250K</strong><p>in restaurant catering revenue</p></div></div>
          <div className="offer-deliverables">
            <article><span>01</span><h3>Offer engineering</h3><p>We shape packages, pricing, minimums, delivery zones, and a catering menu designed to convert and travel well.</p></article>
            <article><span>02</span><h3>Ordering system</h3><p>We build a professional branded path for inquiries, scheduled orders, payments, and customer communication.</p></article>
            <article><span>03</span><h3>Demand generation</h3><p>We create campaigns and outreach designed to reach offices, administrators, and recurring business buyers.</p></article>
            <article><span>04</span><h3>Sales follow-up</h3><p>We install a clear process to respond faster, recover open opportunities, and turn first orders into accounts.</p></article>
            <article><span>05</span><h3>Operating support</h3><p>We improve production handoffs, packaging, delivery readiness, reporting, and the repeat-order workflow.</p></article>
          </div>
          <div className="offer-risk-reversal"><div><p className="section-tag light">The risk reversal</p><h3>If the agreed $250K target is not achieved, you do not pay our fee.</h3></div><div><p>This is a performance offer for qualified restaurants—not a blanket promise. Your restaurant must meet the agreed readiness, responsiveness, capacity, service, tracking, and execution requirements throughout the measurement period.</p><Link className="white-btn" href="#restaurant-application">Check eligibility →</Link></div></div>
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

        <section className="apply-page home-application" id="restaurant-application">
          <div className="container apply-layout">
            <div><p className="overline light">Apply directly from the homepage</p><h2>Is your restaurant ready to build a serious catering channel?</h2><p>Tell us about your restaurant, current catering revenue, locations, and growth goals. Our team will review the opportunity and contact you if there is a potential fit.</p><ul><li>Built specifically for restaurant owners</li><li>No upfront commitment to apply</li><li>Reviewed by the CaterEngine team</li></ul></div>
            <ApplicationForm />
          </div>
        </section>

        <section className="container platform-showcase">
          <div><p className="section-tag">One connected platform</p><h2>Orders, customers, delivery, and payments—working together.</h2><p>Your custom CaterEngine experience gives buyers a professional path to order and gives your team a clearer system to manage demand.</p><Link className="primary-btn" href="/how-it-works">Explore the platform →</Link></div>
          <div className="platform-image"><img src="/images/caterengine-gold-platform.jpg" alt="CaterEngine catering management platform" /></div>
        </section>

        <section className="split-story">
          <div className="story-image"><img src="/images/caterengine-premium-catering-hero.png" alt="Restaurant catering spread ready for a large group order" /></div>
          <div className="story-copy"><p className="section-tag light">Built for real restaurant operations</p><h2>A growth plan your kitchen can actually fulfill.</h2><p>More orders only help when the menu travels well, the team can execute, and customers receive a consistent experience. That is why we work on the offer and operation—not just the ads.</p><ul><li><span>01</span>Catering menu and packaging readiness</li><li><span>02</span>Delivery area and order economics</li><li><span>03</span>Lead response and fulfillment workflow</li><li><span>04</span>Repeat-order strategy</li></ul><Link className="secondary-btn" href="/partners">See if your restaurant fits →</Link></div>
        </section>

        <section className="container section-v2 model-section">
          <div><p className="section-tag">Commercial model</p><h2>Built to keep our incentives aligned.</h2><span className="illustration section-illustration ill-trays" aria-hidden="true"/></div>
          <div className="model-options"><article className="green-card"><span>PERFORMANCE PARTNERSHIP</span><h3>$0 upfront</h3><p>For qualified restaurants, we invest in the launch and participate through an agreed commission structure.</p><Link href="/apply">Apply for partnership →</Link></article><article><span>FLAT-FEE OPTION</span><h3>$3,000</h3><p>Ask about a straightforward flat-fee path if that structure better matches your operation.</p><Link href="/apply">Discuss the options →</Link></article></div>
        </section>

        <section className="results-proof">
          <div className="container">
            <div className="results-heading"><div><p className="section-tag light">Partner performance proof</p><h2>$20M in catering sales.<br/>Four months.</h2></div><p>Our reported aggregate results show what a focused catering engine can produce. The operational dashboard snapshots below offer a closer look at activity managed through the system.</p></div>
            <div className="results-numbers">
              <div><strong>$106,529.80</strong><span>reported catering revenue</span></div><div><strong>163</strong><span>reported orders</span></div><div><strong>$653.56</strong><span>reported average order value</span></div><div><strong>$3,626.04</strong><span>reported tips</span></div>
            </div>
            <div className="proof-screens">
              <figure><div><img src="/images/results-dashboard.png" alt="CaterEngine partner dashboard showing revenue, orders, and invoices" /></div><figcaption>Recent dashboard snapshot · $21,584.92 revenue and 30 orders</figcaption></figure>
              <figure><div><img src="/images/results-report.png" alt="CaterEngine partner performance report with revenue trend" /></div><figcaption>Historical report snapshot · December 31, 2025–August 31, 2026</figcaption></figure>
            </div>
            <p className="proof-disclaimer">Results vary by restaurant, market, menu, capacity, service, and execution. Screenshots were supplied by CaterEngine and reflect different reporting periods.</p>
          </div>
        </section>

        <section className="real-restaurant-results">
          <div className="results-collage-shell">
            <div className="results-mosaic results-mosaic-left" aria-label="Restaurant partners">
              <a className="mosaic-tile tile-one" href="https://www.larios.ca/" target="_blank" rel="noreferrer"><img src="/partners/larios.webp" alt="La Rio’s Fresh Mexican Grill logo"/></a>
              <a className="mosaic-tile tile-two" href="https://www.shawarmamoose.ca/" target="_blank" rel="noreferrer"><img src="/partners/shawarma-moose.png" alt="Shawarma Moose logo"/></a>
              <a className="mosaic-tile tile-three" href="https://lunchlink.ca/" target="_blank" rel="noreferrer"><img src="/partners/lunchlink.png" alt="LunchLink logo"/></a>
              <span className="mosaic-tile tile-photo"><img src="/images/caterengine-gold-food.jpg" alt="Restaurant catering presentation"/></span>
            </div>
            <div className="real-results-center"><p className="section-tag">Real results</p><h2>From real<br/>restaurant operators.</h2><p>CaterEngine-reported performance shows what can happen when demand, ordering, and restaurant operations work as one system.</p><Link className="primary-btn" href="/apply">See how we do it <span>→</span></Link></div>
            <div className="results-mosaic results-mosaic-right" aria-label="Restaurant partners">
              <a className="mosaic-tile tile-one" href="https://www.mehfill.ca/" target="_blank" rel="noreferrer"><img src="/partners/mehfill.png" alt="Mehfill Indian Cuisine logo"/></a>
              <a className="mosaic-tile tile-two" href="https://gyrocity.ca/" target="_blank" rel="noreferrer"><img src="/partners/gyro-city.png" alt="Gyro City logo"/></a>
              <a className="mosaic-tile tile-three" href="https://burgerrepublic.ca/" target="_blank" rel="noreferrer"><img src="/partners/burger-republic.svg" alt="Burger Republic logo"/></a>
              <span className="mosaic-tile tile-photo"><img src="/images/caterengine-premium-catering-hero.png" alt="Premium restaurant catering presentation"/></span>
            </div>
          </div>
          <div className="container real-results-detail">
            <div className="real-results-metrics"><article><strong>$20M</strong><span>reported aggregate catering sales</span></article><article><strong>4 months</strong><span>reported performance period</span></article><article><strong>163</strong><span>orders in a partner report</span></article><article><strong>$653.56</strong><span>reported average order value</span></article></div>
            <div className="real-results-proof"><div><p className="overline">Restaurant brands in our ecosystem</p><div className="partner-logo-grid">{partnerBrands.map((brand)=><a key={brand.name} href={brand.url} target="_blank" rel="noreferrer" aria-label={`Visit ${brand.name}`}><img src={brand.logo} alt={`${brand.name} logo`} /></a>)}</div></div><figure><img src="/images/results-dashboard.png" alt="CaterEngine dashboard showing restaurant catering revenue and orders"/><figcaption>Operational dashboard evidence · supplied by CaterEngine</figcaption></figure></div>
            <p className="real-results-disclaimer">Historical and aggregate figures are CaterEngine-reported and are not a guarantee of future performance. Results vary by restaurant, market, menu, capacity, service, and execution.</p>
          </div>
        </section>

        <section className="container transformation-section">
          <div className="transformation-heading"><div><p className="section-tag">The transformation</p><h2>From scattered catering tasks to one organized growth channel.</h2></div><p>CaterEngine helps replace manual follow-up and disconnected tools with a clearer customer journey, order workflow, and delivery-ready operation.</p></div>
          <figure className="before-after"><img src="/images/restaurant-before-after.png" alt="The same restaurant before and after adopting an organized CaterEngine catering workflow" /><figcaption>Conceptual illustration of the operational change—not a guaranteed outcome.</figcaption></figure>
        </section>

        <section className="container home-insights">
          <div className="insights-heading"><div><p className="section-tag">Catering growth insights</p><h2>Practical guidance for restaurant operators.</h2></div><Link className="quiet-link" href="/blog">View all insights →</Link></div>
          <div className="insights-cards">{blogPosts.map((post)=><article key={post.slug}><span>{post.category} · {post.readTime}</span><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><Link href={`/blog/${post.slug}`}>Read the guide →</Link></article>)}</div>
        </section>

        <section className="cta-band"><div className="container"><p>30-minute discovery calls available Monday–Friday.</p><h2>Let’s talk about your restaurant’s catering opportunity.</h2><a className="white-btn" href="https://calendar.app.google/WmCbFXkcxR2xq81U7" target="_blank" rel="noreferrer">Schedule a Google Meet <span>→</span></a></div></section>
      </main>
    </PageShell>
  );
}
