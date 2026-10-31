import {DepartmentTabsProvider} from "@/widgets/department-hero/model/tabs-context"
import {DepartmentHero} from "@/widgets/department-hero/ui/DepartmentHero"

export default function Page() {
  return (
    <DepartmentTabsProvider defaultTab="services">
      <DepartmentHero />
    </DepartmentTabsProvider>
  )
}