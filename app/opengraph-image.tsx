import { ImageResponse } from "next/og";

export const alt = "ConvertImageNow — Free browser-based image converter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          background: "linear-gradient(135deg, #101B33 0%, #172642 58%, #0d1930 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 58, height: 58, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", background: "#398BFF", fontSize: 34, fontWeight: 800, color: "#ffffff" }}>C</div>
          <div style={{ display: "flex", fontSize: 31, fontWeight: 750, letterSpacing: -1 }}>ConvertImageNow</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 780 }}>
          <div style={{ display: "flex", fontSize: 62, lineHeight: 1.08, fontWeight: 800, letterSpacing: -2 }}>Free Online Image Converter</div>
          <div style={{ display: "flex", fontSize: 27, lineHeight: 1.35, color: "#cbd5e1" }}>Convert supported image formats in your browser. Adjust quality, resize, and download.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {["JPG", "PNG", "WebP"].map((format) => (
            <div key={format} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 132, height: 72, borderRadius: 16, border: "2px solid #3b5c88", background: "#101B33", color: "#9CC5FF", fontSize: 24, fontWeight: 800 }}>{format}</div>
          ))}
          <div style={{ display: "flex", marginLeft: 12, fontSize: 21, color: "#a7f3d0" }}>Browser-based processing</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
