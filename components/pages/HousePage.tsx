import Image from "next/image";
import { property } from "@/config/property";
import { getDict, type Locale } from "@/config/i18n";
import SugarLine from "@/components/SugarLine";
import FadeIn from "@/components/FadeIn";

export default function HousePage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const images = property.images as Record<string, string>;

  return (
    <>
      <header className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6 sm:pt-20">
        <p className="eyebrow">{t.house.eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{t.house.title}</h1>
        <SugarLine className="mt-10" />
      </header>

      {/* History */}
      <FadeIn as="section" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={property.images.facade}
            alt={t.house.facadeAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl">{t.house.historyTitle}</h2>
          <p className="mt-4 text-molasses-soft">{t.house.historyBody1}</p>
          <p className="mt-4 text-molasses-soft">{t.house.historyBody2}</p>
        </div>
      </FadeIn>

      {/* Shared spaces */}
      <section className="bg-sugar-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-3xl">{t.house.spacesTitle}</h2>
          <div className="mt-12 space-y-14">
            {t.house.spaces.map((space, index) => (
              <FadeIn
                key={space.title}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-2xl ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={images[space.image] ?? property.images.living}
                    alt={space.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-display text-2xl text-molasses">{space.title}</h3>
                  <p className="mt-3 text-molasses-soft">{space.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <FadeIn as="section" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-3xl">{t.house.amenitiesTitle}</h2>
        <SugarLine className="mx-auto mt-8 max-w-md" />
        <ul className="mt-10 grid gap-x-10 gap-y-3 text-sm text-molasses sm:grid-cols-2 lg:grid-cols-3">
          {t.house.amenities.map((amenity) => (
            <li key={amenity} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-1.5 w-1.5 flex-none rotate-45 bg-caramel" />
              {amenity}
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* Meals + rules */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-molasses/10 bg-white p-8">
          <h2 className="font-display text-2xl text-molasses">{t.house.mealsTitle}</h2>
          <p className="mt-3 text-sm text-molasses-soft">{t.house.mealsBody}</p>
        </div>
        <div className="rounded-2xl border border-molasses/10 bg-white p-8">
          <h2 className="font-display text-2xl text-molasses">{t.house.rulesTitle}</h2>
          <ul className="mt-3 space-y-2 text-sm text-molasses-soft">
            {t.house.rules.map((rule) => (
              <li key={rule} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rotate-45 bg-copper" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
