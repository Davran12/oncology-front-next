"use client"

import {createContext, useContext, useState, type ReactNode} from "react"

export const DEPARTMENT_TABS = [
  {id: "about", label: "О отделении"},
  {id: "doctors", label: "Врачи"},
  {id: "services", label: "Услуги"},
] as const

export type DepartmentTabId = (typeof DEPARTMENT_TABS)[number]["id"]

type TabsContextValue = {
  active: DepartmentTabId
  setActive: (id: DepartmentTabId) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

export function DepartmentTabsProvider({
  children,
  defaultTab = "services",
}: {
  children: ReactNode
  defaultTab?: DepartmentTabId
}) {
  const [active, setActive] = useState<DepartmentTabId>(defaultTab)

  return (
    <TabsContext.Provider value={{active, setActive}}>
      {children}
    </TabsContext.Provider>
  )
}

export function useDepartmentTabs() {
  const ctx = useContext(TabsContext)
  if (!ctx) {
    throw new Error("useDepartmentTabs must be used inside DepartmentTabsProvider")
  }
  return ctx
}