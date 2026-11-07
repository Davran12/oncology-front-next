"use client"

import Image from "next/image"
import { useRef, useState } from "react"

const SLIDES = [
  { src: "/images/hero/doctor.jpg", alt: "Врач-онкогинеколог за микроскопом" },
  { src: "/images/hero/doctor-2.jpg", alt: "Хирурги в операционной" },
  { src: "/images/hero/doctor-3.jpg", alt: "Команда отделения" },
]

const SWIPE_THRESHOLD = 50

export function HeroSlider({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0)
  const startX = useRef<number | null>(null)

  const go = (i: number) =>
    setActive(Math.min(Math.max(i, 0), SLIDES.length - 1))

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX
  }
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return
    const dx = e.clientX - startX.current
    startX.current = null
    if (Math.abs(dx) < SWIPE_THRESHOLD) return
    go(dx < 0 ? active + 1 : active - 1)
  }

  return (
    <div className={`hidden min-[700px]:block ${className}`}>
      <div
        className="absolute inset-0 cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing [mask-image:url('/images/hero/hero-slider-mask.svg')] [mask-repeat:no-repeat] [mask-size:100%_100%]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
      >
        {SLIDES.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 52vw, 44vw"
            draggable={false}
            aria-hidden={i !== active}
            className={`object-cover object-[30%_center] transition-opacity duration-500 motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="pointer-events-none absolute right-[6%] top-[14%] -rotate-6 font-[family-name:var(--font-marck)] text-2xl leading-snug text-white drop-shadow-md sm:text-3xl lg:text-4xl">
          <span className="block">Забота</span>
          <span className="block pl-6">Профессионализм</span>
          <span className="block pl-12">Надежда</span>
        </div>
      </div>

      <ul className="absolute bottom-[12%] right-6 z-10 flex flex-col gap-3">
        {SLIDES.map((_, i) => {
          const isActive = i === active
          return (
            <li key={i} className="relative pl-3">
              <span
                className={`absolute left-0 top-0 h-full w-0.5 transition-colors ${
                  isActive ? "bg-brand" : "bg-neutral-300"
                }`}
              />
              <button
                type="button"
                onClick={() => go(i)}
                aria-label={`Слайд ${i + 1}`}
                aria-current={isActive}
                className={`text-sm font-semibold tabular-nums transition-colors ${
                  isActive ? "text-brand" : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
