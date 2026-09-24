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
  Lock,
  Unlock,
} from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { ACCEPTED_INPUT_TYPES, formatBytes } from "@/lib/imageConversion";

type QueueItem = {
  id: string;
  file: File;
  previewUrl: string;
  originalWidth: number;
  originalHeight: number;
  status: "pending" | "resizing" | "done" | "error";
  resizedBlob?: Blob;
  resizedWidth?: number;
  resizedHeight?: number;
  errorMessage?: string;
};

let idCounter = 0;
const nextId = () => `img-${Date.now()}-${idCounter++}`;

function loadImageDimensions(
  file: File
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      URL.revokeObjectURL(url);
      resolve({ width, height });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read image dimensions"));
    };
    img.src = url;
  });
}

function resizeImageFile(
  file: File,
  targetWidth: number,
  targetHeight: number
): Promise<{ blob: Blob; width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error("Canvas not supported"));
        return;
      }
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      const mimeType = file.type || "image/png";
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(url);
          if (!blob) {
            reject(new Error("Resize failed"));
            return;
          }
          resolve({ blob, width: targetWidth, height: targetHeight });
        },
        mimeType,
        0.92
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not load image"));
    };
    img.src = url;
  });
}

export default function ImageResizer() {
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [widthPx, setWidthPx] = useState<number | "">("");
  const [heightPx, setHeightPx] = useState<number | "">("");
  const [percentage, setPercentage] = useState(50);
  const [mode, setMode] = useState<"pixels" | "percent">("pixels");
  const [lockAspect, setLockAspect] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((fileList: FileList | File[]) => {
    const incoming = Array.from(fileList).filter((file) =>
      ACCEPTED_INPUT_TYPES.includes(file.type)
    );

    const items: QueueItem[] = incoming.map((file) => ({
      id: nextId(),
      file,
      previewUrl: URL.createObjectURL(file),
      originalWidth: 0,
      originalHeight: 0,
      status: "pending",
    }));

    setQueue((prev) => [...prev, ...items]);

    items.forEach((item) => {
      loadImageDimensions(item.file)
        .then(({ width, height }) => {
          setQueue((prev) =>
            prev.map((queueItem) =>
              queueItem.id === item.id
                ? { ...queueItem, originalWidth: width, originalHeight: height }
                : queueItem
            )
          );
          setWidthPx((current) => (current === "" ? width : current));
          setHeightPx((current) => (current === "" ? height : current));
        })
        .catch(() => {
          setQueue((prev) =>
            prev.map((queueItem) =>
              queueItem.id === item.id
                ? {
                    ...queueItem,
                    status: "error",
                    errorMessage: "Could not read image",
                  }
                : queueItem
            )
          );
        });
    });
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
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((queueItem) => queueItem.id !== id);
    });
  };

  const clearAll = () => {
    setQueue((prev) => {
      prev.forEach((item) => URL.revokeObjectURL(item.previewUrl));
      return [];
    });
  };

  const handleWidthChange = (value: number | "") => {
    setWidthPx(value);
    if (lockAspect && value !== "" && queue[0]?.originalWidth) {
      const ratio = queue[0].originalHeight / queue[0].originalWidth;
      setHeightPx(Math.round(Number(value) * ratio));
    }
  };

  const handleHeightChange = (value: number | "") => {
    setHeightPx(value);
    if (lockAspect && value !== "" && queue[0]?.originalHeight) {
      const ratio = queue[0].originalWidth / queue[0].originalHeight;
      setWidthPx(Math.round(Number(value) * ratio));
    }
  };

  const getTargetDimensions = (item: QueueItem) => {
    if (mode === "percent") {
      return {
        width: Math.max(1, Math.round((item.originalWidth * percentage) / 100)),
        height: Math.max(1, Math.round((item.originalHeight * percentage) / 100)),
      };
    }

    if (lockAspect && item.originalWidth && item.originalHeight) {
      const ratio = item.originalHeight / item.originalWidth;
      const width = Number(widthPx) || item.originalWidth;
      return { width, height: Math.round(width * ratio) };
    }

    return {
      width: Number(widthPx) || item.originalWidth,
      height: Number(heightPx) || item.originalHeight,
    };
  };

  const resizeAll = async () => {
    setIsResizing(true);

    setQueue((prev) =>
      prev.map((item) =>
        item.status === "done" ? item : { ...item, status: "pending" }
      )
    );

    const items = [...queue];

    for (const item of items) {
      setQueue((prev) =>
        prev.map((queueItem) =>
          queueItem.id === item.id
            ? { ...queueItem, status: "resizing" }
            : queueItem
        )
      );

      try {
        const { width, height } = getTargetDimensions(item);
        const { blob } = await resizeImageFile(item.file, width, height);

        setQueue((prev) =>
          prev.map((queueItem) =>
            queueItem.id === item.id
              ? {
                  ...queueItem,
                  status: "done",
                  resizedBlob: blob,
                  resizedWidth: width,
                  resizedHeight: height,
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
                    error instanceof Error ? error.message : "Resize failed",
                }
              : queueItem
          )
        );
      }
    }

    setIsResizing(false);
  };

  const downloadOne = (item: QueueItem) => {
    if (!item.resizedBlob) return;
    const dotIndex = item.file.name.lastIndexOf(".");
    const baseName =
      dotIndex > -1 ? item.file.name.slice(0, dotIndex) : item.file.name;
    const ext = dotIndex > -1 ? item.file.name.slice(dotIndex + 1) : "png";

    saveAs(
      item.resizedBlob,
      `${baseName}-${item.resizedWidth}x${item.resizedHeight}.${ext}`
    );
  };

  const downloadAllZip = async () => {
    const doneItems = queue.filter(
      (item) => item.status === "done" && item.resizedBlob
    );

    if (doneItems.length === 0) return;

    const zip = new JSZip();

    doneItems.forEach((item) => {
      const dotIndex = item.file.name.lastIndexOf(".");
      const baseName =
        dotIndex > -1 ? item.file.name.slice(0, dotIndex) : item.file.name;
      const ext = dotIndex > -1 ? item.file.name.slice(dotIndex + 1) : "png";

      zip.file(
        `${baseName}-${item.resizedWidth}x${item.resizedHeight}.${ext}`,
        item.resizedBlob as Blob
      );
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "convertimagenow-resized.zip");
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
        className={`flex min-h-[310px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition-colors ${
          isDragging
            ? "border-brand-primary bg-brand-primary/5"
            : "border-slate-300 bg-slate-50 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
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
          aria-label="Upload images to resize"
        />

        <span className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
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
      <div className="mt-6 flex min-h-[142px] flex-col gap-6 rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex h-9 rounded-lg border border-slate-200 p-1 dark:border-slate-700">
            <button
              type="button"
              onClick={() => setMode("pixels")}
              className={`h-7 rounded-md px-4 text-sm font-medium transition-colors ${
                mode === "pixels"
                  ? "bg-brand-primary text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              Pixels
            </button>
            <button
              type="button"
              onClick={() => setMode("percent")}
              className={`h-7 rounded-md px-4 text-sm font-medium transition-colors ${
                mode === "percent"
                  ? "bg-brand-primary text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              Percentage
            </button>
          </div>

          {mode === "pixels" && (
            <button
              type="button"
              onClick={() => setLockAspect((prev) => !prev)}
              className="ml-auto inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              {lockAspect ? <Lock size={16} /> : <Unlock size={16} />}
              {lockAspect ? "Aspect ratio locked" : "Aspect ratio unlocked"}
            </button>
          )}
        </div>

        {mode === "pixels" ? (
          <div className="flex flex-wrap items-end gap-4">
            <label className="flex flex-col gap-1 text-sm font-semibold">
              Width (px)
              <input
                type="number"
                min={1}
                value={widthPx}
                onChange={(event) =>
                  handleWidthChange(
                    event.target.value === "" ? "" : Number(event.target.value)
                  )
                }
                className="h-10 w-32 rounded-lg border border-slate-200 px-3 text-sm font-normal dark:border-slate-700 dark:bg-slate-900"
              />
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold">
              Height (px)
              <input
                type="number"
                min={1}
                value={heightPx}
                onChange={(event) =>
                  handleHeightChange(
                    event.target.value === "" ? "" : Number(event.target.value)
                  )
                }
                disabled={lockAspect}
                className="h-10 w-32 rounded-lg border border-slate-200 px-3 text-sm font-normal disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900"
              />
            </label>
          </div>
        ) : (
          <div className="w-full sm:w-64">
            <div className="mb-2 flex h-5 items-center justify-between text-sm font-semibold">
              <span>Scale</span>
              <span className="text-brand-primary">{percentage}%</span>
            </div>

            <input
              type="range"
              min={1}
              max={200}
              value={percentage}
              onChange={(event) => setPercentage(Number(event.target.value))}
              className="block h-5 w-full accent-brand-primary"
              aria-label="Resize percentage"
            />
          </div>
        )}
      </div>

      {/* Action bar */}
      {hasQueue && (
        <div className="mt-6 flex min-h-11 flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={resizeAll}
            disabled={isResizing}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {isResizing && (
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            )}
            {isResizing
              ? "Resizing..."
              : `Resize ${queue.length} image${queue.length > 1 ? "s" : ""}`}
          </button>

          <button
            type="button"
            onClick={downloadAllZip}
            disabled={doneCount === 0}
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold disabled:opacity-40 dark:border-slate-700"
          >
            <FolderArchive size={16} aria-hidden="true" />
            Download All (ZIP)
          </button>

          <button
            type="button"
            onClick={clearAll}
            className="ml-auto inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-red-500"
          >
            <Trash2 size={16} aria-hidden="true" />
            Clear all
          </button>
        </div>
      )}

      {/* Queue list */}
      {hasQueue && (
        <ul className="mt-6 flex flex-col gap-2">
          {queue.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 rounded-xl border border-slate-200 p-3 dark:border-slate-700"
            >
              <img
                src={item.previewUrl}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-lg object-cover"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{item.file.name}</p>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{formatBytes(item.file.size)}</span>

                  {item.originalWidth > 0 && (
                    <span>
                      {item.originalWidth}×{item.originalHeight}
                    </span>
                  )}

                  {item.status === "done" && item.resizedBlob && (
                    <>
                      <span>→</span>
                      <span className="font-medium text-brand-accent">
                        {item.resizedWidth}×{item.resizedHeight}
                      </span>
                      <span className="rounded-full bg-brand-accent/10 px-2 py-0.5 font-medium text-brand-accent">
                        {formatBytes(item.resizedBlob.size)}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex min-h-10 min-w-[72px] items-center justify-end gap-2">
                {item.status === "resizing" && (
                  <Loader2
                    size={18}
                    className="animate-spin text-brand-primary"
                    aria-label="Resizing"
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
                      className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
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
                  className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
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
