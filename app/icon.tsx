import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 16, background: "#101B33" }}>
        <div style={{ width: 42, height: 34, display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid #9CC5FF", borderRadius: 8, position: "relative" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#398BFF" }} />
          <div style={{ position: "absolute", right: -5, bottom: -5, width: 13, height: 13, borderRadius: 7, background: "#34D399", border: "2px solid #101B33" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
