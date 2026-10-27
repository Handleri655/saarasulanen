/**
 * Suomenkieliset osoitteet ovat juuressa (esim. /palvelut/).
 * Englanti voidaan myöhemmin lisätä polkuun /en/ muuttamatta näitä osoitteita.
 *
 * Turnstile pysyy pois päältä, kunnes site key on olemassa.
 * Jos avaimen lisää, päivitä myös evästeseloste.
 */
export const site = {
  name: "Saara Sulanen Oy",
  legalName: "Saara Sulanen Oy",
  slogan: "Keraamisten pinnoitusten spesialisti",
  url: "https://saarasulanen.com",
  locale: "fi_FI",
  lang: "fi",
  email: "info@saarasulanen.com",
  phoneDisplay: "050 351 4657",
  phoneTel: "+358503514657",
  businessId: "3299395-9",
  industry: "Autokorjaamo ja autohuolto",
  founded: "2022",
  description:
    "Työkoneiden, raskaan kaluston ja oheislaitteiden keraamisiin pinnoituksiin erikoistunut yritys. Perustettu 2022, toimipaikka Perniössä, palvelu ympäri Suomen.",
  address: {
    street: "Perniöntie 2530",
    postalCode: "25500",
    city: "Perniö",
    country: "Suomi",
    countryCode: "FI",
  },
  facebook: "https://www.facebook.com/saarasulanenoy/",
  instagram: "https://www.instagram.com/saarasulanenoy/",
  formEndpoint: "https://formsubmit.co/ajax/info@saarasulanen.com",
  formAction: "https://formsubmit.co/info@saarasulanen.com",
  turnstileSiteKey: "",
  updated: "27.10.2026",
} as const;

export const mapsQuery = "Perniöntie 2530, 25500 Perniö";

export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=12&output=embed`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

export const companyBlurb =
  "Saara Sulanen Oy on vuonna 2022 perustettu työkoneiden, raskaan kaluston ja oheislaitteiden keraamisiin pinnoituksiin erikoistunut yritys. Käytössämme on markkinoiden parhaat tuotteet sekä työvälineet, jotta palvelun laatu pysyy korkeana. Tavoitteemme on suojata asiakkaan omaisuutta, helpottaa sen puhtaanapitoa, lisätä työmukavuutta ja säilyttää jälleenmyyntiarvo. Tarjoamme pinnoituspalveluita ympäri Suomea.";
