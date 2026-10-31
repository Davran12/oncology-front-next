import Image from "next/image"
import { Breadcrumbs } from "./Breadcrumbs"
import { DepartmentTabs } from "./DepartmentTabs"

export function DepartmentHero() {
  return (
    <section className="relative overflow-hidden bg-white from-white via-white to-[#eef2f8]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-32 hidden h-72 w-16 bg-[url('/images/hero/dots.svg')] opacity-80 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] lg:block"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 pt-6 lg:pt-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Структурные подразделения", href: "/departments" },
            { label: "Отделение онкогинекологии" },
          ]}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 md:min-h-[24rem] lg:min-h-[27rem]">
        <div className="relative z-10 pt-6 md:w-[56%] md:pt-10 lg:w-[50%]">
          <h1 className="text-[1.9rem] font-bold leading-[1.1] min-[400px]:text-4xl lg:text-5xl xl:text-[3.5rem]">
            <span className="block text-brand-navy">Отделение</span>
            <span className="block text-brand-red">онкогинекологии</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-navy/80 sm:text-lg lg:text-[1.35rem]">
            Современная диагностика и комплексное лечение гинекологических
            онкологических заболеваний с заботой о каждой женщине
          </p>
        </div>

        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl md:absolute md:inset-y-0 md:right-[calc(50%-50vw)] md:mt-0 md:aspect-auto md:w-[44vw] md:rounded-none md:[mask-image:url('/images/hero/photo-mask.svg')] md:[mask-repeat:no-repeat] md:[mask-size:100%_100%] lg:w-[50vw] xl:w-[52vw]">
          <Image
            src="/images/hero/doctor.jpg"
            alt="Врач-онкогинеколог за микроскопом"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, (min-width: 768px) 44vw, 100vw"
            className="object-cover object-[30%_center]"
          />

          <p className="absolute right-[6%] top-[8%] w-[45%] -rotate-6 text-right font-[family-name:var(--font-marck)] text-2xl leading-tight text-brand-navy/70 sm:text-3xl lg:text-4xl">
            <span className="block">Больше</span>
            <span className="block">возможностей</span>
            <span className="block">для жизни</span>
          </p>

          <div
            aria-hidden
            className="absolute bottom-0 right-0 hidden h-[75%] w-[85%] md:block bg-[url('/images/hero/wave.svg')] bg-[length:100%_100%] bg-no-repeat"
          />

          <div className="absolute bottom-[5%] right-[4%] rounded-xl text-center max-md:bg-white/90 max-md:px-3 max-md:py-2 md:bottom-[20%] md:right-[5%]">
            <span aria-hidden className="mx-auto mb-2 block h-0.5 w-8 bg-brand-red" />
            <p className="text-xs font-medium leading-snug text-brand-navy sm:text-sm lg:text-base">
              Профессионализм.
              <br />
              Забота. Надежда.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-6 pt-6 md:pt-0 lg:pb-10">
        <DepartmentTabs />
      </div>
    </section>
  )
}