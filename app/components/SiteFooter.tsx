import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div><Link className="wordmark inverse" href="/"><span className="plug-c">C<span /></span><b>cater</b>engine</Link><p>Powering catering. Delivering success.</p></div>
        <div><strong>Explore</strong><Link href="/how-it-works">How it works</Link><Link href="/partners">Restaurant partners</Link><Link href="/about">About us</Link></div>
        <div><strong>Connect</strong><Link href="/apply">Apply to partner</Link><a href="mailto:hello@caterengine.com">hello@caterengine.com</a><span>Houston · Austin · Dallas</span></div>
        <div><strong>Legal</strong><Link href="/privacy">Privacy</Link><span>© 2026 CaterEngine</span></div>
      </div>
    </footer>
  );
}
