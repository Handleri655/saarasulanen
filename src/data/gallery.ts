export type GalleryCategory = "tyokoneet" | "maatalouskoneet" | "kuorma-autot" | "oheislaitteet";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  categoryLabel: string;
  title: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  home?: boolean;
}

export const galleryFilters: { id: "kaikki" | GalleryCategory; label: string }[] = [
  { id: "kaikki", label: "Kaikki" },
  { id: "tyokoneet", label: "Työkoneet" },
  { id: "maatalouskoneet", label: "Maatalous" },
  { id: "kuorma-autot", label: "Kuorma-autot" },
  { id: "oheislaitteet", label: "Oheislaitteet" },
];

/** Valokuvat yrityksen julkiselta Facebook-sivulta. Kuvatekstissä vain se, mikä kuvassa tai julkaisussa näkyy. */
export const gallery: GalleryItem[] = [
  {
    id: "volvo-l90h-etu",
    category: "tyokoneet",
    categoryLabel: "Työkoneet",
    title: "Volvo L90H -pyöräkuormaaja",
    src: "/kuvat/volvo-l90h-etu.jpg",
    width: 1200,
    height: 1600,
    alt: "Keltainen Volvo L90H -pyöräkuormaaja edestä hallissa. Edessä on harmaa työlaitteen kiinnike.",
    caption: "Hallikuva edestä. Kuvasarja on julkaistu sijainnilla Piikkiö.",
    home: true,
  },
  {
    id: "volvo-l90h-taka",
    category: "tyokoneet",
    categoryLabel: "Työkoneet",
    title: "Volvo L90H takaa",
    src: "/kuvat/volvo-l90h-taka.jpg",
    width: 1200,
    height: 1600,
    alt: "Keltainen Volvo L90H -pyöräkuormaaja takaviistosta hallissa. Ohjaamon lasit on peitetty suojapaperilla.",
    caption: "Takaviisto kuva samasta pyöräkuormaajasta.",
  },
  {
    id: "volvo-l90h-halli",
    category: "tyokoneet",
    categoryLabel: "Työkoneet",
    title: "Volvo L90H hallissa",
    src: "/kuvat/volvo-l90h-halli.jpg",
    width: 1200,
    height: 1600,
    alt: "Volvo-pyöräkuormaaja hallissa sivusta. Ohjaamon lasit on peitetty suojapaperilla.",
    caption: "Sivukuva hallin nosto-oven edessä.",
  },
  {
    id: "ponsse-elephant",
    category: "tyokoneet",
    categoryLabel: "Työkoneet",
    title: "Ponsse Elephant -kuormatraktori",
    src: "/kuvat/ponsse-elephant.jpg",
    width: 1200,
    height: 1600,
    alt: "Keltamusta Ponsse Elephant -kuormatraktori hallissa. Ohjaamon lasit on peitetty suojapaperilla.",
    caption: "Kuormatraktori hallissa.",
    home: true,
  },
  {
    id: "ponsse-konepeitto",
    category: "tyokoneet",
    categoryLabel: "Työkoneet",
    title: "Kuormatraktorin konepeitto",
    src: "/kuvat/ponsse-konepeitto.jpg",
    width: 1200,
    height: 1600,
    alt: "Ponsse-kuormatraktorin kiiltävä keltainen konepeitto ja keltaiset askelmat lähikuvassa.",
    caption: "Lähikuva konepeitosta ja askelmista.",
  },
  {
    id: "hyundai-215",
    category: "tyokoneet",
    categoryLabel: "Työkoneet",
    title: "Hyundai 215 -kaivinkone",
    src: "/kuvat/hyundai-215.jpg",
    width: 1200,
    height: 1600,
    alt: "Keltaisen Hyundai 215 -kaivinkoneen ohjaamo. Ikkunat on peitetty suojapaperilla, ja telat näkyvät alareunassa.",
    caption: "Kaivinkoneen ohjaamo hallissa.",
    home: true,
  },
  {
    id: "ponsse-sailio",
    category: "oheislaitteet",
    categoryLabel: "Oheislaitteet",
    title: "Ponsse-säiliö",
    src: "/kuvat/ponsse-sailio.jpg",
    width: 1200,
    height: 1600,
    alt: "Musta kiiltävä Ponsse-säiliö keltaisilla raidoilla hallin lattialla. Kyljessä lukee Ponsse ja Flexk by Finncont.",
    caption: "Säiliö hallissa. Kuva on julkaistu Facebookissa, sijainti Kuopio.",
  },
  {
    id: "fendt-traktori",
    category: "maatalouskoneet",
    categoryLabel: "Maatalous",
    title: "Fendt-traktori",
    src: "/kuvat/fendt-traktori.jpg",
    width: 1200,
    height: 1600,
    alt: "Vihreä Fendt-traktori punaisilla vanteilla hallissa. Konepeitossa lukee Fendt, ja ohjaamon lasit on peitetty suojapaperilla.",
    caption: "Traktori hallissa. Kuva on julkaistu Facebookissa, sijainti Messukeskus Helsingissä.",
  },
  {
    id: "volvo-fh16",
    category: "kuorma-autot",
    categoryLabel: "Kuorma-autot",
    title: "Volvo FH16 -kuorma-auto",
    src: "/kuvat/volvo-fh16.jpg",
    width: 720,
    height: 960,
    alt: "Keltaisen Volvo FH16 -kuorma-auton maski ja kiiltävä kylkipaneeli lähikuvassa.",
    caption: "Kuorma-auton kylki lähikuvassa. Sama kuva on yrityksen Facebook-kansikuvana.",
    home: true,
  },
];
