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

export const companyBlurb =
  "Saara Sulanen Oy on vuonna 2022 perustettu työkoneiden ja raskaan kaluston keraamisiin pinnoituksiin erikoistunut yritys.";
