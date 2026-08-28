import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("larp.engineering home", () => {
  it("states the studio posture without pretending it has a portfolio yet", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "serious software. less serious theater.",
    );
    expect(screen.getByText("unfortunately, this is real.")).toBeInTheDocument();
    expect(screen.getByText("building in public")).toBeInTheDocument();
  });

  it("publishes the operating principles as real document structure", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 2, name: "the operating manual" }),
    ).toBeInTheDocument();

    for (const principle of [
      "inspect reality",
      "ship the smallest real thing",
      "taste is technical",
      "keep the receipt",
    ]) {
      expect(
        screen.getByRole("heading", { level: 3, name: principle }),
      ).toBeInTheDocument();
    }
  });

  it("links the public paper trail instead of inventing social proof", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: /open the source/i })).toHaveAttribute(
      "href",
      "https://github.com/larpengineering/web",
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/larpengineering",
    );
  });
});
