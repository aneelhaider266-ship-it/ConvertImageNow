"use client";

import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "draft-opened">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`ConvertImageNow contact message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Open the visitor's email app. No message content is sent to or logged by our server.
    window.location.href = `mailto:contact@convertimagenow.com?subject=${subject}&body=${body}`;
    setStatus("draft-opened");
  };

  return (
    <div>
      {status === "draft-opened" && (
        <div
          role="status"
          className="mb-5 flex items-start gap-3 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4 text-sm"
        >
          <CheckCircle2 className="mt-0.5 shrink-0 text-brand-accent" size={20} />
          <p>
            Your email app should open with a message draft addressed to
            contact@convertimagenow.com. Review it and press Send in your email
            app. If no email app opens, send your message directly to{" "}
            <a
              href="mailto:contact@convertimagenow.com"
              className="font-semibold text-brand-primary underline"
            >
              contact@convertimagenow.com
            </a>
            .
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-primary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-primary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={5000}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-primary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <Mail size={16} />
          Open email draft
        </button>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Your message stays in your email app until you choose to send it.
        </p>
      </form>
    </div>
  );
}
