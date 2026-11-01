import type { Direction, DepartmentHead } from "./department-head.types";
import { DepartmentHeadCard } from "./DepartmentHeadCard";
import { DirectionsGrid } from "./DirectionsGrid";
import { DIRECTIONS } from "./directions.config";

interface Props {
  head?: DepartmentHead | null;
  directions?: Direction[];
}

export function DepartmentHeadSection({
  head,
  directions = DIRECTIONS,
}: Props) {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6">
      <div
        className={
          head
            ? "grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8"
            : "grid grid-cols-1"
        }
      >
        {head && <DepartmentHeadCard head={head} />}
        <DirectionsGrid items={directions} />
      </div>
    </section>
  );
}
