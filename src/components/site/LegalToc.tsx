"use client";

import { useEffect, useState } from "react";

interface Entry {
  id: string;
  text: string;
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Builds a contents list from the h2 headings inside #legal-document, so the
// policy text itself stays exactly as written.
export function LegalToc() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLHeadingElement>("#legal-document h2"));
    const list = headings.map((h) => {
      const text = (h.textContent ?? "").trim();
      if (!h.id) h.id = slug(text);
      return { id: h.id, text };
    });
    setEntries(list);

    const io = new IntersectionObserver(
      (obs) => {
        const visible = obs.filter((o) => o.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);

  if (!entries.length) return null;

  const list = (
    <ol className="mt-3 space-y-1 border-l border-line">
        {entries.map((e) => (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              aria-current={active === e.id ? "true" : undefined}
              className={
                "-ml-px block border-l-2 py-1 pl-3 leading-5 transition-colors " +
                (active === e.id ? "border-brand font-semibold text-ink" : "border-transparent text-ink-muted hover:text-ink")
              }
            >
              {e.text}
            </a>
          </li>
        ))}
    </ol>
  );

  return (
    <>
      <details className="rounded-card border border-line bg-ivory p-4 text-sm lg:hidden">
        <summary className="cursor-pointer font-bold text-ink">On this page</summary>
        <nav aria-label="On this page">{list}</nav>
      </details>
      <nav aria-label="On this page" className="hidden text-sm lg:block">
        <p className="font-bold text-ink">On this page</p>
        {list}
      </nav>
    </>
  );
}
