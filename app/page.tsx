export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="CaterEngine home">
          <span className="brand-mark">C</span>
          <span>CaterEngine</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#system">The system</a>
          <a href="#process">How it works</a>
          <a href="#fit">Who it&apos;s for</a>
        </nav>
        <a className="button button-small" href="#apply">Apply for a pilot <span>↗</span></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> Now partnering with select U.S. restaurants</p>
          <h1>Turn your kitchen into a <em>catering engine.</em></h1>
          <p className="hero-lede">We build the technology, generate the demand, and help run the system. You focus on making food people remember.</p>
          <div className="hero-actions">
            <a className="button" href="#apply">See if you qualify <span>↗</span></a>
            <a className="text-link" href="#process">See how it works <span>↓</span></a>
          </div>
          <div className="proof-row" aria-label="Key benefits">
            <div><strong>$0</strong><span>upfront cost</span></div>
            <div><strong>Custom</strong><span>ordering tech</span></div>
            <div><strong>Funded</strong><span>demand generation</span></div>
          </div>
        </div>

        <div className="engine-card" aria-label="CaterEngine growth dashboard illustration">
          <div className="engine-top">
            <div><span className="mini-label">CATERING ENGINE</span><strong>Growth overview</strong></div>
            <span className="live-pill">● LIVE</span>
          </div>
          <div className="metric-grid">
            <article><span>Qualified leads</span><strong>48</strong><small>↑ 18% this month</small></article>
            <article className="accent-card"><span>Pipeline value</span><strong>$32.8k</strong><small>Active opportunities</small></article>
          </div>
          <div className="pipeline">
            <div className="pipeline-head"><strong>Opportunity pipeline</strong><span>THIS MONTH</span></div>
            <div className="bar"><span className="bar-one" /></div>
            <div className="bar"><span className="bar-two" /></div>
            <div className="bar"><span className="bar-three" /></div>
            <div className="pipeline-labels"><span>New lead</span><span>Quote sent</span><span>Booked</span></div>
          </div>
          <div className="order-card">
            <span className="order-icon">✓</span>
            <div><strong>New corporate order</strong><small>Office lunch · 42 guests</small></div>
            <strong>$1,176</strong>
          </div>
          <span className="floating-note">Ads funded by CaterEngine <b>↗</b></span>
        </div>
      </section>

      <section className="statement-band">
        <div className="shell statement-inner">
          <p>Built for restaurant owners who know their food can win—<span>if more businesses could find it.</span></p>
          <span className="asterisk">✳</span>
        </div>
      </section>

      <section className="section shell" id="system">
        <div className="section-kicker">01 / THE SYSTEM</div>
        <div className="section-heading">
          <h2>More than software.<br />A growth partner.</h2>
          <p>CaterEngine connects the pieces most restaurants have to figure out alone—then keeps improving them with you.</p>
        </div>
        <div className="feature-grid">
          <article>
            <span className="feature-no">01</span><div className="feature-symbol">⌘</div>
            <h3>Technology</h3>
            <p>A custom-branded catering website, ordering flow, payments, and management tools built around your operation.</p>
            <ul><li>Custom catering storefront</li><li>Online ordering + Stripe</li><li>Lead and order management</li></ul>
          </article>
          <article>
            <span className="feature-no">02</span><div className="feature-symbol">↗</div>
            <h3>Growth</h3>
            <p>We help put your restaurant in front of local offices and business buyers—and fund approved Google Ads.</p>
            <ul><li>Local demand generation</li><li>Campaign strategy</li><li>Corporate lead pipeline</li></ul>
          </article>
          <article>
            <span className="feature-no">03</span><div className="feature-symbol">◎</div>
            <h3>Operations</h3>
            <p>Practical systems that help your team respond, quote, fulfill, and learn without adding chaos to the kitchen.</p>
            <ul><li>Simple operating workflows</li><li>Performance visibility</li><li>Ongoing optimization</li></ul>
          </article>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="shell">
          <div className="section-kicker light">02 / HOW IT WORKS</div>
          <div className="process-title"><h2>From good food to<br /><em>repeatable growth.</em></h2><p>A focused four-step launch, built alongside your team.</p></div>
          <ol className="steps">
            <li><span>01</span><div><h3>We qualify the fit</h3><p>We learn your menu, kitchen capacity, market, economics, and catering goals.</p></div></li>
            <li><span>02</span><div><h3>We build your engine</h3><p>Your branded site, ordering experience, offer, payments, and lead workflows come together.</p></div></li>
            <li><span>03</span><div><h3>We launch demand</h3><p>We activate approved campaigns designed to reach nearby offices and business buyers.</p></div></li>
            <li><span>04</span><div><h3>We grow what works</h3><p>We review the numbers, improve conversion, and help turn first orders into repeat business.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="fit section shell" id="fit">
        <div>
          <div className="section-kicker">03 / WHO IT'S FOR</div>
          <h2>Built for operators<br />ready to <em>scale.</em></h2>
          <p className="fit-copy">We work best with established restaurants that can deliver a consistently excellent catering experience.</p>
          <a className="text-link dark" href="#apply">Check your fit <span>↘</span></a>
        </div>
        <div className="checklist">
          <div><span>✓</span><p><strong>A proven restaurant concept</strong>Customers already love the food and the brand.</p></div>
          <div><span>✓</span><p><strong>Reliable kitchen capacity</strong>Your team can handle larger, scheduled orders.</p></div>
          <div><span>✓</span><p><strong>A catering-ready offer</strong>Your menu travels well—or can be adapted to do so.</p></div>
          <div><span>✓</span><p><strong>A growth mindset</strong>You respond quickly, care about service, and want a long-term channel.</p></div>
        </div>
      </section>

      <section className="model section">
        <div className="shell model-grid">
          <div><div className="section-kicker light">04 / THE MODEL</div><h2>Aligned from<br />day one.</h2></div>
          <div className="model-card primary"><p>PERFORMANCE PARTNERSHIP</p><h3>$0 <span>upfront</span></h3><p>We invest in the system and grow alongside you through a performance-based commission structure.</p><a href="#apply">Discuss partnership <span>↗</span></a></div>
          <div className="model-card secondary"><p>FLAT-FEE PATH</p><h3>$3,000 <span>option</span></h3><p>Prefer a straightforward arrangement? Ask whether our flat-fee path is right for your restaurant.</p><a href="#apply">Ask about flat fee <span>↗</span></a></div>
        </div>
      </section>

      <section className="faq section shell">
        <div><div className="section-kicker">05 / QUESTIONS</div><h2>Straight answers.</h2></div>
        <div className="faq-list">
          <details><summary>Does CaterEngine own my restaurant or brand?<span>+</span></summary><p>No. Your restaurant and brand remain yours. CaterEngine provides the technology, growth system, and partnership defined in your agreement.</p></details>
          <details><summary>Who pays for advertising?<span>+</span></summary><p>For approved performance partnerships, CaterEngine funds an agreed Google Ads program. Scope, budget, and terms are confirmed before launch.</p></details>
          <details><summary>Do you guarantee revenue?<span>+</span></summary><p>No responsible growth partner can guarantee a specific result. Performance depends on your market, offer, pricing, service, and execution. We build and optimize the system to improve your odds.</p></details>
          <details><summary>How quickly can we launch?<span>+</span></summary><p>Timing depends on menu readiness, brand assets, integrations, and your team’s responsiveness. We’ll provide a practical launch plan after qualification.</p></details>
        </div>
      </section>

      <section className="apply" id="apply">
        <div className="shell apply-grid">
          <div><p className="eyebrow light"><span className="pulse" /> Limited pilot availability</p><h2>Ready to build your<br /><em>catering engine?</em></h2><p>Tell us about your restaurant. If the fit is right, we’ll follow up to explore the opportunity—no pressure and no upfront fee.</p></div>
          <form action="mailto:hello@caterengine.com" method="post" encType="text/plain">
            <div className="field-row"><label>Your name<input required name="Name" placeholder="Jordan Smith" /></label><label>Restaurant name<input required name="Restaurant" placeholder="Your restaurant" /></label></div>
            <div className="field-row"><label>City & state<input required name="Location" placeholder="Houston, TX" /></label><label>Website<input name="Website" type="url" placeholder="https://" /></label></div>
            <label>Current monthly catering revenue<select name="Monthly catering revenue" defaultValue=""><option value="" disabled>Select a range</option><option>Under $5,000</option><option>$5,000–$15,000</option><option>$15,000–$30,000</option><option>$30,000–$75,000</option><option>$75,000+</option></select></label>
            <label>What do you want to achieve?<textarea name="Goal" rows={3} placeholder="Tell us about your catering goals..." /></label>
            <button className="button submit" type="submit">Apply for a pilot <span>↗</span></button>
            <small>Submitting opens your email app with these details. No spam—ever.</small>
          </form>
        </div>
      </section>

      <footer className="shell">
        <a className="brand" href="#top"><span className="brand-mark">C</span><span>CaterEngine</span></a>
        <p>Technology, growth, and operations for modern catering.</p>
        <div><a href="mailto:hello@caterengine.com">hello@caterengine.com</a><span>© 2026 CaterEngine</span></div>
      </footer>
    </main>
  );
}
