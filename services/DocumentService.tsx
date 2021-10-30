import * as jsyaml from "js-yaml";
import axios from "axios";

export class DocumentService {
  ENDPOINT =
    "https://ia902608.us.archive.org/BookReader/BookReaderImages.php?zip=/18/items/TheVoynichManuscript/Voynich_Manuscript_jp2.zip&file=Voynich_Manuscript_jp2";

  ENDPOINT_YAML = "https://voynich-app.s3.eu-central-1.amazonaws.com/all.yaml";
  constructor() {}

  async manuscript(): Promise<Document> {
    const axiosRes = await axios.get(this.ENDPOINT_YAML);
    const doc = await axiosRes.data;
    const manuscript = jsyaml.load(String(doc)) as Document;
    console.log("Manuskript heruntergeladen")
    return manuscript;
  }

  document() {
    const pages = [];
    for (let i = 0; i < 100; i++) {
      pages[i] = this.page(i);
    }

    pages[0].quire = 1;
    pages[0].quirecolumn = 0;
    pages[0].quirerow = 0;

    pages[1].quire = 1;
    pages[1].quirecolumn = 0;
    pages[1].quirerow = 1;

    pages[2].quire = 1;
    pages[2].quirecolumn = 1;
    pages[2].quirerow = 1;

    pages[3].quire = 2;
    pages[3].quirecolumn = 0;
    pages[3].quirerow = 0;

    pages[4].quire = 2;
    pages[4].quirecolumn = 1;
    pages[4].quirerow = 0;

    pages[5].quire = 2;
    pages[5].quirecolumn = 2;
    pages[5].quirerow = 0;

    return {
      title: "Voynich manuscript",
      amountOfPages: 122,
      pages,
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
      name: "testname",
      image:{fullsize: "", thumb: "", width: 1, height: 1},
      quireImageUrl: `${this.ENDPOINT}/Voynich_Manuscript_${num}.jp2&id=TheVoynichManuscript&scale=2&rotate=0}`,
      pageTitle: "f" + (index + 1) + "v",
      pagePosition: "Folie " + index + ", rechte Seite (F20 V)",
      quire: 3,
      quirecolumn: 1,
      quirerow: 1,
      chapter: "Pflanzen",
      transliteration: `DSFDA DSFASD DFASFA DF
        DFSFDAS
        DDFA DFADS DFAD`,
      stats: {lines:3, paragraphs: 1, illustrations: false},
    };
  }

  zeroPad(num: number) {
    return String(num).padStart(4, "0");
  }
}

export type PageProps = {
  name: string;
  image: {fullsize: string, thumb: string, width: number, height: number};
  quireImageUrl: string;
  pageTitle: string;
  pagePosition: string;
  quire: number;
  quirecolumn: number;
  quirerow: number;
  chapter: string;
  transliteration: string;
  stats: PageStatProps;
};

export type PageStatProps = {
  lines: number;
  paragraphs: number;
  illustrations: boolean;
};

export type CharDistribution = {
  [key: string]: number;
};

export type Document = {
  name: string;
  amountOfPages: number;
  pages: Array<PageProps>;
};
