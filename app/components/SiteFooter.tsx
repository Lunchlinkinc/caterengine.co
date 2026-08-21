import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div><Link className="wordmark inverse" href="/"><span className="plug-c">C<span /></span><b>cater</b>engine</Link><p>Powering catering. Delivering success.</p></div>
        <div><strong>Explore</strong><Link href="/how-it-works">How it works</Link><Link href="/partners">Restaurant partners</Link><Link href="/blog">Insights</Link><Link href="/about">About us</Link></div>
        <div><strong>Markets</strong><Link href="/locations/houston">Houston</Link><Link href="/locations/austin">Austin</Link><Link href="/locations/dallas">Dallas</Link></div>
        <div><strong>Connect</strong><Link href="/apply">Apply to partner</Link><a href="https://wa.me/14374764764" target="_blank" rel="noreferrer">WhatsApp: 437-476-4764</a><a href="mailto:getcaterengine@gmail.com">getcaterengine@gmail.com</a></div>
        <div><strong>Legal</strong><Link href="/privacy">Privacy</Link><span>© 2026 CaterEngine</span></div>
      </div>
    </footer>
  );
}
