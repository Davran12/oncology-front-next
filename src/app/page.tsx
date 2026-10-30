import ServicesSection from "@/components/services/ServicesSection";
import DepartmentSidebar from "../components/department/DepartmentSidebar";
import { DepartmentHero } from "@/widgets/department-hero/ui/DepartmentHero";

export default function Page() {
  return (
    <main>
      <ServicesSection />

      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-8 md:flex-row md:items-start">
        <div className="min-w-0 flex-1">
          <DepartmentHero />
        </div>
        <DepartmentSidebar />
      </div>
    </main>
  );
}
