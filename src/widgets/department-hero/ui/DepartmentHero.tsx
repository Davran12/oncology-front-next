"use client"

import {useState} from "react"
import Link from "next/link"
import Image from "next/image"

export function DepartmentHero() {
  const [activeTab, setActiveTab] = useState<"about" | "doctors" | "services">(
    "doctors",
  )

  return (
    <section className="w-full bg-white py-6 px-4 md:px-8">
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between min-h-[420px]">
        <div className="flex-1 flex flex-col justify-center py-8 pr-4 lg:pr-12 lg:pl-8 z-10 max-w-xl">
          <nav
            aria-label="Хлебные крошки"
            className="mb-4 text-xs md:text-sm text-gray-500"
          >
            <ol className="flex items-center space-x-2 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-800 transition-colors rounded px-1"
                >
                  Главная
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <Image
                  src="/icons/chevron-right.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="opacity-60"
                />
              </li>
              <li>
                <Link
                  href="/departments"
                  className="hover:text-gray-800 transition-colors rounded px-1"
                >
                  Отделения
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <Image
                  src="/icons/chevron-right.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="opacity-60"
                />
              </li>
              <li>
                <span
                  className="text-gray-800 font-medium px-1"
                  aria-current="page"
                >
                  Отделение онкогинекологии
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Отделение <br className="hidden sm:inline" />
            <span className="text-[#e31e24]">онкогинекологии</span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Современная диагностика и лечение опухолевых заболеваний женской
            репродуктивной системы с заботой о каждой пациентке.
          </p>

          <div
            role="tablist"
            aria-label="Разделы отделения"
            className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-gray-200 max-w-md w-full justify-between"
          >
            <button
              role="tab"
              aria-selected={activeTab === "about"}
              onClick={() => setActiveTab("about")}
              className={`flex-1 py-2.5 px-4 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeTab === "about"
                  ? "bg-[#e31e24] text-white shadow-md"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              О отделении
            </button>

            <button
              role="tab"
              aria-selected={activeTab === "doctors"}
              onClick={() => setActiveTab("doctors")}
              className={`flex-1 py-2.5 px-4 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeTab === "doctors"
                  ? "bg-[#e31e24] text-white shadow-md"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              Врачи
            </button>

            <button
              role="tab"
              aria-selected={activeTab === "services"}
              onClick={() => setActiveTab("services")}
              className={`flex-1 py-2.5 px-4 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeTab === "services"
                  ? "bg-[#e31e24] text-white shadow-md"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              Услуги
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[56%] min-h-[360px] lg:min-h-[420px] relative overflow-hidden bg-transparent pr-4 md:pr-8">
          <div
            className="absolute inset-0 right-4 md:right-8 bg-gradient-to-br from-[#3868ff] to-[#5047ff] rounded-[32px]"
            style={{
              clipPath: "ellipse(65% 110% at 67% -20%)",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-end pr-12 md:pr-20 z-10">
            <p className="max-w-[280px] text-right text-white text-xl md:text-2xl font-light italic leading-snug drop-shadow-md">
              Женское здоровье — больше возможностей для жизни.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
