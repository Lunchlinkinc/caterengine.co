import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/PageShell";
import { getPost, getPublishedPosts } from "../posts";

export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const post = getPost((await params).slug); return post ? { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } } : {}; }

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug); if (!post) notFound();
  const related = getPublishedPosts().filter((candidate) => candidate.slug !== post.slug).sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)).slice(0, 3);
  const displayDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${post.date}T00:00:00Z`));
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.description, mainEntityOfPage: `https://www.caterengine.co/blog/${post.slug}`, datePublished: post.date, dateModified: post.date, author: { "@type": "Organization", name: "CaterEngine", url: "https://www.caterengine.co" }, publisher: { "@type": "Organization", name: "CaterEngine", url: "https://www.caterengine.co", logo: { "@type": "ImageObject", url: "https://www.caterengine.co/images/caterengine-logo.png" } } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: post.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return <PageShell><main><article className="container article-page">
    <nav aria-label="Breadcrumb"><Link href="/blog">Insights</Link><span> / </span>{post.category}</nav>
    <header><p className="overline">{post.category} · {post.readTime}</p><h1>{post.title}</h1><p>{post.intro}</p><time dateTime={post.date}>Updated {displayDate}</time></header>
    <div className="article-layout"><aside><strong>In this guide</strong>{post.sections.map((s) => <a key={s.heading} href={`#${s.heading.toLowerCase().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, "")}`}>{s.heading}</a>)}</aside><div className="article-body">
      {post.sections.map((section) => <section id={section.heading.toLowerCase().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, "")} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p) => <p key={p}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}</section>)}
      <section className="faq"><p className="section-tag">Frequently asked questions</p>{post.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      <section className="related-posts"><p className="section-tag">Continue learning</p><h2>Related restaurant catering guides</h2><ul>{related.map((item) => <li key={item.slug}><Link href={`/blog/${item.slug}`}>{item.title} →</Link></li>)}</ul></section>
    </div></div>
  </article><section className="cta-band"><div className="container"><p>Restaurant partners across the United States</p><h2>Turn catering into a repeatable growth channel.</h2><Link className="white-btn" href="/apply">Apply to partner →</Link></div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </main></PageShell>;
}
