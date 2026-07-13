import { property } from "@/config/property";
import { getDict, type Locale } from "@/config/i18n";
import SugarLine from "@/components/SugarLine";
import ContactForm from "@/components/ContactForm";

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);

  const channels = [
    {
      label: t.contact.whatsappLabel,
      value: property.contact.phone,
      href: `https://wa.me/${property.contact.whatsapp.replace(/\D/g, "")}`,
    },
    {
      label: t.contact.emailLabel,
      value: property.contact.email,
      href: `mailto:${property.contact.email}`,
    },
  ];

  return (
    <>
      <header className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6 sm:pt-20">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{t.contact.title}</h1>
        <p className="mt-5 text-molasses-soft">{t.contact.intro}</p>
        <SugarLine className="mt-10" />
      </header>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="rounded-2xl border border-molasses/10 bg-white p-6 text-center transition-shadow hover:shadow-md"
            >
              <p className="eyebrow">{channel.label}</p>
              <p className="mt-2 font-medium text-molasses">{channel.value}</p>
            </a>
          ))}
        </div>

        <h2 className="mt-16 text-center text-3xl">{t.contact.formTitle}</h2>
        <div className="mt-8">
          <ContactForm locale={locale} />
        </div>
      </div>
    </>
  );
}
