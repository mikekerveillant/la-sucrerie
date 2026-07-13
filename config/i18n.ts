/**
 * ─────────────────────────────────────────────────────────────────────────────
 * LA SUCRERIE — ALL SITE COPY, FRENCH + ENGLISH
 *
 * Every visible string on the site lives here; components never hardcode copy.
 * French is the default locale (served at /), English at /en.
 *
 * Testimonials are PLACEHOLDER text — replace with real guest quotes
 * (see PLACEHOLDERS.md).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

/** Prefix a site path with the locale segment ("/rooms" -> "/en/rooms"). */
export function localePath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return locale === "fr" ? path : `/en${clean}` || "/en";
}

const fr = {
  langName: "Français",
  langSwitch: { label: "English", targetLocale: "en" as Locale },

  nav: {
    home: "Accueil",
    rooms: "Les chambres",
    house: "La maison",
    location: "Autour de nous",
    reviews: "Avis",
    contact: "Contact",
    book: "Réserver",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },

  common: {
    skipToContent: "Aller au contenu",
    eyebrowBrand: "Depuis le XIXᵉ siècle · Chavenay",
    bookDirect: "Réserver en direct",
    bookDirectSave: "Réservez en direct — économisez 10 %",
    fromPerNight: (price: string) => `à partir de ${price} / nuit`,
    guests: "voyageurs",
    bedrooms: "chambres",
    beds: "lits",
    baths: "salles de bain privées",
    floor1: "1ᵉʳ étage",
    floor2: "2ᵉ étage",
    floor3: "Sous les toits",
    sleeps: (n: number) => `jusqu'à ${n} pers.`,
    seeAllRooms: "Découvrir toutes les chambres",
    learnMore: "En savoir plus",
    ratingLine: (score: string, count: number, years: number) =>
      `★ ${score} · ${count} avis · ${years} ans d'accueil`,
    reviewsOnAirbnb: "avis vérifiés sur Airbnb",
    placeholderNotice: "", // reserved
  },

  home: {
    metaTitle: "La Sucrerie — Maison d'hôtes à Chavenay, entre Paris et Versailles",
    metaDescription:
      "Maison d'hôtes de charme à Chavenay (Yvelines) : maison entière pour 14–16 personnes, 5 chambres, jardin et billard. À 20 min de Versailles, 35 min de Paris. Réservez en direct et économisez 10 % par rapport à Airbnb.",
    heroTitle: "Une maison de famille au sucre d'antan",
    heroSubtitle:
      "Ancienne sucrerie du XIXᵉ siècle devenue maison d'hôtes, au cœur de Chavenay — la pleine campagne à moins d'une heure de Paris, faite pour les grandes retrouvailles.",
    heroCta: "Réserver en direct — −10 %",
    heroSecondaryCta: "Visiter la maison",
    heroImageAlt:
      "La façade de La Sucrerie, maison de caractère du XIXᵉ siècle à Chavenay",

    valueEyebrow: "Pourquoi réserver en direct ?",
    valueTitle: "Le même séjour, 10 % moins cher qu'Airbnb",
    valueBody:
      "En réservant directement auprès de nous, vous ne payez pas la commission de la plateforme. Nous vous en reversons l'économie : mêmes dates, même maison, meilleur prix — et un contact direct avec vos hôtes du premier message au départ.",
    valuePoints: [
      { title: "−10 % garantis", body: "Notre tarif direct est toujours 10 % en dessous du prix affiché sur Airbnb." },
      { title: "Contact direct", body: "Une question, une arrivée tardive, un repas à prévoir ? Vous parlez directement avec nous." },
      { title: "La confiance en plus", body: "16 ans d'accueil et 364 avis vérifiés : vous savez chez qui vous arrivez." },
    ],

    roomsEyebrow: "Les chambres",
    roomsTitle: "Cinq chambres, neuf lits, une maison entière",
    roomsBody:
      "La maison se réserve en entier : idéale pour les familles nombreuses, les retrouvailles entre amis, les fêtes de famille ou les groupes de golfeurs.",

    spacesEyebrow: "Les espaces à vivre",
    spacesTitle: "Une maison faite pour être partagée",
    spaces: [
      { title: "Le grand salon", body: "Canapés profonds, télévision et cheminée d'ambiance : le point de ralliement des soirées.", image: "living" },
      { title: "La salle de billard", body: "Un billard français dans son salon attenant — l'âme joueuse de la maison.", image: "billiards" },
      { title: "La cuisine équipée", body: "Grande cuisine toute équipée pour cuisiner à plusieurs, et véranda pour les longs dîners.", image: "kitchen" },
      { title: "Le jardin et la terrasse", body: "Tables au jardin, terrasse ensoleillée et barbecue pour les beaux jours.", image: "garden" },
    ],

    locationEyebrow: "Autour de nous",
    locationTitle: "La campagne, à moins d'une heure de Paris",
    locationBody:
      "Chavenay est un petit village de la plaine de Versailles : la vraie campagne — forêts pour marcher, golfs, centres équestres — avec les châteaux de Versailles et de Saint-Germain-en-Laye en voisins, et Paris à 35 minutes. Le calme, sans renoncer à rien.",
    locationCta: "Découvrir les environs",

    testimonialsEyebrow: "Ils ont séjourné ici",
    testimonialsTitle: "Ce que disent nos hôtes",
    testimonialsCta: "Lire tous les avis",

    finalCtaTitle: "Prêts à poser vos valises ?",
    finalCtaBody:
      "Vérifiez les disponibilités et réservez en direct : c'est le même séjour qu'Airbnb, 10 % moins cher.",
    finalCtaButton: "Vérifier les disponibilités",
  },

  rooms: {
    metaTitle: "Les chambres — La Sucrerie, gîte grande capacité dans les Yvelines",
    metaDescription:
      "5 chambres et 9 lits pour 14 à 16 personnes : suites familiales, chambres modulables et grenier aménagé. Gîte grande capacité à Chavenay, Yvelines, près de Versailles.",
    eyebrow: "Les chambres",
    title: "Cinq chambres et un grenier, pour 14 à 16 personnes",
    intro:
      "La maison se loue en entier. Chaque chambre a son caractère ; trois salles de bain privées se répartissent entre les étages, et le grenier ajoute deux couchages d'appoint.",
    bedsLabel: "Couchages",
    floorLabel: "Étage",
    detail: {
      "la-sucrerie": {
        beds: "Lit queen-size",
        blurb:
          "La suite qui porte le nom de la maison : lumineuse, au premier étage, avec son grand lit queen-size. Parfaite pour le couple qui mène la tribu.",
      },
      "les-jumeaux": {
        beds: "Lit queen-size · canapé-lit double · chambre attenante avec lits superposés (double en bas, simple en haut)",
        blurb:
          "La suite familiale par excellence : une grande chambre avec lit queen-size et canapé-lit, prolongée d'une chambre attenante avec lits superposés. Toute une famille sous le même toit… de suite.",
      },
      capucine: {
        beds: "2 lits simples, réunissables en lit double",
        blurb:
          "Au deuxième étage, une chambre douce et modulable : deux lits simples que l'on réunit volontiers en lit double selon vos besoins.",
      },
      "marie-lys": {
        beds: "2 lits simples, réunissables en lit king-size",
        blurb:
          "La jumelle de Capucine, version grand format : deux lits simples qui se transforment en généreux lit king-size.",
      },
      "valerie-anne": {
        beds: "Lit double",
        blurb:
          "Une chambre classique et chaleureuse au deuxième étage, avec son lit double — simple, confortable, sans chichis.",
      },
      attic: {
        beds: "2 couchages d'appoint",
        blurb:
          "Sous les toits, deux lits supplémentaires pour les ados en quête d'indépendance ou les derniers arrivés. C'est le refuge préféré des enfants.",
      },
    } as Record<string, { beds: string; blurb: string }>,
    ctaTitle: "Toute la maison, rien que pour vous",
    ctaBody: "Vérifiez les disponibilités pour vos dates et réservez en direct, 10 % moins cher qu'Airbnb.",
  },

  house: {
    metaTitle: "La maison — Une sucrerie du XIXᵉ siècle devenue maison d'hôtes",
    metaDescription:
      "Découvrez La Sucrerie : une maison de caractère du milieu du XIXᵉ siècle au centre de Chavenay, entièrement transformée en maison d'hôtes. Billard français, grande cuisine, jardin, terrasse et barbecue.",
    eyebrow: "La maison",
    title: "Cent soixante ans d'histoire, et toujours du sucre dans l'air",
    historyTitle: "Une maison née du sucre",
    historyBody1:
      "Construite au milieu du XIXᵉ siècle au centre du village de Chavenay, la maison doit son nom à son passé : on y travaillait le sucre. De cette époque, elle garde ses volumes généreux, ses murs épais et ce charme des maisons qui ont vécu.",
    historyBody2:
      "Entièrement transformée en maison d'hôtes, elle accueille aujourd'hui familles et groupes d'amis depuis seize ans — avec l'idée simple qu'une grande maison est faite pour être remplie de monde et de bruits de table.",
    facadeAlt: "La façade en pierre de La Sucrerie à Chavenay",
    spacesTitle: "Les espaces communs",
    spaces: [
      {
        title: "Le salon et la salle de billard",
        body: "Un grand salon avec télévision, prolongé d'un salon attenant qui abrite un billard français. Les parties s'improvisent après le dîner et durent plus tard que prévu.",
        image: "billiards",
        alt: "La salle de billard français de La Sucrerie",
      },
      {
        title: "La cuisine et la véranda",
        body: "Une cuisine entièrement équipée, pensée pour cuisiner à huit mains, et une véranda où l'on dresse la grande table pour les petits déjeuners et les longs dîners.",
        image: "kitchen",
        alt: "La grande cuisine équipée de La Sucrerie",
      },
      {
        title: "Le jardin, la terrasse et le barbecue",
        body: "Un jardin arboré avec ses tables, une terrasse extérieure et un barbecue : la maison vit dehors dès que le soleil s'installe.",
        image: "garden",
        alt: "Le jardin arboré et les tables extérieures de La Sucrerie",
      },
    ],
    amenitiesTitle: "Tout l'équipement",
    amenities: [
      "Wifi rapide (374 Mb/s)",
      "Parking privé gratuit (jusqu'à 5 voitures)",
      "Télévision 42\" avec le câble",
      "Cuisine entièrement équipée",
      "Lave-linge",
      "Billard français",
      "Véranda repas",
      "Terrasse extérieure",
      "Jardin avec tables",
      "Barbecue",
      "3 salles de bain privées",
      "Maison non-fumeur",
      "Animaux non admis",
    ],
    mealsTitle: "Les repas, si le cœur vous en dit",
    mealsBody:
      "Sur demande et selon disponibilité, nous pouvons préparer des repas pour votre groupe — parlez-nous-en au moment de la réservation.",
    rulesTitle: "Bon à savoir",
    rules: [
      "Arrivée entre 16 h et 22 h — arrivée autonome avec l'aide du personnel sur place",
      "Départ avant 11 h",
      "Maison non-fumeur",
      "Animaux non admis",
    ],
  },

  location: {
    metaTitle: "Autour de nous — Chavenay : golf, équitation, forêts et châteaux",
    metaDescription:
      "La Sucrerie est à Chavenay, dans la plaine de Versailles : golfs, centres équestres, forêts pour marcher et châteaux (Versailles à 20 min, Saint-Germain-en-Laye tout proche), à moins d'une heure de Paris.",
    eyebrow: "Autour de nous",
    title: "Un village des Yvelines, aux portes de tout",
    intro:
      "Chavenay est un petit village de la plaine de Versailles : des champs, un clocher, une boulangerie — et Paris à 35 minutes. C'est ce mélange-là que nos hôtes viennent chercher : la vraie campagne, sans s'éloigner de rien.",
    activitiesTitle: "Ce qu'on vient chercher ici",
    activities: [
      {
        title: "Le golf",
        body: "Plusieurs parcours à quelques minutes, à commencer par le prestigieux golf de Saint-Nom-la-Bretèche, notre voisin immédiat. Idéal pour un séjour golfique en groupe.",
      },
      {
        title: "Les chevaux",
        body: "La plaine de Versailles est une terre équestre : de nombreux centres équestres et poney-clubs entourent le village, pour les cavaliers confirmés comme pour un baptême des enfants.",
      },
      {
        title: "La nature",
        body: "Chemins de plaine et forêts toutes proches : on part marcher, courir ou pédaler directement depuis la maison, au milieu des champs.",
      },
      {
        title: "Les châteaux",
        body: "Versailles à 20 minutes, Saint-Germain-en-Laye tout proche — et de belles excursions en famille dans tout le pays des châteaux des Yvelines.",
      },
    ],
    distancesTitle: "À combien de temps ?",
    minutes: (n: number) => `~${n} min en voiture`,
    distances: {
      paris: { title: "Paris", body: "La capitale, ses musées et ses lumières — pour une journée ou une soirée." },
      versailles: { title: "Château de Versailles", body: "Le château, ses jardins et le Grand Trianon, à deux pas." },
      "saint-germain": { title: "Saint-Germain-en-Laye", body: "Le château royal, sa grande terrasse au-dessus de la Seine et ses rues commerçantes." },
      golf: { title: "Golf de Saint-Nom-la-Bretèche", body: "Le célèbre parcours est notre voisin immédiat — idéal pour un séjour golfique en groupe." },
      cdg: { title: "Aéroport Paris-CDG", body: "L'aéroport international principal, accessible par l'A13/A86." },
      orly: { title: "Aéroport d'Orly", body: "Le second aéroport parisien, au sud de la capitale." },
    } as Record<string, { title: string; body: string }>,
    mapTitle: "Nous trouver",
    mapBody:
      "La Sucrerie se trouve au centre du village de Chavenay (78450), dans les Yvelines. L'adresse exacte vous est communiquée à la réservation.",
    mapIframeTitle: "Carte OpenStreetMap montrant Chavenay, Yvelines",
    chavenayImageAlt: "Le village de Chavenay et la plaine de Versailles",
  },

  reviews: {
    metaTitle: "Avis — ★ 4,82 sur 364 avis, 16 ans d'accueil",
    metaDescription:
      "364 voyageurs ont noté La Sucrerie 4,82/5 sur Airbnb : propreté 4,9, arrivée 4,9, emplacement 4,7. Lisez les avis de nos hôtes sur notre maison d'hôtes à Chavenay.",
    eyebrow: "Avis",
    title: "Seize ans d'hôtes heureux",
    intro:
      "Depuis seize ans, nous accueillons familles et groupes d'amis. Voici ce qu'ils en disent — et les notes qu'ils nous laissent sur Airbnb.",
    categoriesTitle: "Les notes en détail",
    categories: {
      cleanliness: "Propreté",
      checkIn: "Arrivée",
      accuracy: "Conformité",
      location: "Emplacement",
      communication: "Communication",
      value: "Rapport qualité-prix",
    },
    testimonialsTitle: "Paroles d'hôtes",
    // Real Airbnb reviews (5★). English-language originals are translated;
    // the original wording lives in the `en` section below.
    testimonials: [
      {
        quote:
          "Nous avons eu le privilège de passer les fêtes de Noël en famille à la Sucrerie. Outre le cadre exceptionnel, nous avons particulièrement apprécié le fait que la maison soit véritablement pensée pour les familles. Tout était prévu sur place : du linge de maison aux ustensiles de cuisine en passant par les jeux de société. Petits et grands ont été enchantés par leur séjour.",
        name: "Eliane",
        detail: "Décembre 2024 · Noël en famille",
      },
      {
        quote:
          "La maison est entièrement équipée pour toute la famille, jusqu'au lit bébé et à la chaise haute. Nous étions 15 au total et la maison nous a accueillis parfaitement : tout était impeccable, les lits faits à l'arrivée, le chauffage déjà allumé. Hautement recommandé !",
        name: "Sarah",
        detail: "Septembre 2025 · Réunion de famille à 15",
      },
      {
        quote:
          "Très belle maison permettant d'accueillir jusqu'à 15 personnes sans problème. L'extérieur est parfait pour profiter des beaux jours et la véranda parfaite lorsque le temps est moins clément. Les chambres sont spacieuses, très bien aménagées et joliment décorées. La maison était idéale pour nos retrouvailles entre amis !",
        name: "Matthieu & Priscilia",
        detail: "Juin 2025 · Retrouvailles entre amis",
      },
      {
        quote:
          "Un séjour merveilleux. La maison était propre, confortable et parfaitement équipée. L'emplacement est paisible et pratique, et nos hôtes accueillants et réactifs. Nous reviendrons avec grand plaisir.",
        name: "Marzia",
        detail: "Mai 2026 · Alexandria, États-Unis",
      },
      {
        quote:
          "Un moment merveilleux. La maison est charmante, idéale pour une grande réunion de famille. La cuisine est parfaitement équipée, la véranda lumineuse et chaleureuse, et le salon peut réunir tout le monde. Une vraie expérience 5 étoiles.",
        name: "Adele & Marc",
        detail: "Mars 2026 · Doha, Qatar",
      },
      {
        quote:
          "Nous avons passé un excellent week-end en famille. Merci à Mike et Krystine pour l'accueil chaleureux. C'était un réel bonheur de vivre dans cette très jolie maison, décorée avec goût.",
        name: "Elisabeth",
        detail: "Juillet 2025 · Guadeloupe",
      },
    ],
    airbnbProofTitle: "Vérifiez par vous-même",
    airbnbProofBody:
      "Tous nos avis sont publics et vérifiés sur Airbnb. Consultez-les sur la plateforme — puis revenez réserver en direct, 10 % moins cher.",
    airbnbProofCta: "Voir les avis sur Airbnb",
  },

  book: {
    metaTitle: "Réserver en direct — Économisez 10 % vs Airbnb",
    metaDescription:
      "Réservez La Sucrerie en direct : maison entière pour 14–16 personnes à Chavenay, près de Versailles. Tarif direct 10 % moins cher qu'Airbnb, mêmes dates, même maison.",
    eyebrow: "Réservation",
    title: "Réservez en direct, économisez 10 %",
    intro:
      "Même maison, mêmes dates, sans la commission de plateforme. Choisissez vos dates ci-dessous ou envoyez-nous une demande — nous répondons rapidement.",
    priceCompareTitle: "Le calcul est vite fait",
    priceDirect: "En direct chez nous",
    priceAirbnb: "Sur Airbnb",
    priceFrom: (price: string) => `à partir de ${price} / nuit`,
    pricePlaceholderNote: "Tarifs indicatifs — le prix exact dépend des dates et du nombre de voyageurs.",
    widgetFallbackTitle: "Demande de réservation",
    widgetFallbackIntro:
      "Indiquez vos dates et le nombre de voyageurs : nous revenons vers vous avec la disponibilité et le tarif direct.",
    form: {
      name: "Nom complet",
      email: "E-mail",
      phone: "Téléphone",
      checkIn: "Arrivée",
      checkOut: "Départ",
      guests: "Nombre de voyageurs",
      message: "Votre message (occasion, questions…)",
      language: "Langue préférée",
      languageOptions: { fr: "Français", en: "English" },
      submit: "Envoyer ma demande",
      submitting: "Envoi en cours…",
      successTitle: "Demande bien reçue !",
      successBody:
        "Merci ! Nous vous répondons au plus vite avec la disponibilité et votre tarif direct (−10 % vs Airbnb).",
      errorBody:
        "L'envoi a échoué. Réessayez dans un instant, ou écrivez-nous directement par e-mail.",
      required: "Champ requis",
    },
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Quelles sont les conditions d'annulation ?",
        a: "Les conditions exactes vous sont confirmées avec votre devis. En réservant en direct, elles sont au moins aussi souples que sur Airbnb — et souvent plus.", // PLACEHOLDER: confirm real cancellation policy
      },
      {
        q: "Comment se passe l'arrivée ?",
        a: "L'arrivée se fait entre 16 h et 22 h, en autonomie avec l'aide du personnel présent sur place. Le départ se fait avant 11 h.",
      },
      {
        q: "Proposez-vous des repas ?",
        a: "Oui, sur demande et selon disponibilité : dites-nous vos envies au moment de la réservation et nous vous confirmons ce qui est possible.",
      },
      {
        q: "Y a-t-il un parking ?",
        a: "Oui, un parking privé gratuit pouvant accueillir jusqu'à 5 voitures.",
      },
    ],
    channelNote:
      "Les disponibilités sont synchronisées en temps réel avec notre calendrier Airbnb : pas de double réservation possible.",
  },

  contact: {
    metaTitle: "Contact — La Sucrerie, maison d'hôtes à Chavenay",
    metaDescription:
      "Une question sur la maison, vos dates ou les repas ? Contactez La Sucrerie par formulaire, téléphone, e-mail ou WhatsApp. Réponse rapide, en français ou en anglais.",
    eyebrow: "Contact",
    title: "Parlons de votre séjour",
    intro:
      "Une question sur la maison, vos dates, un événement de famille ? Écrivez-nous — nous répondons vite, en français comme en anglais.",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    whatsappLabel: "WhatsApp",
    formTitle: "Envoyez-nous un message",
    form: {
      name: "Nom complet",
      email: "E-mail",
      phone: "Téléphone (facultatif)",
      message: "Votre message",
      language: "Langue préférée",
      submit: "Envoyer",
      submitting: "Envoi en cours…",
      successTitle: "Message envoyé !",
      successBody: "Merci ! Nous revenons vers vous très vite.",
      errorBody: "L'envoi a échoué. Réessayez dans un instant, ou écrivez-nous directement par e-mail.",
    },
  },

  leadMagnet: {
    title: "Nos tarifs directs, dans votre boîte mail",
    body: "Recevez notre grille de tarifs en direct — toujours 10 % en dessous d'Airbnb — et nos disponibilités du moment.",
    emailLabel: "Votre e-mail",
    submit: "Recevoir les tarifs",
    submitting: "Envoi…",
    success: "C'est envoyé ! Surveillez votre boîte mail.",
    error: "L'envoi a échoué — réessayez dans un instant.",
    dismiss: "Non merci",
    close: "Fermer",
  },

  stickyBar: {
    text: "Réservez en direct — −10 % vs Airbnb",
    cta: "Réserver",
  },

  footer: {
    tagline: "Maison d'hôtes au cœur de Chavenay, entre Paris et Versailles.",
    navTitle: "La maison",
    contactTitle: "Contact",
    bookTitle: "Réserver",
    bookBody: "En direct, c'est toujours 10 % moins cher qu'Airbnb.",
    legal: "Tous droits réservés.",
  },
};

