import DepartmentSidebar from "@/components/department/DepartmentSidebar"
import {DepartmentHero} from "@/widgets/department-hero/ui/DepartmentHero"
import {DoctorsSection} from "@/widgets/doctors-section/ui/DoctorsSection"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-8 md:flex-row md:items-start">
      <div className="min-w-0 flex-1">
        {/* <DepartmentHero /> */}
      </div>
      <DoctorsSection />
      {/* <DepartmentSidebar /> */}
    </main>
  )
}
