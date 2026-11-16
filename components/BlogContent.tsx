import Link from "next/link";
import type { ReactNode } from "react";

function renderInline(value: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

  return value.split(pattern).filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{renderInline(part.slice(2, -2))}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{renderInline(part.slice(1, -1))}</em>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/") || href.startsWith("#")) {
        return <Link key={index} href={href}>{label}</Link>;
      }
      return (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function isBlockStart(line: string): boolean {
  return (
    /^#{2,6}\s/.test(line) ||
    /^!\[[^\]]*\]\([^)]+\)$/.test(line) ||
    /^>\s?/.test(line) ||
    /^\s*([-*])\s+/.test(line) ||
    /^\s*\d+[.)]\s+/.test(line) ||
    /^\s*\|/.test(line) ||
    /^\s*(---|___|\*\*\*)\s*$/.test(line)
  );
}

function splitTableRow(line: string): string[] {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

export default function BlogContent({ content }: { content: string[] }) {
  const source = content.flatMap((item) => item.split(/\r?\n/));
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < source.length) {
    const line = source[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{2,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];
      if (level === 2) {
        blocks.push(<h2 key={index}>{renderInline(text)}</h2>);
      } else {
        blocks.push(<h3 key={index}>{renderInline(text)}</h3>);
      }
      index += 1;
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      blocks.push(
        <figure key={index} className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image[2]}
            alt={image[1]}
            loading="lazy"
            className="h-auto w-full rounded-2xl border border-[#314969] object-cover"
          />
          {image[1] ? <figcaption className="mt-2 text-center text-sm text-slate-400">{image[1]}</figcaption> : null}
        </figure>
      );
      index += 1;
      continue;
    }

    if (/^\s*(---|___|\*\*\*)\s*$/.test(line)) {
      blocks.push(<hr key={index} className="my-8 border-[#314969]" />);
      index += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < source.length && /^>\s?/.test(source[index].trim())) {
        quote.push(source[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push(
        <blockquote key={index}>
          {quote.map((part, quoteIndex) => <p key={quoteIndex}>{renderInline(part)}</p>)}
        </blockquote>
      );
      continue;
    }

    if (/^\s*\|/.test(line)) {
      const rows: string[][] = [];
      while (index < source.length && /^\s*\|/.test(source[index].trim())) {
        const row = splitTableRow(source[index]);
        if (!row.every((cell) => /^:?-{3,}:?$/.test(cell))) rows.push(row);
        index += 1;
      }
      if (rows.length) {
        const [header, ...body] = rows;
        blocks.push(
          <div key={index} className="my-8 overflow-x-auto rounded-xl border border-[#314969]">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr>{header.map((cell, cellIndex) => <th key={cellIndex} className="border-b border-[#314969] bg-[#172642] px-4 py-3 font-semibold text-white">{renderInline(cell)}</th>)}</tr>
              </thead>
              <tbody>
                {body.map((row, rowIndex) => (
                  <tr key={rowIndex} className="odd:bg-[#172642]/70 even:bg-[#101B33]">
                    {header.map((_, cellIndex) => <td key={cellIndex} className="border-b border-[#314969]/70 px-4 py-3 text-slate-300">{renderInline(row[cellIndex] || "")}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    const unordered = /^\s*[-*]\s+/.test(line);
    const ordered = /^\s*\d+[.)]\s+/.test(line);
    if (unordered || ordered) {
      const items: string[] = [];
      const pattern = unordered ? /^\s*[-*]\s+/ : /^\s*\d+[.)]\s+/;
      while (index < source.length && pattern.test(source[index].trim())) {
        items.push(source[index].trim().replace(pattern, ""));
        index += 1;
      }
      const ListTag = ordered ? "ol" : "ul";
      blocks.push(
        <ListTag key={index}>
          {items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item)}</li>)}
        </ListTag>
      );
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (index < source.length && source[index].trim() && !isBlockStart(source[index].trim())) {
      paragraph.push(source[index].trim());
      index += 1;
    }
    blocks.push(<p key={index}>{renderInline(paragraph.join(" "))}</p>);
  }

  return <div className="blog-content">{blocks}</div>;
}