type DeepDict = typeof fr;

const en: DeepDict = {
  langName: "English",
  langSwitch: { label: "Français", targetLocale: "fr" as Locale },

  nav: {
    home: "Home",
    rooms: "Rooms",
    house: "The House",
    location: "Location",
    reviews: "Reviews",
    contact: "Contact",
    book: "Book",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },

  common: {
    skipToContent: "Skip to content",
    eyebrowBrand: "Since the 19th century · Chavenay",
    bookDirect: "Book direct",
    bookDirectSave: "Book direct — save 10%",
    fromPerNight: (price: string) => `from ${price} / night`,
    guests: "guests",
    bedrooms: "bedrooms",
    beds: "beds",
    baths: "private baths",
    floor1: "1st floor",
    floor2: "2nd floor",
    floor3: "Attic",
    sleeps: (n: number) => `sleeps up to ${n}`,
    seeAllRooms: "See all rooms",
    learnMore: "Learn more",
    ratingLine: (score: string, count: number, years: number) =>
      `★ ${score} · ${count} reviews · ${years} years hosting`,
    reviewsOnAirbnb: "verified reviews on Airbnb",
    placeholderNotice: "",
  },

  home: {
    metaTitle: "La Sucrerie — Guest House in Chavenay, between Paris and Versailles",
    metaDescription:
      "Charming guest house in Chavenay (Yvelines): whole house for 14–16 guests, 5 bedrooms, garden and billiards room. 20 min from Versailles, 35 min from Paris. Book direct and save 10% vs Airbnb.",
    heroTitle: "A family house with sugar in its walls",
    heroSubtitle:
      "A 19th-century sugar works turned guest house, in the heart of Chavenay — true countryside less than an hour from Paris, made for big get-togethers.",
    heroCta: "Book direct — save 10%",
    heroSecondaryCta: "Tour the house",
    heroImageAlt: "The facade of La Sucrerie, a characterful 19th-century house in Chavenay",

    valueEyebrow: "Why book direct?",
    valueTitle: "The same stay, 10% cheaper than Airbnb",
    valueBody:
      "When you book directly with us, you skip the platform commission — and we pass the saving on to you. Same dates, same house, better price, and a direct line to your hosts from first message to checkout.",
    valuePoints: [
      { title: "10% off, guaranteed", body: "Our direct rate is always 10% below the price shown on Airbnb." },
      { title: "Talk to your hosts", body: "A question, a late arrival, a meal to arrange? You speak directly with us." },
      { title: "Trust, included", body: "16 years of hosting and 364 verified reviews: you know whose house you're walking into." },
    ],

    roomsEyebrow: "The rooms",
    roomsTitle: "Five bedrooms, nine beds, one whole house",
    roomsBody:
      "The house is booked in its entirety — perfect for big families, reunions with friends, family celebrations or golf groups.",

    spacesEyebrow: "Living spaces",
    spacesTitle: "A house made to be shared",
    spaces: [
      { title: "The big living room", body: "Deep sofas, a TV and a warm hearth feel: where the evenings converge.", image: "living" },
      { title: "The billiards room", body: "A French billiards table in its own adjoining lounge — the playful soul of the house.", image: "billiards" },
      { title: "The full kitchen", body: "A large, fully equipped kitchen for cooking together, plus a veranda for long dinners.", image: "kitchen" },
      { title: "Garden & terrace", body: "Garden tables, a sunny terrace and a BBQ for the fine days.", image: "garden" },
    ],

    locationEyebrow: "The setting",
    locationTitle: "Countryside, less than an hour from Paris",
    locationBody:
      "Chavenay is a small village on the Versailles plain: real countryside — forest walks, golf courses, riding stables — with the châteaux of Versailles and Saint-Germain-en-Laye as neighbours, and Paris 35 minutes away. Calm that gives up nothing.",
    locationCta: "Explore the area",

    testimonialsEyebrow: "They stayed here",
    testimonialsTitle: "What our guests say",
    testimonialsCta: "Read all reviews",

    finalCtaTitle: "Ready to drop your bags?",
    finalCtaBody: "Check availability and book direct: the same stay as Airbnb, 10% cheaper.",
    finalCtaButton: "Check availability",
  },

  rooms: {
    metaTitle: "Rooms — La Sucrerie, large group accommodation near Versailles",
    metaDescription:
      "5 bedrooms and 9 beds for 14–16 guests: family suites, flexible twin rooms and a converted attic. Large holiday house near Paris and Versailles, in Chavenay.",
    eyebrow: "The rooms",
    title: "Five bedrooms and an attic, for 14 to 16 guests",
    intro:
      "The house is rented whole. Each room has its own character; three private bathrooms are spread across the floors, and the attic adds two extra beds.",
    bedsLabel: "Beds",
    floorLabel: "Floor",
    detail: {
      "la-sucrerie": {
        beds: "Queen bed",
        blurb:
          "The suite that carries the house's name: bright, on the first floor, with a big queen bed. Perfect for the couple leading the tribe.",
      },
      "les-jumeaux": {
        beds: "Queen bed · double sofa bed · adjoining room with bunk bed (double below, single above)",
        blurb:
          "The family suite par excellence: a large bedroom with queen bed and sofa bed, extended by an adjoining room with a bunk bed. A whole family under one roof — in one suite.",
      },
      capucine: {
        beds: "2 single beds, convertible to a double",
        blurb:
          "On the second floor, a soft, flexible room: two singles that happily become a double, depending on who's coming.",
      },
      "marie-lys": {
        beds: "2 single beds, convertible to a king",
        blurb: "Capucine's twin, super-sized: two singles that convert into a generous king bed.",
      },
      "valerie-anne": {
        beds: "Double bed",
        blurb:
          "A classic, warm second-floor bedroom with a double bed — simple, comfortable, no fuss.",
      },
      attic: {
        beds: "2 additional beds",
        blurb:
          "Up under the roof, two extra beds for independence-seeking teens or the last to book. The kids' favourite hideout.",
      },
    } as Record<string, { beds: string; blurb: string }>,
    ctaTitle: "The whole house, all to yourselves",
    ctaBody: "Check availability for your dates and book direct — 10% below Airbnb.",
  },

  house: {
    metaTitle: "The House — A 19th-century sugar works turned guest house",
    metaDescription:
      "Discover La Sucrerie: a characterful mid-19th-century house in the centre of Chavenay, fully transformed into a B&B. French billiards, big kitchen, garden, terrace and BBQ.",
    eyebrow: "The house",
    title: "A hundred and sixty years of history, and still sugar in the air",
    historyTitle: "A house born of sugar",
    historyBody1:
      "Built in the mid-19th century in the centre of the village of Chavenay, the house owes its name to its past: sugar was worked here. From that era it keeps its generous volumes, thick walls and the charm of houses that have lived.",
    historyBody2:
      "Fully transformed into a guest house, it has welcomed families and groups of friends for sixteen years — on the simple idea that a big house is made to be filled with people and the sound of a busy table.",
    facadeAlt: "The stone facade of La Sucrerie in Chavenay",
    spacesTitle: "The shared spaces",
    spaces: [
      {
        title: "The living room & billiards room",
        body: "A large living room with TV, extended by an adjoining lounge housing a French billiards table. Games start after dinner and run later than planned.",
        image: "billiards",
        alt: "The French billiards room at La Sucrerie",
      },
      {
        title: "The kitchen & veranda",
        body: "A fully equipped kitchen designed for cooking together, and a veranda where the long table is set for breakfasts and slow dinners.",
        image: "kitchen",
        alt: "The large equipped kitchen at La Sucrerie",
      },
      {
        title: "Garden, terrace & BBQ",
        body: "A leafy garden with its tables, an outdoor terrace and a BBQ: the house lives outdoors as soon as the sun settles in.",
        image: "garden",
        alt: "The leafy garden and outdoor tables at La Sucrerie",
      },
    ],
    amenitiesTitle: "Everything on hand",
    amenities: [
      "Fast wifi (374 Mbps)",
      "Free private parking (up to 5 cars)",
      "42\" HDTV with cable",
      "Fully equipped kitchen",
      "Washer",
      "French billiards table",
      "Veranda dining area",
      "Outdoor terrace",
      "Garden with tables",
      "BBQ",
      "3 private bathrooms",
      "Non-smoking house",
      "No pets",
    ],
    mealsTitle: "Meals, if you fancy them",
    mealsBody:
      "On request and subject to availability, we can prepare meals for your group — just mention it when you book.",
    rulesTitle: "Good to know",
    rules: [
      "Check-in between 4:00 and 10:00 PM — self check-in with on-site staff",
      "Checkout by 11:00 AM",
      "Non-smoking house",
      "No pets",
    ],
  },

  location: {
    metaTitle: "Location — Chavenay: golf, horse riding, forests and châteaux",
    metaDescription:
      "La Sucrerie is in Chavenay on the Versailles plain: golf courses, riding stables, forest walks and châteaux (Versailles 20 min, Saint-Germain-en-Laye close by), less than an hour from Paris. Ideal group accommodation near Versailles.",
    eyebrow: "The setting",
    title: "A Yvelines village, at the gates of everything",
    intro:
      "Chavenay is a small village on the Versailles plain: fields, a church tower, a bakery — and Paris 35 minutes away. That's the blend our guests come for: real countryside, close to everything.",
    activitiesTitle: "What you come here for",
    activities: [
      {
        title: "Golf",
        body: "Several courses just minutes away, starting with the prestigious Saint-Nom-la-Bretèche golf club, our immediate neighbour. Ideal for a group golf trip.",
      },
      {
        title: "Horses",
        body: "The Versailles plain is horse country: riding schools and pony clubs surround the village, for seasoned riders and children's first lessons alike.",
      },
      {
        title: "Nature",
        body: "Country lanes and forests close by: walk, run or cycle straight from the house, out among the fields.",
      },
      {
        title: "Châteaux",
        body: "Versailles 20 minutes away, Saint-Germain-en-Laye close by — and lovely family outings all across the château country of the Yvelines.",
      },
    ],
    distancesTitle: "How far is…?",
    minutes: (n: number) => `~${n} min by car`,
    distances: {
      paris: { title: "Paris", body: "The capital, its museums and its lights — for a day trip or an evening out." },
      versailles: { title: "Palace of Versailles", body: "The palace, its gardens and the Grand Trianon, right nearby." },
      "saint-germain": { title: "Saint-Germain-en-Laye", body: "The royal château, its grand terrace above the Seine and its lively shopping streets." },
      golf: { title: "Saint-Nom-la-Bretèche Golf", body: "The famous course is our immediate neighbour — ideal for a group golf trip." },
      cdg: { title: "Paris-CDG Airport", body: "The main international airport, reached via the A13/A86." },
      orly: { title: "Orly Airport", body: "Paris's second airport, south of the capital." },
    } as Record<string, { title: string; body: string }>,
    mapTitle: "Finding us",
    mapBody:
      "La Sucrerie sits in the centre of the village of Chavenay (78450), in the Yvelines. The exact address is shared when you book.",
    mapIframeTitle: "OpenStreetMap map showing Chavenay, Yvelines",
    chavenayImageAlt: "The village of Chavenay and the Versailles plain",
  },

  reviews: {
    metaTitle: "Reviews — ★ 4.82 from 364 reviews, 16 years hosting",
    metaDescription:
      "364 travellers rated La Sucrerie 4.82/5 on Airbnb: cleanliness 4.9, check-in 4.9, location 4.7. Read what guests say about our guest house in Chavenay.",
    eyebrow: "Reviews",
    title: "Sixteen years of happy guests",
    intro:
      "For sixteen years we've welcomed families and groups of friends. Here's what they say — and the scores they leave us on Airbnb.",
    categoriesTitle: "The scores in detail",
    categories: {
      cleanliness: "Cleanliness",
      checkIn: "Check-in",
      accuracy: "Accuracy",
      location: "Location",
      communication: "Communication",
      value: "Value",
    },
    testimonialsTitle: "In their words",
    // Real Airbnb reviews (5★). French-language originals are translated;
    // the original wording lives in the `fr` section above.
    testimonials: [
      {
        quote:
          "We had the privilege of spending the Christmas holidays as a family at La Sucrerie. Beyond the exceptional setting, we especially appreciated that the house is truly designed for families. Everything was on hand: household linen, kitchen utensils, even board games. Young and old were delighted with their stay.",
        name: "Eliane",
        detail: "December 2024 · Christmas with family",
      },
      {
        quote:
          "The house is fully equipped to meet the needs of the whole family, including thoughtful touches like a baby bed and high chair. We were 15 people in total and the house accommodated us perfectly. Everything was spotless, the beds were made on arrival, and the heating was already on. Highly recommended!",
        name: "Sarah",
        detail: "September 2025 · Family get-together of 15",
      },
      {
        quote:
          "A beautiful house that easily welcomes up to 15 people. The outdoor space is perfect for fine days and the veranda ideal when the weather is less kind. The bedrooms are spacious, very well laid out and prettily decorated. The house was ideal for our reunion with friends over a long weekend!",
        name: "Matthieu & Priscilia",
        detail: "June 2025 · Friends' reunion",
      },
      {
        quote:
          "We had a wonderful stay. The house was clean, comfortable, and well-equipped with everything we needed. The location was peaceful and convenient, and the host was friendly and responsive. We truly enjoyed our time here and would gladly stay again. Highly recommended.",
        name: "Marzia",
        detail: "May 2026 · Alexandria, USA",
      },
      {
        quote:
          "We had a wonderful time in Mike's house. Charming, and convenient for a big family gathering. The kitchen was fully equipped, very bright and warm with the veranda; plenty of seats in the living room to gather everyone. We truly had a 5-star experience.",
        name: "Adele & Marc",
        detail: "March 2026 · Doha, Qatar",
      },
      {
        quote:
          "We had an excellent family weekend. Thank you to Mike and Krystine for the warm welcome — it was a real joy to stay in this lovely, tastefully decorated house.",
        name: "Elisabeth",
        detail: "July 2025 · Guadeloupe",
      },
    ],
    airbnbProofTitle: "See for yourself",
    airbnbProofBody:
      "All our reviews are public and verified on Airbnb. Read them there — then come back and book direct, 10% cheaper.",
    airbnbProofCta: "See the reviews on Airbnb",
  },

  book: {
    metaTitle: "Book direct — Save 10% vs Airbnb",
    metaDescription:
      "Book La Sucrerie direct: whole house for 14–16 guests in Chavenay, near Versailles. Direct rate 10% below Airbnb — same dates, same house.",
    eyebrow: "Booking",
    title: "Book direct, save 10%",
    intro:
      "Same house, same dates, minus the platform commission. Pick your dates below or send us an enquiry — we reply quickly.",
    priceCompareTitle: "The maths is quick",
    priceDirect: "Direct with us",
    priceAirbnb: "On Airbnb",
    priceFrom: (price: string) => `from ${price} / night`,
    pricePlaceholderNote: "Indicative rates — the exact price depends on dates and group size.",
    widgetFallbackTitle: "Booking enquiry",
    widgetFallbackIntro:
      "Tell us your dates and group size: we'll come back with availability and your direct rate.",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      checkIn: "Check-in",
      checkOut: "Checkout",
      guests: "Number of guests",
      message: "Your message (occasion, questions…)",
      language: "Preferred language",
      languageOptions: { fr: "Français", en: "English" },
      submit: "Send my enquiry",
      submitting: "Sending…",
      successTitle: "Enquiry received!",
      successBody:
        "Thank you! We'll get back to you shortly with availability and your direct rate (10% below Airbnb).",
      errorBody: "Sending failed. Please try again in a moment, or email us directly.",
      required: "Required field",
    },
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the cancellation policy?",
        a: "The exact terms are confirmed with your quote. Booking direct, they are at least as flexible as on Airbnb — often more.", // PLACEHOLDER: confirm real cancellation policy
      },
      {
        q: "How does check-in work?",
        a: "Check-in is between 4:00 and 10:00 PM, self check-in with the help of on-site staff. Checkout is by 11:00 AM.",
      },
      {
        q: "Do you offer meals?",
        a: "Yes — on request and subject to availability. Tell us what you'd like when booking and we'll confirm what's possible.",
      },
      {
        q: "Is there parking?",
        a: "Yes, free private parking for up to 5 cars.",
      },
    ],
    channelNote:
      "Availability is synced in real time with our Airbnb calendar: double bookings aren't possible.",
  },

  contact: {
    metaTitle: "Contact — La Sucrerie, guest house in Chavenay",
    metaDescription:
      "A question about the house, your dates or meals? Contact La Sucrerie by form, phone, email or WhatsApp. Quick replies, in French or English.",
    eyebrow: "Contact",
    title: "Let's talk about your stay",
    intro:
      "A question about the house, your dates, a family event? Write to us — we reply quickly, in French or English.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    formTitle: "Send us a message",
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      message: "Your message",
      language: "Preferred language",
      submit: "Send",
      submitting: "Sending…",
      successTitle: "Message sent!",
      successBody: "Thank you! We'll be in touch very soon.",
      errorBody: "Sending failed. Please try again in a moment, or email us directly.",
    },
  },

  leadMagnet: {
    title: "Our direct rates, straight to your inbox",
    body: "Get our direct-booking rate card — always 10% below Airbnb — plus our current availability.",
    emailLabel: "Your email",
    submit: "Send me the rates",
    submitting: "Sending…",
    success: "Sent! Keep an eye on your inbox.",
    error: "Sending failed — please try again in a moment.",
    dismiss: "No thanks",
    close: "Close",
  },

  stickyBar: {
    text: "Book direct — save 10% vs Airbnb",
    cta: "Book",
  },

  footer: {
    tagline: "A guest house in the heart of Chavenay, between Paris and Versailles.",
    navTitle: "The house",
    contactTitle: "Contact",
    bookTitle: "Book",
    bookBody: "Direct is always 10% below Airbnb.",
    legal: "All rights reserved.",
  },
};

export type Dict = DeepDict;

const dictionaries: Record<Locale, Dict> = { fr, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}
