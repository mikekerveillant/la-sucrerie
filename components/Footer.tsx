import Link from "next/link";
import { property } from "@/config/property";
import { getDict, localePath, type Locale } from "@/config/i18n";
import SugarLine from "@/components/SugarLine";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const p = (path: string) => localePath(locale, path);

  const links = [
    { href: "/house", label: t.nav.house },
    { href: "/rooms", label: t.nav.rooms },
    { href: "/location", label: t.nav.location },
    { href: "/reviews", label: t.nav.reviews },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="mt-20 bg-molasses text-sugar">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">La Sucrerie</p>
            <p className="eyebrow mt-1 !text-caramel">{t.common.eyebrowBrand}</p>
            <p className="mt-4 max-w-xs text-sm text-sugar/70">{t.footer.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow !text-caramel">{t.footer.navTitle}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={p(link.href)} className="text-sugar/80 hover:text-sugar">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow !text-caramel">{t.footer.contactTitle}</p>
            <ul className="mt-4 space-y-2 text-sm text-sugar/80">
              <li>
                <a
                  href={`https://wa.me/${property.contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sugar"
                >
                  {t.contact.whatsappLabel} · {property.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${property.contact.email}`} className="hover:text-sugar">
                  {property.contact.email}
                </a>
              </li>
              <li>
                {property.address.town}, {property.address.postalCode} — {property.address.region}
              </li>
            </ul>
            <p className="mt-6 text-sm text-sugar/70">{t.footer.bookBody}</p>
            <Link
              href={p("/book")}
              className="mt-3 inline-block rounded-full bg-caramel px-5 py-2 text-sm font-semibold text-sugar hover:bg-caramel-deep"
            >
              {t.common.bookDirect}
            </Link>
          </div>
        </div>

        <SugarLine className="mt-12 opacity-60" />
        <p className="mt-6 text-center text-xs text-sugar/50">
          © {new Date().getFullYear()} {property.name} · {t.footer.legal}
        </p>
      </div>
    </footer>
  );
}
