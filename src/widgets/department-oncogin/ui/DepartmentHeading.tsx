"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import {DepartmentHeadingProps, getDepartmentTabs} from "./department.constants"

export function DepartmentHeading({
  slug,
  name,
  description,
}: DepartmentHeadingProps) {
  const pathname = usePathname()
  const tabs = getDepartmentTabs(slug)

  return (
    <div className="w-full flex flex-col gap-6">
      <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 overflow-x-auto whitespace-nowrap pb-1">
        <Link href="/" className="hover:text-gray-900 transition-colors">
          Главная
        </Link>
        <span>›</span>
        <Link
          href="/departments"
          className="hover:text-gray-900 transition-colors"
        >
          Структура центра
        </Link>
        <span>›</span>
        <span className="text-gray-900 font-medium">{name}</span>
      </nav>

      <div className="flex items-center gap-3">
        <span className="w-8 h-0.5 bg-[var(--color-primary-red)] shrink-0"></span>
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-700">
          ОТДЕЛЕНИЕ
        </span>
      </div>

      <h1 className="flex flex-col text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        <span className="text-gray-900">Отделение</span>
        <span className="text-[var(--color-primary-red)] uppercase mt-1">
          {name}
        </span>
      </h1>

      <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
        {description}
      </p>

      <div className="w-full bg-white p-2 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max sm:min-w-0">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href

            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-colors text-center ${
                  isActive
                    ? "bg-[var(--color-primary-red)] text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100/80"
                }`}
              >
                {tab.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
