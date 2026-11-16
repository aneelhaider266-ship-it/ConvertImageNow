import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 42, background: "#101B33" }}>
        <div style={{ width: 118, height: 94, display: "flex", alignItems: "center", justifyContent: "center", border: "8px solid #9CC5FF", borderRadius: 22, position: "relative" }}>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: "#398BFF" }} />
          <div style={{ position: "absolute", right: -13, bottom: -13, width: 34, height: 34, borderRadius: 17, background: "#34D399", border: "5px solid #101B33" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
