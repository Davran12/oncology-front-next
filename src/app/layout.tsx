import type { Metadata } from "next";
import "./globals.css";
import { Marck_Script } from "next/font/google";
import { DepartmentTabsProvider } from "@/widgets/department-hero/model/tabs-context"

const marck = Marck_Script({
    subsets: ["cyrillic", "latin"],
    weight: "400",
    variable: "--font-marck",
})

export const metadata: Metadata = {
    title: "Национальный центр онкологии",
    description:
        "Национальный центр онкологии и гематологии Кыргызской Республики",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru" className={marck.variable}>
            <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
                {children}
            </body>
        </html>
    );
}
