import Image from "next/image";
import type { DepartmentHead } from "./department-head.types";
import { getExperienceText, getHeadTitle, splitFullName } from "./utils";

export function DepartmentHeadCard({ head }: { head: DepartmentHead }) {
  const [surname, nameAndPatronymic] = splitFullName(head.fullName);

  return (
    <article className="flex h-full min-w-0 flex-col gap-4 rounded-3xl bg-white p-4 shadow-card sm:flex-row sm:p-5">
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-2xl sm:aspect-auto sm:min-h-[240px] sm:w-[200px] lg:w-[36%]">
        <Image
          src={head.photoUrl}
          alt={head.fullName}
          fill
          sizes="(min-width: 640px) 220px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          {getHeadTitle(head.gender)}
        </p>

        <h3 className="break-words text-lg font-bold leading-tight text-ink">
          {surname}
          <br />
          {nameAndPatronymic}
        </h3>

        <div className="space-y-0.5 text-[13px] leading-snug text-gray-500">
          {head.regalia.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>{getExperienceText(head.experienceYears)}</p>
        </div>

        {head.quote && (
          <blockquote className="mt-auto rounded-xl bg-gray-100 p-3">
            <span
              aria-hidden
              className="block text-2xl font-bold leading-none text-brand"
            >
              “
            </span>
            <p className="break-words text-[13px] italic leading-snug text-gray-500">
              {head.quote}
            </p>
          </blockquote>
        )}
      </div>
    </article>
  );
}
