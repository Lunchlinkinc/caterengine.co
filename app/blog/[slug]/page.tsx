import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/PageShell";
import { blogPosts, getPost } from "../posts";

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const post = getPost((await params).slug); return post ? { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } } : {}; }

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug); if (!post) notFound();
  const displayDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${post.date}T00:00:00Z`));
  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.description, datePublished: post.date, dateModified: post.date, author: { "@type": "Organization", name: "CaterEngine" }, publisher: { "@type": "Organization", name: "CaterEngine", url: "https://caterengine.co" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: post.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  return <PageShell><main><article className="container article-page">
    <nav aria-label="Breadcrumb"><Link href="/blog">Insights</Link><span> / </span>{post.category}</nav>
    <header><p className="overline">{post.category} · {post.readTime}</p><h1>{post.title}</h1><p>{post.intro}</p><time dateTime={post.date}>Updated {displayDate}</time></header>
    <div className="article-layout"><aside><strong>In this guide</strong>{post.sections.map((s) => <a key={s.heading} href={`#${s.heading.toLowerCase().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, "")}`}>{s.heading}</a>)}</aside><div className="article-body">
      {post.sections.map((section) => <section id={section.heading.toLowerCase().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, "")} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p) => <p key={p}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}</section>)}
      <section className="faq"><p className="section-tag">Frequently asked questions</p>{post.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
    </div></div>
  </article><section className="cta-band"><div className="container"><p>Restaurant partners across the United States</p><h2>Turn catering into a repeatable growth channel.</h2><Link className="white-btn" href="/apply">Apply to partner →</Link></div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </main></PageShell>;
}
