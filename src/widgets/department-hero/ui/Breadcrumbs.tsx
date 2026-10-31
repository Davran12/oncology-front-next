import Link from "next/link"

type Crumb = {label: string; href?: string}

export function Breadcrumbs({items}: {items: Crumb[]}) {
  return (
    <nav aria-label="Хлебные крошки">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 sm:text-[13px]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2">
              {isLast || !item.href ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-brand-red">
                  {item.label}
                </Link>
              )}
              {!isLast && <span aria-hidden>&gt;</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
