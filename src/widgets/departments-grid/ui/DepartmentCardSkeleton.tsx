export function DepartmentCardSkeleton() {
  return (
    <div className="flex h-full animate-pulse flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
      <div className="aspect-[16/9] w-full bg-slate-200" />
      <div className="flex items-end justify-between gap-3 p-4">
        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/2 rounded bg-slate-200" />
          <div className="h-3 w-full rounded bg-slate-100" />
          <div className="h-3 w-4/5 rounded bg-slate-100" />
        </div>
        <div className="size-8 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}
