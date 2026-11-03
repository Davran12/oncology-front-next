import Image from "next/image";
import Link from "next/link";
import { FOOTER_TEXTS as t } from "./footer.texts";
import { NAV_ITEMS } from "./nav-items";
import { SOCIAL_ITEMS } from "./social-items";
import { CopyrightYear } from "./CopyRightYear";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red";

export const Footer = () => {
  const socials = SOCIAL_ITEMS.filter((item) => Boolean(item.href));

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-4 py-8 text-center md:flex-row md:items-center md:gap-6 md:px-6 md:py-10 md:text-left lg:gap-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center gap-2 md:w-auto md:shrink-0 md:items-start">
          <Link href="/" className={`flex items-center rounded ${focusRing}`}>
            <Image
              src="/icons/logo.svg"
              alt={t.logoAlt}
              width={330}
              height={84}
              className="h-auto w-[240px] md:w-[200px] lg:w-[200px]"
            />
          </Link>
          <p className="text-xs text-gray-500">{t.slogan}</p>
        </div>

        <nav aria-label={t.navLabel} className="md:min-w-0 md:flex-1">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-left md:flex md:flex-wrap md:justify-center md:gap-x-5 md:gap-y-2 md:text-center lg:gap-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium lg:text-base text-color-ink transition-colors duration-200 hover:text-brand-red focus-visible:text-brand-red ${focusRing}`}
                >
                  {t.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 flex-col items-center gap-4 md:items-end">
          {socials.length > 0 && (
            <ul
              className="flex list-none items-center gap-5 p-0"
              aria-label={t.socialLabel}
            >
              {socials.map(({ label, href, Icon }) => (
                <li key={label} className="list-none">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex text-brand-navy transition-colors duration-200 hover:text-brand-red focus-visible:text-brand-red ${focusRing}`}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="max-w-[200px] text-xs leading-snug text-gray-500 md:text-right">
            © <CopyrightYear /> {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
