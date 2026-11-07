import {DepartmentsHero, DepartmentsGrid} from "@/widgets/departments-grid"

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{q?: string}>
}) {
  return (
    <>
      <DepartmentsHero ctaHref="/together-against-cancer" />

      <DepartmentsGrid searchParams={searchParams} />
    </>
  )
}
