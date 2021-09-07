export class DocumentService {
  ENDPOINT =
    "https://ia902608.us.archive.org/BookReader/BookReaderImages.php?zip=/18/items/TheVoynichManuscript/Voynich_Manuscript_jp2.zip&file=Voynich_Manuscript_jp2";

  constructor() {}

  document() {
    return {
      title: "Voynich manuscript",
      amountOfPages: 122,
      stats: {
        amountOfChars: 22120,
        amountOfWords: 2212,
        charDistribution: { a: 512, b: 330, c: 11, d: 843 },
      },
    };
  }

  page(index: number): PageProps {
    const num = this.zeroPad(index);
    return {
      imageUrl: `${this.ENDPOINT}/Voynich_Manuscript_${num}.jp2&id=TheVoynichManuscript&scale=2&rotate=0}`,
      quireImageUrl: `${this.ENDPOINT}/Voynich_Manuscript_${num}.jp2&id=TheVoynichManuscript&scale=2&rotate=0}`,
      pageTitle: "f20v",
      pagePosition: "Folie 20, rechte Seite (F20 V)",
      quire: 3,
      chapter: "Pflanzen",
      transliteration: `DSFDA DSFASD DFASFA DF
        DFSFDAS
        DDFA DFADS DFAD`,
      stats: {
        amountOfChars: 120,
        amountOfWords: 12,
        charDistribution: { a: 12, b: 30, c: 1, d: 43 },
      },
    };
  }

  zeroPad(num: number) {
    return String(num).padStart(4, "0");
  }
}

export type PageProps = {
  imageUrl: string;
  quireImageUrl: string;
  pageTitle: string;
  pagePosition: string;
  quire: number;
  chapter: string;
  transliteration: string;
  stats: PageStatProps;
};

export type PageStatProps = {
  amountOfChars: number;
  amountOfWords: number;
  charDistribution: CharDistribution;
};

export type CharDistribution = {
  [key: string]: number;
};
