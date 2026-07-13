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
      "Ancienne sucrerie du XIXᵉ siècle devenue maison d'hôtes, au cœur de Chavenay — la campagne aux portes de Paris et de Versailles.",
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
    locationTitle: "La campagne, à 35 minutes de Paris",
    locationBody:
      "Chavenay est un petit village des Yvelines, voisin du golf de Saint-Nom-la-Bretèche, à 20 minutes du château de Versailles et à 35 minutes de Paris. Le calme de la campagne, sans renoncer à rien.",
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
    metaTitle: "Autour de nous — Chavenay, entre Paris, Versailles et le golf",
    metaDescription:
      "La Sucrerie est à Chavenay, Yvelines : à 20 min du château de Versailles, 35 min de Paris et à côté du golf de Saint-Nom-la-Bretèche. Hébergement de groupe idéal entre ville et campagne.",
    eyebrow: "Autour de nous",
    title: "Un village des Yvelines, aux portes de tout",
    intro:
      "Chavenay est un petit village de la plaine de Versailles : des champs, un clocher, une boulangerie — et Paris à 35 minutes. C'est ce mélange-là que nos hôtes viennent chercher : la vraie campagne, sans s'éloigner de rien.",
    distancesTitle: "À combien de temps ?",
    minutes: (n: number) => `~${n} min en voiture`,
    distances: {
      paris: { title: "Paris", body: "La capitale, ses musées et ses lumières — pour une journée ou une soirée." },
      versailles: { title: "Château de Versailles", body: "Le château, ses jardins et le Grand Trianon, à deux pas." },
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
    // PLACEHOLDER TESTIMONIALS — replace every quote below with real guest reviews.
    testimonials: [
      { quote: "[EXEMPLE — à remplacer] Une maison pleine de charme, parfaite pour notre week-end à 14. Le billard a occupé les enfants… et les grands.", name: "Camille", detail: "Séjour en famille" },
      { quote: "[EXEMPLE — à remplacer] Idéalement placé pour visiter Versailles le jour et dîner à Paris le soir. Accueil chaleureux.", name: "Thomas", detail: "Entre amis" },
      { quote: "[EXEMPLE — à remplacer] La cuisine est un rêve pour cuisiner en groupe, et le jardin est superbe en été.", name: "Sophie", detail: "Fête de famille" },
      { quote: "[EXEMPLE — à remplacer] Parfait pour notre semaine de golf à Saint-Nom-la-Bretèche, à cinq minutes du parcours.", name: "Marc", detail: "Séjour golf" },
      { quote: "[EXEMPLE — à remplacer] Une maison qui a une âme. On s'y sent tout de suite chez soi.", name: "Élodie", detail: "Week-end en famille" },
      { quote: "[EXEMPLE — à remplacer] Hôtes disponibles et de bon conseil, arrivée très simple, literie excellente.", name: "Julien", detail: "Groupe d'amis" },
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
      "A 19th-century sugar works turned guest house, in the heart of Chavenay — true countryside at the gates of Paris and Versailles.",
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
    locationTitle: "Countryside, 35 minutes from Paris",
    locationBody:
      "Chavenay is a small village in the Yvelines, next door to the Saint-Nom-la-Bretèche golf course, 20 minutes from the Palace of Versailles and 35 minutes from Paris. Real countryside calm, giving up nothing.",
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
    metaTitle: "Location — Chavenay, between Paris, Versailles and the golf course",
    metaDescription:
      "La Sucrerie is in Chavenay, Yvelines: 20 min from the Palace of Versailles, 35 min from Paris, next to Saint-Nom-la-Bretèche golf course. Ideal group accommodation near Versailles.",
    eyebrow: "The setting",
    title: "A Yvelines village, at the gates of everything",
    intro:
      "Chavenay is a small village on the Versailles plain: fields, a church tower, a bakery — and Paris 35 minutes away. That's the blend our guests come for: real countryside, close to everything.",
    distancesTitle: "How far is…?",
    minutes: (n: number) => `~${n} min by car`,
    distances: {
      paris: { title: "Paris", body: "The capital, its museums and its lights — for a day trip or an evening out." },
      versailles: { title: "Palace of Versailles", body: "The palace, its gardens and the Grand Trianon, right nearby." },
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
    // PLACEHOLDER TESTIMONIALS — replace every quote below with real guest reviews.
    testimonials: [
      { quote: "[SAMPLE — replace] A house full of charm, perfect for our weekend of 14. The billiards table kept the kids busy… and the grown-ups.", name: "Camille", detail: "Family stay" },
      { quote: "[SAMPLE — replace] Ideally placed to visit Versailles by day and dine in Paris by night. Warm welcome.", name: "Thomas", detail: "With friends" },
      { quote: "[SAMPLE — replace] The kitchen is a dream for group cooking, and the garden is glorious in summer.", name: "Sophie", detail: "Family celebration" },
      { quote: "[SAMPLE — replace] Perfect for our golf week at Saint-Nom-la-Bretèche, five minutes from the course.", name: "Marc", detail: "Golf trip" },
      { quote: "[SAMPLE — replace] A house with a soul. You feel at home the moment you arrive.", name: "Élodie", detail: "Family weekend" },
      { quote: "[SAMPLE — replace] Responsive, helpful hosts, very easy check-in, excellent bedding.", name: "Julien", detail: "Group of friends" },
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
