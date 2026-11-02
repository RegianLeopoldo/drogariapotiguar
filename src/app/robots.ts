import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://drogariapotiguar.vercel.app/sitemap.xml",
    host: "https://drogariapotiguar.vercel.app",
  };
}
