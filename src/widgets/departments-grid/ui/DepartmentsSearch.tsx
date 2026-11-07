"use client";

import { useEffect, useState, type FormEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MIN_QUERY_LENGTH } from "../lib/search";

const DEBOUNCE_MS = 300;

export default function DepartmentsSearch({
  resultsId = "departments-results",
}: {
  resultsId?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const q = value.trim().replace(/\s+/g, " ");
      const params = new URLSearchParams(searchParams.toString());
      if (q.length >= MIN_QUERY_LENGTH) params.set("q", q);
      else params.delete("q");

      const next = params.toString();
      if (next === searchParams.toString()) return;
      router.replace(next ? `${pathname}?${next}` : pathname, {
        scroll: false,
      });
    }, DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [value, pathname, router, searchParams]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    document
      .getElementById(resultsId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <form role="search" onSubmit={handleSubmit} className="w-full">
      <label htmlFor="departments-search" className="sr-only">
        Поиск по отделениям, заболеваниям или методам лечения
      </label>
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-slate-900"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>

        {value === "" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-12 right-5 flex items-center truncate text-sm text-slate-400 sm:left-14 sm:text-base"
          >
            <span className="truncate sm:hidden">Поиск по отделениям</span>
            <span className="hidden truncate sm:inline">
              Поиск по отделениям, заболеваниям или методам лечения
            </span>
          </span>
        )}

        <input
          id="departments-search"
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
          enterKeyHint="search"
          className="h-12 w-full rounded-full border border-slate-200 bg-white pl-12 pr-5 text-sm text-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.06)] outline-none transition focus-visible:border-red-600 focus-visible:ring-2 focus-visible:ring-red-600/20 sm:h-14 sm:pl-14 sm:text-base"
        />
      </div>
    </form>
  );
}
