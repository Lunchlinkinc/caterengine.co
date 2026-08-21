import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="header-wrap">
      <div className="container header">
        <Link className="wordmark" href="/" aria-label="CaterEngine home"><span className="plug-c">C<span /></span><b>cater</b>engine</Link>
        <nav aria-label="Primary navigation">
          <Link href="/how-it-works">How it works</Link>
          <Link href="/partners">For restaurants</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/about">About</Link>
          <Link href="/#restaurant-application">Apply</Link>
        </nav>
        <a className="nav-cta" href="https://calendar.app.google/WmCbFXkcxR2xq81U7" target="_blank" rel="noreferrer">Book a Google Meet <span>→</span></a>
      </div>
    </header>
  );
}
