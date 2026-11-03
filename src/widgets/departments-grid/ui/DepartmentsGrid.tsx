import { Suspense } from "react";
import { getDepartments } from "../model/api";
import { AccentCard } from "./AccentCard";
import { DepartmentCard } from "./DepartmentCard";
import { DepartmentCardSkeleton } from "./DepartmentCardSkeleton";

const GRID = "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6";
const ACCENT_POSITION = 2;

async function DepartmentsList() {
  const departments = await getDepartments();
  const cards = departments.map((d) => (
    <DepartmentCard key={d.id} department={d} />
  ));
  cards.splice(ACCENT_POSITION, 0, <AccentCard key="accent" />);
  return <>{cards}</>;
}

function ListSkeleton() {
  return (
    <>
      {Array.from({ length: 9 }, (_, i) => (
        <DepartmentCardSkeleton key={i} />
      ))}
    </>
  );
}

export function DepartmentsGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className={GRID}>
        <Suspense fallback={<ListSkeleton />}>
          <DepartmentsList />
        </Suspense>
      </div>
    </section>
  );
}
