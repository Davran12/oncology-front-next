"use client"

import Image from "next/image"
import {useEffect, useRef} from "react"
import {Doctor} from "./doctors"

interface DoctorModalProps {
  doctor: Doctor | null
  isOpen: boolean
  onClose: () => void
}

export function DoctorModal({doctor, isOpen, onClose}: DoctorModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const mousedownTargetRef = useRef<EventTarget | null>(null)

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
        return
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement

        const activeEl = document.activeElement

        if (e.shiftKey) {
          if (activeEl === firstElement || activeEl === modalRef.current) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (activeEl === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    const timer = setTimeout(() => {
      const firstFocusable = modalRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ) as HTMLElement
      firstFocusable?.focus()
    }, 50)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen || !doctor) return null

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-doctor-title"
      tabIndex={-1}
      onMouseDown={(e) => {
        mousedownTargetRef.current = e.target
      }}
      onClick={(e) => {
        if (
          e.target === e.currentTarget &&
          mousedownTargetRef.current === e.currentTarget
        ) {
          onClose()
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto outline-none"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden my-auto">
        <button
          onClick={onClose}
          aria-label="Закрыть модальное окно"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          <Image src="/icons/close.svg" alt="Закрыть" width={20} height={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-72 md:h-auto bg-gray-100">
            <Image
              src={doctor.avatar}
              alt={doctor.fullName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-1/2">
            <div>
              <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-800 mb-3">
                {doctor.experience}
              </div>
              <h2
                id="modal-doctor-title"
                className="text-xl md:text-2xl font-bold text-gray-900 mb-1"
              >
                {doctor.fullName}
              </h2>
              <p className="text-[var(--color-primary-red)] text-sm font-medium mb-4">
                {doctor.position}
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <span className="font-semibold text-gray-900 block mb-1">
                    Квалификация:
                  </span>
                  <p>{doctor.qualification}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={onClose}
                className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm rounded-xl transition-colors cursor-pointer"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
