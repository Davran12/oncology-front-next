"use client"

import type {ReactNode} from "react"
import {useDepartmentTabs, type DepartmentTabId} from "../model/tabs-context"

type Props = Record<DepartmentTabId, ReactNode>

export function DepartmentPanels(props: Props) {
  const {active} = useDepartmentTabs()

  return (
    <div
      role="tabpanel"
      id={`panel-${active}`}
      aria-labelledby={`tab-${active}`}
    >
      {props[active]}
    </div>
  )
}