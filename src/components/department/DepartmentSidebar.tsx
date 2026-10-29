import Image from "next/image";

const PRICE_LIST_URL = "/pricelist.pdf";
const PRICE_LIST_UPDATED = "12 марта 2024 г.";

const PhoneIcon = () => (
  <Image src="/icons/phone.svg" alt="" width={20} height={20} />
);

const PinIcon = () => (
  <Image src="/icons/pin.svg" alt="" width={20} height={20} />
);

const ClockIcon = () => (
  <Image src="/icons/clock.svg" alt="" width={20} height={20} />
);

const PdfIcon = () => (
  <Image src="/icons/pdf.svg" alt="" width={32} height={32} />
);

const DownloadIcon = () => (
  <Image src="/icons/download.svg" alt="" width={16} height={16} />
);

type ContactItemProps = {
  icon: React.ReactNode;
  lines: { text: string; variant?: "strong" | "regular" | "muted" }[];
};


function ContactItem({ icon, lines }: ContactItemProps) {
  return (
    <li className="flex items-center gap-3 sm:gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-red-100 bg-[#FDEEEF] text-[#C8202F] sm:h-12 sm:w-12">
        {icon}
      </span>
      <div className="min-w-0">
        {lines.map((line) => (
          <p
            key={line.text}
            className={
              line.variant === "strong"
                ? "text-base font-semibold text-[#0F1B4C]"
                : line.variant === "regular"
                  ? "text-[15px] leading-snug text-[#2B3563]"
                  : "text-sm text-slate-500"
            }
          >
            {line.text}
          </p>
        ))}
      </div>
    </li>
  );
}

export function ContactsCard() {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(20,30,80,0.06)] sm:p-6">
      <h2 className="mb-5 text-lg font-semibold text-[#0F1B4C]">
        Контакты отделения
      </h2>
      <ul className="flex flex-col gap-5">
        <ContactItem
          icon={<PhoneIcon />}
          lines={[
            { text: "+996 (312) 54-72-10", variant: "strong" },
            { text: "Внутренний номер: 221", variant: "muted" },
          ]}
        />
        <ContactItem
          icon={<PinIcon />}
          lines={[
            { text: "г. Бишкек, ул. Ахунбаева, 10", variant: "regular" },
            { text: "Главный корпус, 2 этаж", variant: "regular" },
          ]}
        />
        <ContactItem
          icon={<ClockIcon />}
          lines={[
            { text: "Пн–Пт: 8:00 – 17:00", variant: "regular" },
            { text: "Сб: 8:00 – 13:00", variant: "regular" },
          ]}
        />
      </ul>
    </section>
  );
}

export function PriceListCard() {
  return (
    <section className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-[#EFF4FC] p-5 shadow-[0_8px_30px_rgba(20,30,80,0.06)] sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FDEEEF] text-[#C8202F]">
          <PdfIcon />
        </span>
        <div>
          <h2 className="text-lg font-semibold text-[#0F1B4C]">
            Прайс-лист на услуги
          </h2>
          <p className="mt-1 text-sm leading-snug text-slate-500">
            Скачайте актуальный прайс-лист отделения онкогинекологии в формате
            PDF.
          </p>
        </div>
      </div>

      <a
        href={PRICE_LIST_URL}
        download
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-[#C8202F] bg-white px-4 py-3 text-sm font-semibold text-[#C8202F] transition-colors hover:bg-[#FDEEEF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8202F]"
      >
        <DownloadIcon />
        Скачать прайс-лист (PDF)
      </a>

      <p className="mt-3 text-xs text-slate-500">
        Обновлено: {PRICE_LIST_UPDATED}
      </p>
    </section>
  );
}

export default function DepartmentSidebar() {
  return (
    <aside className="flex w-full max-w-[480px] flex-col gap-5 md:w-[360px] md:max-w-none md:shrink-0">
      <ContactsCard />
      <PriceListCard />
    </aside>
  );
}
