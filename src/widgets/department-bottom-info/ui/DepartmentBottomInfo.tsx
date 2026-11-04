import Link from "next/link"
import Image from "next/image"

interface DepartmentBottomInfoProps {
  helpPageUrl?: string
}

export const DepartmentBottomInfo = ({
  helpPageUrl = "/patient-guide",
}: DepartmentBottomInfoProps) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-stretch">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/icons/group-icon.svg"
              alt="Командная работа"
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              Командная работа <br className="hidden sm:inline" />
              для больших возможностей
            </h3>
            <div className="w-8 h-0.5 bg-red-500 my-3"></div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              В наших отделениях работают опытные врачи, медицинские сестры и
              специалисты поддержки, объединенные общей целью — помочь каждому
              пациенту.
            </p>
          </div>
        </div>

        <div className="bg-gray-50/80 rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-6 right-6 pointer-events-none opacity-80">
            <Image
              src="/icons/support-icon.svg"
              alt="Оператор"
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
          </div>

          <div>
            <span className="text-xs font-bold tracking-wider text-red-600 uppercase">
              Нужна помощь?
            </span>
            <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
              Мы рядом
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-[280px]">
              Подскажем, в какое отделение обратиться и что взять с собой на
              приём.
            </p>
          </div>

          <div className="mt-6">
            <Link
              href={helpPageUrl}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 group shadow-sm hover:shadow"
            >
              <span>Подготовка к приёму</span>
              <Image
                src="/icons/arrow-right.svg"
                alt="Перейти"
                width={16}
                height={16}
                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 invert"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
