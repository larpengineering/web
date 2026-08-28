import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

describe("static social image", () => {
  it("ships a real 1200 by 630 PNG for link previews", () => {
    const image = readFileSync(
      join(process.cwd(), "src/app/opengraph-image.png"),
    );

    expect(image.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
    expect(image.readUInt32BE(16)).toBe(1200);
    expect(image.readUInt32BE(20)).toBe(630);
  });
});
