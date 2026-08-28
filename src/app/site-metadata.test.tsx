import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import manifest, { dynamic as manifestDynamic } from "./manifest";
import NotFound from "./not-found";
import robots, { dynamic as robotsDynamic } from "./robots";
import sitemap, { dynamic as sitemapDynamic } from "./sitemap";

describe("public site metadata", () => {
  it("marks generated metadata routes as static-export safe", () => {
    expect([manifestDynamic, robotsDynamic, sitemapDynamic]).toEqual([
      "force-static",
      "force-static",
      "force-static",
    ]);
  });

  it("keeps crawlers and the canonical sitemap pointed at larp.engineering", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://larp.engineering/sitemap.xml",
    });
    expect(sitemap()).toEqual([
      {
        url: "https://larp.engineering",
        changeFrequency: "monthly",
        priority: 1,
      },
    ]);
  });

  it("publishes an installable identity without pretending to be an app", () => {
    expect(manifest()).toMatchObject({
      name: "larp engineering",
      short_name: "larp.engineering",
      start_url: "/",
      display: "standalone",
      background_color: "#f3efe3",
      theme_color: "#ff4f9a",
    });
  });

  it("turns dead routes into a useful way home", () => {
    render(<NotFound />);

    expect(
      screen.getByRole("heading", { level: 1, name: "wrong bit." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to reality/i })).toHaveAttribute(
      "href",
      "/",
    );
  });
});
