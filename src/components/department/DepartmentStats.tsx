import Image from "next/image";
import { KEY_METRICS } from "@/components/key-metrics/key-metrics.data";

export type Stat = { icon: string; value: string; label: string };

export default function DepartmentStats({
  stats = KEY_METRICS,
}: {
  stats?: Stat[];
}) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
        >
          <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-red-50">
            <Image src={s.icon} alt="" width={32} height={32} />
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-bold leading-tight text-red-600">
              {s.value}
            </p>
            <p className="mt-1 whitespace-pre-line text-sm leading-snug text-slate-500">
              {s.label}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
