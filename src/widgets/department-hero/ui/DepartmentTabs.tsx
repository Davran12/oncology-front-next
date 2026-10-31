"use client"

import {DEPARTMENT_TABS, useDepartmentTabs} from "../model/tabs-context"

export function DepartmentTabs() {
  const {active, setActive} = useDepartmentTabs()

  return (
    <div className="rounded-3xl bg-white shadow-[0_8px_30px_rgba(11,27,74,0.08)]">
      <div
        role="tablist"
        aria-label="Разделы отделения"
        className="flex overflow-x-auto whitespace-nowrap px-2 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {DEPARTMENT_TABS.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`shrink-0 cursor-pointer border-b-2 px-5 py-4 text-sm transition-colors sm:px-10 sm:text-base ${
                isActive
                  ? "border-brand-red font-semibold text-brand-red"
                  : "border-transparent font-medium text-brand-navy hover:text-brand-red"
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}