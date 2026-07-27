export type OutputFormat = "jpg" | "png" | "webp";

export const FORMAT_MIME: Record<OutputFormat, string> = {
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

export const ACCEPTED_INPUT_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/avif",
];

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(value < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
}

export function compressionPercent(original: number, converted: number): number {
  if (original <= 0) return 0;
  const pct = ((original - converted) / original) * 100;
  return Math.round(pct);
}

/**
 * Converts a single image file to the target format entirely on the client
 * using the Canvas API. No data ever leaves the browser.
 */
export function convertImage(
  file: File,
  format: OutputFormat,
  quality: number
): Promise<{ blob: Blob; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Could not create canvas context"));
        return;
      }

      // Fill white background for formats without alpha (e.g. converting to JPG)
      if (format === "jpg") {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(objectUrl);
          if (!blob) {
            reject(new Error("Conversion failed"));
            return;
          }
          resolve({ blob, width: canvas.width, height: canvas.height });
        },
        FORMAT_MIME[format],
        format === "png" ? undefined : quality / 100
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(
        new Error(
          "Could not load this image. Your browser may not support this format."
        )
      );
    };

    img.src = objectUrl;
  });
}
