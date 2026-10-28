export interface Service {
  slug: string;
  nav: string;
  h1: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  challenge: string;
  benefits: string[];
  machines: string[];
  machineGap: string;
}

export const services: Service[] = [
  {
    slug: "tyokoneet",
    nav: "Työkoneet",
    h1: "Työkoneiden keraaminen pinnoitus",
    lead: "Kaivinkoneet, kuormaajat, dumpperit ja metsäkoneet. Pinnoituksen idea on, että savi, betonipöly ja kiviroiskeet irtoavat pesussa helpommin.",
    metaTitle: "Työkoneiden keraaminen pinnoitus | Saara Sulanen",
    metaDescription:
      "Kaivinkoneiden, pyöräkuormaajien, dumppereiden ja metsäkoneiden keraaminen pinnoitus. Lika irtoaa helpommin. Palvelu koko Suomessa.",
    challenge:
      "Työkoneet elävät savessa, betonipölyssä ja kiviroiskeissa. Lika tarttuu maalipintaan, ja pesu syö aikaa työmaalta. Pinnoituksen idea on, että sama lika irtoaa helpommin ja maalipinta pysyy siistimpänä.",
    benefits: [
      "Savi, betoni ja kivipöly on helpompi pestä irti",
      "Vähemmän aikaa pesupaikalla, enemmän aikaa työmaalla",
      "Siistimpi pinta, kun kone luovutetaan tai vaihtaa omistajaa",
      "Sama työ onnistuu myös harvestereille ja kuormatraktoreille",
    ],
    machines: ["Kaivinkoneet", "Pyöräkuormaajat", "Dumpperit", "Harvesterit ja kuormatraktorit"],
    machineGap: "rajataanko jokin konetyyppi pois",
  },
  {
    slug: "maatalouskoneet",
    nav: "Maatalouskoneet",
    h1: "Maatalouskoneiden keraaminen pinnoitus",
    lead: "Traktorit, puimurit, perävaunut ja työlaitteet. Lanta, kalkki ja lannoitteet eivät tartu yhtä tiukasti, kun pinta hylkii vettä ja likaa.",
    metaTitle: "Maatalouskoneiden keraaminen pinnoitus | Saara Sulanen",
    metaDescription:
      "Traktoreiden, puimureiden ja perävaunujen keraaminen pinnoitus. Lanta, kalkki ja lannoitteet peseytyvät helpommin. Pyydä tarjous.",
    challenge:
      "Traktori, puimuri ja perävaunu keräävät lantaa, kalkkia, lannoitetta ja pölyä. Sesongin keskellä pesuun on vähän aikaa. Pinnoite tähtää siihen, että tämä lika ei tartu yhtä tiukasti ja kalusto lähtee pesusta nopeammin.",
    benefits: [
      "Lanta, kalkki ja lannoitejäämät irtoavat helpommin",
      "Nopeampi pesu silloin, kun sesonki ei anna odottaa",
      "Siistimpi kalusto, kun kone jää tilalle tai lähtee vaihtoon",
      "Työlaitteet voidaan pinnoittaa samalla logiikalla kuin vetokone",
    ],
    machines: ["Traktorit", "Leikkuupuimurit", "Perävaunut", "Maatalouden työlaitteet"],
    machineGap: "tarkenna maatalouskalusto, jota pinnoitetaan",
  },
  {
    slug: "kuorma-autot",
    nav: "Kuorma-autot",
    h1: "Kuorma-autojen ja raskaan kaluston keraaminen pinnoitus",
    lead: "Tiesuola, piki ja kesän hyönteiset irtoavat helpommin. Huoliteltu maalipinta näkyy liikenteessä ja vaihtoautona.",
    metaTitle: "Kuorma-autojen keraaminen pinnoitus | Saara Sulanen",
    metaDescription:
      "Kuorma-autojen ja raskaan kaluston keraaminen pinnoitus. Tiesuola, piki ja hyönteiset irtoavat helpommin. Toimipaikka Perniössä, palvelu koko Suomessa.",
    challenge:
      "Kuorma-auto kerää tiesuolaa, pikeä ja kesällä hyönteisiä. Kilometrejä tulee paljon, ja auto on yrityksen käyntikortti. Pinnoite helpottaa pesua ja auttaa pitämään maalipinnan siistimpänä myös vaihtoa ajatellen.",
    benefits: [
      "Tiesuola ja piki lähtevät pesussa helpommin",
      "Hyönteistahrat on helpompi irrottaa ennen kuin ne palavat kiinni",
      "Yhtenäisempi ilme, kun kalustossa on useita autoja",
      "Huoliteltu pinta tukee jälleenmyyntiarvoa",
    ],
    machines: ["Kuorma-autot", "Ajoneuvoyhdistelmät", "Raskaan kaluston perävaunut"],
    machineGap: "tehdäänkö myös pakettiautoja",
  },
  {
    slug: "oheislaitteet",
    nav: "Oheislaitteet",
    h1: "Oheislaitteiden keraaminen pinnoitus",
    lead: "Kauhat, aurat ja muut lisälaitteet kolhiintuvat käytössä. Pinnoite ei korvaa kulutuslevyä, mutta näkyvä maalipinta voidaan suojata ja pesu helpottuu.",
    metaTitle: "Oheislaitteiden keraaminen pinnoitus | Saara Sulanen",
    metaDescription:
      "Oheislaitteiden ja lisävarusteiden keraaminen pinnoitus. Suojaa maalipintaa ja helpota pesua. Pinnoite ei korvaa kulutusosia. Pyydä tarjous.",
    challenge:
      "Kauha, aura tai työkoneen lisälaite ei säästy kolhuilta. Pinnoite ei ole panssari eikä se korvaa kulutusosaa. Sillä voi suojata näkyvän maalipinnan, jotta laite pysyy siistimpänä ja pesu on helpompaa.",
    benefits: [
      "Maalipinta pysyy siistimpänä varastossa ja työmaalla",
      "Pesu on helpompaa myös pienten laitteiden kanssa",
      "Sama suoja-ajatus kuin koneessa, johon laite kytketään",
      "Ei ole tarkoitettu kulutuspinnan tai iskun suojaksi",
    ],
    machines: ["Kauhat", "Aurat", "Haarukat", "Muut näkyvät lisälaitteet"],
    machineGap: "mitä oheislaitteita pinnoitetaan",
  },
];

export function servicePath(slug: string) {
  return `/palvelut/#${slug}`;
}
