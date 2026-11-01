import Image from "next/image";
import CostBadge from "./CostBadge";
import type { Service } from "./services.data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <li className="grid w-full min-w-0 grid-cols-[40px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 rounded-2xl bg-white px-3 py-3 shadow-sm sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:gap-x-3 sm:px-4 sm:py-3.5 lg:grid-cols-[56px_minmax(0,1fr)_auto] lg:gap-x-4 lg:px-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
        <Image
          src={service.icon}
          alt=""
          width={32}
          height={32}
          className="h-6 w-6 object-contain sm:h-7 sm:w-7 lg:h-8 lg:w-8"
        />
      </div>

      <div className="min-w-0">
        <h3 className="break-words text-[13px] font-semibold leading-[18px] text-slate-900 sm:text-sm lg:text-[15px] lg:leading-5">
          {service.title}
        </h3>

        <p className="mt-1 break-words text-[11px] leading-[15px] text-slate-500 sm:text-xs sm:leading-4 lg:text-[12px] lg:leading-[17px]">
          {service.description}
        </p>
      </div>

      <div className="col-start-2 row-start-2 justify-self-start sm:col-start-3 sm:row-start-1 sm:justify-self-end">
        <CostBadge price={service.price} isFree={service.isFree} />
      </div>
    </li>
  );
}
