import { DepartmentTabsProvider } from "@/widgets/department-hero/model/tabs-context";
import { DepartmentHero } from "@/widgets/department-hero/ui/DepartmentHero";
import { DepartmentHeading } from "@/widgets/department-oncogin/ui/DepartmentHeading";
import { DoctorSidebar } from "@/widgets/Doctor-sidebar/ui/DoctorSidebar";https://github.com/Davran12/oncology-front-next/pull/12/conflict?name=src%252Fapp%252Fpage.tsx&ancestor_oid=63c201d8b4e2e1f102b0834ba0b03018b59034b7&base_oid=0970de3925e8c2caa29928ca73b8fa42d6099502&head_oid=666f2664f3114fbf5f62c9e0aa47ca9aed65bef4
import { DoctorsSection } from "@/widgets/doctors-section/ui/DoctorsSection";
import { DepartmentHeadSection } from "@/components/department-head/DepartmentHeadSection";
import type { DepartmentHead } from "@/components/department-head/department-head.types";
import NearUs from "@/components/NearUs/NearUs";

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
        <DoctorsSection />
        <NearUs />
      </main>

      <div className="mx-auto max-w-[1200px] px-4 pb-8">
        <DepartmentStats />
      </div>
    </DepartmentTabsProvider>
  );
}