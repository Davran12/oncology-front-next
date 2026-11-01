export interface Doctor {
  id: string
  fullName: string
  position: string
  qualification: string
  experience: string
  avatar: string
}

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "1",
    fullName: "Иванов Иван Иванович",
    position: "Онкохирург, высшая категория",
    qualification: "Доктор медицинских наук, профессор",
    experience: "Опыт работы: 15 лет",
    avatar: "/images/doctors/doctor-1.jpg",
  },
  {
    id: "2",
    fullName: "Смирнова Анна Петровна",
    position: "Химиотерапевт",
    qualification: "Кандидат медицинских наук",
    experience: "Опыт работы: 10 лет",
    avatar: "/images/doctors/doctor-2.jpg",
  },
  {
    id: "3",
    fullName: "Петров Алексей Сергеевич",
    position: "Лучевой терапевт",
    qualification: "Врач высшей категории",
    experience: "Опыт работы: 12 лет",
    avatar: "/images/doctors/doctor-3.jpg",
  },
  {
    id: "4",
    fullName: "Елена Васильевна Ковальчук",
    position: "Онкогинеколог",
    qualification: "Врач-онколог высшей категории",
    experience: "Опыт работы: 14 лет",
    avatar: "/images/doctors/doctor-4.jpg",
  },
  {
    id: "5",
    fullName: "Кузнецов Дмитрий Олегович",
    position: "Хирург опухолей головы и шеи",
    qualification: "Кандидат медицинских наук",
    experience: "Опыт работы: 11 лет",
    avatar: "/images/doctors/doctor-5.jpg",
  },
  {
    id: "6",
    fullName: "Морозова Ольга Викторовна",
    position: "Врач-диагност",
    qualification: "Специалист экспертного УЗИ и КТ/МРТ",
    experience: "Опыт работы: 9 лет",
    avatar: "/images/doctors/doctor-6.jpg",
  },
  {
    id: "7",
    fullName: "Васильев Сергей Павлович",
    position: "Специалист паллиативной помощи",
    qualification: "Врач высшей категории",
    experience: "Опыт работы: 18 лет",
    avatar: "/images/doctors/doctor-7.jpg",
  },
  {
    id: "8",
    fullName: "Новикова Мария Андреевна",
    position: "Врач-реабилитолог",
    qualification: "Специалист по физической реабилитации",
    experience: "Опыт работы: 8 лет",
    avatar: "/images/doctors/doctor-8.jpg",
  },
]
