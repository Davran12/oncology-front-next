import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { RELATED_ITEMS } from './related.data';

export function RelatedSection() {
  return (
    <section
      className="relative pt-10 pb-16 lg:pb-20"
      aria-labelledby="related-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[url('/images/wave.svg')] bg-[length:100%_100%] bg-no-repeat lg:h-56"
      />

      <div className="relative mx-auto max-w-[1200px] px-4">
        <h2
          id="related-title"
          className="mb-5 text-[28px] font-bold leading-tight text-brand-navy"
        >
          Также может быть интересно
        </h2>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {RELATED_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white
                  shadow-[0_4px_16px_rgba(16,24,64,0.08)]
                  transition duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(16,24,64,0.16)]
                  focus-visible:-translate-y-1 focus-visible:shadow-[0_12px_28px_rgba(16,24,64,0.16)]
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red
                  motion-reduce:transition-shadow motion-reduce:hover:translate-y-0"
              >
                <div className="relative aspect-[7/2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${item.imageClassName ?? ''}`}
                  />
                </div>

                <div className="flex flex-1 items-start justify-between gap-4 px-5 pb-5 pt-4">
                  <div className="min-w-0">
                    <h3 className="mb-1.5 text-lg font-bold leading-snug text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-[1.45] text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center self-center rounded-full
                      bg-brand-red-soft text-brand-red transition-colors duration-300
                      group-hover:bg-brand-red group-hover:text-white"
                  >
                    <ArrowRightIcon />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}