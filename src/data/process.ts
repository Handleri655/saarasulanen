export const steps = [
  {
    n: "01",
    title: "Yhteydenotto",
    text: "Soita tai lähetä tarjouspyyntö. Kerro kaluston tyyppi, merkki ja paikkakunta.",
  },
  {
    n: "02",
    title: "Kartoitus ja tarjous",
    text: "Arvioimme kohteen tietojen ja kuvien perusteella. Saat hinnan ennen kuin työhön ryhdytään.",
  },
  {
    n: "03",
    title: "Pesu ja esikäsittely",
    text: "Pinta pestään ja valmistellaan, jotta pinnoite tarttuu. [TÄYDENNÄ: esikäsittelyn tarkka kuvaus]",
  },
  {
    n: "04",
    title: "Pinnoitus",
    text: "Pinnoite levitetään esikäsitellylle pinnalle ja sen annetaan kiinnittyä.",
  },
  {
    n: "05",
    title: "Luovutus ja hoito-ohjeet",
    text: "Saat koneen takaisin sekä ohjeet pesuun. [TÄYDENNÄ: kirjallinen hoito-ohje]",
  },
] as const;

export const goals = [
  {
    title: "Suojata omaisuutta",
    text: "Kalusto on investointi. Pinnoituksen tarkoitus on pitää maalipinta paremmassa kunnossa käytön keskellä.",
  },
  {
    title: "Helpottaa puhtaanapitoa",
    text: "Vettähylkivään pintaan lika tarttuu heikommin, joten pesu vie vähemmän aikaa.",
  },
  {
    title: "Lisätä työmukavuutta",
    text: "Tavoitteena on sujuvampi arki: vähemmän hinkkaamista pesupaikalla ja siistimpi kalusto työssä.",
  },
  {
    title: "Säilyttää jälleenmyyntiarvo",
    text: "Huoliteltu maalipinta näkyy, kun kone vaihtaa omistajaa.",
  },
] as const;

export const sharedNotes = {
  surfaces:
    "Pinnoitus tehdään maalipinnalle. [TÄYDENNÄ: pinnoitetaanko myös lasit, vanteet, muoviosat ja ohjaamo]",
  duration:
    "Kesto ja takuu riippuvat tuotteesta, pinnan kunnosta ja käytöstä. [TÄYDENNÄ: kesto vuosina ja takuuehdot]",
  price:
    "Hinta määräytyy koneen koon ja kunnon mukaan. Tarjous annetaan ennen työtä. [TÄYDENNÄ: alkaen-hinnat, jos ne halutaan näkyviin]",
  where:
    "Palvelemme ympäri Suomen. [TÄYDENNÄ: työ Perniön toimipisteessä, asiakkaan luona vai molemmissa]",
  products:
    "Käytössämme on markkinoiden parhaat tuotteet sekä työvälineet. [TÄYDENNÄ: tuotemerkit ja mahdolliset sertifikaatit]",
  vehicles:
    "[TÄYDENNÄ: tehdäänkö myös henkilöautoja, veneitä tai matkailuautoja]",
} as const;
