import Image from "next/image";
import type { Direction } from "./department-head.types";

export function DirectionsGrid({ items }: { items: Direction[] }) {
  return (
    <div className="flex min-w-0 flex-col">
      <h2 className="text-xl font-bold text-ink lg:text-2xl">
        Основные направления работы
      </h2>
      <span className="mt-2 block h-0.5 w-10 bg-brand" />

      <ul className="mt-5 grid flex-1 auto-rows-fr grid-cols-1 gap-3 lg:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex min-w-0 items-start gap-3 rounded-2xl bg-white p-4 shadow-card"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft">
              <Image src={item.icon} alt="" width={22} height={22} />
            </span>
            <div className="min-w-0">
              <h3 className="break-words text-[13px] font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
