import { Suspense } from "react";
import { getDepartments } from "../model/api";
import { filterDepartments, normalize, MIN_QUERY_LENGTH } from "../lib/search";
import { AccentCard } from "./AccentCard";
import { DepartmentCard } from "./DepartmentCard";
import { DepartmentCardSkeleton } from "./DepartmentCardSkeleton";

const GRID = "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6";
const ACCENT_POSITION = 2;

type SearchParams = Promise<{ q?: string }>;

async function DepartmentsList({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { q: query } = await searchParams;

  const all = await getDepartments();
  const departments = filterDepartments(all, query, (d) => [
    d.title,
    d.description,
    ...(d.diseases ?? []),
    ...(d.treatments ?? []),
  ]);
  const isSearching = normalize(query ?? "").length >= MIN_QUERY_LENGTH;

  if (isSearching && departments.length === 0) {
    return (
      <p className="col-span-full py-12 text-center text-slate-500">
        По вашему запросу ничего не найдено
      </p>
    );
  }

  const cards = departments.map((d) => (
    <DepartmentCard key={d.id} department={d} />
  ));
  if (!isSearching) {
    cards.splice(ACCENT_POSITION, 0, <AccentCard key="accent" />);
  }
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

export function DepartmentsGrid({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <section
      id="departments-results"
      className="mx-auto w-full max-w-6xl scroll-mt-6 px-4 py-12"
    >
      <div className={GRID}>
        <Suspense fallback={<ListSkeleton />}>
          <DepartmentsList searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
