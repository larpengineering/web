import { ImageResponse } from "next/og";

export const alt =
  "larp engineering / serious software, less serious theater";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "54px 60px",
        background: "#f3efe3",
        color: "#151311",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "monospace",
          fontSize: 18,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        <span>larp.engineering</span>
        <span>field note / 001</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 105,
          fontWeight: 700,
          letterSpacing: "-0.075em",
          lineHeight: 0.84,
        }}
      >
        <span>serious software.</span>
        <span style={{ display: "flex", marginLeft: 70 }}>
          <span
            style={{
              display: "flex",
              marginRight: 26,
              padding: "8px 16px 2px",
              background: "#ff4f9a",
              fontFamily: "monospace",
              fontSize: 45,
              fontWeight: 400,
              letterSpacing: "-0.05em",
            }}
          >
            less serious
          </span>
          theater.
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          borderTop: "2px solid #151311",
          paddingTop: 24,
        }}
      >
        <span style={{ fontSize: 27, letterSpacing: "-0.03em" }}>
          software that survives contact with reality.
        </span>
        <span
          style={{
            display: "flex",
            padding: "14px 18px",
            background: "#dfff54",
            border: "2px solid #151311",
            boxShadow: "7px 7px 0 #151311",
            fontFamily: "monospace",
            fontSize: 16,
            transform: "rotate(2deg)",
          }}
        >
          unfortunately real.
        </span>
      </div>
    </div>,
    size,
  );
}
