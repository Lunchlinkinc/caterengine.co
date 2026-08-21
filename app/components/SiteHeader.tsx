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
        </nav>
        <a className="nav-cta" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BBIEf8UCyIYBlPyt_lcpFfm_RzF_RZ28koeo8B6H3wBPju4V8zAynz2nY7XrORxUoreXYRllv" target="_blank" rel="noreferrer">Book a Google Meet <span>→</span></a>
      </div>
    </header>
  );
}
