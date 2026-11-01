import type { Direction } from "./department-head.types";

export const DIRECTIONS: Direction[] = [
  {
    id: "cervix",
    icon: "/icons/directions/cervix.svg",
    title: "Рак шейки матки",
    description:
      "Диагностика, хирургическое и комбинированное лечение, диспансерное наблюдение.",
  },
  {
    id: "endometrium",
    icon: "/icons/directions/endometrium.svg",
    title: "Рак эндометрия",
    description:
      "Современные методы лечения с учётом индивидуальных особенностей пациентки.",
  },
  {
    id: "ovary",
    icon: "/icons/directions/ovary.svg",
    title: "Рак яичников",
    description:
      "Комплексный подход с применением хирургических, химиотерапевтических и таргетных методов.",
  },
  {
    id: "precancer",
    icon: "/icons/directions/precancer.svg",
    title: "Предраковые заболевания",
    description:
      "Ранняя диагностика, органосохраняющее лечение и профилактическое наблюдение.",
  },
];
