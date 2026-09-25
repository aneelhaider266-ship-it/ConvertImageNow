<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(SERVICE_SCHEMA),
    }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(FAQ_SCHEMA),
    }}
  />

  {/* Hero Section */}
  <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
      AVIF to JPG Converter – Convert .AVIF to JPG Online Free
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
      Free online AVIF to JPG converter. Convert .AVIF files to JPG directly in your browser — no upload, no signup, no watermark. Works on Windows, Mac, Android and iOS.
    </p>

    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
      <span className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        100% free
      </span>
      <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 sm:block" />
      <span className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        No upload required
      </span>
      <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 sm:block" />
      <span className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        No signup
      </span>
      <span className="hidden h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600 sm:block" />
      <span className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        No file limit
      </span>
    </div>
  </section>

  {/* Converter Section */}
  <section
    className="relative z-10 mx-auto mt-12 max-w-4xl px-4 sm:mt-16 sm:px-6 lg:px-8"
    aria-label="AVIF to JPG conversion tool"
  >
    <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-brand-primary/5 to-transparent blur-2xl dark:from-brand-primary/10" />
    <ImageConverter initialFormat="jpg" />
  </section>

  {/* Main Content & Guides */}
  <section className="mx-auto mt-20 max-w-3xl px-4 sm:mt-32 sm:px-6 lg:max-w-4xl lg:px-8">
    <div className="prose-slate text-left text-slate-700 dark:text-slate-300">
      <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        Why Convert AVIF to JPG?
      </h2>

      <p className="mb-5 text-lg leading-relaxed">
        AVIF is a modern image format with efficient compression and good visual quality. However, many older apps, image editors, websites, printing tools, and devices still do not fully support AVIF files.
      </p>

      <p className="mb-10 text-lg leading-relaxed">
        JPG is one of the most widely supported image formats. Converting AVIF to JPG makes your images easier to open, edit, print, email, upload, and share across different devices and applications — especially when you need maximum compatibility.
      </p>

      <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        How to Convert AVIF to JPG
      </h2>

      <ol className="mb-10 list-decimal space-y-4 pl-6 text-lg leading-relaxed marker:text-slate-400 dark:marker:text-slate-500">
        <li>Select or drag one or more .AVIF images into the converter.</li>
        <li>Choose JPG as the output format.</li>
        <li>Adjust the quality setting if you want to control file size and visual quality.</li>
        <li>Start the conversion to convert AVIF to JPG in your browser.</li>
        <li>Download the JPG file, or download multiple converted files as a ZIP archive.</li>
      </ol>

      {/* Common mistake callout */}
      <div className="mb-12 mt-8 flex gap-4 rounded-2xl border border-amber-500/30 bg-amber-50/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:bg-amber-50 dark:border-amber-500/20 dark:bg-amber-950/30 dark:hover:bg-amber-950/50">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50">
          <FileWarning className="h-5 w-5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
        </div>
        <div>
          <p className="text-base leading-relaxed text-amber-900 dark:text-amber-200/90">
            <strong className="font-semibold text-amber-950 dark:text-amber-100">Common mistake:</strong> if your AVIF image has a transparent background, converting it to JPG will fill that area with a solid color, since JPG does not support transparency. Convert to PNG instead if you need to keep it.
          </p>
        </div>
      </div>

      <h2 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        Private AVIF to JPG Conversion
      </h2>

      <p className="mb-5 text-lg leading-relaxed">
        ConvertImageNow is designed for browser-based image conversion.
        Supported image processing takes place locally in your browser, so
        your files do not need to be sent to our conversion server. This makes it a private option when you want to convert AVIF to JPG without uploading your images.
      </p>

      <p className="mb-10 text-lg leading-relaxed">
        You can verify this yourself: open your browser&apos;s developer tools (Network tab) while converting, and you&apos;ll see no image data being sent anywhere. Please review the privacy policy for complete information about data handling.
      </p>

      {/* Device sections as sleek cards */}
      <h2 className="mb-8 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        Convert AVIF to JPG by Device
      </h2>

      <div className="mb-12 grid gap-6 sm:grid-cols-3">
        {DEVICES.map(({ icon: Icon, name, steps }) => (
          <div
            key={name}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 dark:hover:bg-slate-900"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-slate-50 opacity-50 transition-transform duration-500 group-hover:scale-150 dark:bg-slate-800/30" />
            
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-brand-primary/10 group-hover:text-brand-primary dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-brand-primary/20 dark:group-hover:text-brand-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{name}</h3>
            </div>

            <ol className="relative mt-5 flex-1 list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-slate-600 marker:text-slate-400 dark:text-slate-400 dark:marker:text-slate-500">
              {steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <h2 className="mb-8 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        AVIF vs JPG
      </h2>

      <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <table className="w-full border-collapse text-left text-sm sm:text-base">
          <thead className="bg-slate-50/80 backdrop-blur-sm dark:bg-slate-900/80">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">Feature</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">AVIF</th>
              <th className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">JPG</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
              <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Compatibility</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Limited on older apps and devices</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Supported almost everywhere</td>
            </tr>
            <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
              <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Compression</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">More efficient at similar quality</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Less efficient, larger files</td>
            </tr>
            <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
              <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Transparency</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Supported</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Not supported</td>
            </tr>
            <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
              <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Best for</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Modern web delivery</td>
              <td className="px-6 py-4 text-slate-600 dark:text-slate-400">Maximum compatibility, printing, editing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-16 text-lg leading-relaxed">
        You can learn more in our{" "}
        <Link
          href="/blog/best-image-formats-explained"
          className="font-medium text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition-colors hover:decoration-brand-primary"
        >
          guide to the best image formats
        </Link>
        . For another format comparison, read our{" "}
        <Link
          href="/blog/png-vs-jpg"
          className="font-medium text-brand-primary underline decoration-brand-primary/30 underline-offset-4 transition-colors hover:decoration-brand-primary"
        >
          PNG vs JPG guide
        </Link>
        .
      </p>

      <h2 className="mb-8 mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        Frequently Asked Questions
      </h2>

      <div className="mb-10 space-y-4">
        {FAQS.map((faq) => (
          <details
            key={faq.q}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-slate-700"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-lg font-semibold text-slate-900 outline-none dark:text-slate-100 [&::-webkit-details-marker]:hidden">
              {faq.q}
              <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-300 group-open:rotate-45 dark:bg-slate-800 dark:text-slate-400">
                +
              </span>
            </summary>

            <div className="px-6 pb-6 pt-1">
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {faq.a}
              </p>
            </div>
          </details>
        ))}
      </div>

      <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
        Last updated: September 2026.
      </p>
    </div>
  </section>

  {/* Value Proposition Cards (POINTS) */}
  <section className="mx-auto mt-24 max-w-4xl px-4 sm:mt-32 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {POINTS.map(({ icon: Icon, title, desc }) => (
        <article
          key={title}
          className="group relative rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-brand-primary ring-1 ring-slate-200/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-slate-800 dark:ring-slate-700/50">
            <Icon
              className="h-7 w-7"
              aria-hidden="true"
            />
          </div>

          <h2 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {desc}
          </p>
        </article>
      ))}
    </div>
  </section>
</main>
