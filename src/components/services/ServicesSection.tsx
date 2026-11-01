import ServiceCard from "./ServiceCard";
import { services } from "./services.data";

export default function ServicesSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-4 sm:py-6">
      <div className="w-full min-w-0 lg:w-[68%]">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h2 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
            Услуги отделения
          </h2>

          <span className="shrink-0 text-[11px] text-slate-500 sm:text-xs">
            Найдено услуг: <b className="text-slate-700">{services.length}</b>
          </span>
        </div>

        <p className="mt-3 text-xs leading-[17px] text-slate-500 sm:text-[13px] sm:leading-[19px]">
          Мы оказываем полный спектр медицинской помощи при гинекологических
          онкологических заболеваниях — от диагностики до комплексного лечения и
          наблюдения.
        </p>

        <ul className="mt-4 flex min-w-0 flex-col gap-3 sm:mt-5 sm:gap-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}
