import { DepartmentTabsProvider } from "@/widgets/department-hero/model/tabs-context";
import { DepartmentHero } from "@/widgets/department-hero/ui/DepartmentHero";
import { DepartmentHeading } from "@/widgets/department-oncogin/ui/DepartmentHeading";
import { DoctorSidebar } from "@/widgets/Doctor-sidebar/ui/DoctorSidebar";
import { DoctorsSection } from "@/widgets/doctors-section/ui/DoctorsSection";
import { DepartmentHeadSection } from "@/components/department-head/DepartmentHeadSection";
import type { DepartmentHead } from "@/components/department-head/department-head.types";
import AboutDepartment from "@/components/department/AboutDepartment";

const mockHead: DepartmentHead = {
  fullName: "Абдыкеримова Чолпон Каныбековна",
  gender: "female",
  regalia: ["Врач-онкогинеколог высшей категории", "кандидат медицинских наук"],
  experienceYears: 20,
  quote:
    "Наша задача — дать каждой женщине не только лечение, но и уверенность в завтрашнем дне.",
  photoUrl: "/images/head-mock.jpg",
};

export default function Page() {
  return (
    <DepartmentTabsProvider defaultTab="services">
      <DepartmentHero />

      <DepartmentHeadSection head={mockHead} />

      <main className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_380px]">
          <div className="order-1 min-w-0 lg:order-1">
            <DoctorsSection />
          </div>

          <div className="order-2 w-full lg:order-2 lg:pt-[104px]">
            <DoctorSidebar />
          </div>
        </div>

        <AboutDepartment />

        <DepartmentHeading
          slug="onkogynekologiya"
          name="онкогинекологии"
          description="Современная диагностика и комплексное лечение заболеваний женской репродуктивной системы с заботой о каждом пациенте."
        />
      </main>
    </DepartmentTabsProvider>
  );
}