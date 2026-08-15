import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: "https://caterengine-growth.info211179.chatgpt.site/sitemap.xml", host: "https://caterengine-growth.info211179.chatgpt.site" }; }
