import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import TRANSLATIONS_DE from "./de.json";
import * as TRANSLATIONS_DE from "./de.json";
import * as TRANSLATIONS_EN from "./en.json";
import * as TRANSLATIONS_FR from "./fr.json";

const resources = {
  en: {
    translation: TRANSLATIONS_EN
  },
  de: {
    translation: TRANSLATIONS_DE
  },
  fr: {
    translation: TRANSLATIONS_FR
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  lng: "fr"
});

export default i18n;
