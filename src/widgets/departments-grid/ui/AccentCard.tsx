export function AccentCard() {
  return (
    <div className="relative flex h-full flex-col justify-center gap-3 overflow-hidden rounded-2xl rounded-br-[3rem] bg-gradient-to-br from-red-700 to-red-800 p-6 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 size-32 opacity-30 [background-image:radial-gradient(currentColor_1.5px,transparent_1.5px)] [background-size:12px_12px] [mask-image:linear-gradient(to_bottom_left,black,transparent)]"
      />

      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="7" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M2.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M14.5 14.5c.8-.4 1.6-.5 2.5-.5 2.5 0 4.5 1.7 4.5 4.5" />
      </svg>

      <h3 className="text-lg font-semibold leading-snug">
        Мультидисциплинарный подход к каждому случаю
      </h3>
      <div className="h-px w-8 bg-white/60" />
      <p className="text-sm text-white/85">
        Объединяем опыт, технологии и заботу ради жизни пациентов.
      </p>
    </div>
  );
}
