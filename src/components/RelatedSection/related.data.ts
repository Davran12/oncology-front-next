export type RelatedItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageClassName?: string;
};

const ROUTES = {
  diagnostics: '/diagnostics',
  treatment: '/treatment',
  support: '/patient-support',
} as const;

export const RELATED_ITEMS: RelatedItem[] = [
  {
    id: 'diagnostics',
    title: 'Диагностика',
    description: 'Современное оборудование и точные методы исследования',
    href: ROUTES.diagnostics,
    image: '/images/related/diagnostics.jpg',
    imageClassName: 'object-[50%_55%]',
  },
  {
    id: 'treatment',
    title: 'Лечение',
    description: 'Комплексный подход и индивидуальные планы терапии',
    href: ROUTES.treatment,
    image: '/images/related/support.jpg',
    imageClassName: 'object-[50%_35%]',
  },
  {
    id: 'support',
    title: 'Поддержка пациентов',
    description: 'Психологическая и социальная помощь',
    href: ROUTES.support,
    image: '/images/related/treatment.jpg',
    imageClassName: 'object-[50%_30%]',
  },
];