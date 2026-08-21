import Link from "next/link";
import { PageShell } from "./components/PageShell";
import { blogPosts } from "./blog/posts";

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

const googleReviews = [
  { brand: "La Rio’s Fresh Mexican Grill", rating: "4.6", count: "360", quote: "Nice fresh food and good service, gave me a tasty beef burrito bowl!", author: "David Levin", url: "https://www.google.com/maps/search/?api=1&query=La+Rio%27s+Fresh+Mexican+Grill+Toronto" },
  { brand: "Shawarma Moose", rating: "4.5", count: "742", quote: "Love this place, food tastes great and portions are good for the price.", author: "Alex Helwani", url: "https://www.google.com/maps/search/?api=1&query=Shawarma+Moose+Toronto" },
  { brand: "Mehfill Indian Cuisine", rating: "4.5", count: "4,300+", quote: "Mehfill never disappoints with its authentic flavors and top-notch service.", author: "Google reviewer", url: "https://www.google.com/maps/search/?api=1&query=Mehfill+Indian+Cuisine+Etobicoke" },
];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero-v2">
          <div className="container hero-v2-grid">
            <div className="hero-v2-copy">
              <p className="overline">The CaterEngine growth guarantee</p>
              <h1>Make $15K every month through catering—<br/><em>or you don’t pay.</em></h1>
              <p className="hero-text">We generated $20M in catering sales in four months. Now CaterEngine brings the ordering experience, demand generation, and hands-on operating support to help qualified restaurant partners build a serious catering channel.</p>
              <div className="actions"><Link className="primary-btn" href="/apply">Apply to become a partner <span>→</span></Link><a className="quiet-link" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BBIEf8UCyIYBlPyt_lcpFfm_RzF_RZ28koeo8B6H3wBPju4V8zAynz2nY7XrORxUoreXYRllv" target="_blank" rel="noreferrer">Book a Google Meet</a></div>
              <div className="trust-line"><span>✓ $15K monthly catering target</span><span>✓ Performance guarantee for qualified partners</span></div>
              <p className="guarantee-note">Eligibility, onboarding, operating requirements, measurement period, and guarantee terms apply. Historical sales are aggregate CaterEngine-reported results; individual results vary.</p>
            </div>
            <div className="hero-photo gold-hero-art">
              <img src="/images/caterengine-gold-hero.jpg" alt="CaterEngine catering success brand banner" />
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
          <div className="platform-image"><img src="/images/caterengine-gold-platform.jpg" alt="CaterEngine catering management platform" /></div>
        </section>

        <section className="split-story">
          <div className="story-image"><img src="/images/caterengine-gold-food.jpg" alt="CaterEngine catered food presentation" /></div>
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

        <section className="container partner-voices">
          <div className="partner-voices-heading"><div><p className="section-tag">Catering brands in our ecosystem</p><h2>Built around restaurants people already love.</h2></div><p>Restaurant identities remain front and centre while stronger catering experiences help customers discover, order, and come back.</p></div>
          <div className="partner-logo-grid">{partnerBrands.map((brand)=><a key={brand.name} href={brand.url} target="_blank" rel="noreferrer" aria-label={`Visit ${brand.name}`}><img src={brand.logo} alt={`${brand.name} logo`} /></a>)}</div>
          <div className="google-review-heading"><div><span className="google-g" aria-hidden="true">G</span><div><strong>Customer feedback on Google</strong><small>Public ratings observed August 2026</small></div></div><p>Food and service reviews belong to each restaurant’s customers and do not claim CaterEngine caused the rating.</p></div>
          <div className="testimonial-grid">{googleReviews.map((review)=><article key={review.brand}><div className="review-rating"><span>★★★★★</span><b>{review.rating}</b><small>{review.count} Google reviews</small></div><blockquote>“{review.quote}”</blockquote><div className="review-source"><span><b>{review.author}</b><small>{review.brand}</small></span><a href={review.url} target="_blank" rel="noreferrer">View on Google ↗</a></div></article>)}</div>
        </section>

        <section className="container transformation-section">
          <div className="transformation-heading"><div><p className="section-tag">The transformation</p><h2>From scattered catering tasks to one organized growth channel.</h2></div><p>CaterEngine helps replace manual follow-up and disconnected tools with a clearer customer journey, order workflow, and delivery-ready operation.</p></div>
          <figure className="before-after"><img src="/images/restaurant-before-after.png" alt="The same restaurant before and after adopting an organized CaterEngine catering workflow" /><figcaption>Conceptual illustration of the operational change—not a guaranteed outcome.</figcaption></figure>
        </section>

        <section className="container home-insights">
          <div className="insights-heading"><div><p className="section-tag">Catering growth insights</p><h2>Practical guidance for restaurant operators.</h2></div><Link className="quiet-link" href="/blog">View all insights →</Link></div>
          <div className="insights-cards">{blogPosts.map((post)=><article key={post.slug}><span>{post.category} · {post.readTime}</span><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p><Link href={`/blog/${post.slug}`}>Read the guide →</Link></article>)}</div>
        </section>

        <section className="cta-band"><div className="container"><p>30-minute discovery calls available Monday–Friday.</p><h2>Let’s talk about your restaurant’s catering opportunity.</h2><a className="white-btn" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BBIEf8UCyIYBlPyt_lcpFfm_RzF_RZ28koeo8B6H3wBPju4V8zAynz2nY7XrORxUoreXYRllv" target="_blank" rel="noreferrer">Schedule a Google Meet <span>→</span></a></div></section>
      </main>
    </PageShell>
  );
}
