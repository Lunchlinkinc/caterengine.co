import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";
import { markets } from "./locations/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://caterengine-growth.info211179.chatgpt.site";
  const changed = new Date("2026-08-15");
  const staticPages = ["", "/about", "/how-it-works", "/partners", "/apply", "/blog", "/privacy"].map((path) => ({ url: `${base}${path}`, lastModified: changed, changeFrequency: path === "/blog" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .8 }));
  const articles = blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: .75 }));
  const locations = Object.keys(markets).map((city) => ({ url: `${base}/locations/${city}`, lastModified: changed, changeFrequency: "monthly" as const, priority: .8 }));
  return staticPages.concat(articles, locations);
}
