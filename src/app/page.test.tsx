import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("larp.engineering home", () => {
  it("makes the offer clear before asking for a project inquiry", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "software that works. without the theater.",
    );
    expect(
      screen.getByText(/web products, internal tools, and the systems behind them/i),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /start a project/i })[0]).toHaveAttribute(
      "href",
      "mailto:hello@larp.engineering?subject=Project%20inquiry",
    );
  });

  it("uses specific service language instead of generic feature copy", () => {
    render(<Home />);

    for (const service of [
      "product engineering",
      "internal software",
      "systems work",
    ]) {
      expect(
        screen.getByRole("heading", { level: 3, name: service }),
      ).toBeInTheDocument();
    }
  });

  it("keeps the public source as honest proof", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: /read the source/i })).toHaveAttribute(
      "href",
      "https://github.com/larpengineering/web",
    );
  });
});
