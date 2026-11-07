import { cacheLife } from "next/cache";
import type { Department } from "./types";

const MOCK_ROWS: [string, string, string][] = [
  ["surgery", "Онкохирургия", "Хирургическое лечение злокачественных опухолей с применением современных технологий."],
  ["chemotherapy", "Химиотерапия", "Системное лечение онкологических заболеваний с использованием современных препаратов."],
  ["radiotherapy", "Лучевая терапия", "Современные методы лучевой терапии с высокой точностью и безопасностью."],
  ["diagnostics", "Диагностика", "Точная и своевременная диагностика с использованием высокотехнологичного оборудования."],
  ["gynecology", "Онкогинекология", "Диагностика и комплексное лечение опухолей женской репродуктивной системы."],
  ["head-neck", "Опухоли головы и шеи", "Специализированная помощь при опухолях головы, шеи и челюстно-лицевой области."],
  ["palliative", "Паллиативная помощь", "Контроль симптомов, поддержка пациентов и их близких, повышение качества жизни."],
  ["rehabilitation", "Реабилитация", "Восстановление после лечения и возвращение к активной жизни."],
];

const MOCK: Department[] = MOCK_ROWS.map(([slug, title, description]) => ({
  id: slug,
  slug,
  title,
  description,
  imageUrl: `/images/departments/${slug}.jpg`,
}));

export async function getDepartments(): Promise<Department[]> {
  "use cache";
  cacheLife("hours");

  if (!process.env.API_URL) return MOCK;


  const res = await fetch(`${process.env.API_URL}/departments`);
  if (!res.ok) throw new Error("Не удалось загрузить отделения");
  return res.json();
}
