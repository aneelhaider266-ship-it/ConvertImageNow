import { redirect } from "next/navigation";

// HEIC/HEIF decoding is not implemented by the current converter.
// Send visitors to the existing educational guide rather than presenting
// an unsupported upload tool.
export default function HeicToJpgPage(): never {
  redirect("/blog/heic-to-jpg-guide");
}
