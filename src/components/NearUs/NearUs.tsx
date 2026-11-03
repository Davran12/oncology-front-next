import Image from "next/image";
import type { ReactNode } from "react";
import { CENTER_CONTACTS, type NearUsData } from "./near-us.config";

type Props = {
  department?: NearUsData;
};

export default function NearUs({ department }: Props) {
  const address = department?.address ?? CENTER_CONTACTS.address;
  const addressNote = department?.addressNote ?? CENTER_CONTACTS.addressNote;
  const phone = department?.phone ?? CENTER_CONTACTS.phone;
  const schedule = department?.schedule ?? CENTER_CONTACTS.schedule;

  const mapUrl = `https://2gis.kg/bishkek/search/${encodeURIComponent(address)}`;
  const routeUrl = department?.routeUrl ?? mapUrl;
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <section
      aria-labelledby="near-us-title"
      className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_480px] xl:items-center xl:gap-6">
        <div className="min-w-0">
          <h2
            id="near-us-title"
            className="text-2xl font-bold text-neutral-900"
          >
            Мы рядом
          </h2>
          <span
            aria-hidden="true"
            className="mt-2 block h-0.5 w-8 bg-red-600"
          />

          <ul className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-[repeat(3,auto)] xl:justify-between">
            <ContactItem icon="/icons/icon-location.svg">
              <p className="font-medium text-neutral-900">{address}</p>
              <p className="text-neutral-500">{addressNote}</p>
            </ContactItem>

            <ContactItem icon="/icons/icon-phone.svg">
              <a
                href={telHref}
                className="font-medium text-neutral-900 hover:text-red-600"
              >
                {phone}
              </a>
              <p className="text-neutral-500">{schedule}</p>
            </ContactItem>

            <ContactItem icon="/icons/icon-bus.svg">
              <p className="font-medium text-neutral-900">
                Как к нам добраться
              </p>
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-red-600"
              >
                Схема проезда
              </a>
            </ContactItem>
          </ul>
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть адрес в 2GIS"
          className="relative block aspect-[2400/578] w-full overflow-hidden rounded-2xl xl:w-[480px] xl:justify-self-end"
        >
          <Image
            src="/images/map.jpg"
            alt="Карта: Национальный центр онкологии"
            fill
            sizes="(min-width: 1280px) 480px, 100vw"
            className="object-cover"
          />
        </a>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: string;
  children: ReactNode;
}) {
  return (
    <li className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600">
        <Image src={icon} alt="" width={18} height={18} />
      </span>
      <div className="text-[11px] leading-snug xl:whitespace-nowrap">
        {children}
      </div>
    </li>
  );
}
