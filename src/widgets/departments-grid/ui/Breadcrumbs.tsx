import Link from "next/link";

export type Crumb = { name: string; href?: string };

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Хлебные крошки">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 sm:text-sm">
          {items.map((c, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={c.name} className="flex items-center gap-2">
                {isLast || !c.href ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="text-slate-700"
                  >
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-red-600">
                    {c.name}
                  </Link>
                )}
                {!isLast && <span aria-hidden="true">›</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
