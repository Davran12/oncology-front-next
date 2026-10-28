import DepartmentSidebar from "@/components/department/DepartmentSidebar";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-8 md:flex-row md:items-start">
      <div className="min-w-0 flex-1 border border-dashed border-slate-300" />
      <DepartmentSidebar />
    </main>
  );
}
