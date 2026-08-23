import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";
import { getPublishedPosts } from "./posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "Restaurant Catering Growth Blog", description: "Practical guidance on restaurant catering software, corporate catering marketing, operations, and growth." };

export default function BlogPage() {
  const blogPosts = getPublishedPosts();
  return <PageShell><main>
    <section className="page-hero"><p className="overline">CaterEngine insights</p><h1>Build a stronger <em>catering channel.</em></h1><p>Practical playbooks for restaurant operators who want more profitable catering orders and a system their team can run.</p></section>
    <section className="container blog-grid">
      {blogPosts.map((post, index) => <article className={index === 0 ? "featured-post" : ""} key={post.slug}><div><span>{post.category}</span><span>{post.readTime}</span></div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.description}</p><Link className="post-link" href={`/blog/${post.slug}`}>Read the guide →</Link></article>)}
    </section>
    <section className="mini-cta"><div className="container"><h2>Ready to build your catering channel?</h2><Link className="white-btn" href="/apply">Apply to partner →</Link></div></section>
  </main></PageShell>;
}
