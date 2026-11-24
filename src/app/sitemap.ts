import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/paths";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-11-16"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacidad-paga-wallet.html`,
      lastModified: new Date("2026-11-24"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/privacy-paga-wallet.html`,
      lastModified: new Date("2026-11-24"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
