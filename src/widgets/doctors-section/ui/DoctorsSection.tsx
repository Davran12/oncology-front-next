"use client"

import Image from "next/image"
import {useRef} from "react"
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import {DOCTORS_DATA} from "./doctors"

export function DoctorsSection() {
  const swiperRef = useRef<SwiperRef>(null)

  const renderCard = (doctor: (typeof DOCTORS_DATA)[number]) => (
    <div
      key={doctor.id}
      className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full"
    >
      <div>
        <div className="relative w-full h-56 bg-gray-100">
          <Image
            src={doctor.avatar}
            alt={doctor.fullName}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
            {doctor.experience}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">
            {doctor.fullName}
          </h3>
          <p className="text-[var(--color-primary-red)] text-sm font-medium mb-2">
            {doctor.position}
          </p>
          <p className="text-gray-500 text-xs line-clamp-2">
            {doctor.qualification}
          </p>
        </div>
      </div>

      <div className="p-5 pt-0">
        <button
          onClick={() => console.log("Подробнее о враче:", doctor.id)}
          className="w-full py-2.5 px-4 bg-gray-50 hover:bg-[var(--color-primary-red)] text-gray-700 hover:text-white font-medium text-sm rounded-xl transition-colors border border-gray-200 hover:border-[var(--color-primary-red)]"
        >
          Подробнее
        </button>
      </div>
    </div>
  )

  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Врачи отделения
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-1">
              Команда высококвалифицированных специалистов с многолетним опытом
              работы.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0 self-start md:self-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700 shrink-0">
              Всего специалистов:{" "}
              <span className="text-[var(--color-primary-red)] ml-1.5 font-bold">
                {DOCTORS_DATA.length}
              </span>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => swiperRef.current?.swiper.slidePrev()}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Назад"
              >
                ‹
              </button>
              <button
                onClick={() => swiperRef.current?.swiper.slideNext()}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Вперед"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            className="pb-6"
          >
            {DOCTORS_DATA.map((doctor) => (
              <SwiperSlide key={doctor.id} className="h-auto flex">
                {renderCard(doctor)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-6">
          {DOCTORS_DATA.map((doctor) => renderCard(doctor))}
        </div>
      </div>
    </section>
  )
}
