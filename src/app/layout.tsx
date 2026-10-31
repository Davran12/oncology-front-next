import type {Metadata} from "next"
import {Marck_Script} from "next/font/google"
import "./globals.css"

const marck = Marck_Script({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  variable: "--font-marck",
})

export const metadata: Metadata = {
  title: "Отделение онкогинекологии",
  description: "Современная диагностика и лечение",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru" className={marck.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}