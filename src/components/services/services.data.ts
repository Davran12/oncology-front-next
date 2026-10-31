export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
  isFree: boolean;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Консультация онкогинеколога",
    description:
      "Первичный и повторный прием, оценка результатов обследований, составление плана лечения.",
    icon: "/icons/service-consultation.svg",
    price: "100 сом",
    isFree: true,
  },
  {
    id: 2,
    title: "УЗИ органов малого таза (онкогинекологическое)",
    description:
      "Высокоточная ультразвуковая диагностика с оценкой распространенности опухолевого процесса.",
    icon: "/icons/service-ultrasound.svg",
    price: "100 сом",
    isFree: false,
  },
  {
    id: 3,
    title: "Биопсия и гистологическое исследование",
    description:
      "Забор материала и морфологическая диагностика новообразований.",
    icon: "/icons/service-biopsy.svg",
    price: "100 сом",
    isFree: true,
  },
  {
    id: 4,
    title: "Хирургическое лечение",
    description:
      "Органосохраняющие и радикальные операции при раке шейки матки, эндометрия, яичников и других локализациях.",
    icon: "/icons/service-surgery.svg",
    price: "100 сом",
    isFree: true,
  },
  {
    id: 5,
    title: "Системная противоопухолевая терапия",
    description:
      "Химиотерапия, таргетная и иммунотерапия согласно международным протоколам.",
    icon: "/icons/service-therapy.svg",
    price: "100 сом",
    isFree: true,
  },
  {
    id: 6,
    title: "Динамическое наблюдение",
    description:
      "Диспансерное наблюдение, контрольные обследования после лечения.",
    icon: "/icons/service-observation.svg",
    price: "100 сом",
    isFree: true,
  },
];
