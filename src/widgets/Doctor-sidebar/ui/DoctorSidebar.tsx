"use client"

import {DoctorModal} from "@/widgets/doctors-section/ui/DoctorModal"
import {Doctor} from "@/widgets/doctors-section/ui/doctors"
import Image from "next/image"
import {useState} from "react"

const HEAD_DOCTOR: Doctor = {
  id: "head-doctor",
  fullName: "Тургунбаева Айгуль Сапарбековна",
  position: "Заведующая отделением онкогинекологии",
  experience: "Стаж работы более 20 лет",
  qualification:
    "Кандидат медицинских наук. Врач высшей категории. Специализируется на современных методах хирургического и комбинированного лечения злокачественных новообразований женских репродуктивных органов.",
  avatar: "/images/doctors/head-doctor.jpg",
}

export function DoctorSidebar() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  return (
    <aside className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
        <h3 className="text-lg font-bold text-gray-900 mb-5">
          Контакты отделения
        </h3>

        <div className="space-y-4">
          <a
            href="tel:+996312541230"
            className="flex items-start gap-3.5 group transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-red)]/10 flex items-center justify-center shrink-0">
              <Image
                src="/icons/phone.svg"
                alt="Телефон"
                width={20}
                height={20}
              />
            </div>
            <div>
              <span className="block text-base font-bold text-gray-900 group-hover:text-[var(--color-primary-red)] transition-colors">
                +996 (312) 54-12-30
              </span>
              <span className="text-xs text-gray-500">Пн-Пт, 08:00–17:00</span>
            </div>
          </a>

          <a
            href="mailto:onkoginekologiya@nco.kg"
            className="flex items-center gap-3.5 group transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-red)]/10 flex items-center justify-center shrink-0">
              <Image src="/icons/mail.svg" alt="Email" width={20} height={20} />
            </div>
            <span className="text-sm font-medium text-gray-900 group-hover:text-[var(--color-primary-red)] transition-colors break-all">
              onkoginekologiya@nco.kg
            </span>
          </a>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-red)]/10 flex items-center justify-center shrink-0">
              <Image src="/icons/pin.svg" alt="Адрес" width={20} height={20} />
            </div>
            <span className="text-sm text-gray-700 leading-snug pt-1">
              г. Бишкек, ул. Ахунбаева, 130
              <br />
              Главный корпус, 3 этаж
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Заведующая отделением
        </h3>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
            <Image
              src={HEAD_DOCTOR.avatar}
              alt={HEAD_DOCTOR.fullName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 leading-snug mb-1">
              Тургунбаева
              <br />
              Айгуль Сапарбековна
            </h4>
            <p className="text-xs text-gray-500 leading-normal">
              Кандидат медицинских наук
              <br />
              Врач высшей категории
            </p>
          </div>
        </div>

        <button
          onClick={() => setSelectedDoctor(HEAD_DOCTOR)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary-red)] hover:underline cursor-pointer"
        >
          Подробнее о заведующей
          <Image src="/icons/chevron-right.svg" alt="" width={16} height={16} />
        </button>
      </div>

      <div className="relative bg-gradient-to-br from-rose-50 to-rose-100/60 rounded-3xl p-6 border border-rose-100/80 overflow-hidden shadow-sm flex flex-col justify-between">
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
            <Image src="/icons/heart.svg" alt="Забота" width={24} height={24} />
          </div>
          <h4 className="text-base font-bold text-gray-900 leading-tight">
            Мы рядом
            <br />
            на каждом этапе
          </h4>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          От диагностики до лечения — команда специалистов, которым можно
          доверять.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between">
        <div className="mb-4">
          <Image
            src="/icons/quote.svg"
            alt="Цитата"
            width={32}
            height={32}
            className="opacity-80"
          />
        </div>

        <blockquote className="text-sm font-medium text-gray-800 leading-relaxed mb-6">
          «Забота о женском здоровье — это забота о будущем семьи и общества»
        </blockquote>

        <div className="w-8 h-1 bg-[var(--color-primary-red)] rounded-full"></div>
      </div>

      <DoctorModal
        doctor={selectedDoctor}
        isOpen={!!selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
      />
    </aside>
  )
}
