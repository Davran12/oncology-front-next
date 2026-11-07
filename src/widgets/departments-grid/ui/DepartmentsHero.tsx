import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import DepartmentsSearch from "./DepartmentsSearch";

const crumbs: Crumb[] = [
  { name: "Главная", href: "/" },
  { name: "О центре", href: "/about" },
  { name: "Отделения" },
];

export default function DepartmentsHero({
  ctaHref = "#",
}: {
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-6 md:pb-0 md:pt-10 lg:py-16">
        <div className="relative z-10 w-full lg:w-1/2 lg:pr-12">
          <Breadcrumbs items={crumbs} />

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1B4B] sm:text-5xl lg:text-6xl">
            Отделения
          </h1>

          <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-slate-600 sm:text-base">
            Современные отделения и мультидисциплинарная команда специалистов
            для диагностики, лечения и поддержки пациентов на всех этапах.
          </p>

          <div className="mt-6 w-full max-w-[560px]">
            <Suspense>
              <DepartmentsSearch />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-2 aspect-[1320/1080] w-full max-w-[560px] md:-mt-16 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mt-0 lg:aspect-auto lg:w-[52%] lg:max-w-none">
        <Image
          src="/images/departments-hero.png"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 52vw, 560px"
          className="object-contain object-right"
        />
        <Link
          href={ctaHref}
          className="absolute bottom-4 right-4 flex items-center gap-3 text-right text-xs font-semibold leading-tight text-slate-900 sm:text-sm lg:bottom-8 lg:right-8"
        >
          <span>
            Вместе
            <br />
            против рака
          </span>
          <span className="grid size-10 place-items-center rounded-full border border-red-600 text-red-600 sm:size-12">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="size-4"
            >
              <path d="m9 6 6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
