import type { MetadataRoute } from "next";
import { mainNav, services, site } from "@/lib/site";

/** Static sitemap. Enriched with blog articles in Phase 3. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    ...mainNav.map((n) => n.href),
    ...services.map((s) => s.href),
    "/privacy-policy",
    "/cookies",
    "/terms",
  ];
  const unique = Array.from(new Set(routes));
  return unique.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
