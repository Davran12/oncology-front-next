import type { Gender } from "./department-head.types";

export function getHeadTitle(gender: Gender): string {
  return gender === "female"
    ? "Заведующая отделением"
    : "Заведующий отделением";
}

export function pluralizeYears(n: number): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 14) return "лет";
  if (mod10 === 1) return "год";
  if (mod10 >= 2 && mod10 <= 4) return "года";
  return "лет";
}

export function getExperienceText(years: number): string {
  const mod10 = years % 10;
  const mod100 = years % 100;
  const unit = mod10 === 1 && mod100 !== 11 ? "года" : "лет";
  return `Стаж работы — более ${years} ${unit}`;
}

export function splitFullName(fullName: string): [string, string] {
  const [surname = "", ...rest] = fullName.trim().split(/\s+/);
  return [surname, rest.join(" ")];
}
