import type { MetadataRoute } from "next";

const BASE_URL = "https://gallery-guy-web.vercel.app";
const locales = ["en", "tr"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/privacy", "/terms"];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1 : 0.5,
    }))
  );
}
