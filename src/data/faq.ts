export interface Faq {
  q: string;
  a: string;
  gap?: string;
}

export const faqs: Faq[] = [
  {
    q: "Kauanko keraaminen pinnoitus kestää?",
    a: "Kesto riippuu pinnoitteesta, pinnan kunnosta, koneen käytöstä ja pesutavoista. Vahaa pidempi kesto on pinnoitteen idea. Vuosimäärää ei ilmoiteta tällä sivulla, ennen kuin tuote ja ehdot on vahvistettu.",
    gap: "kesto vuosina",
  },
  {
    q: "Kauanko kone on pois käytöstä?",
    a: "Kone on pois käytöstä pesun, esikäsittelyn, pinnoituksen ja kiinnittymisen ajan. Aika vaihtelee kohteen koon ja kunnon mukaan. Tarkan arvion saat tarjouksen yhteydessä.",
    gap: "tyypillinen kesto tunteina tai päivinä",
  },
  {
    q: "Voiko käytetyn koneen pinnoittaa?",
    a: "Voi, jos maalipinta on ehjä ja puhdistettavissa. Irtoava maali, ruoste ja syvät vauriot katsotaan tarjouksen yhteydessä. Pinnoite ei täytä naarmuja eikä korvaa maalausta.",
    gap: "tehdäänkö maalikorjauksia ennen pinnoitusta",
  },
  {
    q: "Miten pinnoitettua konetta pestään?",
    a: "Pese miedolla aineella ja vältä hankaavia sieniä sekä voimakkaita liuottimia. Älä pese pintaa heti työn jälkeen, ennen kuin pinnoite on saanut kiinnittyä. Säännöllinen pesu kuuluu asiaan myös pinnoituksen jälkeen.",
    gap: "yrityksen hoito-ohje ja aika, jonka jälkeen pinnan saa pestä",
  },
  {
    q: "Tuletteko paikan päälle?",
    a: "Kyllä. Pinnoitukset tehdään asiakkaan tai koneliikkeen tiloissa ympäri Suomen.",
  },
  {
    q: "Mitä pinnoitus maksaa?",
    a: "Hinta määräytyy koneen koon, pinnan kunnon ja työn laajuuden mukaan. Julkista hinnastoa ei ole. Pyydä tarjous, niin saat hinnan ennen päätöstä.",
    gap: "alkaen-hinnat, jos ne halutaan näkyviin",
  },
  {
    q: "Onko pinnoituksella takuu?",
    a: "Takuusta kerrotaan tarjouksessa, kun tuote ja ehdot on vahvistettu. Tällä sivulla ei ilmoiteta takuuaikaa.",
    gap: "takuun pituus ja ehdot",
  },
  {
    q: "Mitä pintoja voidaan pinnoittaa?",
    a: "Työn kohde on koneen maalipinta. Lasit, muovit, vanteet ja ohjaamon pinnat riippuvat siitä, mille tuotteelle pinta sopii.",
    gap: "maalipinnat, lasit, vanteet, muovit ja ohjaamo – mitä näistä tehdään",
  },
  {
    q: "Kestääkö pinnoite tiesuolaa ja lantaa?",
    a: "Pinnoite helpottaa tiesuolan, pikin, lannan, kalkin ja lannoitejäämien pesua, koska lika tarttuu heikommin. Se ei tee pinnasta immuunia kemikaaleille eikä korvaa pesua. Pitkään pintaan jätetty vahva aine voi vahingoittaa mitä tahansa maalipintaa.",
  },
  {
    q: "Teettekö henkilöautoja, veneitä tai matkailuautoja?",
    a: "Yritys on erikoistunut työkoneisiin, raskaaseen kalustoon ja oheislaitteisiin. Muita kohteita ei luvata tällä sivulla, ennen kuin palveluvalikoima on vahvistettu.",
    gap: "tehdäänkö henkilöautoja, veneitä tai matkailuautoja",
  },
];
