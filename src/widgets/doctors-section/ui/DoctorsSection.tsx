"use client"

import Image from "next/image"
import {useRef, useState} from "react"
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"
import {DoctorModal} from "./DoctorModal"

import "swiper/css"
import "swiper/css/navigation"
import {Doctor, DOCTORS_DATA} from "./doctors"

export function DoctorsSection() {
  const swiperRef = useRef<SwiperRef>(null)
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  const renderCard = (doctor: Doctor) => (
    <div
      key={doctor.id}
      className="w-full bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 h-full"
    >
      <div className="relative w-36 h-44 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
        <Image
          src={doctor.avatar}
          alt={doctor.fullName}
          fill
          className="object-cover"
          sizes="144px"
        />
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
        <div>
          <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">
            {doctor.fullName}
          </h3>
          <p className="text-[var(--color-primary-red)] text-xs font-medium mb-3">
            {doctor.position}
          </p>

          <div className="space-y-1.5 text-xs text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-red)] shrink-0"></span>
              <span className="line-clamp-1">{doctor.qualification}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-red)] shrink-0"></span>
              <span>{doctor.experience}</span>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={() => setSelectedDoctor(doctor)}
            className="w-full py-2.5 px-4 bg-gray-50 hover:bg-[var(--color-primary-red)] text-gray-700 hover:text-white font-medium text-xs rounded-xl transition-colors border border-gray-200 hover:border-[var(--color-primary-red)] cursor-pointer"
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Врачи отделения
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Команда высококвалифицированных специалистов с многолетним опытом
            работы.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700 shrink-0">
            Всего специалистов:{" "}
            <span className="text-[var(--color-primary-red)] ml-1.5 font-bold">
              {DOCTORS_DATA.length}
            </span>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Назад"
            >
              <Image
                src="/icons/chevron-right.svg"
                alt="Назад"
                width={20}
                height={20}
                className="rotate-180"
              />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Вперед"
            >
              <Image
                src="/icons/chevron-right.svg"
                alt="Вперед"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          className="pb-6 [&_.swiper-wrapper]:items-stretch"
        >
          {DOCTORS_DATA.map((doctor) => (
            <SwiperSlide key={doctor.id} className="h-auto flex">
              {renderCard(doctor)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:grid grid-cols-2 gap-6">
        {DOCTORS_DATA.map((doctor) => renderCard(doctor))}
      </div>

      <DoctorModal
        doctor={selectedDoctor}
        isOpen={!!selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
      />
    </div>
  )
}
