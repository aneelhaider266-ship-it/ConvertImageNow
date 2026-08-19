"use client";

import { useCallback, useRef, useState } from "react";
import {
  UploadCloud,
  X,
  Download,
  FolderArchive,
  Trash2,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {
  ACCEPTED_INPUT_TYPES,
  compressionPercent,
  convertImage,
  formatBytes,
  OutputFormat,
} from "@/lib/imageConversion";

type QueueItem = {
  id: string;
  file: File;
  previewUrl: string;
  status: "pending" | "converting" | "done" | "error";
  convertedBlob?: Blob;
  convertedWidth?: number;
  convertedHeight?: number;
  errorMessage?: string;
};

const FORMATS: { value: OutputFormat; label: string }[] = [
  { value: "jpg", label: "JPG" },
  { value: "png", label: "PNG" },
  { value: "webp", label: "WebP" },
];

let idCounter = 0;

const nextId = () => `img-${Date.now()}-${idCounter++}`;

export default function ImageConverter() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [format, setFormat] = useState<OutputFormat>("webp");
  const [quality, setQuality] = useState(80);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((fileList: FileList | File[]) => {
    const incoming = Array.from(fileList).filter((file) =>
      ACCEPTED_INPUT_TYPES.includes(file.type)
    );

    const items: QueueItem[] = incoming.map((file) => ({
      id: nextId(),
      file,
      previewUrl: URL.createObjectURL(file),
      status: "pending",
    }));

    setQueue((prev) => [...prev, ...items]);
  }, []);

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setIsDragging(false);

    if (event.dataTransfer.files?.length) {
      addFiles(event.dataTransfer.files);
    }
  };

  const removeItem = (id: string) => {
    setQueue((prev) => {
      const item = prev.find((queueItem) => queueItem.id === id);

      if (item) {
        URL.revokeObjectURL(item.previewUrl);
      }

      return prev.filter((queueItem) => queueItem.id !== id);
    });
  };

  const clearAll = () => {
    setQueue((prev) => {
      prev.forEach((item) => URL.revokeObjectURL(item.previewUrl));
      return [];
    });
  };

  const convertAll = async () => {
    setIsConverting(true);

    setQueue((prev) =>
      prev.map((item) =>
        item.status === "done"
          ? item
          : {
              ...item,
              status: "pending",
            }
      )
    );

    const items = [...queue];

    for (const item of items) {
      setQueue((prev) =>
        prev.map((queueItem) =>
          queueItem.id === item.id
            ? {
                ...queueItem,
                status: "converting",
              }
            : queueItem
        )
      );

      try {
        const { blob, width, height } = await convertImage(
          item.file,
          format,
          quality
        );

        setQueue((prev) =>
          prev.map((queueItem) =>
            queueItem.id === item.id
              ? {
                  ...queueItem,
                  status: "done",
                  convertedBlob: blob,
                  convertedWidth: width,
                  convertedHeight: height,
                }
              : queueItem
          )
        );
      } catch (error) {
        setQueue((prev) =>
          prev.map((queueItem) =>
            queueItem.id === item.id
              ? {
                  ...queueItem,
                  status: "error",
                  errorMessage:
                    error instanceof Error
                      ? error.message
                      : "Conversion failed",
                }
              : queueItem
          )
        );
      }
    }

    setIsConverting(false);
  };

  const downloadOne = (item: QueueItem) => {
    if (!item.convertedBlob) return;

    const baseName = item.file.name.replace(/\.[^/.]+$/, "");

    saveAs(item.convertedBlob, `${baseName}.${format}`);
  };

  const downloadAllZip = async () => {
    const doneItems = queue.filter(
      (item) => item.status === "done" && item.convertedBlob
    );

    if (doneItems.length === 0) return;

    const zip = new JSZip();

    doneItems.forEach((item) => {
      const baseName = item.file.name.replace(/\.[^/.]+$/, "");

      zip.file(`${baseName}.${format}`, item.convertedBlob as Blob);
    });

    const zipBlob = await zip.generateAsync({
      type: "blob",
    });

    saveAs(zipBlob, "convertimagenow-export.zip");
  };

  const doneCount = queue.filter((item) => item.status === "done").length;
  const hasQueue = queue.length > 0;

  return (
    <div className="w-full">
      {/* Drop zone */}
      <div
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        className={`flex min-h-[310px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-colors sm:min-h-[280px] ${
          isDragging
            ? "border-brand-primary bg-brand-primary/5"
            : "border-slate-300 bg-slate-50 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800/70"
        }`}
      >
        <input
          ref={inputRef}
          id="image-upload"
          name="image-upload"
          type="file"
          multiple
          accept={ACCEPTED_INPUT_TYPES.join(",")}
          className="hidden"
          onChange={(event) => {
            if (event.target.files) {
              addFiles(event.target.files);
              event.target.value = "";
            }
          }}
          aria-label="Upload images to convert"
        />

        <span className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
          <UploadCloud size={28} aria-hidden="true" />
        </span>

        <p className="text-lg font-semibold leading-7">
          Drag &amp; drop images here, or click to browse
        </p>

        <p className="mt-1 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
          Supports JPG, PNG, WebP, AVIF — batch upload supported
        </p>

        <p className="mt-4 flex min-h-5 items-center gap-1.5 text-xs font-medium text-brand-accent">
          <ShieldCheck size={14} className="shrink-0" aria-hidden="true" />
          Nothing is uploaded — everything runs locally in your browser
        </p>
      </div>

      {/* Controls */}
      <div className="mt-6 flex min-h-[142px] flex-col gap-6 rounded-2xl border border-slate-200 p-5 dark:border-slate-800 sm:min-h-[98px] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold">Convert to</p>

          <div className="inline-flex h-9 rounded-lg border border-slate-200 p-1 dark:border-slate-700">
            {FORMATS.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setFormat(item.value)}
                className={`h-7 rounded-md px-4 text-sm font-medium transition-colors ${
                  format === item.value
                    ? "bg-brand-primary text-white"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-64">
          <div className="mb-2 flex h-5 items-center justify-between text-sm font-semibold">
            <span>Quality</span>

            <span className="text-brand-primary">{quality}</span>
          </div>

          <input
            type="range"
            min={1}
            max={100}
            value={quality}
            onChange={(event) => setQuality(Number(event.target.value))}
            disabled={format === "png"}
            className="block h-5 w-full accent-brand-primary disabled:opacity-40"
            aria-label="Output quality"
          />
        </div>
      </div>

      {/* Action bar */}
      {hasQueue && (
        <div className="mt-6 flex min-h-11 flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={convertAll}
            disabled={isConverting}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {isConverting && (
              <Loader2
                size={16}
                className="animate-spin"
                aria-hidden="true"
              />
            )}

            {isConverting
              ? "Converting..."
              : `Convert ${queue.length} image${
                  queue.length > 1 ? "s" : ""
                }`}
          </button>

          <button
            type="button"
            onClick={downloadAllZip}
            disabled={doneCount === 0}
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <FolderArchive size={16} aria-hidden="true" />
            Download All (ZIP)
          </button>

          <button
            type="button"
            onClick={clearAll}
            className="ml-auto inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-red-600 dark:text-slate-400"
          >
            <Trash2 size={16} aria-hidden="true" />
            Clear all
          </button>
        </div>
      )}

      {/* File list */}
      {hasQueue && (
        <ul className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {queue.map((item) => (
            <li key={item.id} className="flex min-h-[90px] items-center gap-4 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.previewUrl}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-lg object-cover"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {item.file.name}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{formatBytes(item.file.size)}</span>

                  {item.status === "done" && item.convertedBlob && (
                    <>
                      <span>→</span>

                      <span className="font-medium text-brand-accent">
                        {formatBytes(item.convertedBlob.size)}
                      </span>

                      <span className="rounded-full bg-brand-accent/10 px-2 py-0.5 font-medium text-brand-accent">
                        {compressionPercent(
                          item.file.size,
                          item.convertedBlob.size
                        )}
                        % smaller
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex min-h-10 min-w-[72px] items-center justify-end gap-2">
                {item.status === "converting" && (
                  <Loader2
                    size={18}
                    className="animate-spin text-brand-primary"
                    aria-label="Converting"
                  />
                )}

                {item.status === "done" && (
                  <>
                    <CheckCircle2
                      size={18}
                      className="text-brand-accent"
                      aria-hidden="true"
                    />

                    <button
                      type="button"
                      onClick={() => downloadOne(item)}
                      aria-label={`Download ${item.file.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-brand-primary dark:hover:bg-slate-800"
                    >
                      <Download size={16} aria-hidden="true" />
                    </button>
                  </>
                )}

                {item.status === "error" && (
                  <span
                    title={item.errorMessage}
                    className="flex h-9 w-9 items-center justify-center"
                  >
                    <AlertCircle
                      size={18}
                      className="text-red-500"
                      aria-hidden="true"
                    />
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.file.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-red-500 dark:hover:bg-slate-800"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
