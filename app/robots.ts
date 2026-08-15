import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: "https://caterengine.com/sitemap.xml", host: "https://caterengine.com" }; }
