import {DepartmentHero} from "@/widgets/department-hero/ui/DepartmentHero"
import {DoctorSidebar} from "@/widgets/Doctor-sidebar/ui/DoctorSidebar"
import {DoctorsSection} from "@/widgets/doctors-section/ui/DoctorsSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-8 flex flex-col gap-8">
      {/* <DepartmentHero /> */}

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
        <div className="min-w-0 order-1 lg:order-1">
          <DoctorsSection />
        </div>

        <div className="w-full order-2 lg:order-2 lg:pt-[104px]">
          <DoctorSidebar />
        </div>
      </div>
    </main>
  )
}
