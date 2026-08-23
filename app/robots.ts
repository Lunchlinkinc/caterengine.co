import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: "https://www.caterengine.co/sitemap.xml", host: "https://www.caterengine.co" }; }
