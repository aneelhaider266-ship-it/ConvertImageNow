import type { Metadata } from "next";
import Link from "next/link";
import STLToSVGConverter from "@/components/STLToSVGConverter";

const SITE_URL = "https://convertimagenow.com";
const PAGE_URL = SITE_URL + "/stl-to-svg";

export const metadata: Metadata = {
  title: "STL to SVG Converter – Free Online 3D to 2D Section Tool",
  description: "Slice an STL 3D mesh at a selected position and export 2D section contours as an SVG. Choose top, front or side planes and process files locally in your browser.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "STL to SVG Converter – Free Online 3D to 2D Section Tool",
    description: "Create 2D SVG section contours from STL models with adjustable top, front and side cutting planes. Browser-based processing.",
    url: PAGE_URL,
    siteName: "ConvertImageNow",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "STL to SVG Converter",
    description: "Slice an STL mesh and export 2D section contours as an SVG in your browser.",
  },
};

const FAQS = [
  {
    question: "What does an STL to SVG converter do?",
    answer: "An STL to SVG converter can intersect a 3D triangular mesh with a 2D plane and export the resulting section contours as vector paths in an SVG file. This page creates section drawings, not a perspective rendering or a complete top-view silhouette.",
  },
  {
    question: "Can I convert an STL file to SVG without uploading it?",
    answer: "Yes. This converter reads and processes the selected STL file locally in your browser. The model is not sent to a conversion server.",
  },
  {
    question: "Which STL formats are supported?",
    answer: "The tool supports binary STL and ASCII STL files. Very large files may exceed browser memory or processing limits.",
  },
  {
    question: "Why do I need to choose millimetres or inches?",
    answer: "STL files do not contain reliable unit metadata. Choose the coordinate unit used when the model was exported so the SVG can be assigned a corresponding physical size in millimetres.",
  },
  {
    question: "Why can a section contain open contours?",
    answer: "Open or non-manifold meshes, missing triangles, duplicate geometry or a cutting plane that touches mesh edges can produce open contours. Inspect the output before using it for fabrication.",
  },
];

const SOFTWARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "STL to SVG Converter",
  applicationCategory: "DesignApplication",
  operatingSystem: "Any modern web browser",
  url: PAGE_URL,
  description: "Browser-based tool for exporting 2D mesh section contours from STL files as SVG paths.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  featureList: ["Binary and ASCII STL input", "Top, front and side section planes", "Adjustable section position", "SVG path export", "Local browser processing"],
};

export default function STLToSVGPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="container-page py-10 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-white">Tools</Link><span className="mx-2">/</span>
          <span className="text-slate-200">STL to SVG Converter</span>
        </nav>
        <header className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">Free online 3D to 2D converter</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">STL to SVG Converter</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">Create a 2D SVG section drawing from an STL 3D model. Choose a top, front or side cutting plane, adjust its position, preview the contours and download an SVG file without uploading your model.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="rounded-full border border-[#405777] px-3 py-1">Binary & ASCII STL</span>
            <span className="rounded-full border border-[#405777] px-3 py-1">Adjustable section plane</span>
            <span className="rounded-full border border-[#405777] px-3 py-1">SVG path export</span>
            <span className="rounded-full border border-[#405777] px-3 py-1">Local processing</span>
          </div>
        </header>

        <STLToSVGConverter />

        <section className="prose prose-invert mt-12 max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300">
          <h2>How to convert STL to SVG</h2>
          <ol>
            <li>Choose a binary or ASCII STL file, or load the sample model to test the converter.</li>
            <li>Select a top (XY), front (XZ) or side (YZ) section direction.</li>
            <li>Move the section-position slider to choose where the plane intersects the 3D mesh.</li>
            <li>Choose the coordinate units used by the STL model. STL files do not reliably store this information.</li>
            <li>Review the 2D contours and download the SVG file.</li>
          </ol>

          <h2>What is an STL section drawing?</h2>
          <p>An STL file stores a 3D surface as a collection of triangles. A section drawing is created by intersecting that triangular mesh with a plane. The intersection segments are connected into 2D contours and written as SVG paths. The result represents the selected cross-section, not the complete 3D model.</p>

          <h2>Top, front and side section directions</h2>
          <ul>
            <li><strong>Top (XY):</strong> creates a horizontal section at a selected height along the Z axis.</li>
            <li><strong>Front (XZ):</strong> creates a vertical section at a selected depth along the Y axis.</li>
            <li><strong>Side (YZ):</strong> creates a vertical section at a selected position along the X axis.</li>
          </ul>

          <h2>Why does the STL unit setting matter?</h2>
          <p>STL geometry stores coordinate values but does not reliably identify whether those values represent millimetres or inches. Select the coordinate unit used by your source model. The exported SVG uses physical width and height in millimetres.</p>

          <h2>Will every STL produce closed SVG contours?</h2>
          <p>No. Open surfaces, non-manifold edges, missing triangles and damaged meshes can create open section paths. The tool reports open and closed contour counts where it can identify them. Check the SVG in your CAD, vector or manufacturing software before using it as a cutting or machining path.</p>

          <h2>STL to SVG versus SVG to STL</h2>
          <p>STL to SVG creates a two-dimensional section drawing from a 3D triangular mesh. SVG to STL works in the opposite direction by extruding supported flat vector shapes into a 3D mesh. If you need to turn a supported SVG outline into an STL model, try our <Link href="/svg-to-stl">SVG to STL Converter</Link>.</p>
        </section>
      </div>
    </div>
  );
}
