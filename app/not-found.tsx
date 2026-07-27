import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-32 text-center">
      <p className="text-sm font-semibold text-brand-primary">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-300">
        The page you&apos;re looking for doesn&apos;t exist or may have
        moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white"
      >
        Back to homepage
      </Link>
    </div>
  );
}
