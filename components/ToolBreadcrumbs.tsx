import Link from "next/link";

type ToolBreadcrumbsProps = {
  label: string;
  href: string;
  showNav?: boolean;
};

export default function ToolBreadcrumbs({ label, href, showNav = true }: ToolBreadcrumbsProps) {
  const siteUrl = "https://convertimagenow.com";
  const items = [
    { name: "Home", url: siteUrl + "/" },
    { name: "Tools", url: siteUrl + "/tools" },
    { name: label, url: siteUrl + href },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {showNav ? (
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link><span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-white">Tools</Link><span className="mx-2">/</span>
          <span className="text-slate-200" aria-current="page">{label}</span>
        </nav>
      ) : null}
    </>
  );
}
