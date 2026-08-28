import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://larp.engineering",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
