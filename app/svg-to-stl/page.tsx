import type { Metadata } from "next";
import SVGToSTLConverter from "@/components/SVGToSTLConverter";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = `${SITE_URL}/svg-to-stl`;

export const metadata: Metadata = {
  title: "SVG to STL Converter – Free Online SVG to 3D STL",
  description: "Convert SVG vector shapes to 3D STL models online. Set model width in millimeters, choose extrusion height and base offset, then export a binary STL locally in your browser.",
  alternates: { canonical: PAGE_URL },
  openGraph: { title: "SVG to STL Converter – Free Online SVG to 3D STL", description: "Extrude supported SVG shapes into printable STL models with millimeter sizing. Browser-based conversion.", url: PAGE_URL, siteName: "ConvertImageNow", type: "website" },
  twitter: { card: "summary", title: "SVG to STL Converter", description: "Turn supported SVG vector shapes into 3D STL models in your browser." },
};

export default function SVGToSTLPage() {
  return <div className="container-page py-10 sm:py-14"><div className="mx-auto max-w-5xl">
    <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-400"><a href="/" className="hover:text-white">Home</a><span className="mx-2">/</span><a href="/tools" className="hover:text-white">Tools</a><span className="mx-2">/</span><span className="text-slate-200">SVG to STL Converter</span></nav>
    <header className="mb-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Free online vector converter</p><h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">SVG to STL Converter</h1><p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">Convert supported 2D SVG shapes into extruded 3D STL models for 3D printing. Set a precise width in millimeters, choose the extrusion height, and export a binary STL file without uploading your design.</p><div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300"><span className="rounded-full border border-[#405777] px-3 py-1">Millimeter sizing</span><span className="rounded-full border border-[#405777] px-3 py-1">Extrusion depth</span><span className="rounded-full border border-[#405777] px-3 py-1">Local processing</span></div></header>
    <SVGToSTLConverter />
    <section className="prose prose-invert mt-12 max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300"><h2>How to convert SVG to STL</h2><ol><li>Upload an SVG file containing supported vector shapes.</li><li>Set the model width in millimeters. The height is scaled proportionally from the SVG viewBox or dimensions.</li><li>Choose the extrusion height to control the model thickness.</li><li>Export the binary STL and open it in your slicer or 3D modeling software.</li></ol><h2>What does SVG to STL conversion do?</h2><p>SVG stores two-dimensional vector geometry, while STL stores a triangulated three-dimensional surface. This converter creates a simple extrusion from supported closed SVG outlines, turning flat shapes into solid-depth models.</p><h2>Which SVG elements are supported?</h2><p>The current converter supports polygons, polylines, rectangles, circles, ellipses, and closed paths made from straight move, line, horizontal, vertical, and close commands. Complex paths with curves, holes, text, clipping paths, masks, strokes, and transforms are not supported in this initial release.</p><h2>Will every exported STL be ready to print?</h2><p>Not necessarily. Intersecting outlines, self-intersections, and overlapping shapes can produce non-manifold geometry. Check the STL in your slicer, repair mesh warnings if needed, and verify dimensions before printing.</p></section>
  </div></div>;
}
