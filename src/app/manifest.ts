import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "larp engineering",
    short_name: "larp.engineering",
    description:
      "Software, systems, and interfaces that survive contact with reality.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3efe3",
    theme_color: "#ff4f9a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
