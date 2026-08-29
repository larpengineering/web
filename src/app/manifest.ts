import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "larp engineering",
    short_name: "larp.engineering",
    description:
      "Web products, internal tools, and the systems behind them.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf6",
    theme_color: "#181816",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
