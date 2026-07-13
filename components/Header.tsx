"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getDict, localePath, type Locale } from "@/config/i18n";

/** Maps the current path to its equivalent in the other locale. */
function switchLocalePath(pathname: string, target: Locale): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return localePath(target, bare);
}

export default function Header({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/house", label: t.nav.house },
    { href: "/rooms", label: t.nav.rooms },
    { href: "/location", label: t.nav.location },
    { href: "/reviews", label: t.nav.reviews },
    { href: "/contact", label: t.nav.contact },
  ];

  const p = (path: string) => localePath(locale, path);
  const switchHref = switchLocalePath(pathname, t.langSwitch.targetLocale);

  return (
    <header className="sticky top-0 z-40 border-b border-molasses/10 bg-sugar/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={p("/")} className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl text-molasses">La Sucrerie</span>
          <span className="eyebrow hidden sm:block">{t.common.eyebrowBrand}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={p(link.href)}
              className={`text-sm font-medium transition-colors hover:text-caramel ${
                pathname === p(link.href) ? "text-caramel" : "text-molasses-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={switchHref}
            hrefLang={t.langSwitch.targetLocale}
            className="text-sm font-medium text-molasses-soft underline-offset-4 hover:text-caramel hover:underline"
          >
            {t.langSwitch.label}
          </Link>
          <Link
            href={p("/book")}
            className="hidden rounded-full bg-caramel px-5 py-2 text-sm font-semibold text-sugar transition-colors hover:bg-caramel-deep sm:block"
          >
            {t.nav.book}
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-molasses lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-molasses/10 bg-sugar px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={p(link.href)}
                  className="block border-b border-molasses/5 py-3 text-base font-medium text-molasses"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={p("/book")}
                className="mt-4 block rounded-full bg-caramel px-5 py-3 text-center text-base font-semibold text-sugar"
                onClick={() => setOpen(false)}
              >
                {t.common.bookDirectSave}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
