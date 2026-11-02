export interface DepartmentHeadingProps {
  slug: string
  name: string
  description: string
}

export const getDepartmentTabs = (slug: string) => [
  {name: "О отделении", href: `/departments/${slug}`},
  {name: "Врачи", href: `/departments/${slug}/doctors`},
  {name: "Услуги", href: `/departments/${slug}/services`},
]
