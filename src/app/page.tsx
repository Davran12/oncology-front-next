import {DepartmentTabsProvider} from "@/widgets/department-hero/model/tabs-context"
import {DepartmentHero} from "@/widgets/department-hero/ui/DepartmentHero"
import {DoctorsSection} from "@/widgets/doctors-section/ui/DoctorsSection"

export default function Page() {
  return (
    <DepartmentTabsProvider defaultTab="services">
      <DepartmentHero />
      <main className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-8 md:flex-row md:items-start">
        <div className="min-w-0 flex-1">
          <DoctorsSection />
        </div>
      </main>
    </DepartmentTabsProvider>
  )
}