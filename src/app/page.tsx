import { DepartmentTabsProvider } from "@/widgets/department-hero/model/tabs-context";
import { DepartmentHero } from "@/widgets/department-hero/ui/DepartmentHero";
import { DoctorsSection } from "@/widgets/doctors-section/ui/DoctorsSection";
import { DepartmentHeadSection } from "@/components/department-head/DepartmentHeadSection";
import type { DepartmentHead } from "@/components/department-head/department-head.types";

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

      <main className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-8 md:flex-row md:items-start">
        <div className="min-w-0 flex-1">
          <DoctorsSection />
        </div>
      </main>
    </DepartmentTabsProvider>
  );
}